export interface FinancialMoodInputs {
  emotionalVolatility: number;
  impulseRatio: number;
  savingsDeviation: number;
}

const clamp = (value: number, min: number, max: number): number =>
  Math.max(min, Math.min(max, value));

export const calculateFinancialMoodScore = ({
  emotionalVolatility,
  impulseRatio,
  savingsDeviation,
}: FinancialMoodInputs): number => {
  const weighted =
    emotionalVolatility * 0.4 + impulseRatio * 0.3 + savingsDeviation * 0.3;

  return Math.round(clamp(100 - weighted * 100, 0, 100));
};
