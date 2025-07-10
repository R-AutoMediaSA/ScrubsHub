"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 pt-8 border-t border-border text-sm text-muted-foreground text-center">
      <div className="mb-8 flex flex-wrap gap-8 justify-center items-center">
        <Link href="/" className="text-muted-foreground hover:text-foreground">
          Home
        </Link>
        <Link href="/research" className="text-muted-foreground hover:text-foreground">
          Research
        </Link>
        <Link href="/team" className="text-muted-foreground hover:text-foreground">
          Team
        </Link>
        <button 
          onClick={() => {
            const subject = "ScrubsHub Services Inquiry";
            const body = `Hello ScrubsHub Team,

I'm interested in learning more about your medical-focused services.

I'm particularly interested in:
- [ ] Social media automation for medical practices
- [ ] Custom medical app development
- [ ] General consultation on healthcare technology solutions

Practice/Organization Information:
- Organization Type: [e.g., Medical Practice, Hospital System, Healthcare Startup]
- Size: [Number of providers/staff]
- Current Challenges: [What challenges are you facing?]

Please contact me to discuss how ScrubsHub can help.

Best regards,`;
            const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=dr.rana@automediasa.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            const newWindow = window.open(gmailUrl, '_blank');
            if (!newWindow) {
              alert(`Please email us directly at:\n\ndr.rana@automediasa.com\n\nSubject: ${subject}`);
            }
          }}
          className="text-muted-foreground hover:text-foreground transition-colors"
        >
          Contact us
        </button>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6">
        <p>Copyright © {new Date().getFullYear()} ScrubsHub AI Inc. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="/privacy" className="text-muted-foreground hover:text-foreground">
            Privacy
          </Link>
          <Link href="/terms" className="text-muted-foreground hover:text-foreground">
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}
