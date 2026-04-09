/**
 * Liquid Fill Button Component
 * 
 * Advanced UI Component with Framer Motion
 * - Laranja vibrante (#FF8C00) preenchimento fluido
 * - Animação de baixo para cima no hover
 * - Efeito de fluido com cubic-bezier suave
 */

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface LiquidFillButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "primary" | "secondary";
}

export default function LiquidFillButton({
  children,
  onClick,
  className = "",
  variant = "primary",
}: LiquidFillButtonProps) {
  const baseClasses = `
    relative overflow-hidden px-8 py-3 font-bold rounded-lg
    transition-all duration-300 group
    ${variant === "primary"
      ? "border-2 border-orange-500 text-orange-500 hover:text-white"
      : "border-2 border-slate-900 text-slate-900 hover:text-white"
    }
    ${className}
  `;

  const fillColor = variant === "primary" ? "#FF8C00" : "#1e293b";

  return (
    <button onClick={onClick} className={baseClasses}>
      {/* Liquid Fill Background */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: fillColor,
          zIndex: -1,
        }}
        initial={{ clipPath: "inset(100% 0 0 0)" }}
        whileHover={{ clipPath: "inset(0% 0 0 0)" }}
        transition={{
          duration: 0.6,
          ease: [0.34, 1.56, 0.64, 1], // cubic-bezier fluido
        }}
      />

      {/* Text Content */}
      <motion.span
        className="relative z-10 flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.span>
    </button>
  );
}
