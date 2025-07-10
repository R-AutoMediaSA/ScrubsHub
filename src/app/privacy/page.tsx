"use client";

import { FadeIn } from "@/components/ui/motion";

export default function PrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <FadeIn>
        <h1 className="mt-16 mb-8">Privacy Policy</h1>
      </FadeIn>

      <FadeIn delay={100}>
        <p className="mb-6 text-muted-foreground">Last updated: April 25, 2025</p>
      </FadeIn>

      <div className="space-y-8">
        <FadeIn delay={200}>
          <section>
            <h2 className="text-xl font-semibold mb-4">Introduction</h2>
            <p className="mb-4">
              ScrubsHub AI Inc. ("ScrubsHub," "we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and medical-focused services.
            </p>
            <p>
              Please read this Privacy Policy carefully. By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by all the terms of this Privacy Policy.
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={300}>
          <section>
            <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
            <p className="mb-4">We may collect several types of information from and about users of our services, including:</p>
            <ul className="list-disc pl-6 space-y-2 text-left max-w-2xl mx-auto">
              <li><strong>Personal Data:</strong> Such as name, email address, practice information, or other identifiers when you contact us for consultations.</li>
              <li><strong>Usage Data:</strong> Information about how you use our website and interact with our services.</li>
              <li><strong>Device Information:</strong> Information about your internet connection, the device you use to access our website, and other technical data.</li>
              <li><strong>Communication Data:</strong> Information you provide when contacting us for social media automation or app development consultations.</li>
            </ul>
          </section>
        </FadeIn>

        <FadeIn delay={400}>
          <section>
            <h2 className="text-xl font-semibold mb-4">How We Use Your Information</h2>
            <p className="mb-4">We may use the information we collect for various purposes, including:</p>
            <ul className="list-disc pl-6 space-y-2 text-left max-w-2xl mx-auto">
              <li>To provide medical-focused social media automation services</li>
              <li>To develop custom healthcare applications and software solutions</li>
              <li>To respond to your consultation requests and inquiries</li>
              <li>To communicate about our medical app development services</li>
              <li>To improve our healthcare technology solutions</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>
        </FadeIn>

        <FadeIn delay={500}>
          <section>
            <h2 className="text-xl font-semibold mb-4">Medical Information</h2>
            <p className="mb-4">
              As a medical-focused technology company, we understand the importance of healthcare data privacy:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-left max-w-2xl mx-auto">
              <li>We do not process, store, or handle patient health information (PHI)</li>
              <li>Our services focus on practice management and workflow automation</li>
              <li>Any healthcare applications we develop are designed with HIPAA compliance considerations</li>
              <li>We work with medical professionals to ensure appropriate data handling practices</li>
            </ul>
            <p className="mt-4">
              By using our services, you acknowledge that our solutions are designed for practice operations, not patient data management.
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={600}>
          <section>
            <h2 className="text-xl font-semibold mb-4">Data Sharing and Disclosure</h2>
            <p className="mb-4">
              We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-left max-w-2xl mx-auto">
              <li><strong>With Service Providers:</strong> Companies that perform services on our behalf, such as hosting, analytics, and development tools.</li>
              <li><strong>For Legal Reasons:</strong> To comply with applicable laws, regulations, legal processes, or governmental requests.</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of all or a portion of our assets.</li>
              <li><strong>With Your Consent:</strong> When you have given us your consent to share your information.</li>
            </ul>
          </section>
        </FadeIn>

        <FadeIn delay={700}>
          <section>
            <h2 className="text-xl font-semibold mb-4">Your Rights and Choices</h2>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-left max-w-2xl mx-auto">
              <li>The right to access and obtain a copy of your personal information</li>
              <li>The right to rectify any inaccurate personal information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to restrict or object to our processing of your personal information</li>
              <li>The right to data portability</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us at <button
                onClick={() => {
                  const subject = "Privacy Rights Request";
                  const body = `Hello ScrubsHub Privacy Team,

I would like to exercise my privacy rights under applicable data protection laws.

Specific request (please select one):
☐ Access - I want to see what personal data you have about me
☐ Rectification - I want to correct inaccurate personal data
☐ Deletion - I want you to delete my personal data
☐ Restriction - I want to restrict processing of my personal data
☐ Portability - I want to receive my personal data in a portable format
☐ Objection - I object to processing of my personal data

Additional details:
[Please provide any additional context or specific information]

Account information (if applicable):
- Email: 
- Name: 
- Practice/Organization: 

Best regards,`;
                  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=dr.rana@automediasa.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  const newWindow = window.open(gmailUrl, '_blank');
                  if (!newWindow) {
                    alert(`Please email us directly at:\n\ndr.rana@automediasa.com\n\nSubject: ${subject}`);
                  }
                }}
                className="underline hover:text-primary transition-colors"
              >
                dr.rana@automediasa.com
              </button>.
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={800}>
          <section>
            <h2 className="text-xl font-semibold mb-4">Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information. As a medical-focused technology company, we understand the importance of robust security practices and work to ensure your data is protected according to industry standards.
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={900}>
          <section>
            <h2 className="text-xl font-semibold mb-4">Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date at the top of this page.
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={1000}>
          <section>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at <button
                onClick={() => {
                  const subject = "Privacy Policy Inquiry";
                  const body = `Hello ScrubsHub Privacy Team,

I have a question about your Privacy Policy.

My specific question/concern:
[Please describe your question here]

I would appreciate clarification on how my data is handled in relation to your medical-focused services.

Best regards,`;
                  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=dr.rana@automediasa.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
                  const newWindow = window.open(gmailUrl, '_blank');
                  if (!newWindow) {
                    alert(`Please email us directly at:\n\ndr.rana@automediasa.com\n\nSubject: ${subject}`);
                  }
                }}
                className="underline hover:text-primary transition-colors"
              >
                dr.rana@automediasa.com
              </button>.
            </p>
          </section>
        </FadeIn>
      </div>
    </div>
  );
}
