"use client"; import { useState, useRef } from"react";
import { motion, AnimatePresence } from"framer-motion"; type FormState ="idle" |"loading" |"success" |"error"; interface FormData { name: string; email: string; company: string; projectType: string; budget: string; details: string;
} interface FormErrors { name?: string; email?: string; company?: string; projectType?: string; budget?: string; details?: string;
} const PROJECT_TYPES = [
  "Video Presenting & Hosting",
  "Video Production",
  "Content Creation",
  "Social Media Management",
  "Digital Marketing",
  "SEO Content Writing",
  "Script Writing",
  "Team Coordination",
  "Other"
]; const BUDGETS = ["Under ₹50,000","₹50,000 – ₹1,50,000","₹1,50,000 – ₹5,00,000","₹5,00,000+","Let's discuss",
]; function validate(data: FormData): FormErrors { const errors: FormErrors = {}; if (!data.name.trim()) errors.name ="Your name is required."; if (!data.email.trim()) errors.email ="Your email is required."; else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.email ="Enter a valid email address."; if (!data.company.trim()) errors.company ="Company or brand name is required."; if (!data.projectType) errors.projectType ="Please select a project type."; if (!data.budget) errors.budget ="Please select a budget range."; if (!data.details.trim()) errors.details ="Tell me a bit about your project."; else if (data.details.trim().length < 20) errors.details ="Please add a bit more detail (at least 20 characters)."; return errors;
} export default function InquiryForm() { const [form, setForm] = useState<FormData>({ name:"", email:"", company:"", projectType:"", budget:"", details:"" }); const [errors, setErrors] = useState<FormErrors>({}); const [status, setStatus] = useState<FormState>("idle"); const [serverError, setServerError] = useState(""); const [shake, setShake] = useState(0);
  const [dropdownOpen, setDropdownOpen] = useState(false); const firstErrorRef = useRef<HTMLDivElement>(null); const set = (field: keyof FormData) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => { setForm((p) => ({ ...p, [field]: e.target.value })); if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined })); }; const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); const errs = validate(form); if (Object.keys(errs).length > 0) { setErrors(errs); setShake((s) => s + 1); firstErrorRef.current?.focus(); return; } setStatus("loading"); setServerError(""); try { const res = await fetch("/api/contact", { method:"POST", headers: {"Content-Type":"application/json" }, body: JSON.stringify(form), }); const data = await res.json(); if (!res.ok) throw new Error(data.error ||"Something went wrong."); setStatus("success"); } catch (err: unknown) { setStatus("error"); setServerError(err instanceof Error ? err.message :"Failed to send. Please try again or email directly."); } }; const inputClass = (field: keyof FormData) => `w-full bg-transparent border-b border-paper/20 focus:border-paper focus:bg-paper/5 focus:pl-4 focus:-translate-y-1 ${errors[field] ? "border-accent" : ""} py-3 font-mono text-sm text-paper placeholder:opacity-30 focus:outline-none transition-colors`; const labelClass ="block font-mono text-[10px] tracking-widest uppercase opacity-40 mb-2"; if (status ==="success") { return ( <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="w-full max-w-2xl mx-auto text-center py-24" > <div className="text-6xl font-display tracking-tighter uppercase mb-6 text-accent">Signal Sent</div> <p className="font-mono text-sm opacity-60 leading-relaxed"> Transmission received. I'll get back to you within 24–48 hours.<br /> Check your inbox for a confirmation. </p> </motion.div> ); } return ( <form onSubmit={handleSubmit} noValidate aria-label="Project inquiry form" className="w-full max-w-2xl mx-auto" > <div ref={firstErrorRef} tabIndex={-1} /> <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10"> {/* Name */} <div> <label htmlFor="name" className={labelClass}>Your Name *</label> <motion.input animate={{ x: errors.name ? [-5, 5, -5, 5, 0] : 0 }} key={shake} id="name" type="text" value={form.name} onChange={set("name")} placeholder="Anjima Raj" autoComplete="name" className={inputClass("name")} aria-describedby={errors.name ?"name-err" : undefined} /> {errors.name && <p id="name-err" role="alert" className="font-mono text-[10px] text-accent mt-2">{errors.name}</p>} </div> {/* Email */} <div> <label htmlFor="email" className={labelClass}>Email Address *</label> <motion.input animate={{ x: errors.email ? [-5, 5, -5, 5, 0] : 0 }} key={shake} id="email" type="email" value={form.email} onChange={set("email")} placeholder="hello@brand.com" autoComplete="email" className={inputClass("email")} aria-describedby={errors.email ?"email-err" : undefined} /> {errors.email && <p id="email-err" role="alert" className="font-mono text-[10px] text-accent mt-2">{errors.email}</p>} </div> {/* Company */} <div> <label htmlFor="company" className={labelClass}>Company / Brand *</label> <motion.input animate={{ x: errors.company ? [-5, 5, -5, 5, 0] : 0 }} key={shake} id="company" type="text" value={form.company} onChange={set("company")} placeholder="Your Brand" autoComplete="organization" className={inputClass("company")} aria-describedby={errors.company ?"company-err" : undefined} /> {errors.company && <p id="company-err" role="alert" className="font-mono text-[10px] text-accent mt-2">{errors.company}</p>} </div> {/* Project Type */} <div> <label htmlFor="projectType" className={labelClass}>Project Type *</label> 
              
              <div className="relative">
                <div 
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className={`${inputClass("projectType")} cursor-pointer flex justify-between items-center`}
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

              {errors.projectType && <p id="type-err" role="alert" className="font-mono text-[10px] text-accent mt-2">{errors.projectType}</p>} </div> </div> {/* Budget */} <div className="mb-10"> <label className={labelClass}>Budget Range *</label> <div className="flex flex-wrap gap-3" role="group" aria-label="Budget range"> {BUDGETS.map((b) => ( <button type="button" key={b} onClick={() => { setForm((p) => ({ ...p, budget: b })); if (errors.budget) setErrors((p) => ({ ...p, budget: undefined })); }} className={` font-mono text-xs px-4 py-2 transition-all duration-200 ${form.budget === b ?" text-accent bg-accent/10" :" opacity-50 hover:opacity-100"}`} aria-pressed={form.budget === b} > {b} </button> ))} </div> {errors.budget && <p role="alert" className="font-mono text-[10px] text-accent mt-3">{errors.budget}</p>} </div> {/* Project Details */} <div className="mb-12"> <label htmlFor="details" className={labelClass}>Project Details *</label> <motion.textarea animate={{ x: errors.details ? [-5, 5, -5, 5, 0] : 0 }} key={shake} id="details" value={form.details} onChange={set("details")} placeholder="Tell me about your project, goals, and timeline..." rows={5} maxLength={2000} className={`${inputClass("details")} resize-none`} aria-describedby={errors.details ?"details-err" :"details-hint"} /> <p id="details-hint" className="font-mono text-[9px] opacity-30 mt-1 text-right">{form.details.length}/2000</p> {errors.details && <p id="details-err" role="alert" className="font-mono text-[10px] text-accent mt-2">{errors.details}</p>} </div> {/* Server Error */} <AnimatePresence> {status ==="error" && serverError && ( <motion.p initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} role="alert" className="font-mono text-xs text-accent mb-6 p-4" > {serverError} </motion.p> )} </AnimatePresence> {/* Submit */} <button type="submit" disabled={status ==="loading"} className=" w-full md:w-auto font-mono text-xs tracking-widest uppercase px-12 py-4 hover:bg-paper hover:text-ink transition-all duration-300 disabled:opacity-40 disabled:cursor-wait relative overflow-hidden" aria-live="polite" > {status ==="loading" ? ( <span className="flex items-center gap-3"> <motion.span animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease:"linear" }} className="block w-3 h-3 rounded-full" /> Transmitting... </span> ) :"Send Inquiry →"} </button> </form> );
}
