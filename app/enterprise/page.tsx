import Link from "next/link";
import PageFooter from "../components/PageFooter";
import SubpageNav from "../components/SubpageNav";

export default function EnterpriseServicesAgreementPage() {
  return (
    <main className="relative min-h-screen bg-[#FFFDF8] text-[#1a1a1a]">
      <SubpageNav />

      <div className="max-w-[1200px] mx-auto px-10 pt-32 pb-20">
        <article className="max-w-[900px] mx-auto">
          <h1 className="text-[56px] leading-[1.1] tracking-tight mb-4" style={{ fontFamily: "var(--font-synt)" }}>
            Enterprise Services Agreement
          </h1>
          <p className="text-[16px] text-[#1a1a1a]/60 mb-12">Last Edited: April 16, 2026</p>

          <div className="space-y-8 text-[18px] leading-relaxed">
            <section>
              <p>
                This Enterprise Services Agreement (&quot;Agreement&quot;) is entered into by and between A Dream (&quot;A Dream,&quot; &quot;we,&quot; or &quot;us&quot;) and the entity or individual identified as the customer (&quot;Customer,&quot; &quot;you,&quot; or &quot;your&quot;). This Agreement governs Customer&apos;s access to and use of the Services.
              </p>
            </section>

            {/* Section 1 */}
            <section>
              <h2 className="text-[28px] font-bold mb-4">1. Definitions</h2>
              <p>
                &ldquo;In-Channel App&rdquo; means a lightweight application created by the AI agent within a channel in response to a user prompt, which may include interactive elements, data visualizations, or functional tools. In-Channel Apps are visible and accessible to all members of the channel in which they are created.
              </p>
              <p className="mt-2">
                &ldquo;Talk-Through Feature&rdquo; means the real-time voice and screen-sharing functionality within the Services that enables a user to speak with the AI agent while optionally sharing their screen and cursor position. The AI agent may observe, process, and respond to audio input, screen content, and cursor movement during a Talk-Through session.
              </p>
              <p className="mt-2">
                &ldquo;Talk-Through Session Data&rdquo; means all data generated during a Talk-Through session, including but not limited to voice audio, transcriptions, screen captures, cursor tracking data, and any AI-generated responses, summaries, or outputs derived therefrom.
              </p>
              <p className="mt-2">
                &ldquo;Workspace-Owned Computer&rdquo; means the cloud-hosted virtual machine (VM) provisioned by A Dream for a workspace, within which the AI agent may execute code, access files, run applications, browse the web, and perform other computational tasks on behalf of Authorized Users.
              </p>
              <p className="mt-2">
                Other capitalized terms used but not defined in this Agreement have the meanings given in the <Link href="/tos" className="text-[#1a3de8] hover:underline">User Terms of Service</Link>, <Link href="/tos#acceptable-use-policy" className="text-[#1a3de8] hover:underline">Acceptable Use Policy</Link>, and <Link href="/privacy" className="text-[#1a3de8] hover:underline">Privacy Policy</Link>, each incorporated by reference.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-[28px] font-bold mb-4">2. A Dream&apos;s Responsibilities</h2>

              <div className="space-y-6">
                <div>
                  <p><strong>2.1 Provision of the Services</strong></p>
                  <p className="mt-2">
                    Subject to the terms and conditions of this Agreement, A Dream will make the Services available to Customer and its Authorized Users during the applicable subscription term.
                  </p>
                </div>

                <div>
                  <p><strong>2.2 Availability and Modifications</strong></p>
                  <p className="mt-2">
                    A Dream may perform scheduled or emergency maintenance, updates, or modifications to the Services from time to time. A Dream will use commercially reasonable efforts to minimize service disruptions but does not guarantee uninterrupted availability.
                  </p>
                  <p className="mt-2">
                    A Dream may update, enhance, modify, or discontinue features or functionality of the Services, including AI-Enabled features, integrations, or Memory functionality, provided that such changes do not materially degrade the core functionality of the Services.
                  </p>
                </div>

                <div>
                  <p><strong>2.3 Processing and Protection of Customer Data</strong></p>
                  <p className="mt-2">
                    A Dream will process Customer Data in accordance with the <Link href="/privacy" className="text-[#1a3de8] hover:underline">Privacy Policy</Link>.
                  </p>
                </div>

                <div>
                  <p><strong>2.4 Security Measures</strong></p>
                  <p className="mt-2">
                    A Dream will implement and maintain reasonable administrative, technical, and organizational measures designed to protect Customer Data against unauthorized access, loss, misuse, or disclosure, taking into account the nature of the Services and current industry practices. Customer acknowledges that no system can be guaranteed to be completely secure and that security obligations are subject to the limitations set forth in this Agreement.
                  </p>
                </div>

                <div>
                  <p><strong>2.5 Support</strong></p>
                  <p className="mt-2">
                    A Dream will provide customer support for its Services. Customers may contact A Dream with questions regarding the Services or the operation of the product by emailing contact@popcorn.ai.
                  </p>
                </div>

                <div>
                  <p><strong>2.6 No Other Obligations</strong></p>
                  <p className="mt-2">
                    Except as expressly stated in this Agreement, A Dream has no other obligations.
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
                    Any action taken through the Services using credentials is deemed authorized by Customer, regardless of whether such action was initiated by: the Customer directly; an Authorized User; an AI agent acting on user instruction; or an automated workflow or integration. Customer must safeguard all credentials, promptly revoke or rotate compromised credentials, and notify A Dream without undue delay upon discovering any unauthorized access or misuse. See Section 5.3 of this Agreement for further details related to Third-Party Integrations.
                  </p>
                </div>

                <div>
                  <p><strong>3.5 Notices, Consents, and Workplace Policies</strong></p>
                  <p className="mt-2">
                    Customer is solely responsible for establishing, communicating, and enforcing its own workplace policies governing use of the Services, including policies relating to: monitoring and access; data retention and deletion; use of AI-Enabled Features and Memory systems; Third-Party Integrations; and acceptable use that fulfill its requirements under this Agreement, the User Terms of Service, Acceptable Use Policy, and the Privacy Policy.
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
                  <p className="mt-2">
                    Customer further acknowledges that In-Channel Apps created within a channel are accessible to all members of that channel and are not subject to the same privacy protections that apply to private messages or private channels. In-Channel Apps are workspace-accessible artifacts and should be treated accordingly for purposes of information security and privilege analysis. Customer is solely responsible for determining whether creation of an In-Channel App within a given channel is appropriate for any information accessible within that channel.
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
                    Customer authorizes A Dream to process Customer Data through AI Features as necessary to provide the Services in accordance with this Agreement and the <Link href="/privacy" className="text-[#1a3de8] hover:underline">Privacy Policy</Link>.
                  </p>
                  <p className="mt-2">
                    <strong>(a) Talk-Through Feature.</strong> The Services include a Talk-Through Feature that enables real-time voice interaction between an Authorized User and the AI agent, with optional screen and cursor sharing. During a Talk-Through session, the AI agent may observe, process, and respond to voice input, on-screen content, and cursor position. Talk-Through Session Data may be retained, summarized, and incorporated into workspace memory or channel context in accordance with workspace configuration and the <Link href="/privacy" className="text-[#1a3de8] hover:underline">Privacy Policy</Link>. Customer is solely responsible for ensuring that Authorized Users are informed of and consent to the capture, processing, and retention of Talk-Through Session Data, including voice recordings and screen content, and for compliance with all applicable laws governing such capture (including, without limitation, wiretapping, eavesdropping, biometric, and electronic surveillance laws).
                  </p>
                  <p className="mt-2">
                    <strong>(b) In-Channel Apps.</strong> The AI agent may create In-Channel Apps within channels in response to user prompts. In-Channel Apps are visible and accessible to all members of the channel in which they are created. Customer acknowledges that In-Channel Apps may contain, display, or reference Customer Data, and that the creation of an In-Channel App within a channel effectively publishes such data to all channel members. Customer is solely responsible for determining whether the creation of an In-Channel App within a given channel is appropriate in light of the information accessible within that channel and the membership of that channel.
                  </p>
                  <p className="mt-2">
                    <strong>(c) Workspace-Owned Computer.</strong> The Services include a Workspace-Owned Computer, a cloud-hosted virtual machine provisioned for the workspace. The AI agent may use the Workspace-Owned Computer to execute code, access files, run applications, install packages, browse the web, and perform other computational tasks on behalf of Authorized Users. Customer acknowledges that the Workspace-Owned Computer operates as a shared resource within the workspace and that files, applications, and data within the VM may be accessible to the AI agent acting on behalf of any Authorized User within the workspace. Customer is solely responsible for managing what data and credentials are stored within or accessible to the Workspace-Owned Computer.
                  </p>
                </div>

                <div>
                  <p><strong>4.2 Human Review and Decision-Making</strong></p>
                  <p className="mt-2">
                    Customer agrees that it is solely responsible for reviewing, validating, and exercising human judgment over all AI-generated outputs, summaries, recommendations, action items, or automated actions.
                  </p>
                  <p className="mt-2">
                    To ensure the continued reliability and safety of our platform, Customers agree not to deploy the Services for any purposes classified as &ldquo;High-Risk&rdquo; under applicable global AI regulations (such as the EU AI Act) without written authorization from A Dream. Specifically, Customer agrees not to use this system in critical infrastructure management, educational admissions or evaluation, employment recruitment or promotion, or in the administration of justice and essential public services.
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
                    Customer acknowledges that A Dream has no obligation to:
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
                    Customer acknowledges that AI Features rely on third-party artificial intelligence providers (&quot;Third-Party AI Providers&quot;), which may include OpenAI, Anthropic, Perplexity, or other providers selected by A Dream from time to time.
                  </p>
                  <p className="mt-2">
                    Customer acknowledges and agrees that:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-2">
                    <li>Customer Data may be transmitted to and processed by Third-Party AI Providers solely to provide requested functionality;</li>
                    <li>Third-Party AI Providers operate under their own terms, policies, and technical constraints, which may change over time; and</li>
                    <li>A Dream does not control Third-Party AI Provider internal data handling beyond contractual commitments.</li>
                  </ul>
                  <p className="mt-2">
                    Customer is responsible for compliance with all applicable Third-Party AI Provider acceptable use policies and restrictions.
                  </p>
                  <p className="mt-2">
                    Customer further acknowledges that certain AI Features, including web browsing capabilities within the Workspace-Owned Computer, may utilize the Perplexity API or similar third-party services to retrieve, summarize, or interact with content from the public internet. A Dream does not control, endorse, or guarantee the accuracy, completeness, or legality of any content retrieved through such services. Customer is solely responsible for evaluating and verifying any information obtained through web browsing features and for ensuring that its use of such features complies with applicable law and third-party terms.
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
                    Customer acknowledges that A Dream does not monitor, review, or validate AI outputs, memory content, or automated actions. Customer remains solely responsible for supervising Authorized Users, reviewing AI outputs, and enforcing internal policies governing AI use.
                  </p>
                </div>

                <div>
                  <p><strong>4.8 Cross-Channel Agent Data Access &ndash; Architecture Disclosure</strong></p>
                  <p className="mt-2">
                    Customer acknowledges and agrees that the AI agent architecture operates as follows:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-2">
                    <li><strong>(a)</strong> The AI agent operates within a shared execution environment (the Workspace-Owned Computer) that may serve multiple channels and users within a workspace.</li>
                    <li><strong>(b)</strong> While A Dream implements design-level constraints intended to scope the AI agent&apos;s data access to the channel and user context from which a request originates, Customer acknowledges that these constraints are enforced at the application layer and are not equivalent to hardware-level or OS-level isolation.</li>
                    <li><strong>(c)</strong> As with any AI system operating across shared infrastructure, there is an inherent risk that adversarial prompt injection, context manipulation, or other exploitation techniques could cause the AI agent to access, reference, or disclose data from channels or contexts other than the one in which the requesting user is operating.</li>
                    <li><strong>(d)</strong> A Dream will use commercially reasonable efforts to mitigate such risks through prompt engineering, access scoping, and monitoring, but does not warrant that cross-channel data leakage cannot occur.</li>
                    <li><strong>(e)</strong> Customer is solely responsible for evaluating whether the shared-VM architecture is appropriate for its use case, particularly where channels contain sensitive, privileged, or regulated information that must not be disclosed across channel boundaries.</li>
                  </ul>
                </div>

                <div>
                  <p><strong>4.9 Workspace-Owned Computer and Cloud Execution Environment</strong></p>
                  <p className="mt-2">
                    Customer acknowledges and agrees that:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-2">
                    <li><strong>(a)</strong> The Workspace-Owned Computer is a shared cloud-hosted VM that the AI agent may use to execute code, access files, install software, browse the web, and perform other tasks. Files, data, applications, and credentials stored within the VM may persist across sessions and may be accessible to the AI agent acting on behalf of any Authorized User within the workspace.</li>
                    <li><strong>(b)</strong> The AI agent may take actions within the Workspace-Owned Computer autonomously or in response to user commands (including the /update command or equivalent invocations). Such actions may include file creation, modification, or deletion; code execution; application deployment; package installation; web browsing; and data retrieval.</li>
                    <li><strong>(c)</strong> A Dream does not guarantee the integrity, availability, or security of files, applications, or data stored within the Workspace-Owned Computer. Customer is solely responsible for backing up critical data and for managing what information is stored within or accessible to the VM.</li>
                  </ul>
                </div>

                <div>
                  <p><strong>4.10 Privilege and Confidentiality Considerations</strong></p>
                  <p className="mt-2">
                    Customer acknowledges and agrees that:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-2">
                    <li><strong>(a)</strong> The use of AI Features, including the Talk-Through Feature, Memory systems, In-Channel Apps, and the Workspace-Owned Computer, may result in the creation, storage, or disclosure of information in ways that could affect legal privilege, confidentiality, or regulatory compliance.</li>
                    <li><strong>(b)</strong> Customer is solely responsible for determining whether use of any feature of the Services is appropriate in light of applicable privilege, confidentiality, or regulatory requirements.</li>
                    <li><strong>(c)</strong> A Dream makes no representation that use of the Services will preserve legal privilege or confidentiality protections that may otherwise apply to Customer&apos;s information.</li>
                    <li><strong>(d)</strong> Customer should consult with its own legal counsel regarding the implications of using the Services for privileged, confidential, or regulated information.</li>
                  </ul>
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
                    The Services may enable Customer to connect, authorize, access, or use third-party applications, platforms, services, APIs, data sources, or tools that are not provided by A Dream, including without limitation project management tools, document repositories, ticketing systems, messaging platforms, storage services, and developer tools (&quot;Third-Party Integrations&quot; or &quot;Third-Party Tools&quot;).
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
                    <li>A Dream has no obligation to confirm whether an invited user was intended to have access to such integrations or actions.</li>
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
                    <li>notify A Dream without undue delay upon discovering any compromise or misuse.</li>
                  </ul>
                  <p className="mt-2">
                    A Dream is entitled to rely on the validity of any credentials presented to the Services and has no obligation to verify the authority, intent, or appropriateness of any action taken using such credentials.
                  </p>
                  <p className="mt-2">
                    See the User Terms of Service, Acceptable Use Policy, and Privacy Policy, which are incorporated by reference here, for more information.
                  </p>
                </div>

                <div>
                  <p><strong>5.4 Failure or Limitation of Integration Actions</strong></p>
                  <p className="mt-2">
                    Customer acknowledges that actions involving Third-Party Integrations may fail, be denied, delayed, or partially executed due to the following: insufficient permissions or scopes; expired or revoked credentials; Third-Party Integration limitations or outages; or changes to third-party APIs or terms. A Dream makes no guarantee that any integration-dependent action will succeed and has no obligation to retry, escalate, or remediate failed actions.
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
                    A Dream may suspend, limit, or disable any Third-Party Integration or integration-dependent functionality where reasonably necessary to:
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
                A Dream reserves the right to introduce fees for the Services in the future. A Dream will provide reasonable notice prior to imposing fees for continued use of the Services. Information regarding payment obligations and related terms, including without limitation fees, payment terms, due dates, taxes, late payments, disputed charges, offsets, and the effect of termination, is available at [INSERT LINK]. The terms made available at that link are incorporated by reference into this Agreement and are binding on Customer.
              </p>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-[28px] font-bold mb-4">7. Proprietary Rights and Licenses</h2>

              <div className="space-y-6">
                <div>
                  <p><strong>7.1 Ownership of the Services</strong></p>
                  <p className="mt-2">
                    As between the parties, A Dream and its licensors retain all right, title, and interest in and to the Services, including without limitation:
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
                    Subject to Customer&apos;s compliance with this Agreement, A Dream grants Customer a limited, non-exclusive, non-transferable, non-sublicensable license during the applicable subscription term to access and use the Services solely for Customer&apos;s internal business purposes and in accordance with this Agreement, the User Terms of Service, Acceptable Use Policy, and Privacy Policy. Customer may permit Authorized Users to use the Services on its behalf, subject to Customer&apos;s responsibility for such use.
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
                    As between the parties, Customer retains all right, title, and interest in and to Customer Data, and nothing in this Agreement transfers ownership of Customer Data to A Dream.
                  </p>
                </div>

                <div>
                  <p><strong>7.5 License to Process Customer Data</strong></p>
                  <p className="mt-2">
                    In accordance with the Privacy Policy and this Agreement, Customer grants A Dream a limited, non-exclusive, worldwide, royalty-free license to process Customer Data solely as necessary to:
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
                    <li>A Dream does not claim ownership of AI outputs generated for Customer.</li>
                  </ul>
                  <p className="mt-2">
                    Nothing in this Agreement grants Customer any ownership or rights in A Dream&apos;s models, algorithms, prompts, system architecture, or underlying AI technology.
                  </p>
                </div>

                <div>
                  <p><strong>7.7 Feedback</strong></p>
                  <p className="mt-2">
                    If Customer or Authorized Users provide feedback, suggestions, ideas, or recommendations regarding the Services (&quot;Feedback&quot;), Customer grants A Dream a perpetual, irrevocable, worldwide, royalty-free license to use, incorporate, modify, and exploit such Feedback without obligation or restriction. Feedback does not create any confidentiality or compensation obligation on behalf of A Dream.
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
                    All rights not expressly granted in this Agreement are reserved by A Dream and its licensors.
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
                    <li>A Dream&apos;s Confidential Information, including the Services (including non-public features), system design, architecture, workflows, AI/memory systems, non-public documentation, roadmaps, and security measures; and</li>
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
                    <li>in A Dream&apos;s case, its service providers and subprocessors (including hosting, infrastructure, security, support, and AI inference providers) who are bound by written confidentiality obligations at least as protective as those herein.</li>
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
                    Customer Data is Customer&apos;s Confidential Information. A Dream will treat Customer Data as Confidential Information and will access, use, and disclose Customer Data only:
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
                    Customer acknowledges the following. Customer Data (which may include Confidential Information) may be processed by AI-Enabled Features and memory systems to provide requested functionality (e.g., summarization, action items, recall, automation), consistent with the Services&apos; design and Customer configuration, where applicable. AI-generated outputs, summaries, and memory artifacts may reflect or reference Customer Data (including Confidential Information) provided through use of the Services. Customer Data may be transmitted to and processed by Third-Party AI Providers and other subprocessors as necessary to provide AI-Enabled Features, subject to A Dream&apos;s contractual arrangements with such providers and the Privacy Policy.
                  </p>
                  <p className="mt-2">
                    Customer is responsible for determining whether it is appropriate to use the Services (including AI and memory features) for particular categories of Confidential Information, and for training and instructing Authorized Users regarding safe use (including private/restricted channel use for sensitive or privileged information, and careful channel membership management).
                  </p>
                </div>

                <div>
                  <p><strong>8.8 Return, Deletion, and Retention</strong></p>
                  <p className="mt-2">
                    Upon termination or expiration of the Agreement, A Dream will handle Customer Data in accordance with this Agreement (including any agreed export provisions), system behavior (including any fixed retention limits), and applicable law. Customer is responsible for exporting Customer Data prior to termination if Customer requires continued access. Notwithstanding the foregoing, the Receiving Party may retain Confidential Information to the extent required to comply with applicable law, regulation, or bona fide internal compliance requirements, provided that any retained Confidential Information remains subject to the confidentiality obligations of this Section for so long as it is retained.
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
                  <p><strong>9.3 A Dream&apos;s Limited Warranty</strong></p>
                  <p className="mt-2">
                    A Dream warrants that it will provide the Services during the Term.
                  </p>
                </div>

                <div>
                  <p><strong>9.4 Warranty Disclaimer</strong></p>
                  <p className="mt-2 uppercase">
                    EXCEPT AS EXPRESSLY PROVIDED IN THIS AGREEMENT, THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS AVAILABLE.&quot;
                  </p>
                  <p className="mt-2 uppercase">
                    TO THE MAXIMUM EXTENT PERMITTED BY LAW, A DREAM DISCLAIMS ALL WARRANTIES, WHETHER EXPRESS, IMPLIED, STATUTORY, OR OTHERWISE, INCLUDING ANY IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, OR ACCURACY.
                  </p>
                  <p className="mt-2 uppercase">
                    WITHOUT LIMITING THE FOREGOING, A DREAM DOES NOT WARRANT THAT:
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
                    <li>A Dream does not guarantee explainability, auditability, or transparency of AI model logic;</li>
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
                    Without limitation, A Dream does not warrant and is not responsible for the following:
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
                    No oral or written information or advice given by A Dream, its employees, agents, or partners creates any warranty not expressly stated in this Agreement.
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
                    Customer will defend, indemnify, and hold harmless A Dream and its affiliates, officers, directors, employees, contractors, and agents from and against any and all claims (including third-party claims), demands, actions, proceedings, damages, losses, liabilities, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or relating to:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-2">
                    <li>Customer Data, including any allegation that Customer Data infringes, misappropriates, or violates intellectual property rights, privacy rights, publicity rights, employment laws, or other legal obligations;</li>
                    <li>the disclosure or use of sensitive information due to workspace configuration, user behavior, or feature use;</li>
                    <li>use of the Services by Customer or Authorized Users, including use of AI-enabled features, memory systems, summaries, action items, or automated workflows;</li>
                    <li>decisions or actions taken by Customer or Authorized Users in reliance on AI outputs, summaries, or memory-derived information, including employment, disciplinary, legal, compliance, financial, or operational decisions;</li>
                    <li>failure to obtain required notices, consents, or authorizations, including employee monitoring disclosures, AI usage notices, and third-party integration permissions;</li>
                    <li>Third-Party AI Providers or Third-Party Tools, including claims arising from Customer&apos;s use of outputs, actions, or data processed by such providers;</li>
                    <li>credentials, integrations, or webhooks, including misuse, compromise, inheritance, or unauthorized actions deemed authorized under this Agreement;</li>
                    <li>violation of law by Customer or Authorized Users, including employment, surveillance, data protection, export control, or consumer protection laws;</li>
                    <li>breach of this Agreement, the User Terms of Service, Acceptable Use Policy, Privacy Policy, or applicable third-party terms;</li>
                    <li>Use of the Talk-Through Feature, including claims arising from the capture, transcription, or retention of voice, screen, or cursor data; and</li>
                    <li>Actions taken by the AI agent within the Workspace-Owned Computer, including file access, code execution, application creation or modification, and data retrieval, whether initiated directly or via /update command or equivalent invocation.</li>
                  </ul>
                  <p className="mt-2">
                    This indemnity applies regardless of whether the claim arises from content generated by AI, memory systems, automated actions, or human input.
                  </p>
                </div>

                <div>
                  <p><strong>10.2 Indemnification by A Dream</strong></p>
                  <p className="mt-2">
                    A Dream will defend, indemnify, and hold harmless Customer from and against any third-party claim alleging that the Services, when used in accordance with this Agreement, infringe a U.S. patent, copyright, or trademark, provided that such claim does not arise from:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-2">
                    <li>Customer Data;</li>
                    <li>AI outputs, summaries, memory artifacts, or derivative content;</li>
                    <li>Third-Party AI Providers or Third-Party Tools;</li>
                    <li>modifications not made by A Dream;</li>
                    <li>use of the Services in violation of this Agreement or applicable law; or</li>
                    <li>combination of the Services with products or services not provided by A Dream.</li>
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
                    If A Dream reasonably believes the Services may become subject to an infringement claim, A Dream may, at its option and expense: (1) procure the right for Customer to continue using the Services; (2) modify the Services to avoid infringement without materially degrading functionality; or (3) terminate the affected Services and refund prepaid fees for the unused portion of the subscription term. This Section states Customer&apos;s sole and exclusive remedy for intellectual property infringement claims against A Dream.
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
                    EXCEPT FOR EXCLUDED CLAIMS IDENTIFIED IN SECTION 11.3, EACH PARTY&apos;S TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATING TO THIS AGREEMENT WILL NOT EXCEED THE AMOUNT PAID OR PAYABLE BY CUSTOMER TO A DREAM UNDER THIS AGREEMENT IN THE TWELVE (12) MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
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
                    WITHOUT LIMITING THE FOREGOING, CUSTOMER ACKNOWLEDGES AND AGREES THAT A DREAM SHALL HAVE NO LIABILITY FOR:
                  </p>
                  <p className="mt-2 uppercase">
                    DECISIONS, ACTIONS, OR OUTCOMES BASED ON AI OUTPUTS, MEMORY-DERIVED INFORMATION, OR TALK-THROUGH SESSION DATA, INCLUDING INACCURATE OR INCOMPLETE TRANSCRIPTIONS;
                  </p>
                  <p className="mt-2 uppercase">
                    EMPLOYMENT, DISCIPLINARY, LEGAL, COMPLIANCE, OR FINANCIAL DECISIONS MADE USING OR IN RELIANCE ON THE SERVICES OR ANY AI-GENERATED OUTPUT;
                  </p>
                  <p className="mt-2 uppercase">
                    ACTIONS TAKEN BY THE AI AGENT WITHIN THE WORKSPACE-OWNED COMPUTER, INCLUDING FILE ACCESS, CODE EXECUTION, APPLICATION CREATION OR MODIFICATION, DATA RETRIEVAL, OR WEB BROWSING CONDUCTED VIA THE EMBEDDED BROWSER OR PERPLEXITY API, WHETHER SUCH ACTIONS SUCCEED, FAIL, OR PRODUCE UNINTENDED RESULTS; OR
                  </p>
                  <p className="mt-2 uppercase">
                    ANY UNAUTHORIZED CROSS-CHANNEL ACCESS TO CUSTOMER DATA RESULTING FROM ADVERSARIAL PROMPT INJECTION OR OTHER EXPLOITATION OF THE VM ARCHITECTURE DESCRIBED IN SECTION 4.8, PROVIDED THAT A DREAM HAS IMPLEMENTED THE DESIGN-LEVEL CONSTRAINTS DESCRIBED THEREIN.
                  </p>
                  <p className="mt-2 uppercase">
                    ALL SUCH USE IS AT CUSTOMER&apos;S SOLE RISK. THESE LIMITATIONS APPLY REGARDLESS OF WHETHER THE CLAIM IS FRAMED IN CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, STATUTORY LIABILITY, OR OTHERWISE.
                  </p>
                </div>

                <div>
                  <p><strong>11.5 Third-Party Services and AI Providers</strong></p>
                  <p className="mt-2 uppercase">
                    A DREAM SHALL NOT BE LIABLE FOR ANY DAMAGES ARISING FROM OR RELATING TO:
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
                    A Dream may suspend Customer&apos;s or any Authorized User&apos;s access to the Services, in whole or in part, immediately upon notice (or without notice where legally required or operationally necessary), if A Dream reasonably determines that:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-2">
                    <li>Customer or an Authorized User has violated this Agreement, the User Terms of Service, the Acceptable Use Policy, or applicable law;</li>
                    <li>Customer&apos;s use of the Services poses a security risk, creates risk of harm to A Dream, other customers, users, or third parties, or threatens the integrity or availability of the Services;</li>
                    <li>credentials, integrations, tokens, webhooks, or automated workflows are being misused, compromised, or used in an unauthorized manner;</li>
                    <li>Customer&apos;s use of AI features or memory systems presents legal, regulatory, or compliance risk;</li>
                    <li>required fees are overdue; or</li>
                    <li>suspension is required to comply with law, court order, or governmental request.</li>
                  </ul>
                  <p className="mt-2">
                    Where reasonably practicable, A Dream will provide notice and an opportunity to cure prior to suspension. Suspension does not relieve Customer of any payment obligations.
                  </p>
                </div>

                <div>
                  <p><strong>12.3 Termination for Cause</strong></p>
                  <p className="mt-2">
                    Either party may terminate this Agreement for cause upon written notice if the other party materially breaches this Agreement and fails to cure such breach within thirty (30) days after receiving written notice thereof, except that A Dream may terminate immediately for uncured breaches relating to security, unlawful activity, misuse of AI features, or violation of acceptable use restrictions.
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
                    Following termination or expiration, A Dream will retain Customer Data in accordance with:
                  </p>
                  <ul className="list-disc pl-8 space-y-2 mt-2">
                    <li>system-defined retention limits (including fixed deletion periods for certain private communications);</li>
                    <li>applicable law; and</li>
                    <li>A Dream&apos;s backup, security, and audit requirements.</li>
                  </ul>
                  <p className="mt-2">
                    Unless otherwise separately agreed in writing, A Dream has no obligation to retain Customer Data beyond the applicable retention period, which is thirty (30) days (subject to any shorter system-defined deletion periods for certain private communications). Customer is solely responsible for exporting any Customer Data prior to termination.
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
                    Customer may not assign or transfer this Agreement, in whole or in part, whether by operation of law, merger, acquisition, sale of assets, or otherwise, without A Dream&apos;s prior written consent, which shall not be unreasonably withheld. A Dream may assign this Agreement without Customer&apos;s consent in connection with a merger, acquisition, corporate reorganization, or sale of all or substantially all of its assets. Any prohibited assignment is void.
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
                    Customer represents and warrants that it is not subject to sanctions or located in a jurisdiction subject to comprehensive trade sanctions. Customer agrees to comply with all applicable export control, economic sanctions, and trade laws in connection with its use of the Services, including restrictions on access to AI-enabled functionality. A Dream may suspend access as required to comply with applicable law.
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
                    A Dream may update this Agreement from time to time. A Dream will provide notice of any updates to Customer by email, through the Services, or by other reasonable means. Unless otherwise stated in the notice, updates will become effective on the date specified by A Dream, and Customer&apos;s continued access to or use of the Services after the effective date constitutes Customer&apos;s acceptance of the updated Agreement.
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
