import fs from 'fs';
import path from 'path';

const schemaDir = "/Users/amarshafanm/Desktop/AI Website/src/sanity/schemaTypes";
const files = ['projectType.ts', 'serviceType.ts', 'testimonialType.ts', 'insightType.ts'];

for (const file of files) {
  const filePath = path.join(schemaDir, file);
  let content = fs.readFileSync(filePath, 'utf-8');
  
  if (!content.includes('orderRankField')) {
    content = content.replace("import { defineField, defineType } from 'sanity'", "import { defineField, defineType } from 'sanity'\nimport {orderRankField, orderRankOrdering} from '@sanity/orderable-document-list'");
    
    // Add orderRankField to fields array (before closing bracket of fields)
    content = content.replace('  ],\n', '    orderRankField({ type: "' + file.replace('Type.ts', '') + '" }),\n  ],\n');
    
    // Check if there are existing orderings, if not create it, else append
    if (content.includes('orderings: [')) {
        // Just leave the existing orderings but append orderRankOrdering? Actually we just need orderRankField
        // orderRankOrdering is usually not needed manually if we just use the desk tool, but let's add it.
        // wait, projectType.ts has orderings: [ ... ]
        // I will just let the plugin handle it through the desk structure
    }
    
    fs.writeFileSync(filePath, content);
  }
}
console.log("Updated schemas with orderRankField");
