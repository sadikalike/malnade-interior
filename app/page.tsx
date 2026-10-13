import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import WhyChooseUs from "./components/WhyChooseUs";
import { products, whyChooseUs } from "./lib/data";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  Phone,
  Sparkles,
  ShieldCheck,
  Star,
  Quote,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* ===== HERO SECTION ===== */}
      <Hero />

      {/* ===== ABOUT SECTION ===== */}
      <section className="relative py-24 md:py-32 bg-white">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-4 py-2 rounded-full font-semibold tracking-wider uppercase text-xs mb-6">
                <Sparkles size={14} /> About Us
              </span>
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mb-6 leading-tight">
                Crafting Spaces <br />
                <span className="text-secondary">Since 2016</span>
              </h2>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                Incepted in 2016, Malnad Interiors is a leading Manufacturer and
                Service Provider of Office Partition, Aluminum Windows, Doors,
                False Ceiling Services and more.
              </p>
              <p className="text-gray-600 leading-relaxed text-lg mb-8">
                Our mentor{" "}
                <span className="font-semibold text-primary">
                  Mr. Shivakumar CM
                </span>{" "}
                has led the organization to a reputed position with his vision
                to excel in this field.
              </p>

              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="bg-secondary/10 p-4 rounded-2xl text-center">
                  <div className="text-3xl md:text-4xl font-heading font-bold text-secondary">
                    8+
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Years</div>
                </div>
                <div className="bg-secondary/10 p-4 rounded-2xl text-center">
                  <div className="text-3xl md:text-4xl font-heading font-bold text-secondary">
                    500+
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Projects</div>
                </div>
                <div className="bg-secondary/10 p-4 rounded-2xl text-center">
                  <div className="text-3xl md:text-4xl font-heading font-bold text-secondary">
                    100%
                  </div>
                  <div className="text-xs text-gray-500 mt-1">Satisfaction</div>
                </div>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-secondary hover:text-primary transition-all hover:gap-4 shadow-xl"
              >
                Learn More <ArrowRight size={18} />
              </Link>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="h-72 rounded-3xl bg-cover bg-center shadow-2xl"
                  style={{ backgroundImage: "url('/wooden.png')" }}
                />
                <div
                  className="h-72 rounded-3xl bg-cover bg-center shadow-2xl mt-12"
                  style={{ backgroundImage: "url('/toughened.png')" }}
                />
              </div>
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-secondary text-primary p-5 rounded-2xl shadow-2xl flex items-center gap-3 whitespace-nowrap">
                <ShieldCheck size={28} />
                <div>
                  <div className="font-bold text-base leading-tight">
                    Premium Quality
                  </div>
                  <div className="text-xs">Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOUNDER SECTION ===== */}
      <section className="py-20 bg-light">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-secondary font-semibold tracking-widest uppercase text-sm">
              Our Founder
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary mt-2">
              Meet Our Visionary Leader
            </h2>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
            <div className="grid md:grid-cols-5 gap-0">
              {/* Founder Image */}
              <div className="md:col-span-2 relative h-96 md:h-auto bg-gradient-to-br from-primary to-dark">
                <Image
                  src="/cmfounder.png"
                  alt="CM Ramakrishna - Founder"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>

              {/* Founder Details */}
              <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-block bg-secondary/10 text-secondary px-4 py-1 rounded-full font-semibold tracking-wider uppercase text-xs mb-4 w-fit">
                  Founder & Mentor
                </span>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                  CM Ramakrishna
                </h3>
                <div className="w-20 h-1 bg-secondary mb-6" />
                <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                  Our founder{" "}
                  <span className="font-semibold text-primary">
                    Mr. CM Ramakrishna
                  </span>{" "}
                  has led the organization to a reputed position with his vision
                  to excel in this field.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  With our advanced production techniques, we meet the ever
                  increasing needs of clients in this industry.
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  <div>
                    <div className="text-2xl font-heading font-bold text-secondary">
                      8+
                    </div>
                    <div className="text-xs text-gray-500">Years Leading</div>
                  </div>
                  <div className="w-px h-12 bg-gray-200" />
                  <div>
                    <div className="text-2xl font-heading font-bold text-secondary">
                      500+
                    </div>
                    <div className="text-xs text-gray-500">Projects</div>
                  </div>
                  <div className="w-px h-12 bg-gray-200" />
                  <div>
                    <div className="text-2xl font-heading font-bold text-secondary">
                      100%
                    </div>
                    <div className="text-xs text-gray-500">Commitment</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS SECTION ===== */}
      <section className="relative py-24 md:py-32 bg-light">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <span className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full font-semibold tracking-wider uppercase text-xs mb-4">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-4">
              Our Products & Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Discover our wide range of premium interior solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-secondary hover:text-primary transition-all hover:gap-4 shadow-2xl"
            >
              View All Products <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <WhyChooseUs items={whyChooseUs} />

      {/* ===== TESTIMONIAL ===== */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="w-20 h-20 bg-secondary rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl">
            <Quote className="text-primary" size={36} />
          </div>
          <h3 className="text-2xl md:text-4xl font-heading font-bold text-primary mb-6 leading-relaxed">
            "Quality is never an accident; it is always the result of
            intelligent effort."
          </h3>
          <div className="flex justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="text-secondary fill-secondary" size={24} />
            ))}
          </div>
          <p className="text-gray-500 font-semibold">
            — Malnad Interiors Philosophy
          </p>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="py-24 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="inline-block bg-secondary/10 text-secondary px-4 py-2 rounded-full font-semibold tracking-wider uppercase text-xs mb-4">
              How We Work
            </span>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-primary">
              Our Simple Process
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Consultation", desc: "Discuss your requirements" },
              { step: "02", title: "Design", desc: "Get custom designs & previews" },
              { step: "03", title: "Execution", desc: "Professional installation" },
              { step: "04", title: "Handover", desc: "Quality check & handover" },
            ].map((item, i) => (
              <div
                key={i}
                className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 group"
              >
                <div className="text-5xl font-heading font-bold text-secondary/20 absolute top-6 right-6 group-hover:text-secondary/40 transition">
                  {item.step}
                </div>
                <div className="w-14 h-14 bg-primary group-hover:bg-secondary rounded-2xl flex items-center justify-center mb-5 transition">
                  <CheckCircle2
                    className="text-white group-hover:text-primary transition"
                    size={26}
                  />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="relative py-24 bg-primary overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="inline-flex items-center gap-2 bg-secondary/20 text-secondary px-4 py-2 rounded-full font-semibold tracking-wider uppercase text-xs mb-6">
            <TrendingUp size={14} /> Let's Work Together
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 leading-tight">
            Ready to Transform <br />
            <span className="text-secondary">Your Space?</span>
          </h2>
          <p className="text-white/80 text-xl mb-10 max-w-2xl mx-auto">
            Get a free consultation and quote today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8431454545"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-primary px-8 py-4 rounded-full font-bold hover:bg-white transition-all hover:scale-105 shadow-2xl"
            >
              <Phone size={20} /> Call 8431454545
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full font-bold hover:bg-white hover:text-primary transition-all hover:scale-105"
            >
              Get Free Quote <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}