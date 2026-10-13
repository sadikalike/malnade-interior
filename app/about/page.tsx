import Link from "next/link";
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
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}
        >
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-secondary font-semibold tracking-widest uppercase text-sm">
            Who We Are
          </span>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mt-3">
            About Malnad Interiors
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl mx-auto">
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
              style={{ backgroundImage: "url('/images/wooden-works.jpg')" }}
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
              finish. These are highly demanded and admired amongst the
              customers for their exquisite designing and high durability.
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

      {/* Mentor Section */}
      <section className="py-20 bg-light">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-secondary font-semibold tracking-widest uppercase text-sm">
            Our Mentor
          </span>
          <h2 className="text-4xl font-heading font-bold text-primary mt-2 mb-6">
            Mr. Shivakumar CM
          </h2>
          <p className="text-gray-600 leading-relaxed text-lg">
            Our mentor <span className="font-semibold">Mr. Shivakumar CM</span>{" "}
            has led the organization to a reputed position in the market with
            his vision to excel in this field. With our advanced production
            techniques, we meet the ever increasing needs of clients in this
            industry.
          </p>
        </div>
      </section>

      {/* Values */}
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
            {[
              {
                icon: Target,
                title: "Our Mission",
                desc: "To provide premium quality interior solutions that exceed customer expectations.",
              },
              {
                icon: Award,
                title: "Our Vision",
                desc: "To become the most trusted interior solutions provider in Karnataka.",
              },
              {
                icon: Users,
                title: "Our Team",
                desc: "Skilled professionals dedicated to delivering excellence in every project.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center p-8 bg-light rounded-2xl hover:shadow-xl transition"
              >
                <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <item.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-heading font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
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
                <CheckCircle className="text-secondary shrink-0 mt-1" size={24} />
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