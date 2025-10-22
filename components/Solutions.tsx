export default function Solutions() {
  return (
    <section id="solutions" className="relative py-24 px-6 bg-gradient-to-b from-navy-950 to-navy-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Choose Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">
              Implementation Path
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Whether you want full control or turnkey deployment, we've got you covered
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* SaaS Platform */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
            <div className="relative p-8 bg-navy-900 border-2 border-navy-700 group-hover:border-cyan-400/50 rounded-3xl transition-all">
              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">🛠️</div>
                <h3 className="text-3xl font-bold text-white">SaaS Platform</h3>
              </div>

              <p className="text-lg text-gray-400 mb-8">
                Self-service platform for teams who want full control and flexibility
              </p>

              <div className="space-y-4 mb-8">
                <Feature text="Complete platform access" />
                <Feature text="Drag-and-drop workflow builder" />
                <Feature text="Pre-built templates & integrations" />
                <Feature text="Real-time analytics dashboard" />
                <Feature text="API access for custom builds" />
                <Feature text="Community support + documentation" />
              </div>

              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-2">Best for:</div>
                <div className="flex flex-wrap gap-2">
                  <Tag text="Technical teams" />
                  <Tag text="Iterative testing" />
                  <Tag text="Custom workflows" />
                </div>
              </div>

              <button className="w-full py-4 px-6 bg-navy-800 hover:bg-navy-700 text-white font-semibold rounded-lg transition-all border border-cyan-400/30 hover:border-cyan-400">
                Explore Platform
              </button>
            </div>
          </div>

          {/* Managed Service */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-purple-500/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all opacity-100" />
            <div className="relative p-8 bg-gradient-to-br from-navy-900 to-navy-800 border-2 border-orange-500 rounded-3xl transition-all shadow-xl shadow-orange-500/20">
              <div className="absolute top-4 right-4 px-3 py-1 bg-orange-500 text-white text-xs font-bold rounded-full">
                POPULAR
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="text-4xl">🚀</div>
                <h3 className="text-3xl font-bold text-white">Managed Service</h3>
              </div>

              <p className="text-lg text-gray-400 mb-8">
                Turnkey solution with white-glove implementation and ongoing optimization
              </p>

              <div className="space-y-4 mb-8">
                <Feature text="Dedicated account manager" highlight />
                <Feature text="Custom workflow design & setup" highlight />
                <Feature text="Complete integration handling" highlight />
                <Feature text="Ongoing optimization & A/B testing" highlight />
                <Feature text="24/7 monitoring & support" highlight />
                <Feature text="Human call center coaching" highlight />
              </div>

              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-2">Best for:</div>
                <div className="flex flex-wrap gap-2">
                  <Tag text="Enterprise teams" highlight />
                  <Tag text="Fast deployment" highlight />
                  <Tag text="Complex integrations" highlight />
                </div>
              </div>

              <button className="w-full py-4 px-6 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg transition-all transform hover:scale-[1.02] shadow-lg">
                Get Started
              </button>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Industry Solutions
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <UseCaseCard
              industry="Trucking & Logistics"
              icon="🚛"
              useCases={[
                'Invoice factoring automation',
                'Insurance renewal reminders',
                'Broker-to-driver communication',
                'Load confirmation & updates',
              ]}
            />
            <UseCaseCard
              industry="Financial Services"
              icon="💰"
              useCases={[
                'Debt consolidation outreach',
                'Credit application processing',
                'Payment reminders',
                'Document verification',
              ]}
            />
            <UseCaseCard
              industry="Insurance"
              icon="🛡️"
              useCases={[
                'Policy renewal campaigns',
                'Claims processing automation',
                'Lead qualification',
                'Customer onboarding',
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function Feature({ text, highlight = false }: { text: string; highlight?: boolean }) {
  return (
    <div className="flex items-center gap-3">
      <span className={`text-lg ${highlight ? 'text-orange-400' : 'text-cyan-400'}`}>✓</span>
      <span className="text-gray-300">{text}</span>
    </div>
  );
}

function Tag({ text, highlight = false }: { text: string; highlight?: boolean }) {
  return (
    <span
      className={`px-3 py-1 text-xs font-medium rounded-full ${
        highlight
          ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30'
          : 'bg-cyan-400/20 text-cyan-400 border border-cyan-400/30'
      }`}
    >
      {text}
    </span>
  );
}

interface UseCaseCardProps {
  industry: string;
  icon: string;
  useCases: string[];
}

function UseCaseCard({ industry, icon, useCases }: UseCaseCardProps) {
  return (
    <div className="p-6 bg-navy-900/50 backdrop-blur-sm border border-navy-700 rounded-xl hover:border-purple-500/50 transition-all">
      <div className="text-4xl mb-3">{icon}</div>
      <h4 className="text-xl font-bold text-white mb-4">{industry}</h4>
      <ul className="space-y-2">
        {useCases.map((useCase, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-gray-400">
            <span className="text-purple-400 mt-0.5">•</span>
            {useCase}
          </li>
        ))}
      </ul>
    </div>
  );
}
