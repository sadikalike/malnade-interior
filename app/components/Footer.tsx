import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-xl font-heading font-bold mb-3">
            MALNAD <span className="text-secondary">INTERIORS</span>
          </h3>
          <p className="text-gray-400 text-sm">
            Premium interior solutions since 2016.
          </p>
        </div>

        <div>
          <h4 className="text-secondary font-semibold mb-3">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link href="/" className="hover:text-secondary">Home</Link></li>
            <li><Link href="/about" className="hover:text-secondary">About</Link></li>
            <li><Link href="/products" className="hover:text-secondary">Products</Link></li>
            <li><Link href="/services" className="hover:text-secondary">Services</Link></li>
            <li><Link href="/contact" className="hover:text-secondary">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-secondary font-semibold mb-3">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <Phone size={16} /> 8431454545
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> info@malnadinteriors.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Karnataka, India
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center text-gray-500 text-sm mt-8 pt-6 border-t border-gray-800">
        © 2024 Malnad Interiors. All Rights Reserved.
      </div>
    </footer>
  );
}