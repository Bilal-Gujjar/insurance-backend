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
git clone <repo-url>
cd life-insurance-backend
npm install
```

### 2. Configure Environment
Create `.env` file:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/insurance"
PORT=4000
```

### 3. Run with Docker
```bash
docker-compose up --build
```

### 4. Run Prisma Migration
```bash
npx prisma migrate dev --name init
```

## API

### POST /recommendation
```json
{
  "age": 35,
  "income": 70000,
  "dependents": 2,
  "riskTolerance": "High"
}
```
Returns recommendation and explanation.

## Deployment Notes
Use AWS ECS or Elastic Beanstalk. Store DB credentials in Secrets Manager.
