const fs = require('fs');
let content = fs.readFileSync('src/app/api/contact/route.ts', 'utf8');

// Remove replyTo and simplify the From field
const oldCode = `      const { data, error } = await resend.emails.send({
        from: "Website Inquiry <onboarding@resend.dev>",
        to: contactEmail,
        replyTo: safe.email,
        subject: \`New Inquiry: \${safe.projectType} from \${safe.company}\`,`;

const newCode = `      const { data, error } = await resend.emails.send({
        from: "onboarding@resend.dev",
        to: contactEmail,
        subject: \`New Inquiry: \${safe.projectType} from \${safe.company}\`,`;

content = content.replace(oldCode, newCode);

fs.writeFileSync('src/app/api/contact/route.ts', content);

