/**
 * API Route Security Middleware
 */

import { NextRequest, NextResponse } from 'next/server';
import { checkRateLimit, sanitizeInput, getSafeErrorMessage } from '@/lib/security';

interface ValidationRule {
  field: string;
  type: 'string' | 'email' | 'password' | 'number' | 'file';
  required?: boolean;
  maxLength?: number;
  minLength?: number;
}

/**
 * Validate request body against rules
 */
export function validateRequest(
  data: unknown,
  rules: ValidationRule[]
): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  if (typeof data !== 'object' || data === null) {
    return { valid: false, errors: ['Invalid request body'] };
  }

  const body = data as Record<string, unknown>;

  for (const rule of rules) {
    const value = body[rule.field];

    // Check required fields
    if (rule.required && !value) {
      errors.push(`${rule.field} is required`);
      continue;
    }

    if (!value) continue;

    // Validate by type
    switch (rule.type) {
      case 'email':
        if (typeof value !== 'string' || !isValidEmail(value)) {
          errors.push(`${rule.field} must be a valid email`);
        }
        break;

      case 'password':
        if (typeof value !== 'string' || value.length < 8) {
          errors.push(`${rule.field} must be at least 8 characters`);
        }
        break;

      case 'string':
        if (typeof value !== 'string') {
          errors.push(`${rule.field} must be a string`);
        } else if (rule.maxLength && value.length > rule.maxLength) {
          errors.push(`${rule.field} must not exceed ${rule.maxLength} characters`);
        } else if (rule.minLength && value.length < rule.minLength) {
          errors.push(`${rule.field} must be at least ${rule.minLength} characters`);
        }
        break;

      case 'number':
        if (typeof value !== 'number') {
          errors.push(`${rule.field} must be a number`);
        }
        break;
    }
  }

  return { valid: errors.length === 0, errors };
}

/**
 * Validate email
 */
function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * API Route security wrapper
 */
export async function withAuth(
  request: NextRequest,
  handler: (request: NextRequest) => Promise<NextResponse>,
  options?: {
    rateLimit?: boolean;
    maxRequests?: number;
    windowMs?: number;
  }
): Promise<NextResponse> {
  try {
    // ✅ Rate limiting
    if (options?.rateLimit !== false) {
      const ip = request.headers.get('x-forwarded-for') || request.headers.get('x-real-ip') || 'unknown';
      const limit = checkRateLimit(
        `${ip}-${request.nextUrl.pathname}`,
        options?.maxRequests || 10,
        options?.windowMs || 60000
      );

      if (!limit.allowed) {
        return NextResponse.json(
          { error: 'Too many requests' },
          {
            status: 429,
            headers: {
              'Retry-After': Math.ceil(
                (limit.resetTime - Date.now()) / 1000
              ).toString(),
            },
          }
        );
      }
    }

    // ✅ Execute handler
    return await handler(request);
  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { error: getSafeErrorMessage(error) },
      { status: 500 }
    );
  }
}

/**
 * CORS check
 */
export function checkCORS(request: NextRequest): boolean {
  const allowedOrigins = [
    'https://ecocee.in',
    'https://www.ecocee.in',
    'http://localhost:3000',
  ];

  const origin = request.headers.get('origin');
  return origin ? allowedOrigins.includes(origin) : true;
}

/**
 * Add CORS headers
 */
export function addCORSHeaders(response: NextResponse): NextResponse {
  const allowedOrigins = [
    'https://ecocee.in',
    'https://www.ecocee.in',
    'http://localhost:3000',
  ];

  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  response.headers.set('Access-Control-Max-Age', '86400');

  return response;
}

/**
 * Validate JSON payload
 */
export async function validateJSON(
  request: NextRequest
): Promise<{ valid: boolean; data?: Record<string, unknown>; error?: string }> {
  try {
    const data = await request.json();
    return { valid: true, data };
  } catch (error) {
    return { valid: false, error: 'Invalid JSON payload' };
  }
}
