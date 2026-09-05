const fs = require('fs');

const file = 'src/app/contact/page.tsx';
let content = fs.readFileSync(file, 'utf8');

if (!content.includes('use client')) {
  // Add 'use client' at the top
  content = "'use client';\n" + content;
  
  // Add React import and form handler
  content = content.replace('export default function Contact() {', `
import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      company: formData.get('company'),
      projectType: formData.get('project_type'),
      budget: formData.get('budget'),
      details: formData.get('details'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      
      const result = await res.json();
      if (!res.ok) throw new Error(result.error || 'Failed to submit');
      setStatus('success');
    } catch (err: any) {
      setStatus('error');
      setErrorMessage(err.message);
    }
  };
`);

  // Update <form> tag to use onSubmit
  content = content.replace('<form className="flex flex-col gap-stack-lg">', 
    '<form className="flex flex-col gap-stack-lg" onSubmit={handleSubmit}>');

  // Add names to inputs
  content = content.replace('id="name" placeholder', 'name="name" id="name" placeholder');
  content = content.replace('id="email" placeholder', 'name="email" id="email" placeholder');
  content = content.replace('id="company" placeholder', 'name="company" id="company" placeholder');
  content = content.replace('id="project_type"', 'name="project_type" id="project_type"');
  content = content.replace('id="budget"', 'name="budget" id="budget"');
  content = content.replace('id="details"', 'name="details" id="details"');

  // Update button to show loading and show status messages
  content = content.replace('<button className="bg-primary text-white rounded-full font-label-md text-label-md px-12 py-5 font-bold hover:bg-opacity-90 transition-all duration-300 w-full uppercase tracking-wider">Submit Inquiry</button>', 
    `
    <button type="submit" disabled={status === 'loading'} className="bg-primary text-white rounded-full font-label-md text-label-md px-12 py-5 font-bold hover:bg-opacity-90 transition-all duration-300 w-full uppercase tracking-wider disabled:opacity-50">
      {status === 'loading' ? 'Submitting...' : 'Submit Inquiry'}
    </button>
    {status === 'success' && <p className="text-primary font-label-md mt-4 text-center">Inquiry sent successfully. We will be in touch soon.</p>}
    {status === 'error' && <p className="text-error font-label-md mt-4 text-center">{errorMessage}</p>}
    `);
    
  fs.writeFileSync(file, content);
  console.log('Form updated');
}
