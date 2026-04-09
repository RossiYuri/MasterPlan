/**
 * Time Counter Component
 * 
 * Micro-interaction técnica simplificada
 * - Exibe "25+" anos de mercado
 * - Sem animações de piscar
 * - Design minimalista com tipografia técnica
 */

import { motion } from "framer-motion";

export default function TimeCounter() {
  return (
    <motion.div
      className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-gradient-to-br from-slate-50 to-white py-4 border-y border-slate-200 blueprint-grid"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="text-center px-4">
        <div className="font-mono text-5xl md:text-6xl font-bold text-orange-500 mb-2">
          +25
        </div>
        <div className="text-base md:text-lg text-slate-900 font-poppins font-bold mb-1">
          Anos de Mercado
        </div>
        <p className="text-sm text-slate-600">
          Desde 2000, transformando ideias em soluções de engenharia
        </p>
      </div>

      <motion.div
        className="mt-4 h-1 w-full bg-gradient-to-r from-orange-500 to-transparent"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      />
    </motion.div>
  );
}
