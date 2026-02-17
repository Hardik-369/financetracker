import crypto from "crypto";
import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const transactionSchema = z.object({
  amount: z.number().positive(),
  category: z.string().min(1),
  emotion: z.enum(['calm', 'stressed', 'bored', 'celebratory', 'regretful']),
  occurredAt: z.string().datetime(),
});

const transactions: unknown[] = [];

export async function POST(request: NextRequest) {
  const payload = transactionSchema.parse(await request.json());
  const entry = { id: crypto.randomUUID(), ...payload };
  transactions.push(entry);

  return NextResponse.json(entry, { status: 201 });
}

export async function GET() {
  return NextResponse.json({ data: transactions });
}
