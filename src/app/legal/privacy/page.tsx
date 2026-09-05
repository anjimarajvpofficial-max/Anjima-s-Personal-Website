"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function PrivacyPolicy() {
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
          <div className="font-mono text-[10px] tracking-[0.2em] opacity-40 uppercase mb-4">Legal // Privacy</div>
          <h1 className="text-4xl md:text-6xl font-display uppercase tracking-tighter leading-none mb-12">Privacy Policy</h1>
          
          <div className="prose prose-sm prose-invert max-w-none font-mono text-xs leading-loose opacity-70">
            <p className="mb-6">Last updated: September 2026</p>
            
            <h2 className="text-lg font-display uppercase tracking-tight text-ink mt-12 mb-4">1. Information We Collect</h2>
            <p className="mb-6">When you use the inquiry form on anjimaraj.com, we collect the following personal information: your name, email address, company name, and the details regarding your project inquiry. This information is submitted voluntarily by you for the purpose of business communication.</p>

            <h2 className="text-lg font-display uppercase tracking-tight text-ink mt-12 mb-4">2. How We Use Your Information</h2>
            <p className="mb-6">The information you provide is used exclusively to respond to your project inquiries, provide estimates, and communicate regarding potential working relationships. We do not sell, rent, or lease your personal information to third parties.</p>

            <h2 className="text-lg font-display uppercase tracking-tight text-ink mt-12 mb-4">3. Data Storage and Security</h2>
            <p className="mb-6">Inquiry data is transmitted securely via standard encryption protocols and processed using third-party email infrastructure (Resend). While we strive to use commercially acceptable means to protect your personal data, no method of transmission over the Internet is 100% secure.</p>

            <h2 className="text-lg font-display uppercase tracking-tight text-ink mt-12 mb-4">4. Third-Party Analytics</h2>
            <p className="mb-6">We may use basic analytics to track website performance and visitor behavior (such as pages visited and time spent on site) to improve the user experience. This data is aggregated and anonymized.</p>

            <h2 className="text-lg font-display uppercase tracking-tight text-ink mt-12 mb-4">5. Contact Information</h2>
            <p className="mb-6">If you have any questions about this Privacy Policy or wish to request the deletion of your data from our communications log, please contact at: <a href="mailto:anjimarajvp239@gmail.com" className="text-accent hover:underline">anjimarajvp239@gmail.com</a>.</p>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
