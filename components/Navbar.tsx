
import React from 'react';
import { Github, Package } from 'lucide-react';

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const navItems = [
    { label: 'Architecture', id: 'architecture' },
    { label: 'Security', id: 'responsibilities' },
    { label: 'DX', id: 'dx' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4">
      <div className="flex items-center gap-6 px-6 py-3 bg-zinc-900/80 backdrop-blur-xl rounded-full border border-zinc-800 shadow-2xl">
        <div className="flex items-center gap-2 font-bold text-emerald-500">
          <Package size={20} />
          <span className="hidden sm:inline">auto-server-client</span>
        </div>
        
        <div className="flex items-center gap-4 sm:gap-8">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`text-sm font-medium transition-colors ${
                activeSection === item.id ? 'text-emerald-500' : 'text-zinc-400 hover:text-zinc-100'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="h-4 w-[1px] bg-zinc-700 hidden sm:block" />

        <a 
          href="https://github.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-zinc-400 hover:text-zinc-100 transition-colors"
        >
          <Github size={20} />
        </a>
      </div>
    </nav>
  );
};
