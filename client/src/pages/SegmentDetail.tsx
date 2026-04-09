/**
 * SegmentDetail Page - Masterplan Projetos
 * 
 * Design: Industrial Professional
 * - Exibição detalhada de segmento
 * - Conteúdo explicativo e ilustrativo
 * - Navegação entre segmentos
 */

import { useRoute } from "wouter";
import { SEGMENTS } from "@/../../shared/const";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function SegmentDetail() {
  const [match, params] = useRoute("/segmento/:id");

  if (!match) {
    return null;
  }

  const segment = SEGMENTS.find((s) => s.id === params?.id);

  if (!segment) {
    return (
      <main className="min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">
            Segmento não encontrado
          </h1>
          <Link href="/segmentos">
            <Button>Voltar para Segmentos</Button>
          </Link>
        </div>
      </main>
    );
  }

  const currentIndex = SEGMENTS.findIndex((s) => s.id === segment.id);
  const prevSegment = currentIndex > 0 ? SEGMENTS[currentIndex - 1] : null;
  const nextSegment = currentIndex < SEGMENTS.length - 1 ? SEGMENTS[currentIndex + 1] : null;

  const getSegmentContent = (segmentId: string) => {
    const contents: Record<string, { overview: string; challenges: string[]; solutions: string[]; benefits: string[] }> = {
      "oleo-gas": {
        overview: "A cadeia de produção de óleo e gás representa um dos setores mais estratégicos da matriz energética brasileira, exigindo alto grau de especialização técnica e soluções de engenharia robustas. Atuamos em todas as fases do ciclo produtivo — exploração, extração, processamento e refino, Masterplan vem realizando projetos de engenharia multidisciplinar que atendem tanto instalações Offshore quanto Onshore. Estes serviços incluem o desenvolvimento de unidades de produção, redes de tubulação, sistemas de separação e tratamento de fluidos, utilidades, infraestrutura de apoio, entre outros.",
        challenges: [
          "Ambientes extremos e hostis (offshore, profundidades)",
          "Conformidade com regulamentações internacionais (ANP, IMCA, DNV)",
          "Integração de múltiplas disciplinas de engenharia",
          "Otimização de custos operacionais",
        ],
        solutions: [
          "Projetos de plataformas offshore e onshore",
          "Sistemas de produção e processamento",
          "Infraestrutura de transporte e armazenamento",
          "Adequação regulatória e compliance",
        ],
        benefits: [
          "Aumento de produtividade operacional",
          "Redução de riscos e paradas não planejadas",
          "Conformidade total com regulamentações",
          "Otimização de investimentos em capital",
        ],
      },
      "distribuicao": {
        overview: "A infraestrutura de armazenagem e distribuição de combustíveis líquidos é essencial para a segurança energética e a fluidez logística do país. Nesse contexto, a Masterplan atua no desenvolvimento de projetos para terminais e bases de distribuição, abrangendo desde plataformas de carregamento rodoviário, ferroviário e marítimo envolvendo sistemas de bombeamento e medição, drenagem oleosa e pluvial, redes de tubulação, bacias de contenção, tanques de armazenamento, instalações elétricas, instrumentação e automação industrial, além de estruturas civis e acessos logísticos.",
        challenges: [
          "Segurança no manuseio de produtos perigosos",
          "Otimização de fluxos logísticos",
          "Conformidade com regulamentações ambientais",
          "Integração de sistemas de automação",
        ],
        solutions: [
          "Design de terminais de distribuição",
          "Sistemas de bombeamento e transferência",
          "Infraestrutura de armazenamento",
          "Automação e controle de processos",
        ],
        benefits: [
          "Aumento de capacidade operacional",
          "Redução de perdas e desperdícios",
          "Melhor rastreabilidade de produtos",
          "Conformidade ambiental garantida",
        ],
      },
      "biocombustiveis": {
        overview: "A manutenção e montagem de sistemas elétricos industriais exigem conhecimento técnico especializado, domínio das normas de segurança e rigor na execução conforme o projeto. Quando corretamente realizadas, essas atividades garantem a confiabilidade das instalações, reduzem falhas operacionais e prolongam a vida útil dos equipamentos. Além disso, asseguram conformidade com exigências legais e proporcionam ganhos em eficiência energética. A Masterplan realiza a montagem e manutenção de subestacões, painéis de distribuição, quadros de comando, sistemas de automação, geração de emergência, SPDA e fontes renováveis. Com equipes experientes, a Masterplan entrega soluções que aliam segurança, desempenho e redução de custos operacionais para seus clientes.",
        challenges: [
          "Otimização de processos de conversão",
          "Sustentabilidade ambiental",
          "Conformidade com padrões de qualidade",
          "Escalabilidade de produção",
        ],
        solutions: [
          "Projetos de plantas de biodiesel e etanol",
          "Sistemas de processamento de biomassa",
          "Infraestrutura de armazenamento e distribuição",
          "Integração de energias renováveis",
        ],
        benefits: [
          "Redução de emissões de carbono",
          "Viabilidade econômica comprovada",
          "Conformidade com regulamentações ambientais",
          "Contribuição para sustentabilidade",
        ],
      },
      "asfalto": {
        overview: "O setor de fabricação e distribuição de produtos asfálticos desempenha um papel estratégico na cadeia produtiva da infraestrutura nacional. Nesse contexto, os projetos de engenharia multidisciplinar aplicados ao setor ganham relevância decisiva. Soluções integradas de engenharia multidisciplinar que envolve desde o projeto civil e mecânico, automação, elétrica, instrumentação e segurança industrial são indispensáveis para garantir eficiência operacional, sustentabilidade e conformidade regulatória nas unidades de produção e distribuição.",
        challenges: [
          "Manutenção de qualidade do produto",
          "Controle de temperatura em processos",
          "Otimização de custos de produção",
          "Conformidade com especificações técnicas",
        ],
        solutions: [
          "Projetos de usinas de asfalto",
          "Sistemas de aquecimento e mistura",
          "Infraestrutura de armazenamento",
          "Controle de qualidade automatizado",
        ],
        benefits: [
          "Qualidade consistente do produto",
          "Redução de desperdícios",
          "Aumento de produtividade",
          "Conformidade com especificações",
        ],
      },
      "adequacoes": {
        overview: "A conformidade regulatória é um fator determinante para a continuidade operacional e a segurança nas instalações que compõem a cadeia de petróleo, gás natural e biocombustíveis. Atuando de forma especializada na adequação de plantas industriais, terminais e bases de distribuição aos requerimentos técnicos e legais estabelecidos pela Agência Nacional do Petróleo, Gás Natural e Biocombustíveis (ANP), A Masterplan oferece suporte completo — desde o levantamento de campo e diagnóstico técnico, passando por projetos de adequação multidisciplinar, até a emissão de toda a documentação técnica exigida, como plantas técnicas, cortes de bacias de contenção, folhas de dados de tanques, memoriais descritivos, memórias de cálculo, verificações elétricas e relatórios de conformidade.",
        challenges: [
          "Atualização de sistemas existentes",
          "Conformidade com novas regulamentações",
          "Minimização de paradas operacionais",
          "Otimização de investimentos",
        ],
        solutions: [
          "Análise de conformidade regulatória",
          "Projetos de adequação e modernização",
          "Implementação de melhorias operacionais",
          "Documentação técnica completa",
        ],
        benefits: [
          "Conformidade regulatória garantida",
          "Redução de riscos operacionais",
          "Melhoria de eficiência operacional",
          "Proteção de investimentos",
        ],
      },
    };

    return contents[segmentId] || {
      overview: "Segmento de atuação especializado",
      challenges: [],
      solutions: [],
      benefits: [],
    };
  };

  const content = getSegmentContent(segment.id);

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section with Image */}
      <section className="relative h-96 overflow-hidden">
        {segment.image && (
          <img
            src={segment.image}
            alt={segment.title}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 to-blue-900/80 flex flex-col justify-between p-8">
          <div>
            <Link href="/segmentos">
              <Button variant="outline" className="mb-6 border-white text-white hover:bg-white/10">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Voltar
              </Button>
            </Link>
          </div>
          <div className="container pb-0">
            <h1 className="font-poppins font-bold text-5xl md:text-6xl text-white mb-4">
              {segment.title}
            </h1>
            <p className="text-xl text-white/90 max-w-2xl">
              {segment.description}
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-4xl">
          <h2 className="font-poppins font-bold text-4xl text-slate-900 mb-8">
            Visão Geral
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed mb-8">
            {content.overview}
          </p>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="font-poppins font-bold text-4xl text-slate-900 mb-8">
            Desafios do Segmento
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.challenges.map((challenge, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-lg border-l-4 border-orange-500"
              >
                <p className="text-slate-700 text-lg font-semibold">
                  {challenge}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-4xl">
          <h2 className="font-poppins font-bold text-4xl text-slate-900 mb-8">
            Nossas Soluções
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.solutions.map((solution, idx) => (
              <div
                key={idx}
                className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-700"
              >
                <p className="text-slate-700 text-lg font-semibold">
                  {solution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-50 to-slate-50">
        <div className="container max-w-4xl">
          <h2 className="font-poppins font-bold text-4xl text-slate-900 mb-8">
            Benefícios
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.benefits.map((benefit, idx) => (
              <div key={idx} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-700 text-white">
                    <span className="text-lg font-bold">✓</span>
                  </div>
                </div>
                <div>
                  <p className="text-slate-700 text-lg font-semibold">
                    {benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-4xl text-center">
          <h2 className="font-poppins font-bold text-4xl text-slate-900 mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-xl text-slate-700 mb-8 max-w-2xl mx-auto">
            Entre em contato conosco para discutir como podemos ajudar seu projeto
          </p>
          <a 
            href="https://wa.me/5521964013871?text=Olá%2C%20gostaria%20de%20saber%20mais%20sobre%20soluções%20para%20o%20segmento%20de%20atuação." 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <Button className="bg-blue-700 hover:bg-blue-800 px-8 py-3 text-lg">
              Solicitar Proposta
            </Button>
          </a>
        </div>
      </section>

      {/* Navigation Section */}
      <section className="py-16 md:py-24 bg-slate-50 border-t border-slate-200">
        <div className="container max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {prevSegment && (
              <Link href={`/segmento/${prevSegment.id}`}>
                <Button
                  variant="outline"
                  className="w-full border-slate-300 text-slate-700 hover:bg-slate-100 flex items-center justify-start gap-2"
                >
                  <ArrowLeft className="w-4 h-4" />
                  {prevSegment.title}
                </Button>
              </Link>
            )}
            {!prevSegment && <div />}
            {nextSegment && (
              <Link href={`/segmento/${nextSegment.id}`}>
                <Button
                  variant="outline"
                  className="w-full border-slate-300 text-slate-700 hover:bg-slate-100 flex items-center justify-end gap-2"
                >
                  {nextSegment.title}
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            )}
            {!nextSegment && <div />}
          </div>
        </div>
      </section>
    </main>
  );
}
