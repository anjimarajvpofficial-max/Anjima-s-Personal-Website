"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CookiesPolicy() {
  return (
    <main className="min-h-screen bg-paper text-ink pt-32 pb-24 px-4 md:px-12 selection:bg-accent selection:text-paper ">
      <div className="max-w-3xl mx-auto">
        <Link href="/" className=" font-mono text-[10px] tracking-widest uppercase opacity-40 hover:opacity-100 hover:text-accent transition-colors mb-12 block">
          ← Back to Main
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="font-mono text-[10px] tracking-[0.2em] opacity-40 uppercase mb-4">Legal // Cookies</div>
          <h1 className="text-4xl md:text-6xl font-display uppercase tracking-tighter leading-none mb-12">Cookie Policy</h1>
          
          <div className="prose prose-sm prose-invert max-w-none font-mono text-xs leading-loose opacity-70">
            <p className="mb-6">Last updated: September 2026</p>
            
            <h2 className="text-lg font-display uppercase tracking-tight text-ink mt-12 mb-4">1. What Are Cookies?</h2>
            <p className="mb-6">Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and provide information to the owners of the site.</p>

            <h2 className="text-lg font-display uppercase tracking-tight text-ink mt-12 mb-4">2. How We Use Cookies</h2>
            <p className="mb-6">This website uses a minimal amount of cookies. We use them primarily for:</p>
            <ul className="list-disc pl-4 mb-6">
              <li><strong>Essential Functions:</strong> Remembering your UI preferences (like acknowledging the cookie banner).</li>
              <li><strong>Performance & Analytics:</strong> Understanding how visitors interact with the website to improve the experience.</li>
            </ul>

            <h2 className="text-lg font-display uppercase tracking-tight text-ink mt-12 mb-4">3. Types of Cookies We Use</h2>
            <p className="mb-6"><strong>Local Storage:</strong> We use local storage (which works similarly to cookies) to remember if you have dismissed our consent banner, ensuring you are not repeatedly asked on future visits.</p>

            <h2 className="text-lg font-display uppercase tracking-tight text-ink mt-12 mb-4">4. Managing Cookies</h2>
            <p className="mb-6">Most web browsers allow you to control cookies through their settings preferences. However, if you limit the ability of websites to set cookies, you may worsen your overall user experience.</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
