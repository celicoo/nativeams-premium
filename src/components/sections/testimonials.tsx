"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import Image from "next/image";
import { t } from "@/lib/translations";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Amsterdam",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
    rating: 5,
    text: "The CBD oil has been a game-changer for my sleep quality. I've tried many brands, but NativeAMS is by far the best. The quality is unmatched!",
    product: "Full Spectrum CBD Oil 10%",
  },
  {
    id: 2,
    name: "Thomas K.",
    location: "Rotterdam",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
    rating: 5,
    text: "Amazing flower quality! The Amnesia Haze CBD has a wonderful aroma and the effects are exactly what I was looking for. Fast shipping too!",
    product: "Amnesia Haze CBD",
  },
  {
    id: 3,
    name: "Emma L.",
    location: "Utrecht",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    rating: 5,
    text: "The gummies are delicious and effective! Perfect for relaxing after a long day. Customer service was also incredibly helpful.",
    product: "CBD Gummies Mixed Berry",
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-emerald-600 font-medium">{t.testimonials.subtitle}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2">
            {t.testimonials.title}
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            {t.testimonials.description}
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 rounded-3xl p-8 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-emerald-600" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Product Badge */}
              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm mb-6">
                {testimonial.product}
              </span>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
