"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, User, Send, ShieldAlert } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Invalid username or password.");
      }

      router.push("/admin/dashboard");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#0a1f44] flex items-center justify-center p-6 relative overflow-hidden select-none">
      
      {/* Decorative background grid and gradients */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
      <div className="absolute top-[-20%] left-[-20%] w-[60%] h-[60%] bg-[#005ea6]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-20%] right-[-20%] w-[60%] h-[60%] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      {/* Login Card */}
      <div className="w-full max-w-[420px] bg-[#0f2a52]/40 border border-slate-800 p-8 shadow-2xl relative z-10 backdrop-blur-md">
        
        {/* Logo header */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex items-center gap-3">
            <h1 className="text-4xl font-extrabold text-white leading-none">ICC</h1>
            <div className="h-8 w-[1px] bg-slate-700" />
            <div>
              <p className="text-[8px] font-bold uppercase tracking-wider leading-tight text-slate-300">Innovation</p>
              <p className="text-[8px] font-bold uppercase tracking-wider leading-tight text-slate-300">Consultants &</p>
              <p className="text-[8px] font-bold uppercase tracking-wider leading-tight text-slate-300">Contractors</p>
            </div>
          </div>
          <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-blue-400 mt-6">
            ADMIN SECURE PORTAL
          </span>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-5">
          
          {error && (
            <div className="bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs p-3.5 flex items-start gap-2.5">
              <ShieldAlert className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {/* Username */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="username" className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
              Username
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                <User size={13} />
              </div>
              <input
                type="text"
                id="username"
                name="username"
                required
                value={formData.username}
                onChange={handleChange}
                placeholder="Enter username"
                className="w-full bg-[#0a1f44]/60 border border-slate-800 text-white pl-10 pr-4 py-3 text-xs placeholder:text-slate-600 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="text-[9px] font-bold uppercase tracking-wider text-slate-400">
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                <Lock size={13} />
              </div>
              <input
                type="password"
                id="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                className="w-full bg-[#0a1f44]/60 border border-slate-800 text-white pl-10 pr-4 py-3 text-xs placeholder:text-slate-600 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          {/* Submit button */}
          <button
            type="submit"
            disabled={loading}
            className="
              w-full
              bg-[#005ea6]
              hover:bg-[#004b84]
              disabled:bg-slate-700
              text-white
              py-3.5
              text-xs
              font-bold
              uppercase
              tracking-widest
              transition-all
              flex
              items-center
              justify-center
              gap-2
              mt-4
            "
          >
            {loading ? "Authenticating..." : "Authorize Access"}
            <Send size={11} />
          </button>

        </form>

        <p className="text-[10px] text-slate-500 text-center mt-8">
          Authorized personnel access only. Actions are audited.
        </p>

      </div>

    </div>
  );
}
