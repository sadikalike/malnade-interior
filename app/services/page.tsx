import Image from "next/image";
import Link from "next/link";
import { services } from "../lib/data";
import { ArrowRight, Phone } from "lucide-react";

export const metadata = {
  title: "Services | Malnad Interiors",
  description:
    "Complete interior services - Office Workstations, Partition, Glass Canopy, ACP Cladding, False Ceiling and more.",
};

export default function ServicesPage() {
  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/false-ceiling.jpg')" }}
        >
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-secondary font-semibold tracking-widest uppercase text-sm">
            What We Do
          </span>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mt-3">
            Our Services
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl mx-auto">
            Complete interior solutions under one roof
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-heading font-bold text-primary mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-4">
            Need Any Service?
          </h2>
          <p className="text-white/70 text-lg mb-8">
            Contact us for a free consultation
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:8431454545"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-primary px-8 py-4 rounded-full font-bold hover:bg-white transition"
            >
              <Phone size={20} /> Call 8431454545
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-bold hover:bg-secondary transition"
            >
              Contact Us <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}