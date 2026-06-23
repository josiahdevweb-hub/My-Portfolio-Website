import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeader } from "@/components/section-header";
import { AnimatedCounter } from "@/components/animated-counter";
import { ScrollReveal } from "@/components/scroll-reveal";
import { VideoReel } from "@/components/video-reel";
import { HandDrawnUnderline, HandDrawnArrow } from "@/components/hand-drawn";
import {
  Globe,
  FileText,
  Palette,
  FileCheck,
  Users,
  Database,
  Star,
  ArrowRight,
  Quote,
  MapPin,
  Coffee,
} from "lucide-react";

const services = [
  {
    num: "01",
    title: "Web Development",
    desc: "Custom websites & applications — built to actually work, not just look pretty.",
    icon: Globe,
    href: "/services/web-development",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80",
  },
  {
    num: "02",
    title: "Proposal Writing",
    desc: "The kind of documents that make decision-makers say yes.",
    icon: FileText,
    href: "/services/proposal-writing",
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
  },
  {
    num: "03",
    title: "Graphic Design",
    desc: "Brand identities people actually remember.",
    icon: Palette,
    href: "/services/graphic-design",
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
  },
  {
    num: "04",
    title: "CV & Cover Letters",
    desc: "Your experience, told in a way that gets callbacks.",
    icon: FileCheck,
    href: "/services/cv-cover-letters",
    img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80",
  },
  {
    num: "05",
    title: "Job Matching",
    desc: "Connecting the right people to the right opportunities.",
    icon: Users,
    href: "/services/job-matching",
    img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80",
  },
  {
    num: "06",
    title: "Data Services",
    desc: "Messy spreadsheets in, clean decisions out.",
    icon: Database,
    href: "/services/data-services",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
];

const testimonials = [
  {
    quote:
      "Josiah built our website in record time. Beautiful design, clean code, zero issues. Highly recommend.",
    name: "Sarah K.",
    role: "Startup Founder, Nairobi",
    avatar: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=100&q=80",
  },
  {
    quote:
      "His proposal won us a KES 2M contract. Professional, compelling, delivered ahead of schedule.",
    name: "David M.",
    role: "NGO Director, Mombasa",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
  },
  {
    quote:
      "My new CV landed 3 interviews in one week. Outstanding work — genuinely impressed.",
    name: "Amina O.",
    role: "Graduate, Nairobi",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
  },
];

const stats = [
  { end: 5, suffix: "+", label: "Years Experience" },
  { end: 6, suffix: "", label: "Service Areas" },
  { end: 100, suffix: "+", label: "Clients Served" },
  { end: 50, suffix: "+", label: "Projects Delivered" },
];

const workPhotos = [
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&q=80",
    alt: "Coding on laptop",
    rotate: "-2deg",
  },
  {
    src: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80",
    alt: "Client meeting",
    rotate: "1.5deg",
  },
  {
    src: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=500&q=80",
    alt: "Design work on screen",
    rotate: "-1deg",
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&q=80",
    alt: "Team collaboration",
    rotate: "2deg",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden grain">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80"
          alt=""
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-navy-950/95 via-navy-950/85 to-navy-900/80" />
        <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-gold-500/5 rounded-full blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gold-500/3 rounded-full blur-3xl animate-float" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex items-center gap-2 mb-6 animate-fade-in">
              <MapPin className="w-3.5 h-3.5 text-gold-400" />
              <p className="text-gold-400/80 text-sm tracking-wide">
                Nairobi, Kenya
              </p>
            </div>

            <h1 className="font-[family-name:var(--font-geist-sans)] animate-slide-in-left">
              <span className="block text-5xl sm:text-6xl lg:text-7xl font-bold text-cream-100 leading-[0.95]">
                Hi, I&apos;m
              </span>
              <span className="block text-5xl sm:text-6xl lg:text-7xl font-bold text-cream-100 leading-[0.95] mt-1">
                Josiah<span className="gold-text-gradient">.</span>
              </span>
            </h1>

            <div className="mt-2 w-48">
              <HandDrawnUnderline className="text-gold-500/50" />
            </div>

            <p className="text-lg sm:text-xl text-cream-100/70 mt-8 max-w-md leading-relaxed animate-fade-in animation-delay-300">
              I help startups, NGOs, and corporates across East Africa build
              <span className="marker-highlight"> digital things that work</span> —
              websites, proposals, brands, and everything in between.
            </p>

            <div className="flex flex-wrap gap-4 mt-10 animate-fade-in-up animation-delay-500">
              <Button
                asChild
                size="lg"
                className="bg-gold-500 text-navy-950 hover:bg-gold-400 font-semibold text-base px-8 py-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20"
              >
                <Link href="/services">See what I do</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-cream-100/20 text-cream-100/80 hover:bg-cream-100/5 hover:border-cream-100/40 font-medium text-base px-8 py-6 rounded-lg"
              >
                <Link href="/contact">Let&apos;s talk</Link>
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-4 animate-fade-in animation-delay-700">
              <div className="flex -space-x-3">
                {testimonials.map((t) => (
                  <div key={t.name} className="w-9 h-9 rounded-full border-2 border-navy-900 overflow-hidden">
                    <Image
                      src={t.avatar}
                      alt={t.name}
                      width={36}
                      height={36}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-gold-500 text-gold-500" />
                  ))}
                </div>
                <p className="text-cream-100/40 text-xs mt-0.5">
                  Trusted by 100+ clients
                </p>
              </div>
            </div>
          </div>

          {/* Hero photo collage */}
          <div className="hidden lg:block relative h-[520px] animate-fade-in animation-delay-400">
            <div className="absolute top-0 right-4 w-72 h-80 rounded-2xl overflow-hidden photo-tilt shadow-2xl shadow-navy-950/50 border border-navy-600/30">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80"
                alt="Professional portrait"
                fill
                sizes="(max-width: 768px) 100vw, 300px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-8 left-0 w-56 h-64 rounded-2xl overflow-hidden photo-tilt-right shadow-2xl shadow-navy-950/50 border border-navy-600/30">
              <Image
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=500&q=80"
                alt="Working with client"
                fill
                sizes="(max-width: 768px) 100vw, 250px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
            </div>
            <div className="absolute bottom-0 right-0 bg-navy-800/90 backdrop-blur-sm border border-gold-500/20 rounded-xl px-5 py-4 shadow-xl z-20">
              <div className="flex items-center gap-2">
                <Coffee className="w-4 h-4 text-gold-400" />
                <p className="text-cream-100 text-sm font-medium">Available for work</p>
              </div>
              <p className="text-cream-100/40 text-xs mt-1">
                Usually responds within a few hours
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Stats ─── */}
      <section className="bg-navy-800 border-y border-navy-700 relative overflow-hidden">
        <div className="absolute inset-0 grain" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-navy-600">
            {stats.map((stat) => (
              <AnimatedCounter key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── Behind the Scenes — photo strip ─── */}
      <section className="py-24 bg-navy-950 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-xl mb-16">
              <p className="text-gold-400 text-sm font-medium tracking-wide mb-3">
                A peek behind the screen
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-cream-100 font-[family-name:var(--font-geist-sans)] leading-tight">
                Real work, real results.
                <br />
                <span className="text-cream-100/50">No stock-photo energy.</span>
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
            {workPhotos.map((photo, i) => (
              <ScrollReveal key={photo.alt} delay={i * 100}>
                <div
                  className="relative group"
                  style={{ transform: `rotate(${photo.rotate})` }}
                >
                  <div className="bg-navy-800 p-2 pb-10 rounded-sm shadow-xl hover:shadow-2xl transition-shadow duration-300 relative tape-effect">
                    <div className="aspect-[4/3] relative overflow-hidden">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        sizes="(max-width: 768px) 50vw, 25vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <p className="absolute bottom-2.5 left-3 text-cream-100/40 text-[10px] font-[family-name:var(--font-geist-sans)] italic">
                      {photo.alt}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Video Reel ─── */}
      <section className="py-24 bg-navy-900 relative overflow-hidden grain">
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <p className="text-gold-400 text-sm font-medium tracking-wide mb-3">
                See it in action
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-cream-100 font-[family-name:var(--font-geist-sans)]">
                How I work
              </h2>
              <p className="text-cream-100/50 mt-3 max-w-lg mx-auto">
                From first conversation to final delivery — here&apos;s what the
                process actually looks like.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal>
            <VideoReel />
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Services — organic layout ─── */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 mb-16">
              <div className="max-w-lg">
                <p className="text-gold-400 text-sm font-medium tracking-wide mb-3">
                  What I do
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold text-cream-100 font-[family-name:var(--font-geist-sans)] leading-tight">
                  Six things I&apos;m <span className="marker-highlight">really good</span> at.
                </h2>
              </div>
              <HandDrawnArrow className="w-16 text-gold-500/30 hidden sm:block" />
            </div>
          </ScrollReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <ScrollReveal key={service.num} delay={i * 80}>
                <Link href={service.href} className="block group h-full">
                  <Card className="bg-navy-800/30 border-navy-700/50 hover:border-gold-500/20 transition-all duration-500 hover-lift h-full overflow-hidden">
                    <CardContent className="p-0 flex flex-col h-full">
                      <div className="h-40 relative overflow-hidden">
                        <Image
                          src={service.img}
                          alt={service.title}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/50 to-transparent" />
                        <span className="absolute bottom-3 left-4 text-gold-500/40 text-3xl font-bold font-[family-name:var(--font-geist-sans)]">
                          {service.num}
                        </span>
                      </div>
                      <div className="p-6 flex-1 flex flex-col">
                        <div className="flex items-center gap-2.5">
                          <service.icon className="w-4 h-4 text-gold-400" />
                          <h3 className="font-bold text-cream-100">
                            {service.title}
                          </h3>
                        </div>
                        <p className="text-cream-100/50 text-sm mt-2 leading-relaxed flex-1">
                          {service.desc}
                        </p>
                        <span className="inline-flex items-center gap-1.5 mt-4 text-sm font-medium text-gold-400 group-hover:text-gold-300 transition-colors">
                          Learn more
                          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials — offset/organic ─── */}
      <section className="py-24 bg-navy-900 relative overflow-hidden grain">
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-xl mb-16">
              <p className="text-gold-400 text-sm font-medium tracking-wide mb-3">
                Don&apos;t just take my word for it
              </p>
              <h2 className="text-3xl sm:text-4xl font-bold text-cream-100 font-[family-name:var(--font-geist-sans)] leading-tight">
                People I&apos;ve worked with.
              </h2>
            </div>
          </ScrollReveal>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 120}>
                <div
                  className="relative"
                  style={{ marginTop: i === 1 ? "2rem" : i === 2 ? "1rem" : "0" }}
                >
                  <Card className="bg-navy-800/40 border-navy-700/50 hover:border-gold-500/15 transition-all duration-500 hover-lift">
                    <CardContent className="p-7">
                      <Quote className="w-8 h-8 text-gold-500/20 mb-3" />
                      <p className="text-cream-100/80 text-[15px] leading-relaxed italic">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                      <div className="mt-6 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-navy-600">
                          <Image
                            src={t.avatar}
                            alt={t.name}
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="text-cream-100 font-semibold text-sm">
                            {t.name}
                          </p>
                          <p className="text-cream-100/40 text-xs">{t.role}</p>
                        </div>
                        <div className="ml-auto flex gap-0.5">
                          {[...Array(5)].map((_, j) => (
                            <Star
                              key={j}
                              className="w-3 h-3 fill-gold-500 text-gold-500"
                            />
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA — personal touch ─── */}
      <section className="py-24 bg-navy-950 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold-500/3 rounded-full blur-3xl" />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <ScrollReveal>
            <div className="w-20 h-20 rounded-full mx-auto mb-8 overflow-hidden border-2 border-gold-500/30 shadow-xl shadow-gold-500/10">
              <Image
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80"
                alt="Josiah Mwangi"
                width={80}
                height={80}
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-cream-100 font-[family-name:var(--font-geist-sans)]">
              Got a project in mind?
            </h2>
            <p className="text-cream-100/50 mt-4 text-lg max-w-md mx-auto leading-relaxed">
              I&apos;d love to hear about it. No pitch decks needed — just tell me
              what you&apos;re working on.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <Button
                asChild
                size="lg"
                className="bg-gold-500 text-navy-950 hover:bg-gold-400 font-semibold text-base px-10 py-6 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20"
              >
                <Link href="/contact">Start a conversation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-cream-100/20 text-cream-100/70 hover:bg-cream-100/5 font-medium text-base px-10 py-6 rounded-lg"
              >
                <Link href="/portfolio">See past work</Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
