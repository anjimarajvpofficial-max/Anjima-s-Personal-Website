const fs = require('fs');

const file = 'src/app/page.tsx';
let content = fs.readFileSync(file, 'utf8');

// Replace Turtle Pi placeholder
content = content.replace(
  '[PLACEHOLDER: CLIENT - Description of Turtle Pi Advertising, focusing on video production and social media management services provided by Anjima.]',
  'Run an independent agency specializing in video production and social media management.'
);

// Replace Projects/Transmissions with actual CV work experience
const newWorkSection = `
        <div className="space-y-40">
          {[
            { 
              ep: 'EP. 03', 
              title: 'TURTLE PI ADVERTISING', 
              tags: 'FOUNDER / VIDEO / SOCIAL',
              desc: 'Run an independent agency specializing in video production and social media management.',
              year: '2024 - PRESENT'
            },
            { 
              ep: 'EP. 02', 
              title: 'MARKETLUBE', 
              tags: 'SOCIAL MEDIA MGR / PRESENTER',
              desc: 'Crafting and executing comprehensive social media strategies to enhance brand presence, engagement, and customer acquisition.',
              year: '2024'
            },
            { 
              ep: 'EP. 01', 
              title: 'ILUZIA LAB LLP', 
              tags: 'CONTENT CREATOR',
              desc: 'Boosting brand visibility and audience engagement through innovative strategies.',
              year: '2021 - 2024'
            }
          ].map((project, i) => (
            <div key={i} className="group cursor-none" onMouseEnter={() => setCursorState('hover')} onMouseLeave={() => setCursorState('default')}>
              <div className="font-mono text-accent text-sm tracking-widest mb-6 flex items-center justify-between">
                <div className="flex items-center gap-4"><span className="w-8 h-[1px] bg-accent" /> {project.ep}</div>
                <div>{project.year}</div>
              </div>
              <div className="flex flex-col lg:flex-row gap-12 items-start lg:items-end justify-between">
                <div className="w-full lg:w-2/3">
                  <h3 className="text-4xl md:text-6xl font-display leading-none group-hover:text-accent transition-colors duration-500 mb-6 uppercase">
                    {project.title}
                  </h3>
                  <p className="font-mono text-sm text-paper/60 max-w-xl">{project.desc}</p>
                </div>
                <div className="w-full lg:w-1/3 space-y-6">
                  <div className="w-full aspect-video bg-ink-light overflow-hidden relative">
                     <div className="absolute inset-0 flex items-center justify-center text-xs font-mono text-paper/30">
                       [PLACEHOLDER: CLIENT - Project Image]
                     </div>
                  </div>
                  <div className="flex justify-between items-center border-t border-paper/20 pt-4">
                    <span className="font-mono text-xs tracking-widest text-paper/60">{project.tags}</span>
                    <ArrowUpRight className="text-paper/40 group-hover:text-paper transition-colors" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
`;
content = content.replace(/<div className="space-y-40">[\s\S]*?<\/div>\s*<\/section>/, newWorkSection + '\n      </section>');

// Replace links
content = content.replace('mailto:[PLACEHOLDER: CLIENT - Email]', 'mailto:anjimarajvp239@gmail.com');
content = content.replace('tel:[PLACEHOLDER: CLIENT - Phone]', 'tel:+917012310754');
content = content.replace('href="#" className="hover:text-paper transition-colors flex items-center gap-4 border-b border-ink/20 pb-4">\n                INSTAGRAM', 'href="https://instagram.com/ima.janlie" target="_blank" className="hover:text-paper transition-colors flex items-center gap-4 border-b border-ink/20 pb-4">\n                INSTAGRAM');
content = content.replace('href="#" className="hover:text-paper transition-colors flex items-center gap-4 border-b border-ink/20 pb-4">\n                EMAIL', 'href="mailto:anjimarajvp239@gmail.com" className="hover:text-paper transition-colors flex items-center gap-4 border-b border-ink/20 pb-4">\n                EMAIL');

fs.writeFileSync(file, content);
console.log('CV Content injected successfully!');
