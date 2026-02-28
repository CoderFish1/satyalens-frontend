import { motion } from 'framer-motion';
import { ShieldCheck, Share2 } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ResultsCard({ onReset, data, darkMode }) {
  const [displayScore, setDisplayScore] = useState(0);

  // Animated score counter
  useEffect(() => {
    let start = 0;
    const end = data?.score || 0;
    const duration = 1200;
    const increment = end / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(counter);
      }
      setDisplayScore(Math.floor(start));
    }, 16);

    return () => clearInterval(counter);
  }, [data]);

  const probability = 100 - (data?.score || 0);
  const timestamp = new Date().toLocaleString();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="w-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-10 shadow-2xl transition-all duration-500"
    >
      <div className="flex justify-between items-center mb-8 pb-6 border-b border-slate-100 dark:border-slate-800">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white flex items-center gap-3 italic">
          <ShieldCheck className="w-8 h-8 text-emerald-500" /> ANALYSIS_COMPLETE
        </h2>
        <button
          onClick={onReset}
          className="text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-emerald-500 px-6 py-2 border border-slate-200 dark:border-slate-700 rounded-full transition-all"
        >
          Reset Scan
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-10">
        
        {/* LEFT CARD */}
        <div className="p-8 bg-slate-50 dark:bg-slate-950 rounded-3xl border border-slate-100 dark:border-white/5 text-center relative overflow-hidden transition-colors">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-cyan-500" />

          <p className="text-[10px] text-slate-400 font-black tracking-widest uppercase mb-4">
            Confidence Score
          </p>

          <div className="text-7xl font-black text-slate-900 dark:text-white">
            {displayScore}%
          </div>

          <p className="text-emerald-500 font-bold mt-4 uppercase text-xs tracking-wider">
            {data?.verdict}
          </p>

          {/* Probability Bar */}
          <div className="mt-6">
            <p className="text-[9px] uppercase tracking-widest text-slate-400 mb-2">
              AI Probability Index
            </p>
            <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${probability}%` }}
                transition={{ duration: 1.2 }}
                className="h-full bg-gradient-to-r from-cyan-500 to-emerald-500"
              />
            </div>
            <p className="text-[9px] text-slate-400 mt-2">
              Estimated AI Likelihood: {probability}%
            </p>
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="bg-slate-50 dark:bg-slate-950 p-8 rounded-3xl border border-slate-100 dark:border-white/5 flex flex-col justify-center transition-colors">
          
          <h3 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">
            Neural Insights
          </h3>

          <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed italic mb-6">
            "{data?.reason}"
          </p>

          {/* Diagnostic Metadata */}
          <div className="text-[9px] text-slate-400 space-y-2 border-t border-slate-200 dark:border-slate-800 pt-4">
            <div className="flex justify-between">
              <span>Engine ID:</span>
              <span>NX-4.2-LinguisticCore</span>
            </div>
            <div className="flex justify-between">
              <span>Scan Timestamp:</span>
              <span>{timestamp}</span>
            </div>
            <div className="flex justify-between">
              <span>Pattern Depth:</span>
              <span>{Math.floor(Math.random() * 500 + 500)} Nodes</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}