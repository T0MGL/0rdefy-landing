# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Ordefy Waitlist is a standalone waitlist landing page for the Ordefy e-commerce platform. It features a typeform-style multi-step registration form with a Three.js shader animation background that displays once per user (stored in localStorage).

**Key characteristics:**
- Single-page React application built with Vite
- Minimalist dark design with lime green (`hsl(84 81% 63%)`) as primary color
- Webhook-based data collection (no backend in this repo)
- Deployed to Vercel

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:8080)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

Note: Development server runs on port 8080 (configured in vite.config.ts:10).

## Architecture

### Routing Structure
The app uses React Router with three routes (src/main.tsx:14-16):
- `/` - Main whitelist form (alias for /whitelist)
- `/whitelist` - Main whitelist form
- `/waitlist-success` - Confirmation page after successful registration

### Data Flow
1. User enters email on first screen
2. User completes 7-question typeform-style form
3. Data submits to API route `/api/submit-waitlist` (src/pages/Whitelist.tsx:96)
4. API route forwards to n8n webhook (hidden from client) (api/submit-waitlist.js:31)
5. On success, user redirects to `/waitlist-success`

**Security**: The n8n webhook URL is hidden in the serverless function to prevent exposure in client code.

Webhook payload structure (src/pages/Whitelist.tsx:87-92):
```json
{
  "email": "string",
  "businessName": "string",
  "website": "string",
  "city": "string",
  "monthlyRevenue": "string",
  "monthlyOrders": "string",
  "mainProducts": "string",
  "phone": "string",
  "timestamp": "ISO 8601 string"
}
```

### Component Structure
- **Pages**: `src/pages/`
  - `Whitelist.tsx` - Main registration form with email collection and multi-step questions
  - `WaitlistSuccess.tsx` - Post-registration confirmation page

- **UI Components**: `src/components/ui/`
  - `shader-animation.tsx` - Three.js WebGL shader animation (lime green concentric circles)
  - shadcn/ui components: `button.tsx`, `input.tsx`, `toast.tsx`, `toaster.tsx`

- **Hooks**: `src/hooks/`
  - `useLocalStorage.ts` - localStorage persistence
  - `use-toast.ts` - Toast notifications

### Design System (src/index.css)
- Primary color: `hsl(84 81% 63%)` - Lime green
- Background: Black/dark sidebar tones
- All colors defined as HSL in CSS variables
- Uses Tailwind CSS with custom animations (fade-in, shimmer, glow, float)

### Key Technical Details
- **Path aliasing**: `@/` maps to `src/` (vite.config.ts:14-16)
- **SPA routing**: `vercel.json` rewrites all routes to `/index.html` for client-side routing
- **Animation persistence**: Shader animation shown once per device (localStorage key: `whitelist_animation_shown`)
- **Three.js cleanup**: Proper disposal of renderer, geometry, and materials in useEffect cleanup (src/components/ui/shader-animation.tsx:127-141)

## Important Patterns

### API Routes (Vercel Serverless Functions)
The `/api` directory contains serverless functions that run on Vercel:
- `api/submit-waitlist.js` - Proxies waitlist submissions to n8n webhook, hiding the webhook URL from client code

### Modifying the Webhook URL
The webhook URL is stored in `api/submit-waitlist.js:31`. To change it, edit the `webhookUrl` constant. The URL is intentionally server-side to prevent exposure in client bundles.

### Form Questions
The 7 registration questions are defined in `src/pages/Whitelist.tsx:9-17`. To add/remove questions, modify this array. Each question requires:
- `id` - Property name in webhook payload
- `label` - Question text shown to user
- `placeholder` - Input placeholder
- `type` - HTML input type (text/number/tel)

### Styling Conventions
- Use Tailwind CSS utility classes
- Primary color references: `bg-primary`, `text-primary`, `border-primary`
- Consistent backdrop-blur and gradient overlays for glassmorphism effect
- Custom animations defined in tailwind.config.ts (keyframes section)

## SEO Optimization

The app includes comprehensive SEO features:
- **Meta tags**: Complete Open Graph, Twitter Card, and geo tags in `index.html`
- **Sitemap**: `public/sitemap.xml` lists all pages with priorities
- **Robots.txt**: `public/robots.txt` allows search engine crawling and references sitemap
- **Favicons**: Multiple formats (ICO, SVG) for broad compatibility
- **Structured data**: Keywords targeting Paraguay e-commerce market

## Deployment

This project is configured for Vercel deployment. The `vercel.json` file ensures SPA routing works correctly by rewriting all paths to `/index.html`.

**Vercel-specific features:**
- Serverless API routes in `/api` directory
- Automatic CORS handling in API functions
- Environment variables support (if needed in future)

**For deployment elsewhere:**
1. Run `npm run build` to generate `dist/` folder
2. Ensure hosting supports:
   - SPA rewrites (all routes → index.html)
   - Serverless functions or API proxy capability
3. If serverless functions aren't supported, you'll need to modify the webhook approach
