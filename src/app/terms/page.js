export default function TermsPage() {
  return (
    <div className="w-full bg-[#f7f8fa] text-slate-800 pb-16">
      <section className="w-full bg-[#0a1f44] text-white py-12 relative overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-5 lg:px-8">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight font-serif">Terms & Conditions</h1>
          <p className="text-slate-400 text-xs mt-2">Last updated: July 1, 2026</p>
        </div>
      </section>

      <section className="max-w-[900px] mx-auto px-5 py-12 bg-white border border-slate-200 mt-10 shadow-sm leading-relaxed text-sm text-slate-600 space-y-6">
        <h2 className="text-[#0a1f44] font-serif font-bold text-lg">1. Agreement to Terms</h2>
        <p>
          By accessing or utilizing our website, you agree to comply with and be bound by these Terms & Conditions. If you do not agree with any part of these terms, you must refrain from using the site.
        </p>

        <h2 className="text-[#0a1f44] font-serif font-bold text-lg">2. Intellectual Property</h2>
        <p>
          All site designs, copy structure, graphics, layouts, and photographic representations of commercial projects are the intellectual property of Innovation Consultants & Contractors (ICC) and may not be reproduced, copied, or used for commercial purposes without our express written permission.
        </p>

        <h2 className="text-[#0a1f44] font-serif font-bold text-lg">3. Service Disclaimer</h2>
        <p>
          The information displayed on this website is for general project capability reference and advisory guidance purposes. Any contractual binding commitments, costing estimates, and execution scopes will be negotiated and signed under a separate, formal Master Services Agreement (MSA) between ICC and the client.
        </p>

        <h2 className="text-[#0a1f44] font-serif font-bold text-lg">4. Governing Law</h2>
        <p>
          These terms and conditions are governed by the laws of India. Any disputes arising in connection with website access or usage will be subject to the exclusive jurisdiction of the competent courts in Bengaluru, India.
        </p>

        <h2 className="text-[#0a1f44] font-serif font-bold text-lg">5. Modifications</h2>
        <p>
          ICC reserves the right to modify these terms or update details of service tracks at any time. Continued use of our site following changes indicates your acceptance of the updated terms.
        </p>
      </section>
    </div>
  );
}
