import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';
import { signToken } from '@/lib/auth/jwt';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export async function POST(request: NextRequest) {
  const json = await request.json();
  const payload = loginSchema.parse(json);
  const token = signToken({ email: payload.email });

  const response = NextResponse.json({ message: 'Login successful (scaffold)' });
  response.cookies.set('auth_token', token, {
    httpOnly: true,
    sameSite: 'lax',
    secure: process.env.NODE_ENV === 'production',
    maxAge: 3600,
    path: '/',
  });

  return response;
}
