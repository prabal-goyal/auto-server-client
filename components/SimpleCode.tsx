
import React from 'react';
import { motion } from 'framer-motion';

export const SimpleCode: React.FC = () => {
  return (
    <section className="space-y-12">
      <div className="space-y-4">
        <h2 className="text-zinc-950 text-xs font-black tracking-[0.3em] uppercase">The Implementation</h2>
        <p className="text-zinc-500 text-lg leading-relaxed max-w-xl font-medium">
          Whether you're in a Client Component or a Server Component, the syntax is identical. No more guesswork.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 relative">
        {/* Hand-drawn underline decorator */}
        <div className="absolute -top-4 -left-4 w-12 h-12 text-indigo-200 opacity-50">
          <svg viewBox="0 0 100 100" className="fill-current">
            <path d="M10,90 Q50,10 90,90" fill="none" stroke="currentColor" strokeWidth="5" />
          </svg>
        </div>

        <motion.div 
          whileHover={{ y: -4, rotate: -0.5 }}
          className="relative p-10 bg-white rounded-3xl border-2 border-zinc-900 shadow-[8px_8px_0px_0px_rgba(24,24,27,1)]"
        >
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-indigo-500" />
              <span className="text-[11px] font-black uppercase text-zinc-950 tracking-widest">On the Client</span>
            </div>
            <span className="text-[10px] font-bold text-zinc-400 italic">type-safe & reactive</span>
          </div>
          <div className="bg-zinc-50 p-6 rounded-2xl border-2 border-zinc-100">
            <pre className="text-xs sm:text-base font-mono text-zinc-800 overflow-x-auto whitespace-pre leading-relaxed">
              <span className="text-indigo-600">const</span> {`{ data, loading }`} = <span className="text-indigo-600">useAutoQuery</span>(<span className="text-amber-600">"/v1/profile"</span>)
            </pre>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -4, rotate: 0.5 }}
          className="relative p-10 bg-indigo-600 rounded-3xl border-2 border-zinc-900 shadow-[8px_8px_0px_0px_rgba(24,24,27,1)] group"
        >
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-white group-hover:animate-ping" />
              <span className="text-[11px] font-black uppercase text-white tracking-widest">On the Server</span>
            </div>
            <span className="text-[10px] font-bold text-indigo-200 italic">SSR & Server Components</span>
          </div>
          <div className="bg-indigo-950 p-6 rounded-2xl border-2 border-indigo-500/30">
            <pre className="text-xs sm:text-base font-mono text-indigo-100 overflow-x-auto whitespace-pre leading-relaxed">
              <span className="text-pink-400">const</span> data = <span className="text-emerald-400">await serverQuery</span>(<span className="text-amber-400">"/v1/profile"</span>)
            </pre>
          </div>
        </motion.div>
      </div>

      <div className="pt-8 text-center">
        <p className="text-xs font-black text-zinc-400 uppercase tracking-widest">
          The exact same API. The exact same types. <span className="text-zinc-900 underline decoration-yellow-400 decoration-2">Zero friction.</span>
        </p>
      </div>
    </section>
  );
};
