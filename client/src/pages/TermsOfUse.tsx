/**
 * Terms of Use Page - Masterplan Projetos
 * 
 * Design: Legal Document
 * - Conteúdo estruturado
 * - Seções organizadas
 * - Fácil navegação
 */

import { ArrowLeft } from "lucide-react";

export default function TermsOfUse() {
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
            Termos de Uso
          </h1>
          <p className="text-xl md:text-2xl opacity-90 max-w-2xl">
            Leia atentamente os termos e condições de uso do nosso site
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
                1. Aceitação dos Termos
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Ao acessar e utilizar este website, você aceita estar vinculado por estes termos e condições de uso. Se você não concorda com qualquer parte destes termos, por favor, não utilize este site. A Masterplan Projetos se reserva o direito de modificar estes termos a qualquer momento, e é sua responsabilidade revisar regularmente estas condições.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="font-poppins font-bold text-3xl text-slate-900 mb-4">
                2. Uso Permitido
              </h2>
              <p className="text-slate-700 leading-relaxed mb-4">
                Você concorda em usar este website apenas para fins legais e de uma forma que não infrinja os direitos de terceiros ou restrinja seu uso e gozo. O comportamento proibido inclui:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-700">
                <li>Assediar ou causar constrangimento a qualquer pessoa</li>
                <li>Transmitir conteúdo obsceno ou ofensivo</li>
                <li>Interromper o fluxo normal de diálogo dentro do site</li>
                <li>Tentar obter acesso não autorizado a sistemas de computador</li>
                <li>Interferir ou interromper a funcionalidade do site</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="font-poppins font-bold text-3xl text-slate-900 mb-4">
                3. Propriedade Intelectual
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Todo o conteúdo incluído neste website, como textos, gráficos, logos, imagens, clipes de áudio, downloads digitais e compilações de dados, é propriedade da Masterplan Projetos ou de seus fornecedores de conteúdo e é protegido pelas leis internacionais de direitos autorais. A compilação de todo o conteúdo neste website é propriedade exclusiva da Masterplan Projetos e é protegida pelas leis internacionais de direitos autorais.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="font-poppins font-bold text-3xl text-slate-900 mb-4">
                4. Limitação de Responsabilidade
              </h2>
              <p className="text-slate-700 leading-relaxed">
                A Masterplan Projetos não será responsável por qualquer dano resultante do uso ou impossibilidade de usar os materiais do site, mesmo que a Masterplan Projetos ou um representante autorizado tenha sido notificado verbalmente ou por escrito da possibilidade de tal dano. Isso inclui, mas não se limita a, danos por perda de lucros, perda de dados ou outros danos intangíveis.
              </p>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="font-poppins font-bold text-3xl text-slate-900 mb-4">
                5. Precisão do Conteúdo
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Os materiais que aparecem no website da Masterplan Projetos podem incluir erros técnicos, tipográficos ou fotográficos. A Masterplan Projetos não garante que qualquer dos materiais em seu website seja preciso, completo ou atual. A Masterplan Projetos pode fazer alterações nos materiais contidos em seu website a qualquer momento sem aviso prévio.
              </p>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="font-poppins font-bold text-3xl text-slate-900 mb-4">
                6. Links para Terceiros
              </h2>
              <p className="text-slate-700 leading-relaxed">
                A Masterplan Projetos não analisou todos os sites vinculados a seu website e não é responsável pelo conteúdo de nenhum site externo. A inclusão de qualquer link não implica endosso do site pela Masterplan Projetos. O uso de qualquer site vinculado é por conta e risco do usuário.
              </p>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="font-poppins font-bold text-3xl text-slate-900 mb-4">
                7. Modificações
              </h2>
              <p className="text-slate-700 leading-relaxed">
                A Masterplan Projetos pode revisar estes termos de serviço para seu website a qualquer momento sem aviso prévio. Ao usar este website, você está concordando em estar vinculado pela versão atual destes termos de serviço.
              </p>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="font-poppins font-bold text-3xl text-slate-900 mb-4">
                8. Lei Aplicável
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Estes termos e condições de uso são regidos e interpretados de acordo com as leis do Brasil, e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais localizados no Rio de Janeiro, Brasil.
              </p>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="font-poppins font-bold text-3xl text-slate-900 mb-4">
                9. Contato
              </h2>
              <p className="text-slate-700 leading-relaxed">
                Se você tiver alguma dúvida sobre estes Termos de Uso, entre em contato conosco em:
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
