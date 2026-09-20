import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: '2024-03-15',
})

async function fixServices() {
  console.log("Fetching broken services...");
  const existingServices = await client.fetch('*[_type == "service"]');
  for (const s of existingServices) {
    await client.delete(s._id);
  }

  console.log("Re-migrating Services properly...");
  const services = [
    { num: "01", title: "Video Presenting & Hosting", desc: "Confident, camera-ready presenting for brand videos, product explainers, UGC and ads.", tags: ["On-Camera", "UGC", "Hosting"] },
    { num: "02", title: "Video Production", desc: "End-to-end video creation — scripting, shooting, editing, and final delivery.", tags: ["Cinematography", "Editing", "Production"] },
    { num: "03", title: "Content Creation", desc: "Short-form video content tailored for Instagram, Reels, TikTok, and YouTube Shorts.", tags: ["Short-Form", "Reels", "TikTok"] },
    { num: "04", title: "Social Media Management", desc: "Planning, posting, and managing brand presence and community across platforms.", tags: ["Community", "Strategy", "Management"] },
    { num: "05", title: "Digital Marketing", desc: "Content strategy, campaign support, and integrated marketing for brand growth.", tags: ["Strategy", "Campaigns", "Growth"] },
    { num: "06", title: "SEO Content Writing", desc: "Keyword-optimized blog articles, website copywriting, and digital web content.", tags: ["SEO", "Copywriting", "Web"] },
  ];
  for (let i = 0; i < services.length; i++) {
    await client.create({ _type: 'service', num: services[i].num, title: services[i].title, desc: services[i].desc, tags: services[i].tags });
  }

  console.log("Services fixed!");
}

fixServices().catch(console.error);
