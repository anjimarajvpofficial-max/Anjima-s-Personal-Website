import fs from 'fs';

let page = fs.readFileSync('src/app/(site)/page.tsx', 'utf-8');

page = page.replace(
  'client.fetch(`*[_type == "project"] | order(orderRank asc)`),',
  'client.fetch(`*[_type == "project"] | order(orderRank asc) { _id, title, category, metric, youtubeId }`),'
);

page = page.replace(
  'client.fetch(`*[_type == "service"] | order(orderRank asc)`),',
  'client.fetch(`*[_type == "service"] | order(orderRank asc) { _id, num, title, desc, tags }`),'
);

page = page.replace(
  'client.fetch(`*[_type == "testimonial"] | order(orderRank asc)`),',
  'client.fetch(`*[_type == "testimonial"] | order(orderRank asc) { _id, quote, name, role, org }`),'
);

fs.writeFileSync('src/app/(site)/page.tsx', page);
