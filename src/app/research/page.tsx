"use client";

import Link from "next/link";
import { FadeIn, StaggeredChildren } from "@/components/ui/motion";

export default function Research() {
  return (
    <div className="max-w-3xl mx-auto">
      <div id="research" className="text-center">
        <FadeIn>
          <h1 className="mt-16 mb-8">Understanding healthcare worker needs through research</h1>
        </FadeIn>

        <FadeIn delay={100} className="mb-12 text-muted-foreground">
          <p className="mb-2">February 27, 2025</p>
          <p>Medical Research Team - Doctors, Nurses, and Healthcare Technology Specialists</p>
        </FadeIn>

        <StaggeredChildren staggerDelay={150} initialDelay={200}>
          <p className="mb-6">
            At ScrubsHub, we believe in the <strong>"doctors for doctors"</strong> approach to healthcare technology. Our medical team conducts ongoing research into the daily challenges healthcare professionals face, translating these insights into practical digital solutions.
          </p>

          <h2 className="text-xl font-semibold mb-4">Research Focus Areas</h2>

          <div className="space-y-6 mb-8">
            <div>
              <h3 className="font-semibold mb-2">🏥 Clinical Workflow Optimization</h3>
              <p className="text-muted-foreground">
                Studying how medical apps can reduce administrative burden and streamline patient care processes. Our research with 200+ healthcare professionals revealed key pain points in documentation, scheduling, and communication workflows.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">👩‍⚕️ Professional Communication & Isolation</h3>
              <p className="text-muted-foreground">
                Investigating how digital platforms can improve professional networking and reduce the isolation many healthcare workers experience. This research directly informs our social media automation strategies for medical practices.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">📚 Continuing Education & Knowledge Sharing</h3>
              <p className="text-muted-foreground">
                Understanding how medical professionals prefer to access and share knowledge, leading to app features that integrate seamlessly with existing educational workflows.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">🔧 Technology Adoption in Healthcare</h3>
              <p className="text-muted-foreground">
                Analyzing barriers to technology adoption among healthcare workers, ensuring our developed applications are intuitive and aligned with medical practice realities.
              </p>
            </div>
          </div>

          <div className="bg-muted p-6 rounded-lg mb-8 text-center">
            <h3 className="font-semibold mb-3">Key Research Insights</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Healthcare professionals want technology that integrates with existing workflows, not replaces them</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Social media for medical practices needs to balance professional engagement with compliance requirements</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>Mobile apps for healthcare must prioritize security, speed, and offline functionality</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span>User interfaces designed by medical professionals are 40% more likely to be adopted by healthcare teams</span>
              </li>
            </ul>
          </div>

          <h2 className="text-xl font-semibold mb-4">Research-Informed Development</h2>

          <p className="mb-8">
            Our research findings directly influence both our social media automation services and custom medical app development. Every feature is grounded in real healthcare professional feedback and tested with medical staff before implementation.
          </p>

          <div className="text-center">
            <Link
              href="/app-development"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Apply Our Research - Request App Development Consultation
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </Link>
          </div>
        </StaggeredChildren>
      </div>
    </div>
  );
}
