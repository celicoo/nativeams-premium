"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { getCategoryBySlug, getProductsByCategory, categories } from "@/data/products";
import { ProductCard } from "@/components/ui/product-card";

export default function CategoryPage() {
  const params = useParams();
  const slug = params.slug as string;
  const category = getCategoryBySlug(slug);
  const products = getProductsByCategory(slug);

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 pt-36 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Category Not Found</h1>
          <Link href="/shop" className="text-emerald-600 hover:text-emerald-700">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-36">
      {/* Hero Banner */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold"
            >
              {category.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mt-4 text-lg text-gray-200 max-w-2xl mx-auto px-4"
            >
              {category.description}
            </motion.p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm mb-8">
          <Link href="/" className="text-gray-500 hover:text-emerald-600">
            Home
          </Link>
          <span className="text-gray-300">/</span>
          <Link href="/shop" className="text-gray-500 hover:text-emerald-600">
            Shop
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-900">{category.name}</span>
        </nav>

        {/* Back Button */}
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-emerald-600 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Shop
        </Link>

        {/* Other Categories */}
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              href={`/categorias/${cat.slug}`}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                cat.slug === slug
                  ? "bg-emerald-600 text-white"
                  : "bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 border border-gray-200"
              }`}
            >
              {cat.name}
            </Link>
          ))}
        </div>

        {/* Results Count */}
        <p className="text-gray-600 mb-6">
          Showing {products.length} products in {category.name}
        </p>

        {/* Products Grid */}
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No products in this category yet
            </h3>
            <p className="text-gray-500 mb-6">
              Check back soon for new arrivals!
            </p>
            <Link
              href="/shop"
              className="px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors inline-block"
            >
              Browse All Products
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
