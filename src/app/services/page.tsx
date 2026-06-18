
"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, ArrowRight, HelpCircle } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import Image from "next/image";
import { placeholderImages } from "@/app/lib/placeholder-images.json";

const options = [
  { id: "web", name: "Web Development", basePrice: 5000 },
  { id: "mobile", name: "Mobile App", basePrice: 8000 },
  { id: "saas", name: "SaaS Platform", basePrice: 12000 },
  { id: "uiux", name: "UI/UX Design", basePrice: 3000 },
];

const features = [
  { id: "auth", name: "User Authentication", price: 1500 },
  { id: "payment", name: "Payment Integration", price: 2000 },
  { id: "ai", name: "AI Chatbot/Agent", price: 3500 },
  { id: "cloud", name: "Cloud Infrastructure", price: 2500 },
];

export default function ServicesPage() {
  const [selectedType, setSelectedType] = useState(options[0].id);
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([]);
  
  const servicesImageData = placeholderImages.find(img => img.id === "services-header");

  const toggleFeature = (id: string) => {
    setSelectedFeatures(prev => 
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  const calculateTotal = () => {
    const base = options.find(o => o.id === selectedType)?.basePrice || 0;
    const featSum = features
      .filter(f => selectedFeatures.includes(f.id))
      .reduce((sum, f) => sum + f.price, 0);
    return base + featSum;
  };

  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
          <div className="max-w-3xl">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black font-headline tracking-tighter mb-8 leading-[0.9]"
            >
              Digital <br /> Solutions <br /> Built for Scale
            </motion.h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From strategic discovery to high-performance development, we offer a comprehensive suite of services designed to accelerate your growth.
            </p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative rounded-[2rem] overflow-hidden border border-border shadow-2xl aspect-video lg:aspect-square"
          >
            {servicesImageData && (
              <Image 
                src={servicesImageData.imageUrl}
                alt={servicesImageData.description}
                fill
                className="object-cover"
                data-ai-hint={servicesImageData.imageHint}
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* Pricing Estimator */}
        <div className="grid lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <h3 className="text-2xl font-black font-headline mb-6 flex items-center gap-2">
                1. Select Project Type <HelpCircle size={18} className="text-muted-foreground" />
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {options.map(opt => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedType(opt.id)}
                    className={`p-6 rounded-2xl border-2 text-left transition-all ${
                      selectedType === opt.id 
                      ? "border-primary bg-primary/5 text-primary" 
                      : "border-border hover:border-primary/50"
                    }`}
                  >
                    <span className="font-bold block mb-1">{opt.name}</span>
                    <span className="text-xs uppercase tracking-widest opacity-60">Starting at ${opt.basePrice}</span>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-black font-headline mb-6 flex items-center gap-2">
                2. Add Key Features <HelpCircle size={18} className="text-muted-foreground" />
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {features.map(feat => (
                  <button
                    key={feat.id}
                    onClick={() => toggleFeature(feat.id)}
                    className={`p-6 rounded-2xl border-2 text-left transition-all flex justify-between items-center ${
                      selectedFeatures.includes(feat.id)
                      ? "border-primary bg-primary/5 text-primary" 
                      : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div>
                      <span className="font-bold block mb-1">{feat.name}</span>
                      <span className="text-xs uppercase tracking-widest opacity-60">+${feat.price}</span>
                    </div>
                    {selectedFeatures.includes(feat.id) && <Check size={20} />}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="sticky top-32 bg-secondary text-white p-10 rounded-[2rem] border border-white/10 shadow-2xl">
            <h4 className="font-headline font-bold text-xl mb-8 uppercase tracking-widest text-primary">Estimate Summary</h4>
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center text-sm">
                <span>Base Project</span>
                <span className="font-bold">${options.find(o => o.id === selectedType)?.basePrice}</span>
              </div>
              {selectedFeatures.map(fId => {
                const f = features.find(feat => feat.id === fId);
                return (
                  <div key={fId} className="flex justify-between items-center text-sm">
                    <span>{f?.name}</span>
                    <span className="font-bold text-primary">+${f?.price}</span>
                  </div>
                );
              })}
            </div>
            <div className="pt-6 border-t border-white/10 mb-8">
              <div className="flex justify-between items-end">
                <span className="text-white/60 text-sm">Estimated Total</span>
                <span className="text-4xl font-black font-headline">${calculateTotal().toLocaleString()}</span>
              </div>
            </div>
            <MagneticButton className="w-full justify-center">
              Request Full Quote <ArrowRight size={18} />
            </MagneticButton>
            <p className="mt-6 text-[10px] text-white/40 text-center uppercase tracking-widest leading-relaxed">
              * This is a preliminary estimate. Final costs may vary based on detailed requirements and scope.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
