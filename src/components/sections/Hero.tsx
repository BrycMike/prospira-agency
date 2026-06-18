
"use client";

import React from "react";
import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { placeholderImages } from "@/app/lib/placeholder-images.json";

export default function Hero() {
  const heroImageData = placeholderImages.find(img => img.id === "hero-main");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#233038] to-[#075056] py-20 px-6">
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-left"
        >
          <motion.div variants={itemVariants} className="inline-block px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white text-xs font-bold mb-6 tracking-widest uppercase">
            Team Prospira Modern Agency
          </motion.div>
          
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-black text-white font-headline leading-[0.9] tracking-tighter mb-8 bg-gradient-to-b from-white to-[#F4D47C] bg-clip-text text-transparent"
          >
            We Build Digital <br /> Products That <br /> Grow Businesses
          </motion.h1>

          <motion.p variants={itemVariants} className="text-xl text-white/70 max-w-xl mb-12 font-body leading-relaxed">
            Custom websites, scalable applications, mobile experiences, and immersive digital products built for ambitious businesses ready to lead their industries.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Link href="/services">
              <MagneticButton>
                Start Your Project <ArrowRight size={18} />
              </MagneticButton>
            </Link>
            <Link href="/portfolio">
              <MagneticButton variant="outline" className="text-white border-white/20 hover:bg-white/10">
                Explore Our Work
              </MagneticButton>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative perspective-1000 hidden lg:block"
        >
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotateX: [0, 5, 0],
              rotateY: [0, -5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative z-10"
          >
             <div className="relative w-full aspect-square bg-gradient-to-tr from-white/10 to-white/5 rounded-3xl border border-white/10 p-8 backdrop-blur-sm overflow-hidden group">
                <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-20 group-hover:opacity-40 transition-opacity" />
                <div className="relative z-10 h-full w-full flex items-center justify-center">
                  {heroImageData && (
                    <Image 
                      src={heroImageData.imageUrl}
                      alt={heroImageData.description}
                      width={800}
                      height={800}
                      className="rounded-xl shadow-2xl rotate-3"
                      data-ai-hint={heroImageData.imageHint}
                    />
                  )}
                  {/* Floating elements */}
                  <motion.div 
                    animate={{ y: [-10, 10, -10] }} 
                    transition={{ duration: 4, repeat: Infinity }} 
                    className="absolute top-0 right-0 p-4 bg-white/10 rounded-2xl border border-white/20 backdrop-blur-md"
                  >
                    <div className="w-12 h-1 bg-primary rounded-full mb-2" />
                    <div className="w-8 h-1 bg-accent rounded-full" />
                  </motion.div>
                </div>
             </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}
