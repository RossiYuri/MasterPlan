/**
 * Service Detail Page - Masterplan Projetos
 * 
 * Página de detalhes para cada serviço individual com layouts personalizados
 */

import { useRoute } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "wouter";

interface ServiceInfo {
  title: string;
  description: string;
  fullDescription: string;
  benefits: string[];
  applications: string[];
  disciplines: string[];
  image?: string;
}

interface DescriptionLayout {
  type: 'single' | 'two-column' | 'highlight-box' | 'card-list';
  fontSize?: string;
  fontWeight?: string;
  columns?: number;
}

const SERVICES_DETAIL: Record<string, ServiceInfo> = {
  "levantamento": {
    title: "Levantamento de Campo",
    description: "Coleta precisa de dados técnicos em campo para base de projetos",
    fullDescription: "O levantamento de campo é o primeiro passo para obter as informações necessárias para correta execução dos Projetos, Estudos e As Built.\nA Masterplan possui uma equipe de profissionais capacitados para atuarem nas mais diversas condições, obedecendo as normas aplicáveis e os requerimentos de segurança de seus clientes.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663469303163/MH3S9ZkEHU42LjpRub2zce/service-detail-levantamento-G2GHTtcVJFWu65JUKrLRmZ.webp",
    benefits: [
      "Dados precisos e confiáveis",
      "Documentação completa",
      "Redução de retrabalhos",
      "Base sólida para projetos",
    ],
    applications: [
      "Inspeção de instalações existentes",
      "Medições de campo",
      "Documentação técnica",
      "Análise de viabilidade",
    ],
    disciplines: ["Processo", "Mecânica", "Elétrica", "Civil"],
  },
  "conceitual": {
    title: "Projeto Conceitual",
    description: "Definição de conceitos e soluções técnicas preliminares",
    fullDescription: "O Projeto Conceitual trata da validação das escolhas feitas nos estudos preliminares, de forma a atender os requerimentos nas áreas de engenharia. Ele é a fase inicial na execução de um projeto de um produto ou instalação.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663469303163/MH3S9ZkEHU42LjpRub2zce/service-detail-conceitual-YqSwDEMnDyvAr35PLWiiVp.webp",
    benefits: [
      "Exploração de alternativas",
      "Redução de riscos",
      "Otimização de custos",
      "Aprovação de conceito",
    ],
    applications: [
      "Definição de escopo",
      "Análise de viabilidade técnica",
      "Seleção de tecnologias",
      "Estimativa preliminar de custos",
    ],
    disciplines: ["Processo", "Mecânica", "Estruturas"],
  },
  "basico": {
    title: "Projeto Básico",
    description: "Desenvolvimento de projetos básicos com especificações técnicas",
    fullDescription: "O Projeto Básico é a fase onde serão todas as características básicas do empreendimento, como os serviços, materiais e equipamentos, incluindo ainda definição dos primeiros layouts de engenharia, podendo ainda, quando requerido, incluir as previsão do prazo de execução e o custo global da obra.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663469303163/MH3S9ZkEHU42LjpRub2zce/service-detail-basico-SYPXRpabCfu6XydF8Ca2De.webp",
    benefits: [
      "Especificações técnicas completas",
      "Documentação detalhada",
      "Base para projeto executivo",
      "Aprovação regulatória",
    ],
    applications: [
      "Especificação de equipamentos",
      "Definição de processos",
      "Documentação técnica",
      "Análise de conformidade",
    ],
    disciplines: ["Processo", "Mecânica", "Elétrica", "Automação"],
  },
  "executivo": {
    title: "Projeto Executivo",
    description: "Projetos executivos detalhados prontos para implementação",
    fullDescription: "O Projeto Executivo trata do detalhamento de todas as disciplinas envolvidas bem como as especificações técnicas de equipamentos, layouts, listas de materiais, descritivos, desenhos e planilhas para perfeita execução do empreendimento.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663469303163/MH3S9ZkEHU42LjpRub2zce/service-detail-executivo-RD4gpXHoExcceoCJGBd8di.webp",
    benefits: [
      "Pronto para construção",
      "Detalhes construtivos completos",
      "Listas de materiais",
      "Procedimentos de instalação",
    ],
    applications: [
      "Construção e montagem",
      "Aquisição de equipamentos",
      "Planejamento de execução",
      "Controle de qualidade",
    ],
    disciplines: ["Processo", "Mecânica", "Elétrica", "Civil", "Instrumentação"],
  },
  "assistencia": {
    title: "Assistência Técnica",
    description: "Suporte técnico durante execução e implementação",
    fullDescription: "Consiste na análise técnica prévia da documentação dos fornecedores com a finalidade de garantir que as normas e especificações técnicas definidas no projeto estão sendo plenamente atendidas.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663469303163/MH3S9ZkEHU42LjpRub2zce/service-detail-assistencia-RhPjivw38PEZaKCdUm87p4.webp",
    benefits: [
      "Suporte especializado",
      "Resolução de problemas",
      "Conformidade com projeto",
      "Redução de atrasos",
    ],
    applications: [
      "Acompanhamento de obra",
      "Suporte técnico em campo",
      "Resolução de não-conformidades",
      "Documentação de execução",
    ],
    disciplines: ["Processo", "Mecânica", "Elétrica", "Civil"],
  },
  "asbuilt": {
    title: "As Built",
    description: "Documentação de projetos conforme executado",
    fullDescription: "As Built (ou \"Como Construído\") refere-se à documentação final que representa exatamente como um projeto foi executado, levando em consideração todas as alterações realizadas durante a construção em relação ao projeto original. Na engenharia, especialmente nas áreas de civil, elétrica, mecânica e industrial, o As Built é fundamental para registrar ajustes, modificações, substituições de materiais, realocação de elementos ou qualquer desvio do projeto inicial aprovado.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663469303163/MH3S9ZkEHU42LjpRub2zce/service-detail-asbuilt-6jcst7BXpc2Ro5RxybHVvW.webp",
    benefits: [
      "Registro preciso da construção",
      "Documentação de modificações",
      "Base para manutenção futura",
      "Conformidade regulatória",
    ],
    applications: [
      "Documentação pós-construção",
      "Registro de alterações",
      "Manuais de operação",
      "Conformidade com normas",
    ],
    disciplines: ["Processo", "Mecânica", "Elétrica", "Civil"],
  },
  "anp": {
    title: "Adequação ANP",
    description: "Conformidade com regulamentações ANP",
    fullDescription: "Qualquer alteração, reforma e/ou ampliação gera a necessidade de atualização de todos os documentos para adequação aos requerimentos e normas aplicáveis atuais conforme determinação da ANP (Agência Nacional do Petróleo).\nA Masterplan faz o acompanhamento completo da planta, gerando todos os documentos (Memórias de Cálculo, Memoriais Descritivos, Plantas, Fluxogramas e Diagramas) bem como pareceres técnicos e Laudos necessários para a adequação da planta aos novos requerimentos da ANP.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663469303163/MH3S9ZkEHU42LjpRub2zce/service-detail-anp-FGrZA3vXFgc6kPAkoQnfKV.webp",
    benefits: [
      "Conformidade regulatória",
      "Redução de riscos legais",
      "Operação autorizada",
      "Certificação ANP",
    ],
    applications: [
      "Análise de conformidade",
      "Implementação de melhorias",
      "Documentação regulatória",
      "Inspeções e auditorias",
    ],
    disciplines: ["Processo", "Segurança Industrial", "Automação"],
  },
  "montagem-comissionamento-manutencao": {
    title: "Montagem, Comissionamento e Manutenção",
    description: "Coordenação de montagem, testes de comissionamento e serviços de manutenção especializada",
    fullDescription: "A execução de serviços de manutenção e montagem de sistemas elétricos e de automação exige alta capacitação técnica, conhecimento atualizado das normas regulatórias e um compromisso rigoroso com a segurança operacional. Por isso, contar com uma empresa especializada, que alia experiência prática a uma postura preventiva e conforme às exigências de cada segmento industrial, é essencial para garantir a confiabilidade, a durabilidade dos equipamentos e a integridade das instalações. A atuação profissional nesse campo contribui decisivamente para a redução de falhas, aumento da eficiência energética e prolongamento do ciclo de vida dos ativos industriais.\nA Masterplan realiza serviços de montagem, comissionamento e manutenção preventiva e corretiva em subestacões, painéis de distribuição de energia, quadros de comando, sistemas de geração de emergência, correção automática de fator de potência, automação industrial e fontes renováveis de energia. Atuamos também em sistemas de distribuição de força e iluminação, SPDA (sistemas de proteção contra descargas atmosféricas), além de ensaios e medições técnicas, como resistência de terra, isolamento elétrico e termografia em equipamentos sob operação. Cada serviço é executado por uma equipe qualificada, com foco em segurança, precisão técnica e atendimento aos padrões normativos aplicáveis.",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663469303163/MH3S9ZkEHU42LjpRub2zce/service-detail-montagem-FiXSe3PQjt645pryTfy2YW.webp",
    benefits: [
      "Montagem profissional",
      "Testes completos",
      "Operação otimizada",
      "Manutenção preventiva",
    ],
    applications: [
      "Montagem de equipamentos",
      "Testes de funcionamento",
      "Comissionamento de sistemas",
      "Manutenção especializada",
    ],
    disciplines: ["Mecânica", "Elétrica", "Automação", "Instrumentação"],
  },
};

