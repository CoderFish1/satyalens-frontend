export default function Spinner() {
  return (
    <div className="flex flex-col items-center justify-center py-20 space-y-6">
      {/* Spinning Ring */}
      <div className="relative w-20 h-20">
        <div className="absolute inset-0 border-4 border-slate-800 rounded-full"></div>
        <div className="absolute inset-0 border-4 border-emerald-500 rounded-full border-t-transparent animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          {/* Inner pulsing eye/lens */}
          <div className="w-4 h-4 bg-emerald-400 rounded-full animate-pulse shadow-[0_0_15px_rgba(52,211,153,0.8)]"></div>
        </div>
      </div>
      
      {/* Loading Text */}
      <div className="text-center space-y-2">
        <h3 className="text-emerald-400 font-semibold tracking-wider animate-pulse">
          INITIALIZING SATYALENS ENGINE
        </h3>
        <p className="text-slate-500 text-sm">Running deep lexical analysis & cross-referencing...</p>
      </div>
    </div>
  );
}