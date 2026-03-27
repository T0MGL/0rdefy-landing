import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShaderAnimation } from '@/components/ui/shader-animation';
import { Cookie, Shield, FileText, Settings, BarChart3, Lock, Mail, ArrowLeft } from 'lucide-react';

export default function Cookies() {
  const [showAnimation, setShowAnimation] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    const animationShown = localStorage.getItem('whitelist_animation_shown');
    setShowAnimation(animationShown !== 'true');
  }, []);

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-black">
      {/* Background */}
      {showAnimation ? (
        <div className="absolute inset-0 z-0">
          <ShaderAnimation />
        </div>
      ) : (
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-sidebar-background" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(186,234,89,0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,transparent_0%,rgba(186,234,89,0.05)_50%,transparent_100%)] animate-[shimmer_3s_ease-in-out_infinite]" />
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-start min-h-screen px-4 py-12">
        <div className="w-full max-w-4xl animate-fade-in">
          {/* Back Link */}
          <Link to="/" className="inline-flex items-center gap-2 text-white/40 hover:text-primary transition-colors mb-8 text-sm">
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-xl border border-primary/30">
                  <Cookie className="w-10 h-10 text-primary" />
                </div>
                <div className="absolute inset-0 w-20 h-20 bg-primary/30 blur-2xl rounded-full animate-pulse" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent tracking-tight mb-4">
              Cookie Policy
            </h1>
            <p className="text-lg text-white/60 font-light">
              Last updated: March 26, 2026
            </p>
          </div>

          {/* Main Content */}
          <div className="backdrop-blur-2xl bg-gradient-to-br from-black/70 via-black/50 to-black/70 border border-primary/30 rounded-3xl p-8 md:p-12 shadow-[0_0_60px_rgba(186,234,89,0.2)] space-y-8">

            {/* What Are Cookies */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4 flex items-center gap-3">
                <Cookie className="w-6 h-6 text-primary" />
                What Are Cookies
              </h2>
              <div className="space-y-4 text-white/70 font-light leading-relaxed">
                <p>
                  Cookies are small text files that are placed on your device when you visit a website or use a web application. They are widely used to make websites work more efficiently, provide a better user experience, and supply information to site operators.
                </p>
                <p>
                  This Cookie Policy explains how Ordefy E.A.S ("Ordefy", "we", "us") uses cookies and similar technologies on our website at ordefy.io and our application at app.ordefy.io (collectively, the "Service").
                </p>
              </div>
            </section>

            {/* Types of Cookies */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4 flex items-center gap-3">
                <Settings className="w-6 h-6 text-primary" />
                Types of Cookies We Use
              </h2>
              <div className="space-y-6 text-white/70 font-light leading-relaxed">

                {/* Essential */}
                <div className="p-5 rounded-lg bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-2 mb-3">
                    <Lock className="w-5 h-5 text-primary" />
                    <h3 className="text-lg text-white/90 font-normal">Essential Cookies</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30">Required</span>
                  </div>
                  <p className="mb-3">These cookies are strictly necessary for the Service to function. They cannot be disabled without breaking core functionality.</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-2 pr-4 text-white/60 font-normal">Cookie</th>
                          <th className="text-left py-2 pr-4 text-white/60 font-normal">Purpose</th>
                          <th className="text-left py-2 text-white/60 font-normal">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="text-white/50">
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4 font-mono text-xs text-primary/70">sb-access-token</td>
                          <td className="py-2 pr-4">Authentication session token (Supabase)</td>
                          <td className="py-2">Session</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4 font-mono text-xs text-primary/70">sb-refresh-token</td>
                          <td className="py-2 pr-4">Refresh token for seamless re-authentication</td>
                          <td className="py-2">7 days</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4 font-mono text-xs text-primary/70">csrf-token</td>
                          <td className="py-2 pr-4">Cross-site request forgery protection</td>
                          <td className="py-2">Session</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Preference */}
                <div className="p-5 rounded-lg bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-2 mb-3">
                    <Settings className="w-5 h-5 text-primary" />
                    <h3 className="text-lg text-white/90 font-normal">Preference Cookies</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/50 border border-white/10">Optional</span>
                  </div>
                  <p className="mb-3">These cookies remember your preferences and settings to improve your experience.</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-2 pr-4 text-white/60 font-normal">Cookie</th>
                          <th className="text-left py-2 pr-4 text-white/60 font-normal">Purpose</th>
                          <th className="text-left py-2 text-white/60 font-normal">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="text-white/50">
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4 font-mono text-xs text-primary/70">theme</td>
                          <td className="py-2 pr-4">Stores your dark/light mode preference</td>
                          <td className="py-2">1 year</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4 font-mono text-xs text-primary/70">sidebar-collapsed</td>
                          <td className="py-2 pr-4">Remembers sidebar layout preference</td>
                          <td className="py-2">1 year</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4 font-mono text-xs text-primary/70">locale</td>
                          <td className="py-2 pr-4">Stores your language preference</td>
                          <td className="py-2">1 year</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Analytics */}
                <div className="p-5 rounded-lg bg-white/[0.02] border border-white/5">
                  <div className="flex items-center gap-2 mb-3">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    <h3 className="text-lg text-white/90 font-normal">Analytics Cookies</h3>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-white/10 text-white/50 border border-white/10">Optional</span>
                  </div>
                  <p className="mb-3">These cookies help us understand how visitors interact with the Service so we can improve the user experience. We use privacy-respecting analytics that do not track you across other websites.</p>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-white/10">
                          <th className="text-left py-2 pr-4 text-white/60 font-normal">Cookie</th>
                          <th className="text-left py-2 pr-4 text-white/60 font-normal">Purpose</th>
                          <th className="text-left py-2 text-white/60 font-normal">Duration</th>
                        </tr>
                      </thead>
                      <tbody className="text-white/50">
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4 font-mono text-xs text-primary/70">_analytics_id</td>
                          <td className="py-2 pr-4">Anonymous visitor identifier for usage analytics</td>
                          <td className="py-2">1 year</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-2 pr-4 font-mono text-xs text-primary/70">_analytics_session</td>
                          <td className="py-2 pr-4">Groups page views into sessions</td>
                          <td className="py-2">30 min</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </section>

            {/* Local Storage */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4">Local Storage</h2>
              <div className="space-y-4 text-white/70 font-light leading-relaxed">
                <p>In addition to cookies, we use browser local storage for certain functionality:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white/90">Authentication tokens:</strong> stored securely in local storage for session persistence</li>
                  <li><strong className="text-white/90">UI state:</strong> dashboard filters, table column preferences, and onboarding progress</li>
                  <li><strong className="text-white/90">Draft data:</strong> unsaved form data to prevent accidental data loss</li>
                </ul>
                <p>Local storage data is scoped to your browser and never transmitted to third parties.</p>
              </div>
            </section>

            {/* Third Party Cookies */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4">Third-Party Cookies</h2>
              <div className="space-y-4 text-white/70 font-light leading-relaxed">
                <p>Some third-party services integrated into the Service may set their own cookies:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white/90">Stripe:</strong> sets cookies for fraud detection and payment processing security. See <a href="https://stripe.com/cookies-policy/legal" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Stripe's Cookie Policy</a></li>
                  <li><strong className="text-white/90">Vercel:</strong> may set cookies for performance optimization and edge caching. See <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Vercel's Privacy Policy</a></li>
                </ul>
                <p>We do not use any advertising or social media tracking cookies.</p>
              </div>
            </section>

            {/* Managing Cookies */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4">Managing Your Cookie Preferences</h2>
              <div className="space-y-4 text-white/70 font-light leading-relaxed">
                <p>You can control and manage cookies through the following methods:</p>

                <h3 className="text-lg text-white/90 font-normal mt-4 mb-2">Browser settings</h3>
                <p>Most browsers allow you to view, manage, and delete cookies through their settings. Instructions for common browsers:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Google Chrome</a></li>
                  <li><a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a></li>
                  <li><a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Safari</a></li>
                  <li><a href="https://support.microsoft.com/en-us/microsoft-edge/manage-cookies-in-microsoft-edge" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a></li>
                </ul>

                <h3 className="text-lg text-white/90 font-normal mt-4 mb-2">Impact of disabling cookies</h3>
                <p>
                  Disabling essential cookies will prevent you from logging into the Service. Disabling preference cookies means your display settings will not be remembered between visits. Disabling analytics cookies has no impact on Service functionality.
                </p>
              </div>
            </section>

            {/* Updates */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4">Changes to This Cookie Policy</h2>
              <div className="space-y-4 text-white/70 font-light leading-relaxed">
                <p>
                  We may update this Cookie Policy periodically. When we make changes, we will update the "Last updated" date and notify you through the Service if the changes are material.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section className="pt-8 border-t border-white/10">
              <h2 className="text-2xl font-normal text-white mb-4 flex items-center gap-3">
                <Mail className="w-6 h-6 text-primary" />
                Contact Us
              </h2>
              <div className="space-y-2 text-white/70 font-light leading-relaxed">
                <p>If you have questions about our use of cookies, contact us:</p>
                <div className="mt-4 space-y-1">
                  <p><strong className="text-white/90">Email:</strong> <a href="mailto:privacy@ordefy.com" className="text-primary hover:underline">privacy@ordefy.com</a></p>
                  <p><strong className="text-white/90">Website:</strong> <a href="https://ordefy.io" className="text-primary hover:underline">ordefy.io</a></p>
                </div>
              </div>
            </section>

            {/* Related Links */}
            <section className="pt-8 border-t border-white/10">
              <h2 className="text-2xl font-normal text-white mb-4">Related Policies</h2>
              <div className="flex flex-wrap gap-4">
                <Link to="/privacy" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.03] border border-white/10 text-white/70 hover:text-primary hover:border-primary/30 transition-all">
                  <Shield className="w-4 h-4" />
                  Privacy Policy
                </Link>
                <Link to="/terms" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.03] border border-white/10 text-white/70 hover:text-primary hover:border-primary/30 transition-all">
                  <FileText className="w-4 h-4" />
                  Terms of Service
                </Link>
              </div>
            </section>
          </div>

          {/* Footer */}
          <div className="text-center mt-12 pt-8 border-t border-white/10">
            <p className="text-white/30 text-sm font-light">
              &copy; {new Date().getFullYear()} Ordefy E.A.S. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
