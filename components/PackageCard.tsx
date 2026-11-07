import Link from 'next/link';
import Image from 'next/image';
import { TourPackage } from '@/lib/packages';
import { Clock, MapPin } from 'lucide-react';

export default function PackageCard({ pkg }: { pkg: TourPackage }) {
  return (
    <Link 
      href={`/packages/${pkg.slug}`}
      className="group block bg-white border border-slate-200/60 rounded-xl overflow-hidden hover:shadow-xl transition-all duration-500"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={pkg.image}
          alt={pkg.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
      </div>
      
      <div className="p-6">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-brand-accent font-bold mb-3">
          <span>{pkg.category}</span>
          <span className="text-slate-300">/</span>
          <span>Karnataka</span>
        </div>
        
        <h3 className="text-xl font-display font-semibold text-slate-900 mb-2 group-hover:text-brand-primary transition-colors">
          {pkg.title}
        </h3>
        
        <p className="text-sm text-slate-500 line-clamp-2 mb-6 leading-relaxed">
          {pkg.description}
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex items-center gap-3 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5" />
              {pkg.duration}
            </span>
          </div>
          <span className="text-sm font-bold text-slate-900">{pkg.price.split(' ')[0]}</span>
        </div>
      </div>
    </Link>
  );
}
