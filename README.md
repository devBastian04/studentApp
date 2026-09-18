# 🎓 Student App

Eine einfache Web-App für Studenten.

## 🚀 Vorschau starten

Um die App lokal mit dem optimierten FastAPI-Server zu starten, gehe wie folgt vor:

### 1. Abhängigkeiten installieren

Stelle sicher, dass du dich im Hauptverzeichnis des Projekts befindest (wo die `requirements.txt` liegt). Öffne dein Terminal und installiere die benötigten Pakete:

```bash
pip install -r requirements.txt
```

### 2. Lokalen Server starten

Starte den Server mit automatischem Live-Reload im Terminal:

```bash
uvicorn main:app --port 5500 --reload
```

Der Server läuft nun stabil und performant auf Port **5500**.

### 3. Vorschau öffnen

- **Lokal auf deinem PC:** Öffne einfach [http://localhost:5500](http://localhost:5500) im Browser.
- **In einer Cloud-Umgebung (z.B. Gitpod / GitHub Codespaces):** Öffne den Bereich **PORTS** in deiner Entwicklungsumgebung und klicke auf die weitergeleitete Adresse für Port **5500**.

_Hinweis: Dank der Konfiguration in der `main.py` wirst du direkt auf deine App weitergeleitet. Du musst dich nicht mehr durch Ordnerstrukturen klicken!_

## 📁 Projektstruktur

```text
Student App/
├── code/               # Enthält deine HTML-, CSS- und JS-Dateien
│   ├── index.html      # Hauptseite deiner App
│   └── ...
├── main.py             # Der FastAPI-Webserver
└── requirements.txt    # Projektabhängigkeiten (fastapi, uvicorn)
```

⚠️ **Hinweis:** Das Terminal mit dem `uvicorn`-Befehl muss während der gesamten Entwicklung geöffnet bleiben. Sobald du Dateien im `code`-Ordner änderst, ist das Update sofort im Browser verfügbar.
