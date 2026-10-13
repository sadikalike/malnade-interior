import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/95" />
      </div>

      <div className="relative z-10 px-6 animate-fade-up max-w-5xl">
        <span className="inline-block text-secondary font-semibold tracking-[0.3em] uppercase mb-6 text-sm">
          Since 2016
        </span>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold text-white mb-6 leading-tight">
          FEEL BETTER <br />
          <span className="text-secondary">WORK BETTER</span>
        </h1>
        <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          Premium Interior Solutions — Office Partitions, Aluminium Windows,
          False Ceilings & More.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/products"
            className="bg-secondary text-primary px-8 py-4 rounded-full font-bold hover:bg-white transition-all hover:scale-105 shadow-xl"
          >
            Explore Products
          </Link>
          <Link
            href="/contact"
            className="border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-primary transition-all hover:scale-105"
          >
            Get Free Quote
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-secondary rounded-full" />
        </div>
      </div>
    </section>
  );
}