"use client";

import { Home, BookOpen, Activity, Settings } from 'lucide-react';

export default function Sidebar() {
  const navItems = [
    { name: 'Home', icon: Home, active: true },
    { name: 'Courses', icon: BookOpen, active: false },
    { name: 'Activity', icon: Activity, active: false },
    { name: 'Settings', icon: Settings, active: false },
  ];

  return (
    <div className="h-full flex flex-col py-6">
      
      <div className="px-6 mb-10 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg bg-neon-blue/20 flex items-center justify-center border border-neon-blue/50 shadow-[0_0_10px_var(--color-neon-blue)]">
          <div className="w-3 h-3 bg-neon-blue rounded-full shadow-[0_0_5px_var(--color-neon-blue)]"></div>
        </div>
        <h2 className="text-xl font-black text-white tracking-widest">
          LEARN<span className="text-neon-blue">LAB</span>
        </h2>
      </div>
      
      <ul className="flex-1 space-y-2 px-3">
        {navItems.map((item) => (
          <li key={item.name}>
            <button className={`w-full flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-300 group ${
              item.active 
                ? 'bg-white/5 border border-white/10 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' 
                : 'hover:bg-white/5 border border-transparent'
            }`}>
              
              <item.icon 
                size={20} 
                className={item.active ? 'text-neon-blue' : 'text-slate-500 group-hover:text-slate-300 transition-colors'} 
              />
              
              <span className={`font-semibold tracking-wide ${
                item.active ? 'text-white' : 'text-slate-500 group-hover:text-slate-300 transition-colors'
              }`}>
                {item.name}
              </span>
              {item.active && (
                <div className="ml-auto w-1 h-5 bg-neon-blue rounded-full shadow-[0_0_8px_var(--color-neon-blue)]"></div>
              )}
            </button>
          </li>
        ))}
      </ul>
      
    </div>
  );
}