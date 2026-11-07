import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="text-2xl font-display font-bold text-white mb-6 block">
              RR Travel
            </Link>
            <p className="max-w-md text-slate-400 text-sm leading-relaxed">
              Curating authentic nature and heritage experiences across South India. 
              Based in Bangalore, we bridge the gap between urban life and the serene wild.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm">Explore</h4>
            <ul className="space-y-4 text-sm">
              <li><Link href="/packages" className="hover:text-brand-secondary transition-colors">Popular Packages</Link></li>
              <li><Link href="/about" className="hover:text-brand-secondary transition-colors">About Us</Link></li>
              <li><Link href="/itineraries" className="hover:text-brand-secondary transition-colors">Custom Itineraries</Link></li>
              <li><Link href="/contact" className="hover:text-brand-secondary transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6 text-sm">Contact</h4>
            <ul className="space-y-4 text-sm text-slate-400">
              <li>MG Road, Bengaluru, Karnataka</li>
              <li>+91 80 1234 5678</li>
              <li>info@rrtravel.in</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-slate-800 flex flex-col md:row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 RR Travel Bangalore. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
