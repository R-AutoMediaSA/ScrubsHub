"use client";

import { FadeIn } from "@/components/ui/motion";

export default function TermsOfService() {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <FadeIn>
        <h1 className="mt-16 mb-8">Terms of Service</h1>
      </FadeIn>

      <FadeIn delay={100}>
        <p className="mb-6 text-muted-foreground">Last updated: April 25, 2025</p>
      </FadeIn>

      <div className="space-y-8">
        <FadeIn delay={200}>
          <section>
            <h2 className="text-xl font-semibold mb-4">Agreement to Terms</h2>
            <p className="mb-4">
              These Terms of Service ("Terms") constitute a legally binding agreement between you and ScrubsHub AI Inc. ("ScrubsHub," "we," "our," or "us") governing your access to and use of the ScrubsHub website and medical-focused services.
            </p>
            <p>
              By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, you may not access or use our services.
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={300}>
          <section>
            <h2 className="text-xl font-semibold mb-4">Services</h2>
            <p className="mb-4">
              ScrubsHub provides medical-focused technology services designed for healthcare professionals and medical practices. Our services include but are not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-left max-w-2xl mx-auto">
              <li>Social media automation for medical practices</li>
              <li>Custom healthcare application development</li>
              <li>Medical app development consultations</li>
              <li>Healthcare technology research and insights</li>
              <li>Website content and related features</li>
            </ul>
          </section>
        </FadeIn>

        <FadeIn delay={400}>
          <section>
            <h2 className="text-xl font-semibold mb-4">Eligibility</h2>
            <p className="mb-4">
              You must be at least 18 years old to use our services. By using our services, you represent and warrant that:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-left max-w-2xl mx-auto">
              <li>You are at least 18 years old</li>
              <li>You have the legal capacity to enter into these Terms</li>
              <li>Your use of our services does not violate any applicable law or regulation</li>
              <li>You are not located in a region subject to a U.S. government embargo</li>
            </ul>
          </section>
        </FadeIn>

        <FadeIn delay={500}>
          <section>
            <h2 className="text-xl font-semibold mb-4">Consultation Services</h2>
            <p className="mb-4">
              Some of our services may involve consultation or development work. When engaging our services, you agree to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-left max-w-2xl mx-auto">
              <li>Provide accurate, current, and complete information about your needs</li>
              <li>Communicate requirements and feedback promptly</li>
              <li>Respect our healthcare technology expertise and recommendations</li>
              <li>Notify us immediately of any changes in project scope or requirements</li>
              <li>Be responsible for all decisions regarding implementation of our solutions</li>
            </ul>
          </section>
        </FadeIn>

        <FadeIn delay={600}>
          <section>
            <h2 className="text-xl font-semibold mb-4">User Content and Communications</h2>
            <p className="mb-4">
              When you provide content through our services, such as consultation requests, feedback, or project materials ("User Content"), you grant us a limited license to use such content for the purposes of:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-left max-w-2xl mx-auto">
              <li>Providing consultation and development services</li>
              <li>Improving our healthcare technology solutions</li>
              <li>Developing custom applications as requested</li>
              <li>Research and development purposes (with anonymization)</li>
            </ul>
            <p className="mt-4">
              You represent and warrant that you have all rights necessary to grant us this license and that your User Content does not violate any third-party rights or applicable laws.
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={700}>
          <section>
            <h2 className="text-xl font-semibold mb-4">Prohibited Uses</h2>
            <p className="mb-4">
              You agree not to use our services for any purpose that is unlawful or prohibited by these Terms. Prohibited uses include but are not limited to:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-left max-w-2xl mx-auto">
              <li>Using the services in any manner that could disable, overburden, damage, or impair the services</li>
              <li>Using any robot, spider, or other automated device or process to access the services</li>
              <li>Introducing any viruses, trojan horses, worms, or other harmful material</li>
              <li>Attempting to gain unauthorized access to any part of the services</li>
              <li>Using the services to infringe upon intellectual property rights or privacy rights of others</li>
              <li>Using the services to transmit any content that is unlawful, harmful, or offensive</li>
            </ul>
          </section>
        </FadeIn>

        <FadeIn delay={800}>
          <section>
            <h2 className="text-xl font-semibold mb-4">Intellectual Property</h2>
            <p className="mb-4">
              The ScrubsHub services and all content, features, and functionality, including but not limited to all information, software, text, displays, images, and code, are owned by ScrubsHub or its licensors and are protected by copyright, trademark, and other intellectual property laws.
            </p>
            <p>
              These Terms do not grant you any right, title, or interest in the services or any content, features, or functionality of the services. You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our services without our express prior written permission.
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={900}>
          <section>
            <h2 className="text-xl font-semibold mb-4">Medical Disclaimer</h2>
            <p className="mb-4">
              IMPORTANT: Our services are for practice management and workflow optimization purposes only. ScrubsHub does not provide medical advice, diagnosis, or treatment. Our technology solutions are designed to assist with:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-left max-w-2xl mx-auto">
              <li>Administrative and operational workflows</li>
              <li>Social media and marketing automation</li>
              <li>Practice management applications</li>
              <li>Educational and training platforms</li>
            </ul>
            <p className="mt-4">
              All medical decisions remain the sole responsibility of licensed healthcare professionals.
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={1000}>
          <section>
            <h2 className="text-xl font-semibold mb-4">Disclaimer of Warranties</h2>
            <p className="mb-4">
              THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-left max-w-2xl mx-auto">
              <li>IMPLIED WARRANTIES OF MERCHANTABILITY</li>
              <li>FITNESS FOR A PARTICULAR PURPOSE</li>
              <li>NON-INFRINGEMENT</li>
              <li>ACCURACY, RELIABILITY, OR COMPLETENESS OF THE SERVICES</li>
            </ul>
          </section>
        </FadeIn>

        <FadeIn delay={1100}>
          <section>
            <h2 className="text-xl font-semibold mb-4">Limitation of Liability</h2>
            <p>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL SCRUBSHUB BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES.
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={1200}>
          <section>
            <h2 className="text-xl font-semibold mb-4">Changes to Terms</h2>
            <p>
              We may revise these Terms from time to time. The most current version will always be posted on our website. If we make changes that we believe are material, we will notify you by email or through the services. By continuing to access or use the services after revisions become effective, you agree to be bound by the revised Terms.
            </p>
          </section>
        </FadeIn>

        <FadeIn delay={1300}>
          <section>
            <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at <button 
                onClick={() => {
                  const subject = "Terms of Service Inquiry";
                  const body = `Hello ScrubsHub Legal Team,

I have a question regarding your Terms of Service.

My specific question/concern:
[Please describe your question here]

I would appreciate clarification on this matter.

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
