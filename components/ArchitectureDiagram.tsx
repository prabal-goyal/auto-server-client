
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Layout, Globe, Lock, Key, Server, Cpu, Info } from 'lucide-react';

const Node: React.FC<{
  title: string;
  desc: string;
  icon: React.ReactNode;
  isActive: boolean;
  colorClass: string;
  onClick: () => void;
}> = ({ title, desc, icon, isActive, colorClass, onClick }) => (
  <motion.div
    onClick={onClick}
    className={`relative cursor-pointer p-6 rounded-2xl border transition-all duration-300 w-full sm:w-64 ${
      isActive 
        ? `${colorClass} border-current ring-4 ring-emerald-500/10` 
        : 'bg-zinc-900/50 border-zinc-800 text-zinc-400'
    }`}
  >
    <div className="mb-4">{icon}</div>
    <h4 className={`text-lg font-bold mb-2 ${isActive ? 'text-zinc-50' : 'text-zinc-300'}`}>{title}</h4>
    <p className="text-xs leading-relaxed opacity-70">{desc}</p>
    {isActive && (
      <motion.div 
        layoutId="active-indicator"
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-emerald-500"
      />
    )}
  </motion.div>
);

export const ArchitectureDiagram: React.FC = () => {
  const [activeNode, setActiveNode] = useState(0);

  const nodes = [
    {
      title: 'Browser Component',
      desc: 'Calls useAutoQuery("/api/data"). Only knows the path and parameters.',
      icon: <Layout className="w-6 h-6" />,
      colorClass: 'bg-zinc-800 text-zinc-200'
    },
    {
      title: 'Proxy Route',
      desc: 'Intercepts the call on the server side. Injects session cookies & secrets.',
      icon: <Cpu className="w-6 h-6 text-emerald-400" />,
      colorClass: 'bg-emerald-950/30 text-emerald-400'
    },
    {
      title: 'Server Client',
      desc: 'Single instance shared across all routes. Manages auth headers centrally.',
      icon: <Shield className="w-6 h-6 text-cyan-400" />,
      colorClass: 'bg-cyan-950/30 text-cyan-400'
    },
    {
      title: 'Backend API',
      desc: 'Receives the fully authorized request with the hidden secret tokens.',
      icon: <Globe className="w-6 h-6 text-zinc-400" />,
      colorClass: 'bg-zinc-800 text-zinc-400'
    }
  ];

  return (
    <section className="py-24 px-4 bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-2 text-emerald-500 mb-4 font-bold uppercase tracking-widest text-xs">
          <Info size={14} /> Architecture
        </div>
        <h2 className="text-4xl font-extrabold mb-12">How it flows</h2>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-zinc-800 -translate-y-1/2 -z-10" />

          {nodes.map((node, idx) => (
            <React.Fragment key={idx}>
              <Node 
                {...node} 
                isActive={activeNode === idx} 
                onClick={() => setActiveNode(idx)}
              />
              {idx < nodes.length - 1 && (
                <div className="lg:hidden flex justify-center py-2">
                   <div className="w-0.5 h-8 bg-zinc-800" />
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="mt-16 bg-zinc-900/80 rounded-3xl border border-zinc-800 p-8 min-h-[200px] flex items-center justify-center relative overflow-hidden">
           <AnimatePresence mode="wait">
             <motion.div
               key={activeNode}
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
               exit={{ opacity: 0, x: -20 }}
               className="text-center max-w-2xl"
             >
               <h3 className="text-2xl font-bold mb-4 text-emerald-400">{nodes[activeNode].title}</h3>
               <p className="text-zinc-300 text-lg leading-relaxed">
                  {activeNode === 0 && "Your client components stay thin. They don't need to know about OAuth tokens, API keys, or backend headers. They just request data by 'Intent'."}
                  {activeNode === 1 && "The Proxy Route acts as a secure airlock. It's a standard Next.js route handler that you define once. It automatically merges client intent with server authority."}
                  {activeNode === 2 && "Instead of creating a fetch client for every request, auto-server-client uses a single singleton instance that holds your headers, base URL, and interceptors."}
                  {activeNode === 3 && "Your backend sees a perfectly formatted, authorized request. No leakage of secrets in the browser console, no exposed API keys in the JS bundle."}
               </p>
             </motion.div>
           </AnimatePresence>
           
           {/* Visual Decor */}
           <div className="absolute top-0 right-0 p-4 opacity-10">
              <Server size={120} />
           </div>
           <div className="absolute bottom-0 left-0 p-4 opacity-10">
              <Lock size={120} />
           </div>
        </div>
      </div>
    </section>
  );
};
