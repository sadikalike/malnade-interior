import Hero from "./components/Hero";
import ProductCard from "./components/ProductCard";
import WhyChooseUs from "./components/WhyChooseUs";
import { products, whyChooseUs } from "./lib/data";
import Link from "next/link";
import { ArrowRight, Phone, Sparkles, ShieldCheck } from "lucide-react";

export default function Home() {
  return (
    <main>
      <Hero />

      {/* About Section - Modern with Background */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/about-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-white/95" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left - Text */}
            <div>
              <span className="inline-flex items-center gap-2 text-secondary font-semibold tracking-widest uppercase text-sm mb-4">
                <Sparkles size={16} /> About Us
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6 leading-tight">
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

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 mb-8">
                <div>
                  <div className="text-3xl font-heading font-bold text-secondary">
                    8+
                  </div>
                  <div className="text-sm text-gray-500">Years Experience</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-secondary">
                    500+
                  </div>
                  <div className="text-sm text-gray-500">Projects Done</div>
                </div>
                <div>
                  <div className="text-3xl font-heading font-bold text-secondary">
                    100%
                  </div>
                  <div className="text-sm text-gray-500">Satisfaction</div>
                </div>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-secondary hover:text-primary transition-all hover:gap-4"
              >
                Learn More <ArrowRight size={18} />
              </Link>
            </div>

            {/* Right - Image Collage */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div
                  className="h-64 rounded-2xl bg-cover bg-center shadow-xl"
                  style={{
                    backgroundImage: "url('/images/wooden-works.jpg')",
                  }}
                />
                <div
                  className="h-64 rounded-2xl bg-cover bg-center shadow-xl mt-8"
                  style={{
                    backgroundImage: "url('/images/toughened-glass.jpg')",
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary text-primary p-6 rounded-2xl shadow-2xl hidden md:flex items-center gap-3">
                <ShieldCheck size={32} />
                <div>
                  <div className="font-bold text-lg">Premium Quality</div>
                  <div className="text-sm">Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section - Modern with Background */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/products-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-primary/95" />
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="text-center mb-14">
            <span className="inline-block text-secondary font-semibold tracking-widest uppercase text-sm mb-3">
              What We Offer
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white">
              Our Products & Services
            </h2>
            <p className="text-white/70 mt-4 max-w-2xl mx-auto text-lg">
              Discover our wide range of premium interior solutions
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-secondary text-primary px-8 py-4 rounded-full font-bold hover:bg-white transition-all hover:gap-4 shadow-xl"
            >
              View All Products <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs items={whyChooseUs} />

      {/* CTA Section - Modern with Background */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/cta-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 to-secondary/80" />
        </div>

        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage:
                "radial-gradient(circle, #1B2A4A 1px, transparent 1px)",
              backgroundSize: "30px 30px",
            }}
          />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <span className="inline-block text-primary/70 font-semibold tracking-widest uppercase text-sm mb-4">
            Let's Work Together
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6 leading-tight">
            Ready to Transform <br />
            Your Space?
          </h2>
          <p className="text-primary/80 text-xl mb-10">
            Get a free consultation and quote today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8431454545"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-bold hover:bg-dark transition-all hover:scale-105 shadow-2xl"
            >
              <Phone size={20} /> Call 8431454545
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-dark hover:text-white transition-all hover:scale-105 shadow-2xl"
            >
              Get Free Quote <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}