import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

type Product = {
  id: number;
  slug: string;
  title: string;
  shortDesc: string;
  image: string;
  category: string;
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.slug}`}
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 block"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute top-4 left-4 bg-secondary text-primary text-xs font-bold px-3 py-1 rounded-full shadow-lg">
          {product.category}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 bg-white">
        <h3 className="text-xl font-heading font-bold text-primary mb-3 group-hover:text-secondary transition-colors line-clamp-2">
          {product.title}
        </h3>
        <p className="text-gray-600 text-sm mb-5 line-clamp-2">
          {product.shortDesc}
        </p>
        <span className="inline-flex items-center gap-2 text-secondary font-semibold group-hover:gap-4 transition-all">
          Learn More <ArrowRight size={16} />
        </span>
      </div>
    </Link>
  );
}