# 🚀 Quick Start Security & SEO Implementation

## ⚡ 5-Minute Quick Reference

### 🔴 CRITICAL - Do This First

```bash
# 1. Stop the server
# Ctrl + C

# 2. Rotate your API keys NOW
# See IMPLEMENTATION_GUIDE.md section "ROTATE API KEYS"

# 3. Update .env.local with new keys

# 4. Restart server
npm run dev
```

### ✅ Verify Security Implementation

```bash
# Check security headers (in DevTools → Network)
# Look for:
# - X-Content-Type-Options: nosniff
# - X-Frame-Options: SAMEORIGIN  
# - X-XSS-Protection: 1; mode=block

# Check rate limiting works
# Try making 15+ requests rapidly to /api/login

# Check CORS
# Request from different domain should show proper headers
```

### 📝 Using Security Utilities

```typescript
// Input Validation
import { sanitizeInput, isValidEmail, validatePassword } from '@/lib/security';

const email = sanitizeInput(userInput);
if (!isValidEmail(email)) console.error('Invalid email');

const pwd = validatePassword(userInput);
if (!pwd.isValid) console.error(pwd.errors);

// File Upload
import { validateFileUpload } from '@/lib/security';
const valid = validateFileUpload(file, ['image/jpeg'], 5);

// Rate Limiting
import { checkRateLimit } from '@/lib/security';
const limit = checkRateLimit(userId, 10, 60000);
if (!limit.allowed) throw new Error('Too many requests');

// API Validation
import { withAuth, validateRequest } from '@/lib/api-security';
export async function POST(request) {
  return withAuth(request, async (req) => {
    const { valid, errors } = validateRequest(await req.json(), [
      { field: 'email', type: 'email', required: true }
    ]);
    if (!valid) return Response.json({ errors });
    // Your logic
  });
}
```

### 🌐 Using SEO Utilities

```typescript
import { organizationSchema, generateBreadcrumbs, generateMetaTags } from '@/lib/seo';

// Add structured data to page
<script type="application/ld+json">
  {JSON.stringify(organizationSchema)}
</script>

// Generate meta tags
const meta = generateMetaTags(
  'Page Title',
  'Page description',
  ['keyword1', 'keyword2'],
  'https://image.url',
  'https://page.url'
);

// Generate breadcrumbs
const breadcrumbs = generateBreadcrumbs('/products/niti');
```

### 📋 Common Tasks

**Add form validation:**
```typescript
import { sanitizeInput, isValidEmail } from '@/lib/security';

function handleSubmit(data) {
  data.email = sanitizeInput(data.email);
  if (!isValidEmail(data.email)) throw new Error('Invalid email');
  // Submit form
}
```

**Protect API route:**
```typescript
import { withAuth, validateRequest } from '@/lib/api-security';

export async function POST(request) {
  return withAuth(request, async (req) => {
    const { data, valid, error } = await validateJSON(req);
    if (!valid) return Response.json({ error }, { status: 400 });
    
    // Your handler
  }, { rateLimit: true, maxRequests: 10 });
}
```

**Add SEO meta tags:**
```typescript
import { generateMetaTags, organizationSchema } from '@/lib/seo';

export const metadata = {
  ...generateMetaTags(
    'Niti - Embedded Device',
    'High-performance embedded system',
    ['niti', 'embedded', 'device'],
    'https://image.url',
    'https://ecocee.in/niti'
  )
};
```

## 📂 File Reference

| File | Purpose | Usage |
|------|---------|-------|
| `lib/security.ts` | Input validation, sanitization, rate limiting | Import utilities for security |
| `lib/api-security.ts` | API validation middleware | Wrap API routes for protection |
| `lib/seo.ts` | SEO schemas and meta tags | Generate structured data |
| `lib/config.ts` | Environment configuration | Access app config safely |
| `middleware.ts` | Security headers | Automatically applied |
| `next.config.ts` | Performance & security config | Already configured |

## 🎯 Testing Checklist

- [ ] Security headers present in DevTools
- [ ] Rate limiting works (15+ requests rejected)
- [ ] CORS headers correct for your domain
- [ ] Forms validate input
- [ ] File upload rejects invalid files
- [ ] API routes return safe error messages
- [ ] Meta tags visible in page source
- [ ] Structured data valid (schema.org)
- [ ] Robots.txt accessible
- [ ] Sitemap.xml generates correctly

## 🔗 Important Files to Review

1. **AUDIT_REPORT.md** - Full security audit results
2. **SECURITY_AUDIT.md** - Detailed security findings
3. **IMPLEMENTATION_GUIDE.md** - Step-by-step implementation
4. **This file** - Quick reference

## ⚠️ Common Mistakes to Avoid

❌ **Don't**: Use `NEXT_PUBLIC_` prefix for sensitive keys
✅ **Do**: Only use for public API keys and endpoints

❌ **Don't**: Commit .env files to git
✅ **Do**: Add to .gitignore, share via secure channel

❌ **Don't**: Expose database errors to users
✅ **Do**: Return generic error messages

❌ **Don't**: Trust user input without validation
✅ **Do**: Always validate and sanitize

❌ **Don't**: Use same password for all services
✅ **Do**: Generate strong unique passwords

## 📞 Need Help?

1. Check IMPLEMENTATION_GUIDE.md
2. Review SECURITY_AUDIT.md
3. Read this quick reference
4. Check terminal for error messages
5. Review browser DevTools (Network, Console)

## 🚀 Ready?

```bash
# 1. Rotate API keys (CRITICAL)
# 2. Update .env with new keys
# 3. Test security features
# 4. Deploy to production
# 5. Monitor error logs
```

**Estimated Time**: 
- API rotation: 15 minutes
- Testing: 30 minutes
- Deployment: 10 minutes
- **Total**: ~1 hour

**Go live safely! 🎉**

---

**Version**: 1.0
**Last Updated**: November 22, 2025
