"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { t } from "@/lib/translations";

const slides = [
  {
    id: 1,
    title: t.hero.title,
    subtitle: t.hero.titleHighlight,
    description: "",
    cta: t.common.whoWeAre,
    href: t.urls.about,
    bgColor: "bg-gradient-to-br from-[#2d5016] to-[#1a3009]",
  },
  {
    id: 2,
    title: "CBD Premium",
    subtitle: t.hero.description,
    description: "",
    cta: t.hero.cta,
    href: t.urls.shop,
    bgColor: "bg-gradient-to-br from-[#3d6b1f] to-[#2a4a15]",
  },
  {
    id: 3,
    title: t.hero.delivery.title,
    subtitle: t.hero.delivery.description,
    description: t.hero.delivery.platforms,
    cta: t.hero.cta,
    href: t.urls.shop,
    bgColor: "bg-gradient-to-br from-[#4a7d28] to-[#345a1c]",
  },
  {
    id: 4,
    title: t.promotions.grindersMonth,
    subtitle: t.promotions.grindersDescription,
    description: "",
    cta: t.hero.cta,
    href: t.urls.promotions,
    bgColor: "bg-gradient-to-br from-[#557f32] to-[#3d5c24]",
  },
  {
    id: 5,
    title: t.hero.medicalCannabis.title,
    subtitle: t.hero.medicalCannabis.description,
    description: "",
    cta: t.common.seeArticle,
    href: t.urls.blog,
    bgColor: "bg-gradient-to-br from-[#4a7028] to-[#2d4518]",
  },
];

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slide = slides[currentSlide];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden pt-[120px]">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className={`absolute inset-0 ${slide.bgColor} flex items-center`}
        >
          <div className="max-w-[1080px] w-[80%] mx-auto">
            <div className="max-w-2xl text-white">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                {slide.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4 text-lg md:text-xl text-white/90"
              >
                {slide.subtitle}
              </motion.p>

              {slide.description && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="mt-2 text-base text-white/80 font-semibold"
                >
                  {slide.description}
                </motion.p>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="mt-8"
              >
                <Link
                  href={slide.href}
                  className="inline-block px-6 py-3 border-2 border-white text-white font-medium rounded hover:bg-white hover:text-[#284400] transition-colors"
                >
                  {slide.cta}
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${
              index === currentSlide ? "bg-white" : "bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
