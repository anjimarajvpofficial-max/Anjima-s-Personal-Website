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

  // We want to remove `selected={true}` from <option>
  // And ideally add defaultValue="" to <select> if it has an empty option that was selected.
  // We can just use a simple regex to remove selected={true} because in uncontrolled forms React defaults to the first option,
  // but better yet we can add defaultValue="" to the <select> tag.
  
  if (content.includes('selected={true}')) {
    // Replace <select ...> with <select defaultValue="" ...> 
    // It's a bit tricky to parse HTML precisely with regex, but we can try:
    content = content.replace(/<select([^>]*)>/g, (match, attrs) => {
        if (!attrs.includes('defaultValue')) {
            return `<select defaultValue=""${attrs}>`;
        }
        return match;
    });

    // Now remove selected={true} from option
    content = content.replace(/ selected=\{true\}/g, '');
    content = content.replace(/ selected=""/g, '');
    content = content.replace(/ selected/g, ''); // just in case
    
    fs.writeFileSync(file, content);
  }
});

console.log('Fixed select/option selected attributes!');
