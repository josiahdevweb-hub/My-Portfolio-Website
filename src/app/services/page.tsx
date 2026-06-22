import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/section-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  ArrowRight,
  CheckCircle,
  MessageSquare,
  ClipboardList,
  Rocket,
} from "lucide-react";
import { services } from "@/lib/services-data";

const process = [
  {
    num: "01",
    icon: MessageSquare,
    title: "Book a Consultation",
    desc: "Discuss your goals & challenges",
  },
  {
    num: "02",
    icon: ClipboardList,
    title: "Receive a Tailored Plan",
    desc: "Custom solution scoped for you",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Expert Delivery",
    desc: "Quality work delivered on time",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-navy-800 via-navy-900 to-navy-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="What I Offer"
            title="Professional Services"
            subtitle="Six specialised service areas — tailored, premium, and results-driven."
          />
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => {
              const Icon = service.icon;
              return (
                <ScrollReveal key={service.slug} delay={i * 100}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="block group h-full"
                  >
                    <Card className="bg-navy-800/40 border-navy-700 hover:border-gold-500/30 transition-all duration-300 hover-lift h-full overflow-hidden">
                      <CardContent className="p-0 flex flex-col h-full">
                        <div className="h-44 relative overflow-hidden">
                          <Image
                            src={service.heroImg}
                            alt={service.title}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent" />
                          <span className="absolute bottom-3 left-4 text-gold-500/40 text-3xl font-bold font-[family-name:var(--font-geist-sans)]">
                            {service.num}
                          </span>
                        </div>

                        <div className="p-6 flex flex-col flex-1">
                          <div className="flex items-center gap-2 mb-3">
                            <Icon className="w-4 h-4 text-gold-400" />
                            <h3 className="text-lg font-bold text-cream-100">
                              {service.title}
                            </h3>
                          </div>
                          <p className="text-cream-100/50 text-sm italic mb-4">
                            {service.tagline}
                          </p>

                          <ul className="space-y-2 flex-1">
                            {service.deliverables.slice(0, 5).map((item) => (
                              <li
                                key={item}
                                className="flex items-start gap-2.5 text-sm text-cream-100/60"
                              >
                                <CheckCircle className="w-3.5 h-3.5 text-gold-500/60 mt-0.5 shrink-0" />
                                {item}
                              </li>
                            ))}
                          </ul>

                          <div className="mt-6 flex items-center justify-between">
                            <span className="text-sm font-medium text-gold-400 group-hover:text-gold-300 transition-colors flex items-center gap-1.5">
                              Learn more
                              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                            </span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <SectionHeader
              label="The Process"
              title="Simple. Structured. Successful."
            />
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-0.5 bg-navy-700">
              <div className="absolute inset-0 bg-gradient-to-r from-gold-500/0 via-gold-500/50 to-gold-500/0" />
            </div>

            {process.map((step, i) => (
              <ScrollReveal key={step.num} delay={i * 200}>
                <div className="text-center relative">
                  <div className="w-16 h-16 rounded-full bg-navy-800 border-2 border-gold-500 flex items-center justify-center mx-auto mb-6 relative z-10">
                    <span className="text-gold-400 font-bold text-lg font-[family-name:var(--font-geist-sans)]">
                      {step.num}
                    </span>
                  </div>
                  <h4 className="text-cream-100 font-bold text-lg">
                    {step.title}
                  </h4>
                  <p className="text-cream-100/50 text-sm mt-2">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
