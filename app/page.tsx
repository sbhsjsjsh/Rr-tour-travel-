'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PackageCard from '@/components/PackageCard';
import { packages } from '@/lib/packages';
import { Compass, Leaf, Map, Mountain, ArrowRight } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="relative h-[85vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/assets/images/hero_nandi_hills_v2_1794081075287.jpg"
              alt="Mist rolling over Nandi Hills at sunrise"
              fill
              className="object-cover"
              priority
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>
          
          <div className="relative max-w-7xl mx-auto px-6 w-full text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-2xl"
            >
              <span className="inline-block text-[10px] uppercase tracking-[0.3em] font-bold mb-4 text-brand-secondary">
                Curated Travel Experiences
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] mb-6 text-balance">
                Rediscover the Heart of Karnataka.
              </h1>
              <p className="text-lg md:text-xl text-slate-100 mb-10 leading-relaxed font-medium text-balance max-w-xl">
                From the misty hills of Coorg to the heritage corridors of Mysore, we curate journeys that connect you with nature and history.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link 
                  href="/packages" 
                  className="px-8 py-4 bg-brand-primary text-white font-semibold rounded-full hover:bg-brand-primary/90 transition-all flex items-center gap-2 group"
                >
                  Explore Packages
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link 
                  href="/about" 
                  className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold rounded-full hover:bg-white/20 transition-all"
                >
                  Our Story
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services / Categories Bento Grid */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
                Beyond the Ordinary
              </h2>
              <p className="text-slate-500 max-w-2xl text-lg">
                We don&apos;t just book tickets; we design experiences that linger in your memory long after the trip ends.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <motion.div 
                whileHover={{ y: -5 }}
                className="md:col-span-2 bg-[#F3F7F5] p-8 rounded-2xl border border-emerald-100/50"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <Leaf className="w-6 h-6 text-brand-primary" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-4">Nature Retreats</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Escape the Bangalore traffic. Experience the serene coffee plantations, misty valleys, and untouched forests of Karnataka.
                </p>
                <Link href="/category/nature" className="text-sm font-bold text-brand-primary flex items-center gap-2 group">
                  View Experiences <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#FDF8F3] p-8 rounded-2xl border border-orange-100/50"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <Mountain className="w-6 h-6 text-brand-accent" />
                </div>
                <h3 className="text-xl font-display font-bold mb-4">Adventure</h3>
                <p className="text-slate-600 text-sm mb-6">
                  Trek the Western Ghats or camp under the stars.
                </p>
                <Link href="/category/adventure" className="text-sm font-bold text-brand-accent">Explore</Link>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-[#F7F3FD] p-8 rounded-2xl border border-purple-100/50"
              >
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  <Compass className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-xl font-display font-bold mb-4">Heritage</h3>
                <p className="text-slate-600 text-sm mb-6">
                  Walk through time in Hampi, Mysore, and Belur.
                </p>
                <Link href="/category/heritage" className="text-sm font-bold text-purple-600">Explore</Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Packages */}
        <section className="py-24 bg-[#FCFAF7]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 mb-4">
                  Signature Journeys
                </h2>
                <p className="text-slate-500 max-w-xl">
                  Hand-picked expeditions that showcase the diverse beauty of South India.
                </p>
              </div>
              <Link 
                href="/packages" 
                className="text-sm font-bold text-brand-primary border-b-2 border-brand-primary pb-1"
              >
                View All Packages
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packages.map((pkg) => (
                <PackageCard key={pkg.id} pkg={pkg} />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="relative">
                <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/assets/images/tour_kabini_wildlife_v2_1794081075798.jpg"
                    alt="Wildlife Safari"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="absolute -bottom-10 -right-10 w-64 aspect-[4/3] rounded-xl overflow-hidden border-8 border-white shadow-xl hidden md:block">
                   <Image
                    src="/assets/images/tour_mysore_palace_v2_1794081075364.jpg"
                    alt="Heritage Site"
                    fill
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
              
              <div>
                <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-accent mb-4 block">
                  The RR Travel Advantage
                </span>
                <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">
                  Sustainable. Authentic. <br />Personalized.
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center">
                      <Map className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">Expert Local Curation</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        Our itineraries are crafted by locals who know the hidden gems that aren&apos;t on any map.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="shrink-0 w-12 h-12 rounded-full bg-emerald-50 flex items-center justify-center">
                      <Leaf className="w-6 h-6 text-brand-primary" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-2">Eco-Conscious Travel</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">
                        We prioritize stays and partners who respect the environment and support local communities.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-12">
                   <Link 
                    href="/contact" 
                    className="inline-block px-10 py-4 bg-brand-primary text-white font-bold rounded-full hover:bg-brand-primary/90 transition-all shadow-lg shadow-emerald-900/10"
                  >
                    Start Planning
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
