const fs = require('fs');

const newLinks = `          <div className="flex flex-col gap-3 items-start">
            <MagneticButton>
              <a href="https://www.instagram.com/ima.janlie?igsi=dnplZDFwZHU5czZs&utm_source=qr" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors flex items-center gap-2 ">
                Instagram (@ima.janlie) <ArrowUpRight size={12}/>
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="https://www.instagram.com/ima_presents?igsi=MWw5ZTVxeW5mbG5iaQ==" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors flex items-center gap-2 ">
                Instagram (Portfolio) <ArrowUpRight size={12}/>
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="https://www.linkedin.com/in/anjima-raj-ba1a9b253?utm_source=share_via&utm_content=profile&utm_medium=member_ios" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors flex items-center gap-2 ">
                LinkedIn <ArrowUpRight size={12}/>
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="https://youtube.com/@imajanlie?si=rml9ooILTlOtpw8z" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors flex items-center gap-2 ">
                YouTube <ArrowUpRight size={12}/>
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="https://wa.me/917012310754" target="_blank" rel="noreferrer" className="hover:text-accent transition-colors flex items-center gap-2 ">
                WhatsApp <ArrowUpRight size={12}/>
              </a>
            </MagneticButton>
          </div>`;

let content = fs.readFileSync('src/components/sections/Footer.tsx', 'utf8');

// Replace the existing flex-col div containing the links
content = content.replace(
  /<div className="flex flex-col gap-3 items-start">[\s\S]*?<\/div>\s*<\/div>\s*<div className="md:text-right flex flex-col justify-between md:pr-40 relative z-30">/,
  newLinks + '\n        </div>\n        \n        <div className="md:text-right flex flex-col justify-between md:pr-40 relative z-30">'
);

fs.writeFileSync('src/components/sections/Footer.tsx', content);

