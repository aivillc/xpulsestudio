export default function PainPoints() {
  return (
    <section className="relative py-20 px-6 bg-gradient-to-b from-navy-950 to-navy-900 border-y border-navy-800">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Stop Losing Revenue to Slow Follow-Ups
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Every minute you wait to contact a lead, your conversion rate drops by 10%.
            Your competitors respond in seconds. Can you afford to wait?
          </p>
        </div>

        {/* Pain Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <PainPointCard
            icon="💸"
            problem="Leads Go Cold"
            stat="80% of leads never get contacted"
            solution="AIVI responds in 13 seconds, every time"
          />
          <PainPointCard
            icon="⏰"
            problem="Manual Follow-Ups"
            stat="Your team wastes 20+ hours/week"
            solution="100% automated multi-channel outreach"
          />
          <PainPointCard
            icon="📉"
            problem="Low Conversion Rates"
            stat="You're leaving $50K+/month on the table"
            solution="391% conversion increase guaranteed"
          />
        </div>

        {/* Urgency CTA */}
        <div className="mt-12 text-center">
          <div className="inline-block p-6 bg-gradient-to-r from-orange-500/10 to-purple-500/10 border border-orange-500/30 rounded-2xl">
            <p className="text-white text-lg mb-3">
              <span className="font-bold text-orange-400">Limited:</span> We're onboarding only 10 new clients this month
            </p>
            <p className="text-sm text-gray-400">
              Current spots remaining: <span className="text-cyan-400 font-bold">6</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

interface PainPointCardProps {
  icon: string;
  problem: string;
  stat: string;
  solution: string;
}

function PainPointCard({ icon, problem, stat, solution }: PainPointCardProps) {
  return (
    <div className="p-6 bg-navy-900/50 border border-navy-700 rounded-xl hover:border-orange-500/50 transition-all">
      <div className="text-5xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-white mb-2">{problem}</h3>
      <p className="text-red-400 font-semibold mb-3">{stat}</p>
      <div className="h-px bg-gradient-to-r from-cyan-400/50 to-transparent mb-3" />
      <p className="text-cyan-400 text-sm">✓ {solution}</p>
    </div>
  );
}
