/**
 * Contact Page - Masterplan Projetos
 * 
 * Design: Industrial Minimalist
 * - Formulário de contato
 * - Informações de contato
 * - Mapa de localização
 * - Focus em lead generation
 */

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { COMPANY_EMAIL, COMPANY_PHONE, COMPANY_WHATSAPP } from "@/../../shared/const";
import { toast } from "sonner";
import { GlowCard } from "@/components/ui/spotlight-card";
import simboloContato from "./images/contato-simbolo.png";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio de formulário
    setTimeout(() => {
      toast.success("Proposta solicitada com sucesso!");
      setFormData({ name: "", company: "", email: "", phone: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const whatsappUrl = `https://wa.me/5521964013871?text=Olá%2C%20gostaria%20de%20solicitar%20uma%20proposta.`;

  const contactItems = [
    {
      icon: Phone,
      title: "Telefone",
      content: (
        <div className="space-y-3">
          <div>
            <a href="https://wa.me/5521991795211?text=Olá%2C%20gostaria%20de%20solicitar%20uma%20proposta." target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors block">(21) 99179-5211</a>
          </div>
          <div>
            <a href="https://wa.me/5521964013871?text=Olá%2C%20gostaria%20de%20solicitar%20uma%20proposta." target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors block">(21) 96401-3871</a>
          </div>
          <div>
            <a href="https://wa.me/5521972667096?text=Olá%2C%20gostaria%20de%20solicitar%20uma%20proposta." target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors block">(21) 97266-7096</a>
          </div>
        </div>
      ),
    },
    {
      icon: Mail,
      title: "Email",
      content: (
        <div className="space-y-3">
          <div>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=Jbm@masterplanrj.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors block">Jbm@masterplanrj.com.br</a>
          </div>
          <div>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=secretaria@masterplanrj.com.br" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors block">secretaria@masterplanrj.com.br</a>
          </div>
        </div>
      ),
    },
    {
      icon: MapPin,
      title: "Localização",
      content: "Rio de Janeiro, RJ",
    },
  ];

  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16 md:py-24">
        <div className="container">
          <div className="flex items-center gap-2 mb-6 -ml-2 md:-ml-4">
            <img
              src={simboloContato}
              alt="Símbolo contato"
              className="w-[84px] h-[84px] md:w-[110px] md:h-[110px] object-contain shrink-0"
            />

            <h1 className="font-poppins font-bold text-5xl md:text-6xl leading-none -ml-4 md:-ml-6">
              Entre em Contato
            </h1>
          </div>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl">
            Solicite uma proposta e descubra como podemos ajudar seu projeto
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <GlowCard
                  key={idx}
                  glowColor="blue"
                  customSize={true}
                  className="w-full bg-white p-8 text-center"
                >
                  <div className="flex flex-col items-center justify-center h-full">
                    <Icon className="w-12 h-12 text-blue-700 mx-auto mb-4" />
                    <h3 className="font-poppins font-bold text-lg text-slate-900 mb-2">
                      {item.title}
                    </h3>
                    <div className="text-slate-700 font-semibold">{item.content}</div>
                  </div>
                </GlowCard>
              );
            })}
          </div>

          {/* WhatsApp CTA */}
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 p-8 rounded-lg text-center">
            <h3 className="font-poppins font-bold text-2xl text-slate-900 mb-4">
              Prefere Conversar Direto?
            </h3>
            <p className="text-slate-700 mb-6">
              Clique no botão abaixo para conversar conosco pelo WhatsApp
            </p>
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer">
              <Button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3">
                Abrir WhatsApp
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl text-slate-900 mb-12 text-center">
            Perguntas Frequentes
          </h2>

          <div className="max-w-2xl mx-auto space-y-6">
            {[
              {
                q: "Qual é o tempo de resposta para uma proposta?",
                a: "Respondemos a todas as solicitações em até 24 horas úteis.",
              },
              {
                q: "Como funciona o processo de orçamento?",
                a: "Após análise do seu projeto, apresentamos uma proposta detalhada com escopo, cronograma e investimento.",
              },
              {
                q: "Vocês trabalham com projetos pequenos?",
                a: "Sim, trabalhamos com projetos de todos os tamanhos. Cada cliente recebe atenção personalizada.",
              },
              {
                q: "Qual é a forma de pagamento?",
                a: "Oferecemos diferentes formas de pagamento conforme acordado em contrato.",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-6 rounded-lg border border-slate-200"
              >
                <h3 className="font-poppins font-bold text-lg text-slate-900 mb-2">
                  {item.q}
                </h3>
                <p className="text-slate-700">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 py-16 md:py-24 text-white">
        <div className="container text-center">
          <h2 className="font-poppins font-bold text-4xl md:text-5xl mb-6">
            Pronto para Começar?
          </h2>
          <a href="https://wa.me/5521964013871?text=Ol%C3%A1%2C%20gostaria%20de%20entrar%20em%20contato%20com%20a%20Masterplan." target="_blank" rel="noopener noreferrer" className="inline-block">
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90 hover:opacity-100 transition-opacity cursor-pointer underline">
              Entre em contato direto conosco
            </p>
          </a>
        </div>
      </section>
    </main>
  );
}
