export const COOKIE_NAME = "app_session_id";
export const ONE_YEAR_MS = 1000 * 60 * 60 * 24 * 365;

// Constantes da Masterplan Projetos

export const COMPANY_NAME = "Masterplan Projetos";
export const COMPANY_TAGLINE = "Engenharia multidisciplinar com foco em performance, segurança e conformidade industrial";
export const COMPANY_PHONE = "+55 (11) 3000-0000";
export const COMPANY_EMAIL = "contato@masterplan.com.br";
export const COMPANY_WHATSAPP = "+55 11 99999-9999";

export const NAVIGATION_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Elétrica", href: "/eletrica" },
  { label: "Serviços", href: "/servicos" },
  { label: "Segmentos", href: "/segmentos" },
  { label: "Disciplinas", href: "/disciplinas" },
  { label: "Sobre", href: "/sobre" },
  { label: "Contato", href: "/contato" },
];

export const SERVICES = [
  {
    id: "levantamento",
    title: "Levantamento de Campo",
    description: "Coleta precisa de dados técnicos em campo para base de projetos",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663469303163/MH3S9ZkEHU42LjpRub2zce/service-levantamento-campo-YCWifJTxknjxbUhCumF2qe.webp",
  },
  {
    id: "conceitual",
    title: "Projeto Conceitual",
    description: "Definição de conceitos e soluções técnicas preliminares",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663469303163/MH3S9ZkEHU42LjpRub2zce/service-projeto-conceitual-4HgRv7kRVdCrwej9DNbA8e.webp",
  },
  {
    id: "basico",
    title: "Projeto Básico",
    description: "Desenvolvimento de projetos básicos com especificações técnicas",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663469303163/MH3S9ZkEHU42LjpRub2zce/service-projeto-basico-9GjuLqBtTSQNmXD2XFZmov.webp",
  },
  {
    id: "executivo",
    title: "Projeto Executivo",
    description: "Projetos executivos detalhados prontos para implementação",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663469303163/MH3S9ZkEHU42LjpRub2zce/service-projeto-executivo-Km6uFHxcAz3ofgwNBMAK3f.webp",
  },
  {
    id: "assistencia",
    title: "Assistência Técnica",
    description: "Suporte técnico durante execução e implementação",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663469303163/MH3S9ZkEHU42LjpRub2zce/service-assistencia-tecnica-cWj9zvRLDMmWXPp4GErJpz.webp",
  },
  {
    id: "asbuilt",
    title: "As Built",
    description: "Documentação de projetos conforme executado",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663469303163/MH3S9ZkEHU42LjpRub2zce/service-asbuilt-V2NspRFrN3LyEhzem7aigM.webp",
  },
  {
    id: "anp",
    title: "Adequação ANP",
    description: "Conformidade com regulamentações ANP",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663469303163/MH3S9ZkEHU42LjpRub2zce/service-adequacao-anp-4rcUUgwKobUSdWv3FR5swW.webp",
  },
  {
    id: "montagem-comissionamento-manutencao",
    title: "Montagem, Comissionamento e Manutenção",
    description: "Coordenação de montagem, testes de comissionamento e serviços de manutenção especializada",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663469303163/MH3S9ZkEHU42LjpRub2zce/service-montagem-comissionamento-EqTNo2qfD5zf5JvfDsddr8.webp",
  },
];

export const DISCIPLINES = [
  {
    id: "processo",
    title: "Processo",
    description: "Engenharia de processo e otimização de fluxos",
  },
  {
    id: "mecanica",
    title: "Mecânica",
    description: "Projeto e análise de sistemas mecânicos",
  },
  {
    id: "tubulacao",
    title: "Tubulação",
    description: "Design e especificação de sistemas de tubulação",
  },
  {
    id: "estruturas",
    title: "Estruturas Metálicas",
    description: "Projeto de estruturas metálicas e suportes",
  },
  {
    id: "civil",
    title: "Civil (Concreto)",
    description: "Engenharia civil e estruturas de concreto",
  },

];

export const SEGMENTS = [
  {
    id: "oleo-gas",
    title: "Produção de Óleo e Gás",
    description: "Soluções completas para exploração e produção",
    icon: "🛢️",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663469303163/MH3S9ZkEHU42LjpRub2zce/segment-oil-gas-E84PxLLwiJmDJ5y6MfacEp.webp",
  },
  {
    id: "distribuicao",
    title: "Distribuição de Petróleos e seus Derivados",
    description: "Infraestrutura para distribuição de produtos",
    icon: "🚚",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663469303163/MH3S9ZkEHU42LjpRub2zce/segment-petrochemical-dXuuVNB3JxDLB8yJAqbrF3.webp",
  },
  {
    id: "biocombustiveis",
    title: "Manutenção e Montagem",
    description: "Manutenção e montagem de sistemas elétricos industriais",
    icon: "⚙️",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663469303163/MH3S9ZkEHU42LjpRub2zce/segment-power-RoFVWgz9FQFhEWS4fVfDTh.webp",
  },
  {
    id: "asfalto",
    title: "Produtos Asfálticos",
    description: "Processamento e distribuição de asfalto",
    icon: "🛣️",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663469303163/MH3S9ZkEHU42LjpRub2zce/segment-infrastructure-QTp9YM7fTsmpPJQFRH9qHB.webp",
  },
  {
    id: "adequacoes",
    title: "Adequações ANP",
    description: "Conformidade regulatória e adequações",
    icon: "✅",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663469303163/MH3S9ZkEHU42LjpRub2zce/segment-maritime-VCimsgQ8uJv9ziiu3QqhpQ.webp",
  },
];

export const PROJECTS = [
  {
    id: 1,
    title: "Plataforma Offshore P-XX",
    segment: "Produção de Óleo e Gás",
    description: "Projeto executivo completo de plataforma offshore",
    year: 2023,
    disciplines: ["Processo", "Mecânica", "Elétrica", "Estruturas"],
  },
  {
    id: 2,
    title: "Terminal de Distribuição",
    segment: "Distribuição de Derivados",
    description: "Modernização de terminal de distribuição",
    year: 2023,
    disciplines: ["Processo", "Tubulação", "Automação"],
  },
  {
    id: 3,
    title: "Planta de Biodiesel",
    segment: "Biocombustíveis",
    description: "Projeto básico de planta de biodiesel",
    year: 2022,
    disciplines: ["Processo", "Civil", "Elétrica"],
  },
  {
    id: 4,
    title: "Usina de Asfalto",
    segment: "Produtos Asfálticos",
    description: "Projeto executivo de usina de asfalto",
    year: 2022,
    disciplines: ["Processo", "Mecânica", "Instrumentação"],
  },
  {
    id: 5,
    title: "Adequação ANP - Refinaria",
    segment: "Adequações ANP",
    description: "Adequação de refinaria às normas ANP",
    year: 2021,
    disciplines: ["Segurança", "Automação", "Instrumentação"],
  },
];
