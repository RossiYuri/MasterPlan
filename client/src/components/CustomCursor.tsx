/**
 * Custom Cursor Component
 * 
 * Micro-interação técnica
 * - Cursor crosshair de precisão técnica
 * - Exibe coordenadas dinâmicas x,y ao passar sobre elementos
 * - Animação suave com Framer Motion
 */

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CursorPosition {
  x: number;
  y: number;
}

export default function CustomCursor() {
  const [position, setPosition] = useState<CursorPosition>({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHoveringClickable, setIsHoveringClickable] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      // Detecta se está sobre elemento clicável
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.classList.contains("clickable") ||
        target.closest("a") ||
        target.closest("button");

      setIsHoveringClickable(!!isClickable);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <>
      {/* Crosshair Principal */}
      <motion.div
        className="fixed pointer-events-none z-50"
        style={{
          left: position.x,
          top: position.y,
          x: "-50%",
          y: "-50%",
        }}
        animate={{
          scale: isHoveringClickable ? 1.2 : 1,
        }}
        transition={{ duration: 0.2 }}
      >
        {/* Círculo Central */}
        <div className="w-2 h-2 bg-orange-500 rounded-full" />

        {/* Linhas Horizontais */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-px bg-orange-500" />

        {/* Linhas Verticais */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-px h-8 bg-orange-500" />

        {/* Coordenadas */}
        {isVisible && (
          <motion.div
            className="absolute top-6 left-6 text-xs font-mono text-orange-500 whitespace-nowrap pointer-events-none"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.2 }}
          >
            <div>x: {Math.round(position.x)}</div>
            <div>y: {Math.round(position.y)}</div>
          </motion.div>
        )}
      </motion.div>

      {/* Estilos Globais para Cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
        a, button, [role="button"] {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}
