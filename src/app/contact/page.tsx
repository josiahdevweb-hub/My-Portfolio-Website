"use client";

import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { SectionHeader } from "@/components/section-header";
import { ScrollReveal } from "@/components/scroll-reveal";
import {
  Mail,
  Phone,
  MapPin,
  Link2,
  Globe,
  Send,
  CheckCircle,
  Clock,
} from "lucide-react";

const contactInfo = [
  { icon: Mail, label: "EMAIL", value: "josiah@mwangi.co.ke" },
  { icon: Phone, label: "PHONE", value: "+254 700 000 000" },
  { icon: MapPin, label: "LOCATION", value: "Nairobi, Kenya" },
  { icon: Link2, label: "LINKEDIN", value: "linkedin.com/in/josiahmwangi" },
  { icon: Globe, label: "WEBSITE", value: "www.josiahmwangi.co.ke" },
];

const serviceOptions = [
  "Web Development",
  "Proposal Writing",
  "Graphic Design",
  "CV & Cover Letters",
  "Job Matching",
  "Data Services",
];

const budgetOptions = [
  "Under KES 20,000",
  "KES 20,000 - 50,000",
  "KES 50,000 - 100,000",
  "KES 100,000+",
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-navy-800 via-navy-900 to-navy-950 relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-1 gold-gradient" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Get in Touch"
            title="Start a Conversation"
            subtitle="Ready to elevate your work? Reach out and let's make it happen."
          />
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <ScrollReveal className="lg:col-span-2" animation="slide-in-left">
              <div>
                <h3 className="text-2xl font-bold text-cream-100 font-[family-name:var(--font-geist-sans)] mb-2">
                  Contact Details
                </h3>
                <p className="text-cream-100/50 text-sm mb-8">
                  Reach Josiah through any channel below.
                </p>

                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <Card
                      key={info.label}
                      className="bg-navy-800/40 border-navy-700 hover:border-gold-500/20 transition-all duration-300"
                    >
                      <CardContent className="p-5 flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-gold-500/10 flex items-center justify-center shrink-0">
                          <info.icon className="w-5 h-5 text-gold-400" />
                        </div>
                        <div>
                          <p className="text-gold-400 text-xs font-semibold uppercase tracking-wider">
                            {info.label}
                          </p>
                          <p className="text-cream-100/80 text-sm mt-0.5">
                            {info.value}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                <Card className="mt-6 bg-gold-500/10 border-gold-500/20">
                  <CardContent className="p-5 flex items-center gap-4">
                    <Clock className="w-6 h-6 text-gold-400 shrink-0" />
                    <div>
                      <p className="text-cream-100 font-semibold text-sm">
                        Now Accepting New Clients
                      </p>
                      <p className="text-cream-100/50 text-xs">
                        Response guaranteed within 24 hours
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </ScrollReveal>

            {/* Contact Form */}
            <ScrollReveal className="lg:col-span-3" animation="slide-in-right">
              <div>
                <h3 className="text-2xl font-bold text-cream-100 font-[family-name:var(--font-geist-sans)] mb-2">
                  Send a Message
                </h3>
                <p className="text-cream-100/50 text-sm mb-8">
                  Fill in the form and I&apos;ll respond promptly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-cream-100/80 text-xs font-semibold uppercase tracking-wider mb-2 block">
                        Full Name
                      </label>
                      <Input
                        placeholder="e.g. Jane Kamau"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        className="bg-navy-800 border-navy-600 text-cream-100 placeholder:text-cream-100/30 focus:border-gold-500 focus:ring-gold-500/20 h-12"
                        required
                      />
                    </div>
                    <div>
                      <label className="text-cream-100/80 text-xs font-semibold uppercase tracking-wider mb-2 block">
                        Email Address
                      </label>
                      <Input
                        type="email"
                        placeholder="e.g. jane@company.co.ke"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        className="bg-navy-800 border-navy-600 text-cream-100 placeholder:text-cream-100/30 focus:border-gold-500 focus:ring-gold-500/20 h-12"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-cream-100/80 text-xs font-semibold uppercase tracking-wider mb-2 block">
                      Phone Number
                    </label>
                    <Input
                      placeholder="e.g. +254 700 000 000"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="bg-navy-800 border-navy-600 text-cream-100 placeholder:text-cream-100/30 focus:border-gold-500 focus:ring-gold-500/20 h-12"
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="text-cream-100/80 text-xs font-semibold uppercase tracking-wider mb-2 block">
                        Service of Interest
                      </label>
                      <select
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })
                        }
                        className="w-full h-12 rounded-md bg-navy-800 border border-navy-600 text-cream-100 px-3 text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 focus:outline-none appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-navy-800">
                          Select a service
                        </option>
                        {serviceOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-navy-800">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="text-cream-100/80 text-xs font-semibold uppercase tracking-wider mb-2 block">
                        Project Budget
                      </label>
                      <select
                        value={formData.budget}
                        onChange={(e) =>
                          setFormData({ ...formData, budget: e.target.value })
                        }
                        className="w-full h-12 rounded-md bg-navy-800 border border-navy-600 text-cream-100 px-3 text-sm focus:border-gold-500 focus:ring-1 focus:ring-gold-500/20 focus:outline-none appearance-none cursor-pointer"
                      >
                        <option value="" className="bg-navy-800">
                          Select a budget range
                        </option>
                        {budgetOptions.map((opt) => (
                          <option key={opt} value={opt} className="bg-navy-800">
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-cream-100/80 text-xs font-semibold uppercase tracking-wider mb-2 block">
                      Your Message
                    </label>
                    <Textarea
                      placeholder="Describe your project or requirements..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      className="bg-navy-800 border-navy-600 text-cream-100 placeholder:text-cream-100/30 focus:border-gold-500 focus:ring-gold-500/20 min-h-[140px] resize-none"
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gold-500 text-navy-950 hover:bg-gold-400 font-semibold text-base py-6 transition-all duration-300 hover:shadow-lg hover:shadow-gold-500/20"
                    disabled={submitted}
                  >
                    {submitted ? (
                      <>
                        <CheckCircle className="mr-2 w-5 h-5" />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        SEND MESSAGE
                        <Send className="ml-2 w-5 h-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-cream-100/30 text-xs text-center">
                    Your information is private and never shared with third
                    parties.
                  </p>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
