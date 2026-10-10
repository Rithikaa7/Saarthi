def test_health_check(client):
    response = client.get("/health")
    assert response.status_code == 200
    assert response.json() == {"status": "ok"}

def test_create_case_success(client):
    data = {
        "lang": "EN",
        "consent_no_legal_advice": True,
        "consent_ai_processing": True
    }
    response = client.post("/cases", json=data)
    assert response.status_code == 201
    json_resp = response.json()
    assert "id" in json_resp
    assert json_resp["lang"] == "EN"
    
def test_create_case_missing_consent(client):
    data = {
        "lang": "EN",
        "consent_no_legal_advice": False,
        "consent_ai_processing": True
    }
    response = client.post("/cases", json=data)
    assert response.status_code == 400

def test_get_case(client):
    data = {
        "lang": "TA",
        "consent_no_legal_advice": True,
        "consent_ai_processing": True
    }
    create_response = client.post("/cases", json=data)
    case_id = create_response.json()["id"]
    
    get_response = client.get(f"/cases/{case_id}")
    assert get_response.status_code == 200
    assert get_response.json()["lang"] == "TA"

def test_save_and_get_story(client):
    data = {
        "lang": "EN",
        "consent_no_legal_advice": True,
        "consent_ai_processing": True
    }
    create_response = client.post("/cases", json=data)
    case_id = create_response.json()["id"]
    
    story_data = {"story_text": "This is my test story."}
    save_response = client.post(f"/cases/{case_id}/story", json=story_data)
    assert save_response.status_code == 200
    assert save_response.json()["story_text"] == "This is my test story."
    
    get_response = client.get(f"/cases/{case_id}/story")
    assert get_response.status_code == 200
    assert get_response.json()["story_text"] == "This is my test story."

def test_get_story_empty(client):
    data = {
        "lang": "EN",
        "consent_no_legal_advice": True,
        "consent_ai_processing": True
    }
    create_response = client.post("/cases", json=data)
    case_id = create_response.json()["id"]
    
    get_response = client.get(f"/cases/{case_id}/story")
    assert get_response.status_code == 200
    assert get_response.json()["story_text"] == ""

def test_generate_and_get_pathway(client):
    data = {"lang": "EN", "consent_no_legal_advice": True, "consent_ai_processing": True}
    create_response = client.post("/cases", json=data)
    case_id = create_response.json()["id"]
    
    pathway_resp = client.post(f"/cases/{case_id}/pathway")
    assert pathway_resp.status_code == 200
    assert pathway_resp.json()["title"] == "Non-payment of Wages"
    
    get_pathway_resp = client.get(f"/cases/{case_id}/pathway")
    assert get_pathway_resp.status_code == 200
    assert get_pathway_resp.json()["title"] == "Non-payment of Wages"

def test_get_requirements(client):
    data = {"lang": "EN", "consent_no_legal_advice": True, "consent_ai_processing": True}
    create_response = client.post("/cases", json=data)
    case_id = create_response.json()["id"]
    
    client.post(f"/cases/{case_id}/pathway")
    
    reqs_resp = client.get(f"/cases/{case_id}/requirements")
    assert reqs_resp.status_code == 200
    assert len(reqs_resp.json()) == 2
    assert reqs_resp.json()[0]["type"] == "Employment"

def test_upload_and_get_documents(client, tmp_path):
    data = {"lang": "EN", "consent_no_legal_advice": True, "consent_ai_processing": True}
    create_response = client.post("/cases", json=data)
    case_id = create_response.json()["id"]
    
    file_content = b"test document content"
    files = {"file": ("test.pdf", file_content, "application/pdf")}
    
    upload_resp = client.post(f"/cases/{case_id}/documents", files=files)
    assert upload_resp.status_code == 200
    assert upload_resp.json()["filename"] == "test.pdf"
    
    docs_resp = client.get(f"/cases/{case_id}/documents")
    assert docs_resp.status_code == 200
    assert len(docs_resp.json()) == 1
    assert docs_resp.json()[0]["filename"] == "test.pdf"

def test_extract_and_get_evidence_map(client):
    data = {"lang": "EN", "consent_no_legal_advice": True, "consent_ai_processing": True}
    create_response = client.post("/cases", json=data)
    case_id = create_response.json()["id"]
    
    extract_resp = client.post(f"/cases/{case_id}/extract")
    assert extract_resp.status_code == 200
    
    map_resp = client.get(f"/cases/{case_id}/evidence-map")
    assert map_resp.status_code == 200
    map_data = map_resp.json()
    assert len(map_data["facts"]) == 2
    assert len(map_data["conflicts"]) == 1
    assert len(map_data["questions"]) == 1
    assert not map_data["conflicts"][0]["resolved"]
    
    question_id = map_data["questions"][0]["id"]
    
    ans_resp = client.post(f"/cases/{case_id}/questions/{question_id}/answer", json={"answer": "January 2026"})
    assert ans_resp.status_code == 200
    assert ans_resp.json()["answered"] is True
    
    map_resp_after = client.get(f"/cases/{case_id}/evidence-map")
    assert map_resp_after.json()["conflicts"][0]["resolved"] is True
    
    export_resp = client.get(f"/cases/{case_id}/export")
    assert export_resp.status_code == 200
    export_data = export_resp.json()
    assert export_data["case_id"] == case_id
    assert "summary" in export_data
    assert export_data["resolved_conflicts"] == 1
    assert export_data["total_documents"] == 0
