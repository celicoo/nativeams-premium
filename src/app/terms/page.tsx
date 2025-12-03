"use client";

import { motion } from "framer-motion";
import { FileText, Scale, ShoppingBag, AlertTriangle, Ban, RefreshCw, Globe, Gavel } from "lucide-react";
import Link from "next/link";

const sections = [
  {
    id: "acceptance",
    icon: FileText,
    title: "1. Acceptance of Terms",
    content: `By accessing and using the NativeAMS website (nativeams.com) and services, you accept and agree to be bound by these Terms of Service and our Privacy Policy.

If you do not agree to these terms, please do not use our website or purchase our products.

We reserve the right to update these terms at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services after any changes constitutes acceptance of the new terms.`
  },
  {
    id: "eligibility",
    icon: Scale,
    title: "2. Eligibility",
    content: `To use our services and purchase products, you must:

- Be at least 21 years of age
- Have the legal capacity to enter into binding contracts
- Reside in a country where CBD products are legal
- Provide accurate and complete information during registration and checkout

By placing an order, you confirm that you meet all eligibility requirements. We reserve the right to refuse service to anyone who does not meet these requirements.`
  },
  {
    id: "products",
    icon: ShoppingBag,
    title: "3. Products and Services",
    content: `**Product Information:**
We strive to provide accurate product descriptions, images, and pricing. However, we do not warrant that product descriptions or other content is accurate, complete, or error-free.

**Availability:**
Products are subject to availability. We reserve the right to discontinue any product at any time without notice.

**Pricing:**
All prices are in Euros (€) and include applicable VAT. We reserve the right to change prices at any time. Price changes will not affect orders already placed.

**Quality:**
All our CBD products comply with EU regulations and contain less than 0.2% THC. Products are third-party lab tested for quality and safety.`
  },
  {
    id: "orders",
    icon: ShoppingBag,
    title: "4. Orders and Payment",
    content: `**Order Acceptance:**
Your order constitutes an offer to purchase. We reserve the right to accept or reject any order for any reason, including product availability, errors in pricing or product information, or suspected fraud.

**Payment:**
Payment is required at the time of order. We accept various payment methods including credit cards, iDEAL, PayPal, and bank transfer.

**Order Confirmation:**
You will receive an email confirmation once your order is placed. This confirmation does not constitute acceptance of your order.

**Cancellation:**
Orders can be cancelled within 1 hour of placement. After this period, orders enter processing and cannot be cancelled.`
  },
  {
    id: "shipping",
    icon: Globe,
    title: "5. Shipping and Delivery",
    content: `**Shipping Areas:**
We currently ship to all EU countries. We cannot ship to countries where CBD products are prohibited.

**Delivery Times:**
- Netherlands: 1-2 business days
- EU countries: 3-5 business days
- Express shipping available for faster delivery

**Shipping Costs:**
- Free standard shipping on orders over €50
- Standard shipping: €4.95
- Express shipping: €9.95

**Risk of Loss:**
Risk of loss passes to you upon delivery. We are not responsible for delays caused by shipping carriers or customs.`
  },
  {
    id: "returns",
    icon: RefreshCw,
    title: "6. Returns and Refunds",
    content: `**30-Day Satisfaction Guarantee:**
If you are not satisfied with your purchase, you may return it within 30 days for a full refund.

**Return Conditions:**
- Products must be unused and in original packaging
- Opened products cannot be returned due to health and safety regulations
- Return shipping costs are the responsibility of the customer unless the product is defective

**Refund Process:**
Refunds will be processed within 14 days of receiving the returned product. Refunds will be issued to the original payment method.

**Defective Products:**
If you receive a defective product, contact us immediately. We will arrange for a replacement or full refund including shipping costs.`
  },
  {
    id: "prohibited",
    icon: Ban,
    title: "7. Prohibited Uses",
    content: `You agree not to:

- Use our products for any illegal purpose
- Resell our products without authorization
- Provide false or misleading information
- Attempt to circumvent age verification
- Use automated systems to access our website
- Interfere with the proper functioning of our website
- Infringe on our intellectual property rights
- Post or transmit harmful content through our platform

Violation of these terms may result in termination of your account and legal action.`
  },
  {
    id: "disclaimer",
    icon: AlertTriangle,
    title: "8. Disclaimers",
    content: `**No Medical Claims:**
Our products are not intended to diagnose, treat, cure, or prevent any disease. Statements about our products have not been evaluated by health authorities. Consult a healthcare professional before using CBD products.

**Website Disclaimer:**
Our website and services are provided "as is" without warranties of any kind. We do not guarantee uninterrupted or error-free service.

**Limitation of Liability:**
To the maximum extent permitted by law, NativeAMS shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of our products or services.`
  },
  {
    id: "governing",
    icon: Gavel,
    title: "9. Governing Law",
    content: `These Terms of Service shall be governed by and construed in accordance with the laws of the Netherlands.

Any disputes arising from these terms or your use of our services shall be subject to the exclusive jurisdiction of the courts of Amsterdam, Netherlands.

If any provision of these terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.`
  },
  {
    id: "contact",
    icon: FileText,
    title: "10. Contact Information",
    content: `For questions about these Terms of Service, please contact us:

**Email:** legal@nativeams.com
**Phone:** +31 20 123 4567
**Address:**
NativeAMS B.V.
Prinsengracht 123
1015 Amsterdam
Netherlands

**Chamber of Commerce:** KVK 12345678
**VAT Number:** NL123456789B01`
  },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-36">
      {/* Hero */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center mb-6"
          >
            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">
              <FileText className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Terms of Service
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-emerald-100"
          >
            Last updated: November 2024
          </motion.p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Table of Contents */}
        <motion.nav
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl p-6 shadow-sm mb-12"
        >
          <h2 className="text-lg font-bold text-gray-900 mb-4">Table of Contents</h2>
          <ul className="grid md:grid-cols-2 gap-2">
            {sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>

        {/* Content Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
                  <section.icon className="w-5 h-5 text-emerald-600" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">{section.title}</h2>
              </div>
              <div className="prose prose-gray max-w-none">
                {section.content.split('\n\n').map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-600 leading-relaxed mb-4 whitespace-pre-line">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Related Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-6 bg-emerald-50 rounded-2xl text-center"
        >
          <p className="text-gray-700 mb-4">
            By using NativeAMS, you agree to these Terms of Service and our{" "}
            <Link href="/privacy" className="text-emerald-600 hover:underline">
              Privacy Policy
            </Link>
            .
          </p>
          <p className="text-gray-500 text-sm">
            Questions? Contact us at{" "}
            <a href="mailto:legal@nativeams.com" className="text-emerald-600 hover:underline">
              legal@nativeams.com
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
