export default function Dashboard() {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-b from-navy-900 to-navy-950">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real-Time{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-400">
              Analytics & Insights
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Track performance, coach your team, and measure ROI with comprehensive dashboards
          </p>
        </div>

        {/* Dashboard Preview */}
        <div className="mb-16 p-8 bg-navy-900/50 backdrop-blur-sm border border-navy-700 rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <MetricCard
              label="Active Campaigns"
              value="24"
              change="+12%"
              positive
              icon="📊"
            />
            <MetricCard
              label="Conversion Rate"
              value="47.3%"
              change="+8.2%"
              positive
              icon="📈"
            />
            <MetricCard
              label="Avg Response Time"
              value="1.2s"
              change="-15%"
              positive
              icon="⚡"
            />
          </div>

          {/* Mock Dashboard Visualization */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Channel Performance */}
            <div className="p-6 bg-navy-800/50 border border-navy-700 rounded-xl">
              <h4 className="text-lg font-semibold text-white mb-4">
                Channel Performance
              </h4>
              <div className="space-y-4">
                <ChannelBar channel="Voice Calls" percentage={85} color="cyan" />
                <ChannelBar channel="SMS" percentage={72} color="orange" />
                <ChannelBar channel="Email" percentage={68} color="purple" />
                <ChannelBar channel="Document AI" percentage={91} color="cyan" />
              </div>
            </div>

            {/* Agent Performance */}
            <div className="p-6 bg-navy-800/50 border border-navy-700 rounded-xl">
              <h4 className="text-lg font-semibold text-white mb-4">
                AI Agent Sentiment
              </h4>
              <div className="space-y-4">
                <SentimentBar label="Positive" percentage={62} color="green" />
                <SentimentBar label="Neutral" percentage={31} color="gray" />
                <SentimentBar label="Negative" percentage={7} color="red" />
              </div>
              <div className="mt-6 p-4 bg-navy-900/50 rounded-lg border border-navy-600">
                <div className="text-sm text-gray-400 mb-2">Latest Insight</div>
                <div className="text-white text-sm">
                  "Detected frustration in last call. Suggested transfer to human agent."
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <DashboardFeature
            icon="🎯"
            title="Lead Scoring"
            description="AI-powered lead qualification and prioritization"
          />
          <DashboardFeature
            icon="📞"
            title="Call Coaching"
            description="Real-time feedback and coaching for human agents"
          />
          <DashboardFeature
            icon="🔄"
            title="Transfer Analytics"
            description="Track when and why AI transfers to humans"
          />
          <DashboardFeature
            icon="💡"
            title="A/B Testing"
            description="Optimize messaging and timing automatically"
          />
        </div>

        {/* Call Center Coaching */}
        <div className="mt-16 p-10 bg-gradient-to-r from-purple-900/30 to-navy-800/30 border border-purple-700/50 rounded-3xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Human Call Center Coaching
              </h3>
              <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                AIVI doesn't just replace your call center—it makes it better. Our AI analyzes
                conversations in real-time, providing coaching tips and suggesting when to transfer
                to human agents for better outcomes.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 text-xl">✓</span>
                  <span className="text-gray-300">
                    Real-time sentiment analysis during calls
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 text-xl">✓</span>
                  <span className="text-gray-300">
                    Automated coaching suggestions for human agents
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 text-xl">✓</span>
                  <span className="text-gray-300">
                    Intelligent transfer logic based on conversation context
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-purple-400 text-xl">✓</span>
                  <span className="text-gray-300">
                    Performance dashboards showing close rates by agent
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <CoachingAlert
                type="success"
                message="Great job! Customer expressed interest in premium package."
                action="Suggested: Offer limited-time discount"
              />
              <CoachingAlert
                type="warning"
                message="Customer sounds frustrated with wait time."
                action="Recommended: Apologize and offer callback option"
              />
              <CoachingAlert
                type="info"
                message="Customer mentioned competitor pricing."
                action="Tip: Highlight unique value propositions"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

interface MetricCardProps {
  label: string;
  value: string;
  change: string;
  positive: boolean;
  icon: string;
}

function MetricCard({ label, value, change, positive, icon }: MetricCardProps) {
  return (
    <div className="p-6 bg-navy-800/50 border border-navy-700 rounded-xl">
      <div className="flex items-center justify-between mb-2">
        <span className="text-gray-400 text-sm">{label}</span>
        <span className="text-2xl">{icon}</span>
      </div>
      <div className="text-3xl font-bold text-white mb-1">{value}</div>
      <div className={`text-sm font-medium ${positive ? 'text-green-400' : 'text-red-400'}`}>
        {change} vs last month
      </div>
    </div>
  );
}

interface ChannelBarProps {
  channel: string;
  percentage: number;
  color: 'cyan' | 'orange' | 'purple';
}

function ChannelBar({ channel, percentage, color }: ChannelBarProps) {
  const colorClasses = {
    cyan: 'bg-cyan-400',
    orange: 'bg-orange-500',
    purple: 'bg-purple-500',
  };

  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-400">{channel}</span>
        <span className="text-white font-semibold">{percentage}%</span>
      </div>
      <div className="h-2 bg-navy-700 rounded-full overflow-hidden">
        <div
          className={`h-full ${colorClasses[color]} rounded-full transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

interface SentimentBarProps {
  label: string;
  percentage: number;
  color: 'green' | 'gray' | 'red';
}

function SentimentBar({ label, percentage, color }: SentimentBarProps) {
  const colorClasses = {
    green: 'bg-green-500',
    gray: 'bg-gray-500',
    red: 'bg-red-500',
  };

  return (
    <div>
      <div className="flex justify-between text-sm mb-2">
        <span className="text-gray-400">{label}</span>
        <span className="text-white font-semibold">{percentage}%</span>
      </div>
      <div className="h-2 bg-navy-700 rounded-full overflow-hidden">
        <div
          className={`h-full ${colorClasses[color]} rounded-full transition-all duration-500`}
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
}

interface DashboardFeatureProps {
  icon: string;
  title: string;
  description: string;
}

function DashboardFeature({ icon, title, description }: DashboardFeatureProps) {
  return (
    <div className="p-6 bg-navy-900/50 border border-navy-700 rounded-xl hover:border-cyan-400/50 transition-all">
      <div className="text-4xl mb-3">{icon}</div>
      <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
      <p className="text-sm text-gray-400">{description}</p>
    </div>
  );
}

interface CoachingAlertProps {
  type: 'success' | 'warning' | 'info';
  message: string;
  action: string;
}

function CoachingAlert({ type, message, action }: CoachingAlertProps) {
  const styles = {
    success: 'border-green-500/50 bg-green-500/10',
    warning: 'border-orange-500/50 bg-orange-500/10',
    info: 'border-cyan-400/50 bg-cyan-400/10',
  };

  const icons = {
    success: '✓',
    warning: '⚠',
    info: 'ℹ',
  };

  return (
    <div className={`p-4 border rounded-xl ${styles[type]}`}>
      <div className="flex items-start gap-3">
        <span className="text-2xl">{icons[type]}</span>
        <div className="flex-1">
          <div className="text-white font-medium mb-1">{message}</div>
          <div className="text-sm text-gray-400">{action}</div>
        </div>
      </div>
    </div>
  );
}