// Função para retornar o layout personalizado por serviço
function getDescriptionLayout(serviceId: string): DescriptionLayout {
  const layouts: Record<string, DescriptionLayout> = {
    "levantamento": { type: 'two-column', fontSize: '16px', fontWeight: '500' },
    "conceitual": { type: 'two-column', fontSize: '16px', fontWeight: '500' },
    "basico": { type: 'two-column', fontSize: '16px', fontWeight: '500' },
    "executivo": { type: 'two-column', fontSize: '16px', fontWeight: '500' },
    "assistencia": { type: 'two-column', fontSize: '16px', fontWeight: '500' },
    "asbuilt": { type: 'two-column', fontSize: '16px', fontWeight: '500' },
    "anp": { type: 'two-column', fontSize: '16px', fontWeight: '500' },
    "montagem-comissionamento-manutencao": { type: 'two-column', fontSize: '15px', fontWeight: '500' },
  };
  return layouts[serviceId] || { type: 'single', fontSize: '16px', fontWeight: '500' };
}

// Componente para renderizar a descrição com layout personalizado
function DescriptionRenderer({ serviceId, text, image }: { serviceId: string; text: string; image?: string }) {
  const layout = getDescriptionLayout(serviceId);
  const paragraphs = text.split('\n').filter(p => p.trim());

  if (layout.type === 'two-column' && image) {
    return (
      <div>
        <img
          src={image}
          alt="Serviço"
          className="float-right w-full md:w-80 h-auto rounded-lg shadow-lg object-cover ml-8 mb-4"
        />
        <div>
          {paragraphs.map((para, idx) => (
            <p
              key={idx}
              className="text-slate-700 leading-relaxed mb-4"
              style={{
                fontSize: layout.fontSize,
                fontWeight: layout.fontWeight,
              }}
            >
              {para}
            </p>
          ))}
        </div>
        <div className="clear-both"></div>
      </div>
    );
  }

  if (layout.type === 'highlight-box') {
    return (
      <div className="bg-blue-50 border-l-4 border-blue-700 p-8 rounded-lg">
        <p
          className="text-slate-700 leading-relaxed"
          style={{
            fontSize: layout.fontSize,
            fontWeight: layout.fontWeight,
          }}
        >
          {text}
        </p>
      </div>
    );
  }

  // Default single column
  return (
    <p
      className="text-slate-700 leading-relaxed max-w-3xl"
      style={{
        fontSize: layout.fontSize,
        fontWeight: layout.fontWeight,
        lineHeight: '1.8',
      }}
    >
      {text}
    </p>
  );
}

