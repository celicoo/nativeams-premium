"use client";

import { cn } from "@/lib/utils";
import type { Category } from "@/data/products";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { t } from "@/lib/translations";

interface CategoryCardProps {
  category: Category;
  className?: string;
  index?: number;
}

export function CategoryCard({ category, className, index = 0 }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link
        href={`/categorias/${category.slug}`}
        className={cn(
          "group block text-center",
          className
        )}
      >
        {/* Image Container */}
        <div className="relative aspect-square rounded-lg overflow-hidden mb-3 bg-[#f4eee1]">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* Category Name */}
        <h3 className="font-semibold text-gray-900 group-hover:text-[#35ad55] transition-colors">
          {t.categories[category.slug as keyof typeof t.categories] || category.name}
        </h3>
      </Link>
    </motion.div>
  );
}
