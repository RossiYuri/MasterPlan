/**
 * Elétrica Page - Masterplan Projetos
 * 
 * Design: Industrial Minimalist
 * - Destaque para serviços de instalação elétrica
 * - Informações técnicas e especificações
 * - Galeria de imagens de projetos
 */

import { ArrowRight, CheckCircle, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export default function Eletrica() {
  const services = [
    {
      title: "Projeto e Montagem de Instalações Elétricas",
      description:
        "Projeto e Montagem de instalações elétricas em Alta Tensão e Baixa Tensão compreendendo",
      items: [
        "Subestações",
        "Estudos de Engenharia para Sistemas de Energia Elétrica",
        "Análise de Distribuição de Energia",
        "Especificações de Energia de Grande e Pequeno Porte",
        "Correção Automática do Fator de potência",
        "Proteção Secundária de Sobre Corrente",
        "Operação e Manutenção de Sistemas",
        "Projeto de Energia Padrão Light- Ampla Cemig- Eletropaulo e etc",
        "Estudos de Engenharia para Conservação de Energia",
        "Instalações elétricas em Geral",
        "Sistemas de Proteção Atmosféricos (SPDA)",
        "Laudos - Revisões e Adequações de NR10",
      ],
    },
  ];

  const images = [
    {
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663469303163/MH3S9ZkEHU42LjpRub2zce/eletrica-quadro-comando-YMrbLDAmVVN6av85E2quC4.webp",
      title: "Quadro de Comando e Distribuição",
      description: "Painel de controle elétrico industrial com circuitos e proteções",
    },
    {
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663469303163/MH3S9ZkEHU42LjpRub2zce/eletrica-transformador-XSj4K26XvGiM9me5Ff6EzF.webp",
      title: "Transformador de Potência",
      description: "Transformador industrial para distribuição de energia elétrica",
    },
    {
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663469303163/MH3S9ZkEHU42LjpRub2zce/eletrica-instalacao-campo-bYViC5wb9WWMynVPfDDE68.webp",
      title: "Instalação em Campo",
      description: "Trabalho de instalação elétrica em ambiente industrial",
    },
    {
      url: "https://d2xsxph8kpxj0f.cloudfront.net/310519663469303163/MH3S9ZkEHU42LjpRub2zce/eletrica-poste-energia-TsqEFQqgXXhrbyduvFymR9.webp",
      title: "Distribuição de Energia",
      description: "Infraestrutura de distribuição de energia em alta tensão",
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16 md:py-24">
        <div className="container">
          <div className="flex items-center gap-4 mb-6">
            <Zap className="w-10 h-10 text-orange-500 shrink-0" />
  
            <h1 className="font-poppins font-bold text-5xl md:text-7xl flex items-baseline gap-3 flex-wrap">
              <span>Elétrica</span>
              <span className="text-2xl md:text-3xl font-normal text-gray-300">
                Industrial e Predial
              </span>
            </h1>
          </div>
          <p className="text-xl md:text-2xl opacity-90 max-w-3xl">
            Soluções completas em instalações elétricas industriais e prediais,
            com foco em performance, segurança e conformidade normativa
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 md:py-12 bg-white">
        <div className="container">
          {services.map((service, idx) => (
            <div key={idx} className="mb-16">
              {/* Title - Full Width */}
              <div className="mb-12">
                <h2 className="font-poppins font-bold text-4xl md:text-5xl text-slate-900 mb-6">
                  {service.title}
                </h2>
                <p className="text-lg text-slate-700 leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Topics and Images - Side by Side */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left Side - Topics */}
                <div className="space-y-4">
                  {service.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <p className="text-slate-700 text-base">{item}</p>
                    </div>
                  ))}
                </div>

                {/* Right Side - Images */}
                <div className="grid grid-cols-1 gap-6">
                  {idx === 0 ? (
                    <>
                      <div className="overflow-hidden rounded-lg shadow-lg">
                        <img
                          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663469303163/MH3S9ZkEHU42LjpRub2zce/eletrica-cabeamento-FCHgSbcBPCMkdDTk7vaDuY.webp"
                          alt="Cabeamento Elétrico"
                          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="overflow-hidden rounded-lg shadow-lg">
                        <img
                          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663469303163/MH3S9ZkEHU42LjpRub2zce/eletrica-painel-controle-6PvdJ5AZw7GNeC5WHTBiVU.webp"
                          alt="Painel de Controle"
                          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="overflow-hidden rounded-lg shadow-lg">
                        <img
                          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663469303163/MH3S9ZkEHU42LjpRub2zce/eletrica-quadro-comando-Gw5LxKqX7WZfZWkK2tKcqc.webp"
                          alt="Quadro de Comando"
                          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                      <div className="overflow-hidden rounded-lg shadow-lg">
                        <img
                          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663469303163/MH3S9ZkEHU42LjpRub2zce/eletrica-transformador-Kx8NqR3pJ9Yd2mL4vWxZ5a.webp"
                          alt="Transformador"
                          className="w-full h-64 object-cover hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Specifications */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-slate-900 mb-12 text-center">
            Especificações Técnicas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Sistemas de Energia Elétrica",
                items: [
                  "Alta Tensão (AT)",
                  "Média Tensão (MT)",
                  "Baixa Tensão (BT)",
                  "Sistemas de Distribuição",
                ],
              },
              {
                title: "Proteção e Segurança",
                items: [
                  "Proteção contra Sobrecarga",
                  "Proteção contra Curto-circuito",
                  "Aterramento e Equipotencialização",
                  "SPDA (Sistema de Proteção contra Descargas Atmosféricas)",
                ],
              },
              {
                title: "Eficiência Energética",
                items: [
                  "Análise de Consumo",
                  "Correção do Fator de Potência",
                  "Otimização de Distribuição",
                  "Estudos de Conservação de Energia",
                ],
              },
              {
                title: "Conformidade Normativa",
                items: [
                  "NBR 5410 - Instalações Elétricas",
                  "NBR 5419 - SPDA",
                  "NR-10 - Segurança em Eletricidade",
                  "Normas Concessionárias (Light, Cemig, Eletropaulo)",
                ],
              },
            ].map((spec, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-8 rounded-lg border-l-4 border-blue-700"
              >
                <h3 className="font-poppins font-bold text-2xl text-slate-900 mb-6">
                  {spec.title}
                </h3>
                <ul className="space-y-3">
                  {spec.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 py-16 md:py-24 text-white">
        <div className="container text-center">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
            Pronto para Eletrificar seu Projeto?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Solicite uma proposta e descubra como nossos serviços de elétrica
            podem agregar valor ao seu projeto
          </p>
          <Button
            onClick={() => {
              window.open(
                'https://wa.me/5521964013871?text=Olá%2C%20gostaria%20de%20solicitar%20uma%20proposta%20para%20serviços%20de%20elétrica.',
                '_blank'
              );
            }}
            className="bg-white text-blue-700 hover:bg-slate-100 px-8 py-3 font-bold"
          >
            Solicitar Proposta
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </section>


    </main>
  );
}
