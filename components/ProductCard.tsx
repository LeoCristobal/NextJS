import Link from "next/link";
import Image from "next/image";

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  rating?: {
    rate: number;
  };
};

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.id}`}
      className="group flex flex-col bg-white border border-slate-100 rounded-2xl p-4 shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-200"
    >
      {/* Image */}
      <div className="relative w-full aspect-square bg-white rounded-xl mb-4 overflow-hidden flex items-center justify-center p-4">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 justify-between">
        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider mb-1">
          {product.category}
        </span>

        <h2 className="text-sm font-bold text-slate-800 line-clamp-2 group-hover:text-blue-600">
          {product.title}
        </h2>

        <div className="mt-4 pt-3 border-t border-slate-50 flex justify-between">
          <span className="font-black">${product.price.toFixed(2)}</span>

          <div className="text-xs text-amber-500 font-semibold">
            ⭐ {product.rating?.rate || "0.0"}
          </div>
        </div>
      </div>
    </Link>
  );
}
