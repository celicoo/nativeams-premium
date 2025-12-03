"use client";

import { motion } from "framer-motion";
import { CategoryCard } from "@/components/ui/category-card";
import { categories } from "@/data/products";
import { t } from "@/lib/translations";

export function Categories() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1080px] w-[80%] mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            {t.categoriesSection.title}
          </h2>
          <p className="text-gray-600 mt-2">
            {t.categoriesSection.description}
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
