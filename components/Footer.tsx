
import React from 'react';
import { Package, Twitter, Github, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2 font-bold text-zinc-100">
            <Package size={24} className="text-emerald-500" />
            <span>auto-server-client</span>
          </div>
          <p className="text-sm text-zinc-500 max-w-xs text-center md:text-left">
            Building secure, zero-boilerplate Next.js applications for modern web development.
          </p>
        </div>

        <div className="flex gap-8">
          <div className="flex flex-col gap-3">
             <h4 className="text-sm font-bold text-zinc-400">Product</h4>
             <a href="#" className="text-xs text-zinc-500 hover:text-emerald-500 transition-colors">Documentation</a>
             <a href="#" className="text-xs text-zinc-500 hover:text-emerald-500 transition-colors">Architecture</a>
             <a href="#" className="text-xs text-zinc-500 hover:text-emerald-500 transition-colors">Examples</a>
          </div>
          <div className="flex flex-col gap-3">
             <h4 className="text-sm font-bold text-zinc-400">Community</h4>
             <a href="#" className="text-xs text-zinc-500 hover:text-emerald-500 transition-colors">Discord</a>
             <a href="#" className="text-xs text-zinc-500 hover:text-emerald-500 transition-colors">NPM Registry</a>
             <a href="#" className="text-xs text-zinc-500 hover:text-emerald-500 transition-colors">Release Notes</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <a href="#" className="p-2 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-zinc-100">
            <Twitter size={18} />
          </a>
          <a href="#" className="p-2 bg-zinc-900 rounded-full hover:bg-zinc-800 transition-colors text-zinc-400 hover:text-zinc-100">
            <Github size={18} />
          </a>
        </div>
      </div>
      
      <div className="mt-12 text-center text-xs text-zinc-600 flex items-center justify-center gap-1">
        Made with <Heart size={12} className="text-red-500 fill-red-500" /> for the Next.js community.
      </div>
    </footer>
  );
};
