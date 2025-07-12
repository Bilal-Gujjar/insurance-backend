# Life Insurance Recommendation API

## Overview
Backend API for recommending personalized life insurance options based on user profile data.

## Tech Stack
- Node.js + Express
- PostgreSQL
- Prisma ORM
- Docker + Docker Compose

## Setup

### 1. Clone & Install
```bash
git clone git@github.com:Bilal-Gujjar/insurance-backend.git
cd life-insurance-backend
npm install
```

### 2. Configure Environment
Create `.env` file:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/insurance"
PORT=4000
```

### 3. Run with Docker (Runs in DB in Docker)
```bash
docker-compose up --build
```

### 4. Run Prisma Migration
```bash
npx prisma migrate dev --name init
```

### Create the .env file on the root of the project with the following content:
 Copy the .env.example file to .env and fill in the required values.

### Run the Porject Locally

```bash
    npm run dev
```

### POST /recommendation
```json
{
    "id": "2833cc80-5c04-4adf-8a0b-efa9725255ef",
    "age": 45,
    "income": 10000,
    "dependents": 2,
    "riskTolerance": "High",
    "recommendation": "Term Life – $250,000 for 10 years",
    "explanation": "Balanced coverage for your profile.",
    "createdAt": "2025-07-12T14:52:13.456Z"
}
```
Returns recommendation and explanation.

## Deployment Notes
Use AWS ECS or Elastic Beanstalk. Store DB credentials in Secrets Manager.
