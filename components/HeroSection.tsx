"use client";

export default function HeroSection() {
  return (
    <section className="bg-linear-to-r from-maroon-light to-maroon-dark text-white py-28 relative overflow-hidden">
      {/* Decorative gradient overlay for premium feel */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.1),transparent)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 drop-shadow-lg">
          Supporting Rehabilitation & <br className="hidden md:block" /> Community Safety
        </h1>
        <p className="text-lg md:text-2xl max-w-2xl mx-auto opacity-90 leading-relaxed">
          Our mission is to guide individuals toward positive transformation and
          help maintain a safer community for all.
        </p>
        <div className="mt-10 flex justify-center gap-4">
          <a 
            href="#signup"
            className="group relative px-8 py-3 rounded-xl font-semibold text-black bg-linear-to-r from-gold-light to-gold-dark border border-yellow-200/60 shadow-xl overflow-hidden hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            <span className="relative z-10 uppercase tracking-wider">
              GENERATE YOUR QR
            </span>
            {/* Soft gold gloss */}
            <span
              className="absolute inset-0 bg-linear-to-t from-transparent to-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            />
            {/* Animated gold shine */}
            <span
              className="absolute -left-16 top-0 h-full w-16 bg-white/60 transform -skew-x-12 blur-md animate-shine"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
