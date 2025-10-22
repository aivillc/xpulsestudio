export default function Features() {
  return (
    <section id="features" className="relative py-24 px-6 bg-navy-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Multi-Channel AI{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-cyan-400">
              Capabilities
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Seamlessly engage customers across every channel with AI-powered automation
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard
            icon="🎙️"
            title="AI Voice Calls"
            description="Natural-sounding voice agents that handle calls, qualify leads, answer questions, and transfer to human agents when needed."
            features={[
              'Human-like conversations',
              'Real-time transcription',
              'Sentiment analysis',
              'Intelligent call routing',
            ]}
          />

          <FeatureCard
            icon="💬"
            title="SMS Automation"
            description="Reach customers instantly with personalized text messages triggered by CRM events or business operations."
            features={[
              'Two-way conversations',
              'Template library',
              'Automated follow-ups',
              'Delivery tracking',
            ]}
          />

          <FeatureCard
            icon="📧"
            title="Email Campaigns"
            description="Send targeted, personalized email campaigns that nurture leads and drive conversions."
            features={[
              'Personalization engine',
              'A/B testing',
              'Performance analytics',
              'Automated sequences',
            ]}
          />

          <FeatureCard
            icon="📄"
            title="Document Intelligence"
            description="OCR + LLM technology extracts data from documents, invoices, and forms automatically."
            features={[
              'OCR text extraction',
              'Data validation',
              'Auto-categorization',
              'CRM auto-update',
            ]}
          />

          <FeatureCard
            icon="🔗"
            title="CRM Integration"
            description="Connect with any CRM platform. Trigger workflows based on CRM events and keep data in sync."
            features={[
              'HubSpot, Salesforce, etc.',
              'Real-time sync',
              'Custom field mapping',
              'Bi-directional updates',
            ]}
          />

          <FeatureCard
            icon="📊"
            title="Analytics Dashboard"
            description="Track performance, monitor agent behavior, and measure ROI with comprehensive dashboards."
            features={[
              'Real-time metrics',
              'Agent coaching insights',
              'Conversion tracking',
              'Custom reporting',
            ]}
          />
        </div>

        {/* Additional Capabilities */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 bg-gradient-to-br from-navy-900/50 to-navy-800/30 border border-navy-700 rounded-2xl">
            <div className="text-4xl mb-4">🔒</div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Enterprise-Grade Security
            </h3>
            <p className="text-gray-400 mb-4">
              PII data in transit only. SOC 2 compliant infrastructure with end-to-end encryption.
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span>
                HIPAA & SOC 2 compliant
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span>
                End-to-end encryption
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span>
                PII data in transit only
              </li>
              <li className="flex items-center gap-2">
                <span className="text-cyan-400">✓</span>
                Regular security audits
              </li>
            </ul>
          </div>

          <div className="p-8 bg-gradient-to-br from-purple-900/30 to-navy-800/30 border border-purple-700/50 rounded-2xl">
            <div className="text-4xl mb-4">⚡</div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Powered by xPulse Technology
            </h3>
            <p className="text-gray-400 mb-4">
              Proprietary AI decision engine built by experts from Amazon, Five9, and Cisco with 23+ years of experience.
            </p>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-center gap-2">
                <span className="text-purple-400">✓</span>
                Real-time decision making
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">✓</span>
                Continuous learning
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">✓</span>
                Optimized for conversions
              </li>
              <li className="flex items-center gap-2">
                <span className="text-purple-400">✓</span>
                Battle-tested at scale
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
}

function FeatureCard({ icon, title, description, features }: FeatureCardProps) {
  return (
    <div className="group p-8 bg-navy-900/50 backdrop-blur-sm border border-navy-700 rounded-2xl hover:border-cyan-400/50 transition-all hover:shadow-lg hover:shadow-cyan-400/10">
      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-2xl font-bold text-white mb-3">{title}</h3>
      <p className="text-gray-400 mb-6 leading-relaxed">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
            <span className="text-cyan-400">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
