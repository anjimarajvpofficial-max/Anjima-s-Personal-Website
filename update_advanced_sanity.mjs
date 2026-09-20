import fs from 'fs';

// --- 1. Schemas ---
fs.writeFileSync('src/sanity/schemaTypes/aboutSectionType.ts', `
import { defineField, defineType } from 'sanity'
export const aboutSectionType = defineType({
  name: 'aboutSection', title: 'About Section', type: 'object',
  fields: [
    defineField({ name: 'timeline', title: 'Timeline', type: 'array', of: [{ type: 'object', fields: [ {name: 'year', type: 'string'}, {name: 'role', type: 'string'}, {name: 'org', type: 'string'}, {name: 'desc', type: 'text'} ] }] }),
    defineField({ name: 'education', title: 'Education', type: 'array', of: [{ type: 'object', fields: [ {name: 'year', type: 'string'}, {name: 'degree', type: 'string'}, {name: 'institution', type: 'string'}, {name: 'desc', type: 'text'} ] }] }),
    defineField({ name: 'achievements', title: 'Achievements', type: 'array', of: [{ type: 'string' }] }),
  ]
})
`);

fs.writeFileSync('src/sanity/schemaTypes/processSectionType.ts', `
import { defineField, defineType } from 'sanity'
export const processSectionType = defineType({
  name: 'processSection', title: 'Process Section', type: 'object',
  fields: [
    defineField({ name: 'steps', title: 'Steps', type: 'array', of: [{ type: 'object', fields: [ {name: 'name', type: 'string'}, {name: 'img', type: 'string', title: 'Image URL'} ] }] })
  ]
})
`);

fs.writeFileSync('src/sanity/schemaTypes/controlRoomSectionType.ts', `
import { defineField, defineType } from 'sanity'
export const controlRoomSectionType = defineType({
  name: 'controlRoomSection', title: 'Control Room Section', type: 'object',
  fields: [
    defineField({ name: 'skills', title: 'Skills', type: 'array', of: [{ type: 'object', fields: [ {name: 'skill', type: 'string'}, {name: 'status', type: 'string'}, {name: 'code', type: 'string'}, {name: 'desc', type: 'text'} ] }] })
  ]
})
`);

fs.writeFileSync('src/sanity/schemaTypes/formulaSectionType.ts', `
import { defineField, defineType } from 'sanity'
export const formulaSectionType = defineType({
  name: 'formulaSection', title: 'Formula Section', type: 'object',
  fields: [
    defineField({ name: 'words', title: 'Words (Marquee)', type: 'array', of: [{ type: 'string' }] }),
    defineField({ name: 'label', title: 'Label', type: 'string' })
  ]
})
`);

// --- 2. Components ---
let about = fs.readFileSync('src/components/sections/About.tsx', 'utf-8');
about = about.replace(/const timeline = \[[\s\S]*?\];/, 'const defaultTimeline = [ { year: "2024 — Present", role: "Founder (Self-Employed)", org: "Turtle Pi Advertising", desc: "Run an independent agency specializing in video production and social media management." }, { year: "2024", role: "Social Media Manager / Presenter", org: "MarketLube", desc: "Crafting and executing comprehensive social media strategies to enhance brand presence, engagement, and customer acquisition." }, { year: "2021 — 2024", role: "Content Creator", org: "Iluzia Lab", desc: "Proven track record of boosting brand visibility and audience engagement through innovative strategies." } ];');
about = about.replace(/const education = \[[\s\S]*?\];/, 'const defaultEducation = [ { degree: "Postgraduate Studies in Physics (Grade A+)", institution: "MES Ponnani College", year: "2019 — 2021", desc: "Completed postgraduate studies in Physics with an overall grade of A+." }, { degree: "Undergraduate Studies in Physics (Grade A)", institution: "MES Mampad College", year: "2016 — 2019", desc: "Completed undergraduate studies in Physics with an overall grade of A." } ];');
about = about.replace(/const achievements = \[[\s\S]*?\];/, 'const defaultAchievements = [ "[PLACEHOLDER: Verified achievement or recognition]", "[PLACEHOLDER: Verified achievement or recognition]", "[PLACEHOLDER: Verified achievement or recognition]" ];');
about = about.replace('export default function About({ cmsData }: { cmsData?: any }) {', `export default function About({ cmsData }: { cmsData?: any }) {
  const timeline = cmsData?.timeline?.length > 0 ? cmsData.timeline : defaultTimeline;
  const education = cmsData?.education?.length > 0 ? cmsData.education : defaultEducation;
  const achievements = cmsData?.achievements?.length > 0 ? cmsData.achievements : defaultAchievements;`);
fs.writeFileSync('src/components/sections/About.tsx', about);

let form = fs.readFileSync('src/components/sections/Formula.tsx', 'utf-8');
form = form.replace(/const words = \[.*?\];/, 'const words = cmsData?.words?.length > 0 ? cmsData.words : ["CURIOSITY", "+", "STORY", "+", "CAMERA", "+", "STRATEGY", "=", "CONNECTION", "//"];');
form = form.replace('THE ANJIMA FORMULA // ACADEMIC PHYSICS FOUNDATION', '{cmsData?.label || "THE ANJIMA FORMULA // ACADEMIC PHYSICS FOUNDATION"}');
fs.writeFileSync('src/components/sections/Formula.tsx', form);

let ctrl = fs.readFileSync('src/components/sections/ControlRoom.tsx', 'utf-8');
ctrl = ctrl.replace(/const skills = \[[\s\S]*?\];/, `const skills = cmsData?.skills?.length > 0 ? cmsData.skills : [
    { skill: "VIDEO PRESENTATION", status: "LIVE", code: "V.PRS_01", desc: "Expertise in front-of-camera performance, ensuring clear, engaging, and highly professional delivery for brand messaging and corporate communications." },
    { skill: "CONTENT CREATION", status: "ACTIVE", code: "C.CRT_02", desc: "End-to-end production of digital assets, balancing aesthetic appeal with algorithmic optimization to maximize reach." },
    { skill: "CONTENT WRITING", status: "ACTIVE", code: "C.WRT_03", desc: "Crafting compelling narratives, from video scripts to editorial pieces, prioritizing storytelling and audience retention." },
    { skill: "DIGITAL MARKETING", status: "ACTIVE", code: "D.MRK_04", desc: "Strategic deployment of campaigns across digital channels, utilizing data-driven insights to measure and scale impact." },
    { skill: "SOCIAL MEDIA", status: "RUNNING", code: "S.MED_05", desc: "Community management and platform-specific strategy execution, building brand loyalty and consistent growth." },
    { skill: "PHOTOGRAPHY", status: "EXP.", code: "P.HTO_06", desc: "Visual storytelling through high-end photography, capturing behind-the-scenes moments and campaign stills." },
  ];`);
fs.writeFileSync('src/components/sections/ControlRoom.tsx', ctrl);

