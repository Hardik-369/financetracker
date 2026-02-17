import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

const registerSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export async function POST(request: NextRequest) {
  const json = await request.json();
  const payload = registerSchema.parse(json);

  return NextResponse.json(
    {
      message: 'Registration endpoint scaffolded',
      user: { email: payload.email },
    },
    { status: 201 },
  );
}
