const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

const borderRegex = /(?:[a-z0-9:-]+:)?border(?:-[a-z0-9/\[\]-]+)?\b/g;

walkDir('./src/components', (filePath) => {
  if (filePath.endsWith('.tsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    if (borderRegex.test(content)) {
      // Remove the classes
      let newContent = content.replace(borderRegex, '');
      // Clean up multiple spaces that might have been left behind
      newContent = newContent.replace(/className=(["'`])\s+/g, 'className=$1');
      newContent = newContent.replace(/\s+(["'`])/g, '$1');
      newContent = newContent.replace(/\s{2,}/g, ' ');
      
      fs.writeFileSync(filePath, newContent, 'utf8');
      console.log(`Removed borders from ${filePath}`);
    }
  }
});
