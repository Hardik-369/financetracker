import { NextResponse } from 'next/server';
import { calculateFinancialMoodScore } from '@/lib/algorithms/financeScore';

export async function GET() {
  const financeScore = calculateFinancialMoodScore({
    emotionalVolatility: 0.35,
    impulseRatio: 0.22,
    savingsDeviation: 0.28,
  });

  return NextResponse.json({
    stabilityIndex: 78,
    emotionalSpendingPercent: 34,
    savingsMomentum: 65,
    impulseRisk: 29,
    financeScore,
  });
}
