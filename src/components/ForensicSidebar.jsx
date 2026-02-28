import { motion } from 'framer-motion';
import { Activity, Terminal, ShieldAlert } from 'lucide-react';

export default function ForensicSidebar({ status }) {
  const logs = [
    { id: 1, text: "Initializing Forensic Uplink...", active: status === 'loading' },
    { id: 2, text: "Scanning Lexical Patterns...", active: status === 'loading' },
    { id: 3, text: "Gemini 1.5 Neural Handshake...", active: status === 'loading' },
    { id: 4, text: "Report Generated.", active: status === 'results' }
  ];

  return (
    <div className="hidden lg:block w-64 space-y-4">
      <div className="bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/10 rounded-3xl p-6 shadow-xl">
        <div className="flex items-center gap-2 mb-6">
          <Activity className="w-4 h-4 text-emerald-500" />
          <h3 className="text-[10px] font-black uppercase tracking-widest text-slate-400">Live Diagnostics</h3>
        </div>
        
        <div className="space-y-4">
          {logs.map((log) => (
            <div key={log.id} className="flex items-start gap-3">
              <div className={`w-1 h-1 rounded-full mt-1.5 ${log.active ? 'bg-emerald-500 animate-pulse' : 'bg-slate-300 dark:bg-slate-800'}`} />
              <p className={`text-[10px] font-mono leading-tight ${log.active ? 'text-emerald-500' : 'text-slate-400'}`}>
                {log.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-emerald-500/5 border border-emerald-500/20 rounded-3xl p-6 italic">
        <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium leading-relaxed">
          "Forensic intelligence identifies AI markers by analyzing burstiness and structural uniformity."
        </p>
      </div>
    </div>
  );
}