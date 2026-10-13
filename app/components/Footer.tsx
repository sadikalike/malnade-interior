import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <h3 className="text-2xl font-heading font-bold mb-4">
            MALNAD <span className="text-secondary">INTERIORS</span>
          </h3>
          <p className="text-gray-400 leading-relaxed mb-6">
            Premium interior solutions since 2016. Feel Better, Work Better.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </a>
            <a
              href="https://wa.me/918431454545"
              aria-label="WhatsApp"
              className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-secondary hover:text-primary transition"
            >
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-5 text-secondary">
            Quick Links
          </h4>
          <ul className="space-y-3 text-gray-400">
            <li>
              <Link href="/" className="hover:text-secondary transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-secondary transition">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/products" className="hover:text-secondary transition">
                Products
              </Link>
            </li>
            <li>
              <Link href="/services" className="hover:text-secondary transition">
                Services
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-secondary transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-5 text-secondary">
            Our Services
          </h4>
          <ul className="space-y-3 text-gray-400">
            <li>UPVC Windows</li>
            <li>Aluminium Windows</li>
            <li>MS & SS Fabrication</li>
            <li>Toughened Glass Works</li>
            <li>ACP Cladding</li>
            <li>False Ceiling</li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-5 text-secondary">
            Contact Us
          </h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex items-start gap-3">
              <Phone size={18} className="text-secondary mt-1 shrink-0" />
              <a href="tel:8431454545" className="hover:text-secondary">
                8431454545
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={18} className="text-secondary mt-1 shrink-0" />
              <a
                href="mailto:info@malnadinteriors.com"
                className="hover:text-secondary"
              >
                info@malnadinteriors.com
              </a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-secondary mt-1 shrink-0" />
              <span>Karnataka, India</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 mt-12 pt-6 border-t border-gray-800 max-w-7xl mx-auto px-6">
        © 2024 Malnad Interiors. All Rights Reserved.
      </div>
    </footer>
  );
}