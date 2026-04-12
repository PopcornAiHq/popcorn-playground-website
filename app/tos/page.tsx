import Link from "next/link";
import PageFooter from "../components/PageFooter";
import SubpageNav from "../components/SubpageNav";

export default function TermsOfServicePage() {
  return (
    <main className="relative min-h-screen bg-[#FFFDF8] text-[#1a1a1a]">
      <SubpageNav />

      <div className="max-w-[1200px] mx-auto px-10 pt-32 pb-20">
        <article className="max-w-[900px] mx-auto">
          <h1 className="text-[56px] leading-[1.1] tracking-tight mb-4" style={{ fontFamily: "var(--font-synt)" }}>
            Terms of Service
          </h1>
          <p className="text-[16px] text-[#1a1a1a]/60 mb-12">Last Edited: April 16, 2026</p>

          <div className="space-y-8 text-[18px] leading-relaxed">
            <section>
              <p>
                <strong>1. Scope and Acceptance.</strong> These User Terms of Service (&quot;User Terms&quot;), together with any documents expressly incorporated by reference, govern your access to and use of the online collaboration platform and related services provided by A Dream (the &quot;Services&quot;). By accessing or using the Services, or by continuing to use the Services after notice of changes, you acknowledge that you have read, understand, and agree to be bound by these User Terms. If you do not agree, you must not use the Services.
              </p>
            </section>

            <section>
              <p>
                <strong>2. Binding Agreement.</strong> These User Terms constitute a legally binding agreement between you and the Company. They incorporate by reference the <a href="#acceptable-use-policy" className="text-[#1a3de8] hover:underline">Acceptable Use Policy</a>, which may be updated from time to time. Your right to access and use the Services is conditioned on your continued compliance with these User Terms and the <a href="#acceptable-use-policy" className="text-[#1a3de8] hover:underline">Acceptable Use Policy</a>.
              </p>
            </section>

            <section>
              <p>
                <strong>3. Definitions.</strong> References to &quot;we,&quot; &quot;us,&quot; or &quot;our&quot; mean A Dream. References to &quot;you&quot; mean the individual accessing or using the Services. Capitalized terms not otherwise defined have the meanings assigned to them in the applicable <Link href="/enterprise" className="text-[#1a3de8] hover:underline">Enterprise Services Agreement</Link> (&quot;Enterprise Services Agreement&quot; is a defined term &ndash; see paragraph 5), <a href="#acceptable-use-policy" className="text-[#1a3de8] hover:underline">Acceptable Use Policy</a>, or Privacy Policy.
              </p>
            </section>

            <section>
              <p>
                <strong>4. Workspace Structure and Customer Control.</strong> The Services are provided primarily to organizations or individuals that create and control workspaces (each, a &quot;Customer&quot;). If you access the Services through a workspace, that workspace is controlled by a Customer, who may be your employer, organization, or another individual. You are an authorized user only for so long as the Customer permits your access.
              </p>
            </section>

            <section>
              <p>
                <strong>5. <Link href="/enterprise" className="text-[#1a3de8] hover:underline">Enterprise Services Agreement</Link>.</strong> The Customer has entered into a separate agreement with A Dream governing the provision of the Services (the &quot;<Link href="/enterprise" className="text-[#1a3de8] hover:underline">Enterprise Services Agreement</Link>&quot;). Under that agreement, the Customer controls the workspace, including user access, permissions, integrations, retention settings, exports, and administrative actions. Content, messages, files, decisions, actions, and other information submitted to or generated within a workspace are Customer Data (&quot;Customer Data&quot;) and are controlled by the Customer.
              </p>
            </section>

            <section>
              <p>
                <strong>6. Customer Data and Instructions.</strong> You acknowledge and agree that the Customer controls all user-created data submitted to, generated within, or processed through the Services at any level of the platform, including within workspaces, channels (public or private), threads, direct messages, and related features. This includes, without limitation, messages, files, prompts, content, communications, contextual information, and other data you provide or generate through the Services (&quot;User Data&quot;).
              </p>
              <p className="mt-4">
                You further acknowledge and agree that the Customer may access, use, disclose, modify, export, transfer, or delete such User Data, including data associated with your account, at any time in accordance with the <Link href="/enterprise" className="text-[#1a3de8] hover:underline">Enterprise Services Agreement</Link>, the Customer&apos;s policies, and applicable law. Customer actions, configurations, or system-defined retention limits may result in the access, use, disclosure, modification, or deletion of such data without further notice to you.
              </p>
              <p className="mt-4">
                For avoidance of doubt, we do not own or control Customer Data but process such data only as directed by the Customer and as described in the <Link href="/enterprise" className="text-[#1a3de8] hover:underline">Enterprise Services Agreement</Link> and Privacy Policy.
              </p>
            </section>

            <section>
              <p>
                <strong>7. Message Retention and Deletion.</strong> The Services apply default retention limits to messages and related content. Private messages, including direct messages and private or shared channels, are retained for a limited period of time (approximately twenty-four (24) hours) and are automatically deleted thereafter. This retention period is fixed and cannot be modified by Customers or users.
              </p>
              <p className="mt-4">
                Messages and content posted in channels may be retained for longer periods, subject to Customer-configured retention settings, including optional deletion schedules. Customers are responsible for configuring any available retention controls, notifying users of modified retention timelines, and for determining whether use of the Services is appropriate for their recordkeeping, compliance, or preservation obligations.
              </p>
              <p className="mt-4">
                You acknowledge and agree that the Services are not designed to function as a system of record for private communications and that content may be deleted automatically and irreversibly without further notice.
              </p>
            </section>

            <section>
              <p>
                <strong>8. Allocation of Responsibilities.</strong> As between A Dream and the Customer, the Customer is solely responsible for establishing, communicating, and enforcing workplace policies and practices governing use of the Services, including any policies relating to monitoring, access, data retention, use of artificial intelligence features, and Third-Party Integrations.
              </p>
              <p className="mt-4">
                The Customer is solely responsible for obtaining any rights, permissions, notices, or consents required for the lawful collection, use, disclosure, transfer, and processing of User Data and other information submitted to the Services, including as between the Customer and its users, employees, contractors, or collaborators.
              </p>
              <p className="mt-4">
                The Customer is also solely responsible for ensuring that its use of the Services, including configuration of features, integrations, retention settings, and AI functionality, complies with applicable law and its own legal or regulatory obligations.
              </p>
              <p className="mt-4">
                Any disputes arising between you and the Customer relating to User Data, workplace policies, use of the Services, or the Customer&apos;s failure to meet its obligations must be resolved between you and the Customer. We do not assume responsibility for such disputes and make no representations or warranties to you regarding the Customer&apos;s policies, practices, or compliance obligations.
              </p>
            </section>

            <section>
              <p>
                <strong>9. Service Disclaimer.</strong> The Services are provided to you on an &quot;as is&quot; and &quot;as available&quot; basis. Except as expressly stated in these User Terms, we disclaim all warranties to the maximum extent permitted by law.
              </p>
            </section>

            <section>
              <p>
                <strong>10. Eligibility.</strong> The Services are not intended for use by individuals under sixteen years of age or under the applicable age of majority or legal working age under local law. By using the Services, you represent that you meet these requirements and are using the Services for lawful purposes only.
              </p>
            </section>

            <section>
              <p>
                <strong>11. Compliance with Rules.</strong> While using the Services, you must comply with these User Terms, the <a href="#acceptable-use-policy" className="text-[#1a3de8] hover:underline">Acceptable Use Policy</a>, applicable law, and any policies established by the Customer controlling your workspace.
              </p>
            </section>

            <section>
              <p>
                <strong>12. Termination of Access.</strong> Your access to the Services continues until terminated by the Customer or by us. Without limiting any of our other rights, we may suspend or terminate access if we reasonably believe you have violated these User Terms, the <a href="#acceptable-use-policy" className="text-[#1a3de8] hover:underline">Acceptable Use Policy</a>, applicable law, or if your use presents a risk of harm. Where practicable, we will seek to work through the Customer before taking direct action.
              </p>
            </section>

            <section>
              <p>
                <strong>13. AI Features and Outputs.</strong> The Services include artificial intelligence (&quot;AI&quot;) features that generate outputs based on user inputs and connected data.
              </p>
              <div className="mt-4 space-y-4">
                <p>
                  <strong>(a) Probabilistic Nature and Responsibility for Decisions.</strong> AI outputs are probabilistic and may be inaccurate, incomplete, or misleading. You acknowledge that AI outputs are not a substitute for professional judgment and must be independently reviewed before use. You remain solely responsible for decisions, actions, and outcomes arising from your use of the Services or reliance on AI outputs. We do not guarantee accuracy, completeness, or suitability of outputs and disclaim liability for decisions made based on them.
                </p>
                <p>
                  <strong>(b) Similarity of Output.</strong> You acknowledge that, due to the nature of artificial intelligence systems, content generated by the Services may not be unique and may be similar or identical to content generated for other users or derived from publicly available information. We do not guarantee the originality, exclusivity, or non-infringement of any AI-generated output, and make no representations regarding the availability of intellectual property rights in such output.
                </p>
                <p>
                  <strong>(c) No Monitoring Obligation.</strong> We do not actively monitor, review, or verify AI-generated outputs, automated actions, or content processed through the Services. We may, but are not obligated to, investigate or intervene in connection with suspected misuse, errors, or violations of these User Terms. Responsibility for the review and use of AI-generated outputs rests solely with you and the applicable Customer.
                </p>
                <p>
                  <strong>(d) No Obligation.</strong> We have no ability nor obligation to explain, interpret, audit, or disclose the internal logic, prompts, parameters, or reasoning processes underlying any AI-generated output, and outputs may change over time for identical inputs.
                </p>
                <p>
                  <strong>(e) Third-Party Artificial Intelligence Services.</strong> The Services rely on artificial intelligence models, systems, and services provided by third parties, including OpenAI, Anthropic, and Perplexity (&quot;Third-Party AI Providers&quot;).
                </p>
                <p>
                  Your use of AI-enabled features is subject to usage restrictions, safety requirements, and acceptable use obligations imposed by Third-Party AI Providers, as such requirements apply to our use of those services. You agree not to use the Services in any manner that would cause us to violate our agreements with any Third-Party AI Provider or applicable provider policies.
                </p>
                <p>Relevant Third-Party AI Provider materials include, without limitation:</p>
                <ul className="list-disc pl-8 space-y-2 mt-2">
                  <li>
                    <strong>OpenAI</strong> – Services Agreement, Data Processing Addendum, Usage Policy, and Privacy Policy:<br />
                    <a href="https://openai.com/policies/services-agreement/" className="text-[#1a3de8] hover:underline" target="_blank" rel="noopener noreferrer">https://openai.com/policies/services-agreement/</a><br />
                    <a href="https://openai.com/policies/data-processing-addendum/" className="text-[#1a3de8] hover:underline" target="_blank" rel="noopener noreferrer">https://openai.com/policies/data-processing-addendum/</a><br />
                    <a href="https://openai.com/policies/usage-policies/" className="text-[#1a3de8] hover:underline" target="_blank" rel="noopener noreferrer">https://openai.com/policies/usage-policies/</a><br />
                    <a href="https://openai.com/policies/privacy-policy/" className="text-[#1a3de8] hover:underline" target="_blank" rel="noopener noreferrer">https://openai.com/policies/privacy-policy/</a>
                  </li>
                  <li>
                    <strong>Anthropic</strong> – Commercial Terms of Service, Usage Policy, Data Processing Addendum, and Privacy Policy:<br />
                    <a href="https://www.anthropic.com/legal/commercial-terms" className="text-[#1a3de8] hover:underline" target="_blank" rel="noopener noreferrer">https://www.anthropic.com/legal/commercial-terms</a><br />
                    <a href="https://www.anthropic.com/legal/aup" className="text-[#1a3de8] hover:underline" target="_blank" rel="noopener noreferrer">https://www.anthropic.com/legal/aup</a><br />
                    <a href="https://www.anthropic.com/legal/data-processing-addendum" className="text-[#1a3de8] hover:underline" target="_blank" rel="noopener noreferrer">https://www.anthropic.com/legal/data-processing-addendum</a><br />
                    <a href="https://www.anthropic.com/legal/privacy" className="text-[#1a3de8] hover:underline" target="_blank" rel="noopener noreferrer">https://www.anthropic.com/legal/privacy</a>
                  </li>
                  <li>
                    <strong>Perplexity AI</strong> – Terms of Service, Privacy Policy and Data Processing Addendum:<br />
                    <a href="https://www.perplexity.ai/hub/legal/perplexity-api-terms-of-service" className="text-[#1a3de8] hover:underline" target="_blank" rel="noopener noreferrer">https://www.perplexity.ai/hub/legal/perplexity-api-terms-of-service</a><br />
                    <a href="https://www.perplexity.ai/hub/legal/enterprise-terms-of-service" className="text-[#1a3de8] hover:underline" target="_blank" rel="noopener noreferrer">https://www.perplexity.ai/hub/legal/enterprise-terms-of-service</a><br />
                    <a href="https://www.perplexity.ai/hub/legal/privacy-policy" className="text-[#1a3de8] hover:underline" target="_blank" rel="noopener noreferrer">https://www.perplexity.ai/hub/legal/privacy-policy</a><br />
                    <a href="https://www.perplexity.ai/hub/legal/dpa" className="text-[#1a3de8] hover:underline" target="_blank" rel="noopener noreferrer">https://www.perplexity.ai/hub/legal/dpa</a>
                  </li>
                </ul>
                <p className="mt-4">
                  The above materials do not create any contractual relationship between you and any Third-Party AI Provider. Third-Party AI Providers are not parties to these User Terms and are not third-party beneficiaries.
                </p>
                <p>
                  Because use of Third-Party AI Providers is fundamental to the operation of the Services, you may not opt out of such processing while continuing to access or use AI-enabled features. By using the Services, you acknowledge and agree to such processing. If you do not agree, you must discontinue use of the Services.
                </p>
                <p>
                  <strong>(f) Retention of AI Features and Outputs.</strong> AI-related inputs and outputs are subject to the same retention and deletion practices described elsewhere in these User Terms and in our Privacy Policy.
                </p>
                <p>
                  <strong>(g) Agent Authorization.</strong> AI agents do not independently determine authorization and cannot expand their own permissions; all actions are constrained by Customer-configured credentials, user-controlled credentials, and access controls within the Services.
                </p>
                <p>
                  <strong>(h) No Opt Out.</strong> Because use of third-party artificial intelligence services is integral to the operation of the Services, you may not opt out of such use while continuing to access or use the Services. If you do not agree to applicable Third-Party AI Provider terms, you must not access or use the Services.
                </p>
                <p>
                  <strong>(i) No Employment or Workforce Decisions.</strong> The Services, including AI-generated outputs, summaries, Memory, and contextual recall, are not designed or intended to be used to make employment-related or workforce decisions. You agree not to rely on the Services for decisions relating to hiring, compensation, performance evaluation, promotion, discipline, termination, or any other employment or labor-related determination. All such decisions remain the sole responsibility of the Customer and its human decision-makers.
                </p>
                <p>
                  <strong>(j) AI Memory and Contextual Recall.</strong> The Services include AI agents that may analyze and retain contextual information from interactions to support continuity, summarization, and task execution. This may include recording decisions, action items, and related context derived from conversations (&quot;Communication Memory&quot;), as well as maintaining longer-term, user-specific contextual information (&quot;User Memory&quot;). Such Memory may be stored at different scopes, including the workspace, channel, or user level, and may be used to inform future interactions, summaries, or automated actions.
                </p>
                <p>
                  Depending on how an AI agent is invoked, information derived from Communication Memory or User Memory may be surfaced to other authorized users within a workspace, channel, or shared context. You acknowledge that invoking AI agents in shared or public contexts may result in information being disclosed beyond you individually.
                </p>
                <p>
                  <strong>(k) Accuracy and Reliance Limitations.</strong> Memory-based summaries, including daily, weekly, monthly, or periodic summaries, are generated automatically and may be incomplete, inaccurate, or lack full context. The Services are not a system of record, and such summaries should not be relied upon as authoritative or complete representations of events, decisions, or communications.
                </p>
                <p>
                  <strong>(l) User Controls.</strong> Certain Memory elements may be reviewed, corrected, or removed through features made available in the Services. Availability of such controls may vary by context, scope, or configuration. Please see our Privacy Policy for more information.
                </p>
                <p>
                  <strong>(m) Talk-Through Feature.</strong> The Services include a Talk-Through Feature that enables you to narrate or walk through actions on screen while the Services simultaneously capture the following data: (i) your voice audio, which is used solely for transcription and is permanently deleted immediately upon transcription completion &mdash; raw audio is not retained; (ii) cursor movement data, including a recording of on-screen cursor activity during the session; (iii) screen state data, including screenshots, timestamped recording sections, and visual content displayed during the session; and (iv) corresponding code context associated with the content displayed during the narration (collectively, &quot;Talk-Through Session Data&quot;).
                </p>
                <p>
                  By using the Talk-Through Feature, you acknowledge and agree that:
                </p>
                <ul className="list-disc pl-8 space-y-2 mt-2">
                  <li>(i) Your voice will be processed to generate a text transcription, and the raw audio file will be immediately and permanently deleted following transcription. The transcribed text is retained as Customer Data;</li>
                  <li>(ii) Cursor movement data, screenshots, and recording sections are retained as Customer Data and may be used by the AI agent to create or modify In-Channel Apps, execute /update commands, or perform other authorized actions;</li>
                  <li>(iii) Talk-Through Session Data is packaged as a structured message within the channel and is therefore accessible to all channel members, including the AI agent;</li>
                  <li>(iv) You should not use the Talk-Through Feature to narrate attorney-client privileged communications, legally sensitive matter discussions, or other information subject to professional confidentiality obligations, unless you have evaluated the risks described in the <Link href="/enterprise" className="text-[#1a3de8] hover:underline">Enterprise Services Agreement</Link> and determined such use is appropriate; and</li>
                  <li>(v) A Dream does not guarantee the accuracy of voice transcriptions, and you are responsible for reviewing transcribed content before relying on it or approving agent actions based upon it.</li>
                </ul>
                <p>
                  <strong>(n) In-Channel Apps.</strong> The Services allow AI agents, acting on instructions from authorized users, to create, modify, and deploy lightweight applications within channels (&quot;In-Channel Apps&quot;). In-Channel Apps are scoped to the channel in which they are created and operate within the permissions, credentials, and integrations configured for that channel.
                </p>
                <ul className="list-disc pl-8 space-y-2 mt-2">
                  <li>(i) In-Channel Apps are not private. They are visible and accessible to all members of the channel in which they are deployed, including the AI agent. You should not use In-Channel Apps to process or display information that should not be shared with all channel members.</li>
                  <li>(ii) In-Channel Apps are persistent within the channel and remain available until explicitly removed by an authorized user or Channel Manager, or until the channel is deleted or retention policies apply.</li>
                  <li>(iii) In-Channel Apps are created and modified by the AI agent based on user instructions, Talk-Through Session Data, or other inputs provided within the channel. The AI agent may update, rebuild, or modify In-Channel Apps in response to /update commands or other authorized instructions.</li>
                  <li>(iv) In-Channel Apps may access web resources and external data sources to the extent permitted by the channel&apos;s configured integrations and credentials. Such access is subject to the same authorization controls and credential boundaries described elsewhere in these User Terms.</li>
                  <li>(v) You are responsible for reviewing In-Channel Apps and their outputs before relying on them. We do not guarantee the accuracy, completeness, security, or fitness for purpose of any In-Channel App, and we disclaim liability for any actions taken or decisions made based on In-Channel App outputs.</li>
                </ul>
                <p>
                  <strong>(o) Cross-Channel Agent Data Access &ndash; User Disclosure.</strong> AI agents operate within a virtual machine (&quot;VM&quot;) environment that may have access to data, files, context, and resources across multiple channels within the same workspace. While In-Channel Apps and agent responses are scoped to the channel in which they are invoked, the underlying VM environment is not strictly siloed by channel. This means that an AI agent acting within one channel may have the technical ability to access information from other channels within the same workspace, subject to workspace-level permissions and Customer-configured access controls. You acknowledge this cross-channel access boundary and should exercise care when submitting sensitive information to any channel within a workspace.
                </p>
                <p>
                  <strong>(p) Privilege and Confidentiality.</strong> The Services, including AI-enabled features, Talk-Through, In-Channel Apps, and Memory, are not designed to preserve attorney-client privilege, work-product protection, or other professional confidentiality obligations.
                </p>
                <ul className="list-disc pl-8 space-y-2 mt-2">
                  <li>(i) You should not submit privileged, work-product-protected, or professionally confidential information to the Services unless you have evaluated the risks described in the <Link href="/enterprise" className="text-[#1a3de8] hover:underline">Enterprise Services Agreement</Link> and determined such use is appropriate.</li>
                  <li>(ii) Information submitted to the Services may be processed by third-party AI models, stored in Memory, surfaced in summaries, or made accessible to other channel members or workspace participants, any of which may affect privilege or confidentiality protections.</li>
                  <li>(iii) We make no representations regarding whether use of the Services will preserve or waive any privilege, protection, or confidentiality obligation, and we disclaim liability for any waiver or disclosure that results from your use of the Services.</li>
                  <li>(iv) Customers are solely responsible for establishing policies governing the use of the Services in connection with privileged, confidential, or professionally sensitive information, and for ensuring that their users are aware of and comply with such policies.</li>
                </ul>
              </div>
            </section>

            <section>
              <p>
                <strong>14. Integrations and Authorized Credentials.</strong> You and the applicable Customer are solely responsible for configuring and managing integrations with Third-Party Tools and services, including but not limited to the creation, use, scope, and security of API keys, access tokens, webhooks, and other credentials. Any actions taken by the Services using authorized credentials are deemed authorized by you or the Customer. You are responsible for promptly revoking or rotating credentials if they are compromised or no longer authorized. We are not responsible for any loss, damage, or unauthorized activity resulting from the use of valid credentials.
              </p>
              <p className="mt-4">
                Certain features of the Services allow authorized users to configure channels, integrations, and AI-enabled agents that interact with Third-Party Tools and services. Actions performed by AI agents are limited to the credentials, permissions, and scopes that have been explicitly configured and authorized by the applicable Customer or Channel Manager. Unless otherwise directed, the AI agent will use the Channel Manager&apos;s credentials when users of the chat invoke the agent. If a user requests an action that exceeds the available authorization or credential scope, the Services may fail to execute the request, prompt for additional authorization, or decline to perform the action.
              </p>
              <p className="mt-4">
                You acknowledge and agree that the Services are designed to enforce authorization boundaries, and that unsuccessful execution of a requested action due to insufficient credentials, permissions, or scope does not constitute a service error or malfunction.
              </p>
            </section>

            <section>
              <p>
                <strong>15. Feedback.</strong> If you choose to provide feedback, suggestions, ideas, or recommendations regarding the Services (&quot;Feedback&quot;), you acknowledge and agree that such Feedback is provided voluntarily and without restriction. We may use, implement, modify, incorporate, or otherwise act upon such Feedback for any purpose, without obligation, compensation, or attribution to you.
              </p>
            </section>

            <section>
              <p>
                <strong>16. Intellectual Property Rights.</strong> Although we give you permission to use our Services, we retain any intellectual property rights we have in the Services.
              </p>
              <div className="mt-4 space-y-4">
                <p>
                  <strong>(a) Ownership.</strong> The Services, including all software, code, models, interfaces, designs, workflows, features, and documentation, are owned by or licensed to us and are protected by intellectual property laws. Except for the limited rights expressly granted to you under these User Terms, we retain all right, title, and interest in and to the Services and all related intellectual property.
                </p>
                <p>
                  <strong>(b) Limited Right to Use the Services.</strong> Subject to your compliance with these User Terms, the <a href="#acceptable-use-policy" className="text-[#1a3de8] hover:underline">Acceptable Use Policy</a>, and applicable law, we grant you a limited, non-exclusive, non-transferable, revocable right to access and use the Services solely for your internal business purposes and only as permitted by the Customer controlling the applicable workspace.
                </p>
                <p>
                  <strong>(c) Your Content.</strong> You (or the applicable Customer) retain ownership of any intellectual property rights you have in content, data, materials, prompts, files, communications, or other information that you submit to, generate within, or process through the Services (&quot;User Content&quot;).
                </p>
                <p>
                  <strong>(d) License to Use User Content.</strong> By submitting or generating User Content through the Services, you grant us a non-exclusive, worldwide, royalty-free license to host, store, transmit, process, reproduce, modify, and otherwise use User Content solely to:
                </p>
                <ul className="list-disc pl-8 space-y-1">
                  <li>(i) provide, operate, maintain, and secure the Services;</li>
                  <li>(ii) perform obligations under the applicable <Link href="/enterprise" className="text-[#1a3de8] hover:underline">Enterprise Services Agreement</Link>;</li>
                  <li>(iii) enable collaboration, integrations, and AI-enabled features requested by you or the Customer;</li>
                  <li>(iv) comply with legal obligations and enforce the Terms of Service; and</li>
                  <li>(v) improve and develop the Services, including reliability, safety, and performance, in a manner consistent with the Privacy Policy and Customer instructions.</li>
                </ul>
                <p className="mt-4">
                  This license continues for as long as the User Content is protected by applicable intellectual property rights, unless and until such User Content is deleted from the Services. Upon deletion, the license terminates, except to the extent we are required to retain or continue using such User Content to comply with applicable law, legal process, enforce agreements, or as otherwise described in these User Terms or the Privacy Policy.
                </p>
                <p>
                  <strong>(e) Representations Regarding User Content.</strong> You represent and warrant that you have all rights, permissions, and authority necessary to submit User Content to the Services and to grant the license described above, and that use of such User Content as permitted by these User Terms of Service does not violate applicable law or infringe the rights of any third party.
                </p>
                <p>
                  <strong>(f) No Implied Rights.</strong> Except as expressly stated in these User Terms, no rights or licenses are granted by us, whether by implication, estoppel, or otherwise.
                </p>
              </div>
            </section>

            <section>
              <p>
                <strong>17. Limitation of Liability.</strong> To the maximum extent permitted by law, neither party will be liable for indirect, incidental, special, consequential, or punitive damages whether in contract, tort, or any other theory of liability and whether or not the party has been advised of the possibility of such damages. Unless you are also a Customer, you will have no financial liability to us for breach of these User Terms. Our aggregate liability to you for breach of these terms will not exceed one hundred dollars. The foregoing does not limit either party&apos;s right to seek and obtain equitable relief nor apply to the extent prohibited by applicable law.
              </p>
            </section>

            <section>
              <p>
                <strong>18. Consumer Law.</strong> The Services are intended for business and organizational use, not consumer purposes. You hereby acknowledge that consumer laws do not apply, to the maximum extent permitted by law. If however any consumer laws apply and cannot be excluded, our liability is limited to the maximum extent permitted by law.
              </p>
            </section>

            <section>
              <p>
                <strong>19. Notices.</strong> Notices to you may be provided by emailing the email address associated with your account or directly messaging you through the Services. Legal notices to A Dream must be sent to the address designated by us, which is: 2261 Market Street, STE 60578, San Francisco, CA, 94114.
              </p>
            </section>

            <section>
              <p>
                <strong>20. Modifications.</strong> We may modify these User Terms from time to time. Material changes will be communicated using reasonable means, including emailing the email address associated with your account or directly messaging you through the Services. Continued use after the effective date constitutes acceptance.
              </p>
            </section>

            <section>
              <p>
                <strong>21. Assignment.</strong> You may not assign these User Terms, including the <a href="#acceptable-use-policy" className="text-[#1a3de8] hover:underline">Acceptable Use Policy</a>, without our prior written consent. We may assign them in connection with a merger, acquisition, reorganization, or sale of assets.
              </p>
            </section>

            <section>
              <p>
                <strong>22. Severability.</strong> If any provision is held unenforceable, including a provision in the <a href="#acceptable-use-policy" className="text-[#1a3de8] hover:underline">Acceptable Use Policy</a>, it will be (1) modified to the minimum extent necessary and (2) interpreted by the court in furtherance of the objectives of the original provision to the fullest extent permitted by law, and the remaining provisions will remain in effect.
              </p>
            </section>

            <section>
              <p>
                <strong>23. Governing Law, Arbitration, and Class Action Waiver.</strong> These User Terms are governed by the law specified in the applicable <Link href="/enterprise" className="text-[#1a3de8] hover:underline">Enterprise Services Agreement</Link>, without regard to conflict-of-laws principles.
              </p>
              <p className="mt-4">
                Except as expressly provided in the applicable <Link href="/enterprise" className="text-[#1a3de8] hover:underline">Enterprise Services Agreement</Link>, any dispute, claim, or controversy arising out of or relating to these User Terms, the Services, or your use of the Services shall be resolved by binding arbitration, rather than in court, in accordance with the arbitration provisions set forth in the <Link href="/enterprise" className="text-[#1a3de8] hover:underline">Enterprise Services Agreement</Link>. The arbitration shall be conducted by the arbitral forum and under the rules specified in the <Link href="/enterprise" className="text-[#1a3de8] hover:underline">Enterprise Services Agreement</Link>, and judgment on the arbitration award may be entered in any court of competent jurisdiction.
              </p>
              <p className="mt-4">
                To the fullest extent permitted by applicable law, you agree that any arbitration or proceeding must be brought in your individual capacity and not as a plaintiff or class member in any purported class, collective, representative, private attorney general, or consolidated proceeding. Arbitrators may not consolidate claims or preside over any form of representative or class proceeding.
              </p>
              <p className="mt-4">
                Nothing in this section limits either party&apos;s right to seek injunctive or equitable relief in a court of competent jurisdiction to prevent unauthorized use, misuse, or infringement of intellectual property or confidential information, or where such relief is expressly permitted under the <Link href="/enterprise" className="text-[#1a3de8] hover:underline">Enterprise Services Agreement</Link>.
              </p>
            </section>

            <section>
              <p>
                <strong>24. Headings.</strong> Section and paragraph headings in these User Terms are for convenience only and have no legal or contractual effect.
              </p>
            </section>

            <section>
              <p>
                <strong>25. Survival.</strong> Sections relating to allocation of responsibility, disclaimers, limitation of liability, governing law, venue, and any provisions which by their nature should survive termination or expiration of these User Terms will survive any termination or expiration.
              </p>
            </section>

            <section>
              <p>
                <strong>26. Privacy Policy.</strong> Please review our Privacy Policy for information on how we collect and use data in connection with the Services.
              </p>
            </section>

            <section>
              <p>
                <strong>27. Website Cookies.</strong> Our public websites may use cookies and similar technologies as described in our <a href="/privacy#cookie-policy" className="text-[#1a3de8] hover:underline">Cookie Policy</a>, which governs cookies used on our websites only and does not apply to cookies or similar technologies used within the Services.
              </p>
            </section>

            <section>
              <p>
                <strong>28. Entire Agreement.</strong> These User Terms constitute the entire agreement between you and A Dream regarding use of the Services and supersede all prior agreements on that subject.
              </p>
            </section>
          </div>

          {/* Acceptable Use Policy */}
          <h2 id="acceptable-use-policy" className="text-[56px] leading-[0.92] tracking-tight mt-20 mb-12 scroll-mt-32" style={{ fontFamily: "var(--font-synt)" }}>
            Acceptable Use Policy
          </h2>

          <div className="space-y-8 text-[18px] leading-relaxed">
            <section>
              <p>
                <strong>1. Applicability and Incorporation.</strong> This Acceptable Use Policy (&quot;AUP&quot;) governs all access to and use of the Services and applies to every user, including authorized users invited to a Customer workspace. Compliance with this AUP is a condition of using the Services and is incorporated by reference into the User Terms of Service (&quot;User Terms&quot;).
              </p>
            </section>

            <section>
              <p>
                <strong>2. Lawful Use and Compliance Framework.</strong> You may use the Services only for lawful purposes and in compliance with applicable law, the User Terms, this AUP, and any policies established by the Customer controlling the workspace you use. You must also comply with the terms, policies, and acceptable use requirements of any applicable Third-Party AI Providers whose models or services are used by us in providing AI-enabled features, and any Third-Party Tools to which you or we connect on your behalf, and those requirements may be updated from time to time.
              </p>
            </section>

            <section>
              <p>
                <strong>3. Account, Access, and Credential Responsibility.</strong> You are responsible for all activity conducted through your account and for maintaining the confidentiality and security of credentials used to access the Services or connect integrations, including passwords, API keys, access tokens, OAuth grants, webhooks, and similar mechanisms. You must promptly revoke, rotate, or disable any credentials you suspect are compromised or no longer authorized and promptly notify us using the reporting channel in this AUP.
              </p>
            </section>

            <section>
              <p>
                <strong>4. Prohibited Materials and Content.</strong> You may not submit, upload, transmit, store, or otherwise make available through the Services any content that is unlawful, infringing, or harmful, or that violates the rights of others. This includes content that infringes intellectual property rights (including copyright, patent, trademark, trade secret, and rights of publicity), content that you do not have the right to disclose (including confidential, proprietary, or regulated information), content that is deceptive or fraudulent, content that is harassing, threatening, hateful, or discriminatory, content that exploits or endangers minors, content that facilitates illegal activity, and content that contains malicious code or harmful technical payloads. You are responsible for ensuring you have all necessary rights, permissions, and lawful bases to submit or process any content through the Services, including content that contains personal data, sensitive personal data, or information subject to contractual confidentiality or professional obligations.
              </p>
            </section>

            <section>
              <p>
                <strong>5. Prohibited Actions and Misuse.</strong> You may not use the Services in a manner that is illegal, harmful, deceptive, abusive, or that interferes with the integrity, security, or availability of the Services or any systems or networks. Prohibited conduct includes attempting to gain unauthorized access to accounts, workspaces, data, systems, or networks; probing, scanning, or testing vulnerabilities; bypassing or circumventing safeguards or access controls; introducing malware or harmful code; conducting phishing, credential harvesting, or impersonation; interfering with or disrupting the Services (including through denial-of-service activity, automated flooding, or abusive request volume); scraping, harvesting, extracting, or copying content or outputs at scale in a way that is not authorized by us; using the Services to send unauthorized promotions, spam, or other unsolicited communications; misrepresenting affiliation, identity, or the source of content; and using the Services to violate privacy rights, including through unauthorized surveillance, unauthorized collection of personal data, or attempting to re-identify de-identified information.
              </p>
            </section>

            <section>
              <p>
                <strong>6. AI-Specific Restrictions and High-Risk Uses.</strong> You may not use AI-enabled features of the Services in ways that are unlawful, unsafe, or that create undue risk to individuals. You may not use AI features, including but not limited to AI Memory features, to make fully automated decisions about individuals that have legal, medical, financial, employment, housing, insurance, educational admissions, credit, or similarly material effects without meaningful human review and responsibility. You may not use AI features to generate or facilitate instructions for wrongdoing, evade safety controls, produce malicious code, conduct social engineering, or create or distribute content that is unlawful, exploitative, or harmful. You may not attempt to reverse engineer, extract, decompile, or discover underlying AI systems, prompts, safety mechanisms, or model behavior in order to bypass restrictions, or to build or train competing models using outputs or the Services in a manner not authorized by us.
              </p>
              <p className="mt-4">
                You may not use the Talk-Through Feature to capture voice, screen, or cursor data for purposes that are unlawful, that violate the privacy rights of third parties, or that involve the recording of individuals who have not consented to being recorded to the extent required by applicable law. You may not use the Talk-Through Feature to narrate or capture content that is subject to professional secrecy, attorney-client privilege, or other confidentiality obligations, unless you have evaluated the applicable risks and determined such use is appropriate. You may not use In-Channel Apps or agent-enabled features to create applications that are designed to circumvent authorization controls, harvest credentials, conduct surveillance, or perform actions outside the scope authorized by the applicable Customer.
              </p>
              <div className="mt-4 space-y-4">
                <p>
                  <strong>(a) Unauthorized Recording.</strong> You may not use the Talk-Through Feature to record, capture, or transcribe the voice, likeness, or communications of any individual without their knowledge and consent to the extent required by applicable law, including two-party or all-party consent jurisdictions.
                </p>
                <p>
                  <strong>(b) Sensitive and Privileged Content.</strong> You may not use the Talk-Through Feature to narrate, capture, or process content that is subject to attorney-client privilege, work-product protection, professional secrecy, or other confidentiality obligations, unless you have independently evaluated the risks and determined such use is appropriate in light of applicable legal and ethical requirements.
                </p>
                <p>
                  <strong>(c) Misuse of Transcriptions.</strong> You may not use Talk-Through transcriptions to misrepresent statements, fabricate records, or create misleading attributions. You are responsible for reviewing all transcribed content for accuracy before relying on it or authorizing agent actions based upon it.
                </p>
                <p>
                  <strong>(d) Prohibited Data Capture.</strong> You may not use the Talk-Through Feature to intentionally capture credentials, passwords, API keys, personal identification numbers, financial account numbers, or other sensitive authentication or financial data displayed on screen during a session.
                </p>
              </div>
            </section>

            <section>
              <p>
                <strong>7. Circumvention of Authorization Controls.</strong> You may not attempt to bypass, override, escalate, or otherwise circumvent authorization controls, credential requirements, permission boundaries, or integration scopes associated with the Services, including through the use of AI features, prompts, automation, or Third-Party Tools.
              </p>
              <p className="mt-4">
                This includes attempting to cause an AI agent to perform actions for which it lacks valid credentials, permissions, or authorization, or attempting to induce the Services to access third-party systems beyond the scope configured by the applicable Customer or Channel Manager.
              </p>
              <div className="mt-4 space-y-4">
                <p>
                  <strong>(a) Unauthorized Scope Expansion.</strong> You may not use In-Channel Apps or agent-enabled features to create applications that attempt to access data, systems, credentials, or resources outside the scope authorized by the applicable Customer or Channel Manager for that channel.
                </p>
                <p>
                  <strong>(b) Credential Harvesting via Apps.</strong> You may not use In-Channel Apps to collect, store, display, or transmit credentials, API keys, tokens, passwords, or other authentication data, whether belonging to you or to other users.
                </p>
                <p>
                  <strong>(c) Surveillance and Monitoring.</strong> You may not use In-Channel Apps to conduct unauthorized surveillance, monitoring, or tracking of users, their activities, or their data, whether within the Services or through connected Third-Party Tools.
                </p>
                <p>
                  <strong>(d) Cross-Channel Data Exfiltration.</strong> You may not use In-Channel Apps or agent-enabled features to deliberately access, extract, copy, or surface data from other channels or contexts within the workspace that are not authorized for the channel in which the In-Channel App is deployed.
                </p>
              </div>
            </section>

            <section>
              <p>
                <strong>8. Accuracy, Attribution, and Non-Reliance.</strong> You are responsible for verifying the accuracy, legality, and appropriateness of content and AI-generated outputs before using or sharing them. You may not represent AI-generated output as human-generated when doing so would be misleading in context, including where attribution is required by law, regulation, professional duty, or Customer policy. You acknowledge that AI outputs can be incorrect, incomplete, or misleading and must not be used as a substitute for professional judgment. You may not rely on AI-generated summaries or Memory features as complete or authoritative records of communications or decisions.
              </p>
            </section>

            <section>
              <p>
                <strong>9. No Reliance on Message Persistence.</strong> You may not rely on the Services as a system of record for private communications. Private messages may be automatically deleted within a short period as described in the User Terms. You are responsible for retaining any information you require prior to deletion, subject to Customer policies and applicable law.
              </p>
            </section>

            <section>
              <p>
                <strong>10. Third-Party Integrations and External Services.</strong> If you enable or use third-party services, integrations, or connected applications with the Services, you acknowledge that data may be transmitted to and from those third parties as required for functionality, and that third-party terms and privacy policies apply. You are responsible for configuring integrations appropriately, limiting scopes and permissions, and ensuring you have authority to connect and use any external accounts, data sources, or services.
              </p>
            </section>

            <section>
              <p>
                <strong>11. Copyright Policy and DMCA Notice-and-Takedown.</strong> We respect the intellectual property rights of others and respond to notices of alleged copyright infringement in accordance with the U.S. Digital Millennium Copyright Act (&quot;DMCA&quot;) and similar applicable laws.
              </p>
              <div className="mt-4 space-y-4">
                <p>
                  <strong>(a) Customer Responsibilities.</strong> To the extent a Customer uses the Services for hosting, transmitting, generating, storing, or sharing content, messages, files, prompts, outputs, or other materials, including through collaboration features, integrations, or artificial-intelligence functionality, the Customer is responsible for ensuring that such use complies with applicable intellectual property laws, including the U.S. Digital Millennium Copyright Act of 1998 and similar statutes in other jurisdictions (collectively, the &quot;DMCA&quot;).
                </p>
                <p>Without limiting the foregoing, each Customer is responsible for:</p>
                <ul className="list-disc pl-8 space-y-2 mt-2">
                  <li>(i) complying with any valid notices of alleged copyright infringement received under the DMCA (Section 512 of the U.S. Copyright Act) or similar laws;</li>
                  <li>(ii) establishing, maintaining, and enforcing procedures to expeditiously respond to notices of alleged infringement that comply with the DMCA, including implementing a policy for terminating or restricting access for repeat infringers where appropriate;</li>
                  <li>(iii) communicating such copyright compliance policies and procedures to users within the Customer&apos;s workspace; and</li>
                  <li>(iv) ensuring that use of the Services by its users, including use of AI-enabled features and Third-Party Integrations, does not infringe or misappropriate the intellectual property rights of others.</li>
                </ul>
                <p>
                  <strong>(b) Our Policy and Enforcement Rights.</strong> It is our policy to respond expeditiously to valid notices of claimed copyright infringement that comply with the DMCA. In appropriate circumstances and in accordance with applicable law, we may remove or disable access to allegedly infringing material, suspend or restrict access to specific features, or take other actions reasonably necessary to address alleged infringement.
                </p>
                <p>
                  If we receive one or more notices alleging that material within a Customer-controlled workspace infringes the intellectual property rights of another party, we may, in our discretion and as required to comply with law or preserve legal protections, disable access to the identified material, suspend access to the affected workspace or portions of the Services, or notify the applicable Customer.
                </p>
                <p>
                  If we receive multiple infringement notices relating to the same Customer, workspace, or pattern of conduct, we reserve the right to take additional action as we deem necessary or appropriate, including suspension or termination of the Customer&apos;s access to the Services or subscription, in whole or in part, in order to preserve its rights, maintain eligibility for statutory safe harbors, or prevent violations of law or third-party rights.
                </p>
                <p>
                  <strong>(c) Counter-Notifications.</strong> Where content is removed or disabled pursuant to a DMCA notice, we may, where required by law, provide the applicable Customer or user with information regarding the removal and the opportunity to submit a counter-notification in accordance with the DMCA. Any counter-notification must include the information required by law, including a statement under penalty of perjury and consent to the jurisdiction of an appropriate court.
                </p>
                <p>
                  <strong>(d) Artificial Intelligence and Copyright Considerations.</strong> The Services include features that rely on third-party artificial-intelligence models and systems to generate outputs based on user-provided inputs and contextual information. The use of such AI-enabled features may increase the complexity of copyright and intellectual property issues, including risks related to similarity, derivative works, or unintended reproduction of protected material.
                </p>
                <p>
                  We do not guarantee that AI-generated outputs will be original, non-infringing, or free from claims by third parties. Customers and users are solely responsible for ensuring that their inputs to, use of, and reliance on AI-generated outputs comply with applicable intellectual property laws and do not infringe the rights of others.
                </p>
                <p>
                  Nothing in this policy obligates us to monitor, pre-screen, or verify content or AI-generated outputs for potential copyright infringement.
                </p>
                <p>
                  <strong>(e) Reservation of Rights.</strong> Nothing in this section limits our ability to take any action it reasonably determines is necessary to comply with the DMCA or similar laws, preserve statutory safe-harbor protections, protect the Services or its users, or prevent or address violations of law or third-party rights.
                </p>
              </div>
            </section>

            <section>
              <p>
                <strong>12. Monitoring, Investigation, and Enforcement.</strong> We may investigate suspected violations of this AUP and may take any action we deem appropriate, including warning, removing or restricting content, disabling features, limiting functionality, suspending access, terminating accounts, or working through the Customer to remediate misuse. Where feasible and appropriate, we will coordinate with the Customer controlling the relevant workspace, but we may act directly where there is a credible risk of harm, legal exposure, security risk, or ongoing abuse.
              </p>
            </section>

            <section>
              <p>
                <strong>13. Prohibited Content - Abuse, Harm, and Interference.</strong> You must not abuse, harm, interfere with, or disrupt the Services or related systems or networks. Prohibited conduct includes, without limitation, attempts to circumvent safeguards or access controls; deploying malware or malicious code; engaging in denial-of-service or traffic flooding; interfering with integrations, APIs, or third-party services connected to the Services; probing or testing system vulnerabilities without authorization; or otherwise using the Services in a manner that materially degrades performance, security, or availability for us, Customers, or other users.
              </p>
            </section>

            <section>
              <p>
                <strong>14. Sensitive Information.</strong> You should not submit highly sensitive, privileged, or confidential information to the Services except in private or restricted contexts intended for such use. You are responsible for determining whether use of the Services is appropriate for any particular information, taking into account workspace configuration, sharing settings, and AI-enabled features. Channel managers and administrators should exercise care when adding members to channels that contain sensitive information. In addition, depending on workspace configuration and authorization settings, existing channel members may be able to invite or add additional participants using credentials or permissions associated with the channel, channel manager, or its integrations, which may expand access to information without further approval, including approval by the channel manager.
              </p>
              <p className="mt-4">
                In-Channel Apps created within a channel are visible to all channel members and operate within the channel&apos;s configured permissions and credentials. You should not use In-Channel Apps to process or display sensitive, privileged, or confidential information unless all channel members are authorized to access such information. The underlying AI agent VM environment may have cross-channel access within the same workspace, subject to workspace-level permissions and Customer-configured access controls. You should exercise care when submitting sensitive information to any channel, taking into account the cross-channel access boundary described in the User Terms.
              </p>
            </section>

            <section>
              <p>
                <strong>15. Reporting.</strong> Suspected violations of this AUP, security incidents, compromised credentials, suspected phishing or impersonation, and intellectual property complaints must be reported to us at contact@popcorn.ai.
              </p>
            </section>

            <section>
              <p>
                <strong>16. Updates.</strong> We may update this AUP from time to time. Notices about changes may be communicated to you by emailing the email address associated with your account or direct messages to you through the Services. Continued use of the Services after changes take effect constitutes acceptance of the updated AUP.
              </p>
            </section>

            <section>
              <p>
                <strong>17. Relationship to User Terms.</strong> This AUP is incorporated by reference into the User Terms. If there is a conflict between this AUP and the User Terms, the User Terms control.
              </p>
            </section>
          </div>
        </article>
      </div>

      <PageFooter />
    </main>
  );
}
