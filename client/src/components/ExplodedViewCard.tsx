/**
 * Exploded View Card Component
 * 
 * Cards de projeto com efeito 3D
 * - Imagem, título e tags deslizam em velocidades diferentes
 * - Cria sensação de profundidade e tridimensionalidade
 * - Ativado ao scroll ou hover
 */

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface ExplodedViewCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  year: number;
}

export default function ExplodedViewCard({
  title,
  description,
  image,
  tags,
  year,
}: ExplodedViewCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const imageVariants = {
    hidden: { x: -50, opacity: 0, rotateY: -20 },
    visible: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      transition: { duration: 0.6 },
    },
    hover: {
      x: -20,
      transition: { duration: 0.3 },
    },
  };

  const contentVariants = {
    hidden: { x: 50, opacity: 0, rotateY: 20 },
    visible: {
      x: 0,
      opacity: 1,
      rotateY: 0,
      transition: { duration: 0.6, delay: 0.1 },
    },
    hover: {
      x: 20,
      transition: { duration: 0.3 },
    },
  };

  const tagsVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, delay: 0.2 },
    },
    hover: {
      y: -5,
      transition: { duration: 0.3 },
    },
  };

  return (
    <motion.div
      ref={cardRef}
      className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {/* Image - Exploded Left */}
        <motion.div
          className="relative h-64 md:h-full rounded-lg overflow-hidden"
          variants={imageVariants}
          animate={isHovered ? "hover" : "visible"}
        >
          <motion.img
            src={image}
            alt={title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-transparent" />
        </motion.div>

        {/* Content - Exploded Right */}
        <motion.div
          className="flex flex-col justify-between"
          variants={contentVariants}
          animate={isHovered ? "hover" : "visible"}
        >
          <div>
            <motion.div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="font-poppins font-bold text-2xl text-slate-900 mb-2">
                  {title}
                </h3>
                <p className="text-sm text-orange-500 font-semibold">{year}</p>
              </div>
            </motion.div>

            <p className="text-slate-700 mb-6 leading-relaxed">{description}</p>
          </div>

          {/* Tags - Exploded Down */}
          <motion.div
            className="flex flex-wrap gap-2"
            variants={tagsVariants}
            animate={isHovered ? "hover" : "visible"}
          >
            {tags.map((tag, idx) => (
              <motion.span
                key={idx}
                className="inline-block bg-gradient-to-r from-slate-100 to-slate-50 text-slate-700 text-xs font-semibold px-3 py-1 rounded-full border border-slate-200"
                whileHover={{
                  backgroundColor: "#FF8C00",
                  color: "white",
                  borderColor: "#FF8C00",
                }}
                transition={{ duration: 0.2 }}
              >
                {tag}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Blueprint Grid Overlay */}
      <div className="absolute inset-0 blueprint-grid opacity-5 pointer-events-none" />
    </motion.div>
  );
}
