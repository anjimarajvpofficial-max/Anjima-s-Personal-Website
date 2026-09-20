const fs = require('fs');
let content = fs.readFileSync('src/app/api/contact/route.ts', 'utf8');

const oldBlock = `      await resend.emails.send({
        from: "Website Inquiry <onboarding@resend.dev>",`;

const newBlock = `      const { data, error } = await resend.emails.send({
        from: "Website Inquiry <onboarding@resend.dev>",`;

content = content.replace(oldBlock, newBlock);

const oldEndBlock = `        \`,
      });
    } else {`;

const newEndBlock = `        \`,
      });
      if (error) {
        console.error("Resend API Error:", error);
        return NextResponse.json({ error: \`Resend Error: \${error.message}\` }, { status: 500 });
      }
    } else {
      return NextResponse.json({ error: "Configuration Error: RESEND_API_KEY is not set in Vercel." }, { status: 500 });
    }`;

content = content.replace(oldEndBlock, newEndBlock);

fs.writeFileSync('src/app/api/contact/route.ts', content);
