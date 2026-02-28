import { motion } from 'framer-motion';
import { Fingerprint, Zap, Globe } from 'lucide-react';

const cards = [
  { icon: <Fingerprint className="text-emerald-500" />, title: "Linguistic Scan", desc: "Detects unique syntactical markers typical of LLMs." },
  { icon: <Zap className="text-violet-500" />, title: "Real-time Edge", desc: "Results delivered in under 2.5 seconds." },
  { icon: <Globe className="text-cyan-500" />, title: "Fact Verify", desc: "Scans archives to verify factual claims across news." }
];

export default function Features({ darkMode }) {
  return (
    <div className="grid md:grid-cols-3 gap-6">
      {cards.map((card, i) => (
        <motion.div 
          key={i}
          whileHover={{ y: -5 }}
          className="p-8 bg-white dark:bg-[#0a0a0a] border border-slate-200 dark:border-white/5 rounded-3xl space-y-4 shadow-sm transition-all duration-500"
        >
          <div className="w-12 h-12 bg-slate-50 dark:bg-white/5 rounded-2xl flex items-center justify-center">
            {card.icon}
          </div>
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">{card.title}</h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{card.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}