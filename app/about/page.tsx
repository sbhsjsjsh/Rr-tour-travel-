'use client';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-24">
            <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-accent mb-4 block">
              The Journey So Far
            </span>
            <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 mb-8 leading-tight">
              Crafting stories, <br />one mile at a time.
            </h1>
            <p className="text-slate-500 text-xl leading-relaxed">
              RR Travel Bangalore was born out of a simple realization: the most beautiful destinations are often the ones we overlook in the rush of life. Based in the heart of India&apos;s tech capital, we provide the ultimate antidote to urban burnout.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-center mb-32">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/assets/images/tour_coorg_coffee_v2_1794081075372.jpg"
                alt="Our philosophy"
                fill
                className="object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="space-y-12">
              <div>
                <h3 className="text-3xl font-display font-bold mb-6">Our Mission</h3>
                <p className="text-slate-600 leading-relaxed">
                  To promote slow, sustainable, and soulful travel across South India. We believe in journeys that respect local traditions, preserve the environment, and nourish the traveler&apos;s spirit.
                </p>
              </div>
              <div>
                <h3 className="text-3xl font-display font-bold mb-6">The Local Advantage</h3>
                <p className="text-slate-600 leading-relaxed">
                  Every tour we offer is vetted by our team of local curators. We don&apos;t just show you the monuments; we introduce you to the artisans, the storytellers, and the quiet trails that only a local would know.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
