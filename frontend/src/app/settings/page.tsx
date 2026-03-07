"use client";

import { useState } from 'react';

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState<'ai' | 'integrations' | 'team'>('ai');

  return (
    <div className="flex bg-slate-950 text-slate-200 min-h-screen font-sans selection:bg-blue-500/30">
      
      {/* Sidebar - Same as other pages but with Active state on Settings */}
      <aside className="w-64 border-r border-white/5 bg-slate-900/50 backdrop-blur-xl flex flex-col hidden md:flex sticky top-0 h-screen">
        <div className="p-6 border-b border-white/5 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
             <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
          </div>
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            SalesOps<span className="text-blue-400">AI</span>
          </h1>
        </div>
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <NavItem href="/" icon="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">Dashboard</NavItem>
          <NavItem href="/playbooks/new" icon="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2">Playbook Builder</NavItem>
          <NavItem href="/cadences" icon="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6">Live Cadences</NavItem>
          <NavItem href="/leads" icon="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">Lead Canvas</NavItem>
          <NavItem href="/settings" active icon="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">Settings</NavItem>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col max-h-screen overflow-y-auto">
        <header className="h-16 border-b border-white/5 px-8 flex items-center justify-between sticky top-0 bg-slate-950/80 backdrop-blur-md z-10">
          <h2 className="text-xl font-semibold text-white">Platform Settings</h2>
          <div className="flex gap-4">
             <button onClick={() => window.location.href='/playbooks/new'} className="px-4 py-2 bg-blue-600 hover:bg-blue-500 transition-colors text-white rounded-lg text-sm font-medium shadow-[0_0_15px_rgba(59,130,246,0.5)]">
               + New Context
             </button>
          </div>
        </header>

        <div className="p-8 max-w-5xl mx-auto w-full">
           {/* Settings Tabs */}
           <div className="flex space-x-1 bg-white/5 p-1 rounded-xl mb-8 w-fit">
              <button 
                onClick={() => setActiveTab('ai')}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'ai' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
              >
                 AI Engine Context
              </button>
              <button 
                onClick={() => setActiveTab('integrations')}
                className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all ${activeTab === 'integrations' ? 'bg-blue-600 text-white shadow-lg' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}
              >
                 Tool Integrations
              </button>
           </div>

           {/* Tab Content */}
           {activeTab === 'ai' && (
              <div className="space-y-6 animate-fade-in">
                 <div className="glass-card-premium p-6">
                    <h3 className="text-lg font-semibold text-white mb-2">Global Identity Profile</h3>
                    <p className="text-sm text-slate-400 mb-6">This context is injected into the prompt of all LLM Agents (Strategy, Qualification, Personalization) to align their output with your brand.</p>
                    
                    <div className="space-y-4">
                       <div>
                          <label className="block text-sm font-medium text-slate-300 mb-1">Company Value Proposition</label>
                          <textarea 
                             className="w-full h-24 bg-black/40 border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600"
                             defaultValue="We are an enterprise AI platform that helps RevOps teams automate outbound pipelines and close deals 3x faster without scaling SDR headcount."
                          />
                       </div>
                       
                       <div className="grid grid-cols-2 gap-4">
                          <div>
                             <label className="block text-sm font-medium text-slate-300 mb-1">Tone of Voice</label>
                             <select className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-all">
                                <option>Professional & Direct (Enterprise)</option>
                                <option>Conversational & Friendly</option>
                                <option>Provocative & Challenger Sale</option>
                             </select>
                          </div>
                          <div>
                             <label className="block text-sm font-medium text-slate-300 mb-1">Default Fallback Model</label>
                             <select className="w-full bg-black/40 border border-white/10 rounded-lg p-3 text-sm text-white focus:outline-none focus:border-blue-500 transition-all">
                                <option>Ollama: Llama-3-8B</option>
                                <option>OpenAI: GPT-4o-Mini</option>
                                <option>Anthropic: Claude-3-Haiku</option>
                             </select>
                          </div>
                       </div>
                    </div>
                    
                    <div className="mt-6 pt-6 border-t border-white/5 flex justify-end">
                       <button onClick={() => alert('AI Identity Profile saved successfully.')} className="px-5 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium transition-colors">
                          Save AI Context
                       </button>
                    </div>
                 </div>
              </div>
           )}

           {activeTab === 'integrations' && (
              <div className="space-y-6 animate-fade-in">
                 <div className="glass-card-premium p-6">
                    <div className="flex items-center justify-between mb-6">
                       <div>
                          <h3 className="text-lg font-semibold text-white">CRM Sync</h3>
                          <p className="text-sm text-slate-400">Connect your source of truth for Lead Qualification and Playbook triggering.</p>
                       </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                       <div className="p-4 rounded-xl border border-blue-500/30 bg-blue-500/5 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                             <div className="w-10 h-10 rounded bg-white flex items-center justify-center">
                                <span className="text-blue-600 font-bold text-xl">S</span>
                             </div>
                             <div>
                                <div className="font-medium text-white">Salesforce</div>
                                <div className="text-xs text-emerald-400">Connected (Syncing realtime)</div>
                             </div>
                          </div>
                          <button onClick={() => alert('Opening Salesforce mapping configuration...')} className="text-xs text-slate-400 hover:text-white px-3 py-1.5 rounded border border-white/10 hover:bg-white/5 transition-all">Configure</button>
                       </div>
                       
                       <div className="p-4 rounded-xl border border-white/10 bg-black/20 flex items-center justify-between grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all cursor-pointer">
                          <div className="flex items-center gap-3">
                             <div className="w-10 h-10 rounded bg-[#ff7a59] flex items-center justify-center">
                                <span className="text-white font-bold text-xl">H</span>
                             </div>
                             <div>
                                <div className="font-medium text-white">HubSpot</div>
                                <div className="text-xs text-slate-500">Not connected</div>
                             </div>
                          </div>
                          <button onClick={() => alert('Redirecting to HubSpot OAuth flow...')} className="text-xs text-white px-3 py-1.5 rounded bg-blue-600 hover:bg-blue-500 transition-all">Connect</button>
                       </div>
                    </div>
                 </div>

                 <div className="glass-card-premium p-6">
                    <div className="flex items-center justify-between mb-6">
                       <div>
                          <h3 className="text-lg font-semibold text-white">Sequencer Channels</h3>
                          <p className="text-sm text-slate-400">Enable outbound nodes for the Sequencer Agent to execute.</p>
                       </div>
                    </div>
                    
                    <div className="space-y-3">
                       <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border border-white/5">
                          <div className="flex items-center gap-3">
                             <svg className="w-6 h-6 text-slate-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                             <span className="text-slate-200 font-medium">SendGrid (SMTP)</span>
                          </div>
                          <div className="w-11 h-6 bg-blue-500 rounded-full relative cursor-pointer">
                             <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white"></div>
                          </div>
                       </div>
                       
                       <div className="flex items-center justify-between p-4 bg-black/40 rounded-lg border border-white/5">
                          <div className="flex items-center gap-3">
                             <div className="w-6 h-6 rounded bg-[#0077b5] flex items-center justify-center text-white font-bold text-xs">in</div>
                             <span className="text-slate-200 font-medium">LinkedIn Automation Hub</span>
                          </div>
                          <div className="w-11 h-6 bg-blue-500 rounded-full relative cursor-pointer">
                             <div className="absolute right-1 top-1 w-4 h-4 rounded-full bg-white"></div>
                          </div>
                       </div>
                    </div>
                 </div>
              </div>
           )}
        </div>
      </main>
    </div>
  );
}

function NavItem({ active, icon, href, children }: { active?: boolean, icon: string, href: string, children: React.ReactNode }) {
  return (
    <a href={href} className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 ${active ? 'bg-white/10 text-white font-medium shadow-[0_0_15px_rgba(255,255,255,0.05)]' : 'text-slate-400 hover:text-white hover:bg-white/5'}`}>
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={icon} /></svg>
      {children}
    </a>
  );
}
