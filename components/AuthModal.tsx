"use client";

import { useState, useEffect } from "react";
import { Mail, Lock, X, ArrowLeft } from "lucide-react";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [view, setView] = useState<'login' | 'forgot'>('login');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<{ type: 'error' | 'success', text: string } | null>(null);

  useEffect(() => {
    if (!isOpen) {
      // Reset after animation
      const timer = setTimeout(() => {
        setView('login');
        setMessage(null);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setTimeout(() => {
      setLoading(false);
      setMessage({ type: 'success', text: "Login successful. Redirecting..." });
      // Redirect logic here
    }, 1500);
  };

  const handleForgot = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    setTimeout(() => {
      setLoading(false);
      setMessage({ type: 'success', text: "Success! Check your email for reset instructions." });
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-maroon-dark/20 backdrop-blur-md transition-opacity duration-300" 
        onClick={onClose}
      />
      
      <div className={`relative w-full max-w-md bg-white rounded-[32px] shadow-2xl p-8 transform transition-all duration-300 overflow-hidden ${
        isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'
      }`}>
        {/* Background Accent */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-maroon-dark/5 rounded-full -mr-16 -mt-16 pointer-events-none" />
        
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-zinc-400 hover:text-zinc-900 transition-colors rounded-full hover:bg-zinc-100"
        >
          <X size={20} />
        </button>

        <div className="relative">
          {view === 'login' ? (
            <div className="transition-all duration-500 opacity-100">
              <h2 className="text-3xl font-black mb-2 text-zinc-900">Welcome Back</h2>
              <p className="text-zinc-500 mb-8 font-medium">Please sign in to your account</p>

              <form onSubmit={handleLogin} className="space-y-4">
                {message && (
                  <div className={`p-4 rounded-2xl text-sm font-bold border ${
                    message.type === 'success' ? 'bg-brand-olive/10 text-brand-olive border-brand-olive/20' : 'bg-red-50 text-red-700 border-red-100'
                  }`}>
                    {message.text}
                  </div>
                )}

                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-maroon-light transition-colors" />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    className="w-full pl-12 pr-4 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-maroon-light/20 focus:border-maroon-light transition-all"
                  />
                </div>

                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-maroon-light transition-colors" />
                  <input
                    type="password"
                    required
                    placeholder="Password"
                    className="w-full pl-12 pr-4 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-maroon-light/20 focus:border-maroon-light transition-all"
                  />
                </div>

                <button 
                  type="button"
                  onClick={() => setView('forgot')}
                  className="w-full text-right text-sm font-bold text-maroon-light hover:text-maroon-dark transition-colors"
                >
                  Forgot Password?
                </button>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-maroon-dark text-white py-4 rounded-2xl font-black text-lg transition-all shadow-xl shadow-maroon-dark/20 hover:shadow-maroon-dark/30 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
                >
                  {loading ? "Authenticating..." : "Login"}
                </button>
              </form>
            </div>
          ) : (
            <div className="transition-all duration-500 opacity-100">
              <button 
                onClick={() => setView('login')}
                className="flex items-center gap-2 text-zinc-400 hover:text-maroon-light transition-colors mb-6 font-bold text-sm uppercase tracking-wider"
              >
                <ArrowLeft size={16} />
                Back to login
              </button>
              
              <h2 className="text-3xl font-black mb-2 text-zinc-900">Recovery</h2>
              <p className="text-zinc-500 mb-8 font-medium">Enter your email to receive a reset link</p>

              <form onSubmit={handleForgot} className="space-y-6">
                {message && (
                  <div className={`p-4 rounded-2xl text-sm font-bold border ${
                    message.type === 'success' ? 'bg-brand-olive/10 text-brand-olive border-brand-olive/20' : 'bg-red-50 text-red-700 border-red-100'
                  }`}>
                    {message.text}
                  </div>
                )}

                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-maroon-light transition-colors" />
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    className="w-full pl-12 pr-4 py-4 bg-zinc-50 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-maroon-light/20 focus:border-maroon-light transition-all"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-maroon-dark text-white py-4 rounded-2xl font-black text-lg transition-all shadow-xl shadow-maroon-dark/20 hover:shadow-maroon-dark/30 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70"
                >
                  {loading ? "Processing..." : "Send Reset Link"}
                </button>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
