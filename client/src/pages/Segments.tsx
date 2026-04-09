/**
 * Segments Page - Masterplan Projetos
 * 
 * Design: Industrial Minimalist
 * - Exibição de segmentos de atuação
 * - Cards com descrições detalhadas
 * - Casos de uso por segmento
 */

import { SEGMENTS } from "@/../../shared/const";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";
import simboloSegmentos from "./images/segmentos-simbolo.png";

export default function Segments() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16 md:py-24">
        <div className="container">
          <div className="mb-6 flex items-center gap-4 -ml-8 md:-ml-14">
            <img
              src={simboloSegmentos}
              alt="Símbolo segmentos"
              className="w-[90px] h-[90px] md:w-[114px] md:h-[114px] object-contain shrink-0"
            />

            <h1 className="font-poppins font-bold text-5xl md:text-6xl leading-none -ml-4 md:-ml-6">
              Segmentos de Atuação
            </h1>
          </div>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl">
            Expertise em múltiplos setores industriais
          </p>
        </div>
      </section>

      {/* Segments Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container flex justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
            {SEGMENTS.map((segment) => (
              <div
                key={segment.id}
                className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] flex flex-col h-full"
              >
                {segment.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={segment.image}
                      alt={segment.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="font-poppins font-bold text-2xl text-slate-900 mb-2">
                    {segment.title}
                  </h3>

                  <p className="text-slate-700 text-lg mb-6 leading-relaxed flex-1">
                    {segment.description}
                  </p>

                  <div className="bg-blue-50 p-4 rounded border border-blue-200 mb-6">
                    <h4 className="font-poppins font-bold text-slate-900 mb-2">
                      Soluções Oferecidas:
                    </h4>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {getSegmentSolutions(segment.id).map((solution, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-blue-700 font-bold mt-0.5">•</span>
                          <span>{solution}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={`/segmento/${segment.id}`}>
                    <Button
                      variant="outline"
                      className="w-full border-blue-700 text-blue-700 hover:bg-blue-50"
                    >
                      Saiba Mais
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 py-16 md:py-24 text-white">
        <div className="container text-center">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
            Seu Segmento Aqui?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Independente do seu segmento industrial, temos expertise para entregar
            resultados
          </p>
          <a href="https://wa.me/5521964013871?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20proposta%20para%20nosso%20projeto." target="_blank" rel="noopener noreferrer">
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

function getSegmentSolutions(segmentId: string): string[] {
  const solutions: Record<string, string[]> = {
    "oleo-gas": [
      "Projetos de plataformas",
      "Sistemas de produção",
      "Pipelines e tubulações",
      "Automação de poços",
    ],
    distribuicao: [
      "Terminais de armazenamento",
      "Sistemas de bombeamento",
      "Automação de distribuição",
      "Conformidade regulatória",
    ],
    biocombustiveis: [
      "Plantas de produção",
      "Sistemas de fermentação",
      "Processamento e refino",
      "Adequação ambiental",
    ],
    asfalto: [
      "Usinas de asfalto",
      "Sistemas de aquecimento",
      "Controle de qualidade",
      "Automação de processos",
    ],
    adequacoes: [
      "Análise de conformidade",
      "Projetos de adequação",
      "Certificação ANP",
      "Documentação técnica",
    ],
  };
  return solutions[segmentId] || ["Soluções técnicas especializadas"];
}
