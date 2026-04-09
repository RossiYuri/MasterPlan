/**
 * About Page - Masterplan Projetos
 * 
 * Design: Industrial Minimalist
 * - História da empresa
 * - Missão, visão, valores
 * - Posicionamento técnico
 * - Diferenciais competitivos
 */

import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import logo from "./images/masterplan-logo.png";
import { GlowCard } from "@/components/ui/spotlight-card1";
import simboloSobre from "./images/sobre-simbolo.png";

export default function About() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16 md:py-24">
        <div className="container">
          <div className="mb-6 flex items-center gap-0 -ml-6 md:-ml-10">
            <img
              src={simboloSobre}
              alt="Símbolo sobre"
              className="w-26 h-26 md:w-30 md:h-30 object-contain shrink-0"
            />

            <h1
              className="font-poppins font-bold text-5xl md:text-6xl leading-none -ml-1"
              style={{ fontSize: '71px', fontWeight: '800' }}
            >
              Sobre
            </h1>
          </div>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl">
            +25 anos de excelência em engenharia multidisciplinar
          </p>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-slate-900 mb-6">
            Nossa História
          </h2>

          {/* imagem para mobile */}
          <div className="mx-auto mb-6 w-full max-w-[260px] lg:hidden">
            <GlowCard
              glowColor="blue"
              customSize
              width="100%"
              height={200}
              className="flex items-center justify-center p-3"
            >
              <img
                src={logo}
                alt="Masterplan Engenharia Multidisciplinar"
                className="w-full max-w-[220px] object-contain"
              />
            </GlowCard>
          </div>

          {/* imagem para desktop */}
          <div className="hidden lg:block lg:float-right lg:ml-8 lg:mb-6 lg:w-[420px]">
            <GlowCard
              glowColor="blue"
              customSize
              width={420}
              height={300}
              className="flex items-center justify-center p-4"
            >
              <img
                src={logo}
                alt="Masterplan Engenharia Multidisciplinar"
                className="w-full max-w-[400px] object-contain"
              />
            </GlowCard>
          </div>

          {/* texto */}
          <p className="text-lg text-slate-700 mb-4">
            Com 26 anos de atuação no setor de engenharia multidisciplinar, nossa empresa se consolidou como referência no desenvolvimento de soluções técnicas para a indústria de petróleo, gás natural, biocombustíveis e derivados.
          </p>

          <p className="text-lg text-slate-700 mb-4">
            Atuamos desde a concepção até a entrega de projetos completos, atendendo demandas em ambientes Offshore e Onshore, com foco em desempenho, segurança e conformidade.
          </p>

          <p className="text-lg text-slate-700 mb-4">
            Nosso portfólio inclui a elaboração de projetos de equipamentos e linhas de produção, reformas e ampliações de unidades industriais, e o acompanhamento técnico completo de plantas de armazenamento e distribuição de combustíveis, sempre em conformidade com as exigências da Agência Nacional do Petróleo, Gás Natural e Biocombustíveis (ANP).
          </p>

          <p className="text-lg text-slate-700 mb-4">
            Nossa abordagem é fundamentada na integração entre disciplinas de engenharia: Processo, Civil, Mecânica, Elétrica, Automação, Instrumentação e Segurança Industrial, o que nos permite oferecer soluções customizadas, eficientes e seguras, alinhadas às necessidades operacionais de cada cliente.
          </p>

          <p className="text-lg text-slate-700 mb-4">
            A empresa é formada por uma equipe de engenheiros e especialistas com vasta experiência, muitos deles com passagens por grandes corporações nacionais e internacionais.
          </p>

          <p className="text-lg text-slate-700">
            Mais do que entregar projetos, buscamos construir parcerias duradouras com nossos clientes, antecipando necessidades, superando desafios técnicos e contribuindo diretamente para a eficiência e sustentabilidade das operações industriais que ajudamos a desenvolver.
          </p>

          <div className="clear-both"></div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="font-poppins font-bold text-4xl md:text-5xl text-slate-900 mb-4">
              Missão, Visão e Valores
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Missão",
                content:
                  "Fornecer soluções de engenharia de excelência que agregam valor aos projetos industriais, garantindo performance, segurança e conformidade regulatória.",
              },
              {
                title: "Visão",
                content:
                  "Ser reconhecida como a empresa de engenharia multidisciplinar de referência nos setores de óleo, gás e energia na América Latina.",
              },
              {
                title: "Valores",
                content:
                  "Excelência técnica, integridade profissional, inovação contínua, segurança em primeiro lugar e compromisso com nossos clientes.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg border-l-4 border-blue-700 shadow-sm hover:shadow-lg transition-shadow"
              >
                <h3 className="font-poppins font-bold text-2xl text-slate-900 mb-4">
                  {item.title}
                </h3>
                <p className="text-slate-700 text-lg leading-relaxed">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Advantages */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-slate-900 mb-12 text-center">
            Diferenciais Competitivos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Equipe Multidisciplinar",
                description:
                  "Profissionais especializados em todas as disciplinas de engenharia necessárias para projetos complexos.",
              },
              {
                title: "Experiência Comprovada",
                description:
                  "Mais de 25 anos entregando projetos de sucesso nos principais segmentos industriais.",
              },
              {
                title: "Conformidade Total",
                description:
                  "Expertise em regulamentações ANP, normas técnicas internacionais e melhores práticas industriais.",
              },
              {
                title: "Inovação Tecnológica",
                description:
                  "Integração de tecnologias avançadas em automação, simulação e otimização de processos.",
              },
              {
                title: "Suporte Completo",
                description:
                  "Acompanhamento técnico do conceito até a execução e comissionamento final.",
              },
              {
                title: "Relacionamento Duradouro",
                description:
                  "Parcerias de longo prazo com clientes que confiam em nossa qualidade e dedicação.",
              },
            ].map((item, idx) => (
              <div key={idx} className="flex gap-4">
                <CheckCircle2 className="w-8 h-8 text-blue-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-poppins font-bold text-lg text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-700">{item.description}</p>
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
            Quer Trabalhar com a Gente?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Entre em contato e descubra como podemos contribuir para o sucesso do seu
            projeto
          </p>
          <a
            href="https://wa.me/5521964013871?text=Ol%C3%A1%2C%20gostaria%20de%20trabalhar%20com%20voc%C3%AAs%21"
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
    </main >
  );
}
