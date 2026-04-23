"use client";

import { useState } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import SignupSection from "@/components/SignupSection";
import Footer from "@/components/Footer";
import AuthModal from "@/components/AuthModal";

export default function Home() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-maroon-light selection:text-white">
      <Header onLoginClick={() => setIsAuthOpen(true)} />
      
      <main className="grow">
        <HeroSection />
        <ServicesSection />
        <SignupSection />
      </main>

      <Footer />

      <AuthModal 
        isOpen={isAuthOpen} 
        onClose={() => setIsAuthOpen(false)} 
      />
    </div>
  );
}
