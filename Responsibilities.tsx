
import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Server, ShieldCheck, Key, Lock, Globe, Database, User } from 'lucide-react';

export const Responsibilities: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-900/20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Security Boundaries</h2>
          <p className="text-zinc-400">Clear separation of concerns ensures your tokens stay locked up.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-zinc-800 rounded-3xl overflow-hidden border border-zinc-800">
          {/* Client Side */}
          <div className="p-12 bg-zinc-950 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-zinc-900 rounded-2xl border border-zinc-800 flex items-center justify-center mb-6 text-zinc-500">
              <Monitor size={32} />
            </div>
            <h3 className="text-xl font-bold mb-6 tracking-wide text-zinc-400">CLIENT RESPONSIBILITY</h3>
            <div className="space-y-6 w-full text-left">
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-900 transition-colors">
                <div className="mt-1 text-emerald-500 bg-emerald-500/10 p-1.5 rounded-lg"><User size={16} /></div>
                <div>
                  <h4 className="font-bold text-zinc-200">State & Intent</h4>
                  <p className="text-sm text-zinc-500">Decide what data is needed and when to mutate.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-900 transition-colors">
                <div className="mt-1 text-emerald-500 bg-emerald-500/10 p-1.5 rounded-lg"><Monitor size={16} /></div>
                <div>
                  <h4 className="font-bold text-zinc-200">useAutoQuery</h4>
                  <p className="text-sm text-zinc-500">Type-safe hook for fetching via the secure proxy.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-red-500/5 border border-red-500/20">
                <div className="mt-1 text-red-500"><Lock size={16} /></div>
                <div>
                  <h4 className="font-bold text-red-400">Zero Tokens</h4>
                  <p className="text-sm text-red-400/60">Secrets are NEVER exposed to the client bundle.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Server Side */}
          <div className="p-12 bg-zinc-950 flex flex-col items-center text-center">
            <div className="w-16 h-16 bg-emerald-950/30 rounded-2xl border border-emerald-500/30 flex items-center justify-center mb-6 text-emerald-500">
              <Server size={32} />
            </div>
            <h3 className="text-xl font-bold mb-6 tracking-wide text-emerald-500">SERVER RESPONSIBILITY</h3>
            <div className="space-y-6 w-full text-left">
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-emerald-500/5 transition-colors">
                <div className="mt-1 text-cyan-500 bg-cyan-500/10 p-1.5 rounded-lg"><Key size={16} /></div>
                <div>
                  <h4 className="font-bold text-zinc-200">Secrets & Auth</h4>
                  <p className="text-sm text-zinc-500">Securely pull tokens from ENV or DB.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-emerald-500/5 transition-colors">
                <div className="mt-1 text-cyan-500 bg-cyan-500/10 p-1.5 rounded-lg"><Globe size={16} /></div>
                <div>
                  <h4 className="font-bold text-zinc-200">API Interceptors</h4>
                  <p className="text-sm text-zinc-500">Unified logic for headers and error handling.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20">
                <div className="mt-1 text-emerald-500"><ShieldCheck size={16} /></div>
                <div>
                  <h4 className="font-bold text-emerald-400">The Ultimate Shield</h4>
                  <p className="text-sm text-emerald-400/60">Requests are authorized before hitting backend.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
