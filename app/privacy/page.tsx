import Link from "next/link";
import Image from "next/image";
import PageFooter from "../components/PageFooter";

export default function PrivacyPolicyPage() {
  return (
    <main className="relative min-h-screen bg-[#FFFDF8] text-[#1a1a1a]">
      <nav className="flex items-center justify-between px-10 py-6">
        <Link href="/">
          <Image alt="Popcorn" src="/popcorn-logo.svg" width={133} height={50} className="block" style={{ filter: "brightness(0)" }} />
        </Link>
        <button
          className="bg-black text-white px-7 py-3.5 rounded-[12px] text-base font-medium hover:bg-neutral-800 active:scale-95 transition-all cursor-pointer"
          style={{ fontFamily: "var(--font-ibm-plex-mono)" }}
        >
          GET SETUP
        </button>
      </nav>

      <div className="max-w-[1200px] mx-auto px-10 pt-32 pb-20">
        <article className="max-w-[900px] mx-auto">
          <h1 id="privacy-policy" className="text-[56px] leading-[0.92] tracking-tight mb-4 scroll-mt-32" style={{ fontFamily: "var(--font-synt)" }}>
            Privacy Policy
          </h1>
          <p className="text-[16px] text-[#1a1a1a]/60 mb-12">Last Edited: January 19, 2026</p>

          <div className="space-y-8 text-[18px] leading-relaxed" style={{ fontFamily: "var(--font-albert-sans)" }}>
            <section>
              <p>
                <strong>1. Definitions.</strong> &quot;Personal data&quot; means information that identifies or reasonably relates to an identifiable individual. &quot;Customer Data&quot; means content and information submitted to, generated within, or processed through the Services by or on behalf of a Customer, including messages, files, prompts, inputs, outputs, and other communications. &quot;Other Information&quot; means information collected or generated in connection with operation of the Services that is not Customer Data. Customer Data that has been aggregated or de-identified such that it no longer constitutes Personal Data is not Customer Data and is treated as Other Information for the purposes of this Privacy Policy. Capitalized terms not defined here have the meanings given in the <Link href="/tos" className="text-[#1a3de8] hover:underline">User Terms of Service</Link>, <Link href="/tos#acceptable-use-policy" className="text-[#1a3de8] hover:underline">Acceptable Use Policy</Link>, or <Link href="/enterprise" className="text-[#1a3de8] hover:underline">Enterprise Services Agreement</Link>.
              </p>
            </section>

            <section>
              <p>
                <strong>2. Scope and Purpose.</strong> This Privacy Policy explains how A Dream Inc. (d/b/a &quot;Popcorn&quot;) (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) collects, uses, discloses, retains, and protects personal data in connection with the Popcorn services available at popcorn.ai (the &quot;Services&quot;). It applies to users, visitors, and other individuals whose personal data is processed by us in connection with operation of the Services and related websites, support channels, and communications.
              </p>
              <p className="mt-4">
                This Privacy Policy does not apply to third-party applications, tools, artificial intelligence services, or other software that integrate with or are accessible through the Services (&quot;Third-Party Services&quot; or &quot;Third-Party Integrations&quot;). Third-Party Services operate under their own terms of service and privacy policies, and we do not control how such third parties collect, use, or process personal data. You are responsible for reviewing and complying with the terms and privacy practices of any Third-Party Services you enable or use.
              </p>
              <p className="mt-4">
                Access to and use of the Services may be governed by a separate written agreement between the Customer and A Dream Inc. (an &quot;<Link href="/enterprise" className="text-[#1a3de8] hover:underline">Enterprise Services Agreement</Link>&quot;) where applicable. That agreement governs delivery, configuration, and use of the Services, including the processing of messages, files, prompts, outputs, and other content submitted through the Services (&quot;Customer Data&quot;).
              </p>
              <p className="mt-4">
                The organization or individual that enters into the <Link href="/enterprise" className="text-[#1a3de8] hover:underline">Enterprise Services Agreement</Link> (the &quot;Customer&quot;) controls its workspace, including user access, settings, integrations, retention configurations, and administrative actions, as well as all Customer Data associated with that workspace. If you access the Services through a workspace, your use of the Services and the processing of Customer Data are subject to the Customer&apos;s policies and instructions. Questions regarding workspace-specific practices should be directed to the applicable Customer.
              </p>
              <p className="mt-4">
                This Privacy Policy describes our general data practices and does not override or modify the <Link href="/enterprise" className="text-[#1a3de8] hover:underline">Enterprise Services Agreement</Link> or Customer instructions regarding Customer Data.
              </p>
            </section>

            <section>
              <p>
                <strong>3. Controller and Processor Roles.</strong> For Customer Data, the applicable Customer is the data controller and we act as a service provider or data processor, processing Customer Data only in accordance with the Customer&apos;s instructions, the <Link href="/enterprise" className="text-[#1a3de8] hover:underline">Enterprise Services Agreement</Link>, and applicable law. For Other Information, we act as the data controller (or &quot;business,&quot; &quot;controller,&quot; as applicable under relevant law). Responsibilities, rights, and obligations differ depending on this distinction.
              </p>
            </section>

            <section>
              <p>
                <strong>4. Applicability of <Link href="/enterprise" className="text-[#1a3de8] hover:underline">Enterprise Services Agreement</Link>s.</strong> The processing of Customer Data is governed by the <Link href="/enterprise" className="text-[#1a3de8] hover:underline">Enterprise Services Agreement</Link> and any applicable data processing addendum between us and the Customer. Requests relating to Customer Data, including access, deletion, or export, should generally be directed to the Customer that controls the workspace.
              </p>
            </section>

            <section>
              <p>
                <strong>5. Categories of Personal Data Collected.</strong> In the course of providing the Services, we collect and process certain personal data and operational data as necessary to enable core functionality, including collaboration, automation, integrations, and artificial-intelligence features. This data may be processed transiently or in real time and may not be retained beyond what is necessary to perform the requested operation.
              </p>
              <p className="mt-4">This includes, without limitation:</p>
              <ul className="list-disc pl-8 space-y-2 mt-2">
                <li>Conversations, messages, prompts, and content submitted within workspaces, channels, threads, and direct messages;</li>
                <li>Decisions, actions, and events initiated through the Services, such as triggering workflows, creating or updating records in third-party systems, executing webhooks, or invoking integrations;</li>
                <li>Contextual and configuration information, including user time zone, workspace settings, permissions, and feature configurations;</li>
                <li>Information retrieved from or transmitted to external services through authorized integrations;</li>
                <li>Webhook payloads, API requests, and responses necessary to perform requested actions;</li>
                <li>AI-related inputs and contextual data required to generate outputs or perform automated tasks.</li>
              </ul>
              <p className="mt-4">
                Some of this data is processed dynamically to fulfill user requests and enable functionality and may not be persistently stored by us except as described in this Privacy Policy, the User Terms of Service, or the applicable <Link href="/enterprise" className="text-[#1a3de8] hover:underline">Enterprise Services Agreement</Link>.
              </p>
              <p className="mt-4">
                The Services may generate derived data from Customer Data, including summaries, decisions, action items, participant associations, contextual inferences, and User Memory generated through AI-enabled features. Such derived information may be stored as Communication Memory or User Memory (collectively &quot;Derived Data&quot; or &quot;Memory&quot;).
              </p>
              <p className="mt-4">
                Certain information processed through the Services is stored, logged, or retained for limited periods in order to operate, secure, support, and improve the Services, comply with legal obligations, and enforce agreements. Subject to the retention practices described below, such information may include:
              </p>
              <ul className="list-disc pl-8 space-y-2 mt-2">
                <li>Messages, conversations, and content processed through the Services, subject to system-defined retention limits, including automatic deletion of private messages after approximately twenty-four (24) hours;</li>
                <li>Metadata and logs associated with service usage;</li>
                <li>Information received from Third-Party Tools, integrations, and artificial-intelligence services;</li>
                <li>Account-level, subscription, billing-administration, and workspace-management information for Customers;</li>
                <li>Security, fraud-prevention, and operational logs maintained to protect the Services and Users.</li>
              </ul>
              <p className="mt-4">
                We do not retain private messages, private channel content, or direct messages beyond the applicable retention period described in Section 14, except where required to comply with legal obligations or valid legal process.
              </p>
            </section>

            <section>
              <p>
                <strong>6. AI-Related Data Processing.</strong> When users interact with AI-enabled features, inputs and outputs are processed to provide functionality of the Services. AI-generated outputs are probabilistic and may vary over time for identical inputs.
              </p>
              <ul className="list-disc pl-8 space-y-2 mt-4">
                <li>Derived Data may be used to personalize interactions, generate summaries, or support future actions within the Services.</li>
                <li>Unless otherwise specified in the <Link href="/enterprise" className="text-[#1a3de8] hover:underline">Enterprise Services Agreement</Link>, Customer Data submitted to AI features is not used by us to train general-purpose artificial intelligence models.</li>
                <li>We may process limited data to operate, secure, monitor, and improve the Services.</li>
                <li>AI-related processing may involve transient storage, caching, or logging for performance, security, or abuse-prevention purposes.</li>
                <li>Third-party artificial intelligence service providers may process Customer Data to generate outputs or perform requested tasks.</li>
              </ul>
            </section>

            <section>
              <p>
                <strong>7. Artificial Intelligence Service Providers.</strong> To provide AI-enabled functionality, we may transmit conversation data, messages, contextual information, and related metadata to third-party artificial intelligence service providers. These providers process such data on our behalf in accordance with contractual arrangements and their applicable terms.
              </p>
              <p className="mt-4">
                Use of AI-enabled features requires this processing. By accessing or using the Services, you acknowledge and agree that your data will be processed in this manner to provide AI functionality. You may not opt out of such processing while continuing to use the Services. If you do not agree to this processing, you must discontinue use of the Services.
              </p>
            </section>

            <section>
              <p>
                <strong>8. Sources of Personal Data.</strong> Personal data is collected directly from users or Customers, automatically through use of the Services, from third-party services authorized by Customers, and from our service providers and affiliates supporting operation of the Services.
              </p>
            </section>

            <section>
              <p>
                <strong>9. Purposes of Processing.</strong> We process personal data for the following business purposes:
              </p>
              <ul className="list-disc pl-8 space-y-2 mt-4">
                <li>To provide, operate, maintain, and secure the Services;</li>
                <li>To authenticate users and manage accounts and workspaces;</li>
                <li>To enable collaboration, messaging, file sharing, integrations, and AI-enabled features;</li>
                <li>To provide customer support and respond to inquiries;</li>
                <li>To monitor performance, diagnose errors, support quality assurance and safety, and improve reliability and functionality;</li>
                <li>To detect, prevent, and investigate fraud, abuse, security incidents, and policy violations;</li>
                <li>To comply with legal obligations and enforce agreements;</li>
                <li>To send operational, security, legal, and administrative communications;</li>
                <li>To develop new features and improve existing functionality; and</li>
                <li>To generate aggregated or de-identified analytics for business and product improvement.</li>
              </ul>
            </section>

            <section>
              <p>
                <strong>10. Legal Bases for Processing.</strong> Where required by law, we process personal data based on performance of a contract, legitimate business purposes, compliance with legal obligations, and consent where applicable.
              </p>
            </section>

            <section>
              <p>
                <strong>11. Data Sharing and Disclosure.</strong> We share personal data in the following circumstances:
              </p>
              <ul className="list-disc pl-8 space-y-2 mt-4">
                <li>With Customers and workspace administrators;</li>
                <li>Within the Services, where information may be visible to other authorized users;</li>
                <li>With service providers and subprocessors;</li>
                <li>With third-party services, when enabled by a Customer or user;</li>
                <li>With professional advisers;</li>
                <li>In connection with corporate transactions;</li>
                <li>For legal and safety purposes;</li>
                <li>With consent, where an individual has authorized the disclosure.</li>
              </ul>
            </section>

            <section>
              <p>
                <strong>12. Third-Party Integrations.</strong> If a Customer enables third-party services, those services may access personal data as required for integration. We do not control third-party practices, and their terms and privacy policies apply.
              </p>
            </section>

            <section>
              <p>
                <strong>13. Cookies and Similar Technologies.</strong> We use cookies and similar technologies on our public-facing websites to support functionality, security, analytics, and marketing activities. We do not use advertising cookies or third-party ad tracking technologies within Customer workspaces or within the core Services.
              </p>
            </section>

            <section>
              <p>
                <strong>14. Data Retention.</strong> We retain personal data only for as long as reasonably necessary to provide the Services, comply with legal obligations, resolve disputes, enforce agreements, and maintain security and integrity. Private messages are automatically deleted after approximately twenty-four (24) hours and are not recoverable thereafter.
              </p>
            </section>

            <section>
              <p>
                <strong>15. Security.</strong> We implement reasonable technical and organizational measures designed to protect personal data against unauthorized access, loss, misuse, or disclosure. No system can be guaranteed to be completely secure.
              </p>
            </section>

            <section>
              <p>
                <strong>16. Children.</strong> The Services are not directed to individuals under sixteen (16) years of age. We do not knowingly collect personal data from children under that age.
              </p>
            </section>

            <section>
              <p>
                <strong>17. User Rights.</strong> Depending on your jurisdiction, you may have certain rights with respect to your personal data, including the right to request access, correction, deletion, or information about processing.
              </p>
            </section>

            <section>
              <p>
                <strong>18. California and U.S. State Privacy Rights.</strong> We do not sell personal data as defined under the CCPA/CPRA or similar U.S. state laws. Subject to applicable law, individuals may have the right to request access, correction, deletion, and opt-out of certain disclosures.
              </p>
            </section>

            <section>
              <p>
                <strong>19. Changes to This Privacy Policy.</strong> We may update this Privacy Policy from time to time. Material changes will be communicated through the Services or other reasonable means.
              </p>
            </section>

            <section>
              <p>
                <strong>20. Contact Information.</strong> Questions or requests regarding this Privacy Policy may be directed to:
              </p>
              <p className="mt-4">
                <strong>A Dream Inc. (d/b/a &quot;Popcorn&quot;)</strong>
              </p>
              <p className="mt-2">
                <strong>Email:</strong> contact@popcorn.ai
              </p>
              <p className="mt-2">
                <strong>Mailing Address:</strong> 5214F Diamond Heights Blvd #3226, San Francisco, CA 94131
              </p>
            </section>
          </div>

          <h2 id="cookie-policy" className="text-[56px] leading-[0.92] tracking-tight mt-20 mb-12 scroll-mt-32" style={{ fontFamily: "var(--font-synt)" }}>
            Cookie Policy
          </h2>

          <div className="space-y-8 text-[18px] leading-relaxed" style={{ fontFamily: "var(--font-albert-sans)" }}>
            <section>
              <p>
                At A Dream Inc. (d/b/a &quot;Popcorn&quot;), we value transparency about how we collect and use information. This Cookie Policy explains how and when we use cookies and similar technologies in connection with our websites and related online properties.
              </p>
            </section>

            <section>
              <h3 className="text-[24px] font-bold mb-4">What Are Cookies?</h3>
              <p>
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They may be session-based or persistent.
              </p>
            </section>

            <section>
              <h3 className="text-[24px] font-bold mb-4">How Do We Use Cookies?</h3>
              <p>We generally use cookies for authentication and session management, security, preferences and functionality, performance and analytics, and advertising and marketing on our public websites only.</p>
            </section>

            <section>
              <h3 className="text-[24px] font-bold mb-4">Your Choices and Cookie Controls</h3>
              <p>
                Most web browsers allow you to control cookies through their settings. You may block cookies entirely, delete existing cookies, or configure your browser to notify you when cookies are set.
              </p>
            </section>

            <section>
              <h3 className="text-[24px] font-bold mb-4">Updates to This Cookie Policy</h3>
              <p>
                We may update this Cookie Policy from time to time. For more information about how we collect, use, and share information, please review our <a href="#privacy-policy" className="text-[#1a3de8] hover:underline">Privacy Policy</a>.
              </p>
            </section>
          </div>
        </article>
      </div>

      <PageFooter />
    </main>
  );
}
