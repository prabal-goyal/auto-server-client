
import React from 'react';
import { motion } from 'framer-motion';
import { Frown, Smile, Trash2 } from 'lucide-react';

export const FrictionVsFlow: React.FC = () => {
  return (
    <section className="space-y-12">
      <div className="space-y-4">
        <h2 className="text-zinc-950 text-xs font-black tracking-[0.3em] uppercase flex items-center gap-2">
          <Trash2 size={14} className="text-red-500" />
          The Struggle is Real
        </h2>
        <p className="text-zinc-500 text-lg leading-relaxed max-w-xl font-medium">
          Usually, adding a new API route means touching 3 files and writing 50 lines of boilerplate. It's tedious, error-prone, and <span className="text-red-500 font-bold">boring</span>.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Friction (The Mess) */}
        <div className="relative group">
          <div className="h-56 bg-red-50 rounded-3xl border-2 border-zinc-900 flex flex-col items-center justify-center relative overflow-hidden transition-all group-hover:bg-red-100/50">
            <div className="grid grid-cols-3 gap-3 p-8">
              {[...Array(6)].map((_, i) => (
                <motion.div 
                  key={i}
                  animate={{ 
                    rotate: [0, (i % 2 === 0 ? 10 : -10), 0],
                    y: [0, (i % 3 === 0 ? 5 : -5), 0]
                  }}
                  transition={{ repeat: Infinity, duration: 2 + i * 0.5 }}
                  className="px-2 py-2 bg-white border-2 border-zinc-300 text-[9px] font-bold text-zinc-400 rounded-lg shadow-sm flex flex-col items-center gap-1"
                >
                  <div className="w-full h-1 bg-zinc-100 rounded-full" />
                  <div className="w-2/3 h-1 bg-zinc-100 rounded-full" />
                  <span className="text-red-300 italic">fetch...</span>
                </motion.div>
              ))}
            </div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[10px] font-black text-red-600 bg-white border-2 border-zinc-900 px-3 py-1 rounded-full uppercase shadow-[3px_3px_0px_0px_rgba(24,24,27,1)]">
              <Frown size={12} />
              Manual Mess
            </div>
          </div>
        </div>

        {/* Flow (The Solution) */}
        <div className="relative group">
          <div className="h-56 bg-emerald-50 rounded-3xl border-2 border-emerald-600 flex flex-col items-center justify-center relative overflow-hidden transition-all group-hover:bg-emerald-100/50">
             <div className="relative w-full px-16 space-y-4">
                <motion.div 
                  initial={{ width: "20%" }}
                  animate={{ width: "100%" }}
                  transition={{ repeat: Infinity, duration: 2, ease: "anticipate" }}
                  className="h-3 bg-white border-2 border-emerald-400 rounded-full relative overflow-hidden"
                >
                   <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-indigo-500 animate-pulse" />
                </motion.div>
                <div className="flex justify-between w-full">
                  <div className="w-8 h-2 bg-emerald-200 rounded-full" />
                  <div className="w-8 h-2 bg-emerald-200 rounded-full" />
                </div>
             </div>
             <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[10px] font-black text-emerald-700 bg-white border-2 border-emerald-600 px-3 py-1 rounded-full uppercase shadow-[3px_3px_0px_0px_rgba(16,185,129,1)]">
              <Smile size={12} />
              Smooth Flow
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
