export type Emotion =
  | 'calm'
  | 'stressed'
  | 'bored'
  | 'celebratory'
  | 'regretful';

export interface TransactionInput {
  amount: number;
  category: string;
  emotion: Emotion;
  occurredAt: string;
}

export interface InsightMetrics {
  stabilityIndex: number;
  emotionalSpendingPercent: number;
  savingsMomentum: number;
  impulseRisk: number;
  financeScore: number;
}
