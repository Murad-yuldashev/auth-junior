# Fullstack Auth Application

## Overview
Fullstack authentication example with a Vue 3 frontend and a Node.js/Express backend.
- Frontend: Vue 3, Vite, Pinia, TypeScript (optional), CSS.
- Backend: Node.js, Express, JWT authentication, MongoDB.

## Tech stack
- Frontend: `vue`, `vite`, `pinia`, `typescript` (optional), `yarn` / `npm`
- Backend: `node`, `express`, `jsonwebtoken`, `mongoose` (or another MongoDB client)
- Package managers: `yarn` or `npm`

## Repository layout
- `front/` — frontend client (Vite + Vue 3)
- `server/` — API server (Express + MongoDB)
- `README.md` — this file

## Prerequisites
- Node.js 18+
- Yarn or npm
- MongoDB instance (local or cloud)

## Quick start

1. Clone repository:
    - `git clone <repo-url>`
2. Start backend:
    - `cd server`
    - Copy ` .env.example ` to ` .env ` and set required variables (see "Environment variables" below)
    - Install dependencies: `yarn` or `npm install`
    - Run dev server: `yarn dev` or `npm run dev`
3. Start frontend:
    - `cd ../front`
    - Copy ` .env.example ` to ` .env ` and set `VITE_API_URL` (e.g. `http://localhost:3000`)
    - Install dependencies: `yarn` or `npm install`
    - Run dev server: `yarn dev` or `npm run dev`
4. Open frontend URL (default Vite port: `5173`) and test authentication flows.

## Environment variables

Server (`server/.env`):
- `PORT` — server port (default `3000`)
- `MONGODB_URI` or `DATABASE_URL` — MongoDB connection string
- `JWT_SECRET` — secret for signing JWTs
- `SALT_ROUNDS` — bcrypt salt rounds (optional)

Frontend (`front/.env`):
- `VITE_API_URL` — base URL of the API server (e.g. `http://localhost:3000`)

## Scripts (common)
Server:
- `dev` — development mode (nodemon / ts-node / framework dev)
- `build` — build (if TypeScript)
- `start` — start compiled server

Front:
- `dev` — start Vite dev server
- `build` — build production assets
- `preview` — preview production build

Adjust exact scripts per package.json in each folder.

## Auth flow (high level)
1. User registers via frontend form -> `POST /api/auth/register` (body: `{ login, password }`). Server hashes password and creates user.
2. User logs in -> `POST /api/auth/login` (body: `{ login, password }`). Server verifies credentials and returns a JWT.
3. Frontend stores token (e.g. in memory / secure cookie / localStorage) and sends `Authorization: Bearer <token>` to protected endpoints.
4. Server middleware validates JWT and exposes protected resources (e.g. `GET /api/dashboard`).

## Database & migrations
- Use `mongoose`, `Prisma`, or another ORM/ODM if needed.
- For production, ensure migrations and indexes are applied before serving.

## Troubleshooting
- CORS errors: confirm server allows frontend origin or set correct `VITE_API_URL`.
- Connection errors: verify `MONGODB_URI` and database availability.
- JWT errors: ensure `JWT_SECRET` is set and consistent across environments.
- Dev server not reflecting changes: restart the dev server, clear caches.

## Security notes
- Never commit `JWT_SECRET`, DB credentials, or `.env` files to version control.
- Validate and sanitize input on server endpoints.
- Add rate limiting and brute-force protection for auth routes in production.

## License
Add project license and contribution notes as needed.
 