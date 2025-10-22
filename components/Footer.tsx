export default function Footer() {
  return (
    <footer id="contact" className="relative py-16 px-6 bg-navy-950 border-t border-navy-800">
      <div className="max-w-7xl mx-auto">
        {/* CTA Section */}
        <div className="text-center mb-16 pb-16 border-b border-navy-800">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-cyan-400">
              Customer Experience?
            </span>
          </h2>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Start with a live demo or speak with our team to see how AIVI can drive results for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg">
              Start Free Demo
            </button>
            <button className="px-8 py-4 bg-navy-800 hover:bg-navy-700 text-white font-semibold rounded-lg transition-all border border-cyan-400/30 hover:border-cyan-400">
              Talk to Sales
            </button>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Features
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#integrations" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Industries</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Trucking & Logistics
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Financial Services
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Insurance
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Healthcare
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-navy-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-cyan-400">
                AIVI
              </span>
              <span className="text-gray-500 text-sm">
                © 2025 AIVI. All rights reserved.
              </span>
            </div>

            <div className="flex items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors text-sm">
                Security
              </a>
            </div>
          </div>

          <div className="mt-6 text-center text-sm text-gray-500">
            <p>
              Powered by xPulse Technology • Built by experts from Amazon, Five9 & Cisco
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
