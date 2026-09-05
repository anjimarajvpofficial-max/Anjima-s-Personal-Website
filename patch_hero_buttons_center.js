const fs = require('fs');
let content = fs.readFileSync('src/components/sections/Hero.tsx', 'utf8');

const oldBlock = `        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: [0.19, 1, 0.22, 1] }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2 w-[90vw] max-w-md flex flex-col sm:flex-row items-center justify-center gap-4 z-20 pointer-events-auto"
        >`;

const newBlock = `        {/* CTAs */}
        <div className="absolute bottom-16 left-0 w-full flex justify-center z-20 pointer-events-auto">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="w-[90vw] max-w-md flex flex-col sm:flex-row items-center justify-center gap-4"
          >`;

content = content.replace(oldBlock, newBlock);

// Don't forget to add the closing </div> for the new wrapper!
// We need to replace the `</motion.div>` for CTAs with `</motion.div></div>`
const ctaClosePattern = `</MagneticButton>
        </motion.div>`;
const newCtaClose = `</MagneticButton>
          </motion.div>
        </div>`;
content = content.replace(ctaClosePattern, newCtaClose);

fs.writeFileSync('src/components/sections/Hero.tsx', content);

