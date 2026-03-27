import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ShaderAnimation } from '@/components/ui/shader-animation';
import { Shield, Lock, Eye, FileText, Database, UserCheck, Mail, Globe, Server, CreditCard, Cookie, Trash2, ArrowLeft } from 'lucide-react';

export default function Privacy() {
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
            Volver al inicio
          </Link>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-xl border border-primary/30">
                  <Shield className="w-10 h-10 text-primary" />
                </div>
                <div className="absolute inset-0 w-20 h-20 bg-primary/30 blur-2xl rounded-full animate-pulse" />
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary via-white to-primary bg-clip-text text-transparent tracking-tight mb-4">
              Privacy Policy
            </h1>
            <p className="text-lg text-white/60 font-light">
              Last updated: March 26, 2026
            </p>
          </div>

          {/* Main Content */}
          <div className="backdrop-blur-2xl bg-gradient-to-br from-black/70 via-black/50 to-black/70 border border-primary/30 rounded-3xl p-8 md:p-12 shadow-[0_0_60px_rgba(186,234,89,0.2)] space-y-8">

            {/* Company Info */}
            <div className="pb-8 border-b border-white/10">
              <h2 className="text-2xl font-normal text-white mb-4 flex items-center gap-3">
                <FileText className="w-6 h-6 text-primary" />
                Company Information
              </h2>
              <div className="space-y-2 text-white/70 font-light">
                <p><strong className="text-white/90">Legal entity:</strong> Ordefy E.A.S</p>
                <p><strong className="text-white/90">Address:</strong> Legion Civil Extranjera casi Pacheco, Asuncion, Paraguay</p>
                <p><strong className="text-white/90">Website:</strong> <a href="https://ordefy.io" className="text-primary hover:underline">ordefy.io</a></p>
                <p><strong className="text-white/90">Application:</strong> <a href="https://app.ordefy.io" className="text-primary hover:underline">app.ordefy.io</a></p>
                <p><strong className="text-white/90">Privacy contact:</strong> <a href="mailto:privacy@ordefy.com" className="text-primary hover:underline">privacy@ordefy.com</a></p>
              </div>
            </div>

            {/* Introduction */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6 text-primary" />
                Introduction
              </h2>
              <div className="space-y-4 text-white/70 font-light leading-relaxed">
                <p>
                  Ordefy E.A.S ("Ordefy", "we", "us", or "our") operates a SaaS ecommerce management platform that helps merchants manage orders, inventory, shipping, customers, and integrations across multiple sales channels.
                </p>
                <p>
                  This Privacy Policy describes how we collect, use, disclose, retain, and protect information when you use our platform at app.ordefy.io, our Shopify application, our website at ordefy.io, and all related services (collectively, the "Service").
                </p>
                <p>
                  By using the Service, you agree to the collection and use of information in accordance with this Privacy Policy. If you do not agree with this policy, please do not use the Service.
                </p>
              </div>
            </section>

            {/* Information We Collect */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4 flex items-center gap-3">
                <Database className="w-6 h-6 text-primary" />
                Information We Collect
              </h2>
              <div className="space-y-6 text-white/70 font-light leading-relaxed">
                <div>
                  <h3 className="text-lg text-white/90 font-normal mb-2">1. Account information you provide directly</h3>
                  <p className="mb-2">When you create an Ordefy account, we collect:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Full name</li>
                    <li>Email address</li>
                    <li>Password (stored hashed, never in plaintext)</li>
                    <li>Business name and store configuration</li>
                    <li>Phone number (optional)</li>
                    <li>Business address and city</li>
                    <li>Billing information (processed by Stripe, not stored on our servers)</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg text-white/90 font-normal mb-2">2. Merchant data from Shopify</h3>
                  <p className="mb-2">When you install and authorize our Shopify application, we access and store the following data through Shopify's APIs in accordance with the scopes you authorize:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li><strong className="text-white/90">Products:</strong> product titles, descriptions, variants, prices, inventory levels, images, and SKUs</li>
                    <li><strong className="text-white/90">Orders:</strong> order details, line items, fulfillment status, payment status, shipping addresses, and customer contact information</li>
                    <li><strong className="text-white/90">Customers:</strong> customer names, email addresses, phone numbers, shipping addresses, and order history</li>
                    <li><strong className="text-white/90">Store configuration:</strong> shop domain, currency, timezone, and general store settings</li>
                  </ul>
                  <p className="mt-2">
                    We request only the minimum Shopify API scopes required to provide our Service: <code className="text-primary/80 bg-white/5 px-1.5 py-0.5 rounded text-sm">read_products, write_products, read_orders, write_orders, read_customers, write_customers</code>.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg text-white/90 font-normal mb-2">3. Information collected automatically</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>IP address and approximate location derived from IP</li>
                    <li>Browser type, version, and device information</li>
                    <li>Pages visited, features used, and session duration</li>
                    <li>Referring URL and search terms</li>
                    <li>Error logs and performance data</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg text-white/90 font-normal mb-2">4. Data generated through service usage</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Shipping labels and tracking information</li>
                    <li>Warehouse and inventory movement records</li>
                    <li>Courier settlement and delivery records</li>
                    <li>Invoice and billing records</li>
                    <li>Integration sync logs and webhook events</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* How We Use Information */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4 flex items-center gap-3">
                <UserCheck className="w-6 h-6 text-primary" />
                How We Use Your Information
              </h2>
              <div className="space-y-4 text-white/70 font-light leading-relaxed">
                <p>We use the information we collect for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white/90">Service delivery:</strong> to operate, maintain, and improve the Ordefy platform, including order management, inventory sync, shipping, and customer management</li>
                  <li><strong className="text-white/90">Shopify integration:</strong> to synchronize your Shopify store data (products, orders, customers) with our platform and process webhooks</li>
                  <li><strong className="text-white/90">Payment processing:</strong> to manage subscriptions, billing, and invoicing through Stripe</li>
                  <li><strong className="text-white/90">Communication:</strong> to send transactional emails (order confirmations, shipping updates, password resets) through Resend</li>
                  <li><strong className="text-white/90">Analytics:</strong> to generate business reports, dashboards, and insights for your store</li>
                  <li><strong className="text-white/90">Support:</strong> to respond to your requests, troubleshoot issues, and provide customer support</li>
                  <li><strong className="text-white/90">Security:</strong> to detect, prevent, and address fraud, abuse, and security incidents</li>
                  <li><strong className="text-white/90">Legal compliance:</strong> to comply with applicable laws, regulations, and legal processes</li>
                </ul>
                <p className="text-white/80 font-normal mt-4">
                  We do not sell, rent, or trade your personal information or your customers' personal information to third parties for marketing purposes.
                </p>
              </div>
            </section>

            {/* Third Party Services */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4 flex items-center gap-3">
                <Server className="w-6 h-6 text-primary" />
                Third Party Services and Data Sharing
              </h2>
              <div className="space-y-4 text-white/70 font-light leading-relaxed">
                <p>We share data with the following categories of service providers, each bound by their own privacy policies and data processing agreements:</p>

                <div className="space-y-4 ml-4">
                  <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
                    <h4 className="text-white/90 font-normal mb-1">Supabase (Database and Authentication)</h4>
                    <p className="text-sm">Stores all application data including merchant accounts, store data, orders, products, and customer records. Data is encrypted at rest and in transit. Hosted on AWS infrastructure.</p>
                    <p className="text-sm mt-1 text-white/50">Data shared: all platform data</p>
                  </div>

                  <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
                    <h4 className="text-white/90 font-normal mb-1">Stripe (Payment Processing)</h4>
                    <p className="text-sm">Processes subscription payments and billing. Ordefy does not store credit card numbers or full payment details on our servers. Stripe is PCI DSS Level 1 certified.</p>
                    <p className="text-sm mt-1 text-white/50">Data shared: billing email, subscription plan, payment method tokens</p>
                  </div>

                  <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
                    <h4 className="text-white/90 font-normal mb-1">Shopify (Ecommerce Platform)</h4>
                    <p className="text-sm">We access your Shopify store data through their API with your explicit authorization during the OAuth installation flow. We comply with all Shopify API Terms of Use and the Partner Program Agreement.</p>
                    <p className="text-sm mt-1 text-white/50">Data shared: sync status, webhook acknowledgments</p>
                  </div>

                  <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
                    <h4 className="text-white/90 font-normal mb-1">Resend (Transactional Email)</h4>
                    <p className="text-sm">Sends transactional emails such as order notifications, shipping updates, password resets, and billing receipts.</p>
                    <p className="text-sm mt-1 text-white/50">Data shared: recipient email, email content</p>
                  </div>

                  <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
                    <h4 className="text-white/90 font-normal mb-1">Vercel (Frontend Hosting)</h4>
                    <p className="text-sm">Hosts the Ordefy web application. May collect standard web analytics and performance metrics.</p>
                    <p className="text-sm mt-1 text-white/50">Data shared: standard HTTP request data</p>
                  </div>

                  <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
                    <h4 className="text-white/90 font-normal mb-1">Railway (Backend Hosting)</h4>
                    <p className="text-sm">Hosts the Ordefy API server and background processes.</p>
                    <p className="text-sm mt-1 text-white/50">Data shared: application logs, runtime metrics</p>
                  </div>

                  <div className="p-4 rounded-lg bg-white/[0.02] border border-white/5">
                    <h4 className="text-white/90 font-normal mb-1">Sentry (Error Tracking)</h4>
                    <p className="text-sm">Captures application errors and performance data to help us identify and fix issues. Personal data is scrubbed from error reports.</p>
                    <p className="text-sm mt-1 text-white/50">Data shared: error stack traces, browser metadata (PII scrubbed)</p>
                  </div>
                </div>

                <p className="mt-4">We may also disclose information when required by law, court order, or governmental authority, or when we believe disclosure is necessary to protect our rights, prevent fraud, or ensure user safety.</p>
              </div>
            </section>

            {/* Data Security */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4 flex items-center gap-3">
                <Lock className="w-6 h-6 text-primary" />
                Data Security
              </h2>
              <div className="space-y-4 text-white/70 font-light leading-relaxed">
                <p>We implement industry-standard security measures to protect your data:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white/90">Encryption in transit:</strong> all data transmitted between your browser and our servers is encrypted using TLS 1.2 or higher</li>
                  <li><strong className="text-white/90">Encryption at rest:</strong> all database records are encrypted at rest using AES-256 encryption provided by our infrastructure</li>
                  <li><strong className="text-white/90">Authentication:</strong> passwords are hashed using bcrypt. JWT tokens are used for session management with configurable expiration</li>
                  <li><strong className="text-white/90">Row-Level Security:</strong> our database enforces row-level security (RLS) policies ensuring multi-tenant data isolation. Merchants can only access their own store data</li>
                  <li><strong className="text-white/90">Rate limiting:</strong> all API endpoints are rate-limited to prevent abuse</li>
                  <li><strong className="text-white/90">Webhook verification:</strong> all Shopify webhooks are verified via HMAC signature validation before processing</li>
                  <li><strong className="text-white/90">Access control:</strong> role-based access control (RBAC) with six defined roles limits access to features and data based on user permissions</li>
                  <li><strong className="text-white/90">Audit logging:</strong> critical operations are logged for security monitoring and compliance</li>
                </ul>
                <p>While we strive to protect your information, no method of electronic storage or transmission is 100% secure. We continuously review and improve our security practices.</p>
              </div>
            </section>

            {/* Shopify Data Handling */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4 flex items-center gap-3">
                <Globe className="w-6 h-6 text-primary" />
                Shopify Data Handling
              </h2>
              <div className="space-y-4 text-white/70 font-light leading-relaxed">
                <p>
                  This section specifically addresses how we handle data obtained through the Shopify API, in compliance with the <a href="https://www.shopify.com/legal/api-terms" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Shopify API Terms of Use</a> and the <a href="https://www.shopify.com/legal/partners/app-developer-agreement" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Shopify App Developer Agreement</a>.
                </p>

                <h3 className="text-lg text-white/90 font-normal mt-6 mb-2">What Shopify data we access</h3>
                <p>Upon installing our Shopify app, you authorize us to access your store data through the following API scopes:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li><code className="text-primary/80 bg-white/5 px-1 py-0.5 rounded text-sm">read_products, write_products</code> to synchronize your product catalog</li>
                  <li><code className="text-primary/80 bg-white/5 px-1 py-0.5 rounded text-sm">read_orders, write_orders</code> to import and manage orders</li>
                  <li><code className="text-primary/80 bg-white/5 px-1 py-0.5 rounded text-sm">read_customers, write_customers</code> to maintain customer records</li>
                </ul>

                <h3 className="text-lg text-white/90 font-normal mt-6 mb-2">Why we access this data</h3>
                <p>Each scope is required to deliver our core Service functionality:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Products: to display, manage, and sync inventory across your sales channels</li>
                  <li>Orders: to process fulfillment, generate shipping labels, track deliveries, and manage returns</li>
                  <li>Customers: to associate orders with customer profiles, enable customer search, and facilitate communication</li>
                </ul>

                <h3 className="text-lg text-white/90 font-normal mt-6 mb-2">How we store Shopify data</h3>
                <p>Shopify data is stored in our Supabase (PostgreSQL) database with the following protections:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Multi-tenant architecture with store-level isolation via RLS</li>
                  <li>Each record is scoped to the specific store that authorized the data</li>
                  <li>Shopify IDs are stored alongside our internal IDs for sync integrity</li>
                  <li>Webhook events are logged in a dedicated audit table</li>
                </ul>

                <h3 className="text-lg text-white/90 font-normal mt-6 mb-2">App uninstallation</h3>
                <p>When you uninstall the Ordefy app from your Shopify store:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>We immediately revoke all Shopify API access tokens</li>
                  <li>We delete the Shopify integration record and associated webhook subscriptions</li>
                  <li>Within 48 hours of receiving the shop/redact GDPR webhook from Shopify, we delete or anonymize all data associated with your Shopify store</li>
                  <li>Non-Shopify data (your Ordefy account, manually created records) is retained unless you explicitly request account deletion</li>
                </ul>
              </div>
            </section>

            {/* Payment Processing */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4 flex items-center gap-3">
                <CreditCard className="w-6 h-6 text-primary" />
                Payment Processing
              </h2>
              <div className="space-y-4 text-white/70 font-light leading-relaxed">
                <p>
                  All payment processing is handled by <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Stripe</a>, a PCI DSS Level 1 certified payment processor. Ordefy does not store, process, or have access to your full credit card numbers.
                </p>
                <p>
                  We store only the following billing-related information: Stripe customer ID, subscription plan identifier, billing cycle dates, and payment status. Your payment method details are stored exclusively by Stripe.
                </p>
              </div>
            </section>

            {/* Data Retention */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4">Data Retention</h2>
              <div className="space-y-4 text-white/70 font-light leading-relaxed">
                <p>We retain your data according to the following schedule:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white/90">Active account data:</strong> retained for the duration of your active subscription</li>
                  <li><strong className="text-white/90">After account closure:</strong> personal data is deleted within 30 days of account deletion request. Anonymized transaction records may be retained for up to 7 years for accounting and legal purposes</li>
                  <li><strong className="text-white/90">Shopify data after uninstall:</strong> deleted or anonymized within 48 hours of receiving the shop/redact webhook from Shopify</li>
                  <li><strong className="text-white/90">Backup data:</strong> removed from backups within 90 days of deletion from the primary database</li>
                  <li><strong className="text-white/90">Server logs:</strong> automatically rotated and deleted after 30 days</li>
                </ul>
              </div>
            </section>

            {/* Data Deletion */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4 flex items-center gap-3">
                <Trash2 className="w-6 h-6 text-primary" />
                Data Deletion Requests
              </h2>
              <div className="space-y-4 text-white/70 font-light leading-relaxed">
                <p>You may request deletion of your data at any time by contacting us at <a href="mailto:privacy@ordefy.com" className="text-primary hover:underline">privacy@ordefy.com</a>. Upon receiving a valid deletion request, we will:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Confirm the request and verify your identity</li>
                  <li>Delete all personal data from our active systems within 30 days</li>
                  <li>Notify any third-party processors to delete your data</li>
                  <li>Provide confirmation once the deletion is complete</li>
                </ul>
                <p className="mt-4">
                  For Shopify merchants, we also comply with Shopify's mandatory GDPR webhooks. When a customer of your store requests data deletion through Shopify, we receive and process the <code className="text-primary/80 bg-white/5 px-1 py-0.5 rounded text-sm">customers/redact</code> webhook, anonymizing all personal information associated with that customer in our database while retaining anonymized transaction records for accounting purposes.
                </p>
              </div>
            </section>

            {/* Your Rights */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4">Your Rights</h2>
              <div className="space-y-4 text-white/70 font-light leading-relaxed">
                <p>Depending on your location, you may have the following rights regarding your personal data:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white/90">Right of access:</strong> request a copy of the personal data we hold about you</li>
                  <li><strong className="text-white/90">Right to rectification:</strong> request correction of inaccurate or incomplete data</li>
                  <li><strong className="text-white/90">Right to erasure:</strong> request deletion of your personal data (subject to legal retention obligations)</li>
                  <li><strong className="text-white/90">Right to restrict processing:</strong> request that we limit how we use your data</li>
                  <li><strong className="text-white/90">Right to data portability:</strong> request your data in a structured, machine-readable format</li>
                  <li><strong className="text-white/90">Right to object:</strong> object to processing of your data for specific purposes</li>
                  <li><strong className="text-white/90">Right to withdraw consent:</strong> withdraw previously given consent at any time</li>
                </ul>
                <p className="mt-4">
                  To exercise any of these rights, contact us at <a href="mailto:privacy@ordefy.com" className="text-primary hover:underline">privacy@ordefy.com</a>. We will respond to all valid requests within 30 days.
                </p>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4 flex items-center gap-3">
                <Cookie className="w-6 h-6 text-primary" />
                Cookies and Tracking Technologies
              </h2>
              <div className="space-y-4 text-white/70 font-light leading-relaxed">
                <p>We use cookies and similar technologies for the following purposes:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white/90">Essential cookies:</strong> required for authentication, session management, and security. These cannot be disabled without breaking the Service</li>
                  <li><strong className="text-white/90">Preference cookies:</strong> store your display preferences such as theme (dark/light mode), language, and dashboard layout</li>
                  <li><strong className="text-white/90">Analytics cookies:</strong> help us understand how you use the Service to improve user experience. We use privacy-respecting analytics that do not track you across websites</li>
                </ul>
                <p>You can manage cookie preferences through your browser settings. For more details, see our <Link to="/cookies" className="text-primary hover:underline">Cookie Policy</Link>.</p>
              </div>
            </section>

            {/* GDPR */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4">GDPR Compliance (European Economic Area)</h2>
              <div className="space-y-4 text-white/70 font-light leading-relaxed">
                <p>
                  If you are located in the European Economic Area (EEA), the United Kingdom, or Switzerland, we process your personal data under the following legal bases as defined by the General Data Protection Regulation (GDPR):
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white/90">Contract performance:</strong> processing necessary to provide the Service you subscribed to</li>
                  <li><strong className="text-white/90">Legitimate interests:</strong> improving our Service, fraud prevention, and security (where these interests do not override your fundamental rights)</li>
                  <li><strong className="text-white/90">Consent:</strong> for optional analytics and marketing communications, which you can withdraw at any time</li>
                  <li><strong className="text-white/90">Legal obligation:</strong> processing required to comply with applicable laws</li>
                </ul>
                <p className="mt-4">
                  We implement mandatory GDPR compliance webhooks as required by Shopify, including <code className="text-primary/80 bg-white/5 px-1 py-0.5 rounded text-sm">customers/data_request</code>, <code className="text-primary/80 bg-white/5 px-1 py-0.5 rounded text-sm">customers/redact</code>, and <code className="text-primary/80 bg-white/5 px-1 py-0.5 rounded text-sm">shop/redact</code>. These webhooks are verified via HMAC signature and processed automatically.
                </p>
                <p>
                  If you believe we have not adequately addressed your data protection concerns, you have the right to lodge a complaint with your local data protection authority.
                </p>
              </div>
            </section>

            {/* CCPA */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4">CCPA/CPRA Compliance (California)</h2>
              <div className="space-y-4 text-white/70 font-light leading-relaxed">
                <p>
                  If you are a California resident, the California Consumer Privacy Act (CCPA) and California Privacy Rights Act (CPRA) grant you additional rights:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><strong className="text-white/90">Right to know:</strong> what personal information we collect, use, disclose, and sell</li>
                  <li><strong className="text-white/90">Right to delete:</strong> request deletion of personal information we collected from you</li>
                  <li><strong className="text-white/90">Right to opt-out of sale:</strong> we do not sell personal information, so this right is automatically fulfilled</li>
                  <li><strong className="text-white/90">Right to non-discrimination:</strong> we will not discriminate against you for exercising your privacy rights</li>
                  <li><strong className="text-white/90">Right to correct:</strong> request correction of inaccurate personal information</li>
                  <li><strong className="text-white/90">Right to limit use:</strong> limit the use and disclosure of sensitive personal information</li>
                </ul>
                <p className="mt-2">
                  In the preceding 12 months, we have not sold personal information. We do not use or disclose sensitive personal information for purposes other than those permitted under the CPRA.
                </p>
              </div>
            </section>

            {/* International Transfers */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4">International Data Transfers</h2>
              <div className="space-y-4 text-white/70 font-light leading-relaxed">
                <p>
                  Ordefy is headquartered in Paraguay. Your data may be transferred to and processed in countries outside your country of residence, including the United States (where our infrastructure providers Supabase, Stripe, Vercel, and Railway operate).
                </p>
                <p>
                  When transferring data internationally, we rely on appropriate safeguards including Standard Contractual Clauses (SCCs) approved by the European Commission, and our service providers' compliance frameworks (such as Stripe's GDPR compliance, Supabase's SOC 2 certification).
                </p>
              </div>
            </section>

            {/* Children's Privacy */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4">Children's Privacy</h2>
              <p className="text-white/70 font-light leading-relaxed">
                The Service is designed for business use and is not intended for individuals under 18 years of age. We do not knowingly collect personal information from minors. If we discover that we have collected information from a minor, we will delete it promptly. If you believe a minor has provided us with personal information, please contact us at <a href="mailto:privacy@ordefy.com" className="text-primary hover:underline">privacy@ordefy.com</a>.
              </p>
            </section>

            {/* Changes to Policy */}
            <section>
              <h2 className="text-2xl font-normal text-white mb-4">Changes to This Privacy Policy</h2>
              <div className="space-y-4 text-white/70 font-light leading-relaxed">
                <p>
                  We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. When we make material changes, we will:
                </p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>Update the "Last updated" date at the top of this page</li>
                  <li>Notify you via email or an in-app notification for significant changes</li>
                  <li>Where required by law, obtain your consent before applying material changes</li>
                </ul>
                <p>We encourage you to review this Privacy Policy periodically.</p>
              </div>
            </section>

            {/* Contact Information */}
            <section className="pt-8 border-t border-white/10">
              <h2 className="text-2xl font-normal text-white mb-4 flex items-center gap-3">
                <Mail className="w-6 h-6 text-primary" />
                Contact Us
              </h2>
              <div className="space-y-2 text-white/70 font-light leading-relaxed">
                <p>If you have questions about this Privacy Policy, wish to exercise your data rights, or want to report a privacy concern, contact us:</p>
                <div className="mt-4 space-y-1">
                  <p><strong className="text-white/90">Entity:</strong> Ordefy E.A.S</p>
                  <p><strong className="text-white/90">Address:</strong> Legion Civil Extranjera casi Pacheco, Asuncion, Paraguay</p>
                  <p><strong className="text-white/90">Privacy email:</strong> <a href="mailto:privacy@ordefy.com" className="text-primary hover:underline">privacy@ordefy.com</a></p>
                  <p><strong className="text-white/90">General email:</strong> <a href="mailto:hola@ordefy.com" className="text-primary hover:underline">hola@ordefy.com</a></p>
                  <p><strong className="text-white/90">Website:</strong> <a href="https://ordefy.io" className="text-primary hover:underline">ordefy.io</a></p>
                </div>
              </div>
            </section>

            {/* Related Links */}
            <section className="pt-8 border-t border-white/10">
              <h2 className="text-2xl font-normal text-white mb-4">Related Policies</h2>
              <div className="flex flex-wrap gap-4">
                <Link to="/terms" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.03] border border-white/10 text-white/70 hover:text-primary hover:border-primary/30 transition-all">
                  <FileText className="w-4 h-4" />
                  Terms of Service
                </Link>
                <Link to="/cookies" className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/[0.03] border border-white/10 text-white/70 hover:text-primary hover:border-primary/30 transition-all">
                  <Cookie className="w-4 h-4" />
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
