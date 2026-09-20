import { createClient } from '@sanity/client'

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: '2024-03-15',
})

async function migrate() {
  console.log("Migrating Projects...");
  const projects = [
    { title: "Creative Direction", category: "Commercial Campaign", metric: "2.4M+ Impressions", youtubeId: "Z9QNH7goiQM" },
    { title: "Brand Narrative", category: "Digital Storytelling", metric: "High Engagement", youtubeId: "-3jb0t13N54" },
    { title: "Product Launch", category: "Social Strategy", metric: "Key Performance", youtubeId: "dtZvK-8fNcQ" },
    { title: "Editorial Piece", category: "Brand Identity", metric: "Viral Reach", youtubeId: "2YsGt8mNxyA" },
    { title: "Visual Campaign", category: "Content Creation", metric: "Global Audience", youtubeId: "sQvhrRsMC8A" },
    { title: "Strategic Vision", category: "Creative Media", metric: "Targeted Impact", youtubeId: "N11yuKp9ADk" },
  ];
  for (let i = 0; i < projects.length; i++) {
    await client.create({ _type: 'project', ...projects[i] });
  }

  console.log("Migrating Services...");
  const services = [
    { title: "Video Presenting & Hosting", desc: "Confident, camera-ready presenting for brand videos, product explainers, UGC and ads.", tags: ["On-Camera", "UGC", "Hosting"] },
    { title: "Video Production", desc: "End-to-end video creation — scripting, shooting, editing, and final delivery.", tags: ["Cinematography", "Editing", "Production"] },
    { title: "Content Creation", desc: "Short-form video content tailored for Instagram, Reels, TikTok, and YouTube Shorts.", tags: ["Short-Form", "Reels", "TikTok"] },
    { title: "Social Media Management", desc: "Planning, posting, and managing brand presence and community across platforms.", tags: ["Community", "Strategy", "Management"] },
    { title: "Digital Marketing", desc: "Content strategy, campaign support, and integrated marketing for brand growth.", tags: ["Strategy", "Campaigns", "Growth"] },
    { title: "SEO Content Writing", desc: "Keyword-optimized blog articles, website copywriting, and digital web content.", tags: ["SEO", "Copywriting", "Web"] },
  ];
  for (let i = 0; i < services.length; i++) {
    await client.create({ _type: 'service', title: services[i].title, description: services[i].desc });
  }

  console.log("Migrating Testimonials...");
  const testimonials = [
    { quote: "Anjima Raj has a rare ability to combine strategic thinking with creative execution. She doesn't just create content — she builds narratives that genuinely connect with audiences.", name: "Sarah Jenkins", role: "CMO", org: "TechFlow" },
    { quote: "Working with Anjima Raj transformed how we communicated our brand online. Her understanding of digital platforms and audience psychology is exceptional.", name: "Marcus Thorne", role: "Founder", org: "Thorne Media" },
    { quote: "The level of professionalism and creative vision Anjima Raj brings to every project is outstanding. She elevated our entire marketing presence.", name: "Elena Rostova", role: "Marketing Director", org: "Elevate Global" },
  ];
  for (let i = 0; i < testimonials.length; i++) {
    await client.create({ _type: 'testimonial', ...testimonials[i] });
  }

  console.log("Migrating Insights...");
  const insights = [
    { category: "AI & Technology", title: "How AI is Reshaping the Marketing Landscape in 2026", excerpt: "From content generation to hyper-personalised campaigns, AI is no longer a future concept — it is the present competitive advantage.", readTime: "5 min read" },
    { category: "Marketing Strategy", title: "Why Brand Storytelling Still Wins in a Data-First World", excerpt: "Metrics matter. But the brands that endure are the ones that made you feel something first.", readTime: "4 min read" },
    { category: "Media & Creativity", title: "Short-Form Video: The Architecture of Attention", excerpt: "The first 1.5 seconds decide everything. A breakdown of what makes short-form content genuinely work.", readTime: "6 min read" },
    { category: "Professional Experience", title: "Lessons From the Field: What Marketing School Doesn't Teach You", excerpt: "The real curriculum of professional marketing is written in client meetings, failed campaigns, and unexpected wins.", readTime: "7 min read" },
  ];
  for (let i = 0; i < insights.length; i++) {
    await client.create({ _type: 'insight', ...insights[i] });
  }

  console.log("Migration 2 completed!");
}

migrate().catch(console.error);
