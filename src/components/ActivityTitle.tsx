export default function ActivityTile() {
  return (
    <div className="system-panel rounded-xl p-6 h-full relative overflow-hidden flex flex-col justify-center items-center text-center min-h-[160px]">
      
      <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-system-green opacity-10 blur-[50px] rounded-full pointer-events-none"></div>
      
      <div className="relative z-10">
        <h3 className="text-xs font-bold tracking-widest text-slate-400 uppercase mb-4">
          Weekly Time Spent
        </h3>
        
        <div className="flex items-baseline justify-center gap-2">
          <span className="text-5xl font-black text-white">12.5</span>
          <span className="text-system-green font-bold tracking-wider">HRS</span>
        </div>
        
        <p className="text-xs text-slate-500 mt-2 font-semibold tracking-wide">
          +2.5 hrs from last week
        </p>
      </div>
      
    </div>
  );
}