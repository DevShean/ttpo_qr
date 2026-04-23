"use client";

import { useState } from "react";
import { Mail, Lock, Check, X } from "lucide-react";

export default function SignupSection() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  const [loading, setLoading] = useState(false);

  // Derived state to avoid cascading renders
  const validation = {
    hasLength: password.length >= 8,
    hasUppercase: /[A-Z]/.test(password),
    hasSymbol: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password),
  };

  const calculateStrength = () => {
    let s = 0;
    if (password.length > 0) {
      if (validation.hasLength) s++;
      if (validation.hasUppercase) s++;
      if (validation.hasSymbol) s++;
      if (password.length >= 12) s++;
    }
    return s;
  };

  const strength = calculateStrength();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);

    if (!validation.hasLength || !validation.hasUppercase || !validation.hasSymbol) {
      setMessage({ type: 'error', text: "Password does not meet requirements." });
      return;
    }

    if (password !== confirmPassword) {
      setMessage({ type: 'error', text: "Passwords do not match." });
      return;
    }

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setMessage({ type: 'success', text: "Account created successfully! Check your email." });
      setLoading(false);
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    }, 1500);
  };

  const strengthLabels = ['Weak', 'Fair', 'Good', 'Strong'];
  const strengthColors = ['bg-red-500', 'bg-yellow-500', 'bg-blue-500', 'bg-green-500'];

  return (
    <section id="signup" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="max-w-md mx-auto bg-white p-10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-zinc-100">
          <h2 className="text-3xl font-bold text-gray-900 mb-3 text-center">
            Create an Account
          </h2>
          <p className="mb-8 text-gray-600 text-center">
            Register to access your account and stay updated.
          </p>

          {message && (
            <div className={`mb-6 p-4 rounded-xl text-sm font-medium border ${
              message.type === 'success' 
                ? 'bg-brand-olive/10 text-brand-olive border-brand-olive/20' 
                : 'bg-red-50 text-red-700 border-red-100'
            }`}>
              {message.text}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div className="relative group">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-maroon-light transition-colors" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-3.5 bg-zinc-50 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-maroon-light/20 focus:border-maroon-light transition-all"
              />
            </div>

            {/* Password */}
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-maroon-light transition-colors" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                className="w-full pl-12 pr-4 py-3.5 bg-zinc-50 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-maroon-light/20 focus:border-maroon-light transition-all"
              />
            </div>

            {/* Confirm Password */}
            <div className="relative group">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 group-focus-within:text-maroon-light transition-colors" />
              <input
                type="password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm Password"
                className="w-full pl-12 pr-4 py-3.5 bg-zinc-50 border border-zinc-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-maroon-light/20 focus:border-maroon-light transition-all"
              />
            </div>

            {/* Strength Meter */}
            <div className="space-y-2">
              <div className="flex gap-1.5 h-1.5">
                {[0, 1, 2, 3].map((i) => (
                  <div 
                    key={i} 
                    className={`flex-1 rounded-full transition-all duration-500 ${
                      i < strength ? strengthColors[strength - 1] : 'bg-zinc-200'
                    }`} 
                  />
                ))}
              </div>
              <p className="text-[10px] uppercase tracking-wider font-bold text-zinc-400">
                Security Level: <span className={strength > 0 ? 'text-zinc-700' : ''}>{strength > 0 ? strengthLabels[strength - 1] : '-'}</span>
              </p>
            </div>

            {/* Requirements */}
            <div className="bg-zinc-50 p-4 rounded-2xl border border-zinc-100 space-y-2.5">
              <RequirementItem met={validation.hasLength} label="At least 8 characters" />
              <RequirementItem met={validation.hasUppercase} label="One uppercase letter (A-Z)" />
              <RequirementItem met={validation.hasSymbol} label="One symbol (!@#$%^&*)" />
            </div>

            {/* Match Status */}
            {confirmPassword && (
              <div className={`flex items-center gap-2 text-xs font-bold ${password === confirmPassword ? 'text-brand-olive' : 'text-red-500'}`}>
                {password === confirmPassword ? <Check size={14} /> : <X size={14} />}
                {password === confirmPassword ? 'Passwords match' : 'Passwords do not match'}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-maroon-light hover:bg-maroon-dark text-white py-4 rounded-2xl font-bold transition-all shadow-lg shadow-maroon-dark/10 hover:shadow-maroon-dark/20 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Creating Account..." : "Sign Up"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

function RequirementItem({ met, label }: { met: boolean; label: string }) {
  return (
    <div className={`flex items-center gap-2.5 text-xs transition-colors ${met ? 'text-brand-olive' : 'text-zinc-500'}`}>
      <div className={`w-4 h-4 rounded-full flex items-center justify-center transition-colors ${met ? 'bg-brand-olive text-white' : 'bg-zinc-200 text-zinc-400'}`}>
        {met ? <Check size={10} /> : <X size={10} />}
      </div>
      <span className={met ? 'font-medium' : ''}>{label}</span>
    </div>
  );
}
