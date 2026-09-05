const fs = require('fs');
const path = require('path');

const metadataMap = {
  'src/app/page.tsx': `export const metadata = {
  title: 'Anjima Raj — Marketing · Media · Creativity',
  description: 'Helping brands communicate better through marketing, media and creativity.',
  openGraph: {
    title: 'Anjima Raj — Marketing · Media · Creativity',
    description: 'Helping brands communicate better through marketing, media and creativity.',
    images: ['[PLACEHOLDER: CLIENT — social sharing image]'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Anjima Raj — Marketing · Media · Creativity',
    description: 'Helping brands communicate better through marketing, media and creativity.',
    images: ['[PLACEHOLDER: CLIENT — social sharing image]'],
  }
};
`,
  'src/app/about/page.tsx': `export const metadata = {
  title: 'About | Anjima Raj',
  description: 'Learn about Anjima Raj, a marketing, media, and creativity professional.',
};
`,
  'src/app/services/page.tsx': `export const metadata = {
  title: 'Services | Anjima Raj',
  description: 'Marketing strategy, social media, AI marketing, creative production, and digital campaigns by Anjima Raj.',
};
`,
  'src/app/work/page.tsx': `export const metadata = {
  title: 'Work | Anjima Raj',
  description: 'Selected marketing and media work by Anjima Raj.',
};
`,
  'src/app/contact/page.tsx': `export const metadata = {
  title: 'Contact | Anjima Raj',
  description: 'Get in touch with Anjima Raj for marketing and media projects.',
};
`
};

for (const [file, meta] of Object.entries(metadataMap)) {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    if (!content.includes('export const metadata')) {
        // Find the first line that is not an import or 'use client'
        let lines = content.split('\n');
        let insertIndex = 0;
        for (let i = 0; i < lines.length; i++) {
            if (lines[i].startsWith('export default function')) {
                insertIndex = i;
                break;
            }
        }
        lines.splice(insertIndex, 0, meta);
        fs.writeFileSync(file, lines.join('\n'));
    }
  }
}
console.log('Metadata added');
