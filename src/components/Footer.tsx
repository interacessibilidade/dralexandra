
import { Link } from "react-router-dom";
import { Phone, Instagram, MapPin, Clock } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#8B5C6C] text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img 
                src="/lovable-uploads/87911c57-d215-46bc-b824-33abe6d94779.png" 
                alt="Logotipo da Dra. Alexandra Alcantara. O nome 'Alexandra Alcantara' está escrito em fonte cursiva na cor branca. Abaixo, em letras maiúsculas e em estilo bastão, aparece o texto 'Biomédica Esteta'."
                className="h-16 w-auto"
              />
            </div>
            <p className="text-white mb-4 max-w-md">
              Você merece cuidado exclusivo. Elevar a autoestima, sem esquecer do bem-estar e saúde do paciente.
            </p>
            <div className="flex space-x-3">
              <a
                href="https://wa.me/5511954968034"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp da Dra. Alexandra Alcântara"
                className="inline-flex items-center justify-center w-11 h-11 text-white hover:text-white/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#8B5C6C]"
              >
                <Phone className="w-6 h-6" aria-hidden="true" />
              </a>
              <a
                href="https://www.instagram.com/dra.alexandraalcantara/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram da Dra. Alexandra Alcântara"
                className="inline-flex items-center justify-center w-11 h-11 text-white hover:text-white/80 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#8B5C6C]"
              >
                <Instagram className="w-6 h-6" aria-hidden="true" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Navegação</h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  to="/" 
                  className="text-white hover:text-white/80 hover:bg-white/10 px-2 py-1 rounded transition-all duration-200 underline"
                  onClick={scrollToTop}
                >
                  Início
                </Link>
              </li>
              <li>
                <Link 
                  to="/sobre" 
                  className="text-white hover:text-white/80 hover:bg-white/10 px-2 py-1 rounded transition-all duration-200 underline"
                  onClick={scrollToTop}
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link 
                  to="/servicos" 
                  className="text-white hover:text-white/80 hover:bg-white/10 px-2 py-1 rounded transition-all duration-200 underline"
                  onClick={scrollToTop}
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link 
                  to="/mentoria" 
                  className="text-white hover:text-white/80 hover:bg-white/10 px-2 py-1 rounded transition-all duration-200 underline"
                  onClick={scrollToTop}
                >
                  Mentoria
                </Link>
              </li>
              <li>
                <Link 
                  to="/contato" 
                  className="text-white hover:text-white/80 hover:bg-white/10 px-2 py-1 rounded transition-all duration-200 underline"
                  onClick={scrollToTop}
                >
                  Contato
                </Link>
              </li>
              <li>
                <Link 
                  to="/declaracao-acessibilidade" 
                  className="text-white hover:text-white/80 hover:bg-white/10 px-2 py-1 rounded transition-all duration-200 underline"
                  onClick={scrollToTop}
                >
                  Declaração de Acessibilidade
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contato</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-white mt-0.5 flex-shrink-0" aria-hidden="true" />
                <div>
                  <p className="text-white text-sm">
                    Century Plaza Business<br />
                    Rua Giovanni Battista Pirelli, 271<br />
                    Homero Thon - Santo André<br />
                    CEP: 09111-340
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-white" aria-hidden="true" />
                <span className="text-white text-sm">(11) 95496-8034</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-white" aria-hidden="true" />
                <span className="text-white text-sm">Seg-Sex: 9h às 18h</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="text-center mb-6">
            <p className="text-white text-sm">
              © 2025 Alexandra Alcântara - Biomedicina Estética Avançada. Todos os direitos reservados.
            </p>
          </div>
          
          {/* Accessibility Certification Section */}
          <div className="flex flex-col items-center space-y-4">
            <a
              href="http://www.interacessibilidade.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
              aria-label="Visitar site da Interacessibilidade"
            >
              <img
                src="/lovable-uploads/4aa2a403-a424-4ca4-8692-745df1d41ed0.png"
                alt="Selo dourado em formato de medalha, com o texto Certificado de Acessibilidade em destaque na parte superior e Empresa Parceira da Inclusão na parte inferior. No centro, há um símbolo estilizado representando acessibilidade e inclusão, com detalhes em azul e cinza e o logotipo da Interacessibilidade."
                className="w-20 h-20 object-contain"
              />
            </a>
            <p className="text-white text-sm text-center max-w-md leading-relaxed font-sans">
              Este site é certificado pela Interacessibilidade como uma Empresa Acessível no Digital. Nosso compromisso é com a experiência inclusiva para todas as pessoas.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
