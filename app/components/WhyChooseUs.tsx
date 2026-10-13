import {
  Users,
  Handshake,
  Smile,
  CreditCard,
  Clock,
  Award,
} from "lucide-react";

const iconMap: Record<string, any> = {
  Users,
  Handshake,
  Smile,
  CreditCard,
  Clock,
  Award,
};

type Item = {
  title: string;
  desc: string;
  icon: string;
};

export default function WhyChooseUs({ items }: { items: Item[] }) {
  return (
    <section className="py-20 bg-primary text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-14">
          <span className="text-secondary font-semibold tracking-widest uppercase text-sm">
            Our Strengths
          </span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold mt-2">
            Why Choose <span className="text-secondary">Us?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, i) => {
            const Icon = iconMap[item.icon] || Award;
            return (
              <div
                key={i}
                className="bg-white/5 p-8 rounded-2xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 border border-white/10"
              >
                <div className="w-14 h-14 bg-secondary rounded-xl flex items-center justify-center mb-4">
                  <Icon className="text-primary" size={28} />
                </div>
                <h3 className="text-xl font-heading font-bold mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}