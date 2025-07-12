-- CreateTable
CREATE TABLE "RecommendationInput" (
    "id" TEXT NOT NULL,
    "age" INTEGER NOT NULL,
    "income" INTEGER NOT NULL,
    "dependents" INTEGER NOT NULL,
    "riskTolerance" TEXT NOT NULL,
    "recommendation" TEXT NOT NULL,
    "explanation" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "RecommendationInput_pkey" PRIMARY KEY ("id")
);
