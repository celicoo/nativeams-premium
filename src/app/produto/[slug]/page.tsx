"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Star,
  Heart,
  ShoppingCart,
  Minus,
  Plus,
  Truck,
  Shield,
  ArrowLeft,
  Check,
} from "lucide-react";
import { getProductBySlug, products, getProductsByCategory } from "@/data/products";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/product-card";
import { cn } from "@/lib/utils";

export default function ProductPage() {
  const params = useParams();
  const slug = params.slug as string;
  const product = getProductBySlug(slug);

  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 pt-36 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/shop" className="text-emerald-600 hover:text-emerald-700">
            Back to Shop
          </Link>
        </div>
      </div>
    );
  }

  const hasDiscount = product.originalPrice && product.originalPrice > product.price;
  const discountPercent = hasDiscount
    ? Math.round((1 - product.price / product.originalPrice!) * 100)
    : 0;

  const relatedProducts = getProductsByCategory(product.categorySlug)
    .filter((p) => p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-gray-50 pt-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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
          <Link
            href={`/categorias/${product.categorySlug}`}
            className="text-gray-500 hover:text-emerald-600"
          >
            {product.category}
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        {/* Back Button */}
        <Link
          href="/shop"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-emerald-600 mb-8"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Shop
        </Link>

        {/* Product Details */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {/* Main Image */}
            <div className="relative aspect-square bg-white rounded-3xl overflow-hidden shadow-sm mb-4">
              <Image
                src={product.images[selectedImage] || product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
              {hasDiscount && (
                <span className="absolute top-4 left-4 bg-red-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                  -{discountPercent}%
                </span>
              )}
            </div>

            {/* Thumbnail Gallery */}
            {product.images.length > 1 && (
              <div className="flex gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={cn(
                      "relative w-20 h-20 rounded-xl overflow-hidden border-2 transition-colors",
                      selectedImage === index
                        ? "border-emerald-500"
                        : "border-gray-200 hover:border-gray-300"
                    )}
                  >
                    <Image src={image} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            {/* Category */}
            <Link
              href={`/categorias/${product.categorySlug}`}
              className="text-emerald-600 font-medium hover:text-emerald-700"
            >
              {product.category}
            </Link>

            {/* Name */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-3 mt-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={cn(
                      "w-5 h-5",
                      i < Math.floor(product.rating)
                        ? "fill-amber-400 text-amber-400"
                        : "text-gray-200"
                    )}
                  />
                ))}
              </div>
              <span className="font-medium text-gray-900">{product.rating}</span>
              <span className="text-gray-500">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-4 mt-6">
              <span className="text-4xl font-bold text-gray-900">
                €{product.price.toFixed(2)}
              </span>
              {hasDiscount && (
                <span className="text-xl text-gray-400 line-through">
                  €{product.originalPrice!.toFixed(2)}
                </span>
              )}
            </div>

            {/* Description */}
            <p className="text-gray-600 mt-6 leading-relaxed">
              {product.description}
            </p>

            {/* CBD/THC Info */}
            {(product.cbd || product.thc) && (
              <div className="flex gap-4 mt-6">
                {product.cbd && (
                  <div className="px-4 py-3 bg-emerald-50 rounded-xl">
                    <p className="text-sm text-emerald-600 font-medium">CBD</p>
                    <p className="text-lg font-bold text-emerald-700">{product.cbd}</p>
                  </div>
                )}
                {product.thc && (
                  <div className="px-4 py-3 bg-gray-100 rounded-xl">
                    <p className="text-sm text-gray-600 font-medium">THC</p>
                    <p className="text-lg font-bold text-gray-700">{product.thc}</p>
                  </div>
                )}
                {product.weight && (
                  <div className="px-4 py-3 bg-gray-100 rounded-xl">
                    <p className="text-sm text-gray-600 font-medium">Weight</p>
                    <p className="text-lg font-bold text-gray-700">{product.weight}</p>
                  </div>
                )}
              </div>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Quantity & Actions */}
            <div className="flex flex-wrap items-center gap-4 mt-8">
              {/* Quantity */}
              <div className="flex items-center gap-3 bg-gray-100 rounded-full px-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-200 rounded-full transition-colors"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="w-8 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 flex items-center justify-center hover:bg-gray-200 rounded-full transition-colors"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              {/* Add to Cart */}
              <Button
                size="lg"
                className="flex-1"
                disabled={!product.inStock}
              >
                <ShoppingCart className="w-5 h-5 mr-2" />
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </Button>

              {/* Wishlist */}
              <button
                onClick={() => setIsWishlisted(!isWishlisted)}
                className={cn(
                  "w-12 h-12 rounded-full border-2 flex items-center justify-center transition-colors",
                  isWishlisted
                    ? "border-red-500 bg-red-50 text-red-500"
                    : "border-gray-200 hover:border-gray-300 text-gray-400"
                )}
              >
                <Heart className={cn("w-5 h-5", isWishlisted && "fill-current")} />
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Truck className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Free Shipping</p>
                  <p className="text-sm text-gray-500">On orders over €50</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Shield className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">Lab Tested</p>
                  <p className="text-sm text-gray-500">Quality guaranteed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-24">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
