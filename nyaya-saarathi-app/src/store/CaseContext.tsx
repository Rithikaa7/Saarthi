"use client";
import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';
import { casesApi } from '@/lib/casesApi';
import { intakeApi } from '@/lib/intakeApi';
import { pathwayApi } from '@/lib/pathwayApi';
import { documentsApi } from '@/lib/documentsApi';
import { evidenceApi } from '@/lib/evidenceApi';
import type { ApiResult, RequirementResponse } from '@/lib/api.types';

// ─── Sub-types ────────────────────────────────────────────────────────────

export type FileItem = {
  name: string;
  status: 'reading' | 'done' | 'error';
  detailsFound: number;
  pages?: number;
};

export type Requirement = {
  id: string;
  title: string;
  status: string;
  docs: number;
  description?: string;
  needsHuman?: boolean;
};

/** Which mode the app is running in — controls banner and API behaviour. */
export type AppMode = 'demo' | 'live';

// ─── State interface ───────────────────────────────────────────────────────

interface CaseState {
  // Identity
  caseId: string | null;
  mode: AppMode;
  apiError: string | null;
  isLoading: boolean;

  // Localisation
  lang: 'EN' | 'TA';
  setLang: (lang: 'EN' | 'TA') => void;

  // Consent + case creation
  hasConsented: boolean;
  createCase: (lang: 'EN' | 'TA') => Promise<ApiResult<{ id: string }>>;

  // Story / intake
  story: string;
  setStory: (val: string) => void;
  saveStory: () => Promise<void>;

  // Pathway + downstream
  pathway: Record<string, string>;
  setPathway: (val: Record<string, string>) => void;
  generatePathwayAndRequirements: () => Promise<void>;
  
  files: FileItem[];
  setFiles: (files: FileItem[]) => void;
  addFile: (file: FileItem) => void;
  uploadDocument: (file: File) => Promise<void>;
  
  requirements: Requirement[];
  setRequirements: (reqs: Requirement[]) => void;
  
  conflicts: Record<string, unknown>[];
  setConflicts: (val: Record<string, unknown>[]) => void;
  questions: Record<string, unknown>[];
  setQuestions: (val: Record<string, unknown>[]) => void;
  answered: Record<string, unknown>[];
  setAnswered: (val: Record<string, unknown>[]) => void;
  
  extractAndLoadEvidence: () => Promise<void>;
  submitAnswer: (questionId: string, answer: string) => Promise<void>;
  
  summary: string;
  setSummary: (val: string) => void;
}

// ─── Default (never used — always overridden by Provider) ─────────────────

const CaseContext = createContext<CaseState>({} as CaseState);

// ─── Provider ─────────────────────────────────────────────────────────────

