'use client';

import React from 'react';
import { Bot } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="flex h-screen w-full overflow-hidden text-slate-200">

      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-white/5 bg-slate-900/50 backdrop-blur-xl flex flex-col h-full shrink-0 hidden md:flex sticky top-0">
        <div className="p-6 border-b border-white/5 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
            <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" /></svg>
          </div>
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            SalesOps<span className="text-blue-400">AI</span>
          </h1>
        </div>
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <NavItem href="/" active icon="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">Dashboard</NavItem>
          <NavItem href="/playbooks/new" icon="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2">Playbook Builder</NavItem>
          <NavItem href="/cadences" icon="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6">Live Cadences</NavItem>
          <NavItem href="/leads" icon="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">Lead Canvas</NavItem>
          <NavItem href="/settings" icon="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">Settings</NavItem>
        </nav>

        <div className="p-4 border-t border-white/5 mt-auto flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center font-bold shadow-lg shadow-purple-500/20">
            NB
          </div>
          <div>
            <div className="text-sm font-semibold">Noureddine BEN</div>
            <div className="text-xs text-slate-400">Head of RevOps</div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 md:p-10">
        <header className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-1 hidden md:block">Account Dashboard</h2>
            <p className="text-slate-400">Welcome back. The Growth Engine has been busy.</p>
          </div>
          <a href="/playbooks/new" className="glass-card hover-glow px-5 py-2.5 flex items-center gap-2 text-sm font-medium text-white shadow-[0_0_20px_rgba(59,130,246,0.2)]">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
            New Playbook
          </a>
        </header>

        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          <KpiCard title="Active Playbooks" value="12" trend="+2 this week" positive />
          <KpiCard title="Meetings Booked" value="64" trend="+18% vs last month" positive />
          <KpiCard title="Avg Lead Score" value="84/100" trend="+4 pts vs last month" positive />
          <KpiCard title="Engaged Sequence" value="2.4k" trend="-1% vs last month" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {/* AI Insights Panel */}
          <div className="lg:col-span-2 glass-card-premium p-6 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 transition-all duration-700 animate-pulse-glow"></div>

            <div className="flex justify-between items-center mb-6 relative">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Bot className="w-5 h-5 text-purple-400" />
                AI Sequencer Insights
              </h3>
              <span className="text-xs px-3 py-1 bg-white/10 rounded-full text-white backdrop-blur-sm">Live</span>
            </div>

            <div className="space-y-4 relative">
              <InsightRow
                title="Enterprise Q1 Campaign Bottleneck Detected"
                desc="Subject lines are underperforming by 22%. Strategy Agent suggests an A/B test with shorter, question-based subjects."
                action="Review Test"
                urgent
              />
              <InsightRow
                title="High Intent Leads Mined"
                desc="Qualification Agent found 14 new leads at Tier 1 accounts highly active on LinkedIn."
                action="Add to Fast Track"
              />
              <InsightRow
                title="Personalization Drift"
                desc="Cold outreach templates are becoming repetitive. Running refresh generation..."
                action="View Drafts"
                loading
              />
            </div>
          </div>

          {/* Activity Feed */}
          <div className="glass-card-premium p-6">
            <h3 className="text-xl font-semibold mb-6 border-b border-white/5 pb-4">Recent Cadences</h3>
            <div className="space-y-6">
              <ActivityItem name="Mark Williams" action="Replied positively to LinkedIn step 2." time="10m ago" />
              <ActivityItem name="Sarah Chen" action="Meeting booked from Enterprise Playbook." time="1h ago" highlight />
              <ActivityItem name="TechCorp Inc" action="Account score upgraded to Hot." time="3h ago" />
              <ActivityItem name="Q2 Outreach" action="Cadence sequence completed for 450 leads." time="5h ago" />
            </div>
            <a href="/cadences" className="block w-full text-center mt-6 text-sm text-slate-400 hover:text-white transition-colors">View All Activity &rarr;</a>
          </div>
        </div>

        {/* New Enhanced Features Row */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-10">
          <div className="glass-card-premium p-6">
            <h3 className="text-xl font-semibold mb-4 border-b border-white/5 pb-4">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-4">
              <a href="/playbooks/new" className="flex flex-col items-center justify-center p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl transition-all hover:border-blue-500/30 group">
                <svg className="w-8 h-8 text-blue-400 mb-2 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" /></svg>
                <span className="text-sm font-medium">New Playbook</span>
              </a>
              <a href="/leads" className="flex flex-col items-center justify-center p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl transition-all hover:border-emerald-500/30 group">
                <svg className="w-8 h-8 text-emerald-400 mb-2 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" /></svg>
                <span className="text-sm font-medium">Import Leads</span>
              </a>
              <a href="/cadences" className="flex flex-col items-center justify-center p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl transition-all hover:border-purple-500/30 group">
                <svg className="w-8 h-8 text-purple-400 mb-2 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" /></svg>
                <span className="text-sm font-medium">Monitor Active</span>
              </a>
              <a href="/settings" className="flex flex-col items-center justify-center p-4 bg-white/5 hover:bg-white/10 border border-white/5 rounded-xl transition-all hover:border-teal-500/30 group">
                <svg className="w-8 h-8 text-teal-400 mb-2 group-hover:scale-110 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /></svg>
                <span className="text-sm font-medium">Configure</span>
              </a>
            </div>
          </div>
          <div className="lg:col-span-2 glass-card-premium p-6">
            <h3 className="text-xl font-semibold mb-6 border-b border-white/5 pb-4 text-white">System Architecture Health</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-black/40 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>
                  </div>
                  <div>
                    <div className="font-medium text-white text-lg">Ollama Multi-Agent Engine</div>
                    <div className="text-sm text-slate-400">llama3 active | 140ms latency</div>
                  </div>
                </div>
                <div className="text-emerald-400 text-sm font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Online
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-black/40 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <div>
                    <div className="font-medium text-white text-lg">Cadence Event Bus Worker</div>
                    <div className="text-sm text-slate-400">142 messages/min (local queue)</div>
                  </div>
                </div>
                <div className="text-emerald-400 text-sm font-semibold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  Online
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

// Subcomponents helper directly in file for standardizing the layout
function NavItem({ active, icon, href, children }: { active?: boolean, icon: string, href: string, children: React.ReactNode }) {
  return (
    <a href={href} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${active ? 'bg-white/10 text-white font-medium shadow-[0_0_15px_rgba(255,255,255,0.05)]' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} /></svg>
      {children}
    </a>
  );
}

function KpiCard({ title, value, trend, positive }: { title: string, value: string, trend: string, positive?: boolean }) {
  return (
    <div className="glass-card-premium p-6 hover-glow cursor-default relative overflow-hidden group transition-transform hover:-translate-y-1">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/0 via-teal-500/10 to-blue-500/0 opactiy-0 group-hover:opacity-100 transition-opacity duration-1000 -translate-x-[100%] group-hover:translate-x-[100%]"></div>
      <h3 className="text-slate-400 text-sm font-medium mb-2">{title}</h3>
      <div className="text-3xl font-bold text-white mb-2 tracking-tight">{value}</div>
      <div className={`text-xs font-medium flex items-center gap-1 ${positive ? 'text-teal-400' : 'text-slate-500'}`}>
        {positive ? (
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>
        ) : (
          <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 17h8m0 0v-8m0 8l-8-8-4 4-6-6" /></svg>
        )}
        {trend}
      </div>
    </div>
  );
}

function InsightRow({ title, desc, action, urgent, loading }: { title: string, desc: string, action: string, urgent?: boolean, loading?: boolean }) {
  return (
    <div className="group border border-white/5 bg-black/20 rounded-xl p-4 transition-all duration-300 hover:bg-black/40 hover:border-white/10">
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <h4 className="font-medium text-white mb-1 flex items-center gap-2">
            {urgent && <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>}
            {title}
          </h4>
          <p className="text-sm text-slate-400 leading-relaxed max-w-2xl">{desc}</p>
        </div>
        <button onClick={() => alert(`Executing AI Action: ${action}`)} className="shrink-0 px-4 py-2 text-xs font-medium rounded-lg bg-white/5 hover:bg-white/10 transition-colors border border-white/10 hover:border-white/20 flex items-center gap-2">
          {loading && <svg className="w-3 h-3 animate-spin text-slate-400 text-purple-400" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25"></circle><path fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" className="opacity-75"></path></svg>}
          {action}
        </button>
      </div>
    </div>
  );
}

function ActivityItem({ name, action, time, highlight }: { name: string, action: string, time: string, highlight?: boolean }) {
  return (
    <div className="flex gap-4 items-start relative before:absolute before:inset-0 before:ml-[11px] before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-800 before:to-transparent">
      <div className={`relative z-10 w-6 h-6 rounded-full flex items-center justify-center border  ${highlight ? 'bg-teal-500/20 border-teal-500/50 shadow-[0_0_10px_rgba(20,184,166,0.3)]' : 'bg-slate-800 border-slate-700'}`}>
        <div className={`w-2 h-2 rounded-full ${highlight ? 'bg-teal-400' : 'bg-slate-500'}`}></div>
      </div>
      <div className="flex-1 pb-1">
        <div className="flex justify-between items-baseline mb-0.5">
          <span className="font-medium text-sm text-slate-200">{name}</span>
          <span className="text-xs text-slate-500">{time}</span>
        </div>
        <p className={`text-sm ${highlight ? 'text-teal-400/90 font-medium' : 'text-slate-400'}`}>{action}</p>
      </div>
    </div>
  );
}
