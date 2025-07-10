import Link from "next/link";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { FadeIn, StaggeredChildren } from "@/components/ui/motion";
import { SafeImage } from "@/components/ui/safe-image";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto">
      <section className="mb-16 text-center">
        <FadeIn>
          <h1 className="mb-10 mt-16">Medical-focused social media automation and app development</h1>
        </FadeIn>

        <StaggeredChildren staggerDelay={200} initialDelay={100}>
          <p className="text-xl mb-8">
            We specialize in social media automation for medical practices and custom healthcare app development. Built by doctors and nurses who understand healthcare workflows.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="p-6 bg-card rounded-lg border text-center">
              <h3 className="text-lg font-semibold mb-3">🔄 Social Media Automation</h3>
              <p className="text-muted-foreground">
                Automated social media management designed specifically for medical practices, ensuring compliance with healthcare regulations while maintaining professional engagement.
              </p>
            </div>

            <div className="p-6 bg-card rounded-lg border text-center">
              <h3 className="text-lg font-semibold mb-3">📱 Medical App Development</h3>
              <p className="text-muted-foreground">
                Custom mobile and web applications built specifically for healthcare workflows, designed by medical professionals who understand clinical needs.
              </p>
            </div>
          </div>

          <p className="mb-8">
            Our team combines deep healthcare knowledge with technical expertise to create solutions that work in real medical environments.
          </p>
        </StaggeredChildren>
      </section>

      <section className="mb-16 text-center">
        <FadeIn>
          <h2 className="text-2xl font-bold mb-8">Our Services</h2>
        </FadeIn>

        <StaggeredChildren staggerDelay={200} initialDelay={300}>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4 text-center">
              <div className="w-full">
                <AspectRatio ratio={16 / 9} className="w-full">
                  <SafeImage
                    src="/images/workspace-1.jpg"
                    alt="Medical practice social media automation"
                    className="rounded-lg object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Social Media Automation</h3>
                <p className="text-muted-foreground mb-4">
                  Automated posting, engagement tracking, and content creation specifically designed for healthcare practices. Maintain professional presence while focusing on patient care.
                </p>
                <Link
                  href="/research"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Learn about our research approach →
                </Link>
              </div>
            </div>

            <div className="space-y-4 text-center">
              <div className="w-full">
                <AspectRatio ratio={16 / 9} className="w-full">
                  <SafeImage
                    src="/images/workspace-2.jpg"
                    alt="Medical app development consultation"
                    className="rounded-lg object-cover w-full h-full"
                  />
                </AspectRatio>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">Custom Medical App Development</h3>
                <p className="text-muted-foreground mb-4">
                  Mobile and web applications tailored to specific healthcare workflows. From patient management to clinical education platforms.
                </p>
                <Link
                  href="/app-development"
                  className="text-primary hover:underline inline-flex items-center gap-1"
                >
                  Request development consultation →
                </Link>
              </div>
            </div>
          </div>
        </StaggeredChildren>
      </section>

      <section className="mb-16">
        <FadeIn>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">Built by Healthcare Professionals</h2>
            <p className="text-muted-foreground mb-8">
              Our team includes practicing physicians, nurses, and healthcare administrators who understand the real challenges of modern medical practice.
            </p>
            <Link
              href="/team"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Meet our medical team
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
        </FadeIn>
      </section>
    </div>
  );
}
