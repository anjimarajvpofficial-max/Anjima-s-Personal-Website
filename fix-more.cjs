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
  
  // Fix boolean attributes
  content = content.replace(/ required=""/g, ' required={true}');
  content = content.replace(/ required="true"/g, ' required={true}');
  content = content.replace(/ disabled=""/g, ' disabled={true}');
  content = content.replace(/ disabled="true"/g, ' disabled={true}');
  content = content.replace(/ selected=""/g, ' selected={true}');
  content = content.replace(/ selected="true"/g, ' selected={true}');
  
  content = content.replace(/ rows="4"/g, ' rows={4}');
  content = content.replace(/ rows="5"/g, ' rows={5}');
  
  // Fix single quote style attributes: style='...'
  content = content.replace(/style='([^']*)'/g, (match, p1) => {
     const styles = p1.split(';').filter(s => s.trim()).map(s => {
       const [key, value] = s.split(':');
       if (!key || !value) return '';
       const camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
       return `${camelKey}: '${value.trim()}'`;
     }).join(', ');
     return `style={{${styles}}}`;
  });

  fs.writeFileSync(file, content);
});
console.log('Fixed more JSX');
