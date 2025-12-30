
import React from 'react';
import { motion } from 'framer-motion';
import { Monitor, Server, Sparkles } from 'lucide-react';

export const ZenHero: React.FC = () => {
  return (
    <section className="relative pt-12">
      <div className="flex flex-col gap-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-yellow-100 border-2 border-zinc-900 text-zinc-900 text-[11px] font-black uppercase tracking-wider shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]">
            <Sparkles size={14} className="text-amber-500" />
            A better way to fetch
          </div>
          
          <h1 className="text-zinc-950 text-5xl sm:text-7xl font-black tracking-tight leading-[0.9] max-w-xl">
            Clean logic.<br />
            <span className="text-indigo-600">Zero cruft.</span>
          </h1>
          
          <p className="text-zinc-600 text-lg sm:text-xl max-w-md leading-relaxed font-medium">
            This is <span className="text-zinc-900 font-bold italic">auto-server-client</span>. I built it because I was tired of writing the same 30 lines of code every time I needed to fetch data in Next.js.
          </p>
        </motion.div>

        <div className="flex items-center gap-8 relative h-32">
          {/* Cartoon Character representation - Client */}
          <motion.div
            animate={{ 
              rotate: [0, -3, 3, 0],
              y: [0, -5, 0]
            }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="p-5 bg-white border-2 border-zinc-900 rounded-2xl shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] z-10"
          >
             <Monitor size={40} className="text-zinc-900" />
             <div className="absolute -top-2 -right-2 bg-indigo-500 text-white p-1 rounded-md border border-zinc-900 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]">
               <span className="text-[8px] font-black uppercase">Client</span>
             </div>
          </motion.div>

          {/* Animated "Hand-drawn" style path */}
          <div className="flex-1 relative flex items-center justify-center">
            <svg width="100%" height="40" className="absolute overflow-visible">
              <motion.path
                d="M 0 20 Q 50 0 100 20 T 200 20"
                fill="transparent"
                stroke="#6366f1"
                strokeWidth="3"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </svg>
            <motion.div 
              animate={{ x: [-40, 40], opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="text-[10px] font-black uppercase text-indigo-400 tracking-tighter"
            >
              Intent...
            </motion.div>
          </div>

          {/* Cartoon Character representation - Server */}
          <motion.div
            animate={{ 
              rotate: [0, 3, -3, 0],
              y: [0, 5, 0]
            }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="p-5 bg-indigo-600 border-2 border-zinc-900 rounded-2xl shadow-[6px_6px_0px_0px_rgba(24,24,27,1)] z-10"
          >
             <Server size={40} className="text-white" />
             <div className="absolute -top-2 -right-2 bg-yellow-400 text-zinc-900 p-1 rounded-md border border-zinc-900 shadow-[2px_2px_0px_0px_rgba(24,24,27,1)]">
               <span className="text-[8px] font-black uppercase">Proxy</span>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
