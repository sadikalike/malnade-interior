"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-md shadow-lg py-3"
          : "bg-primary/80 backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-heading font-bold text-white">
          MALNAD <span className="text-secondary">INTERIORS</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white hover:text-secondary transition-colors font-medium"
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:8431454545"
            className="flex items-center gap-2 bg-secondary text-primary px-5 py-2 rounded-full font-semibold hover:bg-white transition"
          >
            <Phone size={16} /> 8431454545
          </a>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-primary px-6 pb-6 pt-4 flex flex-col gap-4 animate-fade-in">
          {links.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-white hover:text-secondary py-2 border-b border-white/10"
              onClick={() => setOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a
            href="tel:8431454545"
            className="text-secondary font-bold flex items-center gap-2"
          >
            <Phone size={18} /> 8431454545
          </a>
        </div>
      )}
    </nav>
  );
}