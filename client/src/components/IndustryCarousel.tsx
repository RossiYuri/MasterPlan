/**
 * Industry Carousel Component
 * 
 * Navegação circular interativa
 * - Carrossel orbital para seleção de indústrias
 * - Usuário gira "engrenagem" central
 * - Muda matiz do background ao selecionar
 * - Animações com Framer Motion
 */

import { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "wouter";

interface Industry {
  id: string;
  name: string;
  icon: string;
  color: string;
  description: string;
}

const industries: Industry[] = [
  {
    id: "services",
    name: "Serviços",
    icon: "Serviços",
    color: "from-blue-500 to-blue-600",
    description: "Serviços especializados em engenharia",
  },
  {
    id: "disciplines",
    name: "Disciplinas",
    icon: "Disciplinas",
    color: "from-green-500 to-green-600",
    description: "Disciplinas técnicas multidisciplinares",
  },
  {
    id: "segments",
    name: "Segmentos",
    icon: "Segmentos",
    color: "from-orange-500 to-orange-600",
    description: "Segmentos de atuação principais",
  },
  {
    id: "eletrica",
    name: "Elétrica",
    icon: "Elétrica",
    color: "from-blue-900 to-blue-800",
    description: "Instalações elétricas industriais e prediais",
  },
  {
    id: "about",
    name: "Sobre",
    icon: "Sobre",
    color: "from-purple-500 to-purple-600",
    description: "Conheça a história e missão da Masterplan",
  },
  {
    id: "contact",
    name: "Contato",
    icon: "Contato",
    color: "from-red-500 to-red-600",
    description: "Entre em contato conosco",
  },
];

export default function IndustryCarousel() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [rotation, setRotation] = useState(0);
  const [, navigate] = useLocation();

  const handleSelect = (idx: number) => {
    const step = 360 / industries.length;
    setSelectedIndex(idx);
    setRotation(-idx * step);
  };

  const handleRotate = (direction: "left" | "right") => {
    const step = 360 / industries.length;

    setSelectedIndex((prev) =>
      direction === "left"
        ? (prev - 1 + industries.length) % industries.length
        : (prev + 1) % industries.length
    );

    setRotation((prev) => prev + (direction === "left" ? -step : step));
  };

  const selected = industries[selectedIndex];

  return (
    <motion.div
      className={`relative w-full py-16 md:py-24 bg-gradient-to-br ${selected.color} transition-all duration-700`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      {/* Blueprint Grid Background */}
      <div className="absolute inset-0 blueprint-grid opacity-10 pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left: Circular Navigation */}
          <motion.div
            className="flex justify-center pb-20 md:pb-0"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative w-64 h-64 md:h-80">
              {/* Central Gear */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ rotate: rotation }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
              >
                <div className="w-32 h-32 bg-white rounded-full shadow-2xl flex items-center justify-center" style={{transform: `rotate(${-rotation}deg)`}}>
                  <div className="text-6xl" style={{fontSize: '22px', fontWeight: '800'}}>{selected.icon}</div>
                </div>

                {/* Orbital Items */}
                {industries.map((industry, idx) => {
                  const angle = (idx * 360) / industries.length;
                  const radius = 100;
                  const x = radius * Math.cos((angle * Math.PI) / 180);
                  const y = radius * Math.sin((angle * Math.PI) / 180);

                  return (
                    <motion.div
                      key={industry.id}
                      className="absolute"
                      animate={{
                        x,
                        y,
                        rotate: -rotation,
                      }}
                      transition={{ duration: 0.8, type: "spring" }}
                    >
                      <motion.button
                        onClick={() => handleSelect(idx)}
                        className={`w-16 h-16 rounded-full shadow-lg flex items-center justify-center text-2xl transition-all ${
                          idx === selectedIndex
                            ? "bg-white scale-125 ring-4 ring-orange-500"
                            : "bg-white/80 hover:bg-white"
                        }`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        style={{fontSize: '15px', width: '87px', height: '87px', fontWeight: '800'}}
                      >
                        {industry.icon}
                      </motion.button>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Rotation Controls */}
              <div className="absolute -bottom-24 md:-bottom-16 left-1/2 transform -translate-x-1/2 flex gap-4">
                <motion.button
                  onClick={() => handleRotate("left")}
                  className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-lg font-bold text-slate-900 hover:bg-orange-500 hover:text-white transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  ←
                </motion.button>
                <motion.button
                  onClick={() => handleRotate("right")}
                  className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-lg font-bold text-slate-900 hover:bg-orange-500 hover:text-white transition-all"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  →
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Right: Industry Info */}
          <motion.div
            className="text-white"
            key={selected.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-poppins font-bold text-5xl md:text-6xl mb-4">
              {selected.name}
            </h2>
            <p className="text-xl mb-8 opacity-90">{selected.description}</p>

            <div className="space-y-4">
              {[
                "Soluções customizadas",
                "Expertise comprovada",
                "Suporte 24/7",
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                >
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>

            <motion.button
              onClick={() => {
                const routeMap: Record<string, string> = {
                  services: "/servicos",
                  disciplines: "/disciplinas",
                  segments: "/segmentos",
                  about: "/sobre",
                  contact: "/contato",
                  eletrica: "/eletrica",
                };
                navigate(routeMap[selected.id]);
              }}
              className="mt-8 px-8 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-orange-500 hover:text-white transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Saiba Mais
            </motion.button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
