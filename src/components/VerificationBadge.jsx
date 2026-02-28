import { motion } from 'framer-motion';
import { ShieldCheck, Share2 } from 'lucide-react';

export default function VerificationBadge({ scanId }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="mt-6 p-4 bg-emerald-500/5 border border-emerald-500/20 rounded-2xl flex items-center justify-between group"
    >
      <div className="flex items-center gap-3">
        <ShieldCheck className="w-5 h-5 text-emerald-500 animate-pulse" />
        <div>
          <p className="text-[10px] font-black uppercase tracking-widest text-emerald-500">Authenticity Certificate</p>
          <p className="text-[9px] font-mono text-slate-500">ID: {scanId || "SL-992-X10"}</p>
        </div>
      </div>
      <button className="p-2 hover:bg-emerald-500/20 rounded-full transition-colors">
        <Share2 className="w-4 h-4 text-emerald-400" />
      </button>
    </motion.div>
  );
}