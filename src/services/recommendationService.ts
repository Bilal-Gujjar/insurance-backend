export const getRecommendationLogic = (
  age: number,
  income: number,
  dependents: number,
  riskTolerance: string
) => {
  const planType = 'Term Life';
  const coverageAmount = income * 12; // 12x annual income
  let termYears = 20;

  // Adjust term based on risk and age
  if (riskTolerance === 'Conservative') {
    termYears = age >= 40 ? 10 : 15;
  } else if (riskTolerance === 'Aggressive') {
    termYears = age < 40 ? 25 : 20;
  } else if (riskTolerance === 'Balanced') {
    termYears = 15;
  }

  const monthlyPremium = Math.round((coverageAmount / 1000) * 2.4); // Example calc

  const details = `Based on your profile, we recommend ${planType} insurance with $${coverageAmount.toLocaleString()} coverage for ${termYears} years. This provides 12x your annual income, ensuring comprehensive financial security for your dependents.`;

  return {
    planType,
    coverageAmount,
    termYears,
    monthlyPremium,
    details
  };
};
