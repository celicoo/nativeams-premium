"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown, HelpCircle, Package, Truck, CreditCard, Shield, Leaf, MessageCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const faqCategories = [
  {
    id: "general",
    name: "General Information",
    icon: HelpCircle,
    faqs: [
      {
        question: "What is CBD?",
        answer: "CBD (cannabidiol) is a naturally occurring compound found in the hemp plant. Unlike THC, CBD is non-psychoactive, meaning it won't get you 'high'. It's known for its potential wellness benefits including relaxation, stress relief, and improved sleep quality."
      },
      {
        question: "Is CBD legal in the Netherlands/EU?",
        answer: "Yes, CBD products are legal in the Netherlands and most EU countries as long as they contain less than 0.2% THC. All our products comply with EU regulations and are lab-tested to ensure they meet legal requirements."
      },
      {
        question: "Will CBD show up on a drug test?",
        answer: "Most standard drug tests look for THC, not CBD. However, some full-spectrum CBD products contain trace amounts of THC (under 0.2%). If you're concerned about drug testing, we recommend using CBD isolate products which contain 0% THC."
      },
      {
        question: "What's the difference between full-spectrum, broad-spectrum, and CBD isolate?",
        answer: "Full-spectrum CBD contains all cannabinoids including trace THC. Broad-spectrum contains multiple cannabinoids but no THC. CBD isolate is pure CBD with no other cannabinoids. Full-spectrum is believed to provide the 'entourage effect' for maximum benefits."
      },
    ]
  },
  {
    id: "products",
    name: "Products",
    icon: Package,
    faqs: [
      {
        question: "How do I choose the right CBD product?",
        answer: "The best product depends on your needs. CBD oils are great for customizable dosing and fast absorption. CBD flowers are ideal for those who prefer the traditional experience. Edibles offer convenient, pre-dosed options. Our team is happy to help you find the perfect product."
      },
      {
        question: "How should I store CBD products?",
        answer: "Store CBD products in a cool, dark place away from direct sunlight. Most products have a shelf life of 1-2 years when stored properly. CBD oils should be kept sealed when not in use to prevent oxidation."
      },
      {
        question: "What dosage should I start with?",
        answer: "We recommend starting low and going slow. Begin with a small dose (5-10mg) and gradually increase until you find what works for you. Everyone's body is different, so there's no one-size-fits-all dosage."
      },
      {
        question: "Are your products organic?",
        answer: "Yes, all our CBD products are made from organically grown hemp without pesticides, herbicides, or chemical fertilizers. We prioritize quality and purity in every product we offer."
      },
    ]
  },
  {
    id: "shipping",
    name: "Shipping & Delivery",
    icon: Truck,
    faqs: [
      {
        question: "How long does shipping take?",
        answer: "Standard shipping within the Netherlands takes 1-2 business days. EU shipping typically takes 3-5 business days. Express shipping options are available at checkout for faster delivery."
      },
      {
        question: "Do you ship internationally?",
        answer: "We currently ship to all EU countries. Due to varying CBD regulations, we cannot ship to countries outside the EU. Please check your local laws before ordering."
      },
      {
        question: "Is shipping discreet?",
        answer: "Yes, all orders are shipped in plain, unmarked packaging with no indication of the contents. Your privacy is important to us."
      },
      {
        question: "Do you offer free shipping?",
        answer: "Yes! We offer free standard shipping on all orders over €50. This is automatically applied at checkout - no code needed."
      },
    ]
  },
  {
    id: "payment",
    name: "Payment & Orders",
    icon: CreditCard,
    faqs: [
      {
        question: "What payment methods do you accept?",
        answer: "We accept iDEAL, credit/debit cards (Visa, Mastercard, Maestro), PayPal, Apple Pay, Google Pay, and bank transfers. All transactions are secure and encrypted."
      },
      {
        question: "Can I cancel or modify my order?",
        answer: "You can cancel or modify your order within 1 hour of placing it. After that, the order enters processing and cannot be changed. Contact us immediately if you need assistance."
      },
      {
        question: "Do you offer refunds?",
        answer: "Yes, we offer a 30-day satisfaction guarantee. If you're not happy with your purchase, contact us for a full refund. The product must be unused and in original packaging for returns."
      },
      {
        question: "How do I track my order?",
        answer: "Once your order ships, you'll receive an email with a tracking number. You can also track your order by logging into your account on our website."
      },
    ]
  },
  {
    id: "quality",
    name: "Quality & Safety",
    icon: Shield,
    faqs: [
      {
        question: "Are your products lab tested?",
        answer: "Yes, every batch of our products is third-party lab tested for potency, purity, and safety. Test results (COAs - Certificates of Analysis) are available on each product page and upon request."
      },
      {
        question: "Where do you source your hemp?",
        answer: "We source our hemp from certified organic farms in Europe, primarily in Switzerland and the Netherlands. Our farmers follow sustainable cultivation practices and adhere to strict quality standards."
      },
      {
        question: "Are there any side effects?",
        answer: "CBD is generally well-tolerated, but some people may experience mild side effects like dry mouth, drowsiness, or changes in appetite. If you're taking medications, consult your doctor before using CBD."
      },
      {
        question: "Can I use CBD while pregnant or nursing?",
        answer: "We recommend consulting with your healthcare provider before using CBD products if you are pregnant, nursing, or have any medical conditions."
      },
    ]
  },
];

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full py-5 flex items-center justify-between text-left"
      >
        <span className="font-medium text-gray-900 pr-8">{question}</span>
        <ChevronDown
          className={cn(
            "w-5 h-5 text-gray-500 transition-transform flex-shrink-0",
            isOpen && "rotate-180"
          )}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-5 text-gray-600 leading-relaxed">{answer}</p>
      </motion.div>
    </div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState("general");
  const [openFAQ, setOpenFAQ] = useState<string | null>(null);

  const currentCategory = faqCategories.find(c => c.id === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 pt-36">
      {/* Hero */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-6"
          >
            <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center">
              <HelpCircle className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-emerald-100 max-w-2xl mx-auto"
          >
            Find answers to common questions about CBD, our products, shipping, and more.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Category Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-36 space-y-2">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    setOpenFAQ(null);
                  }}
                  className={cn(
                    "w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors",
                    activeCategory === category.id
                      ? "bg-emerald-100 text-emerald-700"
                      : "hover:bg-gray-100 text-gray-700"
                  )}
                >
                  <category.icon className="w-5 h-5" />
                  <span className="font-medium">{category.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Content */}
          <div className="lg:col-span-3">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl shadow-sm p-6 lg:p-8"
            >
              <div className="flex items-center gap-3 mb-6">
                {currentCategory && (
                  <>
                    <currentCategory.icon className="w-6 h-6 text-emerald-600" />
                    <h2 className="text-2xl font-bold text-gray-900">
                      {currentCategory.name}
                    </h2>
                  </>
                )}
              </div>

              <div>
                {currentCategory?.faqs.map((faq, index) => (
                  <FAQItem
                    key={index}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openFAQ === `${activeCategory}-${index}`}
                    onClick={() =>
                      setOpenFAQ(
                        openFAQ === `${activeCategory}-${index}`
                          ? null
                          : `${activeCategory}-${index}`
                      )
                    }
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Still Have Questions */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-3xl p-8 lg:p-12 text-center"
        >
          <MessageCircle className="w-12 h-12 text-white mx-auto mb-4" />
          <h2 className="text-2xl md:text-3xl font-bold text-white">
            Still Have Questions?
          </h2>
          <p className="text-emerald-100 mt-2 max-w-lg mx-auto">
            Can&apos;t find what you&apos;re looking for? Our team is here to help!
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/contact">
              <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
                Contact Us
              </Button>
            </Link>
            <a href="mailto:support@nativeams.com">
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                support@nativeams.com
              </Button>
            </a>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
