import { createClient } from '@sanity/client'
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: '2024-03-15',
})
async function fixHero() {
  const home = await client.getDocument('homePage');
  if (home && home.sections && home.sections[0] && home.sections[0]._type === 'heroSection') {
    home.sections[0].subtitle = "ON AIR";
    await client.createOrReplace(home);
    console.log("Updated Hero Section in Sanity to ON AIR");
  }
}
fixHero().catch(console.error);
