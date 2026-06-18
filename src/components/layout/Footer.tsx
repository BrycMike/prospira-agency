
import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#233038] text-white py-20 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="font-headline font-black text-3xl tracking-tighter mb-6 block">
              PROSPIRA
            </Link>
            <p className="text-white/60 mb-8 max-w-xs">
              A premium digital agency specializing in high-performance websites, applications, and future-forward digital products.
            </p>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-6">Services</h4>
            <ul className="space-y-4">
              {["Web Development", "Mobile Applications", "UI/UX Design", "SaaS Platforms", "Game Development", "AI Solutions"].map(item => (
                <li key={item}>
                  <Link href="/services" className="text-white/60 hover:text-primary transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-6">Agency</h4>
            <ul className="space-y-4">
              {["Our Work", "About Us", "Our Process", "Careers", "Contact"].map(item => (
                <li key={item}>
                  <Link href="#" className="text-white/60 hover:text-primary transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-headline font-bold text-lg mb-6">Newsletter</h4>
            <p className="text-white/60 mb-4">Stay updated with our latest insights and projects.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 flex-grow focus:outline-none focus:border-primary transition-colors"
              />
              <button className="bg-primary text-white p-2 rounded-lg hover:bg-primary/90 transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm">
          <p>© 2016 Team Prospira. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
