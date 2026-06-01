"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Sidebar from "./Sidebar";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* The Top Bar (Visible only on mobile) */}
      <div className="flex items-center justify-between p-5 border-b border-white/5 bg-[var(--color-deep-space)] sticky top-0 z-40">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-neon-blue/20 flex items-center justify-center border border-neon-blue/50">
            <div className="w-2 h-2 bg-neon-blue rounded-full"></div>
          </div>
          <h2 className="text-lg font-black text-white tracking-widest">
            LEARN<span className="text-neon-blue">LAB</span>
          </h2>
        </div>
        
        <button 
          onClick={() => setIsOpen(true)}
          className="text-neon-blue hover:text-white transition-colors"
        >
          <Menu size={28} />
        </button>
      </div>

      {/* The Full-Screen Overlay Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-[var(--color-deep-space)]/95 backdrop-blur-xl flex flex-col animate-in fade-in duration-200">
          <div className="flex justify-end p-6">
            <button 
              onClick={() => setIsOpen(false)}
              className="text-neon-blue hover:text-white transition-colors bg-white/5 p-2 rounded-full"
            >
              <X size={24} />
            </button>
          </div>
          
          {/* We reuse your beautifully designed sidebar here! */}
          <div className="flex-1 px-4 overflow-y-auto pb-10" onClick={() => setIsOpen(false)}>
            <Sidebar />
          </div>
        </div>
      )}
    </div>
  );
}