import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id-here',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: '2024-03-15',
})

async function migrate() {
  if (client.config().projectId === 'your-project-id-here') {
    console.error("Please add your Sanity Project ID and Token to .env.local first.");
    return;
  }

  console.log("Migrating Site Settings...");
  await client.createOrReplace({
    _id: 'siteSettings',
    _type: 'siteSettings',
    title: 'Anjima Raj',
    contactEmail: 'hello@anjimaraj.com',
    socialLinks: [
      { _key: 'linkedin', platform: 'LinkedIn', url: 'https://linkedin.com/in/anjimaraj' },
      { _key: 'instagram', platform: 'Instagram', url: 'https://instagram.com/ima.janlie' },
      { _key: 'youtube', platform: 'YouTube', url: 'https://youtube.com/@anjima' },
    ]
  });

  console.log("Migrating Global Theme...");
  await client.createOrReplace({
    _id: 'globalTheme',
    _type: 'globalTheme',
    colors: {
      ink: '#050505',
      paper: '#f4f4f0',
      accent: '#ff0050',
      inkLight: '#1a1a1a',
      paperDim: '#e0e0dc',
    }
  });

  console.log("Migrating Global SEO...");
  await client.createOrReplace({
    _id: 'globalSeo',
    _type: 'globalSeo',
    siteTitle: 'Anjima Raj — Marketing · Media · Creativity',
    siteDescription: 'Helping brands communicate better through marketing, media and creativity. Strategic storytelling, digital campaigns, social media, AI marketing, and creative production.',
    keywords: ['Digital Marketing', 'Marketing Strategy', 'Social Media', 'Content Marketing', 'AI Marketing', 'Creative Production', 'Brand Marketing', 'Anjima Raj']
  });

  console.log("Migrating Navigation...");
  await client.createOrReplace({
    _id: 'navigation',
    _type: 'navigation',
    mainNav: [
      { _key: 'about', label: 'About', url: '/#about' },
      { _key: 'work', label: 'Work', url: '/#work' },
      { _key: 'services', label: 'Services', url: '/#services' },
      { _key: 'insights', label: 'Insights', url: '/#insights' },
    ],
    footerLinks: [
      { _key: 'email', label: 'hello@anjimaraj.com', url: 'mailto:hello@anjimaraj.com' }
    ]
  });

  console.log("Migrating Home Page...");
  await client.createOrReplace({
    _id: 'homePage',
    _type: 'page',
    title: 'Home',
    slug: { _type: 'slug', current: 'home' },
    sections: [
      { _key: 'hero1', _type: 'heroSection', title: 'ANJIMA', subtitle: 'VISUAL STRATEGIST / CREATIVE DIRECTOR' },
      { _key: 'stat1', _type: 'statementSection', text: 'Strategy without creativity is invisible. Creativity without strategy is art.' },
      { _key: 'trans1', _type: 'transmissionsSection', title: 'Transmissions', description: 'Selected case studies.' },
      { _key: 'serv1', _type: 'servicesSection', title: 'Services' },
      { _key: 'proc1', _type: 'processSection', title: 'Process', steps: [ { _key: 's1', number: '01', title: 'Audit', description: 'Deep dive.' } ] },
      { _key: 'test1', _type: 'testimonialsSection', title: 'Signals' },
      { _key: 'ctrl1', _type: 'controlRoomSection', title: 'Control Room' },
      { _key: 'abt1', _type: 'aboutSection', title: 'About' },
      { _key: 'form1', _type: 'formulaSection', title: 'Formula' },
      { _key: 'ins1', _type: 'insightsSection', title: 'Insights' },
    ]
  });

  console.log("Migration completed!");
}

migrate().catch(console.error);
