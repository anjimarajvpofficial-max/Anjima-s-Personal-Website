const fs = require('fs');

function getFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = dir + '/' + file;
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      results = results.concat(getFiles(file));
    } else {
      if (file.endsWith('.tsx')) results.push(file);
    }
  });
  return results;
}

const files = getFiles('src/app');
files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/\/\s*\/\s*>/g, '/>');
  
  // there was an error in src/app/work/page.tsx:
  // error TS1382: Unexpected token. Did you mean `{'>'}` or `&gt;`?
  // this is usually because of an unescaped > or & in text.
  // let's do a quick check, but usually it's fine if the tags are balanced, wait, > in text:
  // I will just use sed or manually replace if needed.
  
  fs.writeFileSync(file, content);
});
console.log('Fixed JSX');
