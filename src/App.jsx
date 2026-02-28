import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from "./components/Navbar.jsx";
import VerifierCore from "./components/VerifierCore.jsx";
import Features from "./components/Features.jsx";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [mouseX, setMouseX] = useState(0);

  // Mouse Tracking for the Laser Scanner effect
  useEffect(() => {
    const handleMouse = (e) => setMouseX(e.clientX);
    window.addEventListener('mousemove', handleMouse);
    return () => window.removeEventListener('mousemove', handleMouse);
  }, []);

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  return (
    <div className="min-h-screen transition-colors duration-500 bg-slate-50 dark:bg-[#030712] text-slate-900 dark:text-white font-sans selection:bg-emerald-500/30 overflow-x-hidden relative">
      
      {/* LASER SCANNER LINE */}
      <motion.div
        className="fixed top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-emerald-500 to-transparent pointer-events-none z-50 hidden md:block"
        animate={{ x: mouseX }}
        transition={{ type: "spring", damping: 25, stiffness: 150 }}
      />

      {/* AMBIENT GLOW ORBS */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-emerald-600 blur-[120px]" 
        />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[120px]" />
      </div>

      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      
      <main className="max-w-7xl mx-auto px-6 py-12 relative z-10">
        {/* UNIQUE GLITCH HERO */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16 space-y-4">
          <h1 className="text-8xl md:text-9xl font-black tracking-tighter cursor-default group">
            <motion.span 
              whileHover={{ skewX: [0, -15, 15, 0], transition: { duration: 0.2 } }}
              className="text-emerald-500 dark:text-emerald-400 inline-block"
            >सत्य</motion.span>
            <span className="transition-colors duration-500 text-slate-900 dark:text-white">Lens</span>
          </h1>
          <p className="text-slate-500 dark:text-slate-400 font-bold text-[10px] tracking-[0.5em] uppercase">
             Forensic Intelligence Protocol
          </p>
        </motion.div>

        {/* MAIN INTERACTIVE SECTION */}
        <section className="mb-24">
          <VerifierCore darkMode={darkMode} />
        </section>

        {/* COMPONENT SECTION */}
        <div className="space-y-24">
          <Features darkMode={darkMode} />
        </div>
        
        {/* SECURITY TICKER */}
        <div className="mt-24 border-t border-slate-200 dark:border-white/5 pt-8 flex items-center justify-between opacity-30 text-[9px] font-mono uppercase tracking-[0.3em]">
          <span>STATUS: ENCRYPTED_LINK_ACTIVE</span>
          <span className="animate-pulse text-emerald-500">OPERATOR: AMRIT_THAKUR</span>
          <span>STAMP: {new Date().toLocaleTimeString()}</span>
        </div>
      </main>
    </div>
  );
}