const fs = require('fs');

const file = 'src/app/contact/page.tsx';
let content = fs.readFileSync(file, 'utf8');

if (content.includes('export const metadata')) {
  const metadataRegex = /export const metadata = \{[\s\S]*?\};\n/;
  const match = content.match(metadataRegex);
  
  if (match) {
    fs.writeFileSync('src/app/contact/layout.tsx', `
${match[0]}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
`);
    content = content.replace(metadataRegex, '');
    fs.writeFileSync(file, content);
    console.log('Moved metadata to layout');
  }
}
