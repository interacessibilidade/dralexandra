
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Início", href: "/" },
    { name: "Sobre", href: "/sobre" },
    { name: "Serviços", href: "/servicos" },
    { name: "Mentoria", href: "/mentoria" },
    { name: "Contato", href: "/contato" },
  ];

  const isActive = (href: string) => location.pathname === href;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
    scrollToTop();
  };

  // Check if we're on the home page
  const isHomePage = location.pathname === "/";

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50" role="banner">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" role="navigation" aria-label="Menu principal">
        <div className="flex justify-between items-center h-24">
          <div className="flex items-center">
            {isHomePage ? (
              <div className="flex items-center">
                <img 
                  src="/lovable-uploads/0e5f070d-d5d3-44fe-ba85-aaf2918a1dec.png" 
                  alt="Logotipo da Dra. Alexandra Alcantara. O nome 'Alexandra Alcantara' está escrito em fonte cursiva na cor rosa escuro. Abaixo, em letras maiúsculas e em estilo bastão, aparece o texto 'Biomédica Esteta'."
                  className="h-10 w-auto"
                />
              </div>
            ) : (
              <Link to="/" className="flex items-center" onClick={scrollToTop}>
                <img 
                  src="/lovable-uploads/0e5f070d-d5d3-44fe-ba85-aaf2918a1dec.png" 
                  alt="Logotipo da Dra. Alexandra Alcantara. O nome 'Alexandra Alcantara' está escrito em fonte cursiva na cor rosa escuro. Abaixo, em letras maiúsculas e em estilo bastão, aparece o texto 'Biomédica Esteta'."
                  className="h-10 w-auto"
                />
              </Link>
            )}
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-primary text-white"
                      : "text-gray-700 hover:text-primary hover:bg-rose-50"
                  }`}
                  onClick={scrollToTop}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3">
            <Button
              asChild
              size="sm"
              className="bg-primary hover:bg-[#424A59] text-white min-h-[44px] px-4"
            >
              <a
                href="https://wa.me/5511954968034"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Entrar em contato com a Dra. Alexandra Alcântara via WhatsApp"
                className="flex items-center justify-center"
              >
                <Phone className="w-4 h-4 mr-1" aria-hidden="true" />
                WhatsApp
              </a>
            </Button>
            <a
              href="https://www.instagram.com/dra.alexandraalcantara/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da Dra. Alexandra Alcântara"
              className="inline-flex items-center justify-center w-11 h-11 border border-primary text-primary hover:bg-primary hover:text-white rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              <Instagram className="w-5 h-5" aria-hidden="true" />
            </a>
          </div>

          <div className="md:hidden flex flex-col items-center">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Abrir menu de navegação"
              className="p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </Button>
            <span className="text-xs text-gray-600 mt-1">Menu</span>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                    isActive(item.href)
                      ? "bg-primary text-white"
                      : "text-gray-700 hover:text-primary hover:bg-rose-50"
                  }`}
                  onClick={handleNavClick}
                  
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 flex flex-col space-y-3">
                <Button
                  asChild
                  size="sm"
                  className="bg-primary hover:bg-[#424A59] text-white w-full min-h-[44px]"
                >
                  <a
                    href="https://wa.me/5511954968034"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Entrar em contato com a Dra. Alexandra Alcântara via WhatsApp"
                    className="flex items-center justify-center"
                  >
                    <Phone className="w-4 h-4 mr-1" aria-hidden="true" />
                    WhatsApp
                  </a>
                </Button>
                <a
                  href="https://www.instagram.com/dra.alexandraalcantara/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram da Dra. Alexandra Alcântara"
                  className="inline-flex items-center justify-center w-full min-h-[44px] border border-primary text-primary hover:bg-primary hover:text-white rounded-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <Instagram className="w-4 h-4 mr-1" aria-hidden="true" />
                  Instagram
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
