"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SectionHeader } from "@/components/section-header";
import { AnimatedCounter } from "@/components/animated-counter";
import { ScrollReveal } from "@/components/scroll-reveal";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Category = "all" | "web" | "design" | "documents" | "data";

const categories: { key: Category; label: string }[] = [
  { key: "all", label: "All Work" },
  { key: "web", label: "Web Dev" },
  { key: "design", label: "Design" },
  { key: "documents", label: "Documents" },
  { key: "data", label: "Data" },
];

const projects = [
  {
    title: "E-Commerce Platform",
    desc: "React + Node.js, Mpesa",
    category: "web" as Category,
    tags: ["React", "Node.js", "TypeScript", "Mpesa API"],
    img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    featured: true,
    featuredDesc:
      "Full-stack React + Node.js with Mpesa integration, admin dashboard, and automated inventory management.",
  },
  {
    title: "Brand Identity System",
    desc: "Fintech startup rebrand",
    category: "design" as Category,
    tags: ["Figma", "Brand Strategy"],
    img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
  },
  {
    title: "Grant Proposal KES 5M",
    desc: "NGO water project win",
    category: "documents" as Category,
    tags: ["Grant Writing", "NGO"],
    img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
  },
  {
    title: "Consultancy Portfolio",
    desc: "CMS & booking site",
    category: "web" as Category,
    tags: ["Next.js", "CMS"],
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  },
  {
    title: "CRM Data Migration",
    desc: "50K+ records migrated",
    category: "data" as Category,
    tags: ["Python", "SQL"],
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  },
  {
    title: "Pitch Deck Series A",
    desc: "Health-tech investor deck",
    category: "design" as Category,
    tags: ["Figma", "Presentation"],
    img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
  },
  {
    title: "CV Writing — 30 Clients",
    desc: "ATS-optimised, multi-sector",
    category: "documents" as Category,
    tags: ["CV Writing", "ATS"],
    img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80",
  },
  {
    title: "NGO Donation Portal",
    desc: "Mpesa secure donations",
    category: "web" as Category,
    tags: ["React", "Mpesa"],
    img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80",
  },
];

const stats = [
  { end: 50, suffix: "+", label: "Projects" },
  { end: 100, suffix: "+", label: "Clients" },
  { end: 5, suffix: "+", label: "Years" },
  { end: 6, suffix: "", label: "Services" },
];

const categoryLabels: Record<Category, string> = {
  all: "All Work",
  web: "Web Dev",
  design: "Design",
  documents: "Documents",
  data: "Data",
};

export default function PortfolioPage() {
  const [active, setActive] = useState<Category>("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category === active);

  const featured = projects.find((p) => p.featured);

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-navy-800 via-navy-900 to-navy-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Selected Work"
            title="Portfolio"
            subtitle="A curated selection of projects across all service areas."
          />
        </div>
      </section>

      {/* Featured Project */}
      {featured && (
        <section className="bg-navy-950 pt-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <ScrollReveal>
              <Card className="bg-navy-800/50 border-navy-700 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid md:grid-cols-2">
                    <div className="relative min-h-[250px] overflow-hidden">
                      <Image
                        src={featured.img}
                        alt={featured.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-navy-950/20" />
                    </div>
                    <div className="p-8 md:p-12 flex flex-col justify-center">
                      <Badge className="w-fit mb-3 bg-gold-500/10 text-gold-400 border-gold-500/20 text-xs">
                        TOP PROJECT
                      </Badge>
                      <h3 className="text-2xl font-bold text-cream-100 font-[family-name:var(--font-geist-sans)]">
                        E-Commerce Platform — Nairobi Retailer
                      </h3>
                      <p className="text-cream-100/60 mt-3 text-sm leading-relaxed">
                        {featured.featuredDesc}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {featured.tags.map((tag) => (
                          <Badge
                            key={tag}
                            variant="outline"
                            className="border-navy-600 text-cream-100/60 text-xs"
                          >
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button
                        asChild
                        className="mt-6 w-fit bg-transparent border border-gold-500 text-gold-400 hover:bg-gold-500 hover:text-navy-950 transition-all duration-300"
                      >
                        <Link href="/contact">
                          View Case Study <ArrowRight className="ml-2 w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Filter Tabs + Grid */}
      <section className="py-16 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActive(cat.key)}
                className={cn(
                  "px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-300",
                  active === cat.key
                    ? "bg-gold-500 text-navy-950"
                    : "bg-navy-800 text-cream-100/60 hover:text-cream-100 hover:bg-navy-700"
                )}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filtered.map((project, i) => (
              <ScrollReveal key={project.title} delay={i * 80}>
                <Card className="bg-navy-800/30 border-navy-700 hover:border-gold-500/20 transition-all duration-300 hover-lift group overflow-hidden h-full">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="h-44 relative overflow-hidden">
                      <Image
                        src={project.img}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-900/80 to-transparent" />
                      <Badge className="absolute bottom-3 left-3 bg-navy-900/80 text-cream-100/80 text-xs border-0">
                        {categoryLabels[project.category]}
                      </Badge>
                    </div>
                    <div className="p-5 flex flex-col flex-1">
                      <h4 className="text-cream-100 font-semibold text-sm">
                        {project.title}
                      </h4>
                      <p className="text-cream-100/40 text-xs mt-1 flex-1">
                        {project.desc}
                      </p>
                      <Button
                        asChild
                        size="sm"
                        className="mt-4 w-full bg-gold-500 text-navy-950 hover:bg-gold-400 text-xs font-semibold"
                      >
                        <Link href="/contact">
                          View <ArrowRight className="ml-1 w-3 h-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-navy-800 border-y border-navy-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-navy-600">
            {stats.map((stat) => (
              <AnimatedCounter key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
