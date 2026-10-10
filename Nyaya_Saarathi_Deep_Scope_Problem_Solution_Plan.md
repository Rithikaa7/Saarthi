# Nyaya Saarathi — Deep-Scope Problem & Solution Plan

*Prepared 10 October 2026. Companion to the finalized architecture files (Build Guide, Technical Architecture, Full System Design), which remain the source of truth. Nothing here redesigns that stack; where a problem would eventually need a different technology, it is flagged as a future decision, not a change.*

---

## 0. How to read this document

### Evidence labels (used on every claim that matters)

| Label | Meaning |
|---|---|
| **CONFIRMED** | Seen in an official or primary page during this research (URL in section 14). |
| **REPORTED** | Stated by a secondary source (news, explainer, store listing, repo README). |
| **INFERRED** | My reasoning from confirmed facts. Could be wrong. |
| **HYPOTHESIS** | Plausible but untested. Needs interviews or experiments. |
| **NOT FOUND** | Not found in the public material I could open. This does **not** mean the feature does not exist. |
| **UNVERIFIED** | Claimed in a source I could not check, or I could not open the primary. |

### Limits of the research
- No hands-on testing of Nyaya Setu, VANI, LSAMS submission, or any competitor.
- nyayalens.com and nyayasetu.doj.gov.in could not be opened. The doj.gov.in privacy-policy page returned empty content.
- Naming-convention and workflow points in sections 6–9 are domain reasoning. They must be validated with Tamil speakers and legal-aid workers before they are treated as facts.

---

## 1. The problem, stated narrowly

> A first-time legal-aid applicant has an everyday account and scattered, imperfect documents. Before approaching legal aid, they cannot easily see what their documents support, what is missing, unclear or inconsistent, or how to hand it over in a form a human worker can review quickly and trust.

**Not in scope** (do not claim to solve): funding of legal aid, public awareness, court infrastructure, Nyaya Setu uptime, WhatsApp platform choice, gender disparities in help-seeking, shortage of lawyers.

**Boundary (never crossed):** not a lawyer; no personalised legal advice; no eligibility decisions; no outcome prediction; no official submission on the user's behalf; no judgment about who is telling the truth; no judgment that a document is genuine or forged.

---

## 2. Is this worth solving? (honest assessment)

**Supports it**
- CONFIRMED: the LSAMS online form has one free-text "summary of problem" field, a structured dropdown for nature of aid, and ID-oriented document types with PDF-only, 10 MB combined upload.
- CONFIRMED: NALSA says paralegal volunteers can gather information and fill forms for illiterate applicants, and that applications can be made orally.
- CONFIRMED: the decision on an application is due within 7 days (Regulation 7(2)).
- CONFIRMED (analogy, US housing): Stanford/LASSB found staff valued structured intake summaries and wanted key facts confirmed back to the client.

**Weakens it**
- UNVERIFIED: whether incomplete preparation is a major cause of rejection or delay. A pasted analysis claims NALSA keeps no rejection data; I could not find the Lok Sabha answer.
- UNVERIFIED: the biggest barrier may be awareness, not preparation. If so, this serves a downstream slice only.
- INFERRED: government tools are expanding quickly (Nyaya Setu, VANI, DISHA 2.0). Document handling could be added. "A feature nobody has" is not a durable moat.

**Verdict:** worth pursuing as a validated pilot with a falsifiable question — *does a source-linked preparation package measurably help the people who review legal-aid applications?* Not yet justified as a proven solution to access to justice.

**Possible durable value (HYPOTHESIS):** trust, evaluation data, Tamil-first handling, and relationships with intermediaries (paralegal volunteers, village-level entrepreneurs, NGO and law-college clinics).

---

## 3. Competitive landscape (current, evidence-labelled)

