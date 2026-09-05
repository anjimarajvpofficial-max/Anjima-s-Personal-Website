const fs = require('fs');

const pages = {
  home: { file: 'home.html', route: 'src/app/page.tsx' },
  work: { file: 'work.html', route: 'src/app/work/page.tsx' },
  services: { file: 'services.html', route: 'src/app/services/page.tsx' },
  contact: { file: 'contact.html', route: 'src/app/contact/page.tsx' },
  about: { file: 'about.html', route: 'src/app/about/page.tsx' }
};

let tailwindConfigString = '';

for (const [name, config] of Object.entries(pages)) {
  const html = fs.readFileSync(config.file, 'utf8');
  
  if (!tailwindConfigString) {
    const match = html.match(/tailwind\.config = (\{[\s\S]*?\});/);
    if (match) {
      tailwindConfigString = match[1];
    }
  }

  // extract body content
  const bodyMatch = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  let bodyContent = bodyMatch ? bodyMatch[1] : '';
  
  // Convert basic HTML to JSX (class -> className, etc.)
  bodyContent = bodyContent.replace(/class=/g, 'className=')
                           .replace(/<!--[\s\S]*?-->/g, '')
                           .replace(/<img([^>]*)>/g, '<img$1 />')
                           .replace(/<input([^>]*)>/g, '<input$1 />')
                           .replace(/<hr([^>]*)>/g, '<hr$1 />')
                           .replace(/<br([^>]*)>/g, '<br$1 />')
                           .replace(/for=/g, 'htmlFor=')
                           .replace(/stroke-width=/g, 'strokeWidth=')
                           .replace(/stroke-linecap=/g, 'strokeLinecap=')
                           .replace(/stroke-linejoin=/g, 'strokeLinejoin=')
                           .replace(/fill-rule=/g, 'fillRule=')
                           .replace(/clip-rule=/g, 'clipRule=')
                           .replace(/viewBox=/g, 'viewBox=')
                           .replace(/style="([^"]*)"/g, (match, p1) => {
                             // crude inline style to JSX object
                             const styles = p1.split(';').filter(s => s.trim()).map(s => {
                               const [key, value] = s.split(':');
                               if (!key || !value) return '';
                               const camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
                               return `${camelKey}: '${value.trim().replace(/'/g, "\\'")}'`;
                             }).join(', ');
                             return `style={{${styles}}}`;
                           });

  // Extract <style> blocks from head that might have custom CSS
  const styleMatch = html.match(/<style>([\s\S]*?)<\/style>/g);
  let globalCss = '';
  if (styleMatch) {
    globalCss = styleMatch.map(s => s.replace(/<style>/, '').replace(/<\/style>/, '')).join('\n');
  }

  const componentCode = `export default function ${name.charAt(0).toUpperCase() + name.slice(1)}() {\n  return (\n    <>\n${bodyContent}\n    </>\n  );\n}\n`;
  
  const dir = config.route.substring(0, config.route.lastIndexOf('/'));
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(config.route, componentCode);
  
  if (name === 'home') {
    // Generate layout
    const layoutCode = `import './globals.css';\n\nexport default function RootLayout({ children }: { children: React.ReactNode }) {\n  return (\n    <html lang="en">\n      <body>{children}</body>\n    </html>\n  );\n}\n`;
    fs.writeFileSync('src/app/layout.tsx', layoutCode);
    
    // global css
    fs.writeFileSync('src/app/globals.css', `@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n${globalCss}`);
  }
}

// Write tailwind config
if (tailwindConfigString) {
  const tsConfig = `import type { Config } from "tailwindcss";

const config: Config = ${tailwindConfigString};
export default config;
`;
  fs.writeFileSync('tailwind.config.ts', tsConfig);
}

// postcss config
fs.writeFileSync('postcss.config.js', `module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
`);

console.log('App generation complete');
