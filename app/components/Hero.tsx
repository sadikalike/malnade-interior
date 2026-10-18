import Link from "next/link";
import { ArrowRight, Phone, Sparkles, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-primary">
      {/* ===== BACKGROUND OVERLAYS (No Image) ===== */}
      {/* Dark Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary via-dark to-primary" />

      {/* Premium Dot Pattern */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle, #C9A227 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Decorative Top Curved Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent opacity-50" />

      {/* ===== ANIMATED GLOWS ===== */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 md:w-96 md:h-96 bg-secondary/15 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 md:w-96 md:h-96 bg-accent/15 rounded-full blur-[100px] animate-pulse" />

      {/* ===== MAIN CONTENT ===== */}
      <div className="relative z-10 px-4 sm:px-6 max-w-5xl pt-28 pb-20 md:pt-24 md:pb-0">
        
        {/* Top Floating Badge */}
        <div className="flex justify-center mb-6 md:mb-8">
          <span className="inline-flex items-center gap-2 bg-white/5 backdrop-blur-md text-secondary font-semibold tracking-[0.2em] md:tracking-[0.3em] uppercase text-[10px] md:text-xs px-4 md:px-6 py-2 md:py-2.5 rounded-full border border-secondary/30 shadow-[0_0_20px_rgba(201,162,39,0.2)]">
            <Sparkles size={14} className="animate-pulse" />
            Since 2016
            <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-ping" />
          </span>
        </div>

        {/* Huge Premium Heading */}
        <h1 className="text-[2.5rem] leading-[1.1] sm:text-6xl md:text-7xl lg:text-[6rem] font-heading font-bold text-white mb-6 md:mb-8 drop-shadow-2xl">
          FEEL BETTER <br />
          <span className="relative inline-block mt-2">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary via-yellow-300 to-secondary drop-shadow-2xl">
              WORK BETTER
            </span>
            {/* Underline Decoration */}
            <svg className="absolute -bottom-3 md:-bottom-4 left-0 w-full h-2 md:h-3 text-secondary/70" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M0 5 Q 50 10 100 5" fill="transparent" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </span>
        </h1>

        {/* Modern Subtext */}
        <p className="text-white/80 text-sm sm:text-base md:text-xl max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed font-light drop-shadow-lg">
          Premium Interior Solutions — <br className="sm:hidden" />
          <span className="inline-flex flex-wrap justify-center gap-x-2 gap-y-1 mt-2 font-medium">
            <span className="text-secondary">Office Partition</span> <span className="text-white/50">•</span>
            <span className="text-secondary">UPVC & Aluminium Windows</span> <span className="text-white/50">•</span>
            <span className="text-secondary">False Ceilings</span>
          </span>
        </p>

        {/* Modern Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 px-4 sm:px-0">
          <Link
            href="/products"
            className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary text-primary px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-sm md:text-base overflow-hidden transition-all duration-300 shadow-[0_10px_40px_rgba(201,162,39,0.3)] hover:shadow-[0_10px_50px_rgba(201,162,39,0.5)] hover:scale-105"
          >
            {/* Button Shine Effect */}
            <span className="absolute inset-0 w-full h-full -mt-10 -ml-10 bg-white/20 rotate-45 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            <span className="relative z-10 flex items-center gap-2">
              Explore Products
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>

          <Link
            href="/contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/5 backdrop-blur-md border border-white/20 text-white px-8 md:px-10 py-4 md:py-5 rounded-full font-bold text-sm md:text-base hover:bg-white hover:text-primary hover:border-white transition-all duration-300 shadow-xl hover:scale-105"
          >
            <Phone size={18} className="group-hover:rotate-12 transition-transform duration-300" />
            Get Free Quote
          </Link>
        </div>

        {/* Floating Stats Glass Card */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10 max-w-3xl mx-auto bg-white/5 backdrop-blur-md border border-white/10 p-4 md:p-6 rounded-2xl md:rounded-3xl shadow-2xl">
          {[
            { num: "8+", label: "Years Experience" },
            { num: "500+", label: "Projects Done" },
            { num: "100%", label: "Satisfaction" },
          ].map((stat, i) => (
            <div key={i} className="flex-1 text-center min-w-[80px] md:min-w-0 border-r border-white/10 last:border-0 px-2 md:px-6">
              <div className="text-2xl md:text-4xl font-heading font-bold text-secondary drop-shadow-lg flex items-center justify-center gap-1">
                {stat.num}
                {i === 2 && <ShieldCheck size={18} className="text-white/50" />}
              </div>
              <div className="text-[9px] md:text-xs text-white/60 mt-1 uppercase tracking-widest">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== SCROLL INDICATOR ===== */}
      <div className="hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex-col items-center gap-2 group cursor-pointer">
        <span className="text-white/40 text-[10px] uppercase tracking-widest group-hover:text-secondary transition-colors">
          Scroll to explore
        </span>
        <div className="w-7 h-12 border-2 border-white/20 rounded-full flex justify-center pt-2 group-hover:border-secondary/50 transition-colors">
          <div className="w-1.5 h-2.5 bg-secondary rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}