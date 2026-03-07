'use client';

import React, { useState } from 'react';

const mockLeads = [
  { id: 1, name: 'Alex Sterling', company: 'NovaTech', role: 'VP of Revenue', score: 92, status: 'Hot', activeCadence: 'Enterprise Q1' },
  { id: 2, name: 'Jordan Lee', company: 'BuildOps', role: 'Director of RevOps', score: 78, status: 'Nurture', activeCadence: 'Cold Drip' },
  { id: 3, name: 'Samira Patel', company: 'DataStream', role: 'Chief Revenue Officer', score: 85, status: 'Active', activeCadence: 'Enterprise Q1' },
];

export default function LeadCanvas() {
  const [activeLeadId, setActiveLeadId] = useState(1);
  const activeLead = mockLeads.find(l => l.id === activeLeadId) || mockLeads[0];

  return (
    <div className="flex h-screen w-full overflow-hidden text-slate-200">
      
      {/* Sidebar Navigation */}
      <aside className="w-64 border-r border-white/5 bg-slate-900/50 backdrop-blur-xl flex flex-col h-full shrink-0 hidden md:flex sticky top-0">
        <div className="p-6 border-b border-white/5 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-teal-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
             <svg className="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>
          </div>
          <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
            SalesOps<span className="text-blue-400">AI</span>
          </h1>
        </div>
        <nav className="flex-1 px-4 space-y-2 mt-4">
          <NavItem href="/" icon="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6">Dashboard</NavItem>
          <NavItem href="/playbooks/new" icon="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2">Playbook Builder</NavItem>
          <NavItem href="/cadences" icon="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6">Live Cadences</NavItem>
          <NavItem href="/leads" active icon="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">Lead Canvas</NavItem>
          <NavItem href="/settings" icon="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">Settings</NavItem>
        </nav>
      </aside>

      {/* Main Content (Split Pane) */}
      <main className="flex-1 overflow-hidden flex h-full">
        
        {/* Left List */}
        <div className="w-[350px] shrink-0 border-r border-white/5 flex flex-col bg-black/20">
           <div className="p-6 pb-4 shrink-0">
             <h2 className="text-xl font-bold tracking-tight mb-4">Pipeline Explorer</h2>
             <div className="relative">
                <input type="text" placeholder="Search leads by name, company..." className="w-full bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:border-blue-500 transition-colors" />
                <svg className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
             </div>
           </div>
           
           <div className="flex-1 overflow-y-auto px-4 pb-4 space-y-2">
              {mockLeads.map(lead => (
                 <div 
                   key={lead.id} 
                   onClick={() => setActiveLeadId(lead.id)}
                   className={`p-4 rounded-xl cursor-pointer transition-all border ${activeLeadId === lead.id ? 'bg-blue-500/10 border-blue-500/30 shadow-[0_0_15px_rgba(59,130,246,0.1)]' : 'bg-white/5 border-transparent hover:bg-white/10 hover:border-white/10'}`}
                 >
                    <div className="flex justify-between items-start mb-1">
                       <h3 className={`font-semibold ${activeLeadId === lead.id ? 'text-blue-400' : 'text-white'}`}>{lead.name}</h3>
                       <span className={`text-xs px-2 py-0.5 rounded-full ${lead.score > 90 ? 'bg-emerald-500/20 text-emerald-400' : 'bg-blue-500/20 text-blue-400'}`}>
                          {lead.score}
                       </span>
                    </div>
                    <p className="text-sm text-slate-400 mb-2">{lead.role} at {lead.company}</p>
                    <div className="flex gap-2 text-xs">
                       <span className="px-2 py-1 bg-white/5 rounded text-slate-300 border border-white/5">{lead.status}</span>
                    </div>
                 </div>
              ))}
           </div>
        </div>

        {/* Right Canvas */}
        <div className="flex-1 overflow-y-auto p-10 bg-[#020617]/50">
           
           <div className="max-w-4xl mx-auto">
              {/* Header Info */}
              <div className="flex justify-between items-start mb-8">
                 <div className="flex gap-6 items-center">
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-blue-500 to-teal-400 flex items-center justify-center text-3xl font-bold shadow-lg shadow-blue-500/20 text-white">
                       {activeLead.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                       <h2 className="text-3xl font-bold text-white mb-1.5">{activeLead.name}</h2>
                       <p className="text-lg text-slate-400">{activeLead.role} <span className="text-slate-500 mx-2">|</span> <span className="text-blue-400 cursor-pointer">{activeLead.company}</span></p>
                    </div>
                 </div>
                 <div className="flex gap-3">
                    <button onClick={() => alert(`Opening CRM Profile for ${activeLead.name}`)} className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm transition-colors flex items-center gap-2 text-white">
                       <svg className="w-4 h-4 text-sky-400" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                       View Profile
                    </button>
                    <button onClick={() => alert(`Starting direct message sequence to ${activeLead.name}`)} className="px-4 py-2 bg-emerald-500 border border-emerald-400 hover:bg-emerald-400 rounded-lg text-sm transition-colors flex items-center gap-2 text-black font-semibold shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                       <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>
                       Message
                    </button>
                 </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                 
                 {/* Left Column: AI Suggestions & Score */}
                 <div className="lg:col-span-2 space-y-6">
                    
                    {/* Qualification Panel */}
                    <div className="glass-card p-6 border-emerald-500/20 bg-emerald-500/5 relative overflow-hidden">
                       <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                       <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                          <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/></svg>
                          Qualification Agent Output
                       </h3>
                       <div className="flex gap-4">
                          <div className="flex flex-col items-center justify-center p-4 bg-black/40 rounded-xl border border-white/5 shrink-0 w-32">
                             <div className="text-4xl font-bold text-emerald-400 mb-1">{activeLead.score}</div>
                             <div className="text-xs text-slate-400">Score / 100</div>
                          </div>
                          <div>
                             <p className="text-sm text-slate-300 leading-relaxed max-w-lg mb-3">
                                {activeLead.company} recently raised a Series C and they are hiring for 4 RevOps positions. High intent signals detected across LinkedIn interaction and website visits.
                             </p>
                             <div className="flex flex-wrap gap-2">
                                <span className="text-xs px-2 py-1 bg-white/10 rounded-full border border-white/10">Funding Event</span>
                                <span className="text-xs px-2 py-1 bg-white/10 rounded-full border border-white/10">Hiring Spree</span>
                                <span className="text-xs px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full border border-blue-500/20">Technology Stack Validated</span>
                             </div>
                          </div>
                       </div>
                    </div>

                    {/* AI Next Actions Panel */}
                    <div className="glass-card p-6 border-purple-500/20">
                       <h3 className="text-lg font-semibold flex items-center gap-2 mb-6 text-white">
                          <svg className="w-5 h-5 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/></svg>
                          AI Suggested Next Actions
                       </h3>
                       
                       <div className="space-y-4">
                          <div className="bg-black/40 border border-white/5 rounded-xl p-4 flex gap-4">
                             <div className="w-10 h-10 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center shrink-0">
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                             </div>
                             <div>
                                <h4 className="font-medium mb-1">Send Hyper-Personalized Email</h4>
                                <p className="text-sm text-slate-400 mb-3">Personalization Agent generated a draft responding to their recent blog post on revenue leakage.</p>
                                 <div className="bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-slate-300 italic mb-4">
                                    &quot;Hi {activeLead.name.split(' ')[0]}, enjoyed your recent post on eliminating revenue leakage. Curious how your team scales RevOps while...&quot;
                                 </div>
                                <div className="flex gap-2">
                                   <button className="px-3 py-1.5 bg-blue-500 hover:bg-blue-600 text-white rounded text-xs font-medium transition-colors">Send Email</button>
                                   <button className="px-3 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded text-xs transition-colors">Edit Draft</button>
                                </div>
                             </div>
                          </div>
                       </div>
                    </div>
                 </div>

                 {/* Right Column: Sequence & Info */}
                 <div className="space-y-6">
                    <div className="glass-card p-6">
                       <h3 className="font-medium text-white mb-4">Current Sequence</h3>
                       <div className="mb-4">
                          <div className="text-sm font-semibold">{activeLead.activeCadence}</div>
                          <div className="text-xs text-blue-400 flex justify-between mt-1">
                             <span>Step 2 of 5</span>
                             <span>Day 4</span>
                          </div>
                          <div className="h-1.5 bg-black/50 rounded-full mt-2 overflow-hidden">
                             <div className="h-full bg-blue-500" style={{ width: '40%' }}></div>
                          </div>
                       </div>
                       
                       <div className="relative pl-4 space-y-4 border-l-2 border-white/10 ml-2">
                          <div className="relative">
                             <div className="absolute -left-[23px] top-1 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_rgba(59,130,246,0.8)] border-2 border-[#1a1f2e]"></div>
                             <div className="text-sm font-medium text-white">Email Sent</div>
                             <div className="text-xs text-slate-400">Opened 2x • Yesterday</div>
                          </div>
                          <div className="relative">
                             <div className="absolute -left-[23px] top-1 w-3 h-3 bg-black border-2 border-blue-500 rounded-full"></div>
                             <div className="text-sm font-medium text-white">Wait 2 Days</div>
                             <div className="text-xs text-blue-400">Processing...</div>
                          </div>
                          <div className="relative">
                             <div className="absolute -left-[23px] top-1 w-3 h-3 bg-black border-2 border-white/20 rounded-full"></div>
                             <div className="text-sm text-slate-500">LinkedIn Connect</div>
                             <div className="text-xs text-slate-600">Scheduled for Tomorrow</div>
                          </div>
                       </div>
                    </div>
                 </div>
                 
              </div>
           </div>
           
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
