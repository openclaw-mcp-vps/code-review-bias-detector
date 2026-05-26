export default function Home() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-20">
      {/* Hero */}
      <section className="text-center mb-24">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For Engineering Managers &amp; HR Teams
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Detect Bias in<br />
          <span className="text-[#58a6ff]">Code Review Comments</span>
        </h1>
        <p className="text-[#8b949e] text-lg max-w-xl mx-auto mb-8">
          Paste any code review comment and get instant AI-powered analysis identifying biased language patterns — with neutral, constructive alternatives suggested automatically.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Start for $13/mo
        </a>
        <p className="text-[#8b949e] text-sm mt-4">Cancel anytime. No setup fees.</p>
      </section>

      {/* Pricing */}
      <section className="mb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="border border-[#58a6ff] rounded-xl p-8 bg-[#161b22] max-w-sm mx-auto text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$13</p>
          <p className="text-[#8b949e] mb-6">/month</p>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited comment analyses",
              "Bias pattern detection with explanations",
              "Neutral language suggestions",
              "Team dashboard & trend tracking",
              "Export reports as PDF or CSV",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-start gap-2">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span className="text-[#c9d1d9]">{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-6 py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-6">
          {[
            {
              q: "What kinds of bias does it detect?",
              a: "The tool identifies gendered language, condescending tone, vague criticism, cultural assumptions, and other patterns known to create hostile or exclusionary review environments."
            },
            {
              q: "Is my team's code review data stored?",
              a: "No. Comments are analyzed in real time and never persisted. Your intellectual property stays private."
            },
            {
              q: "Can I use this for my whole engineering org?",
              a: "Yes. The Pro plan covers unlimited users under one account, making it ideal for teams of any size."
            }
          ].map(({ q, a }) => (
            <div key={q} className="border border-[#30363d] rounded-lg p-6 bg-[#161b22]">
              <p className="font-semibold text-white mb-2">{q}</p>
              <p className="text-[#8b949e] text-sm leading-relaxed">{a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} Code Review Bias Detector. All rights reserved.
      </footer>
    </main>
  )
}
