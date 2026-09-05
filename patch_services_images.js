const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Services.tsx', 'utf8');

content = content.replace(
  '"https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=600"',
  '"/images/uploads/media_1788262953089.png"'
);
content = content.replace(
  '"https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600"',
  '"/images/uploads/media_1788262975505.png"'
);
content = content.replace(
  '"https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=600"',
  '"/images/uploads/media_1788262993855.png"'
);
content = content.replace(
  '"https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=600"',
  '"/images/uploads/media_1788263006115.png"'
);
content = content.replace(
  '"https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600"',
  '"/images/uploads/media_1788263033509.png"'
);

fs.writeFileSync('src/components/sections/Services.tsx', content);
