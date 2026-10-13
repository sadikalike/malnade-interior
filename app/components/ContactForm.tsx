"use client";
import { useState } from "react";
import { Send, CheckCircle } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // WhatsApp ಗೆ Message ಕಳುಹಿಸಿ
    const text = `*New Enquiry from Website*%0A%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Email:* ${form.email}%0A*Service:* ${form.service}%0A*Message:* ${form.message}`;
    window.open(`https://wa.me/918431454545?text=${text}`, "_blank");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  if (submitted) {
    return (
      <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-10 text-center">
        <CheckCircle className="text-green-500 mx-auto mb-4" size={56} />
        <h3 className="text-2xl font-heading font-bold text-green-700 mb-2">
          Thank You!
        </h3>
        <p className="text-green-600">
          Your enquiry has been sent. We will contact you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <input
          type="text"
          placeholder="Your Name *"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:border-secondary outline-none transition"
        />
        <input
          type="tel"
          placeholder="Phone Number *"
          required
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
          className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:border-secondary outline-none transition"
        />
      </div>

      <input
        type="email"
        placeholder="Email Address"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:border-secondary outline-none transition"
      />

      <select
        required
        value={form.service}
        onChange={(e) => setForm({ ...form, service: e.target.value })}
        className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:border-secondary outline-none transition bg-white"
      >
        <option value="">Select Service *</option>
        <option>UPVC Windows</option>
        <option>Aluminium Windows</option>
        <option>MS & SS Fabrication</option>
        <option>Wooden & Aluminium Interior</option>
        <option>Toughened Glass Works</option>
        <option>ACP Cladding</option>
        <option>POP & PVC Works</option>
        <option>Electric & Painting Works</option>
      </select>

      <textarea
        placeholder="Your Message *"
        required
        rows={5}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        className="w-full px-5 py-3 rounded-xl border-2 border-gray-200 focus:border-secondary outline-none transition resize-none"
      />

      <button
        type="submit"
        className="w-full bg-primary text-white py-4 rounded-xl font-bold hover:bg-secondary hover:text-primary transition flex items-center justify-center gap-2"
      >
        <Send size={20} /> Send Enquiry
      </button>
    </form>
  );
}