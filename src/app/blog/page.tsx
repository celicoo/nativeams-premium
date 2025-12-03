"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowRight, Clock } from "lucide-react";

const blogPosts = [
  {
    id: "1",
    slug: "beginners-guide-to-cbd",
    title: "The Beginner's Guide to CBD: Everything You Need to Know",
    excerpt:
      "New to CBD? Learn about the basics, benefits, and how to choose the right product for your needs in this comprehensive guide.",
    image: "https://images.unsplash.com/photo-1556928045-16f7f50be0f3?w=800&q=80",
    author: "Dr. Lisa van Berg",
    date: "November 15, 2024",
    readTime: "8 min read",
    category: "Education",
  },
  {
    id: "2",
    slug: "cbd-for-sleep",
    title: "How CBD Can Help Improve Your Sleep Quality",
    excerpt:
      "Struggling with sleep? Discover how CBD interacts with your body's endocannabinoid system to promote better rest.",
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?w=800&q=80",
    author: "Thomas Bakker",
    date: "November 10, 2024",
    readTime: "6 min read",
    category: "Wellness",
  },
  {
    id: "3",
    slug: "cbd-oil-vs-flower",
    title: "CBD Oil vs. CBD Flower: Which Is Right for You?",
    excerpt:
      "Compare the pros and cons of CBD oil and CBD flower to find the consumption method that best suits your lifestyle.",
    image: "https://images.unsplash.com/photo-1603909223429-69bb7101f420?w=800&q=80",
    author: "Jan de Vries",
    date: "November 5, 2024",
    readTime: "5 min read",
    category: "Products",
  },
  {
    id: "4",
    slug: "understanding-terpenes",
    title: "Understanding Terpenes: The Aromatic Compounds in CBD",
    excerpt:
      "Learn about terpenes, the natural compounds that give CBD products their unique aromas and may enhance their effects.",
    image: "https://images.unsplash.com/photo-1560999448-17b3e8c7d2be?w=800&q=80",
    author: "Dr. Lisa van Berg",
    date: "October 28, 2024",
    readTime: "7 min read",
    category: "Science",
  },
  {
    id: "5",
    slug: "cbd-for-athletes",
    title: "CBD for Athletes: Recovery, Performance, and Legality",
    excerpt:
      "Explore how athletes are using CBD for recovery and pain management, and what you need to know about regulations.",
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80",
    author: "Thomas Bakker",
    date: "October 20, 2024",
    readTime: "9 min read",
    category: "Wellness",
  },
  {
    id: "6",
    slug: "sustainable-cbd",
    title: "The Future of Sustainable CBD Production",
    excerpt:
      "Discover how the CBD industry is embracing sustainable practices and what to look for in eco-friendly products.",
    image: "https://images.unsplash.com/photo-1536147116438-62679a5e01f2?w=800&q=80",
    author: "Jan de Vries",
    date: "October 15, 2024",
    readTime: "6 min read",
    category: "Industry",
  },
];

const categories = ["All", "Education", "Wellness", "Products", "Science", "Industry"];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-36">
      {/* Hero */}
      <section className="bg-gradient-to-r from-emerald-600 to-emerald-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            The NativeAMS Blog
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-emerald-100 max-w-2xl mx-auto"
          >
            Your source for CBD education, wellness tips, and industry news
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Categories */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category, index) => (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                index === 0
                  ? "bg-emerald-600 text-white"
                  : "bg-white text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 border border-gray-200"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Featured Post */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <Link
            href={`/blog/${blogPosts[0].slug}`}
            className="group grid lg:grid-cols-2 gap-8 bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
          >
            <div className="relative aspect-video lg:aspect-auto">
              <Image
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-4 left-4 px-3 py-1 bg-emerald-600 text-white text-sm font-medium rounded-full">
                Featured
              </span>
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <span className="text-emerald-600 font-medium">
                {blogPosts[0].category}
              </span>
              <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mt-2 group-hover:text-emerald-600 transition-colors">
                {blogPosts[0].title}
              </h2>
              <p className="text-gray-600 mt-4">{blogPosts[0].excerpt}</p>
              <div className="flex items-center gap-6 mt-6 text-sm text-gray-500">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {blogPosts[0].author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {blogPosts[0].date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {blogPosts[0].readTime}
                </span>
              </div>
              <div className="flex items-center gap-2 mt-6 text-emerald-600 font-medium group-hover:gap-4 transition-all">
                Read Article
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </Link>
        </motion.article>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.slice(1).map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
              >
                <div className="relative aspect-video">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-white/90 text-gray-900 text-xs font-medium rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-gray-900 group-hover:text-emerald-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 mt-4 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-emerald-600 text-white rounded-full hover:bg-emerald-700 transition-colors font-medium">
            Load More Articles
          </button>
        </div>
      </div>

      {/* Newsletter */}
      <section className="bg-emerald-900 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white">
              Stay Updated on CBD News
            </h2>
            <p className="mt-4 text-emerald-200">
              Subscribe to our newsletter for the latest articles, product releases, and exclusive offers.
            </p>
            <form className="mt-8 flex flex-col sm:flex-row gap-4 max-w-xl mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder-emerald-300 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="px-8 py-3 bg-white text-emerald-600 font-semibold rounded-full hover:bg-emerald-50 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
