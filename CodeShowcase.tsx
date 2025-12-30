
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Terminal, Copy, Check } from 'lucide-react';

export const CodeShowcase: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<'client' | 'server'>('client');

  const copyToClipboard = () => {
    setCopied(true);
    const codeToCopy = code[activeTab];
    navigator.clipboard.writeText(codeToCopy);
    setTimeout(() => setCopied(false), 2000);
  };

  const code = {
    client: `// Client Component
import { useAutoQuery } from "auto-server-client";

export default function UserList() {
  const { data, loading } = useAutoQuery("/v1/users");

  if (loading) return <div>Loading...</div>;

  return (
    <ul>
      {data.map(user => <li key={user.id}>{user.name}</li>)}
    </ul>
  );
}`,
    server: `// Server Proxy Setup (api/proxy/route.ts)
import { createServerClient } from "auto-server-client";

const api = createServerClient({
  baseUrl: process.env.BACKEND_URL,
  getHeaders: async () => ({
    Authorization: \`Bearer \${process.env.INTERNAL_SECRET}\`
  })
});

export const POST = api.proxyHandler;`
  };

  return (
    <section className="py-24 px-4 bg-zinc-950">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Implementation is simple.</h2>
          <p className="text-zinc-400">Stop the sprawl. Use one client for everything.</p>
        </div>

        <div className="bg-zinc-900 rounded-2xl border border-zinc-800 overflow-hidden shadow-2xl">
          <div className="flex items-center justify-between px-6 py-4 bg-zinc-800/50 border-b border-zinc-800">
            <div className="flex items-center gap-4">
               <button 
                 onClick={() => setActiveTab('client')}
                 className={`text-sm font-medium transition-all px-3 py-1.5 rounded-md ${activeTab === 'client' ? 'text-emerald-400 bg-emerald-500/5' : 'text-zinc-500 hover:text-zinc-300'}`}
               >
                 Client Usage
               </button>
               <button 
                 onClick={() => setActiveTab('server')}
                 className={`text-sm font-medium transition-all px-3 py-1.5 rounded-md ${activeTab === 'server' ? 'text-emerald-400 bg-emerald-500/5' : 'text-zinc-500 hover:text-zinc-300'}`}
               >
                 Server Config
               </button>
            </div>
            <button 
              onClick={copyToClipboard}
              className="p-2 hover:bg-zinc-700 rounded-lg transition-colors text-zinc-400"
              title="Copy code"
            >
              {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
            </button>
          </div>
          
          <div className="p-6 overflow-x-auto bg-zinc-950/50">
             <AnimatePresence mode="wait">
               <motion.pre
                 key={activeTab}
                 initial={{ opacity: 0, y: 10 }}
                 animate={{ opacity: 1, y: 0 }}
                 exit={{ opacity: 0, y: -10 }}
                 className="text-sm sm:text-base font-mono leading-relaxed text-zinc-300"
               >
                 <code>
                   {code[activeTab].split('\n').map((line, i) => (
                     <div key={i} className="table-row">
                       <span className="table-cell pr-6 text-zinc-700 select-none text-right text-xs opacity-50">{i + 1}</span>
                       <span className="table-cell whitespace-pre">{line || ' '}</span>
                     </div>
                   ))}
                 </code>
               </motion.pre>
             </AnimatePresence>
          </div>

          <div className="px-6 py-4 bg-zinc-800/30 border-t border-zinc-800 flex items-center gap-3">
             <Terminal size={14} className="text-emerald-500" />
             <span className="text-xs font-mono text-zinc-500">npm install auto-server-client</span>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
           <div className="p-4 bg-zinc-900/50 rounded-xl border border-zinc-800 text-center hover:border-emerald-500/30 transition-colors">
              <div className="text-emerald-400 font-bold mb-1">90% Less</div>
              <div className="text-xs text-zinc-500">Boilerplate code</div>
           </div>
           <div className="p-4 bg-zinc-900/50 rounded-xl border border-zinc-800 text-center hover:border-emerald-500/30 transition-colors">
              <div className="text-emerald-400 font-bold mb-1">0 Exposed</div>
              <div className="text-xs text-zinc-500">API Secrets</div>
           </div>
           <div className="p-4 bg-zinc-900/50 rounded-xl border border-zinc-800 text-center hover:border-emerald-500/30 transition-colors">
              <div className="text-emerald-400 font-bold mb-1">100% Type-Safe</div>
              <div className="text-xs text-zinc-500">With TypeScript</div>
           </div>
        </div>
      </div>
    </section>
  );
};
