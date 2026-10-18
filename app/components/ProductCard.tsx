import Link from "next/link";
import Image from "next/image";

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
      className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 block h-full"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden bg-light">
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
      <div className="p-6 bg-white flex flex-col justify-between" style={{ minHeight: '130px' }}>
        <h3 className="text-xl font-heading font-bold text-primary mb-2 group-hover:text-secondary transition-colors line-clamp-2">
          {product.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2">
          {product.shortDesc}
        </p>
      </div>
    </Link>
  );
}