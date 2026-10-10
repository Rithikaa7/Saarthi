from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .api import router
from .database import engine
from . import models

models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Nyaya Saarathi API", version="0.1.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, restrict to frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(router)

@app.get("/health")
def health_check():
    return {"status": "ok"}
