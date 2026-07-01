export default function PrivacyPage() {
  return (
    <div className="w-full bg-[#f7f8fa] text-slate-800 pb-16">
      <section className="w-full bg-[#0a1f44] text-white py-12 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-8">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight font-serif">Privacy Policy</h1>
          <p className="text-slate-400 text-xs mt-2">Last updated: July 1, 2026</p>
        </div>
      </section>
      
      <section className="max-w-[900px] mx-auto px-5 py-12 bg-white border border-slate-200 mt-10 shadow-sm leading-relaxed text-sm text-slate-600 space-y-6">
        <h2 className="text-[#0a1f44] font-serif font-bold text-lg">1. Information We Collect</h2>
        <p>
          We collect information that you voluntarily provide to us when you fill out contact enquiry forms or apply for job openings on our site, including your name, telephone number, email address, project type interest, and cover letter information.
        </p>

        <h2 className="text-[#0a1f44] font-serif font-bold text-lg">2. How We Use Your Information</h2>
        <p>
          We use the information we collect to communicate with you about your fit-out project advisory requests, schedule consultations, process job applications, and update you on our services and insights.
        </p>

        <h2 className="text-[#0a1f44] font-serif font-bold text-lg">3. Information Sharing & Disclosure</h2>
        <p>
          We do not sell, rent, or trade your personal information with third parties. We may share information only with authorized sub-contractors or consultants working directly under ICC project oversight to deliver services to you.
        </p>

        <h2 className="text-[#0a1f44] font-serif font-bold text-lg">4. Data Security</h2>
        <p>
          We implement standard physical and digital security measures to guard against unauthorized access, loss, or alteration of personal information collected through our online forms.
        </p>

        <h2 className="text-[#0a1f44] font-serif font-bold text-lg">5. Contact Us</h2>
        <p>
          If you have any questions about this Privacy Policy, please reach us via email at <a href="mailto:info@icc.co.in" className="text-blue-500 underline font-semibold">info@icc.co.in</a>.
        </p>
      </section>
    </div>
  );
}
