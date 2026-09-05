import { NextRequest, NextResponse } from 'next/server';

// Simple in-memory rate limiter (resets on server restart — suitable for serverless cold starts)
const rateLimit = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const window = 60 * 60 * 1000; // 1 hour
  const max = 5;

  const entry = rateLimit.get(ip);
  if (!entry || entry.resetAt < now) {
    rateLimit.set(ip, { count: 1, resetAt: now + window });
    return true;
  }
  if (entry.count >= max) return false;
  entry.count++;
  return true;
}

function validateEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function sanitize(str: string): string {
  return str.replace(/<[^>]*>/g, "").trim().slice(0, 5000);
}

export async function POST(request: NextRequest) {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Too many requests. Please try again in an hour." },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Server-side validation
    const { name, email, company, projectType, budget, details } = body;

    if (!name?.trim()) return NextResponse.json({ error: "Name is required." }, { status: 400 });
    if (!email?.trim() || !validateEmail(email)) return NextResponse.json({ error: "A valid email address is required." }, { status: 400 });
    if (!company?.trim()) return NextResponse.json({ error: "Company name is required." }, { status: 400 });
    if (!projectType?.trim()) return NextResponse.json({ error: "Project type is required." }, { status: 400 });
    if (!budget?.trim()) return NextResponse.json({ error: "Budget range is required." }, { status: 400 });
    if (!details?.trim() || details.trim().length < 20) return NextResponse.json({ error: "Please provide more project detail." }, { status: 400 });

    // Sanitize inputs
    const safe = {
      name: sanitize(name),
      email: sanitize(email),
      company: sanitize(company),
      projectType: sanitize(projectType),
      budget: sanitize(budget),
      details: sanitize(details),
    };

    const contactEmail = process.env.CONTACT_EMAIL || "anjimarajvp239@gmail.com";
    const apiKey = process.env.RESEND_API_KEY;

    if (apiKey && apiKey !== "re_placeholder") {
      // Real email via Resend
      const { Resend } = await import("resend");
      const resend = new Resend(apiKey);

      await resend.emails.send({
        from: "Website Inquiry <onboarding@resend.dev>",
        to: contactEmail,
        replyTo: safe.email,
        subject: `New Inquiry: ${safe.projectType} from ${safe.company}`,
        html: `
          <div style="font-family: monospace; max-width: 600px; padding: 32px; background: #050505; color: #f4f4f0;">
            <h2 style="color: #ff0050; font-size: 24px; margin-bottom: 24px; text-transform: uppercase; letter-spacing: 0.1em;">New Website Inquiry</h2>
            <table style="width:100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; opacity: 0.5; font-size: 11px; text-transform: uppercase;">Name</td><td style="padding: 8px 0;">${safe.name}</td></tr>
              <tr><td style="padding: 8px 0; opacity: 0.5; font-size: 11px; text-transform: uppercase;">Email</td><td style="padding: 8px 0;"><a href="mailto:${safe.email}" style="color: #ff0050;">${safe.email}</a></td></tr>
              <tr><td style="padding: 8px 0; opacity: 0.5; font-size: 11px; text-transform: uppercase;">Company</td><td style="padding: 8px 0;">${safe.company}</td></tr>
              <tr><td style="padding: 8px 0; opacity: 0.5; font-size: 11px; text-transform: uppercase;">Project Type</td><td style="padding: 8px 0;">${safe.projectType}</td></tr>
              <tr><td style="padding: 8px 0; opacity: 0.5; font-size: 11px; text-transform: uppercase;">Budget</td><td style="padding: 8px 0;">${safe.budget}</td></tr>
            </table>
            <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid rgba(244,244,240,0.1);">
              <p style="opacity: 0.5; font-size: 11px; text-transform: uppercase; margin-bottom: 8px;">Project Details</p>
              <p style="line-height: 1.8; opacity: 0.9;">${safe.details.replace(/\n/g, "<br/>")}</p>
            </div>
            <p style="margin-top: 32px; opacity: 0.3; font-size: 10px;">Submitted via anjimaraj.com</p>
          </div>
        `,
      });
    } else {
      // Dev mode — log to console
      console.log("📨 Contact form submission (dev mode — add RESEND_API_KEY to send real emails):");
      console.table(safe);
    }

    return NextResponse.json({ success: true, message: "Inquiry received. I'll be in touch soon!" });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong on our end. Please email directly at anjimarajvp239@gmail.com" },
      { status: 500 }
    );
  }
}
