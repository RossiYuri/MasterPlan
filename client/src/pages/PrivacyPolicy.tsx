/**
 * Privacy Policy Page - Masterplan Projetos
 * 
 * Design: Legal Document
 * - Conteúdo estruturado
 * - Seções organizadas
 * - Fácil navegação
 */

import { ArrowLeft } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-900 to-blue-900 text-white py-16 md:py-24">
        <div className="container">
          <button
            onClick={() => window.history.back()}
            className="flex items-center gap-2 mb-6 text-white hover:text-blue-200 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Voltar</span>
          </button>
          <h1 className="font-poppins font-bold text-5xl md:text-6xl mb-6">
            Política de Privacidade
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl">
            Conheça como protegemos seus dados e privacidade
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container max-w-4xl">
          <div className="prose prose-lg max-w-none space-y-8">
            {/* Section 1 */}
            <div>
              <h2 className="font-poppins font-bold text-3xl text-slate-900 mb-4">
                1. Introdução
              </h2>
              <p className="text-slate-700 leading-relaxed">
                A Masterplan Projetos ("nós", "nosso" ou "Masterplan") está comprometida em proteger sua privacidade. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e salvaguardamos suas informações quando você visita nosso website e usa nossos serviços.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="font-poppins font-bold text-3xl text-slate-900 mb-4">
                2. Informações que Coletamos
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Coletamos informações de você de várias maneiras, incluindo:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li><strong>Informações que você nos fornece voluntariamente:</strong> Nome, endereço de email, número de telefone, empresa, mensagens de contato e outras informações que você escolhe compartilhar conosco através de formulários no site.</li>
                <li><strong>Informações coletadas automaticamente:</strong> Quando você visita nosso site, coletamos automaticamente certos dados sobre seu dispositivo, incluindo endereço IP, tipo de navegador, páginas visitadas e tempo gasto no site.</li>
                <li><strong>Cookies e tecnologias similares:</strong> Usamos cookies para melhorar sua experiência no site e entender como você interage com nosso conteúdo.</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="font-poppins font-bold text-3xl text-slate-900 mb-4">
                3. Como Usamos Suas Informações
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Usamos as informações coletadas para:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Responder a suas consultas e solicitações de informações</li>
                <li>Enviar propostas e informações sobre nossos serviços</li>
                <li>Melhorar e otimizar nosso website e serviços</li>
                <li>Cumprir obrigações legais e regulatórias</li>
                <li>Prevenir fraude e atividades ilícitas</li>
                <li>Comunicar atualizações importantes sobre nossos serviços</li>
              </ul>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="font-poppins font-bold text-3xl text-slate-900 mb-4">
                4. Compartilhamento de Informações
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros para fins de marketing. Podemos compartilhar informações com prestadores de serviços que nos ajudam a operar nosso website e conduzir nossos negócios, sob acordos de confidencialidade estritos. Também podemos divulgar informações quando exigido por lei ou quando acreditamos de boa fé que tal divulgação é necessária para proteger nossos direitos ou a segurança de nossos usuários.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="font-poppins font-bold text-3xl text-slate-900 mb-4">
                5. Segurança de Dados
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Implementamos medidas de segurança técnicas, administrativas e físicas apropriadas para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição. No entanto, nenhum método de transmissão pela Internet ou armazenamento eletrônico é 100% seguro. Embora nos esforcemos para usar meios comercialmente aceitáveis para proteger suas informações pessoais, não podemos garantir sua segurança absoluta.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="font-poppins font-bold text-3xl text-slate-900 mb-4">
                6. Retenção de Dados
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Reteremos suas informações pessoais apenas pelo tempo necessário para cumprir os fins para os quais foram coletadas, incluindo para satisfazer quaisquer requisitos legais, contábeis ou de relatório. O período de retenção pode variar dependendo do contexto do processamento e de nossas obrigações legais.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="font-poppins font-bold text-3xl text-slate-900 mb-4">
                7. Seus Direitos
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Dependendo de sua localização, você pode ter certos direitos em relação a suas informações pessoais, incluindo:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>O direito de acessar suas informações pessoais</li>
                <li>O direito de corrigir informações imprecisas</li>
                <li>O direito de solicitar a exclusão de suas informações</li>
                <li>O direito de se opor ao processamento de suas informações</li>
                <li>O direito de solicitar a portabilidade de dados</li>
              </ul>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="font-poppins font-bold text-3xl text-slate-900 mb-4">
                8. Links para Terceiros
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Nosso website pode conter links para websites de terceiros. Esta Política de Privacidade se aplica apenas a nosso website. Não somos responsáveis pelas práticas de privacidade de websites de terceiros. Recomendamos que você revise a política de privacidade de qualquer website de terceiros antes de fornecer suas informações pessoais.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="font-poppins font-bold text-3xl text-slate-900 mb-4">
                9. Alterações a Esta Política
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Podemos atualizar esta Política de Privacidade de tempos em tempos para refletir mudanças em nossas práticas, tecnologia, requisitos legais ou outros fatores. Notificaremos você sobre alterações materiais publicando a política atualizada em nosso website. Sua continuação no uso do website após tais notificações constitui sua aceitação das alterações.
              </p>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="font-poppins font-bold text-3xl text-slate-900 mb-4">
                10. Contato
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Se você tiver perguntas sobre esta Política de Privacidade ou nossas práticas de privacidade, entre em contato conosco em:
              </p>
              <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-slate-700"><strong>Email:</strong> Jbm@masterplanrj.com.br</p>
                <p className="text-slate-700 mt-2"><strong>Telefone:</strong> +55 (21) 96401-3871</p>
                <p className="text-slate-700 mt-2"><strong>Endereço:</strong> Rio de Janeiro, RJ - Brasil</p>
              </div>
            </div>

            {/* Last Updated */}
            <div className="border-t border-slate-200 pt-8 mt-8">
              <p className="text-sm text-slate-500">
                Última atualização: {new Date().toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