export default function ServiceDetail() {
  const [match, params] = useRoute("/servico/:id");
  
  if (!match) {
    return null;
  }

  const serviceId = (params as any).id;
  const service = SERVICES_DETAIL[serviceId];

  if (!service) {
    return (
      <main className="min-h-screen pt-20">
        <div className="container py-16 text-center">
          <h1 className="text-4xl font-bold mb-4">Serviço não encontrado</h1>
          <Link href="/servicos">
            <Button>Voltar aos Serviços</Button>
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16 md:py-24">
        <div className="container">
          <Link href="/servicos">
            <Button variant="outline" className="mb-6 border-white text-white hover:bg-white/10">
              <ArrowLeft className="mr-2 w-4 h-4" />
              Voltar
            </Button>
          </Link>
          <h1 className="font-poppins font-bold text-5xl md:text-6xl mb-6">
            {service.title}
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl">
            {service.description}
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-5xl">
          <div className="mb-16">
            <h2 className="font-poppins font-bold text-3xl md:text-4xl text-slate-900 mb-8">
              Sobre este Serviço
            </h2>
            <DescriptionRenderer serviceId={serviceId} text={service.fullDescription} image={service.image} />
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h3 className="font-poppins font-bold text-2xl text-slate-900 mb-8">
              Benefícios
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {service.benefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg">
                  <div className="w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-slate-700">{benefit}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Applications */}
          <div className="mb-16">
            <h3 className="font-poppins font-bold text-2xl text-slate-900 mb-8">
              Aplicações Práticas
            </h3>
            <ul className="space-y-3">
              {service.applications.map((app, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-700">
                  <span className="text-blue-700 font-bold mt-1">•</span>
                  <span>{app}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Disciplines */}
          <div className="mb-16">
            <h3 className="font-poppins font-bold text-2xl text-slate-900 mb-8">
              Disciplinas Envolvidas
            </h3>
            <div className="flex flex-wrap gap-3">
              {service.disciplines.map((discipline, idx) => (
                <span key={idx} className="bg-slate-200 text-slate-900 px-4 py-2 rounded-full text-sm font-medium">
                  {discipline}
                </span>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-gradient-to-r from-slate-900 to-blue-900 text-white p-8 rounded-lg text-center">
            <h3 className="font-poppins font-bold text-2xl mb-4">
              Interessado neste serviço?
            </h3>
            <p className="mb-6 opacity-90">
              Entre em contato conosco para discutir como podemos ajudar seu projeto
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
        </div>
      </section>
    </main>
  );
}
