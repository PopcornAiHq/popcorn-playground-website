import Link from "next/link";
import PageFooter from "../components/PageFooter";
import SubpageNav from "../components/SubpageNav";

export default function MCPPage() {
  return (
    <main className="relative min-h-screen bg-[#FFFDF8] text-[#1a1a1a]">
      <SubpageNav />

      <div className="max-w-[1200px] mx-auto px-10 pt-32 pb-20">
        <article className="max-w-[900px] mx-auto">
          <h1 className="text-[56px] leading-[0.92] tracking-tight mb-4" style={{ fontFamily: "var(--font-synt)" }}>
            Popcorn MCP Connector
          </h1>
          <p className="text-[24px] leading-[1.3] text-[#1a1a1a]/60 mb-12" style={{ fontFamily: "var(--font-albert-sans)" }}>
            Connect Claude to your Popcorn workspace
          </p>

          <div className="space-y-12 text-[18px] leading-relaxed" style={{ fontFamily: "var(--font-albert-sans)" }}>

            {/* What is Popcorn */}
            <section>
              <h2 className="text-[28px] mb-4" style={{ fontFamily: "var(--font-synt)" }}>What is Popcorn?</h2>
              <p>
                Popcorn runs static sites, build-step frontends (React, Vite, Next.js), and apps with a live backend (Node/Express, Python/Flask), alongside built-in messaging and collaboration. The Popcorn MCP connector lets Claude read your channels, send messages, search conversations, and deploy apps to Popcorn app channels &mdash; all from within Claude.
              </p>
            </section>

            {/* Features */}
            <section>
              <h2 className="text-[28px] mb-4" style={{ fontFamily: "var(--font-synt)" }}>Features</h2>
              <ul className="list-disc pl-8 space-y-2">
                <li><strong>Read messages</strong> &mdash; Browse channel history, threads, and DMs</li>
                <li><strong>Send messages</strong> &mdash; Post to channels, reply in threads, upload files</li>
                <li><strong>Search</strong> &mdash; Find messages, channels, DMs, and users across your workspace</li>
                <li><strong>React</strong> &mdash; Add or remove emoji reactions on messages</li>
                <li><strong>Deploy</strong> &mdash; Publish apps to Popcorn app channels from local files or a GitHub ref</li>
                <li><strong>Export</strong> &mdash; Pull a site&apos;s source back to your local machine or push it to GitHub</li>
                <li><strong>Channel management</strong> &mdash; View channel details, members, and site deployment status</li>
              </ul>
            </section>

            {/* Setup */}
            <section>
              <h2 className="text-[28px] mb-6" style={{ fontFamily: "var(--font-synt)" }}>Setup</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-[22px] mb-3" style={{ fontFamily: "var(--font-synt)" }}>Claude.ai (Web)</h3>
                  <ol className="list-decimal pl-8 space-y-2">
                    <li>Go to <strong>Settings &rarr; Integrations &rarr; Add MCP Server</strong></li>
                    <li>Enter the server URL: <code className="bg-black/5 px-2 py-0.5 rounded text-[16px]" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>https://mcp.popcorn.ai/mcp</code></li>
                    <li>Click <strong>Connect</strong> and sign in with your Popcorn account</li>
                    <li>Grant the requested permissions (profile and email)</li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-[22px] mb-3" style={{ fontFamily: "var(--font-synt)" }}>Claude Code (CLI)</h3>
                  <p className="mb-3">Add to your Claude Code settings or run:</p>
                  <pre className="bg-[#1a1a1a] text-white rounded-[12px] px-6 py-4 overflow-x-auto text-[15px]" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>
                    claude mcp add popcorn --transport streamable-http https://mcp.popcorn.ai/mcp
                  </pre>
                </div>

                <div>
                  <h3 className="text-[22px] mb-3" style={{ fontFamily: "var(--font-synt)" }}>Claude Desktop</h3>
                  <p className="mb-3">Add to your <code className="bg-black/5 px-2 py-0.5 rounded text-[16px]" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>claude_desktop_config.json</code>:</p>
                  <pre className="bg-[#1a1a1a] text-white rounded-[12px] px-6 py-4 overflow-x-auto text-[15px]" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>{`{
  "mcpServers": {
    "popcorn": {
      "url": "https://mcp.popcorn.ai/mcp"
    }
  }
}`}</pre>
                </div>
              </div>
            </section>

            {/* Authentication */}
            <section>
              <h2 className="text-[28px] mb-4" style={{ fontFamily: "var(--font-synt)" }}>Authentication</h2>
              <p>
                Popcorn uses OAuth 2.0 for authentication. When you connect, you&apos;ll be redirected to sign in with your Popcorn account. The connector requests two scopes:
              </p>
              <ul className="list-disc pl-8 space-y-2 mt-4">
                <li><strong>profile</strong> &mdash; Your name and username</li>
                <li><strong>email</strong> &mdash; Your email address (used to identify your workspace)</li>
              </ul>
              <p className="mt-4">
                Your session stays active as long as you use it regularly, expiring after 7 days of inactivity. You can revoke access at any time by disconnecting the integration in Claude&apos;s settings.
              </p>
              <p className="mt-4">
                If you belong to multiple Popcorn workspaces, ask Claude to <em>&ldquo;switch workspace&rdquo;</em> or call <code className="bg-black/5 px-2 py-0.5 rounded text-[16px]" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>whoami</code> to see all workspaces you have access to. Passing a <code className="bg-black/5 px-2 py-0.5 rounded text-[16px]" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>workspace_id</code> to <code className="bg-black/5 px-2 py-0.5 rounded text-[16px]" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>whoami</code> switches the active workspace for the session.
              </p>
            </section>

            {/* Usage Examples */}
            <section>
              <h2 className="text-[28px] mb-6" style={{ fontFamily: "var(--font-synt)" }}>Usage Examples</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-[20px] font-bold mb-2">Read channel messages</h3>
                  <p className="bg-black/5 rounded-[10px] px-5 py-3 italic text-[#1a1a1a]/70 mb-2">&quot;What&apos;s the latest discussion in #design-reviews?&quot;</p>
                  <p className="text-[16px] text-[#1a1a1a]/60">Claude searches for the channel, reads recent messages, and summarizes the conversation &mdash; including who said what and any decisions made.</p>
                </div>

                <div>
                  <h3 className="text-[20px] font-bold mb-2">Post an update</h3>
                  <p className="bg-black/5 rounded-[10px] px-5 py-3 italic text-[#1a1a1a]/70 mb-2">&quot;Send a message to #eng-standup: API migration is complete.&quot;</p>
                  <p className="text-[16px] text-[#1a1a1a]/60">Claude finds the channel, shows you the message for confirmation, then posts it. Channel members receive a notification.</p>
                </div>

                <div>
                  <h3 className="text-[20px] font-bold mb-2">Deploy a project</h3>
                  <p className="bg-black/5 rounded-[10px] px-5 py-3 italic text-[#1a1a1a]/70 mb-2">&quot;Publish my project to Popcorn&quot;</p>
                  <p className="text-[16px] text-[#1a1a1a]/60">Claude packages your local project files and calls <code className="bg-black/5 px-2 py-0.5 rounded text-[16px]" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>deploy_site</code> to push them to your Popcorn app channel&apos;s VM. You get a live site URL and version number. Or pass a <code className="bg-black/5 px-2 py-0.5 rounded text-[16px]" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>git_ref</code> to deploy directly from GitHub instead.</p>
                </div>

                <div>
                  <h3 className="text-[20px] font-bold mb-2">Export a site</h3>
                  <p className="bg-black/5 rounded-[10px] px-5 py-3 italic text-[#1a1a1a]/70 mb-2">&quot;Export my site to a GitHub repo&quot;</p>
                  <p className="text-[16px] text-[#1a1a1a]/60">Claude calls <code className="bg-black/5 px-2 py-0.5 rounded text-[16px]" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>export_site</code> to pull the current site source off the VM &mdash; either back to your local machine as a download or pushed up to a GitHub branch. Useful for forking a live site back into code.</p>
                </div>

                <div>
                  <h3 className="text-[20px] font-bold mb-2">Search across your workspace</h3>
                  <p className="bg-black/5 rounded-[10px] px-5 py-3 italic text-[#1a1a1a]/70 mb-2">&quot;Find any messages mentioning the auth migration&quot;</p>
                  <p className="text-[16px] text-[#1a1a1a]/60">Claude searches messages across all channels you have access to and presents matches with channel names, authors, and timestamps.</p>
                </div>

                <div>
                  <h3 className="text-[20px] font-bold mb-2">Reply in a thread</h3>
                  <p className="bg-black/5 rounded-[10px] px-5 py-3 italic text-[#1a1a1a]/70 mb-2">&quot;Reply to Ben&apos;s message in #backend: Good catch, I&apos;ll fix it in the next PR&quot;</p>
                  <p className="text-[16px] text-[#1a1a1a]/60">Claude finds the message, shows your reply for confirmation, and posts it in the thread. Thread participants are notified.</p>
                </div>
              </div>
            </section>

            {/* Available Tools */}
            <section>
              <h2 className="text-[28px] mb-4" style={{ fontFamily: "var(--font-synt)" }}>Available Tools</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b-2 border-black/10">
                      <th className="py-3 pr-4 text-[16px] font-bold" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>Tool</th>
                      <th className="py-3 pr-4 text-[16px] font-bold">Description</th>
                      <th className="py-3 text-[16px] font-bold">Access</th>
                    </tr>
                  </thead>
                  <tbody className="text-[16px]">
                    <tr className="border-b border-black/5">
                      <td className="py-3 pr-4" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}><code>whoami</code></td>
                      <td className="py-3 pr-4">Show current workspace and user, list all workspaces you belong to, and optionally switch active workspace</td>
                      <td className="py-3"><span className="bg-[#1a3de8]/10 text-[#1a3de8] px-2 py-0.5 rounded text-[14px]">Read / Write</span></td>
                    </tr>
                    <tr className="border-b border-black/5">
                      <td className="py-3 pr-4" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}><code>get_channel</code></td>
                      <td className="py-3 pr-4">Channel details, members, and site status</td>
                      <td className="py-3"><span className="bg-black/5 px-2 py-0.5 rounded text-[14px]">Read-only</span></td>
                    </tr>
                    <tr className="border-b border-black/5">
                      <td className="py-3 pr-4" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}><code>search</code></td>
                      <td className="py-3 pr-4">Search channels, DMs, users, or messages</td>
                      <td className="py-3"><span className="bg-black/5 px-2 py-0.5 rounded text-[14px]">Read-only</span></td>
                    </tr>
                    <tr className="border-b border-black/5">
                      <td className="py-3 pr-4" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}><code>read_messages</code></td>
                      <td className="py-3 pr-4">Read message history and threads</td>
                      <td className="py-3"><span className="bg-black/5 px-2 py-0.5 rounded text-[14px]">Read-only</span></td>
                    </tr>
                    <tr className="border-b border-black/5">
                      <td className="py-3 pr-4" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}><code>post_message</code></td>
                      <td className="py-3 pr-4">Post messages, reply in threads, upload files</td>
                      <td className="py-3"><span className="bg-[#1a3de8]/10 text-[#1a3de8] px-2 py-0.5 rounded text-[14px]">Write</span></td>
                    </tr>
                    <tr className="border-b border-black/5">
                      <td className="py-3 pr-4" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}><code>react</code></td>
                      <td className="py-3 pr-4">Add or remove emoji reactions</td>
                      <td className="py-3"><span className="bg-[#1a3de8]/10 text-[#1a3de8] px-2 py-0.5 rounded text-[14px]">Write</span></td>
                    </tr>
                    <tr className="border-b border-black/5">
                      <td className="py-3 pr-4" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}><code>deploy_site</code></td>
                      <td className="py-3 pr-4">Deploy local code or a GitHub ref to a site (auto-creates channel)</td>
                      <td className="py-3"><span className="bg-[#1a3de8]/10 text-[#1a3de8] px-2 py-0.5 rounded text-[14px]">Write</span></td>
                    </tr>
                    <tr className="border-b border-black/5">
                      <td className="py-3 pr-4" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}><code>export_site</code></td>
                      <td className="py-3 pr-4">Export site source from the VM to a local download or push to GitHub</td>
                      <td className="py-3"><span className="bg-[#1a3de8]/10 text-[#1a3de8] px-2 py-0.5 rounded text-[14px]">Write</span></td>
                    </tr>
                    <tr>
                      <td className="py-3 pr-4" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}><code>update_channel</code></td>
                      <td className="py-3 pr-4">Create or update channels <span className="text-[#1a1a1a]/50">(deprecated &mdash; use <code className="bg-black/5 px-1 rounded" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>deploy_site</code> / <code className="bg-black/5 px-1 rounded" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>export_site</code>)</span></td>
                      <td className="py-3"><span className="bg-[#1a3de8]/10 text-[#1a3de8] px-2 py-0.5 rounded text-[14px]">Write</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* Prompts */}
            <section>
              <h2 className="text-[28px] mb-4" style={{ fontFamily: "var(--font-synt)" }}>Prompts</h2>
              <p>
                The connector also exposes MCP prompts &mdash; invokable workflows that bundle the right tools and instructions for a common task.
              </p>
              <ul className="list-disc pl-8 space-y-2 mt-4">
                <li><code className="bg-black/5 px-2 py-0.5 rounded text-[16px]" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>pop</code> &mdash; Deploy or publish your local project files to a Popcorn app channel. Accepts optional <code className="bg-black/5 px-2 py-0.5 rounded text-[16px]" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>project_name</code> and <code className="bg-black/5 px-2 py-0.5 rounded text-[16px]" style={{ fontFamily: "var(--font-ibm-plex-mono)" }}>context</code> arguments and walks Claude through the full deploy flow.</li>
              </ul>
            </section>

            {/* Privacy & Support */}
            <section>
              <h2 className="text-[28px] mb-4" style={{ fontFamily: "var(--font-synt)" }}>Privacy &amp; Support</h2>
              <p>
                The Popcorn connector only accesses channels and conversations your account has permission to view. No data is stored by the connector beyond your authenticated session.
              </p>
              <ul className="list-disc pl-8 space-y-2 mt-4">
                <li><Link href="/privacy" className="text-[#1a3de8] hover:underline">Privacy Policy</Link></li>
                <li><Link href="/tos" className="text-[#1a3de8] hover:underline">Terms of Service</Link></li>
                <li>Support: <a href="mailto:support@popcorn.ai" className="text-[#1a3de8] hover:underline">support@popcorn.ai</a></li>
              </ul>
            </section>

          </div>
        </article>
      </div>

      <PageFooter />
    </main>
  );
}
