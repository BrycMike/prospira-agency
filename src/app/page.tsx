
import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import StatCounter from "@/components/ui/StatCounter";
import MagneticButton from "@/components/ui/MagneticButton";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* Stats Section */}
      <section className="py-20 bg-background relative z-10 -mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-[#FDF6E3] border border-border rounded-[3rem] p-12 shadow-2xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
              <StatCounter value={300} label="Projects Delivered" suffix="+" />
              <StatCounter value={10} label="Years Experience" suffix="+" />
              <StatCounter value={20} label="Technologies" suffix="+" />
              <StatCounter value={100} label="Client Focused" suffix="%" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-12 bg-background overflow-hidden border-y border-border">
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2].map((group) => (
            <div key={group} className="flex gap-20 items-center justify-around min-w-full px-10">
              {["GOOGLE", "META", "VERCEL", "STRIPE", "LINEAR", "AWS", "MICROSOFT", "ADOBE"].map((brand) => (
                <span key={brand} className="text-3xl font-black font-headline text-muted-foreground/30 hover:text-primary transition-colors cursor-default select-none">
                  {brand}
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      <ServicesGrid />

      {/* Featured Project CTA */}
      <section className="py-24 px-6 bg-secondary text-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl md:text-7xl font-black font-headline tracking-tighter mb-8 leading-[0.9]">
              Ready to Build Something <br /> Exceptional?
            </h2>
            <p className="text-xl text-white/60 mb-12 max-w-lg">
              We help visionary companies design and develop premium digital products. Whether you're a startup or an enterprise, we bring your ideas to life.
            </p>
            <div className="flex gap-6">
              <Link href="/contact">
                <MagneticButton className="shadow-2xl shadow-primary/20">
                  Start Project <ArrowRight size={20} />
                </MagneticButton>
              </Link>
            </div>
          </div>
          <div className="relative group">
            <div className="absolute inset-0 bg-primary blur-[120px] opacity-20 group-hover:opacity-40 transition-opacity" />
            <div className="relative rounded-[2rem] overflow-hidden border border-white/10 aspect-video">
               <img 
                 src="https://picsum.photos/seed/cta-visual/1200/800" 
                 alt="Digital Product" 
                 className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
               />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
