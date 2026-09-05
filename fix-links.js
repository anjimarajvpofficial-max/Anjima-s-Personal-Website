const fs = require('fs');
const path = require('path');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) { 
      results = results.concat(getFiles(fullPath));
    } else {
      if (fullPath.endsWith('.tsx')) results.push(fullPath);
    }
  });
  return results;
}

const files = getFiles('src/app');

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  // Replace links based on the text inside the tag
  content = content.replace(/<a([^>]*)href="#"([^>]*)>Home<\/a>/g, '<a$1href="/"$2>Home</a>');
  content = content.replace(/<a([^>]*)href="#"([^>]*)>Work<\/a>/g, '<a$1href="/work"$2>Work</a>');
  content = content.replace(/<a([^>]*)href="#"([^>]*)>Services<\/a>/g, '<a$1href="/services"$2>Services</a>');
  content = content.replace(/<a([^>]*)href="#"([^>]*)>About<\/a>/g, '<a$1href="/about"$2>About</a>');
  content = content.replace(/<a([^>]*)href="#"([^>]*)>Contact<\/a>/g, '<a$1href="/contact"$2>Contact</a>');
  
  // Replace the logo link (has aria-label="Home" or just surrounds an img)
  // Easiest is to replace <a aria-label="Home" href="#"> with <a aria-label="Home" href="/">
  content = content.replace(/<a([^>]*)aria-label="Home"([^>]*)href="#"/g, '<a$1aria-label="Home"$2href="/"');
  content = content.replace(/<a([^>]*)href="#"([^>]*)aria-label="Home"/g, '<a$1href="/"$2aria-label="Home"');

  // There might be some "Read All Articles" pointing to insights, but no insights page exists. Let's just point to "#" for those or "/insights"
  content = content.replace(/<a([^>]*)href="#"([^>]*)>Insights<\/a>/g, '<a$1href="/#"$2>Insights</a>');
  
  // We'll also change <a> to next/link for better experience if we want, but let's just use <a> with valid href for now to avoid import issues.
  
  fs.writeFileSync(file, content);
});

console.log('Fixed links!');
