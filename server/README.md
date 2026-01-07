# Server (API)

## Overview
Backend API for authentication and protected resources. Exposes endpoints consumed by the frontend. Uses JWT-based authentication. Adjust to your stack (Express, etc.) as needed.

## Prerequisites
1. Node.js 20+
2. Yarn or npm
3. Database (Mongodb) — configure via `MONGODB_URI` or equivalent

## Quick start
1. Install dependencies:
    - `yarn` or `npm install`
2. Create environment file:
    - Copy ` .env.example ` to ` .env ` and set required variables
3. Run in development:
    - `yarn dev` or `npm run dev` (uses nodemon / ts-node or framework dev server)
4. Build and start:
    - `yarn build` then `yarn start` or `npm run build` / `npm start`

## Recommended `.env` variables
1. `PORT` — server port (default `3000`)
2. `DATABASE_URL` — connection string for DB
3. `JWT_SECRET` — secret for signing tokens
4. `SALT_ROUNDS` — bcrypt salt rounds (if using bcrypt)

## Common scripts
1. `dev` — development mode with auto-reload
2. `build` — compile TypeScript to JS (if applicable)
3. `start` — run compiled server
4. `migrate` — run DB migrations (if applicable)
5. `seed` — seed database (if applicable)
6. `test` — run tests

## API (expected endpoints)
1. `POST /api/auth/register` — body: `{ login, password, username, pdfFile, imageFile }`
    - Creates user, stores hashed password.
2. `POST /api/auth/login` — body: `{ login, password }`
    - Validates credentials, returns JWT / session info.

Adjust paths if your implementation differs.

## Auth flow (high level)
1. Register: server hashes password, saves user.
2. Login: server verifies credentials, returns signed JWT.
3. Protected routes validate token and return user-specific data.

## Database & migrations
1. Use your chosen ORM / query tool (Prisma, TypeORM, Knex, Sequelize).
2. Run migrations before starting in production:
    - `yarn migrate` or framework-specific command.

## Troubleshooting
1. Connection errors — verify `DATABASE_URL` and DB availability.
2. JWT errors — confirm `JWT_SECRET` matches across deployments.
3. CORS — allow `VITE_API_URL` origin for frontend requests.

## Notes
1. Keep `JWT_SECRET` and DB credentials out of version control.
2. Add rate limiting and input validation on auth endpoints for security.