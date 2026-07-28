import { Send } from "lucide-react";

export default function SpeculativeInquiry() {
  return (
    <section className="bg-[#0a1f44] text-white py-20 relative overflow-hidden">
      {/* Subtle grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)",
          backgroundSize: "28px 28px"
        }}
      />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10 space-y-6">
        <span className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400 block font-mono">
          SPECULATIVE APPLICATIONS
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold font-serif">
          Don't See a Perfect Fit?
        </h2>
        <p className="text-slate-350 text-sm leading-relaxed max-w-xl mx-auto font-light font-sans">
          We are always looking for exceptional engineers, project planners, and MEP designers. Send your unsolicited portfolio or credentials directly to us.
        </p>
        <a
          href="mailto:careers@icc.co.in"
          className="inline-flex items-center gap-2 bg-gradient-to-r from-[#005ea6] to-blue-500 text-white text-[11px] font-bold uppercase tracking-widest px-8 py-4 rounded-xl shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 font-mono"
        >
          Send Speculative Resume
          <Send size={12} />
        </a>
      </div>
    </section>
  );
}
