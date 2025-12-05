"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
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

const AUTOPLAY_DELAY = 6000;

export function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  }, []);

  const goToSlide = useCallback((index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
    setProgress(0);
  }, [currentSlide]);

  // Autoplay timer with progress
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + (100 / (AUTOPLAY_DELAY / 50));
      });
    }, 50);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const slide = slides[currentSlide];

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? "100%" : "-100%",
      opacity: 0,
    }),
  };

  return (
    <section className="relative h-[500px] md:h-[600px] overflow-hidden pt-[120px]">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "tween", duration: 0.5, ease: [0.32, 0.72, 0, 1] },
            opacity: { duration: 0.3 },
          }}
          className={`absolute inset-0 ${slide.bgColor} flex items-center`}
        >
          <div className="max-w-[1080px] w-[80%] mx-auto">
            <div className="max-w-2xl text-white">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
              >
                {slide.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="mt-4 text-lg md:text-xl text-white/90"
              >
                {slide.subtitle}
              </motion.p>

              {slide.description && (
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="mt-2 text-base text-white/80 font-semibold"
                >
                  {slide.description}
                </motion.p>
              )}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-8 flex items-center gap-4"
              >
                <Link
                  href={slide.href}
                  className="inline-block px-8 py-3.5 border-2 border-white text-white font-medium rounded-sm hover:bg-white hover:text-[#284400] transition-all duration-300 hover:scale-105"
                >
                  {slide.cta}
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-3">
        <button
          onClick={prevSlide}
          className="group w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-sm flex items-center justify-center text-white transition-all duration-300 border border-white/20 hover:border-white/40"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6 md:w-7 md:h-7 group-hover:-translate-x-0.5 transition-transform" />
        </button>
      </div>

      <div className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-10 flex flex-col gap-3">
        <button
          onClick={nextSlide}
          className="group w-12 h-12 md:w-14 md:h-14 bg-white/10 backdrop-blur-sm hover:bg-white/20 rounded-sm flex items-center justify-center text-white transition-all duration-300 border border-white/20 hover:border-white/40"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6 md:w-7 md:h-7 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="flex items-center gap-3 bg-black/20 backdrop-blur-sm px-4 py-3 rounded-full border border-white/10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className="group relative"
              aria-label={`Go to slide ${index + 1}`}
            >
              <div
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? "w-12 bg-white"
                    : "w-8 bg-white/40 group-hover:bg-white/60"
                }`}
              >
                {index === currentSlide && isAutoPlaying && (
                  <motion.div
                    className="h-full bg-white/60 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.05 }}
                  />
                )}
              </div>
            </button>
          ))}

          <div className="w-px h-4 bg-white/20 ml-1" />

          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className="w-8 h-8 flex items-center justify-center hover:bg-white/10 rounded-full transition-colors"
            aria-label={isAutoPlaying ? "Pause autoplay" : "Play autoplay"}
          >
            {isAutoPlaying ? (
              <Pause className="w-4 h-4 text-white" />
            ) : (
              <Play className="w-4 h-4 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Slide Counter */}
      <div className="absolute top-32 md:top-36 right-4 md:right-8 z-10 bg-black/20 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
        <span className="text-white text-sm font-medium">
          {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </span>
      </div>
    </section>
  );
}
