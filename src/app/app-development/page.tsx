import AppDevelopment from "@/components/AppDevelopment";
import { FadeIn, StaggeredChildren } from "@/components/ui/motion";

export default function AppDevelopmentPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <FadeIn>
        <h1 className="mt-16 mb-8 text-center">Medical App Development Services</h1>
      </FadeIn>

      <StaggeredChildren staggerDelay={150} initialDelay={100} className="mb-12 text-center">
        <p className="text-lg mb-8">
          Our medical team specializes in creating custom healthcare applications that solve real clinical challenges. Built by doctors and nurses who understand the complexities of medical workflows.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 bg-card rounded-lg border text-center">
            <h3 className="text-lg font-semibold mb-3">🏥 Clinical Workflow Apps</h3>
            <p className="text-muted-foreground mb-4">
              Streamline patient care processes with applications designed around real clinical workflows.
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Patient management systems</li>
              <li>• Clinical documentation tools</li>
              <li>• Scheduling and resource management</li>
              <li>• Quality improvement tracking</li>
            </ul>
          </div>

          <div className="p-6 bg-card rounded-lg border text-center">
            <h3 className="text-lg font-semibold mb-3">📊 Medical Data & Analytics</h3>
            <p className="text-muted-foreground mb-4">
              Turn medical data into actionable insights with HIPAA-compliant analytics platforms.
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Clinical performance dashboards</li>
              <li>• Population health analytics</li>
              <li>• Quality metrics tracking</li>
              <li>• Regulatory reporting automation</li>
            </ul>
          </div>

          <div className="p-6 bg-card rounded-lg border text-center">
            <h3 className="text-lg font-semibold mb-3">👩‍⚕️ Medical Education & Training</h3>
            <p className="text-muted-foreground mb-4">
              Interactive learning platforms designed by medical educators for healthcare professionals.
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• Case-based learning systems</li>
              <li>• Simulation training platforms</li>
              <li>• Continuing education tracking</li>
              <li>• Competency assessment tools</li>
            </ul>
          </div>

          <div className="p-6 bg-card rounded-lg border text-center">
            <h3 className="text-lg font-semibold mb-3">🔗 EMR & System Integration</h3>
            <p className="text-muted-foreground mb-4">
              Seamlessly connect your applications with existing healthcare systems and workflows.
            </p>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li>• EMR system integrations</li>
              <li>• HL7 FHIR implementations</li>
              <li>• API development & management</li>
              <li>• Legacy system modernization</li>
            </ul>
          </div>
        </div>
      </StaggeredChildren>

      <FadeIn delay={300}>
        <AppDevelopment />
      </FadeIn>
    </div>
  );
} 