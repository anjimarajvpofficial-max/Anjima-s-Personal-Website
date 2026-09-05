const fs = require('fs');

const newServices = `const services = [
  { 
    num: "01", 
    title: "Video Presenting & Hosting", 
    desc: "Confident, camera-ready presenting for brand videos, product explainers, UGC and ads.", 
    tags: ["On-Camera", "UGC", "Hosting"],
    img: "https://images.unsplash.com/photo-1516280440502-6c361e2b5e0c?q=80&w=600"
  },
  { 
    num: "02", 
    title: "Video Production", 
    desc: "End-to-end video creation — scripting, shooting, editing, and final delivery.", 
    tags: ["Cinematography", "Editing", "Production"],
    img: "https://images.unsplash.com/photo-1601506521937-0121a7fc2a6b?q=80&w=600"
  },
  { 
    num: "03", 
    title: "Content Creation", 
    desc: "Short-form video content tailored for Instagram, Reels, TikTok, and YouTube Shorts.", 
    tags: ["Short-Form", "Reels", "TikTok"],
    img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=600"
  },
  { 
    num: "04", 
    title: "Social Media Management", 
    desc: "Planning, posting, and managing brand presence and community across platforms.", 
    tags: ["Community", "Strategy", "Management"],
    img: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?q=80&w=600"
  },
  { 
    num: "05", 
    title: "Digital Marketing", 
    desc: "Content strategy, campaign support, and integrated marketing for brand growth.", 
    tags: ["Strategy", "Campaigns", "Growth"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600"
  },
  { 
    num: "06", 
    title: "SEO Content Writing", 
    desc: "Keyword-optimized blog articles, website copywriting, and digital web content.", 
    tags: ["Copywriting", "SEO", "Blogs"],
    img: "https://images.unsplash.com/photo-1455390582262-044cdead27d8?q=80&w=600"
  },
  { 
    num: "07", 
    title: "Script Writing", 
    desc: "Engaging and high-retention scripts for social media campaigns and video ads.", 
    tags: ["Scripts", "Ads", "Retention"],
    img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=600"
  },
  { 
    num: "08", 
    title: "Team Coordination", 
    desc: "Assembling and managing a freelance crew for larger scale video projects.", 
    tags: ["Management", "Crew", "Logistics"],
    img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600"
  }
];`;

let content = fs.readFileSync('src/components/sections/Services.tsx', 'utf8');

// Replace the existing services array
content = content.replace(/const services = \[[\s\S]*?\];/, newServices);

// Also update the description in the Services section from "Five core disciplines" to "Eight core disciplines"
content = content.replace(
  'Five core disciplines.<br />One integrated approach.',
  'Eight core disciplines.<br />One integrated approach.'
);

fs.writeFileSync('src/components/sections/Services.tsx', content);

