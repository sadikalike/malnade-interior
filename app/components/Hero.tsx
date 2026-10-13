import Link from "next/link";
import { ArrowRight, Phone, Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      {/* ===== BACKGROUND IMAGE ===== */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bgback.png')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/85 to-primary" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #C9A227 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* ===== DECORATIVE GLOWS ===== */}
      <div className="absolute top-1/4 -left-20 w-64 h-64 md:w-96 md:h-96 bg-secondary/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-20 w-64 h-64 md:w-96 md:h-96 bg-accent/20 rounded-full blur-3xl" />

      {/* ===== CONTENT ===== */}
      <div className="relative z-10 px-4 sm:px-6 max-w-5xl pt-24 pb-20 md:pt-20 md:pb-0">
        {/* Top Badge */}
        <div className="flex justify-center mb-4 md:mb-6">
          <span className="inline-flex items-center gap-1.5 md:gap-2 bg-secondary/10 backdrop-blur-sm text-secondary font-semibold tracking-[0.15em] md:tracking-[0.25em] uppercase text-[10px] md:text-sm px-3 md:px-5 py-1.5 md:py-2 rounded-full border border-secondary/30 shadow-lg">
            <Sparkles size={10} className="md:w-3.5 md:h-3.5" />
            Since 2016
            <span className="w-1 h-1 md:w-1.5 md:h-1.5 bg-secondary rounded-full animate-pulse" />
          </span>
        </div>

        {/* Main Heading */}
        <h1 className="text-[2rem] leading-[1.15] sm:text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-4 md:mb-6 drop-shadow-2xl">
          FEEL BETTER <br />
          <span className="relative inline-block">
            <span className="text-secondary drop-shadow-2xl">WORK BETTER</span>
            <span className="absolute -bottom-1 md:-bottom-2 left-0 right-0 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
          </span>
        </h1>

        {/* Subtext */}
        <p className="text-white/90 text-sm sm:text-base md:text-xl max-w-2xl mx-auto mb-6 md:mb-10 leading-relaxed font-light drop-shadow-lg px-2">
          Premium Interior Solutions —{" "}
          <span className="text-secondary font-medium">Office Partitions</span>,{" "}
          <span className="text-secondary font-medium">Aluminium Windows</span>,{" "}
          <span className="text-secondary font-medium">False Ceilings</span> & More.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center mb-8 md:mb-14 px-4 sm:px-0">
          <Link
            href="/products"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-secondary text-primary px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-white transition-all duration-300 shadow-2xl hover:shadow-secondary/40 hover:scale-105"
          >
            Explore Products
            <ArrowRight
              size={16}
              className="md:w-4.5 md:h-4.5 group-hover:translate-x-1 transition-transform duration-300"
            />
          </Link>

          <Link
            href="/contact"
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md border-2 border-white/40 text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-bold text-sm md:text-base hover:bg-white hover:text-primary hover:border-white transition-all duration-300 shadow-2xl hover:scale-105"
          >
            <Phone size={16} className="md:w-4.5 md:h-4.5" />
            Get Free Quote
          </Link>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-10">
          {[
            { num: "8+", label: "Years" },
            { num: "500+", label: "Projects" },
            { num: "100%", label: "Satisfaction" },
          ].map((stat, i) => (
            <div key={i} className="text-center min-w-[70px] md:min-w-0">
              <div className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-secondary drop-shadow-lg">
                {stat.num}
              </div>
              <div className="text-[10px] sm:text-xs md:text-sm text-white/70 mt-0.5 md:mt-1 tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===== SCROLL INDICATOR (Hidden on Mobile) ===== */}
      <div className="hidden md:flex absolute bottom-8 left-1/2 -translate-x-1/2 flex-col items-center gap-2 animate-bounce">
        <span className="text-white/50 text-xs uppercase tracking-widest">
          Scroll
        </span>
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-secondary rounded-full" />
        </div>
      </div>
    </section>
  );
}