"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Send, Loader2, CheckCircle, BrainCircuit } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import { getAIProjectAdvisorRecommendations } from "@/ai/flows/ai-project-advisor-flow";
import type { AIProjectAdvisorOutput } from "@/ai/flows/ai-project-advisor-flow";

export default function ContactPage() {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<AIProjectAdvisorOutput | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleAIAdvisor = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) return;

    setLoading(true);
    try {
      const results = await getAIProjectAdvisorRecommendations({ projectDescription: description });
      setRecommendations(results);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmitContact = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-32 pb-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black font-headline tracking-tighter mb-8 leading-[0.9]"
            >
              Let's Build <br /> Your Next <br /> Digital Product
            </motion.h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-12">
              Ready to take your project to the next level? Fill out the form or use our AI Project Advisor for immediate technical recommendations.
            </p>

            <div className="space-y-8">
              <div className="p-8 bg-secondary text-white rounded-[2rem] border border-white/10 relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <h3 className="text-2xl font-black font-headline mb-4 flex items-center gap-2 relative z-10">
                  <BrainCircuit className="text-primary" /> AI Project Advisor
                </h3>
                <p className="text-white/60 mb-6 relative z-10">
                  Input your project idea below to get instant AI-powered tech stack and roadmap recommendations.
                </p>
                <form onSubmit={handleAIAdvisor} className="space-y-4 relative z-10">
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="E.g. I want to build a real-time SaaS platform for real estate agents..."
                    className="w-full bg-white/5 border border-white/10 rounded-xl p-4 min-h-[120px] focus:outline-none focus:border-primary transition-colors text-white"
                  />
                  <button 
                    disabled={loading}
                    className="w-full py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-primary/90 transition-all disabled:opacity-50"
                  >
                    {loading ? <Loader2 className="animate-spin" /> : <><Sparkles size={18} /> Get AI Recommendations</>}
                  </button>
                </form>
              </div>
            </div>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              {recommendations ? (
                <motion.div
                  key="recommendations"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white border border-border p-10 rounded-[2rem] shadow-2xl h-full"
                >
                  <button onClick={() => setRecommendations(null)} className="text-primary font-bold mb-6 hover:underline">← Back to Contact Form</button>
                  <h3 className="text-3xl font-black font-headline mb-8">Your Technical Roadmap</h3>
                  
                  <div className="mb-10">
                    <h4 className="font-headline font-bold uppercase tracking-widest text-xs text-primary mb-4">Recommended Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {recommendations.techStackRecommendations.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-bold">{tech}</span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-headline font-bold uppercase tracking-widest text-xs text-primary mb-4">Development Phases</h4>
                    <div className="space-y-6">
                      {recommendations.developmentRoadmap.map((phase, i) => (
                        <div key={i} className="flex gap-4">
                          <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center text-xs font-bold shrink-0">
                            {i + 1}
                          </div>
                          <div>
                            <p className="font-bold text-lg">{phase.step}</p>
                            <p className="text-sm text-muted-foreground">{phase.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mt-12 pt-8 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4 italic">Happy with these suggestions? Let's discuss how Prospira can implement them for you.</p>
                    <MagneticButton className="w-full">Schedule a Deep Dive</MagneticButton>
                  </div>
                </motion.div>
              ) : submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-primary text-white p-12 rounded-[2rem] text-center flex flex-col items-center justify-center h-full"
                >
                  <CheckCircle size={80} className="mb-8" />
                  <h3 className="text-4xl font-black font-headline mb-4">Message Received!</h3>
                  <p className="text-white/80 max-w-xs mx-auto">
                    Thanks for reaching out. A Prospira technical lead will review your requirements and get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onSubmit={handleSubmitContact}
                  className="bg-[#FDF6E3] border border-border p-10 rounded-[2rem] shadow-xl space-y-6"
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest opacity-60">Your Name</label>
                      <input required type="text" className="w-full bg-white border border-border rounded-xl p-4 focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold uppercase tracking-widest opacity-60">Work Email</label>
                      <input required type="email" className="w-full bg-white border border-border rounded-xl p-4 focus:outline-none focus:border-primary transition-colors" placeholder="john@company.com" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest opacity-60">Company Name</label>
                    <input type="text" className="w-full bg-white border border-border rounded-xl p-4 focus:outline-none focus:border-primary transition-colors" placeholder="Acme Inc." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold uppercase tracking-widest opacity-60">Tell us about your project</label>
                    <textarea required className="w-full bg-white border border-border rounded-xl p-4 min-h-[150px] focus:outline-none focus:border-primary transition-colors" placeholder="Briefly describe your goals, timeline, and any specific needs..." />
                  </div>
                  <MagneticButton type="submit" className="w-full">
                    Send Inquiry <Send size={18} />
                  </MagneticButton>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
