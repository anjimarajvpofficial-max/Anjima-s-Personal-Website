import fs from 'fs';
import path from 'path';

const dir = "/Users/amarshafanm/Desktop/AI Website/src/components/sections";
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

for (const file of files) {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Replace export default function ComponentName({ data = [] }: ...) with export default function ComponentName({ cmsData, data = [] }: { cmsData?: any, data?: ... })
  if (content.includes('export default function ') && !content.includes('cmsData?: any')) {
      const functionMatch = content.match(/export default function ([A-Za-z0-9_]+)\(([^)]*)\)/);
      if (functionMatch) {
          const params = functionMatch[2].trim();
          let newParams = '';
          if (params === '') {
              newParams = '{ cmsData }: { cmsData?: any }';
          } else if (params.includes('data')) {
              if (params.includes('data = []')) {
                 newParams = params.replace('{ data = [] }', '{ cmsData, data = [] }').replace('data?:', 'cmsData?: any; data?:');
              } else {
                 newParams = params.replace('{ data }', '{ cmsData, data }').replace('data?:', 'cmsData?: any; data?:');
              }
          } else {
              newParams = params.replace('{', '{ cmsData,').replace(':', ': { cmsData?: any,');
          }
          
          if (newParams) {
              content = content.replace(functionMatch[0], `export default function ${functionMatch[1]}(${newParams})`);
              fs.writeFileSync(filePath, content);
          }
      }
  }
}
console.log("Updated components with cmsData prop");
