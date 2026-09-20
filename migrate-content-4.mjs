import { createClient } from '@sanity/client'
const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: '2024-03-15',
})
async function migrate4() {
  const home = await client.getDocument('homePage');
  if (home && home.sections) {
    // 1. Update Statement
    const stmt = home.sections.find(s => s._type === 'statementSection');
    if (stmt) { stmt.label = "CORE PHILOSOPHY"; stmt.text = "Helping brands communicate better."; }
    
    // 2. Update Process
    const proc = home.sections.find(s => s._type === 'processSection');
    if (proc) { 
      proc.label = "METHODOLOGY"; proc.title = "SYSTEM ARCHITECTURE";
      proc.steps = [
        { _key: '1', name: "IDEA", img: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=1600" },
        { _key: '2', name: "SCRIPT", img: "https://images.unsplash.com/photo-1455390582262-044cdead27d8?q=80&w=1600" },
        { _key: '3', name: "SHOOT", img: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=1600" },
        { _key: '4', name: "PRESENT", img: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=1600" },
        { _key: '5', name: "EDIT", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1600" },
        { _key: '6', name: "PUBLISH", img: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1600" },
      ];
    }

    // 3. Update About
    const abt = home.sections.find(s => s._type === 'aboutSection');
    if (abt) {
      abt.timeline = [ { _key: '1', year: "2024 — Present", role: "Founder (Self-Employed)", org: "Turtle Pi Advertising", desc: "Run an independent agency specializing in video production and social media management." }, { _key: '2', year: "2024", role: "Social Media Manager / Presenter", org: "MarketLube", desc: "Crafting and executing comprehensive social media strategies to enhance brand presence, engagement, and customer acquisition." }, { _key: '3', year: "2021 — 2024", role: "Content Creator", org: "Iluzia Lab", desc: "Proven track record of boosting brand visibility and audience engagement through innovative strategies." } ];
      abt.education = [ { _key: '1', degree: "Postgraduate Studies in Physics (Grade A+)", institution: "MES Ponnani College", year: "2019 — 2021", desc: "Completed postgraduate studies in Physics with an overall grade of A+." }, { _key: '2', degree: "Undergraduate Studies in Physics (Grade A)", institution: "MES Mampad College", year: "2016 — 2019", desc: "Completed undergraduate studies in Physics with an overall grade of A." } ];
      abt.achievements = [ "[PLACEHOLDER: Verified achievement or recognition]", "[PLACEHOLDER: Verified achievement or recognition]", "[PLACEHOLDER: Verified achievement or recognition]" ];
    }

    // 4. Update Formula
    const form = home.sections.find(s => s._type === 'formulaSection');
    if (form) {
      form.label = "THE ANJIMA FORMULA // ACADEMIC PHYSICS FOUNDATION";
      form.words = ["CURIOSITY", "+", "STORY", "+", "CAMERA", "+", "STRATEGY", "=", "CONNECTION", "//"];
    }

    // 5. Update Control Room
    const ctrl = home.sections.find(s => s._type === 'controlRoomSection');
    if (ctrl) {
      ctrl.skills = [
        { _key: '1', skill: "VIDEO PRESENTATION", status: "LIVE", code: "V.PRS_01", desc: "Expertise in front-of-camera performance, ensuring clear, engaging, and highly professional delivery for brand messaging and corporate communications." },
        { _key: '2', skill: "CONTENT CREATION", status: "ACTIVE", code: "C.CRT_02", desc: "End-to-end production of digital assets, balancing aesthetic appeal with algorithmic optimization to maximize reach." },
        { _key: '3', skill: "CONTENT WRITING", status: "ACTIVE", code: "C.WRT_03", desc: "Crafting compelling narratives, from video scripts to editorial pieces, prioritizing storytelling and audience retention." },
        { _key: '4', skill: "DIGITAL MARKETING", status: "ACTIVE", code: "D.MRK_04", desc: "Strategic deployment of campaigns across digital channels, utilizing data-driven insights to measure and scale impact." },
        { _key: '5', skill: "SOCIAL MEDIA", status: "RUNNING", code: "S.MED_05", desc: "Community management and platform-specific strategy execution, building brand loyalty and consistent growth." },
        { _key: '6', skill: "PHOTOGRAPHY", status: "EXP.", code: "P.HTO_06", desc: "Visual storytelling through high-end photography, capturing behind-the-scenes moments and campaign stills." },
      ];
    }

    await client.createOrReplace(home);
    console.log("Updated HomePage Sections in Sanity to Advanced Mode");
  }
}
migrate4().catch(console.error);
