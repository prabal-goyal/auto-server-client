
import React from 'react';
import { motion } from 'framer-motion';
import { Smile, Shield, Database } from 'lucide-react';

export const Blueprint: React.FC = () => {
  return (
    <section className="space-y-10">
      <div className="space-y-4">
        <h2 className="text-zinc-950 text-xs font-black tracking-[0.3em] uppercase">The Simple Model</h2>
        <p className="text-zinc-500 text-base leading-relaxed">A one-way street from your components to your backend, guarded by a smart proxy.</p>
      </div>

      <div className="relative p-12 bg-zinc-50 border-2 border-zinc-200 rounded-3xl flex flex-col items-center gap-16 overflow-hidden">
        {/* Decorative background grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

        <div className="flex flex-col sm:flex-row gap-16 sm:gap-24 items-center justify-center w-full relative z-10">
           <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-2xl border-2 border-zinc-900 flex items-center justify-center bg-white shadow-[4px_4px_0px_0px_rgba(24,24,27,1)]">
                 <Smile size={28} className="text-zinc-900" />
              </div>
              <div className="text-center">
                <span className="block text-[10px] font-black uppercase text-zinc-900">Browser</span>
                <span className="text-[9px] font-bold text-zinc-400 italic">Intent Only</span>
              </div>
           </div>

           <div className="flex flex-col items-center gap-4 group">
              <div className="w-24 h-16 rounded-2xl border-2 border-indigo-600 flex flex-col items-center justify-center bg-white shadow-[4px_4px_0px_0px_rgba(79,70,229,1)] relative transition-transform group-hover:scale-105">
                 <Shield size={24} className="text-indigo-600" />
                 <motion.div 
                   animate={{ opacity: [1, 0, 1] }}
                   transition={{ repeat: Infinity, duration: 1.5 }}
                   className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-emerald-500 border border-white" 
                 />
              </div>
              <div className="text-center">
                <span className="block text-[10px] font-black uppercase text-indigo-600">Proxy Handler</span>
                <span className="text-[9px] font-bold text-indigo-400 italic">Adds Authority</span>
              </div>
           </div>

           <div className="flex flex-col items-center gap-4">
              <div className="w-16 h-16 rounded-2xl border-2 border-zinc-900 flex items-center justify-center bg-white shadow-[4px_4px_0px_0px_rgba(24,24,27,1)]">
                 <Database size={28} className="text-zinc-900" />
              </div>
              <div className="text-center">
                <span className="block text-[10px] font-black uppercase text-zinc-900">Backend</span>
                <span className="text-[9px] font-bold text-zinc-400 italic">Protected</span>
              </div>
           </div>
        </div>

        <div className="max-w-md text-center bg-white p-4 rounded-xl border border-zinc-200 shadow-sm relative z-10">
          <p className="text-[12px] text-zinc-500 leading-relaxed font-medium">
            The client component sends a request. The <span className="text-indigo-600 font-bold">Proxy</span> intercepts it, injects the <span className="text-zinc-900 font-bold">Secret Tokens</span> stored on the server, and forwards it to the API. 
          </p>
        </div>
      </div>
    </section>
  );
};
