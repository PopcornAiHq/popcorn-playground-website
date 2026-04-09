import Link from "next/link";
import Image from "next/image";
import PageFooter from "../components/PageFooter";

export default function EnterpriseServicesAgreementPage() {
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
          <h1 className="text-[56px] leading-[1.1] tracking-tight mb-4" style={{ fontFamily: "var(--font-synt)" }}>
            Enterprise Services Agreement
          </h1>
          <p className="text-[16px] text-[#1a1a1a]/60 mb-12">Last Edited: January 19, 2026</p>

          <div className="space-y-8 text-[18px] leading-relaxed">
            <section>
              <p>
                This Enterprise Services Agreement (&quot;Agreement&quot;) is entered into by and between A Dream Inc. (d/b/a &quot;Popcorn&quot;) (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) and the entity or individual identified as the customer (&quot;Customer,&quot; &quot;you,&quot; or &quot;your&quot;). This Agreement governs Customer&apos;s access to and use of the Popcorn services available at popcorn.ai (the &quot;Services&quot;).
              </p>
            </section>

            {/* Section 1 */}
            <section>
              <h2 className="text-[28px] font-bold mb-4">1. Definitions</h2>
              <p>
                Capitalized terms used but not defined in this Agreement have the meanings given in the <Link href="/tos" className="text-[#1a3de8] hover:underline">User Terms of Service</Link>, <Link href="/tos#acceptable-use-policy" className="text-[#1a3de8] hover:underline">Acceptable Use Policy</Link>, and <Link href="/privacy" className="text-[#1a3de8] hover:underline">Privacy Policy</Link>, each incorporated by reference.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-[28px] font-bold mb-4">2. Company&apos;s Responsibilities</h2>

              <div className="space-y-6">
                <div>
                  <p><strong>2.1 Provision of the Services</strong></p>
                  <p className="mt-2">
                    Subject to the terms and conditions of this Agreement, Company will make the Services available to Customer and its Authorized Users during the applicable subscription term.
                  </p>
                </div>

                <div>
                  <p><strong>2.2 Availability and Modifications</strong></p>
                  <p className="mt-2">
                    Company may perform scheduled or emergency maintenance, updates, or modifications to the Services from time to time. Company will use commercially reasonable efforts to minimize service disruptions but does not guarantee uninterrupted availability.
                  </p>
                  <p className="mt-2">
                    Company may update, enhance, modify, or discontinue features or functionality of the Services, including AI-Enabled features, integrations, or Memory functionality, provided that such changes do not materially degrade the core functionality of the Services.
                  </p>
                </div>

                <div>
                  <p><strong>2.3 Processing and Protection of Customer Data</strong></p>
                  <p className="mt-2">
                    Company will process Customer Data in accordance with the <Link href="/privacy" className="text-[#1a3de8] hover:underline">Privacy Policy</Link> and any applicable data processing addendum.
                  </p>
                </div>

                <div>
                  <p><strong>2.4 Security Measures</strong></p>
                  <p className="mt-2">
                    Company will implement and maintain reasonable administrative, technical, and organizational measures designed to protect Customer Data against unauthorized access, loss, misuse, or disclosure, taking into account the nature of the Services and current industry practices. Customer acknowledges that no system can be guaranteed to be completely secure and that security obligations are subject to the limitations set forth in this Agreement.
                  </p>
                </div>

                <div>
                  <p><strong>2.5 Support</strong></p>
                  <p className="mt-2">
                    Company will provide customer support for its Services. Customers may contact Company with questions regarding the Services or the operation of the product by emailing contact@popcorn.ai.
                  </p>
                </div>

                <div>
                  <p><strong>2.6 No Other Obligations</strong></p>
                  <p className="mt-2">
                    Except as expressly stated in this Agreement, Company has no other obligations.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-[28px] font-bold mb-4">3. Customer Responsibilities</h2>

              <div className="space-y-6">
                <div>
                  <p><strong>3.1 Use of the Services</strong></p>
                  <p className="mt-2">
                    Customer is solely responsible for its use of the Services and for all activities conducted within its workspace(s), including all actions taken by Authorized Users, AI agents acting on Authorized User instructions, integrations, automated workflows, and credential-based actions. Customer will use the Services only in accordance with this Agreement, the <Link href="/tos" className="text-[#1a3de8] hover:underline">User Terms of Service</Link>, the <Link href="/tos#acceptable-use-policy" className="text-[#1a3de8] hover:underline">Acceptable Use Policy</Link>, the <Link href="/privacy" className="text-[#1a3de8] hover:underline">Privacy Policy</Link>, and all applicable laws.
                  </p>
                </div>

                <div>
                  <p><strong>3.2 Authorized Users</strong></p>
                  <p className="mt-2">
                    Customer must ensure that all Authorized Users comply with this Agreement, the User Terms of Service, the Acceptable Use Policy, the Privacy Policy, and any applicable workspace policies established by Customer. Any act or omission of an Authorized User will be deemed an act or omission of Customer. Customer is responsible for promptly disabling access for any Authorized User who is no longer authorized to use the Services.
                  </p>
                </div>

                <div>
                  <p><strong>3.3 Workspace Administration and Configuration</strong></p>
                  <p className="mt-2">
                    Customer controls and administers its workspace(s) and is responsible for configuring and managing all administrative settings, including without limitation: (1) user access, roles, and permissions; (2) channel creation, membership, and visibility (including public, private, shared, and restricted channels); (3) integrations and connected accounts; and (4) authentication settings.
                  </p>
                </div>

                <div>
                  <p><strong>3.4 Credentials, Tokens, and Delegated Authorization</strong></p>
                  <p className="mt-2">
                    Any action taken through the Services using credentials is deemed authorized by Customer, regardless of whether such action was initiated by: the Customer directly; an Authorized User; an AI agent acting on user instruction; or an automated workflow or integration. Customer must safeguard all credentials, promptly revoke or rotate compromised credentials, and notify Company without undue delay upon discovering any unauthorized access or misuse. See Section 5.3 of this Agreement for further details related to Third-Party Integrations.
                  </p>
                </div>

                <div>
                  <p><strong>3.5 Notices, Consents, and Workplace Policies</strong></p>
                  <p className="mt-2">
                    Customer is solely responsible for establishing, communicating, and enforcing its own workplace policies governing use of the Services, including policies relating to: monitoring and access; data retention and deletion; use of AI-Enabled Features and Memory systems; Third-Party Integrations; and acceptable use sufficient to meet its requirements under this Agreement, the User Terms of Service, Acceptable Use Policy, and the Privacy Policy.
                  </p>
                  <p className="mt-2">
                    Customer is responsible for obtaining all required notices, consents, permissions, and authorizations from Authorized Users and other data subjects for the lawful collection, use, disclosure, transfer, and processing of Customer Data, including in connection with AI Features, Memory systems, and integrations.
                  </p>
                </div>

                <div>
                  <p><strong>3.6 Sensitive, Regulated, and Confidential Information</strong></p>
                  <p className="mt-2">
                    Customer is responsible for determining whether the Services are appropriate for any particular information that can be accessed by AI agents and Authorized Users, including sensitive, regulated, privileged, proprietary, or confidential information. Customer must configure access controls, channel membership, permissions, and sharing settings accordingly and instruct Authorized Users regarding appropriate use of the Services for such information. In particular, Customer acknowledges that channel members may be able to invite additional users consistent with their workspace configuration. Customer is solely responsible for determining whether the Services and channel member access are appropriate for this information, including sensitive, regulated, privileged, proprietary, or confidential information, and for ensuring compliance with any applicable laws, regulations, contractual obligations, or internal policies governing such information.
                  </p>
                  <p className="mt-2">
                    Customer is responsible for configuring and maintaining appropriate administrative, technical, and organizational controls within the Services, including access controls, channel creation and membership, permissions, sharing settings, data retention settings, and integration settings, and for instructing Authorized Users regarding appropriate use of the Services with respect to such information.
                  </p>
                  <p className="mt-2">
                    Customer acknowledges and agrees that, subject to Customer&apos;s workspace configuration and permission settings:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-2">
                    <li>Authorized Users with sufficient privileges may create channels, modify channel membership, invite additional users (including external users, if enabled), or otherwise expand access to information within the workspace; and</li>
                    <li>AI-Enabled Features, agents, automations, and Third-Party Integrations enabled or authorized by Customer or its Authorized Users may access, process, analyze, generate outputs from, or transmit information that is available to them within the scope of the permissions and configurations granted by Customer or Authorized Users.</li>
                  </ul>
                  <p className="mt-2">
                    Customer is solely responsible for evaluating and managing the risks associated with permitting access to such information by Authorized Users, AI-Enabled features, agents, automations, and integrations, and for restricting or disabling access where use of the Services would be inappropriate for such information.
                  </p>
                  <p className="mt-2">
                    See the <Link href="/tos" className="text-[#1a3de8] hover:underline">User Terms of Service</Link>, <Link href="/tos#acceptable-use-policy" className="text-[#1a3de8] hover:underline">Acceptable Use Policy</Link>, and <Link href="/privacy" className="text-[#1a3de8] hover:underline">Privacy Policy</Link> for more information.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-[28px] font-bold mb-4">4. Artificial Intelligence and Memory Systems</h2>

              <div className="space-y-6">
                <div>
                  <p><strong>4.1 AI-Enabled Functionality Generally</strong></p>
                  <p className="mt-2">
                    Customer acknowledges that the Services include artificial intelligence-enabled features, including AI agents, automation, summarization, reasoning, memory, and action execution (&quot;AI Features&quot; or &quot;AI-Enabled Features&quot;). AI Features operate based on user inputs, workspace context, available memory, configured permissions, and authorized integrations and credentials at the time of invocation.
                  </p>
                  <p className="mt-2">
                    Customer authorizes Company to process Customer Data through AI Features as necessary to provide the Services in accordance with this Agreement and the <Link href="/privacy" className="text-[#1a3de8] hover:underline">Privacy Policy</Link>.
                  </p>
                </div>

                <div>
                  <p><strong>4.2 Human Review and Decision-Making</strong></p>
                  <p className="mt-2">
                    Customer agrees that it is solely responsible for reviewing, validating, and exercising human judgment over all AI-generated outputs, summaries, recommendations, action items, or automated actions.
                  </p>
                  <p className="mt-2">
                    Customer agrees not to use the Services for high-risk or regulated uses that are prohibited by applicable law or that require additional risk management obligations, including where the Services would be used to make or materially support decisions in areas such as employment, education admissions, essential public services, credit, insurance, housing, or the administration of justice, without meaningful human review and without complying with applicable legal requirements. Customer will notify Company in writing if it intends to use the Services for such regulated uses so the parties can assess compliance and, if applicable, agree on additional terms.
                  </p>
                </div>

                <div>
                  <p><strong>4.3 Memory Systems</strong></p>
                  <p className="mt-2">
                    Customer acknowledges that the Services include Memory systems that may store and process information derived from interactions, including without limitation: workspace-level memory; channel-level or shared memory derived from conversations and Authorized User directed agent actions; and user-level memory associated with individual users. Memory may reference prior discussions, decisions, action items, participation, or user-specific context and may be used to inform future AI interactions, summaries, or automated actions, subject to workspace configuration and permissions. Customer acknowledges that memory content may be visible to, accessible by, or acted upon by other Authorized Users depending on workspace configuration, channel membership, and sharing settings. See the User Terms of Service, Acceptable Use Policy, and Privacy Policy, which are incorporated by reference here, for more information.
                  </p>
                </div>

                <div>
                  <p><strong>4.4 No Model Transparency or Audit Obligations</strong></p>
                  <p className="mt-2">
                    Customer acknowledges that Company has no obligation to:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-2">
                    <li>explain, interpret, or disclose AI model logic, prompts, parameters, training data, or reasoning processes;</li>
                    <li>provide auditability, traceability, or reproducibility of AI outputs; or</li>
                    <li>enable Customer to inspect or validate internal AI system operation.</li>
                  </ul>
                  <p className="mt-2">
                    AI outputs and system behavior may change over time without notice.
                  </p>
                </div>

                <div>
                  <p><strong>4.5 Third-Party AI Providers</strong></p>
                  <p className="mt-2">
                    Customer acknowledges that AI Features rely on third-party artificial intelligence providers (&quot;Third-Party AI Providers&quot;), which may include OpenAI, Anthropic, Perplexity, or other providers selected by Company from time to time.
                  </p>
                  <p className="mt-2">
                    Customer acknowledges and agrees that:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-2">
                    <li>Customer Data may be transmitted to and processed by Third-Party AI Providers solely to provide requested functionality;</li>
                    <li>Third-Party AI Providers operate under their own terms, policies, and technical constraints, which may change over time; and</li>
                    <li>Company does not control Third-Party AI Provider internal data handling beyond contractual commitments.</li>
                  </ul>
                  <p className="mt-2">
                    Customer is responsible for compliance with all applicable Third-Party AI Provider acceptable use policies and restrictions.
                  </p>
                </div>

                <div>
                  <p><strong>4.6 No Opt-Out of AI Processing</strong></p>
                  <p className="mt-2">
                    Customer acknowledges that use of AI Features requires processing of Customer Data by AI systems, including Third-Party AI Providers. In accordance with the Privacy Policy, Customer may not opt out of AI processing while using the Services.
                  </p>
                </div>

                <div>
                  <p><strong>4.7 No Monitoring Obligation</strong></p>
                  <p className="mt-2">
                    Customer acknowledges that Company does not monitor, review, or validate AI outputs, memory content, or automated actions. Customer remains solely responsible for supervising Authorized Users, reviewing AI outputs, and enforcing internal policies governing AI use.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-[28px] font-bold mb-4">5. Third-Party Integrations and External Services</h2>

              <div className="space-y-6">
                <div>
                  <p><strong>5.1 Third-Party Integrations Generally</strong></p>
                  <p className="mt-2">
                    The Services may enable Customer to connect, authorize, access, or use third-party applications, platforms, services, APIs, data sources, or tools that are not provided by Company, including without limitation project management tools, document repositories, ticketing systems, messaging platforms, storage services, and developer tools (&quot;Third-Party Integrations&quot; or &quot;Third-Party Tools&quot;).
                  </p>
                  <p className="mt-2">
                    Third-Party Integrations are provided solely by the applicable third-party providers and operate under their own terms of service, privacy policies, security practices, and acceptable use requirements.
                  </p>
                </div>

                <div>
                  <p><strong>5.2 Customer Authorization and Delegated Access Model</strong></p>
                  <p className="mt-2">
                    Customer acknowledges that the Services operate on a delegated authorization model. When Customer or an Authorized User connects a Third-Party Integration, provides credentials, authorizes access, or enables an integration, such authorization may permit (1) AI agents, automated workflows, or system processes, and (2) other Authorized Users acting within the scope of workspace, channel, agent, or integration configuration to perform actions using the authorized credentials, tokens, API keys, OAuth grants, webhooks, or other access mechanisms. Customer acknowledges that actions performed using valid credentials are deemed authorized by Customer, regardless of the following: which individual initiated the action; whether the initiating user personally supplied the credentials; whether the action was initiated directly or via an AI agent; or whether the action occurred synchronously, asynchronously, or automatically.
                  </p>
                </div>

                <div>
                  <p><strong>5.3 Channel-Level, Agent-Level, and Contextual Scope</strong></p>
                  <p className="mt-2">
                    Customer assumes all risk arising from channel invitations, membership changes, or contextual access to integrations. Customer acknowledges that Third-Party Integrations may be scoped at the workspace, channel, agent, or user level, depending on Customer configuration and third-party capabilities. Customer acknowledges that Authorized Users may be invited to channels or collaborative contexts in which Third-Party Integrations or credentials have already been enabled.
                  </p>
                  <p className="mt-2">
                    Customer is solely responsible for:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-2">
                    <li>determining which integrations are available in which channels, agents, or contexts;</li>
                    <li>managing channel membership and invitations, including the addition of users to channels where integrations are enabled and whether sensitive integrations or data should be exposed in shared contexts; and</li>
                    <li>understanding how integration credentials may be reused, inherited, or invoked across contexts.</li>
                  </ul>
                  <p className="mt-2">
                    Customer acknowledges that:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-2">
                    <li>an invited user may be able to invoke an AI agent or request actions that rely on previously authorized credentials;</li>
                    <li>such actions may succeed, fail, or require additional authorization depending on scope and permissions; and</li>
                    <li>Company has no obligation to confirm whether an invited user was intended to have access to such integrations or actions.</li>
                  </ul>
                  <p className="mt-2">
                    Customer is solely responsible for all credentials used in connection with Third-Party Integrations.
                  </p>
                  <p className="mt-2">
                    Customer must:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-2">
                    <li>safeguard all credentials against unauthorized access or disclosure;</li>
                    <li>configure credentials with appropriate scopes and permissions;</li>
                    <li>promptly revoke, rotate, or disable compromised or unauthorized credentials; and</li>
                    <li>notify Company without undue delay upon discovering any compromise or misuse.</li>
                  </ul>
                  <p className="mt-2">
                    Company is entitled to rely on the validity of any credentials presented to the Services and has no obligation to verify the authority, intent, or appropriateness of any action taken using such credentials.
                  </p>
                  <p className="mt-2">
                    See the User Terms of Service, Acceptable Use Policy, and Privacy Policy, which are incorporated by reference here, for more information.
                  </p>
                </div>

                <div>
                  <p><strong>5.4 Failure or Limitation of Integration Actions</strong></p>
                  <p className="mt-2">
                    Customer acknowledges that actions involving Third-Party Integrations may fail, be denied, delayed, or partially executed due to the following: insufficient permissions or scopes; expired or revoked credentials; Third-Party Integration limitations or outages; or changes to third-party APIs or terms. Company makes no guarantee that any integration-dependent action will succeed and has no obligation to retry, escalate, or remediate failed actions.
                  </p>
                </div>

                <div>
                  <p><strong>5.5 Compliance with Third-Party Terms</strong></p>
                  <p className="mt-2">
                    Customer is solely responsible for compliance with all applicable third-party terms, policies, and acceptable use requirements governing Third-Party Integrations, including any restrictions on data use, automation, or AI-driven actions.
                  </p>
                </div>

                <div>
                  <p><strong>5.6 Suspension or Disabling of Integrations</strong></p>
                  <p className="mt-2">
                    Company may suspend, limit, or disable any Third-Party Integration or integration-dependent functionality where reasonably necessary to:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-2">
                    <li>comply with applicable law or third-party restrictions;</li>
                    <li>address security risks, abuse, or misuse;</li>
                    <li>prevent harm to the Services or other customers; or</li>
                    <li>maintain operational integrity.</li>
                  </ul>
                  <p className="mt-2">
                    Such suspension or limitation does not constitute a breach of this Agreement.
                  </p>
                </div>

                <div>
                  <p><strong>5.7 Allocation of Risk</strong></p>
                  <p className="mt-2">
                    Customer assumes all risk arising from the enablement, configuration, use, and reliance on Third-Party Integrations, including any claims, damages, regulatory actions, or losses resulting therefrom.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-[28px] font-bold mb-4">6. Fees and Payment</h2>
              <p>
                At this time, Company is providing Customer access to the Services free of charge. Company reserves the right to introduce fees for the Services in the future. If Company introduces fees, Company will provide reasonable notice, and any applicable fees and payment terms will be set forth in an Order Form or other written agreement between the parties.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-[28px] font-bold mb-4">7. Proprietary Rights and Licenses</h2>

              <div className="space-y-6">
                <div>
                  <p><strong>7.1 Ownership of the Services</strong></p>
                  <p className="mt-2">
                    As between the parties, Company and its licensors retain all right, title, and interest in and to the Services, including without limitation:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-2">
                    <li>the software, platform, and infrastructure underlying the Services;</li>
                    <li>AI agents, workflows, automation logic, and system architecture;</li>
                    <li>user interfaces, designs, layouts, and visual elements;</li>
                    <li>documentation, APIs, SDKs, and developer materials; and</li>
                    <li>all improvements, enhancements, modifications, and derivative works thereof.</li>
                  </ul>
                  <p className="mt-2">
                    Except for the limited rights expressly granted in this Agreement, no rights are granted to Customer by implication, estoppel, or otherwise.
                  </p>
                </div>

                <div>
                  <p><strong>7.2 License to Use the Services</strong></p>
                  <p className="mt-2">
                    Subject to Customer&apos;s compliance with this Agreement, Company grants Customer a limited, non-exclusive, non-transferable, non-sublicensable license during the applicable subscription term to access and use the Services solely for Customer&apos;s internal business purposes and in accordance with this Agreement, the User Terms of Service, Acceptable Use Policy, and Privacy Policy. Customer may permit Authorized Users to use the Services on its behalf, subject to Customer&apos;s responsibility for such use.
                  </p>
                </div>

                <div>
                  <p><strong>7.3 Restrictions</strong></p>
                  <p className="mt-2">
                    Customer shall not, and shall not permit any third party or Authorized User to:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-2">
                    <li>copy, modify, or create derivative works of the Services except as expressly permitted;</li>
                    <li>reverse engineer, decompile, disassemble, or attempt to derive source code or underlying models except to the extent prohibited by law;</li>
                    <li>access the Services to build or benchmark a competing product or service;</li>
                    <li>remove, obscure, or alter proprietary notices; or</li>
                    <li>use the Services in violation of applicable law, the User Terms of Service and Acceptable Use Policy, or third-party terms.</li>
                  </ul>
                </div>

                <div>
                  <p><strong>7.4 Customer Data Ownership</strong></p>
                  <p className="mt-2">
                    As between the parties, Customer retains all right, title, and interest in and to Customer Data, and nothing in this Agreement transfers ownership of Customer Data to Company.
                  </p>
                </div>

                <div>
                  <p><strong>7.5 License to Process Customer Data</strong></p>
                  <p className="mt-2">
                    In accordance with the Privacy Policy and this Agreement, Customer grants Company a limited, non-exclusive, worldwide, royalty-free license to process Customer Data solely as necessary to:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-2">
                    <li>provide, operate, secure, and maintain the Services;</li>
                    <li>enable collaboration, automation, integrations, and AI-enabled functionality;</li>
                    <li>operate memory systems and generate summaries or outputs as configured by Customer;</li>
                    <li>comply with Customer instructions; and</li>
                    <li>comply with applicable law.</li>
                  </ul>
                  <p className="mt-2">
                    This license terminates upon termination of the Agreement, except to the extent retention is required for legal, security, audit, or compliance purposes.
                  </p>
                </div>

                <div>
                  <p><strong>7.6 AI Outputs and Derivative Content</strong></p>
                  <p className="mt-2">
                    Customer acknowledges that:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-2">
                    <li>AI-generated outputs, summaries, action items, and memory artifacts are generated based on Customer Data, system context, and probabilistic models;</li>
                    <li>such outputs constitute Customer Data for purposes of this Agreement; and</li>
                    <li>Company does not claim ownership of AI outputs generated for Customer.</li>
                  </ul>
                  <p className="mt-2">
                    Nothing in this Agreement grants Customer any ownership or rights in Company&apos;s models, algorithms, prompts, system architecture, or underlying AI technology.
                  </p>
                </div>

                <div>
                  <p><strong>7.7 Feedback</strong></p>
                  <p className="mt-2">
                    If Customer or Authorized Users provide feedback, suggestions, ideas, or recommendations regarding the Services (&quot;Feedback&quot;), Customer grants Company a perpetual, irrevocable, worldwide, royalty-free license to use, incorporate, modify, and exploit such Feedback without obligation or restriction. Feedback does not create any confidentiality or compensation obligation on behalf of Company.
                  </p>
                </div>

                <div>
                  <p><strong>7.8 Third-Party Materials and Open Source</strong></p>
                  <p className="mt-2">
                    The Services may include or interact with third-party software, content, or services, including open-source components and Third-Party Tools. Such materials are subject to their own applicable terms, and nothing in this Agreement grants Customer rights beyond those permitted under such third-party licenses.
                  </p>
                </div>

                <div>
                  <p><strong>7.9 Reservation of Rights</strong></p>
                  <p className="mt-2">
                    All rights not expressly granted in this Agreement are reserved by Company and its licensors.
                  </p>
                </div>

                <div>
                  <p><strong>7.10 Trademarks</strong></p>
                  <p className="mt-2">
                    &quot;Popcorn&quot; is a trademark of A Dream Inc. All other trademarks are the property of their respective owners. Except as expressly permitted in writing by Company, Customer may not use Company&apos;s trademarks.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-[28px] font-bold mb-4">8. Confidentiality</h2>

              <div className="space-y-6">
                <div>
                  <p><strong>8.1 Definition of Confidential Information</strong></p>
                  <p className="mt-2">
                    &quot;Confidential Information&quot; means all non-public information disclosed by or on behalf of one party (the &quot;Disclosing Party&quot;) to the other party (the &quot;Receiving Party&quot;) in connection with this Agreement that (a) is designated as confidential, or (b) reasonably should be understood to be confidential given the nature of the information and the circumstances of disclosure.
                  </p>
                  <p className="mt-2">
                    Confidential Information includes, without limitation:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-2">
                    <li>Customer Data (which is Customer&apos;s Confidential Information);</li>
                    <li>a party&apos;s business, financial, product, technical, operational, security, and compliance information;</li>
                    <li>Order Forms and pricing;</li>
                    <li>Company&apos;s Confidential Information, including the Services (including non-public features), system design, architecture, workflows, AI/memory systems, non-public documentation, roadmaps, and security measures; and</li>
                    <li>the existence and terms of this Agreement (to the extent not publicly known through no fault of the Receiving Party).</li>
                  </ul>
                </div>

                <div>
                  <p><strong>8.2 Exclusions</strong></p>
                  <p className="mt-2">
                    Confidential Information does not include information that the Receiving Party can demonstrate is or becomes publicly available through no breach of this Agreement; was lawfully known to the Receiving Party without restriction before disclosure by the Disclosing Party; is independently developed by the Receiving Party without use of or reference to the Disclosing Party&apos;s Confidential Information; or is lawfully received from a third party without breach of a confidentiality obligation owed to the Disclosing Party.
                  </p>
                </div>

                <div>
                  <p><strong>8.3 Protection and Use Restrictions</strong></p>
                  <p className="mt-2">
                    The Receiving Party will: (1) use the Disclosing Party&apos;s Confidential Information solely to perform its obligations or exercise its rights under this Agreement; (2) protect the Disclosing Party&apos;s Confidential Information using at least reasonable care and no less than the degree of care it uses to protect its own confidential information of similar nature; and (3) not disclose the Disclosing Party&apos;s Confidential Information to any third party except as expressly permitted in Sections 8.4 and 8.5 of this Agreement.
                  </p>
                </div>

                <div>
                  <p><strong>8.4 Permitted Disclosures</strong></p>
                  <p className="mt-2">
                    The Receiving Party may disclose the Disclosing Party&apos;s Confidential Information only to the extent necessary and only to:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-2">
                    <li>its and its affiliates&apos; employees, contractors, and agents who have a bona fide need to know for purposes of this Agreement and who are bound by written confidentiality obligations at least as protective as those herein;</li>
                    <li>its professional advisers (e.g., legal, accounting, insurance) who are bound by professional duties of confidentiality or written confidentiality obligations; and</li>
                    <li>in Company&apos;s case, its service providers and subprocessors (including hosting, infrastructure, security, support, and AI inference providers) who are bound by written confidentiality obligations at least as protective as those herein.</li>
                  </ul>
                  <p className="mt-2">
                    The Receiving Party remains responsible for any breach of this Section by the persons or entities to whom it discloses Confidential Information, except to the extent prohibited by applicable law.
                  </p>
                </div>

                <div>
                  <p><strong>8.5 Compelled Disclosure</strong></p>
                  <p className="mt-2">
                    If the Receiving Party is required by applicable law, regulation, or valid legal process to disclose the Disclosing Party&apos;s Confidential Information, the Receiving Party will (to the extent legally permitted):
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-2">
                    <li>provide the Disclosing Party prompt written notice of the requirement so the Disclosing Party may seek a protective order or other remedy; and</li>
                    <li>disclose only the portion of Confidential Information that is legally required and use commercially reasonable efforts to obtain confidential treatment for any Confidential Information so disclosed.</li>
                  </ul>
                </div>

                <div>
                  <p><strong>8.6 Customer Data as Confidential Information; Operational Access</strong></p>
                  <p className="mt-2">
                    Customer Data is Customer&apos;s Confidential Information. Company will treat Customer Data as Confidential Information and will access, use, and disclose Customer Data only:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-2">
                    <li>as necessary to provide, operate, secure, and support the Services;</li>
                    <li>in accordance with Customer&apos;s documented instructions as reflected in this Agreement, Customer&apos;s configuration and Authorized User actions, and the Privacy Policy; and</li>
                    <li>as required by applicable law.</li>
                  </ul>
                  <p className="mt-2">
                    Customer acknowledges that, consistent with the Services&apos; design and Customer&apos;s configuration, Customer Data may be accessible to Authorized Users and administrators within Customer&apos;s workspace(s), and that Customer is responsible for managing channel membership, permissions, and sharing settings.
                  </p>
                </div>

                <div>
                  <p><strong>8.7 AI, Memory, and Confidentiality</strong></p>
                  <p className="mt-2">
                    Customer acknowledges the following. Customer Data (which may include Confidential Information) may be processed by AI-Enabled Features and memory systems to provide requested functionality (e.g., summarization, action items, recall, automation), consistent with the Services&apos; design and Customer configuration, where applicable. AI-generated outputs, summaries, and memory artifacts may reflect or reference Customer Data (including Confidential Information) provided through use of the Services. Customer Data may be transmitted to and processed by Third-Party AI Providers and other subprocessors as necessary to provide AI-Enabled Features, subject to Company&apos;s contractual arrangements with such providers and the Privacy Policy.
                  </p>
                  <p className="mt-2">
                    Customer is responsible for determining whether it is appropriate to use the Services (including AI and memory features) for particular categories of Confidential Information, and for training and instructing Authorized Users regarding safe use (including private/restricted channel use for sensitive or privileged information, and careful channel membership management).
                  </p>
                </div>

                <div>
                  <p><strong>8.8 Return, Deletion, and Retention</strong></p>
                  <p className="mt-2">
                    Upon termination or expiration of the Agreement, Company will handle Customer Data in accordance with this Agreement (including any agreed export provisions), system behavior (including any fixed retention limits), and applicable law. Customer is responsible for exporting Customer Data prior to termination if Customer requires continued access. Notwithstanding the foregoing, the Receiving Party may retain Confidential Information to the extent required to comply with applicable law, regulation, or bona fide internal compliance requirements, provided that any retained Confidential Information remains subject to the confidentiality obligations of this Section for so long as it is retained.
                  </p>
                </div>

                <div>
                  <p><strong>8.9 Equitable Relief</strong></p>
                  <p className="mt-2">
                    Each party acknowledges that unauthorized disclosure or use of Confidential Information may cause irreparable harm for which monetary damages may be an insufficient remedy. Accordingly, the Disclosing Party may seek injunctive or equitable relief (without the necessity of posting bond, to the extent permitted by law) in addition to any other remedies available.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 9 */}
            <section>
              <h2 className="text-[28px] font-bold mb-4">9. Representations, Warranties, Disclaimers, and Exclusive Remedies</h2>

              <div className="space-y-6">
                <div>
                  <p><strong>9.1 Mutual Representations</strong></p>
                  <p className="mt-2">
                    Each party represents and warrants that:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-2">
                    <li>it is duly organized, validly existing, and in good standing under the laws of its jurisdiction of formation;</li>
                    <li>it has the legal power and authority to enter into this Agreement and perform its obligations hereunder; and</li>
                    <li>this Agreement constitutes a valid and binding obligation enforceable against it in accordance with its terms.</li>
                  </ul>
                </div>

                <div>
                  <p><strong>9.2 Customer Representations and Warranties</strong></p>
                  <p className="mt-2">
                    Customer represents and warrants that:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-2">
                    <li>it has obtained and will maintain all rights, licenses, consents, notices, and authorizations necessary for Customer Data to be submitted to, processed by, and disclosed through the Services, including through AI-enabled features and Third-Party Integrations;</li>
                    <li>Customer Data does not and will not violate applicable law or infringe, misappropriate, or otherwise violate any intellectual property, privacy, publicity, employment, or other rights of any third party;</li>
                    <li>Customer has determined that the Services are appropriate for Customer&apos;s use of sensitive, confidential, proprietary, or regulated information, and that Customer has configured (and will maintain) channel access, permissions, sharing settings, and integrations in a manner consistent with Customer&apos;s legal, contractual, and internal obligations applicable to such information;</li>
                    <li>Customer has informed Authorized Users of applicable workplace policies, monitoring practices, AI usage, memory behavior, retention settings, and third-party integrations as implemented within the Services;</li>
                    <li>Customer will not use the Services or AI outputs as the sole basis for automated decisions with legal, employment, financial, medical, or similar material effects on individuals;</li>
                    <li>Customer&apos;s use of Third-Party Integrations through the Services does not violate any third-party terms; and</li>
                    <li>Customer&apos;s use of the Services complies with all applicable laws, regulations, and industry-specific obligations.</li>
                  </ul>
                </div>

                <div>
                  <p><strong>9.3 Company&apos;s Limited Warranty</strong></p>
                  <p className="mt-2">
                    Company warrants that it will provide the Services during the Term.
                  </p>
                  <p className="mt-2">
                    Without limitation, this warranty does not apply to issues caused by:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-2">
                    <li>Customer Data;</li>
                    <li>Third-Party AI Providers or Third-Party Tools;</li>
                    <li>integrations, credentials, or configurations controlled by Customer or third parties;</li>
                    <li>misuse of the Services; or</li>
                    <li>failures resulting from actions deemed authorized by Customer.</li>
                  </ul>
                </div>

                <div>
                  <p><strong>9.4 Warranty Disclaimer</strong></p>
                  <p className="mt-2 uppercase">
                    EXCEPT AS EXPRESSLY PROVIDED IN THIS AGREEMENT, THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE.&quot;
                  </p>
                  <p className="mt-2 uppercase">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, COMPANY DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, OR ACCURACY.
                  </p>
                  <p className="mt-2 uppercase">
                    WITHOUT LIMITING THE FOREGOING, COMPANY DOES NOT WARRANT THAT:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-2">
                    <li>the Services will be uninterrupted, error-free, or completely secure;</li>
                    <li>AI outputs, summaries, memory artifacts, or automated actions will be accurate, complete, current, or reliable;</li>
                    <li>AI outputs will not contain errors, hallucinations, omissions, or unintended inferences;</li>
                    <li>AI outputs will be suitable for compliance, employment, legal, medical, or financial decisions;</li>
                    <li>Memory systems will capture all relevant context or exclude unintended information; or</li>
                    <li>Third-Party AI Providers or Third-Party Tools will continue to be available or unchanged.</li>
                  </ul>
                  <p className="mt-2">
                    Customer acknowledges and agrees that:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-2">
                    <li>AI outputs are probabilistic and non-deterministic;</li>
                    <li>AI systems may generate content that is incomplete, misleading, or incorrect;</li>
                    <li>Company does not guarantee explainability, auditability, or transparency of AI model logic;</li>
                    <li>AI memory and summaries may reflect subjective interpretations of prior interactions;</li>
                    <li>Memory systems may be incomplete, inaccurate, or context-dependent;</li>
                    <li>Summaries, reports or periodic outputs (including daily, weekly, monthly, or annual summaries) may omit relevant information or reflect incorrect assumptions; and</li>
                    <li>The use of generative AI may increase the risk of copyright, intellectual property, or other third-party claims.</li>
                  </ul>
                  <p className="mt-2">
                    Customer assumes all risk associated with the use, publication, disclosure, or reliance on AI-generated outputs, including claims alleging infringement, misappropriation, defamation, or unlawful content.
                  </p>
                  <p className="mt-2">
                    Customer assumes all risk associated with reliance on AI outputs or memory-derived information.
                  </p>
                </div>

                <div>
                  <p><strong>9.5 Third-Party Services - No Warranty</strong></p>
                  <p className="mt-2">
                    Without limitation, Company does not warrant and is not responsible for the following:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-2">
                    <li>Third-Party Tools and Integrations;</li>
                    <li>credential misuse, inheritance, or unauthorized access resulting from Customer configuration;</li>
                    <li>actions executed through valid credentials, tokens, or webhooks;</li>
                    <li>availability, performance, or reliability of Third-Party Integrations;</li>
                    <li>data loss, corruption, or unauthorized access caused by Third-Party Integrations;</li>
                    <li>changes to third-party functionality, APIs, or terms; and</li>
                    <li>downstream use or processing of Customer Data by Third-Party Integrations.</li>
                  </ul>
                </div>

                <div>
                  <p><strong>9.6 Exclusive Remedy</strong></p>
                  <p className="mt-2">
                    Customer&apos;s sole and exclusive remedy for breach of the limited warranty in Section 9.3 is re-performance of the affected Services, or if re-performance is not commercially reasonable, termination of the affected portion of the Services and a refund of prepaid fees for the unused portion of the applicable subscription term.
                  </p>
                </div>

                <div>
                  <p><strong>9.7 No Additional Warranties</strong></p>
                  <p className="mt-2">
                    No oral or written information or advice given by Company, its employees, agents, or partners creates any warranty not expressly stated in this Agreement.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-[28px] font-bold mb-4">10. Indemnification</h2>

              <div className="space-y-6">
                <div>
                  <p><strong>10.1 Indemnification by Customer</strong></p>
                  <p className="mt-2">
                    Customer will defend, indemnify, and hold harmless Company and its affiliates, officers, directors, employees, contractors, and agents from and against any and all claims (including third-party claims), demands, actions, proceedings, damages, losses, liabilities, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or relating to:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-2">
                    <li>Customer Data, including any allegation that Customer Data infringes, misappropriates, or violates intellectual property rights, privacy rights, publicity rights, employment laws, or other legal obligations;</li>
                    <li>the disclosure or use of sensitive information due to workspace configuration, user behavior, or feature use;</li>
                    <li>use of the Services by Customer or Authorized Users, including use of AI-enabled features, memory systems, summaries, action items, or automated workflows;</li>
                    <li>decisions or actions taken by Customer or Authorized Users in reliance on AI outputs, summaries, or memory-derived information, including employment, disciplinary, legal, compliance, financial, or operational decisions;</li>
                    <li>failure to obtain required notices, consents, or authorizations, including employee monitoring disclosures, AI usage notices, and third-party integration permissions;</li>
                    <li>Third-Party AI Providers or Third-Party Tools, including claims arising from Customer&apos;s use of outputs, actions, or data processed by such providers;</li>
                    <li>credentials, integrations, or webhooks, including misuse, compromise, inheritance, or unauthorized actions deemed authorized under this Agreement;</li>
                    <li>violation of law by Customer or Authorized Users, including employment, surveillance, data protection, export control, or consumer protection laws; or</li>
                    <li>breach of this Agreement, the User Terms of Service, Acceptable Use Policy, Privacy Policy, or applicable third-party terms.</li>
                  </ul>
                  <p className="mt-2">
                    This indemnity applies regardless of whether the claim arises from content generated by AI, memory systems, automated actions, or human input.
                  </p>
                </div>

                <div>
                  <p><strong>10.2 Indemnification by Company</strong></p>
                  <p className="mt-2">
                    Company will defend, indemnify, and hold harmless Customer from and against any third-party claim alleging that the Services, when used in accordance with this Agreement, infringe a U.S. patent, copyright, or trademark, provided that such claim does not arise from:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-2">
                    <li>Customer Data;</li>
                    <li>AI outputs, summaries, memory artifacts, or derivative content;</li>
                    <li>Third-Party AI Providers or Third-Party Tools;</li>
                    <li>modifications not made by Company;</li>
                    <li>use of the Services in violation of this Agreement or applicable law; or</li>
                    <li>combination of the Services with products or services not provided by Company.</li>
                  </ul>
                </div>

                <div>
                  <p><strong>10.3 Indemnification Procedure</strong></p>
                  <p className="mt-2">
                    <strong>10.3.1 Participation Rights</strong>
                  </p>
                  <p className="mt-2">
                    The Indemnified Party shall promptly notify the Indemnifying Party of any third-party claim. The Indemnifying Party shall have the right to assume the defense of such claim with counsel of its choice, subject to the Indemnified Party&apos;s prior written approval (not to be unreasonably withheld, conditioned, or delayed).
                  </p>
                  <p className="mt-2">
                    The Indemnified Party shall have the right to participate in the defense of such claim and to employ separate counsel of its own choosing and at its own expense; provided, however, that the Indemnifying Party shall bear the reasonable fees and expenses of the Indemnified Party&apos;s counsel if:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-2">
                    <li>The Indemnifying Party fails to promptly assume the defense;</li>
                    <li>The Indemnified Party reasonably concludes that a conflict of interest exists between the parties; or</li>
                    <li>The Indemnified Party determines that there are legal defenses available to it that are different from or additional to those available to the Indemnifying Party.</li>
                  </ul>
                  <p className="mt-2">
                    <strong>10.3.2 Settlement</strong>
                  </p>
                  <p className="mt-2">
                    The Indemnifying Party shall not, without the prior written consent of the Indemnified Party (which consent shall not be unreasonably withheld), settle or compromise any claim or consent to the entry of any judgment that:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-2">
                    <li>Does not include an unconditional release of the Indemnified Party from all liability;</li>
                    <li>Imposes any equitable relief, injunction, or other non-monetary obligation upon the Indemnified Party; or</li>
                    <li>Includes any admission of fault or culpability by the Indemnified Party.</li>
                  </ul>
                </div>

                <div>
                  <p><strong>10.4 Mitigation and Remedies</strong></p>
                  <p className="mt-2">
                    If Company reasonably believes the Services may become subject to an infringement claim, Company may, at its option and expense: (1) procure the right for Customer to continue using the Services; (2) modify the Services to avoid infringement without materially degrading functionality; or (3) terminate the affected Services and refund prepaid fees for the unused portion of the subscription term. This Section states Customer&apos;s sole and exclusive remedy for intellectual property infringement claims against Company.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 11 */}
            <section>
              <h2 className="text-[28px] font-bold mb-4">11. Limitation of Liability</h2>

              <div className="space-y-6">
                <div>
                  <p><strong>11.1 Exclusion of Certain Damages</strong></p>
                  <p className="mt-2 uppercase">
                    TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT WILL EITHER PARTY BE LIABLE FOR ANY:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-2 uppercase">
                    <li>INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, EXEMPLARY, OR PUNITIVE DAMAGES;</li>
                    <li>LOSS OF PROFITS, REVENUE, BUSINESS, GOODWILL, OR ANTICIPATED SAVINGS;</li>
                    <li>LOSS OF DATA, DATA CORRUPTION, OR FAILURE TO STORE OR RETRIEVE DATA;</li>
                    <li>INTERRUPTION OF BUSINESS OR SYSTEM DOWNTIME; OR</li>
                    <li>COSTS OF PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES,</li>
                  </ul>
                  <p className="mt-2 uppercase">
                    ARISING OUT OF OR RELATING TO THIS AGREEMENT, THE SERVICES, OR ANY RELATED DOCUMENTATION, EVEN IF A PARTY HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES AND EVEN IF A REMEDY FAILS OF ITS ESSENTIAL PURPOSE.
                  </p>
                </div>

                <div>
                  <p><strong>11.2 Cap on Liability</strong></p>
                  <p className="mt-2 uppercase">
                    EXCEPT FOR EXCLUDED CLAIMS IDENTIFIED IN SECTION 11.3, EACH PARTY&apos;S TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO THIS AGREEMENT WILL NOT EXCEED THE AMOUNT PAID OR PAYABLE BY CUSTOMER TO COMPANY UNDER THIS AGREEMENT IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
                  </p>
                </div>

                <div>
                  <p><strong>11.3 Excluded Claims</strong></p>
                  <p className="mt-2">
                    The limitations in Sections 11.1 and 11.2 do not apply to the following: Customer&apos;s indemnification obligations under Section 10; Customer&apos;s breach of confidentiality obligations; Customer&apos;s violation of intellectual property rights; Customer&apos;s violation of applicable law; or amounts payable under Section 6 (Fees and Payment), if applicable.
                  </p>
                </div>

                <div>
                  <p><strong>11.4 AI-Specific Risk Allocation</strong></p>
                  <p className="mt-2 uppercase">
                    WITHOUT LIMITING THE FOREGOING, CUSTOMER ACKNOWLEDGES AND AGREES THAT COMPANY SHALL HAVE NO LIABILITY FOR DECISIONS, ACTIONS, OR OUTCOMES BASED ON AI OUTPUTS OR MEMORY-DERIVED INFORMATION. FURTHER, COMPANY SHALL HAVE NO LIABILITY FOR EMPLOYMENT, DISCIPLINARY, LEGAL, COMPLIANCE, OR FINANCIAL DECISIONS MADE USING THE SERVICES. ALL SUCH USE IS AT CUSTOMER&apos;S SOLE RISK.
                  </p>
                  <p className="mt-2">
                    These limitations apply regardless of whether the claim is framed in contract, tort (including negligence), strict liability, statutory liability, or otherwise.
                  </p>
                </div>

                <div>
                  <p><strong>11.5 Third-Party Services and AI Providers</strong></p>
                  <p className="mt-2 uppercase">
                    COMPANY SHALL NOT BE LIABLE FOR ANY DAMAGES ARISING FROM OR RELATING TO:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-2 uppercase">
                    <li>THIRD-PARTY AI PROVIDERS;</li>
                    <li>THIRD-PARTY TOOLS, INTEGRATIONS, OR SERVICES;</li>
                    <li>OUTAGES, API CHANGES, OR SERVICE MODIFICATIONS BY THIRD PARTIES; OR</li>
                    <li>CUSTOMER&apos;S USE OF THIRD-PARTY OUTPUTS OR AUTOMATED ACTIONS.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Section 12 */}
            <section>
              <h2 className="text-[28px] font-bold mb-4">12. Term and Termination</h2>

              <div className="space-y-6">
                <div>
                  <p><strong>12.1 Term</strong></p>
                  <p className="mt-2">
                    This Agreement begins on the date this Agreement is signed (&quot;Effective Date&quot;) and continues for twelve (12) months, unless otherwise terminated in accordance with this section. Thereafter, the Agreement will automatically renew for successive renewal terms of equal duration (each, a &quot;Renewal Term&quot;) unless either party provides written notice of non-renewal at least thirty (30) days prior to the end of the then-current term.
                  </p>
                </div>

                <div>
                  <p><strong>12.2 Suspension of Services</strong></p>
                  <p className="mt-2">
                    Company may suspend Customer&apos;s or any Authorized User&apos;s access to the Services, in whole or in part, immediately upon notice (or without notice where legally required or operationally necessary), if Company reasonably determines that:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-2">
                    <li>Customer or an Authorized User has violated this Agreement, the User Terms of Service, the Acceptable Use Policy, or applicable law;</li>
                    <li>Customer&apos;s use of the Services poses a security risk, creates risk of harm to Company, other customers, users, or third parties, or threatens the integrity or availability of the Services;</li>
                    <li>credentials, integrations, tokens, webhooks, or automated workflows are being misused, compromised, or used in an unauthorized manner;</li>
                    <li>Customer&apos;s use of AI features or memory systems presents legal, regulatory, or compliance risk;</li>
                    <li>required fees are overdue; or</li>
                    <li>suspension is required to comply with law, court order, or governmental request.</li>
                  </ul>
                  <p className="mt-2">
                    Where reasonably practicable, Company will provide notice and an opportunity to cure prior to suspension. Suspension does not relieve Customer of any payment obligations.
                  </p>
                </div>

                <div>
                  <p><strong>12.3 Termination for Cause</strong></p>
                  <p className="mt-2">
                    Either party may terminate this Agreement for cause upon written notice if the other party materially breaches this Agreement and fails to cure such breach within thirty (30) days after receiving written notice thereof, except that Company may terminate immediately for uncured breaches relating to security, unlawful activity, misuse of AI features, or violation of acceptable use restrictions.
                  </p>
                </div>

                <div>
                  <p><strong>12.4 Termination for Convenience</strong></p>
                  <p className="mt-2">
                    Either party may terminate this Agreement for convenience upon at least thirty (30) days&apos; prior written notice. Termination for convenience does not entitle Customer to any refund of prepaid fees, except as expressly required by applicable law.
                  </p>
                </div>

                <div>
                  <p><strong>12.5 Effect of Termination</strong></p>
                  <p className="mt-2">
                    Upon termination or expiration of this Agreement:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-2">
                    <li>all rights and licenses granted to Customer under this Agreement immediately terminate;</li>
                    <li>Customer&apos;s and Authorized Users&apos; access to the Services will be disabled;</li>
                    <li>Customer remains responsible for all fees accrued through the effective date of termination; and</li>
                    <li>Customer Data will be handled in accordance with Section 12.6.</li>
                  </ul>
                </div>

                <div>
                  <p><strong>12.6 Customer Data After Termination</strong></p>
                  <p className="mt-2">
                    Following termination or expiration, Company will retain Customer Data in accordance with:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-2">
                    <li>system-defined retention limits (including fixed deletion periods for certain private communications);</li>
                    <li>applicable law; and</li>
                    <li>Company&apos;s backup, security, and audit requirements.</li>
                  </ul>
                  <p className="mt-2">
                    Unless otherwise separately agreed in writing, Company has no obligation to retain Customer Data beyond the applicable retention period, which is thirty (30) days (subject to any shorter system-defined deletion periods for certain private communications). Customer is solely responsible for exporting any Customer Data prior to termination.
                  </p>
                </div>

                <div>
                  <p><strong>12.7 Survival</strong></p>
                  <p className="mt-2">
                    The following sections survive termination or expiration of this Agreement: Sections relating to Fees and Payment, Proprietary Rights, Confidentiality, Representations and Warranties, Disclaimers, Indemnification, Limitation of Liability, Arbitration and Class Action Waiver, Governing Law, and any provisions that by their nature should survive.
                  </p>
                </div>

                <div>
                  <p><strong>12.8 No Liability for Termination</strong></p>
                  <p className="mt-2">
                    Except as expressly provided in this Agreement, neither party will be liable to the other for damages arising solely from termination or expiration of this Agreement, including loss of anticipated profits, data, or business opportunity.
                  </p>
                </div>
              </div>
            </section>

            {/* Section 13 */}
            <section>
              <h2 className="text-[28px] font-bold mb-4">13. General Provisions</h2>

              <div className="space-y-6">
                <div>
                  <p><strong>13.1 Independent Contractors</strong></p>
                  <p className="mt-2">
                    The parties are independent contractors. Nothing in this Agreement creates any partnership, joint venture, fiduciary relationship, agency, employment, or franchise relationship between the parties. Neither party has authority to bind the other or incur obligations on the other&apos;s behalf.
                  </p>
                </div>

                <div>
                  <p><strong>13.2 No Third-Party Beneficiaries</strong></p>
                  <p className="mt-2">
                    Except as expressly provided herein, this Agreement does not confer any rights or remedies upon any third party, including Authorized Users, Third-Party AI Providers, or Third-Party Tool providers. Third-Party AI Providers and integration partners are not parties to this Agreement and are not third-party beneficiaries.
                  </p>
                </div>

                <div>
                  <p><strong>13.3 Assignment</strong></p>
                  <p className="mt-2">
                    Customer may not assign or transfer this Agreement, in whole or in part, whether by operation of law, merger, acquisition, sale of assets, or otherwise, without Company&apos;s prior written consent, which shall not be unreasonably withheld. Company may assign this Agreement without Customer&apos;s consent in connection with a merger, acquisition, corporate reorganization, or sale of all or substantially all of its assets. Any prohibited assignment is void.
                  </p>
                </div>

                <div>
                  <p><strong>13.4 Force Majeure</strong></p>
                  <p className="mt-2">
                    Neither party will be liable for failure or delay in performance (other than payment obligations) due to events beyond its reasonable control, including acts of God, natural disasters, war, terrorism, labor disputes, governmental actions, utility or network failures, or failures of Third-Party AI Providers or infrastructure providers.
                  </p>
                </div>

                <div>
                  <p><strong>13.5 Export Controls and Sanctions</strong></p>
                  <p className="mt-2">
                    Customer represents and warrants that it is not subject to sanctions or located in a jurisdiction subject to comprehensive trade sanctions. Customer agrees to comply with all applicable export control, economic sanctions, and trade laws in connection with its use of the Services, including restrictions on access to AI-enabled functionality. Company may suspend access as required to comply with applicable law.
                  </p>
                </div>

                <div>
                  <p><strong>13.6 Anti-Corruption</strong></p>
                  <p className="mt-2">
                    Each party agrees to comply with all applicable anti-bribery and anti-corruption laws. Neither party will offer, promise, authorize, or provide anything of value for an improper purpose in connection with this Agreement. Reasonable gifts and entertainment provided in the ordinary course of business do not violate the above restriction.
                  </p>
                </div>

                <div>
                  <p><strong>13.7 Notices</strong></p>
                  <p className="mt-2">
                    Notices under this Agreement must be in writing and will be deemed given when delivered by personal delivery, nationally recognized overnight courier, or email to the addresses specified in the applicable Order Form or otherwise designated in writing. Operational and administrative notices may be delivered electronically through the Services.
                  </p>
                </div>

                <div>
                  <p><strong>13.8 Waiver</strong></p>
                  <p className="mt-2">
                    Failure or delay by either party to enforce any provision of this Agreement will not constitute a waiver of future enforcement of that or any other provision. Any waiver must be in writing and signed by the waiving party.
                  </p>
                </div>

                <div>
                  <p><strong>13.9 Severability</strong></p>
                  <p className="mt-2">
                    If any provision of this Agreement is held invalid or unenforceable, the remaining provisions will remain in full force and effect, and the invalid provision will be reformed to the minimum extent necessary to reflect the parties&apos; original intent.
                  </p>
                </div>

                <div>
                  <p><strong>13.10 Governing Law; Arbitration; Venue; No Class Action</strong></p>
                  <p className="mt-2">
                    This Agreement and any dispute, claim, or controversy arising out of or relating to this Agreement or the Services shall be resolved exclusively by final and binding arbitration, except that either party may seek injunctive or equitable relief in a court of competent jurisdiction to prevent actual or threatened misuse of intellectual property or breach of confidentiality. The arbitration shall be conducted in San Francisco, California under the rules of AAA, and the arbitrator shall apply the substantive law of California, without regard to conflict-of-laws principles. The parties irrevocably consent to the exclusive jurisdiction of the courts located in San Francisco, California for purposes of enforcing this arbitration provision or any arbitral award and waive any objection based on improper venue or forum non conveniens. All claims to the fullest extent allowed by law must be brought on an individual basis, and the parties waive any right to bring or participate in any class, collective, or representative action.
                  </p>
                </div>

                <div>
                  <p><strong>13.11 Entire Agreement; Order of Precedence</strong></p>
                  <p className="mt-2">
                    This Agreement, together with all exhibits and documents expressly incorporated by reference (including the User Terms of Service, Acceptable Use Policy, Privacy Policy, Cookie Policy, and Payment and Payment Terms Form), constitutes the entire agreement between the parties regarding the Services and supersedes all prior or contemporaneous agreements or understandings.
                  </p>
                  <p className="mt-2">
                    In the event of any conflict, the following order of precedence will apply (highest to lowest): (1) Payment and Payment Terms Form (but only for pricing, term, and service-level/plan-specific terms expressly stated therein); (2) this Agreement; (3) the Privacy Policy; (4) the Acceptable Use Policy; and (5) the User Terms of Service.
                  </p>
                </div>

                <div>
                  <p><strong>13.12 Updates to this Agreement</strong></p>
                  <p className="mt-2">
                    Company may update this Agreement from time to time. Company will provide notice of any updates to Customer by email, through the Services, or by other reasonable means. Unless otherwise stated in the notice, updates will become effective on the date specified by Company, and Customer&apos;s continued access to or use of the Services after the effective date constitutes Customer&apos;s acceptance of the updated Agreement.
                  </p>
                </div>

                <div>
                  <p><strong>13.13 Interpretation</strong></p>
                  <p className="mt-2">
                    Headings are for convenience only and have no legal effect. The words &quot;including&quot; and &quot;such as&quot; mean &quot;including without limitation.&quot; Ambiguities shall not be construed against either party based on authorship.
                  </p>
                </div>
              </div>
            </section>
          </div>
        </article>
      </div>

      <PageFooter />
    </main>
  );
}
