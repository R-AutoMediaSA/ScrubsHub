"use client";

import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { FadeIn, StaggeredChildren } from "@/components/ui/motion";
import { SafeImage } from "@/components/ui/safe-image";

export default function Team() {
  return (
    <div className="max-w-4xl mx-auto">
      <FadeIn>
        <h1 className="mt-16 mb-8 text-center">Medical Development Team</h1>
      </FadeIn>

      <StaggeredChildren staggerDelay={150} initialDelay={100} className="mb-12 text-center">
        <p className="text-lg mb-8">
          ScrubsHub is led by <strong>Dr. Rana, our CEO and founder</strong>, alongside a dedicated team of practicing physicians, nurses, and healthcare technology specialists who understand the unique challenges of medical workflows.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 bg-card rounded-lg border text-center">
            <h3 className="text-lg font-semibold mb-3">👩‍⚕️ Medical Leadership</h3>
            <p className="text-muted-foreground mb-4">
              Our leadership team combines clinical expertise with technology innovation.
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Former registered nurse and current clinical pharmacist CEO</li>
              <li>• Practicing physicians on development team</li>
              <li>• Active nurses contributing to design</li>
              <li>• Healthcare technology specialists</li>
            </ul>
          </div>

          <div className="p-6 bg-card rounded-lg border text-center">
            <h3 className="text-lg font-semibold mb-3">🏥 Clinical Experience</h3>
            <p className="text-muted-foreground mb-4">
              We understand healthcare from the inside because we've lived it.
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Night shift experience and workflow challenges</li>
              <li>• EMR frustrations and inefficiencies</li>
              <li>• Patient care priority conflicts with technology</li>
              <li>• Professional communication standards</li>
            </ul>
          </div>

          <div className="p-6 bg-card rounded-lg border text-center">
            <h3 className="text-lg font-semibold mb-3">⚕️ Medical Development Process</h3>
            <p className="text-muted-foreground mb-4">
              How medical professionals approach technology development.
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Clinical workflow problem identification</li>
              <li>• HIPAA-compliant coding practices</li>
              <li>• Real healthcare professional testing</li>
              <li>• Medical data security expertise</li>
            </ul>
          </div>

          <div className="p-6 bg-card rounded-lg border text-center">
            <h3 className="text-lg font-semibold mb-3">🔬 Research-Driven Solutions</h3>
            <p className="text-muted-foreground mb-4">
              Our solutions are based on research into real healthcare worker needs.
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Healthcare professional isolation studies</li>
              <li>• Medical communication pattern analysis</li>
              <li>• Work-life balance research</li>
              <li>• Clinical workflow optimization</li>
            </ul>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 bg-card rounded-lg border text-center">
            <h3 className="text-lg font-semibold mb-3">📱 Social Media Automation</h3>
            <p className="text-muted-foreground mb-4">
              Automated solutions that understand healthcare compliance and professional standards.
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Healthcare compliance automation</li>
              <li>• Patient privacy protection</li>
              <li>• Professional medical communication</li>
              <li>• Medical practice marketing</li>
            </ul>
          </div>

          <div className="p-6 bg-card rounded-lg border text-center">
            <h3 className="text-lg font-semibold mb-3">💻 Custom Medical Apps</h3>
            <p className="text-muted-foreground mb-4">
              Applications built by medical professionals for medical professionals.
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Patient management systems</li>
              <li>• Clinical workflow applications</li>
              <li>• EMR system integrations</li>
              <li>• Medical education platforms</li>
            </ul>
          </div>
        </div>
      </StaggeredChildren>

      <FadeIn delay={300} className="text-center">
        <div className="p-8 bg-secondary rounded-lg">
          <h3 className="text-lg font-semibold mb-4">Work with Our Medical Development Team</h3>
          <p className="text-muted-foreground mb-6">
            Ready to work with healthcare professionals who understand your challenges? Get in touch to discuss your project.
          </p>
          
          <button 
            onClick={() => {
              const subject = "Medical Team Collaboration Inquiry";
              const body = `Hello ScrubsHub Medical Development Team,

I'm interested in working with your team of medical professionals on a healthcare technology project.

Practice/Organization Information:
- Organization Type: [e.g., Medical Practice, Hospital System, Healthcare Startup]
- Size: [Number of providers/staff]
- Project Type: [Social Media Automation, Mobile App, Web Application, etc.]
- Timeline: [When do you need this completed?]
- Specific Challenges: [What problems are you trying to solve?]

I'd like to discuss how your medical expertise can help create an effective solution.

Best regards,`;

              const emailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=dr.rana@automediasa.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
              window.open(emailUrl, '_blank');
            }}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Contact Pre-Planning Team
          </button>
        </div>
      </FadeIn>
    </div>
  );
}