### 3.1 Nyaya Setu (government AI assistant)
- CONFIRMED: unveiled at the DISHA programme; official release posted 30 March 2026. A DISHA 2.0 summary citing PIB gives 29 March 2026. Some secondary sources say 1 April. WhatsApp access is reported from January 2026. Use the primary release for any date.
- REPORTED: voice-first, multimodal, 36 text and 23 voice languages, BHASHINI stack, Tele-Law and dispute-resolution guidance.
- REPORTED: information, not personalised legal advice.
- CONFIRMED: Play listing 3.4 stars from 25 reviews, 10K+ downloads, developer CSC e-Governance Services India Ltd. Data safety declares no data collected or shared (developer-declared).
- CONFIRMED (anecdotal, 3 visible reviews): complaints that it did not answer basic questions or did not work.
- NOT FOUND: document upload, fact-to-source linking, discrepancy handling, exportable record.
- UNVERIFIED: the handoff claim that its privacy policy mentions location and microphone.

### 3.2 NALSA / LSAMS / VANI (official route)
- CONFIRMED: oral, paper, email and online applications; online form fields and document types as in section 1; tracking; a "Reminders / Clarifications" form link; nine-language interface including Tamil.
- CONFIRMED: eligibility category list includes "Industrial Workmen". Authority must be satisfied there is a genuine case (Section 13(1)). An income affidavit is generally sufficient unless doubted.
- CONFIRMED: VANI, an NIC multilingual chatbot framework with human hand-off, is embedded across NALSA's site.
- CONFIRMED: NALSA pages disagree on income limits (homepage text says ₹1,00,000 "or as notified"; legal-aid page lists ₹3,00,000 for Tamil Nadu).
- NOT FOUND: what the Reminders / Clarifications form does (not opened); what VANI does with uploaded documents.
- NOT FOUND: an official per-dispute evidence checklist (e.g. unpaid wages) on the pages reviewed.

### 3.3 Official eCourts
- CONFIRMED: app sections CNR search, case status, cause list, calendar, My Cases (version 4.0.1, May 2026 per a mirror site).
- CONFIRMED: an official manual lists the app in six Indian languages. A pasted analysis claiming English/Hindi only is therefore at best about the portal, not the app.
- INFERRED: built for existing cases; irrelevant to pre-litigation preparation.

### 3.4 eCourtsIndia (private, not government)
- REPORTED: AI Clerk, document analysis, document vault, API and MCP server, 27.9 crore+ records, lawyer-oriented, incorporated 2026.
- UNVERIFIED: the disclaimer wording in the handoff.

### 3.5 "NyayaLens" family
- CONFIRMED: at least ten unrelated open-source hackathon repositories share the name; none verified as the nyayalens.com in the handoff.
- REPORTED (README level): page/section/quote citations, "not found in document" fallbacks, timelines, checklists separating document-derived from general suggestions, Aadhaar/PAN masking, offline local-model operation, lawyer-ready questions.
- INFERRED: mostly single-document contract or notice comprehension. I did not see user-account-versus-documents conflict handling or separate clarification records in the README excerpts read; full repos not audited.
- Consequence: source-linked answers alone are not a differentiator. Several repos called "NyayaSetu" also exist, so naming collides with the official product.

### 3.6 Commercial and academic analogues
- REPORTED: VIDIZMO (multi-format evidence with citations and contradiction queries), AI.Law ("Evidence War Room", inconsistency finders; page is old), immigration platforms flagging missing client documents, Darrow/MyCase-style evidence organisation. All practitioner-facing, paid, largely US.
- CONFIRMED: Stanford/LASSB AI intake agent, a legal-aid intake chat producing staff summaries. Findings: redundant questions, confusion with multi-issue stories, a missed secondary issue, limited legal knowledge, content-filter refusals risk, integration difficulty; human review kept; transcript retained for accountability. 16 test scenarios, so accuracy figures are indicative.
- CONFIRMED: Illinois Legal Aid warns that AI tools sometimes invent facts, cases and quotes.

