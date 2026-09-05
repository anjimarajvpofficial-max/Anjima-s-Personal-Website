const fs = require('fs');
let content = fs.readFileSync('src/components/ui/InquiryForm.tsx', 'utf8');

if (!content.includes('const [dropdownOpen')) {
  content = content.replace(
    'const [shake, setShake] = useState(0);',
    'const [shake, setShake] = useState(0);\n  const [dropdownOpen, setDropdownOpen] = useState(false);'
  );
}

const robustDropdownJSX = `
              <div className="relative">
                <div 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={\`\${inputClass("projectType")} cursor-pointer flex justify-between items-center\`}
                >
                  <span className={form.projectType ? "opacity-100 text-paper" : "opacity-30"}>
                    {form.projectType || "Select a service"}
                  </span>
                  <motion.span animate={{ rotate: dropdownOpen ? 180 : 0 }} className="opacity-40 text-[10px]">▼</motion.span>
                </div>
                
                <AnimatePresence>
                  {dropdownOpen && (
                    <motion.ul 
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute top-full left-0 w-full mt-2 bg-ink border border-paper/20 z-50 shadow-2xl flex flex-col"
                    >
                      {PROJECT_TYPES.map((t) => (
                        <li 
                          key={t}
                          onClick={() => {
                            setForm((p) => ({ ...p, projectType: t }));
                            if (errors.projectType) setErrors((p) => ({ ...p, projectType: undefined }));
                            setDropdownOpen(false);
                          }}
                          className="px-4 py-4 font-mono text-xs tracking-wider text-paper/70 hover:text-accent hover:bg-paper/10 cursor-pointer transition-colors border-b border-paper/5 last:border-0"
                        >
                          {t}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
`;

// Replace the previous hacky HTML string
content = content.replace(
  /<div className="relative">[\s\S]*?<\/div>\s*\{errors\.projectType/m,
  robustDropdownJSX + '\n              {errors.projectType'
);

fs.writeFileSync('src/components/ui/InquiryForm.tsx', content);
