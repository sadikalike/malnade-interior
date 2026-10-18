import Link from "next/link";
import { Phone, Mail, MapPin, Globe, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        
        {/* ===== BRAND SECTION ===== */}
        <div>
          <h3 className="text-2xl font-heading font-bold mb-4">
            MALNAD <span className="text-secondary">INTERIORS</span>
          </h3>
          <p className="text-gray-400 leading-relaxed mb-6 text-sm">
            Premium interior solutions since 2016. Feel Better, Work Better.
            Sahakar Nagar.
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

        {/* ===== QUICK LINKS ===== */}
        <div>
          <h4 className="text-lg font-semibold mb-5 text-secondary">
            Quick Links
          </h4>
          <ul className="space-y-3 text-gray-400 text-sm">
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

        {/* ===== OUR SERVICES ===== */}
        <div>
          <h4 className="text-lg font-semibold mb-5 text-secondary">
            Our Services
          </h4>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li className="flex items-start gap-2">
              <span className="text-secondary mt-0.5">›</span> UPVC windows, partition & doors
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary mt-0.5">›</span> Aluminium windows, partition & doors
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary mt-0.5">›</span> Domal Aluminium windows
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary mt-0.5">›</span> MS & SS Fabrications
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary mt-0.5">›</span> ACP Cladding & Glazing works
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary mt-0.5">›</span> Toughened glass works
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary mt-0.5">›</span> Pop ceiling & wall partition works
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary mt-0.5">›</span> Wooden & Aluminium interior works
            </li>
            <li className="flex items-start gap-2">
              <span className="text-secondary mt-0.5">›</span> Painting works - exterior & interior
            </li>
          </ul>
        </div>

        {/* ===== CONTACT US ===== */}
        <div>
          <h4 className="text-lg font-semibold mb-5 text-secondary">
            Contact Us
          </h4>
          <ul className="space-y-4 text-gray-400 text-sm">
            <li className="flex items-start gap-3">
              <Phone size={18} className="text-secondary mt-0.5 shrink-0" />
              <div className="flex flex-col">
                <a href="tel:8431454545" className="hover:text-secondary">
                  8431454545
                </a>
                <a href="tel:9481770267" className="hover:text-secondary">
                  9481770267
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Mail size={18} className="text-secondary mt-0.5 shrink-0" />
              <div className="flex flex-col break-all">
                <a href="mailto:info@malnadinteriors.co.in" className="hover:text-secondary">
                  info@malnadinteriors.co.in
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Globe size={18} className="text-secondary mt-0.5 shrink-0" />
              <div className="flex flex-col break-all">
                <a href="https://www.malnadinteriors.co.in" target="_blank" rel="noreferrer" className="hover:text-secondary">
                  www.malnadinteriors.co.in
                </a>
                <a href="https://www.malnadinteriors.com" target="_blank" rel="noreferrer" className="hover:text-secondary">
                  www.malnadinteriors.com
                </a>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-secondary mt-0.5 shrink-0" />
              <span>Sahakar Nagar, Karnataka, India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ===== BOTTOM BAR (With Growzy Digital Credits) ===== */}
      <div className="mt-12 pt-6 border-t border-gray-800 max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
        <p>
          © 2024 Malnad Interiors. All Rights Reserved.
        </p>
        <p className="flex items-center gap-1.5 flex-wrap justify-center">
          Designed & Developed by{" "}
          <a
            href="https://www.instagram.com/growzydigital.web?mdxt=N2k3OGNsMHc3bjFj"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary font-semibold hover:text-white transition"
          >
            Growzy Digital
          </a>
          <span className="text-gray-700 mx-1">|</span>
          <a
            href="https://wa.me/917510436350"
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary font-semibold hover:text-white transition flex items-center gap-1"
          >
            <MessageCircle size={14} /> 7510436350
          </a>
        </p>
      </div>
    </footer>
  );
}