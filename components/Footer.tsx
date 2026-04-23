"use client";

import Image from "next/image";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-400 py-16">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-6">
            <Image 
              src="/img/paplogo.png" 
              alt="Logo" 
              width={40} 
              height={40} 
              className="w-10 h-10 grayscale brightness-200" 
            />
            <span className="text-xl font-bold text-white tracking-tight">
              Parole & Probation Office
            </span>
          </div>
          <p className="max-w-sm mb-8 leading-relaxed">
            Dedicated to rehabilitating individuals and enhancing community safety through professional supervision and supportive programs.
          </p>
          <div className="flex gap-4">
            <SocialIcon icon={Globe} />
            <SocialIcon icon={Mail} />
            <SocialIcon icon={Phone} />
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Contact Information</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <MapPin size={18} className="text-maroon-light shrink-0" />
              <span>123 Justice Way, Capitol Site, Cebu City, Philippines</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="text-maroon-light shrink-0" />
              <span>(032) 123-4567</span>
            </li>
            <li className="flex gap-3">
              <Mail size={18} className="text-maroon-light shrink-0" />
              <span>contact@pap.gov.ph</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Quick Links</h4>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Support Portal</a></li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-zinc-800 text-center text-sm">
        <p>
          &copy; {new Date().getFullYear()} Parole & Probation Office. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function SocialIcon({ icon: Icon }: { icon: React.ElementType }) {
  return (
    <a href="#" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-maroon-light hover:text-white transition-all duration-300">
      <Icon size={18} />
    </a>
  );
}
