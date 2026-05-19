"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { getAllProducts } from "../(api)/api";
import ProductCard from "@/components/ProductCard";
import ProductGrid from "@/components/ProductGrid";
import PageHeader from "@/components/Header";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    async function load() {
      const data = await getAllProducts();
      setProducts(data);
    }
    load();
  }, []);

  const categories = [...new Set(products.map((p) => p.category))];

  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;
  return (
    <div className="min-h-screen bg-[#fafafa] text-slate-900 p-8 max-w-6xl mx-auto">
      <PageHeader
        title="Our Products"
        subtitle="Explore our curated collection of goods."
      />

      {/* Categories */}
      <div className="flex flex-wrap gap-2 mb-6">
        <Link key={category} href={"/products"}>
          <Button variant="outline">All</Button>
        </Link>
        {categories.map((category) => (
          <Link
            key={category}
            href={`/products?category=${encodeURIComponent(category)}`}
          >
            <Button variant="outline">{category}</Button>
          </Link>
        ))}
      </div>

      {/* Products */}
      <ProductGrid>
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ProductGrid>
    </div>
  );
}
