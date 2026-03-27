import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShaderAnimation } from '@/components/ui/shader-animation';
import { Scale, FileText, Shield, AlertTriangle, CreditCard, Ban, RefreshCw, Globe, Mail, ArrowLeft } from 'lucide-react';

export default function Terms() {
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
                  <Scale className="w-10 h-10 text-primary" />
                </div>
                <div className="absolute inset-0 w-20 h-20 bg-primary/30 blur-2xl rounded-full animate-pulse" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent tracking-tight mb-4">
              Terms of Service
            </h1>
            <p className="text-lg text-white/60 font-light">
              Last updated: March 26, 2026
            </p>
          </div>

          {/* Main Content */}
          <div className="backdrop-blur-2xl bg-gradient-to-br from-black/70 via-black/50 to-black/70 border border-primary/30 rounded-3xl p-8 md:p-12 shadow-[0_0_60px_rgba(186,234,89,0.2)] space-y-8">

            {/* Agreement */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-primary" />
                Agreement to Terms
              </h2>
              <div className="space-y-4 text-white/70 font-light leading-relaxed">
                <p>
                  These Terms of Service ("Terms") constitute a legally binding agreement between you ("Merchant", "you", or "your") and Ordefy E.A.S ("Ordefy", "we", "us", or "our"), governing your access to and use of the Ordefy platform, including our website at ordefy.io, web application at app.ordefy.io, Shopify application, APIs, and all related services (collectively, the "Service").
                </p>
                <p>
                  By creating an account, installing our Shopify app, or otherwise accessing the Service, you acknowledge that you have read, understood, and agree to be bound by these Terms and our <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
                </p>
                <p>
                  If you are using the Service on behalf of a business or organization, you represent that you have the authority to bind that entity to these Terms, and "you" refers to both you individually and that entity.
                </p>
              </div>
            </section>

            {/* Description of Service */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4">Description of the Service</h2>
              <div className="space-y-4 text-white/70 font-light leading-relaxed">
                <p>
                  Ordefy is a software-as-a-service (SaaS) ecommerce management platform that provides:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Order management and fulfillment tracking</li>
                  <li>Inventory and warehouse management</li>
                  <li>Shipping and courier integration</li>
                  <li>Product catalog management</li>
                  <li>Customer relationship management</li>
                  <li>Sales channel integrations (including Shopify)</li>
                  <li>Business analytics and reporting</li>
                  <li>Invoicing (where applicable)</li>
                  <li>Team collaboration with role-based access</li>
                </ul>
                <p>
                  The Service is designed for ecommerce businesses and merchants. It is not intended for personal, non-commercial use.
                </p>
              </div>
            </section>

            {/* Account Registration */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4">Account Registration and Security</h2>
              <div className="space-y-4 text-white/70 font-light leading-relaxed">
                <p>To use the Service, you must:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Be at least 18 years of age</li>
                  <li>Provide accurate, complete, and current registration information</li>
                  <li>Maintain the security of your account credentials</li>
                  <li>Promptly notify us of any unauthorized access to your account</li>
                </ul>
                <p>
                  You are responsible for all activities that occur under your account, including actions taken by team members you invite. Ordefy is not liable for any loss or damage resulting from unauthorized use of your account.
                </p>
                <p>
                  We reserve the right to suspend or terminate accounts that violate these Terms, show signs of fraudulent activity, or remain inactive for an extended period, with notice where commercially reasonable.
                </p>
              </div>
            </section>

            {/* Shopify Integration */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4 flex items-center gap-3">
                <Globe className="w-6 h-6 text-primary" />
                Shopify Integration
              </h2>
              <div className="space-y-4 text-white/70 font-light leading-relaxed">
                <p>
                  If you connect your Shopify store to Ordefy, the following additional terms apply:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>You authorize Ordefy to access your Shopify store data through Shopify's OAuth 2.0 flow using only the API scopes required to provide the Service</li>
                  <li>You acknowledge that Ordefy operates as a third-party application and is not affiliated with Shopify Inc.</li>
                  <li>Our use of Shopify's APIs complies with the <a href="https://www.shopify.com/legal/api-terms" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Shopify API Terms of Use</a></li>
                  <li>You may revoke Ordefy's access at any time by uninstalling the app from your Shopify admin panel</li>
                  <li>Upon uninstallation, we will delete your Shopify-sourced data in accordance with our <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link> and Shopify's data protection requirements</li>
                  <li>Ordefy is not responsible for changes to Shopify's platform, APIs, or terms that may affect Service functionality</li>
                </ul>
              </div>
            </section>

            {/* Subscriptions and Billing */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4 flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-primary" />
                Subscriptions, Billing, and Payments
              </h2>
              <div className="space-y-4 text-white/70 font-light leading-relaxed">
                <h3 className="text-lg text-white/90 font-normal mt-2 mb-2">Subscription plans</h3>
                <p>
                  The Service is offered through subscription plans with varying features and limits. Plan details, pricing, and feature availability are described on our pricing page and may be updated from time to time.
                </p>

                <h3 className="text-lg text-white/90 font-normal mt-4 mb-2">Free trial</h3>
                <p>
                  We may offer a free trial period. At the end of the trial, your account will require an active paid subscription to continue using the Service. We will notify you before the trial period ends.
                </p>

                <h3 className="text-lg text-white/90 font-normal mt-4 mb-2">Payment terms</h3>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>All payments are processed securely through Stripe</li>
                  <li>Subscriptions are billed in advance on a monthly or annual basis</li>
                  <li>Prices are listed in USD and are exclusive of applicable taxes</li>
                  <li>You authorize us to charge your payment method on file for recurring subscription fees</li>
                  <li>Failed payments may result in service suspension after a grace period</li>
                </ul>

                <h3 className="text-lg text-white/90 font-normal mt-4 mb-2">Refund policy</h3>
                <p>
                  Subscription fees are generally non-refundable. However, if you cancel within the first 14 days of your initial paid subscription and have not made significant use of the Service, you may request a full refund by contacting us at <a href="mailto:billing@ordefy.com" className="text-primary hover:underline">billing@ordefy.com</a>.
                </p>

                <h3 className="text-lg text-white/90 font-normal mt-4 mb-2">Plan changes</h3>
                <p>
                  You may upgrade or downgrade your plan at any time. Upgrades take effect immediately with prorated billing. Downgrades take effect at the start of the next billing cycle. If a downgrade reduces available features, you are responsible for adjusting your usage before the change takes effect.
                </p>
              </div>
            </section>

            {/* Acceptable Use */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4 flex items-center gap-3">
                <Ban className="w-6 h-6 text-primary" />
                Acceptable Use
              </h2>
              <div className="space-y-4 text-white/70 font-light leading-relaxed">
                <p>You agree not to use the Service to:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Violate any applicable local, national, or international law or regulation</li>
                  <li>Sell or facilitate the sale of prohibited, illegal, or regulated goods without proper authorization</li>
                  <li>Transmit malware, viruses, or other harmful code</li>
                  <li>Attempt to gain unauthorized access to our systems, other user accounts, or connected third-party services</li>
                  <li>Use automated tools (bots, scrapers) to extract data from the Service beyond normal API usage</li>
                  <li>Interfere with the operation of the Service or impose an unreasonable load on our infrastructure</li>
                  <li>Resell, sublicense, or redistribute the Service without our prior written consent</li>
                  <li>Misrepresent your identity or impersonate another person or entity</li>
                  <li>Collect or store personal data of end customers beyond what is necessary to use the Service</li>
                </ul>
                <p>
                  Violation of these terms may result in immediate account suspension or termination without prior notice.
                </p>
              </div>
            </section>

            {/* Data and Privacy */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4 flex items-center gap-3">
                <Shield className="w-6 h-6 text-primary" />
                Data Ownership and Privacy
              </h2>
              <div className="space-y-4 text-white/70 font-light leading-relaxed">
                <h3 className="text-lg text-white/90 font-normal mb-2">Your data</h3>
                <p>
                  You retain all ownership rights to the data you upload, create, or import into the Service ("Your Data"). By using the Service, you grant Ordefy a limited, non-exclusive license to process, store, and display Your Data solely for the purpose of providing and improving the Service.
                </p>

                <h3 className="text-lg text-white/90 font-normal mt-4 mb-2">Our platform</h3>
                <p>
                  Ordefy retains all rights, title, and interest in the Service, including its software, design, branding, documentation, and proprietary technology. Nothing in these Terms transfers any intellectual property rights to you.
                </p>

                <h3 className="text-lg text-white/90 font-normal mt-4 mb-2">Merchant data protection</h3>
                <p>We are committed to protecting merchant data through:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Multi-tenant architecture with strict data isolation between stores</li>
                  <li>Encryption of data in transit (TLS) and at rest (AES-256)</li>
                  <li>Row-level security policies enforced at the database level</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Compliance with GDPR, CCPA/CPRA, and applicable privacy laws</li>
                </ul>
                <p className="mt-4">
                  Our complete data handling practices are described in our <Link to="/privacy" className="text-primary hover:underline">Privacy Policy</Link>.
                </p>

                <h3 className="text-lg text-white/90 font-normal mt-4 mb-2">Data portability</h3>
                <p>
                  You may export Your Data at any time through the Service's export features or by contacting our support team. Upon account termination, you will have 30 days to export Your Data before it is deleted.
                </p>
              </div>
            </section>

            {/* Service Availability */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4 flex items-center gap-3">
                <RefreshCw className="w-6 h-6 text-primary" />
                Service Availability
              </h2>
              <div className="space-y-4 text-white/70 font-light leading-relaxed">
                <p>
                  We target 99.9% uptime for the Service. However, we do not guarantee uninterrupted availability. The Service may be temporarily unavailable due to:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Scheduled maintenance (we provide advance notice when possible)</li>
                  <li>Emergency security patches</li>
                  <li>Third-party service outages (Shopify, Stripe, infrastructure providers)</li>
                  <li>Force majeure events beyond our reasonable control</li>
                </ul>
                <p>
                  We are not liable for any damages arising from Service downtime, including lost sales, missed orders, or data sync delays.
                </p>
              </div>
            </section>

            {/* Limitation of Liability */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6 text-primary" />
                Limitation of Liability
              </h2>
              <div className="space-y-4 text-white/70 font-light leading-relaxed">
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>THE SERVICE IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY</li>
                  <li>ORDEFY DISCLAIMS ALL WARRANTIES INCLUDING MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT</li>
                  <li>IN NO EVENT SHALL ORDEFY'S TOTAL LIABILITY EXCEED THE AMOUNT YOU PAID FOR THE SERVICE IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM</li>
                  <li>ORDEFY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING LOSS OF PROFITS, DATA, BUSINESS OPPORTUNITIES, OR GOODWILL</li>
                </ul>
                <p className="mt-4">
                  Some jurisdictions do not allow the exclusion of certain warranties or limitations of liability, so the above limitations may not apply to you in full. In such cases, our liability is limited to the maximum extent permitted by law.
                </p>
              </div>
            </section>

            {/* Termination */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4">Termination</h2>
              <div className="space-y-4 text-white/70 font-light leading-relaxed">
                <h3 className="text-lg text-white/90 font-normal mb-2">By you</h3>
                <p>
                  You may cancel your subscription and close your account at any time through the billing section of your account settings or by contacting us. Cancellation takes effect at the end of your current billing period.
                </p>

                <h3 className="text-lg text-white/90 font-normal mt-4 mb-2">By us</h3>
                <p>
                  We may suspend or terminate your access to the Service if you violate these Terms, fail to pay subscription fees, engage in fraudulent activity, or if required by law. Where possible, we will provide notice and an opportunity to cure the violation before termination.
                </p>

                <h3 className="text-lg text-white/90 font-normal mt-4 mb-2">Effect of termination</h3>
                <p>Upon termination:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Your access to the Service will be revoked</li>
                  <li>You will have 30 days to export Your Data</li>
                  <li>After the export period, Your Data will be deleted in accordance with our Privacy Policy</li>
                  <li>Any outstanding fees remain payable</li>
                  <li>Provisions that by their nature should survive termination will remain in effect (including limitation of liability, intellectual property, and dispute resolution)</li>
                </ul>
              </div>
            </section>

            {/* Indemnification */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4">Indemnification</h2>
              <p className="text-white/70 font-light leading-relaxed">
                You agree to indemnify, defend, and hold harmless Ordefy, its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or related to: (a) your use of the Service, (b) your violation of these Terms, (c) your violation of any applicable law or regulation, or (d) any content or data you submit through the Service.
              </p>
            </section>

            {/* Governing Law */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4">Governing Law and Disputes</h2>
              <div className="space-y-4 text-white/70 font-light leading-relaxed">
                <p>
                  These Terms are governed by and construed in accordance with the laws of the Republic of Paraguay, without regard to its conflict of law provisions.
                </p>
                <p>
                  Any dispute arising out of or relating to these Terms shall first be attempted to be resolved through good-faith negotiation between the parties. If the dispute cannot be resolved within 30 days of written notice, either party may submit the dispute to binding arbitration administered in Asuncion, Paraguay, in accordance with the applicable rules.
                </p>
                <p>
                  Nothing in this section prevents either party from seeking injunctive or other equitable relief from a court of competent jurisdiction to prevent the actual or threatened infringement of intellectual property rights.
                </p>
              </div>
            </section>

            {/* Modifications */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4">Modifications to These Terms</h2>
              <div className="space-y-4 text-white/70 font-light leading-relaxed">
                <p>
                  We reserve the right to modify these Terms at any time. When we make material changes, we will:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Update the "Last updated" date at the top of this page</li>
                  <li>Notify you via email or an in-app notification at least 30 days before the changes take effect</li>
                  <li>Provide a summary of the key changes</li>
                </ul>
                <p>
                  Your continued use of the Service after the effective date of modified Terms constitutes your acceptance of the changes. If you do not agree to the modified Terms, you must stop using the Service and cancel your subscription.
                </p>
              </div>
            </section>

            {/* Miscellaneous */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4">General Provisions</h2>
              <div className="space-y-4 text-white/70 font-light leading-relaxed">
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white/90">Entire agreement:</strong> these Terms, together with the Privacy Policy and Cookie Policy, constitute the entire agreement between you and Ordefy regarding the Service</li>
                  <li><strong className="text-white/90">Severability:</strong> if any provision of these Terms is found unenforceable, the remaining provisions will continue in full force and effect</li>
                  <li><strong className="text-white/90">Waiver:</strong> our failure to enforce any provision of these Terms does not constitute a waiver of that provision</li>
                  <li><strong className="text-white/90">Assignment:</strong> you may not assign or transfer your rights under these Terms without our prior written consent. We may assign our rights and obligations without restriction</li>
                  <li><strong className="text-white/90">Force majeure:</strong> neither party shall be liable for delays or failures in performance resulting from circumstances beyond reasonable control</li>
                  <li><strong className="text-white/90">No exclusivity:</strong> these Terms do not create an exclusive commitment. You are free to use competing products and services</li>
                </ul>
              </div>
            </section>

            {/* Contact */}
            <section className="pt-8 border-t border-white/10">
              <h2 className="text-2xl font-normal text-white mb-4 flex items-center gap-3">
                <Mail className="w-6 h-6 text-primary" />
                Contact Us
              </h2>
              <div className="space-y-2 text-white/70 font-light leading-relaxed">
                <p>For questions about these Terms of Service, contact us:</p>
                <div className="mt-4 space-y-1">
                  <p><strong className="text-white/90">Entity:</strong> Ordefy E.A.S</p>
                  <p><strong className="text-white/90">Address:</strong> Legion Civil Extranjera casi Pacheco, Asuncion, Paraguay</p>
                  <p><strong className="text-white/90">Email:</strong> <a href="mailto:legal@ordefy.com" className="text-primary hover:underline">legal@ordefy.com</a></p>
                  <p><strong className="text-white/90">General:</strong> <a href="mailto:hola@ordefy.com" className="text-primary hover:underline">hola@ordefy.com</a></p>
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
                <Link to="/cookies" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.03] border border-white/10 text-white/70 hover:text-primary hover:border-primary/30 transition-all">
                  <FileText className="w-4 h-4" />
                  Cookie Policy
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
