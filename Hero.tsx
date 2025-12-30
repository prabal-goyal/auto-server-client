
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Monitor, Server, Database, Key, X, ChevronRight, Lock } from 'lucide-react';

export const Hero: React.FC = () => {
  const [packetStatus, setPacketStatus] = useState<'idle' | 'flowing' | 'blocked'>('idle');
  const timeoutRef = useRef<number | null>(null);

  const clearExistingTimeout = () => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };

  useEffect(() => {
    return () => clearExistingTimeout();
  }, []);

  const startFlow = () => {
    clearExistingTimeout();
    setPacketStatus('flowing');
    timeoutRef.current = window.setTimeout(() => {
      setPacketStatus('idle');
    }, 4000);
  };

  const tryHack = () => {
    clearExistingTimeout();
    setPacketStatus('blocked');
    timeoutRef.current = window.setTimeout(() => {
      setPacketStatus('idle');
    }, 3000);
  };

  return (
    <section className="relative pt-32 pb-20 px-4 max-w-7xl mx-auto flex flex-col items-center text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="inline-block py-1 px-3 mb-6 rounded-full bg-emerald-500/10 text-emerald-500 text-xs font-bold tracking-wider border border-emerald-500/20 uppercase">
          New approach to Next.js API calls
        </span>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
          One Server Client.<br />
          <span className="bg-gradient-to-r from-emerald-400 to-cyan-500 bg-clip-text text-transparent">
            Zero Boilerplate.
          </span>
        </h1>
        <p className="text-zinc-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
          The ultimate request proxy for Next.js App Router. Secure your secrets on the server while calling them like they're local.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button 
            onClick={startFlow}
            className="group flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-8 rounded-xl transition-all shadow-lg shadow-emerald-600/20"
          >
            Get Started <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </button>
          <a 
            href="#architecture"
            className="flex items-center justify-center gap-2 bg-zinc-900 hover:bg-zinc-800 text-zinc-100 font-bold py-3 px-8 rounded-xl border border-zinc-800 transition-all"
          >
            View Architecture
          </a>
        </div>
      </motion.div>

      {/* Hero Visualizer */}
      <div className="relative w-full max-w-4xl bg-zinc-900/50 rounded-3xl border border-zinc-800 p-8 sm:p-12 overflow-hidden shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-cyan-500 opacity-50" />
        
        <div className="flex items-center justify-between relative z-10">
          {/* Client Box */}
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 bg-zinc-800 rounded-2xl border border-zinc-700 relative">
              <Monitor className="w-8 h-8 sm:w-12 sm:h-12 text-zinc-400" />
              <button 
                onClick={tryHack}
                className="absolute -top-3 -right-3 p-1.5 bg-red-500/20 border border-red-500/50 rounded-lg text-red-500 hover:bg-red-500 transition-colors shadow-lg"
                title="Try accessing tokens directly"
              >
                <Lock size={12} />
              </button>
            </div>
            <span className="text-sm font-semibold text-zinc-500 uppercase tracking-widest">Browser</span>
          </div>

          {/* Connection Lines */}
          <div className="flex-1 flex justify-center relative px-2">
             <div className="h-0.5 w-full bg-zinc-800 absolute top-1/2 -translate-y-1/2" />
             
             {/* Animating Packets */}
             <AnimatePresence>
               {packetStatus === 'flowing' && (
                 <motion.div
                   key="flow-1"
                   initial={{ left: '0%' }}
                   animate={{ left: '100%' }}
                   transition={{ duration: 2, ease: "easeInOut" }}
                   className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-emerald-500 rounded-full blur-[4px] z-20 shadow-[0_0_15px_#10b981]"
                 />
               )}
               {packetStatus === 'blocked' && (
                 <motion.div
                   key="block-1"
                   initial={{ left: '0%', opacity: 1, scale: 1 }}
                   animate={{ left: '30%', opacity: 0, scale: 2 }}
                   transition={{ duration: 0.5 }}
                   className="absolute top-1/2 -translate-y-1/2 flex items-center justify-center"
                 >
                   <X className="text-red-500 w-8 h-8" />
                 </motion.div>
               )}
             </AnimatePresence>
          </div>

          {/* Server Box */}
          <div className="flex flex-col items-center gap-4">
             <div className="p-4 bg-emerald-950/30 rounded-2xl border border-emerald-500/30 relative">
               <Server className="w-8 h-8 sm:w-12 sm:h-12 text-emerald-500" />
               <motion.div 
                 animate={{ opacity: [0.4, 1, 0.4] }}
                 transition={{ repeat: Infinity, duration: 2 }}
                 className="absolute -top-3 -right-3 p-1.5 bg-zinc-900 border border-emerald-500/50 rounded-lg text-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.3)]"
               >
                 <Key size={12} />
               </motion.div>
             </div>
             <span className="text-sm font-semibold text-emerald-500 uppercase tracking-widest">Server</span>
          </div>

          {/* Connection Line 2 */}
          <div className="flex-1 flex justify-center relative px-2">
             <div className="h-0.5 w-full bg-zinc-800 absolute top-1/2 -translate-y-1/2" />
             {packetStatus === 'flowing' && (
                <motion.div
                  key="flow-2"
                  initial={{ left: '0%' }}
                  animate={{ left: '100%' }}
                  transition={{ delay: 2, duration: 1.5, ease: "easeInOut" }}
                  className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-cyan-400 rounded-full blur-[4px] z-20 shadow-[0_0_15px_#22d3ee]"
                />
             )}
          </div>

          {/* Backend Box */}
          <div className="flex flex-col items-center gap-4">
             <div className="p-4 bg-zinc-800 rounded-2xl border border-zinc-700">
               <Database className="w-8 h-8 sm:w-12 sm:h-12 text-zinc-400" />
             </div>
             <span className="text-sm font-semibold text-zinc-500 uppercase tracking-widest">Backend</span>
          </div>
        </div>

        {/* Labels Overlay */}
        <div className="mt-12 flex justify-between text-xs font-mono text-zinc-500">
          <div className="text-left max-w-[120px]">Intent (HTTP Call)</div>
          <div className="text-center max-w-[150px] text-emerald-400 bg-emerald-500/10 px-2 py-1 rounded">Proxy Validates & Adds Token</div>
          <div className="text-right max-w-[120px]">Authorized Data</div>
        </div>
      </div>
    </section>
  );
};
