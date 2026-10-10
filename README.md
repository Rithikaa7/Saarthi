# Nyaya Saarathi

Nyaya Saarathi is an application built with a FastAPI Python backend and a React/Next.js frontend.

## Project Structure

- `backend/` - The Python FastAPI backend.
- `nyaya-saarathi-app/` - The Next.js frontend application.

## Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or above recommended)
- [Python 3.9+](https://www.python.org/)

## Setup Instructions

### 1. Backend Setup

1. Open a terminal and navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Create and activate a virtual environment:
   ```bash
   python -m venv venv
   # On Windows:
   venv\Scripts\activate
   # On macOS/Linux:
   source venv/bin/activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Setup the database (if Alembic is configured):
   ```bash
   alembic upgrade head
   ```
5. Run the FastAPI development server:
   ```bash
   uvicorn app.main:app --reload
   ```
   The backend will be available at `http://localhost:8000`.

### 2. Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
   ```bash
   cd nyaya-saarathi-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the Next.js development server:
   ```bash
   npm run dev
   ```
   The frontend will be available at `http://localhost:3000`.

## Quick Demo

You can also run the quick demo script located at the root of the project (if applicable):
```bash
python run_demo.py
```
