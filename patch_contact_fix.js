const fs = require('fs');
let content = fs.readFileSync('src/app/api/contact/route.ts', 'utf8');

const oldBottom = `    } else {
      return NextResponse.json({ error: "Configuration Error: RESEND_API_KEY is not set in Vercel." }, { status: 500 });
    }
      // Dev mode — log to console
      console.log("📨 Contact form submission (dev mode — add RESEND_API_KEY to send real emails):");
      console.table(safe);
    }

    return NextResponse.json({ success: true, message: "Inquiry received. I'll be in touch soon!" });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong on our end. Please email directly at anjimarajvp.official@gmail.com" },
      { status: 500 }
    );
  }
}`;

const newBottom = `    } else {
      return NextResponse.json({ error: "Configuration Error: RESEND_API_KEY is not set in Vercel." }, { status: 500 });
    }

    return NextResponse.json({ success: true, message: "Inquiry received. I'll be in touch soon!" });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Something went wrong on our end. Please email directly at anjimarajvp.official@gmail.com" },
      { status: 500 }
    );
  }
}`;

content = content.replace(oldBottom, newBottom);

fs.writeFileSync('src/app/api/contact/route.ts', content);

