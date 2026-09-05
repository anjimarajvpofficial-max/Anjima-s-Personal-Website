const fs = require('fs');
let content = fs.readFileSync('src/components/ui/InquiryForm.tsx', 'utf8');

// We will replace the <motion.select> block with a custom dropdown.
const customDropdownJSX = `
              <div className="relative">
                <div 
                  onClick={() => {
                    const el = document.getElementById("dropdown-menu");
                    if (el) {
                      el.style.display = el.style.display === "block" ? "none" : "block";
                    }
                  }}
                  className={\`\${inputClass("projectType")} cursor-pointer flex justify-between items-center\`}
                >
                  <span className={form.projectType ? "opacity-100 text-paper" : "opacity-30"}>
                    {form.projectType || "Select a service"}
                  </span>
                  <span className="opacity-40 text-xs">▼</span>
                </div>
                
                <motion.ul 
                  id="dropdown-menu"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute top-full left-0 w-full mt-2 bg-ink-light border border-paper/10 z-50 hidden shadow-2xl"
                  style={{ display: "none" }}
                >
                  {PROJECT_TYPES.map((t) => (
                    <li 
                      key={t}
                      onClick={() => {
                        setForm((p) => ({ ...p, projectType: t }));
                        if (errors.projectType) setErrors((p) => ({ ...p, projectType: undefined }));
                        document.getElementById("dropdown-menu")!.style.display = "none";
                      }}
                      className="px-4 py-3 font-mono text-xs text-paper/70 hover:text-accent hover:bg-paper/5 cursor-pointer transition-colors"
                    >
                      {t}
                    </li>
                  ))}
                </motion.ul>
              </div>
`;

content = content.replace(
  /<motion\.select[\s\S]*?<\/motion\.select>/,
  customDropdownJSX
);

fs.writeFileSync('src/components/ui/InquiryForm.tsx', content);
