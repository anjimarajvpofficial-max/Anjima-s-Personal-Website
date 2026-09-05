const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Insights.tsx', 'utf8');

content = content.replace(
  '"https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800"',
  '"/images/uploads/media_1788247750590.png"'
);
content = content.replace(
  '"https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=800"',
  '"/images/uploads/media_1788251311013.png"'
);
content = content.replace(
  '"https://images.unsplash.com/photo-1611532736597-de2d4265fba3?q=80&w=800"',
  '"/images/uploads/media_1788253527984.png"'
);
content = content.replace(
  '"https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800"',
  '"/images/uploads/media_1788260610639.png"'
);

fs.writeFileSync('src/components/sections/Insights.tsx', content);
