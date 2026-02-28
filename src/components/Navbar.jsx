import { Shield, Sun, Moon } from 'lucide-react';

export default function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className={`sticky top-0 z-50 border-b transition-colors duration-500 ${darkMode ? 'border-white/10 bg-black/50' : 'border-black/5 bg-white/50'} backdrop-blur-xl`}>
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center shadow-lg group-hover:rotate-12 transition-all">
            <Shield className="w-6 h-6 text-black fill-current" />
          </div>
          <span className={`text-2xl font-black italic tracking-tighter transition-colors duration-500 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            <span className="text-emerald-500">सत्य</span>Lens
          </span>
        </div>

        <button 
          onClick={() => setDarkMode(!darkMode)}
          className={`p-2.5 rounded-xl transition-all ${darkMode ? 'bg-white/10 text-yellow-400 hover:bg-white/20' : 'bg-black/5 text-indigo-600 hover:bg-black/10'}`}
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
}