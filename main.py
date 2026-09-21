from pathlib import Path
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles


app = FastAPI(
    title="Student Management System",
    description="A frontend-only student management system.",
    version="1.0.0",
    # Versteckt die automatische API-Dokumentation (/docs), da wir sie nicht brauchen
    docs_url=None, 
    redoc_url=None
)

# Absoluten Pfad sicher ermitteln (verhindert Fehler beim Serverstart)
BASE_DIR = Path(__file__).resolve().parent
CODE_DIR = BASE_DIR / "code"

# Überprüfen, ob der Ordner existiert
if not CODE_DIR.exists():
    raise FileNotFoundError(f"Der Ordner '{CODE_DIR}' existiert nicht!")

# Alle statischen Dateien ausliefern
app.mount("/", StaticFiles(directory=CODE_DIR, html=True), name="frontend")