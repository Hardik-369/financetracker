const HIGH_RISK_EMOTIONS = new Set(['stressed', 'bored', 'celebratory']);

export interface ImpulseInput {
  amount: number;
  medianAmount: number;
  emotion: string;
  hourOfDay: number;
  normalPurchaseStartHour?: number;
  normalPurchaseEndHour?: number;
}

export const isImpulseTransaction = ({
  amount,
  medianAmount,
  emotion,
  hourOfDay,
  normalPurchaseStartHour = 8,
  normalPurchaseEndHour = 22,
}: ImpulseInput): boolean => {
  const amountSpike = amount > medianAmount * 1.8;
  const highRiskEmotion = HIGH_RISK_EMOTIONS.has(emotion);
  const outsideNormalHours =
    hourOfDay < normalPurchaseStartHour || hourOfDay > normalPurchaseEndHour;

  return amountSpike && highRiskEmotion && outsideNormalHours;
};
