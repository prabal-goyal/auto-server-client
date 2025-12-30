
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Copy, Wand2, ArrowDown } from 'lucide-react';

export const CodeReduction: React.FC = () => {
  const [isReduced, setIsReduced] = useState(false);

  return (
    <section className="space-y-12">
      <div className="space-y-4">
        <h2 className="text-zinc-950 text-xs font-black tracking-[0.3em] uppercase flex items-center gap-2">
          <Wand2 size={14} className="text-indigo-600" />
          The Big Reduction
        </h2>
        <p className="text-zinc-500 text-lg leading-relaxed max-w-xl font-medium">
          Instead of repeating authentication headers in every file, you define your authority <span className="text-indigo-600 font-bold underline decoration-indigo-200 decoration-4">once</span>. The rest is automatic.
        </p>
      </div>

      <div className="relative min-h-[450px] bg-indigo-50/30 rounded-[40px] border-2 border-dashed border-zinc-300 p-10 flex flex-col items-center justify-center overflow-hidden">
        
        <div className="relative w-full max-w-md z-10 flex flex-col items-center gap-8">
          <div className="relative w-full">
            <AnimatePresence mode="wait">
              {!isReduced ? (
                <motion.div 
                  key="bloated"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0, filter: "blur(10px)", rotate: 10 }}
                  className="space-y-3 relative"
                >
                  {[0, 1, 2, 3].map((i) => (
                    <motion.div 
                      key={i} 
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="p-4 bg-white border-2 border-zinc-900 rounded-2xl shadow-[4px_4px_0px_0px_rgba(24,24,27,1)] flex items-center justify-between group cursor-help"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-red-100 rounded-lg">
                          <Copy size={12} className="text-red-500" />
                        </div>
                        <div className="space-y-1">
                          <div className="text-[10px] font-black text-zinc-900 uppercase tracking-tight">Duplicate Logic #{i+1}</div>
                          <div className="text-[9px] text-zinc-400 font-mono italic">headers.append('Auth', '...')</div>
                        </div>
                      </div>
                      <ArrowDown size={14} className="text-zinc-200" />
                    </motion.div>
                  ))}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-[10px] font-black text-red-500 uppercase tracking-[0.2em] animate-bounce">
                    Click the wand to collapse
                  </div>
                </motion.div>
              ) : (
                <motion.div 
                  key="reduced"
                  initial={{ scale: 0.8, opacity: 0, y: 50 }}
                  animate={{ scale: 1, opacity: 1, y: 0 }}
                  className="w-full"
                >
                  <div className="p-10 bg-white border-4 border-indigo-600 rounded-[35px] shadow-[12px_12px_0px_0px_rgba(79,70,229,1)] relative overflow-hidden">
                    <div className="absolute -right-8 -top-8 p-12 bg-indigo-50 rounded-full opacity-50" />
                    
                    <div className="flex items-center gap-4 mb-6 relative">
                       <div className="p-3 bg-indigo-600 rounded-2xl text-white shadow-[4px_4px_0px_0px_rgba(49,46,129,1)]">
                          <Wand2 size={24} />
                       </div>
                       <div>
                         <h4 className="text-sm font-black text-zinc-900 uppercase">One Authority</h4>
                         <p className="text-[10px] text-indigo-500 font-bold italic tracking-wider">Perfectly Dry.</p>
                       </div>
                    </div>

                    <div className="bg-zinc-950 p-6 rounded-2xl border-2 border-zinc-800 font-mono text-[11px] leading-relaxed text-indigo-300 shadow-inner">
                      <span className="text-pink-400">const</span> api = <span className="text-emerald-400">createServerClient</span>({`{`}
                      <div className="pl-4 opacity-50">// Defined once, used everywhere</div>
                      <div className="pl-4">baseUrl: <span className="text-amber-300">"https://api.v1"</span>,</div>
                      <div className="pl-4">getHeaders: () => ({`{ Auth: TOKEN }`})</div>
                      {`})`}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05, rotate: isReduced ? 0 : 2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsReduced(!isReduced)}
            className={`group relative px-10 py-5 rounded-full border-2 border-zinc-900 font-black uppercase text-xs tracking-widest transition-all
              ${isReduced 
                ? 'bg-zinc-100 text-zinc-500 shadow-[4px_4px_0px_0px_rgba(24,24,27,1)]' 
                : 'bg-indigo-600 text-white shadow-[8px_8px_0px_0px_rgba(24,24,27,1)]'
              }`}
          >
            <div className="flex items-center gap-3">
              {isReduced ? "Show me the mess" : "Apply Magic"}
              <Wand2 size={16} className={`${!isReduced ? 'animate-pulse' : ''}`} />
            </div>
            
            {/* Cartoon Sparkle Particles */}
            <AnimatePresence>
              {!isReduced && (
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute -top-6 -right-6 pointer-events-none"
                >
                  <SparkleIcon className="text-amber-400 w-12 h-12 rotate-12" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
    </section>
  );
};

const SparkleIcon = (props: any) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" fill="currentColor" />
  </svg>
);