export const CaseProvider = ({ children }: { children: ReactNode }) => {
  const mode: AppMode =
    process.env.NEXT_PUBLIC_DEMO_MODE === 'true' ? 'demo' : 'live';

  const [caseId, setCaseId] = useState<string | null>(null);
  const [apiError, setApiError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [lang, setLang] = useState<'EN' | 'TA'>('EN');
  const [hasConsented, setHasConsented] = useState(false);
  const [story, setStory] = useState('');
  const [summary, setSummary] = useState(
    'My employer has not paid my salary for three months. I started working in January 2026. The employment letter states a start date of 1 Feb 2026. My agreed pay was 50,000 per month.',
  );

  const [pathway, setPathway] = useState<Record<string, string>>({
    name: 'Unpaid Wages',
    description: 'Preparing to approach legal aid or labour authority.',
    authority: 'Labour Authority',
    version: 'Pack v1.0.0',
    date: 'Oct 2026',
    reviewStatus: 'Reviewed by NALSA standards',
  });

  const [files, setFiles] = useState<FileItem[]>([
    { name: 'employment_letter.pdf', status: 'done', detailsFound: 4, pages: 2 },
    { name: 'whatsapp_messages.txt', status: 'reading', detailsFound: 0, pages: 1 },
  ]);

  const [requirements, setRequirements] = useState<Requirement[]>([
    { id: 'REQ-01', title: 'Who you worked for', description: 'The employer name and how to identify them.', status: 'found', docs: 2 },
    { id: 'REQ-02', title: 'When the work started', description: 'The start date of the work.', status: 'clarify', docs: 1 },
    { id: 'REQ-03', title: 'Agreed pay', description: 'The salary that was agreed.', status: 'found', docs: 1 },
    { id: 'REQ-04', title: 'Period for which pay was not received', description: 'The months and amount involved.', status: 'missing', docs: 0 },
    { id: 'REQ-05', title: 'Records of payment discussions', description: 'Messages or records about payment promises.', status: 'human', docs: 1, needsHuman: true },
  ]);

  const [conflicts, setConflicts] = useState<Record<string, unknown>[]>([{
    id: 'demo-conflict-1',
    case_id: 'demo-case',
    fact_type: 'Start Date',
    description: 'Your story says January, but the employment letter says 1 February 2026.',
    resolved: false,
  }]);

  const [questions, setQuestions] = useState<Record<string, unknown>[]>([{
    id: 'demo-q-1',
    case_id: 'demo-case',
    title: 'When did your work start?',
    reason: 'We found two different dates for this requirement.',
    options: ['January 2026', '1 Feb 2026'],
    answered: false,
  }]);

  const [answered, setAnswered] = useState<Record<string, unknown>[]>([]);

  // ─── Actions that talk to the API ───────────────────────────────────────

  const createCase = useCallback(
    async (selectedLang: 'EN' | 'TA'): Promise<ApiResult<{ id: string }>> => {
      setIsLoading(true);
      setApiError(null);
      const result = await casesApi.create({
        lang: selectedLang,
        consent_no_legal_advice: true,
        consent_ai_processing: true,
      });
      setIsLoading(false);

      if (result.ok) {
        setCaseId(result.data.id);
        setLang(selectedLang);
        setHasConsented(true);
        return { ok: true, data: { id: result.data.id } };
      } else {
        setApiError(result.message);
        return result;
      }
    },
    [],
  );

  const saveStory = useCallback(async () => {
    if (!caseId) return;
    setIsLoading(true);
    setApiError(null);
    const result = await intakeApi.saveStory(caseId, { story_text: story });
    setIsLoading(false);
    if (!result.ok) {
      setApiError(result.message);
    }
  }, [caseId, story]);

  const addFile = useCallback(
    (file: FileItem) => setFiles((prev) => [...prev, file]),
    [],
  );

  const generatePathwayAndRequirements = useCallback(async () => {
    if (!caseId) return;
    setIsLoading(true);
    setApiError(null);
    
    const pathRes = await pathwayApi.generatePathway(caseId);
    if (!pathRes.ok) {
      setApiError(pathRes.message);
      setIsLoading(false);
      return;
    }
    
    setPathway({
      name: pathRes.data.title,
      description: pathRes.data.description,
      authority: 'Labour Authority',
      version: 'Pack v1.0.0',
      date: new Date().toLocaleDateString(),
      reviewStatus: 'Needs Review',
    });

    const reqRes = await pathwayApi.getRequirements(caseId);
    if (reqRes.ok) {
      setRequirements(reqRes.data.map((r: RequirementResponse) => ({
        id: r.id,
        title: r.title,
        description: r.description,
        status: r.status.toLowerCase(),
        docs: 0,
        needsHuman: false,
      })));
    } else {
      setApiError(reqRes.message);
    }
    
    setIsLoading(false);
  }, [caseId]);

  const uploadDocument = useCallback(async (file: File) => {
    if (!caseId) return;
    setIsLoading(true);
    setApiError(null);
    
    const fileItem: FileItem = { name: file.name, status: 'reading', detailsFound: 0 };
    setFiles(prev => [...prev, fileItem]);

    const res = await documentsApi.uploadDocument(caseId, file);
    if (res.ok) {
      setFiles(prev => prev.map(f => f.name === file.name ? { ...f, status: 'done', detailsFound: 2 } : f));
    } else {
      setApiError(res.message);
      setFiles(prev => prev.map(f => f.name === file.name ? { ...f, status: 'error' } : f));
    }
    setIsLoading(false);
  }, [caseId]);

  const extractAndLoadEvidence = useCallback(async () => {
    if (!caseId) return;
    setIsLoading(true);
    setApiError(null);
    
    const extRes = await evidenceApi.extractEvidence(caseId);
    if (!extRes.ok) {
      setApiError(extRes.message);
      setIsLoading(false);
      return;
    }
    
    const mapRes = await evidenceApi.getEvidenceMap(caseId);
    if (mapRes.ok) {
      const { conflicts: apiConflicts, questions: apiQuestions } = mapRes.data;
      
      setConflicts(apiConflicts.map(c => ({
        id: c.id,
        value: 'Conflicting values',
        origin: 'document',
        verified: false,
        type: c.fact_type,
        description: c.description,
        resolved: c.resolved,
        relations: []
      })));
      
      const unans = apiQuestions.filter(q => !q.answered);
      const ans = apiQuestions.filter(q => q.answered);
      
      setQuestions(unans.map(q => ({
        id: q.id,
        title: q.title,
        why: q.reason,
        evidence: [],
        options: q.options
      })));
      
      setAnswered(ans.map(q => ({
        question: q.title,
        answer: q.answer
      })));
    } else {
      setApiError(mapRes.message);
    }
    setIsLoading(false);
  }, [caseId]);

  const submitAnswer = useCallback(async (questionId: string, answer: string) => {
    if (!caseId) return;
    setIsLoading(true);
    setApiError(null);
    
    const res = await evidenceApi.answerQuestion(caseId, questionId, { answer });
    if (res.ok) {
      // Reload evidence map to get updated conflicts
      await extractAndLoadEvidence();
    } else {
      setApiError(res.message);
    }
    setIsLoading(false);
  }, [caseId, extractAndLoadEvidence]);

  return (
    <CaseContext.Provider
      value={{
        caseId, mode, apiError, isLoading,
        lang, setLang,
        hasConsented, createCase,
        story, setStory, saveStory,
        pathway, setPathway, generatePathwayAndRequirements,
        files, setFiles, addFile, uploadDocument,
        requirements, setRequirements, 
        conflicts, setConflicts, 
        questions, setQuestions, 
        answered, setAnswered,
        extractAndLoadEvidence, submitAnswer,
        summary, setSummary,
      }}
    >
      {children}
    </CaseContext.Provider>
  );
};

export const useCaseStore = () => useContext(CaseContext);
