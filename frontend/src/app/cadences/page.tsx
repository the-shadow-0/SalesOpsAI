'use client';

import React from 'react';

export default function CadencesMonitor() {
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
          <NavItem href="/cadences" active icon="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6">Live Cadences</NavItem>
          <NavItem href="/leads" icon="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z">Lead Canvas</NavItem>
          <NavItem href="/settings" icon="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z">Settings</NavItem>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto p-6 md:p-10 flex flex-col h-full bg-[#030712]/50">
        <header className="flex justify-between items-center mb-10 shrink-0">
          <div>
            <div className="text-sm text-blue-400 font-medium mb-1">Sequencer Agent</div>
            <h2 className="text-3xl font-bold tracking-tight mb-1 hidden md:block">Live Cadence Monitor</h2>
            <p className="text-slate-400">Real-time execution status and engagement metrics.</p>
          </div>
          <div className="flex gap-3">
             <div className="px-4 py-2 border border-white/10 bg-black/40 rounded-lg text-sm flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.8)] animate-pulse"></span>
                Event Bus Connect: Healthy
             </div>
          </div>
        </header>

        {/* Global Pipeline Visualization */}
        <div className="glass-card p-6 mb-8 w-full border-blue-500/20 shadow-[0_0_30px_rgba(59,130,246,0.05)]">
           <div className="flex justify-between text-sm mb-4">
              <div className="font-semibold text-white">Pipeline Flow</div>
              <div className="text-slate-400">Last 24 Hours</div>
           </div>
           <div className="flex items-center justify-between gap-4 h-24 text-center text-sm font-medium">
              <div className="flex-1 bg-black/40 rounded-xl h-full flex flex-col justify-center items-center border border-white/5 relative overflow-hidden group">
                 <div className="absolute inset-0 bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors"></div>
                 <span className="text-3xl text-white mb-1">1,402</span>
                 <span className="text-slate-400">Enriched</span>
              </div>
              <svg className="w-6 h-6 text-slate-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              <div className="flex-1 bg-black/40 rounded-xl h-full flex flex-col justify-center items-center border border-white/5 relative overflow-hidden group">
                 <div className="absolute inset-0 bg-sky-500/10 group-hover:bg-sky-500/20 transition-colors"></div>
                 <span className="text-3xl text-white mb-1">840</span>
                 <span className="text-slate-400">Qualified</span>
              </div>
              <svg className="w-6 h-6 text-slate-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              <div className="flex-[1.5] bg-black/40 rounded-xl h-full flex flex-col justify-center items-center border border-purple-500/20 relative overflow-hidden group shadow-[0_0_15px_rgba(168,85,247,0.1)]">
                 <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500"></div>
                 <div className="absolute inset-0 bg-purple-500/10 group-hover:bg-purple-500/20 transition-colors"></div>
                 <span className="text-3xl text-white mb-1 tracking-tight">2.4k</span>
                 <span className="text-purple-300">Active in Sequence</span>
              </div>
              <svg className="w-6 h-6 text-slate-600 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              <div className="flex-1 bg-black/40 rounded-xl h-full flex flex-col justify-center items-center border border-white/5 relative overflow-hidden group">
                 <div className="absolute inset-0 bg-emerald-500/10 group-hover:bg-emerald-500/20 transition-colors"></div>
                 <span className="text-3xl text-white mb-1 text-emerald-400">42</span>
                 <span className="text-slate-400">Meetings</span>
              </div>
           </div>
        </div>

        {/* Active Cadences List */}
        <h3 className="text-xl font-semibold mb-4 text-white">Active Runs</h3>
        <div className="space-y-4">
          <CadenceRow 
             name="Enterprise Outbound Q3" 
             audience="VP Sales Setup" 
             progress={65} 
             activeLeads="450" 
             bounced="12" 
             replied="34" 
             status="running" 
          />
          <CadenceRow 
             name="Product Launch Upsell" 
             audience="Existing Tier 1" 
             progress={30} 
             activeLeads="1.2k" 
             bounced="4" 
             replied="18" 
             status="running" 
          />
          <CadenceRow 
             name="Cold Nurture Drip" 
             audience="Disqualified earlier" 
             progress={100} 
             activeLeads="750" 
             bounced="89" 
             replied="5" 
             status="completed" 
          />
        </div>

      </main>
    </div>
  );
}

function CadenceRow({ name, audience, progress, activeLeads, bounced, replied, status }: { name: string, audience: string, progress: number, activeLeads: string, bounced: string, replied: string, status: 'running' | 'completed' }) {
  return (
    <div className="glass-card hover:bg-white/5 transition-colors p-5 flex items-center gap-6">
       
       <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-blue-500/20 border border-blue-500/30">
          {status === 'running' ? (
            <svg className="w-6 h-6 text-blue-400 animate-spin-slow" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zM12 6v6l4 2"/></svg>
          ) : (
            <svg className="w-6 h-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/></svg>
          )}
       </div>

       <div className="flex-1">
         <h4 className="font-semibold text-lg text-white">{name}</h4>
         <p className="text-sm text-slate-400">Target: {audience}</p>
       </div>

       <div className="w-48 shrink-0">
          <div className="flex justify-between text-xs mb-1.5 font-medium">
             <span className="text-slate-300">Progress</span>
             <span className="text-blue-400">{progress}%</span>
          </div>
          <div className="h-2 bg-black/50 rounded-full overflow-hidden border border-white/5">
            <div className={`h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full`} style={{ width: `${progress}%` }}></div>
          </div>
       </div>

       <div className="flex gap-6 shrink-0 text-center px-4 w-64 border-l border-white/10">
          <div>
            <div className="text-lg font-semibold text-white">{activeLeads}</div>
            <div className="text-xs text-slate-500">Active</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-red-400">{bounced}</div>
            <div className="text-xs text-slate-500">Bounced</div>
          </div>
          <div>
            <div className="text-lg font-semibold text-emerald-400">{replied}</div>
            <div className="text-xs text-slate-500">Replied</div>
          </div>
       </div>

       <div className="shrink-0">
         <button onClick={() => alert(`Settings opened for ${name}`)} className="p-2 hover:bg-white/10 rounded-lg text-slate-400 transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"/></svg>
         </button>
       </div>

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
