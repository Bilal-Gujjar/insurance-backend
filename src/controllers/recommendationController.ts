import { Request, Response } from 'express';
import { prisma } from '../config/db';
import { getRecommendationLogic } from '../services/recommendationService';

export const getRecommendation = async (req: Request, res: Response) => {
  const { age, income, dependents, riskTolerance } = req.body;

  if (!age || !income || !dependents || !riskTolerance) {
    return res.status(400).json({ error: 'Missing fields' });
  }

  const {
    planType,
    coverageAmount,
    termYears,
    monthlyPremium,
    details
  } = getRecommendationLogic(age, income, dependents, riskTolerance);

  await prisma.recommendationInput.create({
    data: {
      age,
      income,
      dependents,
      riskTolerance,
      recommendation: `${planType} – $${coverageAmount.toLocaleString()} for ${termYears} years`,
      explanation: details
    }
  });

  return res.status(200).json({
    planType,
    coverageAmount,
    termYears,
    monthlyPremium,
    details
  });
};
