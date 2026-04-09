/**
 * Home Page - Masterplan Projetos
 * 
 * Design System Avançado:
 * - Hero com máscara SVG e parallax 3D
 * - Time Counter com atualização real
 * - Industry Carousel com navegação circular
 * - Seção de Clientes
 * - Liquid Fill Buttons
 * - Animações com Framer Motion
 */

import HeroSVGMask from "@/components/HeroSVGMask";
import TimeCounter from "@/components/TimeCounter";
import IndustryCarousel from "@/components/IndustryCarousel";
import LiquidFillButton from "@/components/LiquidFillButton";
import { GlowCard } from "@/components/ui/spotlight-card";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

/**Imagens das Logos */
import petrobrasLogo from "./images/petrobras.jpg";
import petrobrasdistribuidoraLogo from "./images/petrobras-distribuidora.jpg";
import transpetroLogo from "./images/transpetro.jpg";
import aibelLogo from "./images/aibel.jpg";
import engevixLogo from "./images/engevix.png";
import tbgLogo from "./images/tbg.jpg";
import forshipLogo from "./images/forship.jpg";
import lloydsRegisterLogo from "./images/lloyds-register.png";
import techlaborLogo from "./images/techlabor.jpg";
import bureauVeritasLogo from "./images/bureau-veritas.jpg";
import nuipLogo from "./images/nuip.png";
import absConsultingLogo from "./images/abs.jpg";
import projemarLogo from "./images/projemar.png";
import straturaLogo from "./images/stratura-asfaltos.png";

const clients = [
  { name: "Petrobras", logo: petrobrasLogo },
  { name: "Petrobras Distribuidora S.A.", logo: petrobrasdistribuidoraLogo },
  { name: "TransPetro", logo: transpetroLogo },
  { name: "Aibel", logo: aibelLogo },
  { name: "Engevix", logo: engevixLogo },
  { name: "TBG Transportadora Brasileira", logo: tbgLogo },
  { name: "ForShip", logo: forshipLogo },
  { name: "Lloyd's Register", logo: lloydsRegisterLogo },
  { name: "Techlabor", logo: techlaborLogo },
  { name: "Bureau Veritas", logo: bureauVeritasLogo },
  { name: "Nuip", logo: nuipLogo },
  { name: "ABS Consulting", logo: absConsultingLogo },
  { name: "Projemar", logo: projemarLogo },
  { name: "Stratura Asfaltos", logo: straturaLogo },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero with SVG Mask & Parallax */}
      <HeroSVGMask />

      {/* Time Counter - Micro-interaction */}
      <section className="py-0 bg-white">
        <TimeCounter />
      </section>

      {/* Industry Carousel - Circular Navigation */}
      <IndustryCarousel />

      {/* Clients Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container">
          <motion.h2
            className="font-poppins font-bold text-5xl md:text-6xl text-slate-900 mb-4 text-center dynamic-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Alguns Clientes
          </motion.h2>

          <motion.p
            className="text-center text-slate-600 text-lg mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Confiança de grandes empresas nacionais e internacionais
          </motion.p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {clients.map((client, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ translateY: -4 }}
                className="w-full h-full"
              >
                {/* Mobile: card estático */}
                <div className="md:hidden w-full h-28 bg-white rounded-lg border border-slate-200 shadow-md flex items-center justify-center">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-20 object-contain"
                    title={client.name}
                  />
                </div>

                {/* Desktop: glow card */}
                <div className="hidden md:block">
                  <GlowCard
                    glowColor="blue"
                    customSize={true}
                    className="w-full h-32 bg-white flex items-center justify-center"
                  >
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-w-full max-h-24 object-contain"
                      title={client.name}
                    />
                  </GlowCard>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 md:py-24 bg-white blueprint-grid">
        <div className="container relative z-10">
          <motion.h2
            className="font-poppins font-bold text-5xl md:text-6xl text-slate-900 mb-4 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Por que contratar a gente
          </motion.h2>

          <motion.p
            className="text-center text-slate-600 text-lg mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Somos referência em engenharia multidisciplinar com mais de 25 anos de experiência
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Expertise Comprovada",
                description: "Mais de 25 anos de experiência em projetos complexos nos setores de óleo, gás e energia",
                icon: "🏆",
              },
              {
                title: "Equipe Multidisciplinar",
                description: "Profissionais especializados em diversas disciplinas de engenharia",
                icon: "👥",
              },
              {
                title: "Conformidade Regulatória",
                description: "Atendimento rigoroso a normas internacionais e regulamentações",
                icon: "✓",
              },
              {
                title: "Soluções Inovadoras",
                description: "Tecnologias de ponta e metodologias avançadas em engenharia",
                icon: "💡",
              },
              {
                title: "Suporte 24/7",
                description: "Disponibilidade contínua para atender suas necessidades",
                icon: "⏰",
              },
              {
                title: "Clientes Satisfeitos",
                description: "Confiança de grandes empresas nacionais e internacionais",
                icon: "⭐",
              },
            ].map((reason, idx) => (
              <motion.div
                key={idx}
                className="bg-gradient-to-br from-white to-slate-50 p-8 rounded-lg border-l-4 border-orange-500 hover:shadow-lg transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ translateY: -5 }}
              >
                <div className="text-4xl mb-4">{reason.icon}</div>
                <h3 className="font-poppins font-bold text-xl text-slate-900 mb-2">
                  {reason.title}
                </h3>
                <p className="text-slate-700">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Liquid Fill Button */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-slate-900 to-blue-900 text-white">
        <div className="container text-center">
          <motion.h2
            className="font-poppins font-bold text-4xl md:text-5xl mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Pronto para Transformar Seu Projeto?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-2xl mx-auto opacity-90"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Solicite uma proposta e descubra como nossa expertise pode levar seu
            projeto ao próximo nível
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a href="https://wa.me/5521964013871?text=Olá%2C%20gostaria%20de%20solicitar%20uma%20proposta." target="_blank" rel="noopener noreferrer">
              <LiquidFillButton variant="primary">
                Entrar em Contato
                <ArrowRight className="w-4 h-4" />
              </LiquidFillButton>
            </a>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
