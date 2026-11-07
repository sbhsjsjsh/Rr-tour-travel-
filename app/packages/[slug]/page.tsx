'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { packages } from '@/lib/packages';
import { notFound } from 'next/navigation';
import { motion } from 'framer-motion';
import { Clock, MapPin, CheckCircle, ArrowLeft } from 'lucide-react';

export default function PackageDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const pkg = packages.find((p) => p.slug === slug);

  if (!pkg) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pb-24">
        {/* Header Section with Image */}
        <div className="relative h-[60vh] min-h-[400px]">
          <Image
            src={pkg.image}
            alt={pkg.title}
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-7xl mx-auto px-6 w-full text-white">
              <Link 
                href="/packages" 
                className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest mb-8 hover:text-brand-secondary transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Packages
              </Link>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 max-w-3xl">
                {pkg.title}
              </h1>
              <div className="flex flex-wrap gap-8 text-sm font-medium">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-brand-secondary" />
                  {pkg.duration}
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-brand-secondary" />
                  Karnataka, India
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="max-w-7xl mx-auto px-6 pt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-display font-bold mb-6">Experience Overview</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-12">
                {pkg.description}
              </p>

              <h3 className="text-2xl font-display font-bold mb-8">What to Expect</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
                {pkg.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex gap-4 p-6 bg-white border border-slate-100 rounded-2xl">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-emerald-600" />
                    </div>
                    <span className="text-slate-700 font-medium">{highlight}</span>
                  </div>
                ))}
              </div>

              <div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
                <h3 className="text-2xl font-display font-bold mb-4">Detailed Itinerary</h3>
                <p className="text-slate-500 mb-8 italic">
                  A detailed day-by-day plan is provided upon inquiry. Our itineraries are fully customizable based on your preferences.
                </p>
                <div className="space-y-6">
                   <div className="relative pl-8 border-l-2 border-slate-200 py-2">
                      <div className="absolute -left-[9px] top-4 w-4 h-4 rounded-full bg-brand-primary" />
                      <h4 className="font-bold text-slate-900">Day 1: Arrival & Exploration</h4>
                      <p className="text-slate-500 text-sm mt-1">Settle in and begin your journey with a local perspective.</p>
                   </div>
                   <div className="relative pl-8 border-l-2 border-slate-200 py-2">
                      <div className="absolute -left-[9px] top-4 w-4 h-4 rounded-full bg-slate-200" />
                      <h4 className="font-bold text-slate-900">Day 2: Deep Dive</h4>
                      <p className="text-slate-500 text-sm mt-1">Immersive experiences guided by our local experts.</p>
                   </div>
                </div>
              </div>
            </div>

            {/* Sidebar / Booking Card */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 bg-white p-8 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/40">
                <div className="mb-8">
                  <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 mb-2 block">Starting from</span>
                  <div className="text-3xl font-display font-bold text-slate-900">
                    {pkg.price}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between text-sm py-2 border-b border-slate-100">
                    <span className="text-slate-500">Group Size</span>
                    <span className="font-bold">Min 2 Persons</span>
                  </div>
                  <div className="flex justify-between text-sm py-2 border-b border-slate-100">
                    <span className="text-slate-500">Season</span>
                    <span className="font-bold">Oct - Mar (Ideal)</span>
                  </div>
                  <div className="flex justify-between text-sm py-2 border-b border-slate-100">
                    <span className="text-slate-500">Accommodation</span>
                    <span className="font-bold">Premium Resorts</span>
                  </div>
                </div>

                <Link 
                  href="/contact" 
                  className="w-full py-4 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-primary/90 transition-all flex items-center justify-center shadow-lg shadow-emerald-900/20"
                >
                  Check Availability
                </Link>
                
                <p className="text-[10px] text-center text-slate-400 mt-6 leading-relaxed">
                  * Prices are subject to availability and season. Customizations may affect final cost.
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
