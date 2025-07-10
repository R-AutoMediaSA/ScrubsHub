"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface AppDevelopmentProps {
  className?: string;
}

export default function AppDevelopment({ className }: AppDevelopmentProps) {
  const [mounted, setMounted] = useState(false);
  const [selectedService, setSelectedService] = useState<'mobile' | 'web'>('mobile');

  // Wait for client-side hydration to complete before rendering interactive elements
  useEffect(() => {
    setMounted(true);
  }, []);

  // Function to open email draft for consultation request
  const handleConsultationRequest = () => {
    const serviceType = selectedService === 'mobile' ? 'Mobile App' : 'Web Application';
    const subject = `Medical ${serviceType} Development Consultation Request`;
    const body = `Hello ScrubsHub Medical Development Team,

I'm interested in consulting with your team about developing a medical-focused ${serviceType.toLowerCase()}.

Project Details:
- Application Type: ${serviceType}
- Target Users: [e.g., Healthcare professionals, Patients, Medical administrators]
- Primary Purpose: [e.g., Patient management, Clinical workflow, Medical education]
- Key Features Needed: [Please describe main functionality]
- Timeline: [When do you need this completed?]
- Team Size: [How many people will use this?]
- Experience Level: [Are users tech-savvy or need simple interfaces?]
- Compliance Requirements: [HIPAA, GDPR, other medical regulations?]
- Integration Needs: [EMR systems, existing medical software?]
- Budget Range: [What's your approximate budget for this project?]

Additional Information:
[Please share any other relevant details about your medical app needs]

I'm looking forward to discussing how your medical expertise can help create an effective solution for healthcare professionals.

Best regards,`;

    const emailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=dr.rana@automediasa.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(emailUrl, '_blank');
  };

  if (!mounted) {
    return (
      <div className={cn("w-full max-w-2xl mx-auto p-8 bg-card rounded-lg border", className)}>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Medical App Development Consultation</h2>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    );
  }

  return (
    <div className={cn("w-full max-w-2xl mx-auto p-8 bg-card rounded-lg border", className)}>
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold mb-4">Request Medical App Development Consultation</h2>
        <p className="text-muted-foreground mb-6">
          Our medical team specializes in creating healthcare applications built by doctors and nurses who understand your workflow needs.
        </p>
      </div>

      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">What type of medical application do you need?</h3>
        
        <div className="grid grid-cols-2 gap-4 mb-6">
          <button
            onClick={() => setSelectedService('mobile')}
            className={cn(
              "p-6 border rounded-lg text-left transition-colors",
              selectedService === 'mobile'
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/50"
            )}
          >
            <div className="font-semibold mb-2">📱 Mobile App</div>
            <div className="text-sm text-muted-foreground">
              iOS/Android apps for clinical workflows, patient monitoring, medical education
            </div>
          </button>

          <button
            onClick={() => setSelectedService('web')}
            className={cn(
              "p-6 border rounded-lg text-left transition-colors",
              selectedService === 'web'
                ? "border-primary bg-primary/5"
                : "border-border hover:border-primary/50"
            )}
          >
            <div className="font-semibold mb-2">💻 Web Application</div>
            <div className="text-sm text-muted-foreground">
              Dashboard systems, EMR integrations, telehealth platforms, admin tools
            </div>
          </button>
        </div>

        <div className="p-6 bg-muted rounded-lg mb-6">
                      <h4 className="font-semibold mb-3">Why Choose ScrubsHub for Medical App Development?</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>Built by practicing healthcare professionals who understand your daily challenges</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>HIPAA-compliant development with medical data security expertise</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>User-tested with real medical staff to ensure practical, workflow-friendly designs</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-600 mt-1">✓</span>
              <span>Integration experience with major EMR systems and medical software</span>
            </li>
          </ul>
        </div>

        <button
          onClick={handleConsultationRequest}
          className="w-full bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
        >
          Request Consultation for {selectedService === 'mobile' ? 'Mobile App' : 'Web Application'} Development
        </button>

        <p className="text-center text-sm text-muted-foreground mt-4">
          Get a detailed consultation with our medical development team to discuss your project requirements, timeline, and implementation strategy.
        </p>
      </div>
    </div>
  );
}
