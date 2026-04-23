"use client";

import Image from "next/image";

interface HeaderProps {
  onLoginClick: () => void;
}

export default function Header({ onLoginClick }: HeaderProps) {
  return (
    <header className="w-full bg-maroon-dark shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image 
            src="/img/paplogo.png" 
            alt="PAP Logo" 
            width={48} 
            height={48} 
            className="w-12 h-12"
          />
          <span className="text-xl font-semibold text-white">
            Parole & Probation Office
          </span>
        </div>
        <button 
          onClick={onLoginClick}
          className="px-4 py-2 bg-white text-maroon-dark font-semibold rounded-lg hover:bg-gray-200 transition-colors"
        >
          Login
        </button>
      </div>
    </header>
  );
}
