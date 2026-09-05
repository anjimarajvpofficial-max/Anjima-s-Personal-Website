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
  content = content.replace(/<script>[\s\S]*?<\/script>/g, '');
  content = content.replace(/<script id="tailwind-config">[\s\S]*?<\/script>/g, '');
  
  fs.writeFileSync(file, content);
});
console.log('Removed scripts');