### 3.7 Claim you can defensibly make
"We did not find an applicant-facing tool combining source-linked facts, requirement mapping, neutral gap questions, preserved history and a reviewable export for Indian legal aid. Our review was limited to public material and no hands-on testing." Do **not** say unique, first, or solves access to justice.

---

## 4. Assessment of the pasted "drawbacks" analysis

| Claim | My status |
|---|---|
| Nyaya Setu errors at WhatsApp launch | REPORTED by that analysis; I did not independently confirm the quotes |
| Play reviews: "not working", poor answers | CONFIRMED (two of the three reviews cited) |
| GPS-permission complaint review | UNVERIFIED (not among reviews I saw) |
| eCourts only English and Hindi | CONTRADICTED for the app (six languages per official manual) |
| Phase III disbursement figures, budget cut | UNVERIFIED |
| Coimbatore e-filing report; e-Sewa Kendra staffing | UNVERIFIED |
| NALSA keeps no rejection data | UNVERIFIED; central to the "is it worthy" question |
| UNDP 80% unawareness; 38% PLV decline; 0.49% budget | UNVERIFIED |
| "Translation burden" | INFERRED (self-labelled), consistent with the form structure |

Open the primary source (Lok Sabha/Rajya Sabha answers, PIB, UNDP) before any figure appears in a pitch or paper.

---

## 5. Problem catalogue

Phases: **P0** validate · **P1** core engine · **P2** evidence reality · **P3** trust and hardening · **P4** handoff pilot · **P5** intermediary and ecosystem.

### Part A — Core problems

#### A1. Everyday account vs structured data (P1)
- **Evidence:** INFERRED from the single free-text field.
- **Solution:** store the original story verbatim as a `user_statement`; extract fixed slots (parties, opposite party, start/end date, amounts, months unpaid, promises, events) each pointing to its source sentence; show a plain-language readback with an edit control on every slot; keep any English working copy of Tamil text linked and labelled "translated".
- **Safeguards:** deterministic parsing for dates and numbers; no automatic translation of names, dates, amounts.
- **Test:** 30–50 synthetic bilingual stories with known answers; slot accuracy; readback edit rate.

#### A2. Facts not linked to evidence (P1)
- **Evidence:** CONFIRMED form limitation.
- **Solution:** per-page text storage; schema-validated extraction where each fact carries value, document, page, exact excerpt, type; **grounding check in plain code** (excerpt must appear in page text; value must appear in excerpt after normalisation; otherwise `unverified`); independent regex pass for dates and amounts compared with model output; review screen with highlighted excerpt and accept / correct / reject.
- **Safeguards:** unreadable pages fail loudly with a manual-entry route.
- **Test:** ungrounded-fact rate; field-level precision/recall; wrong-amount rate; set the pass bar before testing (suggestion: nothing ungrounded reaches an export).

#### A3. Provenance and immutable history (P1)
- **Solution:** append-only records. Origins: user statement, document text, AI-extracted, user clarification, human-verified (only after a real reviewer signs off in the app). Corrections add a record with `supersedes_id`. "Current view" and "What changed?" are computed from the log.
- **Test:** replay script proving no original text ever changed.

