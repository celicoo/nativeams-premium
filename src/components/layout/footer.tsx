"use client";

import Link from "next/link";
import { Instagram, Facebook } from "lucide-react";
import { t } from "@/lib/translations";

export function Footer() {
  return (
    <footer className="bg-white">
      {/* Newsletter Section */}
      <div className="bg-[#f4eee1]">
        <div className="max-w-[1080px] w-[80%] mx-auto py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-black">
                {t.footer.newsletter.title}
              </h3>
              <p className="text-gray-700 mt-1">
                {t.footer.newsletter.description}
              </p>
            </div>
            <form className="flex gap-3 w-full md:w-auto">
              <input
                type="email"
                placeholder={t.footer.newsletter.placeholder}
                className="flex-1 md:w-80 px-5 py-3 rounded-md bg-white border border-gray-200 text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#35ad55] focus:border-transparent"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#35ad55] text-white font-semibold rounded-md hover:bg-[#284400] transition-colors"
              >
                {t.common.subscribe}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer - 5 Column Layout like original */}
      <div className="max-w-[1080px] w-[80%] mx-auto py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Column 1: Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex flex-col items-start">
              <span className="text-xl font-bold text-black tracking-tight">Native</span>
              <span className="text-sm text-black tracking-widest -mt-1">AMSTERDAM</span>
            </Link>
          </div>

          {/* Column 2: Óleos CBD */}
          <div>
            <h4 className="font-bold text-black text-sm mb-4">
              <Link href="/categorias/cbd-oils" className="hover:text-[#35ad55]">
                {t.footer.sections.cbdOils}
              </Link>
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/categorias/cbd-oils" className="text-gray-700 hover:text-[#35ad55] transition-colors">
                  {t.footer.links.cbdOils}
                </Link>
              </li>
              <li>
                <Link href="/categorias/capsules" className="text-gray-700 hover:text-[#35ad55] transition-colors">
                  {t.footer.links.cbdCapsules}
                </Link>
              </li>
            </ul>

            <h4 className="font-bold text-black text-sm mb-3 mt-6">
              <Link href="/categorias/cbd-flowers" className="hover:text-[#35ad55]">
                {t.footer.sections.cbd}
              </Link>
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/categorias/cbd-flowers" className="text-gray-700 hover:text-[#35ad55] transition-colors">
                  {t.footer.links.cbdFlowers}
                </Link>
              </li>
              <li>
                <Link href="/categorias/extracts" className="text-gray-700 hover:text-[#35ad55] transition-colors">
                  {t.footer.links.cbdExtracts}
                </Link>
              </li>
              <li>
                <Link href="/categorias/preroll" className="text-gray-700 hover:text-[#35ad55] transition-colors">
                  {t.footer.links.cbdPreroll}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Produtos em geral */}
          <div>
            <h4 className="font-bold text-black text-sm mb-4">
              {t.footer.sections.generalProducts}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/categorias/vaporizers" className="text-gray-700 hover:text-[#35ad55] transition-colors">
                  {t.footer.links.vaporizers}
                </Link>
              </li>
              <li>
                <Link href="/categorias/accessories" className="text-gray-700 hover:text-[#35ad55] transition-colors">
                  {t.footer.links.accessories}
                </Link>
              </li>
              <li>
                <Link href="/categorias/textile" className="text-gray-700 hover:text-[#35ad55] transition-colors">
                  {t.footer.links.textile}
                </Link>
              </li>
              <li>
                <Link href="/categorias/natural-leaves" className="text-gray-700 hover:text-[#35ad55] transition-colors">
                  {t.footer.links.naturalLeaves}
                </Link>
              </li>
              <li>
                <Link href="/categorias/edibles" className="text-gray-700 hover:text-[#35ad55] transition-colors">
                  {t.footer.links.edibles}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: HHC */}
          <div>
            <h4 className="font-bold text-black text-sm mb-4">
              {t.footer.sections.hhc}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/categorias/hhc-extracts" className="text-gray-700 hover:text-[#35ad55] transition-colors">
                  {t.footer.links.hhcExtracts}
                </Link>
              </li>
              <li>
                <Link href="/categorias/hhc-flowers" className="text-gray-700 hover:text-[#35ad55] transition-colors">
                  {t.footer.links.hhcFlowers}
                </Link>
              </li>
              <li>
                <Link href="/categorias/hhc-gummies" className="text-gray-700 hover:text-[#35ad55] transition-colors">
                  {t.footer.links.hhcGummies}
                </Link>
              </li>
              <li>
                <Link href="/categorias/hhc-preroll" className="text-gray-700 hover:text-[#35ad55] transition-colors">
                  {t.footer.links.hhcPreroll}
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: Sobre nós */}
          <div>
            <h4 className="font-bold text-black text-sm mb-4">
              {t.footer.sections.aboutUs}
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={t.urls.about} className="text-gray-700 hover:text-[#35ad55] transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link href={t.urls.blog} className="text-gray-700 hover:text-[#35ad55] transition-colors">
                  {t.nav.blog}
                </Link>
              </li>
              <li>
                <Link href={t.urls.contact} className="text-gray-700 hover:text-[#35ad55] transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
              <li>
                <Link href={t.urls.faq} className="text-gray-700 hover:text-[#35ad55] transition-colors">
                  {t.nav.faq}
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-700 hover:text-[#35ad55] transition-colors">
                  {t.footer.links.complaintsBook}
                </Link>
              </li>
            </ul>

            {/* Contact Emails */}
            <div className="mt-6 space-y-1 text-sm">
              <p>
                <a href={`mailto:${t.footer.contact.orders}`} className="text-gray-700 hover:text-[#35ad55]">
                  {t.footer.contact.orders}
                </a>
              </p>
              <p>
                <a href={`mailto:${t.footer.contact.info}`} className="text-gray-700 hover:text-[#35ad55]">
                  {t.footer.contact.info}
                </a>
              </p>
            </div>

            {/* Social Links */}
            <div className="mt-4 flex gap-3">
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#35ad55] hover:text-white transition-colors text-gray-700">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#35ad55] hover:text-white transition-colors text-gray-700">
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200">
        <div className="max-w-[1080px] w-[80%] mx-auto py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-600 text-sm">
              &copy; {new Date().getFullYear()} Native Amsterdam. {t.footer.copyright}
            </p>
            <div className="flex items-center gap-4 text-sm">
              <Link href={t.urls.privacy} className="text-gray-600 hover:text-[#35ad55]">
                {t.nav.privacy}
              </Link>
              <Link href={t.urls.terms} className="text-gray-600 hover:text-[#35ad55]">
                {t.nav.terms}
              </Link>
            </div>
            <div className="flex items-center gap-4 text-xs text-gray-500">
              <span className="font-bold">{t.footer.badges.ageRestriction}</span>
              <span>{t.footer.badges.labTested}</span>
              <span>{t.footer.badges.euCompliant}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
