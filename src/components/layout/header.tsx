"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingCart,
  User,
  Search,
  Menu,
  X,
  ChevronDown,
  Heart,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { categories } from "@/data/products";
import { t } from "@/lib/translations";

const navigation = [
  { name: t.nav.home, href: "/" },
  {
    name: t.nav.shop,
    href: t.urls.shop,
    children: [
      ...categories.map(cat => ({
        name: t.categories[cat.slug as keyof typeof t.categories] || cat.name,
        href: `/categorias/${cat.slug}`,
        description: cat.description,
      })),
      {
        name: t.nav.promotions,
        href: t.urls.promotions,
        description: "Ofertas especiais e promoções",
      },
    ]
  },
  {
    name: t.nav.community,
    href: t.urls.community,
  },
  { name: t.nav.about, href: t.urls.about },
  { name: t.nav.blog, href: t.urls.blog },
  { name: t.nav.contact, href: t.urls.contact },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top Bar - Shipping Banner */}
      <div className="bg-[#284400] text-white text-sm py-2.5">
        <div className="max-w-[1080px] w-[80%] mx-auto flex justify-center items-center">
          <span className="text-center">{t.shipping.banner}</span>
        </div>
      </div>

      {/* Main Header */}
      <nav className="bg-white border-b border-gray-100">
        <div className="max-w-[1080px] w-[80%] mx-auto">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center">
              <div className="relative w-[140px] h-[60px]">
                {/* Placeholder for logo - in production would use actual image */}
                <div className="flex flex-col items-center justify-center h-full">
                  <span className="text-xl font-bold text-black tracking-tight">Native</span>
                  <span className="text-sm text-black tracking-widest -mt-1">AMSTERDAM</span>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navigation.map((item) => (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveDropdown(item.name)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center gap-1 text-gray-800 hover:text-[#35ad55] transition-colors font-medium text-sm",
                      item.children && "cursor-pointer"
                    )}
                  >
                    {item.name}
                    {item.children && <ChevronDown className="w-4 h-4" />}
                  </Link>

                  {/* Dropdown Menu */}
                  <AnimatePresence>
                    {item.children && activeDropdown === item.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-4"
                      >
                        <div className="bg-white rounded-lg shadow-xl border border-gray-100 p-4 min-w-[260px]">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block p-3 rounded-lg hover:bg-[#f4eee1] transition-colors group"
                            >
                              <span className="font-medium text-gray-900 group-hover:text-[#35ad55] text-sm">
                                {child.name}
                              </span>
                              {child.description && (
                                <p className="text-xs text-gray-500 mt-0.5">
                                  {child.description}
                                </p>
                              )}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-3">
              <button className="p-2 text-gray-700 hover:text-[#35ad55] transition-colors">
                <Search className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-700 hover:text-[#35ad55] transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-2 text-gray-700 hover:text-[#35ad55] transition-colors">
                <User className="w-5 h-5" />
              </button>
              <button className="relative p-2 text-gray-700 hover:text-[#35ad55] transition-colors">
                <ShoppingCart className="w-5 h-5" />
                <span className="absolute -top-1 -right-1 w-5 h-5 bg-[#35ad55] text-white text-xs rounded-full flex items-center justify-center font-medium">
                  0
                </span>
              </button>

              {/* Mobile Menu Button */}
              <button
                className="lg:hidden p-2 text-gray-700"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-gray-100"
          >
            <div className="max-w-[1080px] w-[80%] mx-auto py-6 space-y-4">
              {navigation.map((item) => (
                <div key={item.name}>
                  <Link
                    href={item.href}
                    className="block text-base font-medium text-gray-900 hover:text-[#35ad55] py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                  {item.children && (
                    <div className="pl-4 space-y-2 mt-2">
                      {item.children.map((child) => (
                        <Link
                          key={child.name}
                          href={child.href}
                          className="block text-gray-600 hover:text-[#35ad55] py-1 text-sm"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {child.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
