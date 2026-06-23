import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/section-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ArrowRight, Zap, Target, Award, User } from "lucide-react";

const expertise = [
  "React/Next.js",
  "TypeScript",
  "Python",
  "Figma",
  "Data Analysis",
  "Proposal Writing",
  "Brand Strategy",
  "CV Writing",
];

const timeline = [
  {
    year: "2019",
    title: "Started Freelancing",
    desc: "Web & design for local clients",
  },
  {
    year: "2021",
    title: "Expanded Services",
    desc: "Proposals, CVs, data work added",
  },
  {
    year: "2023",
    title: "Built Client Base",
    desc: "100+ clients, NGOs & corporates",
  },
  {
    year: "2025",
    title: "Going Corporate",
    desc: "Incorporating formal entity",
  },
];

const values = [
  {
    num: "01",
    icon: Zap,
    title: "Fast Delivery",
    desc: "Tight deadlines met without compromising quality",
  },
  {
    num: "02",
    icon: Target,
    title: "Results-Focused",
    desc: "Every deliverable tied directly to your objectives",
  },
  {
    num: "03",
    icon: Award,
    title: "Premium Quality",
    desc: "Corporate-grade output at fair, transparent rates",
  },
  {
    num: "04",
    icon: User,
    title: "Direct Access",
    desc: "You work with Josiah — no layers, no middlemen",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-navy-800 via-navy-900 to-navy-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="My Story"
            title="About Josiah Mwangi"
            subtitle="Consultant. Creator. Builder."
          />
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-24 bg-navy-950/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <ScrollReveal className="lg:col-span-2" animation="slide-in-left">
              <div className="relative photo-tilt">
                <div className="bg-navy-800 p-3 pb-12 rounded-sm shadow-2xl relative tape-effect">
                  <div className="w-full aspect-[3/4] relative overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
                      alt="Josiah Mwangi"
                      fill
                      sizes="(max-width: 1024px) 100vw, 40vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                  <p className="absolute bottom-3.5 left-4 text-cream-100/30 text-xs font-[family-name:var(--font-geist-sans)] italic">
                    Nairobi, 2024
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal className="lg:col-span-3" animation="slide-in-right">
              <div>
                <h3 className="text-3xl font-bold text-cream-100 font-[family-name:var(--font-geist-sans)]">
                  Josiah Mwangi
                </h3>
                <p className="text-gold-400 text-sm font-semibold uppercase tracking-widest mt-2">
                  Consultant &middot; Web Developer &middot; Digital Strategist
                </p>

                <div className="mt-8 space-y-5 text-cream-100/70 leading-relaxed">
                  <p>
                    I am a Nairobi-based consultant with five-plus years of
                    experience delivering transformative digital solutions,
                    compelling business documents, and data-driven strategies for
                    individuals, startups, NGOs, and corporate entities across
                    East Africa.
                  </p>
                  <p>
                    My practice sits at the intersection of technology and
                    communication — from building sophisticated web platforms to
                    crafting winning proposals and designing brand identities
                    that command attention.
                  </p>
                  <p>
                    I am currently transitioning from individual practice into a
                    fully incorporated corporate consultancy, bringing
                    institutional-grade quality and structure to every client
                    engagement.
                  </p>
                </div>

                <div className="mt-8">
                  <h4 className="text-sm font-bold text-cream-100 uppercase tracking-wider mb-4">
                    Areas of Expertise
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {expertise.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="border-navy-600 text-cream-100/70 bg-navy-800/50 px-3 py-1.5 text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-navy-900/65">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              label="Professional Journey"
              title="From Freelancer to Corporate Consultancy"
            />
          </ScrollReveal>

          <div className="relative">
            <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-navy-700">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-500/0 via-gold-500/50 to-gold-500/0" />
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {timeline.map((item, i) => (
                <ScrollReveal key={item.year} delay={i * 150}>
                  <div className="text-center relative">
                    <div className="text-gold-400 text-xl font-bold font-[family-name:var(--font-geist-sans)] mb-4">
                      {item.year}
                    </div>
                    <div className="w-4 h-4 rounded-full bg-gold-500 border-4 border-navy-900 mx-auto mb-4 relative z-10" />
                    <h4 className="text-cream-100 font-semibold text-sm">
                      {item.title}
                    </h4>
                    <p className="text-cream-100/50 text-xs mt-1">
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-navy-950/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              label="Value Proposition"
              title="Why Choose Josiah?"
            />
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <ScrollReveal key={v.num} delay={i * 100}>
                <Card className="bg-navy-800/50 border-navy-700 hover:border-gold-500/30 transition-all duration-300 hover-lift h-full">
                  <CardContent className="p-8 text-center">
                    <span className="text-gold-500/30 text-5xl font-bold font-[family-name:var(--font-geist-sans)]">
                      {v.num}
                    </span>
                    <v.icon className="w-6 h-6 text-gold-400 mx-auto mt-4" />
                    <h4 className="text-cream-100 font-bold mt-3">
                      {v.title}
                    </h4>
                    <p className="text-cream-100/50 text-sm mt-2">{v.desc}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-navy-800 via-navy-700 to-navy-800 relative overflow-hidden">
        <div className="absolute inset-0 shimmer-bg" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream-100 font-[family-name:var(--font-geist-sans)]">
              Ready to work together?
            </h2>
            <Button
              asChild
              size="lg"
              className="mt-8 bg-transparent border-2 border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-navy-950 font-semibold text-base px-10 py-6 rounded-md transition-all duration-300"
            >
              <Link href="/contact">
                GET IN TOUCH <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
