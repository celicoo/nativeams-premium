"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/ui/product-card";
import { products, categories } from "@/data/products";
import { Search, Filter, X, ChevronDown, Grid3X3, LayoutList } from "lucide-react";
import { cn } from "@/lib/utils";
import { t } from "@/lib/translations";

type SortOption = "featured" | "price-asc" | "price-desc" | "rating" | "newest";

export default function ShopPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<SortOption>("featured");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200]);
  const [inStockOnly, setInStockOnly] = useState(false);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query) ||
          p.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Category filter
    if (selectedCategory) {
      result = result.filter((p) => p.categorySlug === selectedCategory);
    }

    // Price filter
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Stock filter
    if (inStockOnly) {
      result = result.filter((p) => p.inStock);
    }

    // Sort
    switch (sortBy) {
      case "price-asc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "featured":
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, sortBy, priceRange, inStockOnly]);

  return (
    <div className="min-h-screen bg-gray-50 pt-36">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-emerald-600 to-emerald-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            {t.shop.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-emerald-100 max-w-2xl mx-auto"
          >
            {t.shop.description}
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search and Controls */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder={`${t.common.search}...`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
            />
          </div>

          {/* Filter Toggle (Mobile) */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="lg:hidden flex items-center justify-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-xl"
          >
            <Filter className="w-5 h-5" />
            {t.common.filter}
          </button>

          {/* Sort Dropdown */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="appearance-none w-full lg:w-48 px-4 py-3 pr-10 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
            >
              <option value="featured">{t.shop.sort.featured}</option>
              <option value="price-asc">{t.shop.sort.priceLowHigh}</option>
              <option value="price-desc">{t.shop.sort.priceHighLow}</option>
              <option value="rating">{t.shop.sort.bestRated}</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        <div className="flex gap-8">
          {/* Sidebar Filters */}
          <aside
            className={cn(
              "w-72 flex-shrink-0",
              "fixed inset-y-0 left-0 z-40 bg-white p-6 transform transition-transform lg:relative lg:translate-x-0 lg:bg-transparent lg:p-0",
              showFilters ? "translate-x-0" : "-translate-x-full"
            )}
          >
            {/* Mobile Close */}
            <button
              onClick={() => setShowFilters(false)}
              className="lg:hidden absolute top-4 right-4"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-8 lg:sticky lg:top-36">
              {/* Categories */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">{t.nav.categories}</h3>
                <div className="space-y-2">
                  <button
                    onClick={() => setSelectedCategory(null)}
                    className={cn(
                      "w-full text-left px-3 py-2 rounded-lg transition-colors",
                      !selectedCategory
                        ? "bg-emerald-100 text-emerald-700"
                        : "hover:bg-gray-100 text-gray-700"
                    )}
                  >
                    {t.shop.filters.allProducts}
                  </button>
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.slug)}
                      className={cn(
                        "w-full text-left px-3 py-2 rounded-lg transition-colors",
                        selectedCategory === category.slug
                          ? "bg-emerald-100 text-emerald-700"
                          : "hover:bg-gray-100 text-gray-700"
                      )}
                    >
                      {category.name}
                      <span className="text-gray-400 ml-2">
                        ({products.filter((p) => p.categorySlug === category.slug).length})
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-semibold text-gray-900 mb-4">{t.shop.filters.priceRange}</h3>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-gray-500">€{priceRange[0]}</span>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="flex-1 accent-emerald-600"
                  />
                  <span className="text-sm text-gray-500">€{priceRange[1]}</span>
                </div>
              </div>

              {/* Stock Filter */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={inStockOnly}
                    onChange={(e) => setInStockOnly(e.target.checked)}
                    className="w-5 h-5 rounded border-gray-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span className="text-gray-700">{t.shop.filters.inStockOnly}</span>
                </label>
              </div>

              {/* Clear Filters */}
              <button
                onClick={() => {
                  setSelectedCategory(null);
                  setSearchQuery("");
                  setPriceRange([0, 200]);
                  setInStockOnly(false);
                  setSortBy("featured");
                }}
                className="w-full py-3 text-emerald-600 hover:text-emerald-700 font-medium"
              >
                {t.shop.filters.clearAll}
              </button>
            </div>
          </aside>

          {/* Mobile Overlay */}
          {showFilters && (
            <div
              className="fixed inset-0 bg-black/50 z-30 lg:hidden"
              onClick={() => setShowFilters(false)}
            />
          )}

          {/* Products Grid */}
          <div className="flex-1">
            {/* Results Count */}
            <p className="text-gray-600 mb-6">
              {t.products.showingProducts} {filteredProducts.length} {t.common.products}
            </p>

            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Search className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {t.shop.noResults.title}
                </h3>
                <p className="text-gray-500 mb-6">
                  {t.shop.noResults.description}
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory(null);
                    setSearchQuery("");
                    setPriceRange([0, 200]);
                    setInStockOnly(false);
                  }}
                  className="px-6 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors"
                >
                  {t.shop.filters.clearAll}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