#### A4. Conflicts flagged but not resolved (P1)
- **Solution:** compare only like with like (slot types). Statuses: `not_provided`, `not_found_in_supplied_files`, `unclear`, `potential_conflict`, `clarified`, `unresolved`. Templated neutral questions with options (statement value / document value / both right for different things / don't remember / other). An LLM may reword only if a lint confirms no leading or judgmental terms. Answers are new records; the tool never picks a winner.
- **Test:** two raters score neutrality; track false and missed conflicts.

#### A5. Checklist that looks official but isn't (P1–P3)
- **Solution:** two versioned packs. **Layer A:** the real LSAMS fields (authority, nature of aid, summary, personal details, eligibility category, opposite party, attachments). **Layer B:** dispute-evidence items, each with source URL, date checked, jurisdiction, scope, and a `verified` flag; unsourced items show "commonly requested, unverified".
- **Sourcing to do:** read the NALSA scheme for unorganised-sector workers (2015) and the relevant state labour-department complaint process; I have not read either.
- **Safeguard:** never imply eligibility (see S13, S16).

#### A6. Output not reviewable (P1)
- **Solution:** export = short summary separated by origin; evidence index (document, page, excerpt); checklist with statuses and unresolved items; **form-shaped sheet** mapped to LSAMS fields with "not provided" where empty; one consolidated PDF within the 10 MB PDF-only limit alongside the ZIP.
- **Validation before export:** every reference resolves to a real page; summary and index agree; unresolved items stay labelled; `unverified` facts are blocked or visibly marked.
- **Test:** legal-aid worker compares packages with and without the tool.

#### A7. AI errors and outages (P1, P3)
- **Solution:** deterministic mock mode; bounded retries then explicit failure; pinned model version; regression set so a model change does not silently alter results.

#### A8. Privacy (P1, P3)
- **Solution:** consent screen; delete-session; no raw documents or secrets in logs; explicit disclosure when external AI is used ("minimised and disclosed", not "private"); ID-number masking before external calls unless needed; offline option plausible (another repo runs a local model with no internet) but Tamil legal-document quality is untested.
- **To do:** obtain qualified advice on obligations under India's data-protection law; I have not verified its requirements.

### Part B — India- and Tamil-specific problems

#### S1. Transliteration and naming mismatches (P2)
- **Problem:** the same person appears as "R. Kumar", "Rajan Kumar", "இராசன் குமார்" or with initials expanded differently across documents. Naming conventions vary by region and family.
- **Evidence:** HYPOTHESIS from domain knowledge; validate with Tamil speakers.
- **Solution:** a name-matching layer with transliteration normalisation and initial-matching; mismatches get `possible_spelling_variant`, never `conflict`; ask the user to confirm "Are these the same person?" with both excerpts shown.
- **Test:** curated name-variant set; false-conflict rate on names.

#### S2. Date, amount and period ambiguity (P1–P2)
- **Problem:** 03/04/2026 can be 3 April or 4 March; Tamil numerals; Indian digit grouping; "salary for March" versus the date it was credited; financial-year versus calendar-year language.
- **Solution:** parse each date with its detected format and confidence; store three separate slot types — `event_date`, `period_covered`, `payment_date`; flag ambiguous formats for confirmation; normalise ₹ amounts including lakh/crore grouping.
- **Test:** adversarial date/amount fixtures; slot-type confusion rate.

#### S3. "Not found" depends on what the document covers (P2)
- **Problem:** a bank statement with no March salary credit does not show March was unpaid; it may be cash, another account, or outside the statement's period.
- **Solution:** record **coverage metadata** for each document (statement period, pages supplied, account holder, institution). Absence statuses become scoped: "No salary credit found in the supplied statement covering 1 Feb–28 Feb". Never write "unpaid" from absence.
- **Test:** fixtures where the statement period excludes the month in question; the tool must not claim absence.

#### S4. Informal-economy evidence (P2–P4)
- **Problem:** many unorganised-sector workers have no appointment letter or payslip; evidence may be UPI history, WhatsApp chats, photographed registers, ID cards, or a co-worker's account. Your demo assumes clean documents.
- **Evidence:** HYPOTHESIS; NALSA lists a scheme for unorganised-sector workers, which suggests relevance.
- **Solution:** add informal evidence types as first-class items (chat export, photo of register, UPI/passbook entries, witness named by user, voice note). Show them as "records people sometimes hold", sourced or labelled unverified, never as a legal requirement.
- **Test:** interviews with workers' clinics and paralegal volunteers on what applicants actually bring.

#### S5. Messy media ingestion (P2)
- **Problem:** the evidence is screenshots, photographed pages out of order, duplicate images, WhatsApp exports, voice notes.
- **Solution:** staged ingestion: dedupe by hash and near-duplicate detection; page-ordering by user with a drag-and-drop; chat-export parser keeping sender and timestamp per message; photo-quality check ("too blurry to read reliably") before extraction; audio kept as an unextracted attachment until a reliable Tamil transcription path is validated.
- **Test:** a noisy corpus (section S19); unreadable-page handling rate.
- **Note:** OCR and audio are beyond the finalized MVP; add only with accuracy measurement.

#### S6. Identifying the opposite party (P2)
- **Problem:** workers often know a shop name or the owner's nickname, not a registered entity, address or phone. The LSAMS form asks for opposite-party details.
- **Solution:** a dedicated "who is the other side" slot group with `trade_name`, `person_name`, `address`, `phone`, `registered_entity_unknown`; show where each value came from; allow "I don't know" without blocking export.

#### S7. Which authority, district and taluk? (P3)
- **Problem:** the form requires authority type, state, district and taluka; users may not know which applies.
- **Evidence:** CONFIRMED fields; INFERRED difficulty.
- **Solution:** suggest a likely authority from the user's stated place, labelled "likely — please confirm with the legal-aid office or 15100"; link to the official directory. Never present the guess as determined.

#### S8. Dates in documents that may be deadlines (P2–P3)
- **Problem:** summons, notices or letters may contain response or hearing dates; missing one can matter.
- **Solution:** detect dates in notice-like documents and surface them in an "Attention dates" panel with the excerpt; say "ask a legal-aid worker what this date means". **No limitation or deadline calculation, no advice.**
- **Test:** recall on synthetic notices; false-alarm rate.

#### S9. Risk of harmonising the story (P1, P3)
- **Problem:** a user shown a discrepancy may "fix" their account to match a document. CONFIRMED: NALSA lists withdrawal of aid where it was obtained by misrepresentation or fraud, and for non-cooperation.
- **Solution:** neutral wording; always include "I don't remember"; display both sources without implying one is expected; allow approximate values; record the original statement permanently; never score or praise "consistent" answers; plain notice that honest uncertainty is acceptable. Have a legal-aid worker review the wording.
- **Test:** user study on whether the question wording changes answers; reviewer rating of leading language.

#### S10. Multiple matters in one story (P2)
- **Evidence:** CONFIRMED by LASSB (confusion when users raised several issues).
- **Solution:** separate "matters"; propose a split ("this seems to mention wages and a rent issue — keep as two packages?") and let the user decide; keep each matter's evidence and checklist isolated.

#### S11. Repeated questions (P2)
- **Evidence:** CONFIRMED by LASSB (redundant questions).
- **Solution:** question selection from slot state only; never re-ask a filled or "declined" slot; per-session question budget; show the user which questions are skippable.

#### S12. Sensitive disclosures and data minimisation (P3)
- **Problem:** stories may include violence, abuse or caste details; some models refuse or sanitise such content. The form offers optional religion and caste fields tied to eligibility categories.
- **Solution:** collect sensitive attributes only when the user chooses a category that needs them; test the chosen model on sensitive scenarios for refusals; on risk indicators show a supportive message with the national helpline (15100 is CONFIRMED on NALSA pages) and avoid probing; keep extracted sensitive details out of logs.
- **Test:** red-team scenarios; refusal and mishandling rate.

#### S13. Affidavit and eligibility boundary (P1, P3)
- **Evidence:** CONFIRMED: an income affidavit is by the applicant and cannot be made on someone else's behalf.
- **Solution:** the tool never drafts or completes the eligibility affidavit or states eligibility. It may list that an affidavit may be requested for income-based claims, with the source, and that the applicant must make it personally. **Intermediary mode must not let a helper author the applicant's sworn statement.**

#### S14. Intermediary mode: consent and power (P5)
- **Problem:** a helper using the tool with an applicant raises questions of consent, who holds the data, how long, and whether the helper's phrasing steers the account.
- **Solution:** applicant consent recorded per case; helper actions logged with an author label (applicant vs helper); applicant can view and delete the case; helper entries are stored as `helper_entry`, never as the applicant's statement; retention limits.
- **Note:** this requires accounts and a server database — a real architecture change beyond the finalized MVP. Decide only after validation.

#### S15. Source drift in official information (P3–P5)
- **Evidence:** CONFIRMED income-limit inconsistency across NALSA pages; forms and portals change.
- **Solution:** each requirement stores source URL, retrieved date and a content hash; a scheduled check flags changed or unreachable pages; the checklist shows "last checked" and degrades to "needs re-verification". A human re-signs-off before an item returns to "verified".

#### S16. No readiness score (P1–P4)
- **Problem:** a percentage "readiness" or "case strength" invites gatekeeping, false confidence, or looks like outcome prediction.
- **Solution:** show coverage per requirement ("relevant information found / not found / unclear"), never an aggregate score or traffic light about merit. Test wording with workers so it does not read as a verdict.

#### S17. After submission (P5, optional)
- **Evidence:** CONFIRMED that LSAMS has tracking and a "Reminders / Clarifications" form; its function NOT verified.
- **Solution (if the function supports it):** log authority questions as new events, map them to existing evidence, and help the user respond, without submitting on their behalf.
- **Decision rule:** open and test the form first; drop this if it needs integration or credentials you cannot legitimately have.

#### S18. Low literacy, voice and low-end devices (P4–P5)
- **Problem:** target users may not type well, may use cheap phones and patchy connections. Streamlit may be heavy for this audience.
- **Evidence:** HYPOTHESIS.
- **Solution:** test on real low-end devices; add voice capture with readback of names, dates and amounts (voice mis-hears numbers); BHASHINI is the likely Indian-language voice route but access terms are UNVERIFIED. A mobile-first client is a potential **future** decision if testing shows Streamlit fails the audience.

#### S19. Evaluation data scarcity (P2–P3)
- **Problem:** I found no public Tamil legal-aid document corpus; verify this yourself.
- **Solution:** build a synthetic generator for payslips, bank statements, appointment letters, notices and chats with controllable noise (blur, skew, mixed language, missing pages, name variants); keep a hand-labelled gold set; never use real clients' documents without an ethics and privacy plan.

#### S20. Third-party personal data inside documents (P3)
- **Problem:** co-workers, family members and bystanders appear in chats and registers.
- **Solution:** detect and optionally mask other people's identifiers in exports; let the user mark "not needed for this matter"; keep that data out of AI prompts where possible.

#### S21. Authenticity is out of scope (P1)
- **Solution:** the tool never judges whether a document is genuine. Every document shows "provided by user; authenticity not verified", and the export repeats it. Visible quality problems (illegible, cropped) are reported as quality, not forgery.

---

## 6. Data model sketch (additions to the finalized design)

Fields to confirm against the finalized schema; do not treat as replacing it.

- `documents`: coverage metadata (period, pages supplied, holder, institution), quality flags, authenticity note.
- `facts`: `slot_type`, `origin`, `confidence`, `supersedes_id`, `translated` flag, `matter_id`.
- `slots`: `event_date`, `period_covered`, `payment_date`, `amount`, `party`, `opposite_party_*`.
- `requirements`: `layer` (A/B), `source_url`, `retrieved_at`, `content_hash`, `verified_by`, `jurisdiction`.
- `matters`: one per issue; evidence and checklist isolated per matter.
- `events`: append-only log feeding "What changed?".
- `attention_dates`: date, excerpt, document, page (flag only).

---

## 7. Phased roadmap

| Phase | Goal | Contents | Exit criterion |
|---|---|---|---|
| **P0 Validate** | Learn if the problem is real | 8–10 interviews with paralegal volunteers, DLSA front-office staff, clinic workers; read NALSA unorganised-sector scheme; open the LSAMS Reminders/Clarifications form | Written problem statement revised from what workers said; stop criteria checked |
| **P1 Core engine** | End-to-end loop on synthetic cases | A1–A8, S2, S9, S13, S16, S21 | Gold-set results meet pre-set bars; no ungrounded fact reaches export |
| **P2 Evidence reality** | Handle real-world mess | S1, S3, S4, S5, S6, S8, S10, S11, S19 | Noisy-corpus accuracy reported honestly |
| **P3 Trust and hardening** | Safe to put in front of people | S7, S12, S15, S20, A5 sourcing, privacy review | Qualified privacy and ethics review done |
| **P4 Handoff pilot** | Does it help reviewers? | Packages with vs without tool; device and voice tests (S18) | Reviewers measurably faster or better informed |
| **P5 Intermediary and ecosystem** | Scale through helpers | S14, S17, accounts, server database | Only if P0 and P4 support it |

---

## 8. Validation plan

### 8.1 Interview guide (P0) — questions for legal-aid workers
1. Walk me through the last application you helped with. What did you have to ask again?
2. What information is most often missing or wrong?
3. Which missing items delay or end an application? Which are merely annoying?
4. How do applicants bring their documents (paper, phone photos, screenshots)? In which languages?
5. How do you handle dates people cannot remember?
6. What would you want a preparation package to look like? Show a one-page mock.
7. What would make you distrust such a package?
8. What must the tool never say or do?
9. Who else (paralegal volunteers, clinics, village-level entrepreneurs) sees this gap?

### 8.2 Experiments
- **Accuracy:** gold set of synthetic bilingual documents; report precision, recall, ungrounded rate, false-conflict rate, wrong-amount rate.
- **Neutrality:** raters score generated questions; compare answers under different wordings (S9).
- **Handoff:** reviewers handle matched cases with and without the package; measure time to understand, follow-up questions needed, perceived trust.
- **Usability:** low-end phone and low-literacy sessions with consent.

### 8.3 Stop or change criteria (set before testing)
- Workers say missing information is not the main bottleneck.
- Reviewers show no measurable benefit.
- Extraction cannot reach the accuracy bar on realistic documents.
- Privacy or ethics review blocks the data flow.

---

## 9. Metrics

| Area | Metric |
|---|---|
| Grounding | % facts with valid excerpt; ungrounded facts reaching export (target 0) |
| Extraction | field precision/recall; wrong-amount rate; name false-conflict rate |
| Conflicts | false and missed conflicts; question neutrality score |
| Honesty | "not found" statements correctly scoped by coverage (S3) |
| Reviewer value | time to understand; follow-up questions; trust rating |
| Safety | forbidden-claim blocks; sensitive-scenario mishandling rate |
| Reliability | failure and retry rates; mock vs live parity |

---

## 10. Risks and mitigations

| Risk | Mitigation |
|---|---|
| Wrong fact changes someone's case | Source excerpt, user correction, human review, block ungrounded facts |
| Looks like legal advice | Forbidden-claim scan; notice on every export; no scores or verdicts |
| Pushes users to harmonise accounts | S9 design and reviewer-checked wording |
| Sensitive data exposure | Consent, deletion, minimal logging, masking, qualified privacy review |
| Government adds similar features | Compete on trust, Tamil-first handling, intermediary workflows and evaluation data, not on a feature list |
| Naming confusion with the official product | Distinct positioning and branding review |
| Stale official information | S15 monitoring and re-verification |
| Tool serves too narrow a slice | P0 interviews; stop criteria |

---

## 11. Unresolved research questions (priority order)

1. Is incomplete preparation a real driver of rejection or delay? Who can say, and with what data?
2. What do the LSAMS "Reminders / Clarifications" and tracking features actually do?
3. What does VANI do with uploaded documents, and what do Nyaya Setu's WhatsApp and app flows do with them?
4. Does an official per-dispute evidence checklist exist for wage disputes (NALSA unorganised-sector scheme; state labour department)?
5. Primary sources for the pasted statistics (Lok Sabha/Rajya Sabha answers, PIB, UNDP).
6. Does nyayalens.com exist and what does it do?
7. Which intermediaries exist in Tamil Nadu, and would they use such a tool?
8. Tamil OCR and speech accuracy on realistic documents and speech.
9. Data-protection obligations for storing and processing these documents.
10. Real accessibility and device constraints of the target users.

---

## 12. Out-of-scope features (unchanged unless validation says otherwise)
General legal chatbot; eligibility determination; outcome prediction; direct submission to LSAMS; large unverifiable legal knowledge base; case-strength scoring; authenticity checking of documents.

---

## 13. Positioning

**Pitch:** "Nyaya Saarathi helps a person see which parts of their account are supported by documents, which preparation requirements have relevant information, and what remains unresolved — then guides them through clarifying those gaps without overwriting the original record."

**Say plainly:** what the tool does not do (section 12), that its checklist items are labelled by source, that AI processing is disclosed, and that human legal-aid workers make every decision.

---

## 14. Sources

- NALSA legal aid FAQ and procedures: https://nalsa.gov.in/legal-aid/
- NALSA FAQs: https://nalsa.gov.in/faqs/
- NALSA "Promoting Inclusive Legal System" (VANI, eligibility summary): https://nalsa.gov.in/promoting-inclusive-legal-system/
- NALSA preventive and strategic schemes (unorganised-sector workers scheme listed): https://nalsa.gov.in/preventive-strategic-legal-services-schemes
- LSAMS home: https://scourtapp.nic.in/lsams/
- LSAMS legal-aid application form: https://scourtapp.nic.in/lsams/nologin/applicationFiling.action?requestLocale=en
- Digital India release on Nyaya Setu: https://www.digitalindia.gov.in/press-release/?id=12620
- IANS pre-launch report: https://ianslive.in/vice-president-radhakrishnan-to-lead-talks-on-tech-driven-legal-services-today--20260329064324
- DISHA 2.0 summary (citing PIB): https://www.impriindia.com/?p=74205 and https://laex.in/prelims-fact-sheet/disha-2-0-expanding-access-to-justice/
- Nyaya Setu overview (secondary): https://www.insightsonindia.com/2026/04/01/nyaya-setu-ai-chatbot/
- Nyaya Setu on WhatsApp (secondary): https://www.angelone.in/news/economy/save-7217711814-nyaya-setu-whatsapp-service-for-free-legal-guidance
- Nyaya Setu Play Store listing: https://play.google.com/store/apps/details?id=com.kpmg.datalab&hl=en_IN
- VANI (NIC): https://aikosh.indiaai.gov.in/home/use-cases/details/virtual_assistance_by_nic_vani.html
- eCourts app manual (six languages): https://orissahighcourt.nic.in/ecourts-mobile-app/eCourts_Services_Mobile_App_English.pdf
- eCourts app 4.0.1 notes (mirror): https://www.apkmirror.com/?p=14058720
- eCourtsIndia profiles: https://yourstory.com/companies/ecourts-india and https://www.capterra.com/p/10049317/eCourtsIndia/
- NyayaLens-named repositories (examples): https://github.com/Peeyush2006/Nyayalens, https://github.com/Abhishekkswamii/nyayalens, https://github.com/Leena-magar01/NYAYALENS, https://github.com/kanojiaatharva/NyayaLens, https://github.com/OlibhiaGhosh/nyayalens
- VIDIZMO: https://vidizmo.ai/blog/ai-legal-evidence-analysis
- AI.Law features: https://www.ai.law/features/
- Immigration AI tools overview: https://www.legalsoft.com/blog/ai-tools-for-immigration-law-firms
- Stanford Legal Design Lab, AI intake agent (LASSB): https://justiceinnovation.law.stanford.edu/legal-aid-intake-screening-ai/
- Illinois Legal Aid, AI tools FAQ: https://www.illinoislegalaid.org/legal-information/ai-tools-legal-information-common-questions

*End of document.*
