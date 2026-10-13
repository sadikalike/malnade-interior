"use client";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

export default function WhatsAppButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <a
      href="https://wa.me/918431454545?text=Hi%20Malnad%20Interiors,%20I%20want%20a%20quote"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-50 animate-fade-in group"
      aria-label="WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-dark text-white px-3 py-1 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition">
        Chat with us
      </span>
    </a>
  );
}