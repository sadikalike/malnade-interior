import ContactForm from "../components/ContactForm";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "Contact Us | Malnad Interiors",
  description:
    "Get in touch with Malnad Interiors. Call 8431454545 for free quote on interior solutions.",
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "8431454545",
      href: "tel:8431454545",
    },
    {
      icon: Mail,
      title: "Email",
      value: "info@malnadinteriors.com",
      href: "mailto:info@malnadinteriors.com",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Karnataka, India",
      href: "#",
    },
    {
      icon: Clock,
      title: "Working Hours",
      value: "Mon - Sat: 9AM - 7PM",
      href: "#",
    },
  ];

  return (
    <main className="pt-24">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/electrician.jpg')" }}
        >
          <div className="absolute inset-0 bg-primary/90" />
        </div>
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-secondary font-semibold tracking-widest uppercase text-sm">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mt-3">
            Contact Us
          </h1>
          <p className="text-white/80 text-lg mt-4 max-w-2xl mx-auto">
            We'd love to hear from you. Get a free quote today!
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, i) => (
              <a
                key={i}
                href={info.href}
                className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition text-center group"
              >
                <div className="w-14 h-14 bg-primary group-hover:bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 transition">
                  <info.icon className="text-white group-hover:text-primary transition" size={24} />
                </div>
                <h3 className="font-heading font-bold text-primary mb-1">
                  {info.title}
                </h3>
                <p className="text-gray-600 text-sm">{info.value}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start">
          <div>
            <span className="text-secondary font-semibold tracking-widest uppercase text-sm">
              Send Message
            </span>
            <h2 className="text-4xl font-heading font-bold text-primary mt-2 mb-6">
              Let's Discuss Your Project
            </h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Have a project in mind? Fill out the form and our team will get
              back to you within 24 hours. We provide free consultation and
              quotes for all our services.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                  <Phone className="text-primary" size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Call Us</h4>
                  <a
                    href="tel:8431454545"
                    className="text-gray-600 hover:text-secondary transition"
                  >
                    8431454545
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                  <Mail className="text-primary" size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Email Us</h4>
                  <a
                    href="mailto:info@malnadinteriors.com"
                    className="text-gray-600 hover:text-secondary transition"
                  >
                    info@malnadinteriors.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                  <MapPin className="text-primary" size={22} />
                </div>
                <div>
                  <h4 className="font-bold text-primary mb-1">Visit Us</h4>
                  <p className="text-gray-600">Karnataka, India</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-light p-8 rounded-3xl shadow-lg">
            <h3 className="text-2xl font-heading font-bold text-primary mb-6">
              Send Us a Message
            </h3>
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}