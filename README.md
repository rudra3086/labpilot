# ClassPilot - Week 2 Foundation

ClassPilot is a Smart Classroom and Computer Lab Management System.

This repository currently implements only Week 2 goals:
- Electron + React + TypeScript project setup
- Separate teacher and student desktop applications
- Shared code structure for common types/models
- UI/UX prototypes powered by mock data

No backend, networking, monitoring engine, or policy enforcement logic is implemented in this phase.

## Structure

```
LabPilot/
|- teacher-app/
|- student-app/
|- shared/
|- docs/
|- README.md
|- .gitignore
|- package.json
```

## Tech Stack

- Electron
- React
- TypeScript
- Vite
- Tailwind CSS
- Lucide React

## Install

From the repository root:

```bash
npm install
```

## Run Teacher App

```bash
npm run dev:teacher
```

## Run Student App

```bash
npm run dev:student
```

## Build

```bash
npm run build
```

## Week 2 Scope Guardrails

The project intentionally excludes:
- Socket.IO, Express, SQLite, databases
- LAN communication and remote control
- Screen capture/streaming and app/website blocking engines
- Attendance/task business logic and authentication
- AI/ML and cloud integrations

All such features appear only as visual placeholders in the UI.
