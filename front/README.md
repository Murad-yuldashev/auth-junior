# Frontend (Vue + TypeScript)

## Overview
Frontend client built with Vue 3 and TypeScript. Uses Pinia for state (auth store), Vue Router for navigation. Communicates with the API server for authentication and protected routes.

## Prerequisites
1. Node.js 20+
2. Yarn or npm

## Quick start
1. Install dependencies:
    - `yarn` or `npm install`
2. Create environment file:
    - Copy ` .env.example ` to ` .env ` and set `BASE_URI` (e.g. `http://localhost:3000`)
3. Run dev server:
    - `yarn dev` or `npm run dev` (default Vite port: `5173`)
4. Build for production:
    - `yarn build` or `npm run build`
5. Serve production build (optional):
    - `yarn preview` or `npm run preview`

## Scripts
1. `dev` — start development server
2. `build` — produce production build
3. `preview` — preview production build locally
4. `lint` — run linter (if configured)
5. `test` — run tests (if configured)

## Environment variables
Set at least:
- `BASE_URI` — base URL of the API server (e.g. `http://localhost:3000`)

## Auth flow (high level)
1. User submits login/register from UI.
2. `auth` store sends request to API (`/api/auth/login` or `/api/auth/register`).
3. Server returns token / user info; store persists session and routes user to protected pages like `/dashboard`.

## Troubleshooting
1. CORS errors — ensure server allows frontend origin or use correct `BASE_URI`.
2. Wrong API URL — confirm `.env` and redeploy dev server.
3. Dev build not refreshing — restart dev server or clear cache.