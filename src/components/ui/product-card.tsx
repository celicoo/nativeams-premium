"use client";

import { cn } from "@/lib/utils";
import type { Product } from "@/data/products";
import { ShoppingCart, Heart, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { t } from "@/lib/translations";

interface ProductCardProps {
  product: Product;
  className?: string;
}

export function ProductCard({ product, className }: ProductCardProps) {
  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round((1 - product.price / product.originalPrice!) * 100)
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100",
        className
      )}
    >
      {/* Image Container */}
      <Link href={`/produto/${product.slug}`} className="block relative aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {hasDiscount && (
            <span className="bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
              -{discountPercent}%
            </span>
          )}
          {product.featured && (
            <span className="bg-[#8eb908] text-white text-xs font-bold px-2 py-1 rounded">
              {t.common.featured}
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button className="p-2 bg-white rounded-full shadow-md hover:bg-[#f4eee1] transition-colors">
            <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
          </button>
        </div>

        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-bold text-lg">{t.common.outOfStock}</span>
          </div>
        )}
      </Link>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        <Link
          href={`/categorias/${product.categorySlug}`}
          className="text-xs text-[#35ad55] font-medium hover:text-[#284400] uppercase tracking-wide"
        >
          {product.category}
        </Link>

        {/* Name */}
        <Link href={`/produto/${product.slug}`}>
          <h3 className="mt-1 font-semibold text-gray-900 group-hover:text-[#35ad55] transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
          <span className="text-sm font-medium text-gray-700">{product.rating}</span>
          <span className="text-sm text-gray-400">({product.reviews})</span>
        </div>

        {/* CBD/THC Info */}
        {(product.cbd || product.thc) && (
          <div className="flex gap-2 mt-2">
            {product.cbd && (
              <span className="text-xs bg-[#35ad55]/10 text-[#35ad55] px-2 py-0.5 rounded">
                CBD: {product.cbd}
              </span>
            )}
            {product.thc && (
              <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                THC: {product.thc}
              </span>
            )}
          </div>
        )}

        {/* Price & Add to Cart */}
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold text-gray-900">€{product.price.toFixed(2)}</span>
            {hasDiscount && (
              <span className="text-sm text-gray-400 line-through">
                €{product.originalPrice!.toFixed(2)}
              </span>
            )}
          </div>
          <button
            className="p-2 bg-[#35ad55] text-white rounded-full hover:bg-[#284400] transition-colors disabled:opacity-50"
            disabled={!product.inStock}
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
