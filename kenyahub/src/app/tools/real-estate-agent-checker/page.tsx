"use client";

import { useState } from "react";
import ToolShell from "@/components/tools/ToolShell";
import { TOOLS } from "@/lib/tools-registry";
import agentData from "@/data/real-estate-agents.json";

const tool = TOOLS.find((t) => t.slug === "real-estate-agent-checker")!;

const faq = [
  { question: "Why must a real estate agent be registered?", answer: "Under the Estate Agents Act (Cap 533), it is illegal to practice as an estate agent in Kenya without being registered with the Estate Agents Registration Board (EARB). Registration ensures the agent is qualified and holds a fidelity guarantee bond to protect clients from fraud." },
  { question: "What is the Estate Agents Registration Board (EARB)?", answer: "EARB is the regulatory body established by law to register estate agents, regulate their practice, and protect the public from unscrupulous agents in Kenya." },
  { question: "How do I check if an agent is registered?", answer: "Ask for their EARB registration certificate and verify their name or registration number on the official EARB website register (earb.go.ke). The certificate must be valid for the current year." },
  { question: "What happens if I use an unregistered agent?", answer: "If you use an unregistered agent, you have no legal recourse through EARB if you are defrauded. Unregistered agents are also not bound by professional ethics or required to hold insurance bonds to protect client money." },
];

export default function RealEstateAgentCheckerPage() {
  const [search, setSearch] = useState("");

  const sampleFiltered = search.trim()
    ? agentData.sampleAgents.filter((a) => a.name.toLowerCase().includes(search.toLowerCase()) || a.county.toLowerCase().includes(search.toLowerCase()))
    : agentData.sampleAgents;

  return (
    <ToolShell tool={tool} faq={faq}>
      <div className="space-y-6">
        {/* Warning Banner */}
        <div className="bg-kenya-red/10 border border-kenya-red/20 rounded-xl p-5 flex gap-4">
          <span className="text-2xl mt-0.5">⚠️</span>
          <div>
            <h3 className="text-sm font-bold text-kenya-red-light mb-1">Warning: Real Estate Fraud is Common</h3>
            <p className="text-xs text-text-secondary leading-relaxed">Never pay money (viewing fees, deposits) to an agent you haven't verified. Always insist on seeing an official EARB registration certificate before engaging their services.</p>
          </div>
        </div>

        {/* Verification Steps */}
        <div className="bg-bg-card border border-border rounded-xl p-6">
          <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-5">{agentData.verificationGuide.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {agentData.verificationGuide.steps.map((step) => (
              <div key={step.step} className="bg-bg-elevated rounded-lg p-5 border border-border/50">
                <div className="w-8 h-8 rounded-full bg-gold/20 text-gold flex items-center justify-center font-bold mb-3">{step.step}</div>
                <h3 className="text-sm font-semibold text-text-primary mb-2">{step.title}</h3>
                <p className="text-xs text-text-secondary leading-relaxed mb-3">{step.description}</p>
                {step.link && (
                  <a href={step.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-semibold text-gold hover:underline">
                    Visit Website <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Red Flags */}
        <div className="bg-bg-card border border-border rounded-xl p-6">
          <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary mb-4">🚩 Red Flags to Watch Out For</h2>
          <div className="space-y-3">
            {agentData.redFlags.map((flag, i) => (
              <div key={i} className="flex gap-3 items-start border-b border-border/50 pb-3 last:border-0 last:pb-0">
                <span className="text-kenya-red-light font-bold mt-0.5">✗</span>
                <div>
                  <p className="text-sm font-medium text-text-primary">{flag.flag}</p>
                  <p className="text-xs text-text-muted mt-0.5">{flag.risk}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sample Agents */}
        <div className="bg-bg-card border border-border rounded-xl p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
            <h2 className="text-lg font-bold font-[family-name:var(--font-outfit)] text-text-primary">Sample Verified Agents</h2>
            <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search sample agents..." className="input-field text-sm sm:max-w-xs" />
          </div>
          <p className="text-xs text-text-muted mb-4">Note: This is a small sample list. Thousands of agents are registered. Always verify directly on earb.go.ke.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {sampleFiltered.map((agent, i) => (
              <div key={i} className="bg-bg-elevated border border-border/50 rounded-lg p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-sm font-semibold text-text-primary leading-tight">{agent.name}</h3>
                  <span className="bg-kenya-green/10 text-kenya-green-light text-[0.6rem] px-1.5 py-0.5 rounded font-bold uppercase">Verified</span>
                </div>
                <div className="space-y-1">
                  <p className="text-xs text-text-secondary"><span className="text-text-muted">Type:</span> {agent.type}</p>
                  <p className="text-xs text-text-secondary"><span className="text-text-muted">County:</span> {agent.county}</p>
                  <p className="text-xs text-text-secondary"><span className="text-text-muted">Specialty:</span> {agent.specialization}</p>
                </div>
              </div>
            ))}
          </div>
          {sampleFiltered.length === 0 && <p className="text-center text-sm text-text-muted py-6">No sample agents found matching your search.</p>}
        </div>

        {/* EARB Contact */}
        <div className="bg-bg-card border border-border rounded-xl p-5">
          <h3 className="text-sm font-semibold text-text-primary mb-3 font-[family-name:var(--font-outfit)]">EARB Contact Information</h3>
          <div className="space-y-2 text-xs text-text-secondary">
            <p>🏢 {agentData.earbInfo.address}</p>
            <p>📞 {agentData.earbInfo.phone}</p>
            <p>📧 {agentData.earbInfo.email}</p>
            <p>🌐 <a href={agentData.earbInfo.website} target="_blank" rel="noopener noreferrer" className="text-gold hover:underline">{agentData.earbInfo.website}</a></p>
          </div>
        </div>
      </div>
    </ToolShell>
  );
}
