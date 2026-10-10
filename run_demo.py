import requests
import json
import time

BASE_URL = "http://localhost:8000"

def run_demo():
    print("Starting Nyaya Saarathi Demo (Synthetic Case Runner)")
    
    # 1. Create a Case
    print("\n[1] Creating a new case...")
    res = requests.post(f"{BASE_URL}/cases", json={
        "lang": "EN",
        "consent_no_legal_advice": True,
        "consent_ai_processing": True
    })
    case = res.json()
    case_id = case['id']
    print(f"Case created with ID: {case_id}")
    
    # 2. Add a Story
    print("\n[2] Submitting user story...")
    story_text = "I worked as a mechanic for AutoFix Garage. I started in January 2026. They didn't pay my salary for February 2026. The amount owed is Rs. 15,000."
    res = requests.post(f"{BASE_URL}/cases/{case_id}/story", json={
        "story_text": story_text
    })
    print("Story saved:", res.json()['story_text'][:50] + "...")
    
    # 3. Generate Pathway (Mocked if no API key)
    print("\n[3] Generating Legal Pathway...")
    res = requests.post(f"{BASE_URL}/cases/{case_id}/pathway")
    pathway = res.json()
    print(f"Pathway identified: {pathway['title']} - {pathway['description']}")
    
    # 4. Upload a Mock Document
    print("\n[4] Uploading synthetic evidence document...")
    # Create a dummy text file to act as PDF for the demo
    with open("dummy_offer.txt", "w") as f:
        f.write("OFFER LETTER: You will start work on 1 Feb 2026 with a salary of Rs. 15,000.")
    
    with open("dummy_offer.txt", "rb") as f:
        res = requests.post(f"{BASE_URL}/cases/{case_id}/documents", files={"file": ("offer_letter.pdf", f, "text/plain")})
    print("Document uploaded:", res.json()['filename'])
    
    # 5. Extract Evidence (Mocked if no API key)
    print("\n[5] Running Evidence Extraction (Mock mode will flag a conflict on the start date)...")
    res = requests.post(f"{BASE_URL}/cases/{case_id}/extract")
    print("Extraction complete.")
    
    # 6. View Evidence Map
    print("\n[6] Retrieving Evidence Map...")
    res = requests.get(f"{BASE_URL}/cases/{case_id}/evidence-map")
    evidence_map = res.json()
    print(f"Facts extracted: {len(evidence_map['facts'])}")
    print(f"Conflicts found: {len(evidence_map['conflicts'])}")
    for conflict in evidence_map['conflicts']:
        print(f"  -> Conflict [{conflict['fact_type']}]: {conflict['description']}")
        
    print(f"Questions to ask user: {len(evidence_map['questions'])}")
    for q in evidence_map['questions']:
        print(f"  -> Question: {q['title']} (Options: {q['options']})")
        
    # 7. Answer Question
    if evidence_map['questions']:
        q_id = evidence_map['questions'][0]['id']
        print("\n[7] Simulating user answering the clarifying question...")
        res = requests.post(f"{BASE_URL}/cases/{case_id}/questions/{q_id}/answer", json={
            "answer": "1 Feb 2026"
        })
        print("Question answered. Conflict resolved.")
        
    # 8. Export Package
    print("\n[8] Generating Export Package...")
    res = requests.get(f"{BASE_URL}/cases/{case_id}/export")
    export = res.json()
    print("\n FINAL DOSSIER SUMMARY:")
    print("Pathway:", export['pathway_title'])
    print("Summary:", export['summary'])
    print("Resolved Conflicts:", export['resolved_conflicts'])
    print("\n Demo complete!")

if __name__ == "__main__":
    run_demo()
