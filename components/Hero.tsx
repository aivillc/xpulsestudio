import DemoForm from './DemoForm';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden">
      {/* Animated Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(139,92,246,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,107,53,0.08),transparent_40%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(34,211,238,0.08),transparent_40%)]" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_80%)]" />

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          {/* Logo/Brand */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-purple-500 to-cyan-400 mb-2">
              AIVI
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-500 to-cyan-400 mx-auto rounded-full" />
          </div>

          {/* Main Headline */}
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 max-w-5xl mx-auto">
            Proactive AI for{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
              Customer Experience
            </span>
          </h2>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-6 leading-relaxed">
            CRM Triggers, Voice, SMS, Email & Document Intelligence
          </p>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            From lead to close: a unified platform and managed service that automates voice, text,
            document interpretation and CRM integration — designed for industries like trucking, finance, and more.
          </p>

          {/* Key Features Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            <FeaturePill icon="🎙️" text="AI Voice" />
            <FeaturePill icon="💬" text="SMS Automation" />
            <FeaturePill icon="📧" text="Email Campaigns" />
            <FeaturePill icon="📄" text="OCR + Document AI" />
            <FeaturePill icon="🔗" text="CRM Integration" />
            <FeaturePill icon="🔒" text="Secure PII Handling" />
          </div>
        </div>

        {/* Demo Form */}
        <DemoForm />

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-500 mb-4">Trusted by leading companies in</p>
          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-gray-400">
            <span className="px-4 py-2 bg-navy-900/50 rounded-full border border-navy-700">
              Trucking & Logistics
            </span>
            <span className="px-4 py-2 bg-navy-900/50 rounded-full border border-navy-700">
              Financial Services
            </span>
            <span className="px-4 py-2 bg-navy-900/50 rounded-full border border-navy-700">
              Insurance
            </span>
            <span className="px-4 py-2 bg-navy-900/50 rounded-full border border-navy-700">
              Healthcare
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-gray-500"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}

function FeaturePill({ icon, text }: { icon: string; text: string }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-2 bg-navy-800/60 backdrop-blur-sm border border-navy-600 rounded-full text-sm font-medium text-gray-300 hover:border-cyan-400/50 hover:bg-navy-800 transition-all">
      <span className="text-lg">{icon}</span>
      {text}
    </span>
  );
}
