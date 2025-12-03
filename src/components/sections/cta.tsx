"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { t } from "@/lib/translations";

export function CTA() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#284400] to-[#3d6b1f] relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-[1080px] w-[80%] mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {t.cta.title}
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-2xl mx-auto">
            {t.cta.description}
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href={t.urls.shop}>
              <button className="px-6 py-3 bg-white text-[#284400] font-semibold rounded hover:bg-[#f4eee1] transition-colors inline-flex items-center gap-2">
                {t.common.buyNow}
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link href={t.urls.contact}>
              <button className="px-6 py-3 border-2 border-white text-white font-medium rounded hover:bg-white/10 transition-colors">
                {t.nav.contact}
              </button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 md:gap-12 text-white/90">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">10,000+</p>
              <p className="text-sm mt-1">{t.cta.stats.customers}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">100%</p>
              <p className="text-sm mt-1">{t.cta.stats.organic}</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">4.9/5</p>
              <p className="text-sm mt-1">{t.cta.stats.rating}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
