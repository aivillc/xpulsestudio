export default function Integrations() {
  return (
    <section id="integrations" className="relative py-24 px-6 bg-navy-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Seamless{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Integrations
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Connect with your existing tools and workflows. No complex setup required.
          </p>
        </div>

        {/* CRM Integrations */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            CRM Platforms
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <IntegrationCard name="HubSpot" category="CRM" />
            <IntegrationCard name="Salesforce" category="CRM" />
            <IntegrationCard name="Zoho CRM" category="CRM" />
            <IntegrationCard name="Pipedrive" category="CRM" />
            <IntegrationCard name="Monday.com" category="CRM" />
            <IntegrationCard name="Microsoft Dynamics" category="CRM" />
            <IntegrationCard name="Copper" category="CRM" />
            <IntegrationCard name="Custom CRM" category="API" />
          </div>
        </div>

        {/* Automation & Workflow */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Automation & Workflows
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <IntegrationCard name="n8n" category="Workflow" highlight />
            <IntegrationCard name="Zapier" category="Automation" />
            <IntegrationCard name="Make (Integromat)" category="Automation" />
            <IntegrationCard name="Webhooks" category="API" />
          </div>
        </div>

        {/* Communication Channels */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Communication Channels
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <IntegrationCard name="Twilio" category="Voice & SMS" />
            <IntegrationCard name="SendGrid" category="Email" />
            <IntegrationCard name="AWS SES" category="Email" />
            <IntegrationCard name="Mailgun" category="Email" />
          </div>
        </div>

        {/* Financial & Data */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Financial & Data Services
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <IntegrationCard name="Credit Bureaus" category="Credit Pulls" />
            <IntegrationCard name="Plaid" category="Banking" />
            <IntegrationCard name="Stripe" category="Payments" />
            <IntegrationCard name="DocuSign" category="Documents" />
          </div>
        </div>

        {/* Key Integration Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
          <div className="text-center p-8 bg-navy-900/50 border border-navy-700 rounded-2xl">
            <div className="text-5xl mb-4">⚡</div>
            <h4 className="text-xl font-bold text-white mb-3">Real-Time Sync</h4>
            <p className="text-gray-400">
              Bi-directional data sync keeps your CRM and AIVI always in sync, triggering actions in real-time.
            </p>
          </div>

          <div className="text-center p-8 bg-navy-900/50 border border-navy-700 rounded-2xl">
            <div className="text-5xl mb-4">🔐</div>
            <h4 className="text-xl font-bold text-white mb-3">Secure PII Handling</h4>
            <p className="text-gray-400">
              All personally identifiable information is encrypted in transit with zero storage, ensuring compliance.
            </p>
          </div>

          <div className="text-center p-8 bg-navy-900/50 border border-navy-700 rounded-2xl">
            <div className="text-5xl mb-4">🎯</div>
            <h4 className="text-xl font-bold text-white mb-3">Custom Field Mapping</h4>
            <p className="text-gray-400">
              Map any custom fields from your CRM to AIVI workflows with our flexible field mapping system.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center p-12 bg-gradient-to-r from-navy-900/80 to-navy-800/80 border border-cyan-400/30 rounded-3xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Don't See Your Integration?
          </h3>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            We build custom integrations for our managed service clients. Our API-first architecture can connect to virtually any system.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg">
            Request Custom Integration
          </button>
        </div>
      </div>
    </section>
  );
}

interface IntegrationCardProps {
  name: string;
  category: string;
  highlight?: boolean;
}

function IntegrationCard({ name, category, highlight = false }: IntegrationCardProps) {
  return (
    <div
      className={`p-6 rounded-xl border transition-all hover:scale-105 ${
        highlight
          ? 'bg-orange-500/10 border-orange-500/50 hover:border-orange-400'
          : 'bg-navy-900/50 border-navy-700 hover:border-cyan-400/50'
      }`}
    >
      <div className="flex items-center justify-center h-12 mb-3">
        <div className={`text-2xl font-bold ${highlight ? 'text-orange-400' : 'text-cyan-400'}`}>
          {name.charAt(0)}
        </div>
      </div>
      <h4 className="text-white font-semibold text-center mb-1">{name}</h4>
      <p className={`text-xs text-center ${highlight ? 'text-orange-400' : 'text-gray-500'}`}>
        {category}
      </p>
    </div>
  );
}
