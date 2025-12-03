"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Tag, Clock, Percent, Gift, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";

const promotions = [
  {
    id: 1,
    title: "Winter Sale",
    subtitle: "Up to 30% Off",
    description: "Get ready for the holidays with our biggest sale of the year. All CBD flowers and oils are on sale!",
    code: "WINTER30",
    discount: "30%",
    validUntil: "December 31, 2024",
    image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=800&q=80",
    featured: true,
  },
  {
    id: 2,
    title: "First Order Discount",
    subtitle: "10% Off Your First Purchase",
    description: "New to NativeAMS? Welcome! Use this code on your first order for an instant discount.",
    code: "WELCOME10",
    discount: "10%",
    validUntil: "Ongoing",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
    featured: false,
  },
  {
    id: 3,
    title: "Bundle & Save",
    subtitle: "Buy 3, Get 1 Free",
    description: "Stock up on your favorites! Buy any 3 products and get the 4th one absolutely free.",
    code: "BUNDLE4",
    discount: "25%",
    validUntil: "January 15, 2025",
    image: "https://images.unsplash.com/photo-1607082349566-187342175e2f?w=600&q=80",
    featured: false,
  },
  {
    id: 4,
    title: "Free Shipping",
    subtitle: "On Orders Over €50",
    description: "Enjoy free shipping on all orders over €50. No code needed - automatically applied at checkout.",
    code: "AUTO",
    discount: "Free",
    validUntil: "Ongoing",
    image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=600&q=80",
    featured: false,
  },
];

const flashDeals = products.filter(p => p.originalPrice).slice(0, 4);

export default function PromotionsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-36">
      {/* Hero */}
      <section className="bg-gradient-to-r from-red-500 to-orange-500 py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            className="absolute -top-20 -right-20 w-80 h-80 bg-white/10 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
            className="absolute -bottom-20 -left-20 w-60 h-60 bg-white/10 rounded-full"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-full text-white mb-6"
          >
            <Zap className="w-5 h-5" />
            Limited Time Offers
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold text-white"
          >
            Hot Deals & Promotions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-xl text-white/90 max-w-2xl mx-auto"
          >
            Don&apos;t miss out on these amazing offers! Save big on premium CBD products.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Featured Promotion */}
        {promotions.filter(p => p.featured).map((promo) => (
          <motion.section
            key={promo.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-emerald-600 to-emerald-800">
              <div className="grid lg:grid-cols-2 gap-8">
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-flex items-center gap-2 text-emerald-200 text-sm font-medium mb-4">
                    <Tag className="w-4 h-4" />
                    Featured Promotion
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">
                    {promo.title}
                  </h2>
                  <p className="text-5xl font-bold text-amber-400 mt-2">
                    {promo.subtitle}
                  </p>
                  <p className="text-emerald-100 mt-4 text-lg">
                    {promo.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 mt-6">
                    <div className="px-4 py-2 bg-white/10 rounded-lg">
                      <span className="text-emerald-200 text-sm">Use code:</span>
                      <span className="text-white font-bold ml-2 text-lg">{promo.code}</span>
                    </div>
                    <div className="flex items-center gap-2 text-emerald-200">
                      <Clock className="w-4 h-4" />
                      Valid until {promo.validUntil}
                    </div>
                  </div>
                  <div className="mt-8">
                    <Link href="/shop">
                      <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50 group">
                        Shop Now
                        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="relative h-64 lg:h-auto">
                  <Image
                    src={promo.image}
                    alt={promo.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.section>
        ))}

        {/* All Promotions */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
            <Percent className="w-6 h-6 text-emerald-600" />
            All Promotions
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {promotions.filter(p => !p.featured).map((promo, index) => (
              <motion.div
                key={promo.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative h-40">
                  <Image
                    src={promo.image}
                    alt={promo.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-red-500 text-white text-sm font-bold rounded-full">
                    {promo.discount} OFF
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900">{promo.title}</h3>
                  <p className="text-emerald-600 font-medium">{promo.subtitle}</p>
                  <p className="text-gray-600 text-sm mt-2">{promo.description}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <div className="px-3 py-1 bg-gray-100 rounded-lg">
                      <span className="text-gray-500 text-xs">Code:</span>
                      <span className="text-gray-900 font-bold ml-1">{promo.code}</span>
                    </div>
                    <span className="text-sm text-gray-500 flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {promo.validUntil}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Flash Deals */}
        <section>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-3">
              <Zap className="w-6 h-6 text-amber-500" />
              Flash Deals
            </h2>
            <Link href="/shop" className="text-emerald-600 font-medium hover:text-emerald-700 flex items-center gap-1">
              View All
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {flashDeals.map((product, index) => {
              const discount = product.originalPrice
                ? Math.round((1 - product.price / product.originalPrice) * 100)
                : 0;
              return (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={`/produto/${product.slug}`}
                    className="block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group"
                  >
                    <div className="relative aspect-square">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                      <span className="absolute top-3 left-3 px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                        -{discount}%
                      </span>
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-1">
                        {product.name}
                      </h3>
                      <div className="flex items-baseline gap-2 mt-2">
                        <span className="text-lg font-bold text-gray-900">
                          €{product.price.toFixed(2)}
                        </span>
                        <span className="text-sm text-gray-400 line-through">
                          €{product.originalPrice?.toFixed(2)}
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Newsletter CTA */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-amber-400 to-orange-400 rounded-3xl p-8 lg:p-12 text-center"
        >
          <Gift className="w-12 h-12 text-gray-900 mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
            Never Miss a Deal
          </h2>
          <p className="text-gray-800 mt-2 max-w-lg mx-auto">
            Subscribe to our newsletter and be the first to know about exclusive promotions, new products, and special offers.
          </p>
          <form className="mt-6 flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full border-2 border-gray-900/20 focus:outline-none focus:border-gray-900"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-gray-900 text-white font-semibold rounded-full hover:bg-gray-800 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </motion.section>
      </div>
    </div>
  );
}
