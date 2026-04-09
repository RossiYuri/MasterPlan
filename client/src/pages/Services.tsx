/**
 * Services Page - Masterplan Projetos
 * 
 * Design: Industrial Minimalist
 * - Listagem de serviços com descrições técnicas
 * - Cards com imagens e borda colorida
 * - Detalhes de aplicação prática
 */

import { SERVICES } from "@/../../shared/const";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { SplineScene } from "@/components/ui/spline-scene";
import { Link } from "wouter";
import simboloServicos from "./images/serviços-simbolo.png";


export default function Services() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16 md:py-24">
        <div className="container">
          <div className="flex items-center gap-4 mb-6 -ml-8 md:-ml-10">
            <img
              src={simboloServicos}
              alt="Símbolo de serviços"
              className="w-22 h-22 object-contain shrink-0"
            />

            <h1 className="font-poppins font-bold text-5xl md:text-6xl leading-none -ml-4 md:-ml-6">
              Nossos Serviços
            </h1>
          </div>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl">
            Soluções técnicas completas do conceito à execução
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, idx) => (
              <div
                key={service.id}
                className="bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:translate-y-[-4px] flex flex-col h-full border border-slate-200"
              >
                {service.image && (
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                )}

                <div className="p-8 flex flex-col flex-1">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-bold text-lg">
                        {String(idx + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div>
                      <h3 className="font-poppins font-bold text-2xl text-slate-900">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-slate-700 text-lg mb-6 leading-relaxed flex-1">
                    {service.description}
                  </p>

                  <div className="bg-blue-50 p-4 rounded border border-blue-200 mb-6">
                    <h4 className="font-poppins font-bold text-slate-900 mb-2">
                      Aplicação Prática:
                    </h4>
                    <p className="text-slate-600 text-sm">
                      {getServiceApplication(service.id)}
                    </p>
                  </div>

                  <Link href={`/servico/${service.id}`}>
                    <Button
                      variant="outline"
                      className="w-full border-blue-700 text-blue-700 hover:bg-blue-50"
                    >
                      Saiba Mais
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-slate-900 mb-12 text-center">
            Processo de Trabalho
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Diagnóstico",
                description: "Análise completa do projeto e identificação de necessidades",
              },
              {
                step: "02",
                title: "Planejamento",
                description: "Definição de escopo, cronograma e recursos necessários",
              },
              {
                step: "03",
                title: "Execução",
                description: "Desenvolvimento técnico com qualidade e precisão",
              },
              {
                step: "04",
                title: "Entrega",
                description: "Documentação completa e suporte técnico pós-projeto",
              },
            ].map((item, idx) => (
              <div key={idx} className="relative">
                <div className="bg-white p-6 rounded-lg border-2 border-blue-700 h-full">
                  <div className="text-3xl font-poppins font-bold text-blue-700 mb-3">
                    {item.step}
                  </div>
                  <h3 className="font-poppins font-bold text-lg text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{item.description}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-blue-700 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden h-96 bg-slate-900">
              <SplineScene
                scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                className="w-full h-full"
              />
            </div>

            <div>
              <h2 className="font-poppins font-bold text-4xl md:text-5xl text-slate-900 mb-6">
                Por que Escolher Nossos Serviços?
              </h2>

              <ul className="space-y-4">
                {[
                  "Equipe multidisciplinar altamente qualificada",
                  "Metodologia comprovada em centenas de projetos",
                  "Conformidade total com normas técnicas",
                  "Suporte técnico completo do início ao fim",
                  "Documentação técnica de excelência",
                  "Prazos respeitados e orçamentos controlados",
                ].map((item, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-700 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-white text-sm font-bold">✓</span>
                    </div>
                    <p className="text-lg text-slate-700">{item}</p>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 py-16 md:py-24 text-white">
        <div className="container text-center">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
            Pronto para Começar?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Solicite uma proposta e descubra como nossos serviços podem agregar valor ao
            seu projeto
          </p>
          <Button
            onClick={() => {
              window.open(
                'https://wa.me/5521964013871?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20uma%20proposta%20para%20nosso%20projeto.',
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

function getServiceApplication(serviceId: string): string {
  const applications: Record<string, string> = {
    levantamento:
      "Coleta de dados em campo para plantas industriais, plataformas offshore e refinarias",
    conceitual:
      "Definição de conceitos para novos projetos de expansão e modernização",
    basico:
      "Desenvolvimento de projetos básicos com especificações técnicas detalhadas",
    executivo:
      "Projetos executivos prontos para licitação e implementação no campo",
    assistencia:
      "Suporte técnico durante a execução de montagem e testes de equipamentos",
    asbuilt:
      "Documentação de projetos conforme executado para fins de manutenção futura",
    anp: "Adequação de instalações às normas e regulamentações da ANP",
    "montagem-comissionamento-manutencao":
      "Coordenação e supervisão de montagem, testes e manutenção de sistemas",
  };
  return applications[serviceId] || "Aplicação prática específica para este serviço";
}
