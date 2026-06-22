import {
  Globe,
  FileText,
  Palette,
  FileCheck,
  Users,
  Database,
  type LucideIcon,
} from "lucide-react";

export interface ServiceProject {
  title: string;
  desc: string;
  img: string;
  tags: string[];
}

export interface ServiceData {
  slug: string;
  num: string;
  icon: LucideIcon;
  title: string;
  tagline: string;
  heroImg: string;
  intro: string;
  approach: string[];
  deliverables: string[];
  tools: string[];
  process: { step: string; title: string; desc: string }[];
  projects: ServiceProject[];
  cta: string;
  ctaDesc: string;
}

export const services: ServiceData[] = [
  {
    slug: "web-development",
    num: "01",
    icon: Globe,
    title: "Web Development",
    tagline: "Custom digital platforms built to perform",
    heroImg: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1200&q=80",
    intro:
      "I don't build websites from templates and call it a day. Every project starts with your actual business goals — what you need the site to do, who's going to use it, and how it fits into the way you already work. Then I build something custom that does exactly that.",
    approach: [
      "We start with a conversation. I want to understand your business, your users, and what success looks like before I write a single line of code.",
      "I design in the browser — you see real, working prototypes early, not static mockups that look nothing like the final product.",
      "Everything is built mobile-first. Your customers in Nairobi are on their phones. The site needs to work flawlessly there.",
      "I stick around after launch. Bugs happen, needs change — I don't disappear once the invoice is paid.",
    ],
    deliverables: [
      "Custom website design & development",
      "React / Next.js / TypeScript applications",
      "E-commerce with Mpesa & card integrations",
      "Mobile-first, fully responsive layouts",
      "SEO-optimised & performance-tuned builds",
      "Admin dashboards & CMS integration",
      "API development & third-party integrations",
    ],
    tools: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS", "PostgreSQL", "Vercel", "Figma"],
    process: [
      { step: "01", title: "Discovery Call", desc: "We talk about your goals, your audience, and what you need the site to actually do." },
      { step: "02", title: "Wireframe & Design", desc: "I sketch out the structure and design key screens. You give feedback before any code is written." },
      { step: "03", title: "Build & Iterate", desc: "I build in sprints, sharing progress every few days so there are no surprises." },
      { step: "04", title: "Launch & Support", desc: "We go live together. I handle deployment, domain setup, and stay on for post-launch fixes." },
    ],
    projects: [
      {
        title: "E-Commerce Platform — Nairobi Retailer",
        desc: "Full-stack React + Node.js with Mpesa integration, admin dashboard, and automated inventory management. Handles 500+ orders per month.",
        img: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
        tags: ["React", "Node.js", "Mpesa API"],
      },
      {
        title: "NGO Donation Portal",
        desc: "Secure donation platform with Mpesa and card payments. Custom reporting dashboard for the finance team.",
        img: "https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&q=80",
        tags: ["Next.js", "Mpesa", "Stripe"],
      },
      {
        title: "Consultancy Portfolio & Booking",
        desc: "Clean portfolio site with integrated booking calendar and CMS for a Nairobi-based legal consultancy.",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
        tags: ["Next.js", "CMS", "Calendar"],
      },
    ],
    cta: "Start a Web Project",
    ctaDesc: "Tell me what you're building. I'll come back with a plan and a realistic timeline — no jargon, no pressure.",
  },
  {
    slug: "proposal-writing",
    num: "02",
    icon: FileText,
    title: "Proposal Writing",
    tagline: "Compelling documents that win contracts",
    heroImg: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=1200&q=80",
    intro:
      "A good proposal doesn't just describe what you do — it makes the reader believe you're the only one who can do it. I've helped startups, NGOs, and corporates across East Africa win contracts worth millions. The secret isn't fancy formatting. It's knowing what decision-makers actually read.",
    approach: [
      "I study the RFP or brief like I'm the one evaluating it. I figure out what they really want to hear, not just what they asked for.",
      "Every proposal is structured around a clear narrative: here's the problem, here's why we understand it, here's exactly how we solve it.",
      "I write tight. No filler, no jargon. Every sentence earns its place.",
      "You get the final document in editable format so your team can reuse the structure for future bids.",
    ],
    deliverables: [
      "Business & grant proposals",
      "Tender & RFP responses",
      "Executive summaries & briefs",
      "Technical & narrative writing",
      "Concept notes & project plans",
      "Proofreading & editing services",
    ],
    tools: ["Google Docs", "Microsoft Word", "Canva", "Grammarly", "Notion"],
    process: [
      { step: "01", title: "Brief Review", desc: "I go through the RFP, TOR, or brief and highlight what matters. We align on strategy." },
      { step: "02", title: "Research & Outline", desc: "I research the funder or client, then build a structured outline for your review." },
      { step: "03", title: "Drafting", desc: "I write the full proposal — narrative, budget justification, annexes. You review and give feedback." },
      { step: "04", title: "Final Polish", desc: "Formatting, proofreading, compliance check. Ready to submit." },
    ],
    projects: [
      {
        title: "KES 5M Grant Proposal — Water NGO",
        desc: "Won a major grant for a Mombasa-based NGO's clean water initiative. Included logical framework, budget, and M&E plan.",
        img: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80",
        tags: ["Grant Writing", "NGO", "KES 5M"],
      },
      {
        title: "Government Tender — IT Services",
        desc: "Prepared a full tender response for an IT company bidding on a county government digitisation project.",
        img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&q=80",
        tags: ["Tender", "Government", "IT"],
      },
      {
        title: "Startup Pitch Document — Fintech",
        desc: "Investor-facing pitch document for a Nairobi fintech startup. Secured seed funding.",
        img: "https://images.unsplash.com/photo-1553729459-uj98fg37wn5w?w=600&q=80",
        tags: ["Pitch Deck", "Startup", "Fintech"],
      },
    ],
    cta: "Get a Winning Proposal",
    ctaDesc: "Share the RFP or brief. I'll tell you honestly if I can help — and if I can, we'll start within 24 hours.",
  },
  {
    slug: "graphic-design",
    num: "03",
    icon: Palette,
    title: "Graphic Design",
    tagline: "Visual identity that commands attention",
    heroImg: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200&q=80",
    intro:
      "Your brand is what people feel when they see your work. I design visual identities that are consistent, professional, and memorable — from logos to social media templates, pitch decks to print materials. No clip art. No Canva templates passed off as custom work.",
    approach: [
      "I start by understanding your brand's personality. Are you bold and disruptive, or established and trustworthy? The design should match.",
      "I explore multiple directions before we commit. You'll see 2–3 concepts with real context — not just a logo on a white background.",
      "Everything I deliver works across mediums. Your logo looks as good on a business card as it does on a billboard.",
      "You own everything. All source files, all formats. No vendor lock-in.",
    ],
    deliverables: [
      "Logo & brand identity systems",
      "Brand guidelines & style guides",
      "Marketing collateral & flyers",
      "Social media graphic templates",
      "Pitch deck & presentation design",
      "Print-ready & digital formats",
    ],
    tools: ["Figma", "Adobe Illustrator", "Adobe Photoshop", "Canva Pro", "InDesign"],
    process: [
      { step: "01", title: "Brand Discovery", desc: "We talk about your brand, your audience, your competitors. I ask a lot of questions." },
      { step: "02", title: "Concept Exploration", desc: "I present 2–3 design directions. You pick the one that feels right." },
      { step: "03", title: "Refinement", desc: "We iterate until it's perfect. Colours, typography, spacing — every detail matters." },
      { step: "04", title: "Delivery", desc: "You get all files in every format you'll ever need, plus a simple brand guide." },
    ],
    projects: [
      {
        title: "Brand Identity — Fintech Startup",
        desc: "Complete rebrand including logo, colour system, typography, and brand guidelines for a Nairobi-based fintech.",
        img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
        tags: ["Brand Identity", "Fintech", "Logo"],
      },
      {
        title: "Pitch Deck — Series A Health-tech",
        desc: "20-slide investor deck that helped secure Series A funding. Clean data visualisation and compelling narrative.",
        img: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
        tags: ["Pitch Deck", "Presentation"],
      },
      {
        title: "Social Media Kit — Restaurant Chain",
        desc: "Templates for Instagram, Facebook, and Twitter. 30+ reusable designs the client's team can update themselves.",
        img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80",
        tags: ["Social Media", "Templates"],
      },
    ],
    cta: "Design My Brand",
    ctaDesc: "Send me your current branding (or lack thereof) and I'll share initial thoughts — free, no commitment.",
  },
  {
    slug: "cv-cover-letters",
    num: "04",
    icon: FileCheck,
    title: "CV & Cover Letters",
    tagline: "Documents that open the right doors",
    heroImg: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1200&q=80",
    intro:
      "Most CVs I see are a list of duties. Hiring managers don't care what you were responsible for — they care what you actually achieved. I rewrite your CV to highlight impact, pass ATS filters, and make recruiters want to call you.",
    approach: [
      "We start with a 30-minute call where I learn about your career story — the wins, the transitions, the goals.",
      "I rewrite from scratch. This isn't a formatting exercise. I restructure, reword, and reposition your entire professional narrative.",
      "Every CV is optimised for ATS (Applicant Tracking Systems). The formatting, keywords, and structure are all designed to pass automated screening.",
      "Cover letters are tailored per role. I don't write generic ones — each letter speaks directly to the job description.",
    ],
    deliverables: [
      "ATS-optimised CV writing",
      "Professional cover letter drafting",
      "LinkedIn profile optimisation",
      "Career change repositioning",
      "Executive & graduate levels",
      "Interview preparation notes",
    ],
    tools: ["Microsoft Word", "Google Docs", "LinkedIn", "Jobscan", "Canva"],
    process: [
      { step: "01", title: "Career Consultation", desc: "30-minute call to understand your background, goals, and target roles." },
      { step: "02", title: "CV Rewrite", desc: "I rewrite your CV from scratch — structure, content, and formatting." },
      { step: "03", title: "Cover Letter", desc: "If needed, a tailored cover letter for your target role or industry." },
      { step: "04", title: "Revisions", desc: "You review, I revise. Up to 2 rounds of changes included." },
    ],
    projects: [
      {
        title: "CV Writing — 30+ Clients",
        desc: "ATS-optimised CVs across sectors: finance, tech, healthcare, NGO. Average of 3x more interview callbacks.",
        img: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&q=80",
        tags: ["CV Writing", "ATS", "Multi-sector"],
      },
      {
        title: "Executive CV — Country Director",
        desc: "Repositioned a senior professional from operations into a country director role at an international NGO.",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
        tags: ["Executive", "NGO", "Career Change"],
      },
      {
        title: "Graduate CV Package — University of Nairobi",
        desc: "CV + cover letter package for recent graduates. Helped 15+ students land their first professional roles.",
        img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
        tags: ["Graduate", "Entry Level"],
      },
    ],
    cta: "Rewrite My CV",
    ctaDesc: "Send me your current CV and the kind of roles you're targeting. I'll give you honest feedback on where it stands.",
  },
  {
    slug: "job-matching",
    num: "05",
    icon: Users,
    title: "Job Matching",
    tagline: "Connecting talent to the right opportunity",
    heroImg: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80",
    intro:
      "Finding a job isn't just about applying everywhere and hoping for the best. I help candidates figure out where they actually fit, then build an application strategy that gets results. For employers, I source pre-vetted talent that matches your actual needs — not just keyword matches.",
    approach: [
      "For candidates: I analyse your skills, experience, and goals, then identify roles you'd actually thrive in — not just tolerate.",
      "I help you tailor each application. Generic applications get generic results.",
      "For employers: I go beyond job boards. I source through networks, referrals, and targeted outreach.",
      "Interview prep is included. I run mock interviews and coach you on the questions that actually matter.",
    ],
    deliverables: [
      "Candidate–role fit analysis",
      "Application strategy & support",
      "Interview preparation coaching",
      "Employer talent sourcing",
      "Salary negotiation guidance",
      "Nairobi & remote roles",
    ],
    tools: ["LinkedIn Recruiter", "Indeed", "BrighterMonday", "Google Sheets", "Zoom"],
    process: [
      { step: "01", title: "Profile Assessment", desc: "I review your background and understand what you're looking for." },
      { step: "02", title: "Role Matching", desc: "I identify 5–10 target roles that match your profile and aspirations." },
      { step: "03", title: "Application Support", desc: "I help tailor your CV and cover letter for each application." },
      { step: "04", title: "Interview Coaching", desc: "Mock interviews, feedback, and negotiation strategy." },
    ],
    projects: [
      {
        title: "Tech Talent Placement — Startup",
        desc: "Sourced and placed 5 developers for a growing Nairobi startup. All still with the company 12 months later.",
        img: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80",
        tags: ["Recruitment", "Tech", "Startup"],
      },
      {
        title: "Career Transition — Finance to Tech",
        desc: "Helped a finance professional transition into product management through targeted applications and interview coaching.",
        img: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
        tags: ["Career Change", "Coaching"],
      },
      {
        title: "Graduate Placement Programme",
        desc: "Matched 20+ recent graduates with entry-level roles across Nairobi. 85% placement rate.",
        img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
        tags: ["Graduate", "Placement"],
      },
    ],
    cta: "Find Opportunities",
    ctaDesc: "Whether you're hiring or job hunting — let's talk. I'll point you in the right direction.",
  },
  {
    slug: "data-services",
    num: "06",
    icon: Database,
    title: "Data Services",
    tagline: "Accurate, structured, and decision-ready data",
    heroImg: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    intro:
      "Bad data costs money. Missing entries, duplicates, inconsistent formats — they all add up to bad decisions. I clean, structure, and organise your data so you can actually trust it. Whether it's a messy spreadsheet or a full database migration, I'll get it sorted.",
    approach: [
      "First, I audit what you have. Where are the gaps? What's duplicated? What format does it need to be in?",
      "I clean and standardise everything. Names, dates, phone numbers — all consistent, all correct.",
      "If you need reporting, I build dashboards and visualisations that answer your actual business questions.",
      "For migrations, I plan carefully, test thoroughly, and validate every record. Zero data loss.",
    ],
    deliverables: [
      "Data entry & management",
      "Data cleaning & deduplication",
      "Excel / Google Sheets modelling",
      "Database architecture & migration",
      "Reporting & visualisation",
      "Automated data pipelines",
    ],
    tools: ["Python", "Excel", "Google Sheets", "SQL", "Power BI", "PostgreSQL", "Airtable"],
    process: [
      { step: "01", title: "Data Audit", desc: "I review your current data — quality, structure, gaps, and goals." },
      { step: "02", title: "Cleaning & Structuring", desc: "I clean, deduplicate, and standardise your data." },
      { step: "03", title: "Modelling & Migration", desc: "If needed, I build the database structure and migrate your records." },
      { step: "04", title: "Reporting", desc: "I set up dashboards or reports so you can make decisions with confidence." },
    ],
    projects: [
      {
        title: "CRM Data Migration — 50K+ Records",
        desc: "Migrated a sales team's CRM data from spreadsheets to a proper database. Cleaned 50,000+ contact records.",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
        tags: ["Migration", "CRM", "50K records"],
      },
      {
        title: "NGO Beneficiary Database",
        desc: "Built a structured database for an NGO tracking 10,000+ beneficiaries across 3 counties. Custom reporting included.",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
        tags: ["Database", "NGO", "Reporting"],
      },
      {
        title: "Sales Reporting Dashboard",
        desc: "Excel-based dashboard tracking revenue, targets, and pipeline for a Nairobi retail chain. Updated weekly.",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
        tags: ["Dashboard", "Excel", "Reporting"],
      },
    ],
    cta: "Clean My Data",
    ctaDesc: "Send me a sample of what you're dealing with. I'll tell you what it'll take to fix it.",
  },
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return services.find((s) => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug);
}
