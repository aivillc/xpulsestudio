export default function Testimonials() {
  return (
    <section className="relative py-24 px-6 bg-navy-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trusted by{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-purple-500">
              Industry Leaders
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            See how AIVI transforms customer engagement across industries
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <TestimonialCard
            quote="AIVI successfully grew our lead remarketing campaigns. From 1 in 5 using email to almost 1 in 2 using their AI SMS. Increasing our conversion rate by 120%."
            author="Marketing Director"
            role="Lead Generation Manager"
            company="AIVI Client"
            industry="Lead Generation"
          />
          <TestimonialCard
            quote="The document intelligence feature alone saved us 20 hours per week. OCR + LLM automatically processes invoices and updates our CRM."
            author="Michael Chen"
            role="Director of Finance"
            company="Capital Solutions Group"
            industry="Financial Services"
          />
          <TestimonialCard
            quote="Their managed service team had us up and running in 48 hours. The ROI was immediate—we saw 35% increase in policy renewals."
            author="Jennifer Adams"
            role="Chief Marketing Officer"
            company="Shield Insurance Partners"
            industry="Insurance"
          />
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <StatCard number="50%" label="Dead Leads Revived" />
          <StatCard number="391%" label="Conversion Increase" />
          <StatCard number="120%" label="Client ROI Boost" />
          <StatCard number="13s" label="Response Time" />
        </div>

        {/* Security & Compliance */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Security & Compliance
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            <ComplianceBadge text="SOC 2 Certified" />
            <ComplianceBadge text="HIPAA Compliant" />
            <ComplianceBadge text="GDPR Ready" />
            <ComplianceBadge text="PII In-Transit Only" />
            <ComplianceBadge text="End-to-End Encryption" />
            <ComplianceBadge text="Regular Security Audits" />
          </div>
        </div>
      </div>
    </section>
  );
}

interface TestimonialCardProps {
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: string;
}

function TestimonialCard({ quote, author, role, company, industry }: TestimonialCardProps) {
  return (
    <div className="p-8 bg-navy-900/50 backdrop-blur-sm border border-navy-700 rounded-2xl hover:border-purple-500/50 transition-all">
      <div className="text-purple-400 text-4xl mb-4">"</div>
      <p className="text-gray-300 mb-6 leading-relaxed">{quote}</p>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
          {author.charAt(0)}
        </div>
        <div>
          <div className="text-white font-semibold">{author}</div>
          <div className="text-sm text-gray-400">{role}</div>
          <div className="text-sm text-gray-500">{company}</div>
        </div>
      </div>
      <div className="mt-4 inline-block px-3 py-1 bg-cyan-400/10 border border-cyan-400/30 rounded-full text-xs text-cyan-400">
        {industry}
      </div>
    </div>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center p-6 bg-navy-900/50 border border-navy-700 rounded-xl">
      <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500 mb-2">
        {number}
      </div>
      <div className="text-sm text-gray-400">{label}</div>
    </div>
  );
}

function ComplianceBadge({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-3 bg-navy-900/50 border border-green-500/30 rounded-lg">
      <span className="text-green-400 text-lg">✓</span>
      <span className="text-gray-300 font-medium">{text}</span>
    </div>
  );
}
