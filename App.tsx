
import React from 'react';
import { ZenHero } from './components/ZenHero';
import { FrictionVsFlow } from './components/FrictionVsFlow';
import { Blueprint } from './components/Blueprint';
import { CodeReduction } from './components/CodeReduction';
import { SimpleCode } from './components/SimpleCode';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-indigo-100 selection:text-indigo-700 font-normal">
      <main className="max-w-3xl mx-auto px-8 py-24 space-y-48">
        <ZenHero />
        <FrictionVsFlow />
        <CodeReduction />
        <Blueprint />
        <SimpleCode />

        <footer className="pt-24 pb-12 border-t border-zinc-100 text-[10px] tracking-[0.2em] uppercase font-bold text-zinc-400 flex justify-between items-center">
          <span>auto-server-client</span>
          <div className="flex gap-6">
            <a href="https://github.com" className="hover:text-indigo-600 transition-colors">GitHub</a>
            <a href="https://www.npmjs.com/package/auto-server-client" className="hover:text-indigo-600 transition-colors">NPM</a>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default App;
