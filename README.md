# Anjima Raj — Production Website

This is the production-ready Next.js application for the Anjima Raj personal brand website, faithfully implementing the Google Stitch design.

## Project Overview
- **Brand**: Anjima Raj
- **Positioning**: Marketing · Media · Creativity
- **Technology**: Next.js 16 (App Router), TypeScript, Tailwind CSS

## Installation
1. Install dependencies: \`npm install\`
2. Set up environment variables (see below)

## Development
Run the development server:
\`\`\`bash
npm run dev
\`\`\`

## Environment Variables
Copy \`.env.example\` to \`.env.local\` and populate the values:
- \`CONTACT_EMAIL\`: Where form inquiries are sent
- \`EMAIL_PROVIDER_API_KEY\`: Your email service API key (e.g. Resend, SendGrid)
- \`ANALYTICS_ID\`: Google Analytics or other tracker ID
- \`SITE_URL\`: Production URL (https://anjimaraj.com)

## Build & Deployment
Build for production:
\`\`\`bash
npm run build
npm start
\`\`\`
Ready for deployment on Vercel, Netlify, or any standard Node.js server.

## Asset Replacement
Before final deployment, replace the placeholder assets in \`public/\`:
- \`/public/images/portrait.jpg\`
- \`/public/documents/cv.pdf\`
- Project imagery

## Content Documentation
- **Work**: Update project details in \`src/app/work/page.tsx\`
- **Services**: Update descriptions in \`src/app/services/page.tsx\`
- **About / Career / Testimonials**: Update verified facts in \`src/app/about/page.tsx\` and \`src/app/page.tsx\`
- **Contact**: API route is configured at \`src/app/api/contact/route.ts\`

## Zero Redesign Rule
This implementation maintains strict visual fidelity to the approved Google Stitch design. Do not modify layout, spacing, colors, or typography without explicit design approval.
