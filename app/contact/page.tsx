'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Invalid phone number'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema)
  });

  const onSubmit = async (data: ContactFormValues) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-24 px-6 bg-[#FCFAF7]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Left side: Info */}
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] font-bold text-brand-accent mb-4 block">
                Get In Touch
              </span>
              <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8 leading-tight">
                Let&apos;s Design Your <br />Next Adventure.
              </h1>
              <p className="text-slate-500 text-lg mb-12 max-w-md leading-relaxed">
                Have a specific destination in mind? Or need a custom itinerary for a corporate group? Our travel experts are here to help.
              </p>
              
              <div className="space-y-10">
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                    <Mail className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email Us</h4>
                    <p className="text-slate-500 text-sm">info@rrtravel.in</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                    <Phone className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Call Anytime</h4>
                    <p className="text-slate-500 text-sm">+91 80 1234 5678</p>
                  </div>
                </div>
                
                <div className="flex gap-6">
                  <div className="shrink-0 w-12 h-12 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm">
                    <MapPin className="w-5 h-5 text-brand-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Visit Our Office</h4>
                    <p className="text-slate-500 text-sm">MG Road, Bengaluru, KA 560001</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: Form */}
            <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200/60 shadow-xl shadow-slate-200/20">
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="h-full flex flex-col items-center justify-center text-center py-12"
                >
                  <div className="w-20 h-20 bg-emerald-50 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-slate-900 mb-4">Inquiry Received!</h3>
                  <p className="text-slate-500 max-w-xs mx-auto mb-8">
                    Thank you for reaching out. One of our travel curators will contact you within the next 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-brand-primary font-bold text-sm border-b-2 border-brand-primary"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Full Name</label>
                    <input 
                      {...register('name')}
                      className={`w-full px-5 py-4 bg-slate-50 border ${errors.name ? 'border-red-500' : 'border-slate-100'} rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all`}
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.name.message}</p>}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Email Address</label>
                      <input 
                        {...register('email')}
                        className={`w-full px-5 py-4 bg-slate-50 border ${errors.email ? 'border-red-500' : 'border-slate-100'} rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Phone Number</label>
                      <input 
                        {...register('phone')}
                        className={`w-full px-5 py-4 bg-slate-50 border ${errors.phone ? 'border-red-500' : 'border-slate-100'} rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all`}
                        placeholder="+91 00000 00000"
                      />
                      {errors.phone && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.phone.message}</p>}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Your Message</label>
                    <textarea 
                      {...register('message')}
                      rows={5}
                      className={`w-full px-5 py-4 bg-slate-50 border ${errors.message ? 'border-red-500' : 'border-slate-100'} rounded-xl focus:outline-none focus:ring-2 focus:ring-brand-primary/20 transition-all resize-none`}
                      placeholder="Tell us about your dream trip..."
                    />
                    {errors.message && <p className="text-red-500 text-[10px] mt-1 font-bold">{errors.message.message}</p>}
                  </div>
                  
                  <button 
                    disabled={isSubmitting}
                    className="w-full py-4 bg-brand-primary text-white font-bold rounded-xl hover:bg-brand-primary/90 transition-all shadow-lg shadow-emerald-900/20 flex items-center justify-center gap-3 disabled:opacity-70"
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        Send Inquiry
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
