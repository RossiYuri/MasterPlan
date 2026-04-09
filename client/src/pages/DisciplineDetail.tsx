/**
 * Discipline Detail Page - Masterplan Projetos
 * 
 * Design: Industrial Minimalist
 * - Página específica para cada disciplina
 * - Layout padronizado
 * - Descrição detalhada e competências
 */

import { useRoute } from "wouter";
import { DISCIPLINES } from "@/../../shared/const";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function DisciplineDetail() {
  const [match, params] = useRoute("/disciplina/:id");

  if (!match) return null;

  const discipline = DISCIPLINES.find(d => d.id === params?.id);

  if (!discipline) {
    return (
      <main className="min-h-screen pt-20">
        <div className="container py-16 md:py-24 text-center">
          <h1 className="font-poppins font-bold text-4xl text-slate-900 mb-4">
            Disciplina não encontrada
          </h1>
          <Link href="/disciplinas">
            <Button className="mt-6">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Voltar para Disciplinas
            </Button>
          </Link>
        </div>
      </main>
    );
  }

  const competencies = getDisciplineCompetencies(discipline.id);
  const detailedDescription = getDisciplineDetailedDescription(discipline.id);

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16 md:py-24">
        <div className="container">
          <Link href="/disciplinas">
            <Button variant="outline" className="mb-6 border-white text-white hover:bg-white/10">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <h1 className="font-poppins font-bold text-5xl md:text-6xl mb-6">
            {discipline.title}
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl">
            {discipline.description}
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left: Description */}
            <div className="lg:col-span-2">
              <h2 className="font-poppins font-bold text-4xl text-slate-900 mb-6">
                Sobre esta Disciplina
              </h2>
              
              <div className="space-y-6 mb-8">
                <p className="text-lg text-slate-700 leading-relaxed">
                  {detailedDescription.intro}
                </p>
                {detailedDescription.projects && (
                  <div>
                    <h3 className="font-poppins font-bold text-xl text-slate-900 mb-3">
                      Projetos de {discipline.title}:
                    </h3>
                    <p className="text-lg text-slate-700 leading-relaxed">
                      {detailedDescription.projects}
                    </p>
                  </div>
                )}
              </div>

              <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-700 mb-8">
                <h3 className="font-poppins font-bold text-2xl text-slate-900 mb-4">
                  Competências Principais
                </h3>
                <ul className="space-y-3">
                  {competencies.map((comp, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-sm font-bold">✓</span>
                      </div>
                      <span className="text-lg text-slate-700">{comp}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <h3 className="font-poppins font-bold text-2xl text-slate-900 mb-6">
                Aplicações Práticas
              </h3>
              <p className="text-lg text-slate-700 mb-6 leading-relaxed">
                A disciplina de {discipline.title.toLowerCase()} é essencial para garantir a qualidade, segurança e conformidade de projetos industriais. Nossa equipe possui expertise comprovada em aplicações práticas dessa disciplina, com soluções customizadas para cada segmento.
              </p>
            </div>

            {/* Right: Sidebar */}
            <div>
              <div className="bg-gradient-to-br from-slate-50 to-white p-8 rounded-lg border border-slate-200 sticky top-24">
                <h3 className="font-poppins font-bold text-xl text-slate-900 mb-4">
                  Precisa de Expertise?
                </h3>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  Conte com nossa equipe especializada em {discipline.title.toLowerCase()} para transformar seu projeto em realidade.
                </p>
                <a 
                  href="https://wa.me/5521964013871?text=Olá%2C%20gostaria%20de%20solicitar%20uma%20proposta%20para%20a%20disciplina%20de%20" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button className="w-full bg-blue-700 hover:bg-blue-800">
                    Solicitar Proposta
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>

                <div className="mt-8 pt-8 border-t border-slate-200">
                  <h4 className="font-poppins font-bold text-slate-900 mb-4">
                    Outras Disciplinas
                  </h4>
                  <div className="space-y-2">
                    {DISCIPLINES.filter(d => d.id !== discipline.id).map((d) => (
                      <Link key={d.id} href={`/disciplina/${d.id}`}>
                        <button className="w-full text-left px-4 py-2 rounded hover:bg-blue-50 text-slate-700 hover:text-blue-700 transition-all">
                          {d.title}
                        </button>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-slate-900 mb-12 text-center">
            Integração com Outras Disciplinas
          </h2>

          <p className="text-lg text-slate-700 mb-8 text-center max-w-3xl mx-auto leading-relaxed">
            A força da Masterplan está na integração perfeita entre todas as disciplinas de engenharia. A disciplina de {discipline.title.toLowerCase()} trabalha em conjunto com outras áreas para garantir soluções holísticas e otimizadas.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DISCIPLINES.filter(d => d.id !== discipline.id).slice(0, 3).map((d) => (
              <div key={d.id} className="bg-white p-6 rounded-lg border border-slate-200 hover:shadow-lg transition-all">
                <h3 className="font-poppins font-bold text-lg text-slate-900 mb-2">
                  {d.title}
                </h3>
                <p className="text-slate-700 mb-4">{d.description}</p>
                <Link href={`/disciplina/${d.id}`}>
                  <button className="text-blue-700 font-semibold hover:text-blue-900 flex items-center gap-2">
                    Saiba Mais
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 py-16 md:py-24 text-white">
        <div className="container text-center">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
            Transforme Seu Projeto
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Combine expertise em {discipline.title.toLowerCase()} com nossa equipe multidisciplinar
          </p>
          <a 
            href="https://wa.me/5521964013871?text=Olá%2C%20gostaria%20de%20solicitar%20uma%20proposta." 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-white text-blue-700 hover:bg-slate-100 px-8 py-3 font-bold">
              Entrar em Contato
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

function getDisciplineDetailedDescription(disciplineId: string): { intro: string; projects: string } {
  const descriptions: Record<string, { intro: string; projects: string }> = {
    processo: {
      intro: "É a disciplina responsável pela definição de parâmetros, projeto de equipamentos, adequações e elaboração de um processo industrial completo, tendo como embasamento conhecimentos em química, física, operações unitárias, termodinâmica e fenômenos de transferência.",
      projects: "Definição/atualização de fluxogramas de engenharia e processo (PFD's e P&ID's), Transferências de produtos, fabricação de asfaltos, carregamento e descarregamento de caminhões-tanque, sistemas de remoção de areia, entre outros."
    },
    mecanica: {
      intro: "Utilizando-se do conhecimento de princípios físicos e de materiais, esta disciplina tem como responsabilidade a elaboração de sistemas mecânicos envolvendo a concepção, produção e operação de maquinários e ferramentas, como bombas e motores, por exemplo, incluindo equipamentos rotativos e estáticos.",
      projects: "Novos tanques de armazenamento de combustíveis e água, especificação de bombas, etc."
    },
    tubulacao: {
      intro: "É o ramo da engenharia responsável pelo projeto detalhado, construção, operação e manutenção de tubos isolados ou de uma rede completa de tubulações. Análise de escoamentos, dimensões e tensões dos tubos ou dutos, assim como a escolha do material a ser fabricado também fazem parte das atividades da área.",
      projects: "Estudo hidráulico, análise de flexibilidade, heat tracing, entre outros."
    },
    eletrica: {
      intro: "É o ramo da engenharia responsável pela aplicação e elaboração de estudos de eletricidade e eletromagnetismo a sistemas elétricos, garantindo a correta geração, transmissão e/ou distribuição de energia elétrica em uma indústria ou empreendimento.",
      projects: "Projetos de geração, de distribuição, iluminação, aterramento e de SPDA (Sistema de Proteção contra Descargas Atmosféricas)."
    },
    estruturas: {
      intro: "Esta disciplina abrange desde a concepção até a construção, entretanto, de materiais e estruturas metálicas, como telhados e coberturas, chapas, passarelas, andaimes, trilhos, pipe-racks, entre outras estruturas.",
      projects: "Plataformas de carregamento/descarregamento de CT's, trava-quedas, reforço estrutural (laydown área), escadas e passarelas de acesso, guarda-corpos, etc."
    },
    civil: {
      intro: "É o ramo da engenharia que abrange desde a concepção até a construção ou manutenção de um empreendimento, seja prédios, pontes, túneis ou quaisquer outras estruturas, visando sempre o bem-estar da sociedade e preservação do meio ambiente.",
      projects: "Edificações, bases de equipamentos, taludes de bacias de tanques, suportes de tubulação, estudos de layout, etc."
    }
  };
  return descriptions[disciplineId] || { intro: "Disciplina técnica especializada", projects: "" };
}
