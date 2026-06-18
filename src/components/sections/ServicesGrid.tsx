"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Globe, 
  Layout, 
  Smartphone, 
  Gamepad, 
  Cpu, 
  Figma,
  ArrowUpRight
} from "lucide-react";
import Link from "next/link";

const services = [
  {
    id: "01",
    title: "Web Development",
    icon: <Globe className="w-8 h-8" />,
    desc: "Modern, high-performance websites built with React, Next.js, and cutting-edge tech stacks.",
    tags: ["React", "Next.js", "Headless CMS"]
  },
  {
    id: "02",
    title: "Web Applications",
    icon: <Layout className="w-8 h-8" />,
    desc: "Complex SaaS platforms and enterprise applications designed for scale and security.",
    tags: ["SaaS", "Full Stack", "Dashboard"]
  },
  {
    id: "03",
    title: "Mobile Apps",
    icon: <Smartphone className="w-8 h-8" />,
    desc: "Native-quality mobile experiences for iOS and Android using Flutter and React Native.",
    tags: ["Flutter", "React Native", "iOS/Android"]
  },
  {
    id: "04",
    title: "Game Development",
    icon: <Gamepad className="w-8 h-8" />,
    desc: "Immersive 2D and 3D digital experiences and games for web and mobile platforms.",
    tags: ["Unity", "Three.js", "2D/3D"]
  },
  {
    id: "05",
    title: "AI Automation",
    icon: <Cpu className="w-8 h-8" />,
    desc: "Integrating intelligent AI agents and automation workflows to streamline your business.",
    tags: ["OpenAI", "LLMs", "Automation"]
  },
  {
    id: "06",
    title: "UI/UX Design",
    icon: <Figma className="w-8 h-8" />,
    desc: "Strategic design that blends aesthetic beauty with world-class user experience.",
    tags: ["Figma", "Research", "Prototyping"]
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block"
            >
              Our Expertise
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black font-headline tracking-tighter"
            >
              Building The Infrastructure <br /> Of The Future
            </motion.h2>
          </div>
          <Link href="/services" className="group flex items-center gap-2 text-primary font-bold uppercase tracking-widest text-sm interactive">
            View All Services <ArrowUpRight className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border overflow-hidden rounded-3xl border border-border">
          {services.map((service, idx) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-background p-10 flex flex-col min-h-[400px] transition-colors hover:bg-secondary interactive overflow-hidden"
            >
              <div className="text-secondary group-hover:text-primary transition-colors mb-8">
                {service.icon}
              </div>
              <span className="text-muted-foreground group-hover:text-white/50 text-sm font-black mb-2 transition-colors">
                {service.id}
              </span>
              <h3 className="text-3xl font-black font-headline mb-4 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground group-hover:text-white/70 mb-8 transition-colors">
                {service.desc}
              </p>
              
              <div className="mt-auto flex flex-wrap gap-2">
                {service.tags.map(tag => (
                  <span key={tag} className="text-[10px] uppercase font-bold tracking-widest px-2 py-1 rounded-full border border-border group-hover:border-white/20 group-hover:text-white/70 transition-colors">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Decorative Background Element */}
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
