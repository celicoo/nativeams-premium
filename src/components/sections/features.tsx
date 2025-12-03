"use client";

import { motion } from "framer-motion";
import { Shield, Leaf, Truck, Award, HeartHandshake, Microscope } from "lucide-react";
import { t } from "@/lib/translations";

const features = [
  {
    icon: Leaf,
    title: t.features.organic.title,
    description: t.features.organic.description,
  },
  {
    icon: Microscope,
    title: t.features.labTested.title,
    description: t.features.labTested.description,
  },
  {
    icon: Shield,
    title: t.features.euCompliant.title,
    description: t.features.euCompliant.description,
  },
  {
    icon: Truck,
    title: t.features.fastDelivery.title,
    description: t.features.fastDelivery.description,
  },
  {
    icon: Award,
    title: t.features.premiumQuality.title,
    description: t.features.premiumQuality.description,
  },
  {
    icon: HeartHandshake,
    title: t.features.expertSupport.title,
    description: t.features.expertSupport.description,
  },
];

export function Features() {
  return (
    <section className="py-24 bg-emerald-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-emerald-300 font-medium">{t.features.subtitle}</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            {t.features.title}
          </h2>
          <p className="text-emerald-100 mt-4 max-w-2xl mx-auto">
            {t.features.description}
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/15 transition-colors"
            >
              <div className="w-14 h-14 bg-emerald-500 rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-emerald-100">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
