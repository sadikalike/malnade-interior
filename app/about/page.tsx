import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, Users, Award, Target } from "lucide-react";
import { whyChooseUs } from "../lib/data";

export const metadata = {
  title: "About Us | Malnad Interiors",
  description:
    "Learn about Malnad Interiors - Leading Manufacturer of Office Partition, Aluminium Windows, and False Ceiling Services since 2016.",
};

export default function AboutPage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden bg-primary">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-secondary font-semibold tracking-widest uppercase text-sm">
            Who We Are
          </span>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mt-3">
            About Malnad Interiors
          </h1>
          <p className="text-white/70 text-lg mt-4 max-w-2xl mx-auto">
            Crafting premium interior solutions since 2016
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: "url('/wooden.png')" }}
            />
          </div>
          <div>
            <span className="text-secondary font-semibold tracking-widest uppercase text-sm">
              Our Story
            </span>
            <h2 className="text-4xl font-heading font-bold text-primary mt-2 mb-6">
              Leading Interior Solutions Provider
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Incepted in the year 2016, Malnad Interiors is a leading
              Manufacturer and Service Provider of Office Partition And Cabins,
              Aluminum Window and Aluminium Door, False Ceiling Services etc.
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              Our products are manufactured using high grade and safe raw
              products, which is durable in nature as well as has the premium
              finish.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              We make use of the finest quality raw material that is well tested
              and verified on several quality parameters as per international
              standards.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-secondary hover:text-primary transition"
            >
              View Products <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* ===== FOUNDER SECTION (With Image) ===== */}
      <section className="py-20 bg-light">
        <div className="max-w-5xl mx-auto px-6">
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
                  alt="CM Shivakumar - Founder"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 40vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>

              {/* Founder Details */}
              <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                <span className="inline-block bg-secondary/10 text-secondary px-4 py-1 rounded-full font-semibold tracking-wider uppercase text-xs mb-4 w-fit">
                  Founder & Mentor
                </span>
                <h3 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                  CM SHIVAKUMAR
                </h3>
                <div className="w-20 h-1 bg-secondary mb-6" />
                <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                  Our founder{" "}
                  <span className="font-semibold text-primary">
                    Mr. CM SHIVAKUMAR
                  </span>{" "}
                  has led the organization to a reputed position in the market
                  with his vision to excel in this field.
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  With our advanced production techniques, we meet the ever
                  increasing needs of clients in this industry. His dedication
                  and commitment to quality has made Malnad Interiors a trusted
                  name in interior solutions.
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

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-secondary font-semibold tracking-widest uppercase text-sm">
              Our Values
            </span>
            <h2 className="text-4xl font-heading font-bold text-primary mt-2">
              What Drives Us
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-light rounded-2xl hover:shadow-xl transition">
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Target className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To provide premium quality interior solutions that exceed
                customer expectations.
              </p>
            </div>

            <div className="text-center p-8 bg-light rounded-2xl hover:shadow-xl transition">
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To become the most trusted interior solutions provider in
                Karnataka.
              </p>
            </div>

            <div className="text-center p-8 bg-light rounded-2xl hover:shadow-xl transition">
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary" size={32} />
              </div>
              <h3 className="text-xl font-heading font-bold text-primary mb-3">
                Our Team
              </h3>
              <p className="text-gray-600">
                Skilled professionals dedicated to delivering excellence in
                every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-secondary font-semibold tracking-widest uppercase text-sm">
              Our Strengths
            </span>
            <h2 className="text-4xl font-heading font-bold mt-2">
              Why Choose <span className="text-secondary">Us?</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyChooseUs.map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 bg-white/5 p-6 rounded-2xl hover:bg-white/10 transition"
              >
                <CheckCircle
                  className="text-secondary shrink-0 mt-1"
                  size={24}
                />
                <div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}