"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, Database, Cookie, Mail, FileText } from "lucide-react";
import Link from "next/link";

const sections = [
  {
    id: "introduction",
    icon: Shield,
    title: "Introduction",
    content: `Welcome to NativeAMS. We respect your privacy and are committed to protecting your personal data. This privacy policy explains how we collect, use, and safeguard your information when you visit our website or make a purchase.

This policy applies to all information collected through our website (nativeams.com), mobile applications, and any related services, sales, marketing, or events.

By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.`
  },
  {
    id: "collection",
    icon: Database,
    title: "Information We Collect",
    content: `We collect several types of information for various purposes to provide and improve our service to you:

**Personal Information:**
- Name and contact details (email address, phone number, shipping address)
- Payment information (processed securely through our payment providers)
- Account credentials (username, password)
- Date of birth (to verify you are 21+)

**Usage Information:**
- Browser type and version
- Pages visited and time spent on our site
- Referring website addresses
- Device information and IP address

**Cookies and Tracking:**
- We use cookies and similar technologies to track activity on our website
- You can instruct your browser to refuse all cookies or indicate when a cookie is being sent`
  },
  {
    id: "usage",
    icon: Eye,
    title: "How We Use Your Information",
    content: `We use the collected data for various purposes:

**Service Delivery:**
- To process and fulfill your orders
- To send you order confirmations and shipping updates
- To provide customer support
- To manage your account

**Communication:**
- To send promotional emails and newsletters (with your consent)
- To notify you about changes to our products or services
- To respond to your inquiries

**Improvement:**
- To analyze usage patterns and improve our website
- To develop new products and services
- To conduct research and analysis

**Legal Compliance:**
- To comply with applicable laws and regulations
- To enforce our terms and conditions
- To protect our rights and the safety of our users`
  },
  {
    id: "sharing",
    icon: Lock,
    title: "Information Sharing",
    content: `We do not sell your personal information. We may share your data with:

**Service Providers:**
- Payment processors (Stripe, PayPal, iDEAL)
- Shipping carriers (PostNL, DHL, UPS)
- Email service providers
- Analytics providers

**Legal Requirements:**
We may disclose your information if required to do so by law or in response to valid requests by public authorities.

**Business Transfers:**
If NativeAMS is involved in a merger, acquisition, or sale of assets, your personal data may be transferred. We will provide notice before your data is transferred and becomes subject to a different privacy policy.

**With Your Consent:**
We may share your information for any other purpose with your consent.`
  },
  {
    id: "cookies",
    icon: Cookie,
    title: "Cookies Policy",
    content: `Cookies are small data files stored on your device. We use the following types:

**Essential Cookies:**
Required for the website to function properly. These cannot be disabled.

**Analytics Cookies:**
Help us understand how visitors interact with our website. We use Google Analytics to collect anonymous usage data.

**Marketing Cookies:**
Used to track visitors across websites to display relevant advertisements. You can opt out of these.

**Preference Cookies:**
Remember your settings and preferences for a better experience.

**Managing Cookies:**
Most browsers allow you to control cookies through their settings. However, limiting cookies may impact your experience on our website.`
  },
  {
    id: "rights",
    icon: FileText,
    title: "Your Rights",
    content: `Under GDPR and other applicable laws, you have the following rights:

**Right to Access:**
You can request a copy of the personal data we hold about you.

**Right to Rectification:**
You can request that we correct any inaccurate or incomplete data.

**Right to Erasure:**
You can request that we delete your personal data (subject to legal requirements).

**Right to Restrict Processing:**
You can request that we limit how we use your data.

**Right to Data Portability:**
You can request your data in a machine-readable format.

**Right to Object:**
You can object to certain types of processing, including direct marketing.

**Right to Withdraw Consent:**
You can withdraw your consent at any time.

To exercise any of these rights, please contact us at privacy@nativeams.com.`
  },
  {
    id: "security",
    icon: Lock,
    title: "Data Security",
    content: `We implement appropriate technical and organizational measures to protect your personal data:

- SSL/TLS encryption for all data transmission
- Secure payment processing through PCI-compliant providers
- Regular security audits and updates
- Access controls and authentication measures
- Secure data storage with encryption at rest

While we strive to protect your personal data, no method of transmission over the Internet is 100% secure. We cannot guarantee absolute security but are committed to protecting your information to the best of our ability.`
  },
  {
    id: "retention",
    icon: Database,
    title: "Data Retention",
    content: `We retain your personal data only for as long as necessary to fulfill the purposes outlined in this policy:

**Account Data:**
Retained while your account is active and for 2 years after account deletion.

**Order Data:**
Retained for 7 years for tax and legal compliance.

**Marketing Data:**
Retained until you unsubscribe or withdraw consent.

**Analytics Data:**
Anonymized and aggregated after 26 months.

When data is no longer needed, it is securely deleted or anonymized.`
  },
  {
    id: "contact",
    icon: Mail,
    title: "Contact Us",
    content: `If you have any questions about this Privacy Policy or our data practices, please contact us:

**Email:** privacy@nativeams.com
**Phone:** +31 20 123 4567
**Address:** Prinsengracht 123, 1015 Amsterdam, Netherlands

**Data Protection Officer:**
For GDPR-related inquiries, you can contact our DPO at dpo@nativeams.com

**Supervisory Authority:**
You have the right to lodge a complaint with the Dutch Data Protection Authority (Autoriteit Persoonsgegevens) if you believe your rights have been violated.`
  },
];

export default function PrivacyPage() {
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
              <Shield className="w-8 h-8 text-white" />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Privacy Policy
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
            {sections.map((section, index) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  className="flex items-center gap-2 text-gray-600 hover:text-emerald-600 transition-colors"
                >
                  <span className="text-emerald-600 font-medium">{index + 1}.</span>
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </motion.nav>

        {/* Content Sections */}
        <div className="space-y-12">
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
          className="mt-12 grid md:grid-cols-3 gap-6"
        >
          <Link
            href="/terms"
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center"
          >
            <FileText className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900">Terms of Service</h3>
            <p className="text-sm text-gray-500 mt-1">Read our terms</p>
          </Link>
          <Link
            href="/faq"
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center"
          >
            <Shield className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900">FAQ</h3>
            <p className="text-sm text-gray-500 mt-1">Common questions</p>
          </Link>
          <Link
            href="/contact"
            className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow text-center"
          >
            <Mail className="w-8 h-8 text-emerald-600 mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900">Contact Us</h3>
            <p className="text-sm text-gray-500 mt-1">Get in touch</p>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
