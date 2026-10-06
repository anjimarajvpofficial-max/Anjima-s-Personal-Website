import fs from 'fs';

let layout = fs.readFileSync('src/app/(site)/layout.tsx', 'utf-8');

// Remove the old meta tag
layout = layout.replace('<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />', '');

// Add the viewport export at the top (after import statements)
const viewportExport = `\nexport const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};\n`;

layout = layout.replace('export async function generateMetadata', viewportExport + '\nexport async function generateMetadata');

fs.writeFileSync('src/app/(site)/layout.tsx', layout);
