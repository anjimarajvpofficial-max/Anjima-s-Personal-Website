const fs = require('fs');
let content = fs.readFileSync('src/components/ui/Preloader.tsx', 'utf8');

// Replace the return block
const newReturn = `
  return (
    <AnimatePresence>
      {loading && (
        <>
          {/* Top Half Slice */}
          <motion.div
            initial={{ y: "0%" }}
            exit={{ y: "-100%" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[99999] bg-ink flex flex-col justify-between p-8 text-paper"
            style={{ clipPath: "inset(0 0 50% 0)" }}
          >
            {/* Top Data */}
            <div className="flex justify-between font-mono text-xs opacity-50">
              <span>INITIATING BOOT SEQUENCE</span>
              <span>v 2.0.26 // SYSTEM_LOCK</span>
            </div>

            {/* Center Loading (Top Half) */}
            <div className="flex flex-col items-center justify-center relative absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[20vw] font-display leading-none tracking-tighter mix-blend-difference z-10"
              >
                {progress}%
              </motion.div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl font-mono text-[8px] leading-none text-accent break-all opacity-20 -z-10 text-center">
                {matrix}{matrix}{matrix}
              </div>
            </div>
          </motion.div>

          {/* Bottom Half Slice */}
          <motion.div
            initial={{ y: "0%" }}
            exit={{ y: "100%" }}
            transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 z-[99999] bg-ink flex flex-col justify-between p-8 text-paper"
            style={{ clipPath: "inset(50% 0 0 0)" }}
          >
            {/* Center Loading (Bottom Half) */}
            <div className="flex flex-col items-center justify-center relative absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[20vw] font-display leading-none tracking-tighter mix-blend-difference z-10"
              >
                {progress}%
              </motion.div>
              
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-2xl font-mono text-[8px] leading-none text-accent break-all opacity-20 -z-10 text-center">
                {matrix}{matrix}{matrix}
              </div>
            </div>

            {/* Bottom Loading Bar */}
            <div className="w-full h-1 bg-paper/20 relative overflow-hidden mt-auto">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-accent"
                animate={{ width: \`\${progress}%\` }}
                transition={{ ease: "linear" }}
              />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
`;

content = content.replace(/return \([\s\S]*?\);/, newReturn);

fs.writeFileSync('src/components/ui/Preloader.tsx', content);
