import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/scroll-reveal";
import { HandDrawnUnderline } from "@/components/hand-drawn";
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Wrench,
  Quote,
} from "lucide-react";
import {
  getServiceBySlug,
  getAllServiceSlugs,
  services as allServices,
} from "@/lib/services-data";

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  return params.then(({ slug }) => {
    const service = getServiceBySlug(slug);
    if (!service) return { title: "Service Not Found" };
    return {
      title: `${service.title} | Josiah Mwangi`,
      description: service.intro.slice(0, 160),
    };
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const currentIndex = allServices.findIndex((s) => s.slug === slug);
  const prevService = currentIndex > 0 ? allServices[currentIndex - 1] : null;
  const nextService =
    currentIndex < allServices.length - 1 ? allServices[currentIndex + 1] : null;

  const Icon = service.icon;

  return (
    <>
      {/* Hero */}
      <section className="relative pt-28 pb-20 overflow-hidden grain">
        <div className="absolute inset-0">
          <Image
            src={service.heroImg}
            alt={service.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-navy-950/95 via-navy-950/85 to-navy-950/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-cream-100/50 hover:text-gold-400 text-sm transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            All Services
          </Link>

          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center">
                <Icon className="w-5 h-5 text-gold-400" />
              </div>
              <span className="text-gold-400/60 text-sm font-medium">
                Service {service.num}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-cream-100 font-[family-name:var(--font-geist-sans)] leading-[1.1]">
              {service.title}
            </h1>

            <div className="w-40 mt-3">
              <HandDrawnUnderline className="text-gold-500/40" />
            </div>

            <p className="text-lg text-cream-100/60 italic mt-6 font-[family-name:var(--font-geist-sans)]">
              {service.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16 items-start">
            <ScrollReveal className="lg:col-span-3">
              <div>
                <h2 className="text-2xl font-bold text-cream-100 font-[family-name:var(--font-geist-sans)] mb-6">
                  How I approach this
                </h2>
                <p className="text-cream-100/70 leading-relaxed text-[15px] mb-8">
                  {service.intro}
                </p>

                <div className="space-y-5">
                  {service.approach.map((point, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="w-7 h-7 rounded-full bg-gold-500/10 border border-gold-500/20 flex items-center justify-center shrink-0 mt-0.5">
                        <span className="text-gold-400 text-xs font-bold">
                          {i + 1}
                        </span>
                      </div>
                      <p className="text-cream-100/60 text-sm leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-2" animation="slide-in-right">
              <div className="space-y-6">
                <Card className="bg-navy-800/40 border-navy-700/50">
                  <CardContent className="p-6">
                    <h3 className="text-sm font-bold text-cream-100 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-gold-400" />
                      What you get
                    </h3>
                    <ul className="space-y-2.5">
                      {service.deliverables.map((item) => (
                        <li
                          key={item}
                          className="text-cream-100/60 text-sm flex items-start gap-2.5"
                        >
                          <span className="text-gold-500/50 mt-1.5 text-[8px]">&#9679;</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>

                <Card className="bg-navy-800/40 border-navy-700/50">
                  <CardContent className="p-6">
                    <h3 className="text-sm font-bold text-cream-100 uppercase tracking-wider mb-4 flex items-center gap-2">
                      <Wrench className="w-4 h-4 text-gold-400" />
                      Tools I use
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {service.tools.map((tool) => (
                        <Badge
                          key={tool}
                          variant="outline"
                          className="border-navy-600 text-cream-100/60 bg-navy-800/50 text-xs px-2.5 py-1"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-navy-900 relative overflow-hidden grain">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-cream-100 font-[family-name:var(--font-geist-sans)] mb-3">
              The process
            </h2>
            <p className="text-cream-100/50 text-sm mb-12 max-w-lg">
              Every project follows the same general rhythm — but I adapt to what
              works for you.
            </p>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.process.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 100}>
                <div className="relative h-full">
                  <div className="bg-navy-800/40 border border-navy-700/50 rounded-xl p-6 h-full hover:border-gold-500/20 transition-all duration-300 hover-lift">
                    <div className="text-gold-500/30 text-3xl font-bold font-[family-name:var(--font-geist-sans)] mb-3">
                      {step.step}
                    </div>
                    <h4 className="text-cream-100 font-semibold mb-2">
                      {step.title}
                    </h4>
                    <p className="text-cream-100/50 text-sm leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                  {i < service.process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-3 text-gold-500/20">
                      <ArrowRight className="w-5 h-5" />
                    </div>
                  )}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Previous Projects */}
      <section className="py-20 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h2 className="text-2xl font-bold text-cream-100 font-[family-name:var(--font-geist-sans)] mb-3">
              Work I&apos;ve done in this space
            </h2>
            <p className="text-cream-100/50 text-sm mb-12 max-w-lg">
              A few projects that show what this looks like in practice.
            </p>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {service.projects.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 120}>
                <Card className="bg-navy-800/30 border-navy-700/50 hover:border-gold-500/20 transition-all duration-500 hover-lift overflow-hidden group h-full">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="h-48 relative overflow-hidden">
                      <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/30 to-transparent" />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-cream-100 font-bold text-[15px] leading-snug">
                        {project.title}
                      </h3>
                      <p className="text-cream-100/50 text-sm mt-2 leading-relaxed flex-1">
                        {project.desc}
                      </p>
                      <div className="flex flex-wrap gap-1.5 mt-4">
                        {project.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="border-navy-600/50 text-cream-100/40 text-[10px] px-2 py-0.5"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-900 relative overflow-hidden">
        <div className="absolute inset-0 shimmer-bg" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="w-12 h-12 rounded-lg bg-gold-500/10 border border-gold-500/20 flex items-center justify-center mx-auto mb-6">
              <Icon className="w-6 h-6 text-gold-400" />
            </div>
            <h2 className="text-3xl font-bold text-cream-100 font-[family-name:var(--font-geist-sans)]">
              {service.cta}
            </h2>
            <p className="text-cream-100/50 mt-4 text-[15px] max-w-md mx-auto leading-relaxed">
              {service.ctaDesc}
            </p>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-gold-500 text-navy-950 hover:bg-gold-400 font-semibold text-base px-10 py-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20"
            >
              <Link href="/contact">Get in touch</Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>

      {/* Prev/Next Navigation */}
      <section className="bg-navy-950 border-t border-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 divide-x divide-navy-800">
            {prevService ? (
              <Link
                href={`/services/${prevService.slug}`}
                className="py-8 pr-8 group hover:bg-navy-900/50 transition-colors"
              >
                <p className="text-cream-100/30 text-xs uppercase tracking-wider mb-1">
                  Previous
                </p>
                <p className="text-cream-100 font-semibold text-sm group-hover:text-gold-400 transition-colors flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  {prevService.title}
                </p>
              </Link>
            ) : (
              <div />
            )}
            {nextService ? (
              <Link
                href={`/services/${nextService.slug}`}
                className="py-8 pl-8 text-right group hover:bg-navy-900/50 transition-colors"
              >
                <p className="text-cream-100/30 text-xs uppercase tracking-wider mb-1">
                  Next
                </p>
                <p className="text-cream-100 font-semibold text-sm group-hover:text-gold-400 transition-colors flex items-center gap-2 justify-end">
                  {nextService.title}
                  <ArrowRight className="w-4 h-4" />
                </p>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </>
  );
}
