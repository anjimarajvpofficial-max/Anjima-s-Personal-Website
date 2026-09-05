const fs = require('fs');
let content = fs.readFileSync('src/components/ui/Preloader.tsx', 'utf8');

// The current return block has a Fragment inside AnimatePresence.
// We must remove the Fragment and apply keys.

const oldReturn = `{loading && (
        <>
          {/* Top Half Slice */}
          <motion.div`;

const newReturn = `{loading && (
          <motion.div
            key="top"`;

content = content.replace(oldReturn, newReturn);

content = content.replace(
  '          </motion.div>\n\n          {/* Bottom Half Slice */}\n          <motion.div',
  '          </motion.div>\n      )}\n      {loading && (\n          <motion.div\n            key="bottom"'
);

content = content.replace('          </motion.div>\n        </>\n      )}\n    </AnimatePresence>', '          </motion.div>\n      )}\n    </AnimatePresence>');

fs.writeFileSync('src/components/ui/Preloader.tsx', content);
