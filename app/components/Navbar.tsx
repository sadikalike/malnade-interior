"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

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
          : "bg-primary/90 backdrop-blur-sm py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* ===== LOGO ===== */}
        <Link
          href="/"
          className="group flex items-center gap-3"
          aria-label="Malnad Interiors Home"
        >
          {/* Logo Icon */}
          <div className="w-11 h-11 md:w-12 md:h-12 bg-secondary rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:shadow-secondary/40 transition-all duration-300">
            <span className="font-heading font-bold text-primary text-xl md:text-2xl">
              M
            </span>
          </div>

          {/* Brand Text */}
          <div className="flex flex-col leading-none">
            <span className="text-lg md:text-xl font-heading font-bold text-white tracking-wide group-hover:text-secondary transition-colors duration-300">
              MALNAD
            </span>
            <span className="text-[10px] md:text-xs font-heading font-semibold text-secondary tracking-[0.3em] mt-0.5">
              INTERIORS
            </span>
          </div>
        </Link>

        {/* ===== DESKTOP MENU ===== */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`relative px-5 py-2 rounded-lg font-medium transition-all duration-200 group ${
                  isActive
                    ? "text-secondary"
                    : "text-white hover:text-secondary"
                }`}
              >
                {link.name}
                {/* Active Dot */}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 bg-secondary rounded-full transition-all duration-300 ${
                    isActive ? "opacity-100" : "opacity-0 group-hover:opacity-60"
                  }`}
                />
              </Link>
            );
          })}
        </div>

        {/* ===== DESKTOP CTA ===== */}
        <div className="hidden lg:flex items-center gap-3">
          {/* WhatsApp Icon */}
          <a
            href="https://wa.me/918431454545"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 bg-green-500/15 border border-green-500/30 rounded-full flex items-center justify-center text-green-400 hover:bg-green-500 hover:text-white hover:border-green-500 transition-all duration-300"
            aria-label="WhatsApp"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>

          {/* Call Button */}
          <a
            href="tel:8431454545"
            className="flex items-center gap-2 bg-secondary text-primary px-5 py-2.5 rounded-full font-semibold hover:bg-white hover:shadow-lg hover:shadow-secondary/40 transition-all duration-300"
          >
            <Phone size={16} />
            <span>8431454545</span>
          </a>
        </div>

        {/* ===== MOBILE MENU BUTTON ===== */}
        <button
          className="lg:hidden w-10 h-10 flex items-center justify-center bg-secondary rounded-lg text-primary hover:bg-white transition-colors duration-200"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ===== MOBILE MENU DRAWER ===== */}
      {open && (
        <div className="lg:hidden bg-primary/98 backdrop-blur-lg border-t border-white/10 mt-3 pt-4 pb-6 px-6">
          <div className="flex flex-col gap-1">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-4 py-3 rounded-lg font-medium transition-colors duration-200 ${
                    isActive
                      ? "bg-secondary text-primary font-bold"
                      : "text-white hover:bg-white/10"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              );
            })}

            <a
              href="tel:8431454545"
              className="mt-3 flex items-center justify-center gap-2 w-full bg-secondary text-primary py-3 rounded-lg font-bold hover:bg-white transition-colors"
            >
              <Phone size={18} /> Call 8431454545
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}