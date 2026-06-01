export default function HeroTile() {
  return (
    <div className="system-panel rounded-xl p-8 relative overflow-hidden flex flex-col justify-center min-h-[160px]">
     
      <div className="absolute -right-20 -top-20 w-64 h-64 bg-neon-blue opacity-10 blur-[80px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10">
        <h2 className="text-xs font-bold tracking-widest text-system-green mb-2">SYSTEM STATUS: NOMINAL</h2>
        <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
          Welcome Back, <br className="md:hidden" />
          <span className="text-neon-blue drop-shadow-[0_0_15px_rgba(0,210,255,0.3)]">Vishwajit</span>
        </h1>
      </div>
      
    </div>
  );
}