# shit

Monorepo playground: **Express + TypeScript** backend + **Vite + React + Tailwind** frontend.

## Structure

```txt
shit/
  backend/   # Express + TS API
  frontend/  # Vite + React + Tailwind (Axios + TanStack Query)
```

## Requirements

- Node.js (you're on Node 22 ✅)
- npm

## Setup

Install deps in both apps:

```bash
cd backend && npm i
cd ../frontend && npm i
cd ..
```

Create env files:

**`backend/.env`**
```env
PORT=4000
CORS_ORIGIN=http://localhost:5173
NODE_ENV=development
```

**`frontend/.env`**
```env
VITE_API_URL=http://localhost:4000
```

## Run (both together)

From repo root:

```bash
npm run dev
```

- Frontend: http://localhost:5173
- Backend: http://localhost:4000
- Health: http://localhost:4000/health
- Hello: http://localhost:4000/api/hello

## Useful scripts

```bash
npm run dev:backend
npm run dev:frontend
npm run build
npm run start
```

## Notes

- No Vite proxy. Frontend calls backend directly via `VITE_API_URL`.
- CORS is enabled on the backend to allow `http://localhost:5173`.
- Frontend uses **Axios** and **TanStack Query** for caching, retries, and deduplication.