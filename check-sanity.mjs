import { createClient } from '@sanity/client';
const client = createClient({
  projectId: 'enf05q43',
  dataset: 'production',
  apiVersion: '2024-03-15',
  useCdn: false
});
client.fetch('count(*[_type == "page"])').then(res => console.log('Pages:', res)).catch(console.error);
client.fetch('count(*[_type == "siteSettings"])').then(res => console.log('SiteSettings:', res)).catch(console.error);
