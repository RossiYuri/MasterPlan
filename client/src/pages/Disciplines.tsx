/**
 * Disciplines Page - Masterplan Projetos
 * 
 * Design: Industrial Minimalist
 * - Exibição de todas as disciplinas técnicas
 * - Cards com cores diferentes por disciplina
 * - Descrição de capacidades
 */

import { DISCIPLINES } from "@/../../shared/const";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import { GlowCard } from "@/components/ui/spotlight-card";
import simboloDisciplinas from "./images/disciplinas-simbolo.png";

export default function Disciplines() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16 md:py-24">
        <div className="container">
          <div className="mb-6 flex items-center gap-0 -ml-8 md:-ml-16">
            <img
              src={simboloDisciplinas}
              alt="Símbolo disciplinas"
              className="w-[84px] h-[84px] md:w-[128px] md:h-[128px] object-contain shrink-0"
            />

            <h1 className="font-poppins font-bold text-5xl md:text-6xl leading-none -ml-4 md:-ml-6">
              Disciplinas Técnicas
            </h1>
          </div>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl">
            Capacidade técnica completa em múltiplas disciplinas de engenharia
          </p>
        </div>
      </section>

      {/* Disciplines Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DISCIPLINES.map((discipline) => (
              <div
                key={discipline.id}
                className="bg-gradient-to-br from-slate-50 to-white border-l-4 border-blue-700 p-8 rounded-lg hover:shadow-lg transition-all duration-300 hover:translate-y-[-4px]"
              >
                <h3 className="font-poppins font-bold text-2xl text-slate-900 mb-3">
                  {discipline.title}
                </h3>
                <p className="text-slate-700 text-lg mb-6 leading-relaxed">
                  {discipline.description}
                </p>

                <div className="space-y-2 mb-6">
                  <h4 className="font-poppins font-bold text-slate-900 text-sm">
                    Competências:
                  </h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    {getDisciplineCompetencies(discipline.id).map((comp, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-blue-700 font-bold mt-0.5">•</span>
                        <span>{comp}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link href={`/disciplina/${discipline.id}`}>
                  <Button
                    variant="outline"
                    className="w-full border-blue-700 text-blue-700 hover:bg-blue-50"
                  >
                    Saiba Mais
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-slate-900 mb-12 text-center">
            Integração Multidisciplinar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                A força da Masterplan está na integração perfeita entre todas as
                disciplinas de engenharia. Nossos projetos não são silos isolados, mas
                soluções holísticas onde cada disciplina contribui para o sucesso geral.
              </p>

              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                Essa abordagem integrada garante:
              </p>

              <ul className="space-y-3">
                {[
                  "Otimização de custos e prazos",
                  "Redução de conflitos de projeto",
                  "Melhor qualidade final",
                  "Conformidade total com normas",
                  "Facilidade de manutenção futura",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <span className="text-lg text-slate-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <GlowCard
              glowColor="blue"
              customSize={true}
              className="w-full bg-white"
            >
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663469303163/MH3S9ZkEHU42LjpRub2zce/Gemini_Generated_Image_kqeznlkqeznlkqez_43d82f4e.png"
                alt="Integração Multidisciplinar"
                className="w-full h-auto rounded-lg"
              />
            </GlowCard>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 py-16 md:py-24 text-white">
        <div className="container text-center">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
            Precisa de Expertise Multidisciplinar?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Conte com nossa equipe de especialistas para transformar seu projeto em
            realidade
          </p>
          <a
            href="https://wa.me/5521964013871?text=Olá%2C%20gostaria%20de%20solicitar%20uma%20proposta%20para%20nosso%20projeto."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-white text-blue-700 hover:bg-slate-100 px-8 py-3 font-bold">
              Solicitar Proposta
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </div>
      </section>
    </main>
  );
}

function getDisciplineCompetencies(disciplineId: string): string[] {
  const competencies: Record<string, string[]> = {
    processo: [
      "Simulação de processos",
      "Otimização de fluxos",
      "Balanço de massa e energia",
    ],
    mecanica: [
      "Projeto de equipamentos",
      "Análise de tensões",
      "Seleção de materiais",
    ],
    tubulacao: [
      "Design de sistemas",
      "Especificação de tubos",
      "Análise de fluxo",
    ],
    eletrica: [
      "Projetos de potência",
      "Distribuição elétrica",
      "Proteção de sistemas",
    ],
    estruturas: [
      "Projeto de estruturas",
      "Análise estrutural",
      "Dimensionamento",
    ],
    civil: [
      "Projetos de concreto",
      "Fundações",
      "Estruturas de suporte",
    ],

  };
  return competencies[disciplineId] || ["Competências técnicas especializadas"];
}
