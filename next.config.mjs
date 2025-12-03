/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "nativeamsterdam.com",
      },
    ],
  },
  // Portuguese URL rewrites - keep English folder names, display Portuguese URLs
  async rewrites() {
    return [
      // Shop/Store
      { source: "/loja", destination: "/shop" },
      // Categories
      { source: "/categorias/:slug", destination: "/categorias/:slug" },
      // Products
      { source: "/produto/:slug", destination: "/produto/:slug" },
      // About
      { source: "/sobre", destination: "/about" },
      // Contact
      { source: "/contacto", destination: "/contact" },
      // Community
      { source: "/comunidade", destination: "/community" },
      // Promotions
      { source: "/promocoes", destination: "/promotions" },
      // FAQ/General Info
      { source: "/informacoes-gerais", destination: "/faq" },
      // Privacy
      { source: "/politica-de-privacidade", destination: "/privacy" },
      // Terms
      { source: "/termos-de-servico", destination: "/terms" },
    ];
  },
};

export default nextConfig;
