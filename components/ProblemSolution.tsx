
import React from 'react';
import { motion } from 'framer-motion';
import { Share2, Zap, ArrowRight, XCircle, CheckCircle2 } from 'lucide-react';

export const ProblemSolution: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Why use auto-server-client?</h2>
          <p className="text-zinc-400">Stop wasting time writing duplicate fetch logic and insecure client calls.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Traditional Mess */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 bg-zinc-900/40 rounded-3xl border border-zinc-800/50 relative overflow-hidden group"
          >
            <div className="flex items-center gap-3 mb-6 text-red-500">
              <XCircle size={24} />
              <h3 className="text-xl font-bold">The Traditional Way</h3>
            </div>
            
            <div className="space-y-4 relative">
              <div className="p-4 bg-zinc-800/30 rounded-xl border border-zinc-700/30 text-sm text-zinc-400">
                Create Server Action <span className="text-zinc-500 ml-2">users.ts</span>
              </div>
              <div className="p-4 bg-zinc-800/30 rounded-xl border border-zinc-700/30 text-sm text-zinc-400">
                Create Server Action <span className="text-zinc-500 ml-2">posts.ts</span>
              </div>
              <div className="p-4 bg-zinc-800/30 rounded-xl border border-zinc-700/30 text-sm text-zinc-400">
                Write redundant Fetch logic
              </div>
              <div className="p-4 bg-zinc-800/30 rounded-xl border border-zinc-700/30 text-sm text-zinc-400">
                Expose tokens via environment
              </div>
              
              <div className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity">
                <Share2 className="w-full h-full text-red-500" />
              </div>
            </div>
            
            <p className="mt-8 text-sm text-zinc-500 italic">"I have 50 server actions for 50 API endpoints..."</p>
          </motion.div>

          {/* Auto Server Client Way */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="p-8 bg-emerald-500/5 rounded-3xl border border-emerald-500/20 relative overflow-hidden group"
          >
            <div className="flex items-center gap-3 mb-6 text-emerald-500">
              <CheckCircle2 size={24} />
              <h3 className="text-xl font-bold">The Auto-Server Way</h3>
            </div>
            
            <div className="space-y-4 relative z-10">
              <div className="p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-sm text-emerald-100 flex items-center justify-between">
                One Setup File <Zap size={14} />
              </div>
              <div className="p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-sm text-emerald-100 flex items-center justify-between">
                Universal Hooks <Zap size={14} />
              </div>
              <div className="p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-sm text-emerald-100 flex items-center justify-between">
                Automatic Authentication <Zap size={14} />
              </div>
              <div className="p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20 text-sm text-emerald-100 flex items-center justify-between">
                Zero Token Leakage <Zap size={14} />
              </div>
            </div>

            <div className="mt-8 flex items-center gap-2 text-emerald-500 font-bold group-hover:gap-4 transition-all cursor-pointer">
              Read the full benefits <ArrowRight size={20} />
            </div>
            
            <div className="absolute -bottom-10 -right-10 opacity-10 group-hover:opacity-20 transition-opacity">
              <Zap className="w-40 h-40 text-emerald-500" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
