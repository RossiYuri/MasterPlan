/**
 * Hero SVG Mask Component
 * 
 * Componente avançado com:
 * - Máscara SVG em formato de letra "M"
 * - Efeito parallax 3D ao movimento do mouse
 * - Vídeo institucional dentro da máscara
 * - Animações Framer Motion
 */

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";


export default function HeroSVGMask() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [parallaxOffset, setParallaxOffset] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkScreen = () => {
    setIsMobile(window.innerWidth < 768);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    setMousePosition({ x, y });
    setParallaxOffset({
      x: (x - 0.5) * 20,
      y: (y - 0.5) * 20,
    });
  };

  checkScreen();
  window.addEventListener("resize", checkScreen);
  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("resize", checkScreen);
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-96 md:h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 overflow-hidden"
    >
      {/* SVG Mask Definition */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1600 900"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <mask id="mMask">
            {/* Fundo branco */}
            <rect width="1600" height="900" fill="white" />

            {/* Letra "M" em preto (área visível) */}
            <text
              x={isMobile ? "800" : "800"}
              y="620"
              fontSize="620"
              fontWeight="bold"
              fontFamily="Poppins, sans-serif"
              textAnchor="middle"
              fill="black"
            >
              M
            </text>
          </mask>
        </defs>

        {/* Imagem/Vídeo com máscara */}
        <motion.image
          href="https://d2xsxph8kpxj0f.cloudfront.net/310519663469303163/MH3S9ZkEHU42LjpRub2zce/hero-industrial-offshore-hrU3ibmVeLRC7cC3vSGY2J.webp"
          x={0}
          y={0}
          width={1600}
          height={900}
          preserveAspectRatio="xMidYMid slice"
          mask="url(#mMask)"
          animate={{
            x: parallaxOffset.x,
            y: parallaxOffset.y,
          }}
          transition={{ type: "spring", stiffness: 100, damping: 30 }}
        />
      </svg>

      {/* Overlay com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-transparent to-slate-900/80" />

      {/* Conteúdo Textual */}
      <motion.div
        className="absolute inset-0 flex justify-center items-end pb-20 md:items-center md:pb-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <div className="text-center text-white z-10">
          <motion.h1
            className="font-poppins font-bold text-2xl sm:text-4xl md:text-7xl mb-2 sm:mb-4 md:mb-6 leading-tight px-4"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            MasterPlan
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg md:text-2xl text-slate-200 max-w-[320px] sm:max-w-3xl mx-auto mt-4 sm:mt-6 md:-mt-10 px-5 leading-relaxed"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Engenharia Multidisciplinar no Rio de Janeiro para Projetos Industriais e Prediais
          </motion.p>

        </div>
      </motion.div>

      {/* Grid Técnico de Fundo */}
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />
    </div>
  );
}
