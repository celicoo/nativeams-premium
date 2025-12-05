"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Users, MessageCircle, Calendar, MapPin, Heart, Share2, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const communityStats = [
  { value: "15K+", label: "Community Members" },
  { value: "500+", label: "Monthly Events" },
  { value: "50+", label: "Local Partners" },
  { value: "10+", label: "Cities" },
];

const upcomingEvents = [
  {
    id: 1,
    title: "CBD Wellness Workshop",
    date: "December 15, 2024",
    time: "14:00 - 17:00",
    location: "Amsterdam CBD Café",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&q=80",
    attendees: 45,
  },
  {
    id: 2,
    title: "Hemp Cultivation Masterclass",
    date: "December 20, 2024",
    time: "10:00 - 13:00",
    location: "NativeAMS HQ",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    attendees: 30,
  },
  {
    id: 3,
    title: "New Year CBD Tasting",
    date: "January 5, 2025",
    time: "18:00 - 22:00",
    location: "De Pijp Community Center",
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&q=80",
    attendees: 100,
  },
];

const communityPosts = [
  {
    id: 1,
    author: "Maria S.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    content: "Just tried the new Amnesia Haze CBD and it's incredible! The aroma is so fresh and uplifting. Perfect for my morning routine. 🌿",
    likes: 47,
    comments: 12,
    time: "2 hours ago",
  },
  {
    id: 2,
    author: "Jan K.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    content: "Had an amazing time at yesterday's workshop! Learned so much about the benefits of full-spectrum CBD. Thanks @NativeAMS team!",
    likes: 83,
    comments: 24,
    time: "5 hours ago",
  },
  {
    id: 3,
    author: "Emma L.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    content: "My sleep has improved so much since I started using the CBD oil before bed. Life-changing! Has anyone else experienced this?",
    likes: 156,
    comments: 45,
    time: "1 day ago",
  },
];

const instagramPosts = [
  "https://images.unsplash.com/photo-1603909223429-69bb7101f420?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1556928045-16f7f50be0f3?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=300&h=300&fit=crop",
  "https://images.unsplash.com/photo-1586158291800-2665f07bba79?w=300&h=300&fit=crop",
];

export default function CommunityPage() {
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
              <Users className="w-10 h-10 text-white" />
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-white"
          >
            Join Our Community
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg text-emerald-100 max-w-2xl mx-auto"
          >
            Connect with fellow CBD enthusiasts, share experiences, and stay updated on events and exclusive offers.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8"
          >
            <Button size="lg" className="bg-white text-emerald-600 hover:bg-emerald-50">
              Join Now - It&apos;s Free
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {communityStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-3xl md:text-4xl font-bold text-emerald-600">{stat.value}</p>
                <p className="text-gray-600 mt-1">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Community Feed */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <MessageCircle className="w-6 h-6 text-emerald-600" />
                Community Feed
              </h2>
              <div className="space-y-6">
                {communityPosts.map((post, index) => (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-sm"
                  >
                    <div className="flex items-start gap-4">
                      <div className="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={post.avatar}
                          alt={post.author}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-gray-900">{post.author}</span>
                          <span className="text-sm text-gray-500">{post.time}</span>
                        </div>
                        <p className="text-gray-700 mt-2">{post.content}</p>
                        <div className="flex items-center gap-6 mt-4">
                          <button className="flex items-center gap-2 text-gray-500 hover:text-red-500 transition-colors">
                            <Heart className="w-5 h-5" />
                            <span>{post.likes}</span>
                          </button>
                          <button className="flex items-center gap-2 text-gray-500 hover:text-emerald-600 transition-colors">
                            <MessageCircle className="w-5 h-5" />
                            <span>{post.comments}</span>
                          </button>
                          <button className="flex items-center gap-2 text-gray-500 hover:text-emerald-600 transition-colors">
                            <Share2 className="w-5 h-5" />
                            <span>Share</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="mt-6 text-center">
                <button className="text-emerald-600 font-medium hover:text-emerald-700">
                  Load More Posts
                </button>
              </div>
            </section>

            {/* Instagram Feed */}
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Instagram className="w-6 h-6 text-emerald-600" />
                @NativeAMS on Instagram
              </h2>
              <div className="grid grid-cols-3 gap-4">
                {instagramPosts.map((image, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="relative aspect-square rounded-xl overflow-hidden group"
                  >
                    <Image
                      src={image}
                      alt="Instagram post"
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                      <Instagram className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                  </motion.a>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Upcoming Events */}
            <section className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-emerald-600" />
                Upcoming Events
              </h3>
              <div className="space-y-4">
                {upcomingEvents.map((event) => (
                  <motion.div
                    key={event.id}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <div className="flex gap-4">
                      <div className="relative w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 group-hover:text-emerald-600 transition-colors">
                          {event.title}
                        </h4>
                        <p className="text-sm text-gray-500 mt-1">
                          {event.date} • {event.time}
                        </p>
                        <p className="text-sm text-gray-500 flex items-center gap-1 mt-1">
                          <MapPin className="w-3 h-3" />
                          {event.location}
                        </p>
                        <p className="text-sm text-emerald-600 mt-1">
                          {event.attendees} attending
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <Link
                href="/events"
                className="block mt-6 text-center text-emerald-600 font-medium hover:text-emerald-700"
              >
                View All Events
              </Link>
            </section>

            {/* Newsletter */}
            <section className="bg-emerald-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl font-bold mb-2">Stay Connected</h3>
              <p className="text-emerald-100 text-sm mb-4">
                Get weekly updates on events, new products, and community highlights.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder-emerald-200 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  type="submit"
                  className="w-full py-3 bg-white text-emerald-600 font-semibold rounded-xl hover:bg-emerald-50 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </section>

            {/* Join CTA */}
            <section className="bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl p-6 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Become a Member
              </h3>
              <p className="text-gray-800 text-sm mb-4">
                Get exclusive discounts, early access to new products, and VIP event invitations.
              </p>
              <Button className="bg-gray-900 text-white hover:bg-gray-800 w-full">
                Join for Free
              </Button>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
