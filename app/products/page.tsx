import ProductCard from "../components/ProductCard";
import { products } from "../lib/data";

export const metadata = {
  title: "Products | Malnad Interiors",
  description:
    "Explore our premium range of interior products - UPVC Windows, Aluminium Windows, Toughened Glass, ACP Cladding and more.",
};

export default function ProductsPage() {
  return (
    <main className="pt-24">
      <section className="relative py-24 overflow-hidden bg-primary">
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <span className="text-secondary font-semibold tracking-widest uppercase text-sm">
            Our Collection
          </span>
          <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mt-3">
            Products & Services
          </h1>
          <p className="text-white/70 text-lg mt-4 max-w-2xl mx-auto">
            Discover our wide range of premium interior solutions
          </p>
        </div>
      </section>

      <section className="py-20 bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}