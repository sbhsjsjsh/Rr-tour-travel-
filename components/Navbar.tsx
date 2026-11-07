'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-[#FCFAF7]/80 backdrop-blur-md border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <Link 
          href="/" 
          className="text-2xl font-display font-bold tracking-tight text-brand-primary whitespace-nowrap shrink-0"
        >
          RR Travel
        </Link>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-600">
          <Link href="/packages" className="hover:text-brand-primary transition-colors whitespace-nowrap shrink-0">
            Packages
          </Link>
          <Link href="/about" className="hover:text-brand-primary transition-colors whitespace-nowrap shrink-0">
            Our Story
          </Link>
          <Link href="/itineraries" className="hover:text-brand-primary transition-colors whitespace-nowrap shrink-0">
            Itineraries
          </Link>
          <Link href="/contact" className="hover:text-brand-primary transition-colors whitespace-nowrap shrink-0">
            Contact
          </Link>
        </nav>

        {/* Zone 3: Primary Action */}
        <div className="flex items-center shrink-0">
          <Link 
            href="/contact" 
            className="px-6 py-2.5 text-xs font-semibold text-white bg-brand-primary rounded-full hover:bg-brand-primary/90 transition-all shadow-sm whitespace-nowrap shrink-0"
          >
            Plan Your Trip
          </Link>
        </div>
      </div>
    </header>
  );
}
