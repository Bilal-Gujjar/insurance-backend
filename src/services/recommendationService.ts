export const getRecommendationLogic = (
  age: number,
  income: number,
  dependents: number,
  riskTolerance: string
) => {
  let recommendation = '';
  let explanation = '';

  if (age < 40 && riskTolerance === 'High') {
    recommendation = 'Term Life – $500,000 for 20 years';
    explanation = 'You’re young and have high risk tolerance. Term life is affordable and flexible.';
  } else if (age >= 40 && riskTolerance === 'Low') {
    recommendation = 'Whole Life – $250,000';
    explanation = 'You prefer stability and long-term benefits. Whole life insurance suits you.';
  } else {
    recommendation = 'Term Life – $250,000 for 10 years';
    explanation = 'Balanced coverage for your profile.';
  }

  return { recommendation, explanation };
};
