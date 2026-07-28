import { Award, ShieldCheck, TrendingUp, Users } from "lucide-react";

export const BENEFITS = [
  {
    icon: <Award className="w-6 h-6 text-cyan-400" />,
    title: "Industry Leadership",
    description: "Collaborate on award-winning design-build workspaces for fortune-500 brands."
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-cyan-400" />,
    title: "Rigorous Standards",
    description: "Work within a technical environment prioritizing precise scheduling and quality execution."
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-cyan-400" />,
    title: "Accelerated Growth",
    description: "Fast-track your construction or design career with challenging leadership assignments."
  },
  {
    icon: <Users className="w-6 h-6 text-cyan-400" />,
    title: "Technical Culture",
    description: "Join structural engineers, MEP specialists, and site planners who speak data and blueprints."
  }
];

export default function CareersBenefits() {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-10 py-16 lg:py-24">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#005ea6] block mb-3 font-mono">
          LIFE AT CENTRIONYX
        </span>
        <h2 className="text-3xl font-bold tracking-tight text-[#0a1f44] font-serif">
          Why Build Your Career With Us?
        </h2>
        <div className="w-12 h-[3px] bg-[#005ea6] mx-auto mt-4 rounded-full" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {BENEFITS.map((b, idx) => (
          <div 
            key={idx} 
            className="bg-white border-2 border-slate-100 p-8 rounded-2xl shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl bg-[#0a1f44] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-md">
              {b.icon}
            </div>
            <h3 className="text-lg font-bold text-[#0a1f44] mb-3 group-hover:text-[#005ea6] transition-colors font-serif">
              {b.title}
            </h3>
            <p className="text-slate-500 text-sm leading-relaxed font-light font-sans">
              {b.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
