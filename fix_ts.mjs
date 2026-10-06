import fs from 'fs';

let about = fs.readFileSync('src/components/sections/About.tsx', 'utf-8');
about = about.replace('timeline.map((item, i)', 'timeline.map((item: any, i: number)');
about = about.replace('education.map((e, i)', 'education.map((e: any, i: number)');
about = about.replace('achievements.map((item, i)', 'achievements.map((item: any, i: number)');
fs.writeFileSync('src/components/sections/About.tsx', about);

let control = fs.readFileSync('src/components/sections/ControlRoom.tsx', 'utf-8');
control = control.replace('skills.map((skill, i)', 'skills.map((skill: any, i: number)');
fs.writeFileSync('src/components/sections/ControlRoom.tsx', control);

let hero = fs.readFileSync('src/components/sections/Hero.tsx', 'utf-8');
hero = hero.replace('titleText.split("").map((letter, i)', 'titleText.split("").map((letter: string, i: number)');
fs.writeFileSync('src/components/sections/Hero.tsx', hero);

let process = fs.readFileSync('src/components/sections/Process.tsx', 'utf-8');
process = process.replace('steps.map((step, i)', 'steps.map((step: any, i: number)');
fs.writeFileSync('src/components/sections/Process.tsx', process);

let stmt = fs.readFileSync('src/components/sections/Statement.tsx', 'utf-8');
stmt = stmt.replace('words.map((word, i)', 'words.map((word: string, i: number)');
fs.writeFileSync('src/components/sections/Statement.tsx', stmt);
