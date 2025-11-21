
const AccessibilityStatement = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-rose-50" aria-labelledby="accessibility-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="accessibility-heading" className="text-4xl md:text-5xl font-elegant font-bold text-gray-900 mb-6">
            Declaração de Acessibilidade
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Nosso compromisso com a acessibilidade digital e inclusão para todos os usuários
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white" aria-labelledby="commitment-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg mx-auto">
            <h2 id="commitment-heading" className="text-3xl font-elegant font-bold text-gray-900 mb-8">
              Nosso Compromisso com a Acessibilidade
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              O site da Dra. Alexandra Alcântara está comprometido em garantir que suas páginas sejam acessíveis 
              a todas as pessoas, incluindo aquelas com deficiências. Trabalhamos continuamente para melhorar a 
              experiência do usuário para todos e aplicamos as diretrizes de acessibilidade relevantes.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Padrões de Conformidade
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Este site se esforça para estar em conformidade com as Diretrizes de Acessibilidade para Conteúdo 
              Web (WCAG) 2.2 nível AA. Essas diretrizes explicam como tornar o conteúdo web acessível para pessoas 
              com deficiências e mais amigável para todos os usuários.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Medidas de Acessibilidade
            </h3>
            
            <ul className="list-disc pl-6 text-lg text-gray-600 mb-6 space-y-2">
              <li>Estrutura semântica adequada com uso correto de cabeçalhos</li>
              <li>Textos alternativos para imagens informativas</li>
              <li>Contraste de cores adequado para legibilidade</li>
              <li>Navegação por teclado funcional</li>
              <li>Compatibilidade com leitores de tela</li>
              <li>Menu de acessibilidade com opções de personalização</li>
              <li>Breadcrumbs para facilitar a orientação</li>
            </ul>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Testes de Acessibilidade
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Além dos testes automatizados, foram realizados testes manuais com as principais tecnologias 
              assistivas (como leitores de tela, navegação por teclado e ampliadores de tela) para garantir 
              a acessibilidade e a usabilidade do site. Estes testes são conduzidos regularmente para 
              assegurar que o site continue atendendo às necessidades de todos os usuários.
            </p>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Relatório de Conformidade
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              Você pode acessar o relatório detalhado de conformidade do nosso site através do link abaixo:
            </p>
            
            <div className="bg-gray-50 border-l-4 border-primary p-6 mb-6">
              <a 
                href="https://pagespeed.web.dev/analysis/https-beleza-bemestar-alegria-alcantara-lovable-app/tal3tbefl2?form_factor=desktop"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-semibold text-lg underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                Relatório de conformidade do site Alexandra Alcântara
              </a>
              <p className="text-sm text-gray-600 mt-2">
                Relatório atualizado em: 20 de junho de 2025
              </p>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Responsável Técnico
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-4">
              A implementação e manutenção da acessibilidade deste site é realizada pela:
            </p>
            
            <div className="bg-gradient-to-r from-primary/5 to-rose-50 rounded-lg p-6 mb-6">
              <h4 className="font-semibold text-gray-900 mb-2">Interacessibilidade</h4>
              <a 
                href="http://www.interacessibilidade.com.br"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 font-semibold underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                www.interacessibilidade.com.br
              </a>
            </div>

            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Feedback e Contato
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Se você encontrar alguma barreira de acessibilidade em nosso site ou tiver sugestões de melhoria, 
              entre em contato conosco. Valorizamos seu feedback e trabalhamos para tornar nosso site mais 
              acessível a todos.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Esta declaração foi criada em 20 de junho de 2025 e é revisada regularmente para garantir 
              que permaneça precisa e atualizada.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccessibilityStatement;
