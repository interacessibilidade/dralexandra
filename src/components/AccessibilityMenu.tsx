import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Plus, 
  Minus, 
  Eye, 
  EyeOff, 
  Palette, 
  Link,
  FileText,
  X,
  Type
} from "lucide-react";

export const AccessibilityMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontScale, setFontScale] = useState(100);
  const [grayscale, setGrayscale] = useState(false);
  const [hideImages, setHideImages] = useState(false);
  const [highlightStructure, setHighlightStructure] = useState(false);
  const [highlightLinks, setHighlightLinks] = useState(false);
  const [showAltText, setShowAltText] = useState(false);
  const [openDyslexic, setOpenDyslexic] = useState(false);

  // Aplicar mudanças de escala de fonte
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontScale}%`;
  }, [fontScale]);

  // Aplicar fonte OpenDyslexic
  useEffect(() => {
    if (openDyslexic) {
      // Adicionar link da fonte se não existir
      if (!document.getElementById('opendyslexic-font')) {
        const link = document.createElement('link');
        link.id = 'opendyslexic-font';
        link.rel = 'stylesheet';
        link.href = 'https://cdn.jsdelivr.net/npm/opendyslexic@1.0.3/font/opendyslexic-regular.css';
        document.head.appendChild(link);
      }
      document.body.style.fontFamily = '"OpenDyslexic", "Open Sans", system-ui, sans-serif';
    } else {
      document.body.style.fontFamily = '"Open Sans", system-ui, sans-serif';
    }
  }, [openDyslexic]);

  // Aplicar filtro de escala de cinza
  useEffect(() => {
    if (grayscale) {
      document.documentElement.style.filter = "grayscale(100%)";
    } else {
      document.documentElement.style.filter = "none";
    }
  }, [grayscale]);

  // Ocultar/mostrar imagens
  useEffect(() => {
    const images = document.querySelectorAll('img') as NodeListOf<HTMLImageElement>;
    images.forEach(img => {
      if (hideImages) {
        img.style.display = 'none';
      } else {
        img.style.display = '';
      }
    });
  }, [hideImages]);

  // Destacar estrutura da página
  useEffect(() => {
    const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, nav, main, section, header, footer') as NodeListOf<HTMLElement>;
    elements.forEach(el => {
      if (highlightStructure) {
        el.style.outline = '3px solid #0066cc';
        el.style.outlineOffset = '2px';
      } else {
        el.style.outline = '';
        el.style.outlineOffset = '';
      }
    });
  }, [highlightStructure]);

  // Destacar links
  useEffect(() => {
    const links = document.querySelectorAll('a, button') as NodeListOf<HTMLElement>;
    links.forEach(link => {
      if (highlightLinks) {
        link.style.textDecoration = 'underline';
        link.style.backgroundColor = '#ffff00';
        link.style.color = '#000000';
        link.style.fontWeight = 'bold';
      } else {
        // Remover apenas se não tiver estilos originais
        if (link.style.backgroundColor === 'rgb(255, 255, 0)') {
          link.style.textDecoration = '';
          link.style.backgroundColor = '';
          link.style.color = '';
          link.style.fontWeight = '';
        }
      }
    });
  }, [highlightLinks]);

  // Mostrar texto alternativo das imagens
  useEffect(() => {
    const images = document.querySelectorAll('img') as NodeListOf<HTMLImageElement>;
    images.forEach(img => {
      const existingAltDiv = img.parentNode?.querySelector('.alt-text-display');
      
      if (showAltText && img.alt && !existingAltDiv) {
        const altDiv = document.createElement('div');
        altDiv.className = 'alt-text-display';
        altDiv.style.cssText = `
          background: #000;
          color: #fff;
          padding: 4px 8px;
          font-size: 12px;
          position: absolute;
          z-index: 1000;
          border-radius: 4px;
          margin-top: 4px;
        `;
        altDiv.textContent = `Alt: ${img.alt}`;
        img.parentNode?.insertBefore(altDiv, img.nextSibling);
      } else if (!showAltText && existingAltDiv) {
        existingAltDiv.remove();
      }
    });
  }, [showAltText]);

  const increaseFontSize = () => {
    const newScale = Math.min(fontScale + 10, 150);
    setFontScale(newScale);
  };

  const decreaseFontSize = () => {
    const newScale = Math.max(fontScale - 10, 80);
    setFontScale(newScale);
  };

  const resetAll = () => {
    setFontScale(100);
    setGrayscale(false);
    setHideImages(false);
    setHighlightStructure(false);
    setHighlightLinks(false);
    setShowAltText(false);
    setOpenDyslexic(false);
    
    // Remover todos os estilos aplicados
    document.documentElement.style.fontSize = '100%';
    document.documentElement.style.filter = 'none';
    document.body.style.fontFamily = '"Open Sans", system-ui, sans-serif';
    
    // Limpar estilos das imagens
    const images = document.querySelectorAll('img') as NodeListOf<HTMLImageElement>;
    images.forEach(img => {
      img.style.display = '';
    });
    
    // Limpar texto alternativo
    const altTexts = document.querySelectorAll('.alt-text-display');
    altTexts.forEach(alt => alt.remove());
    
    // Limpar destaque de estrutura
    const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, nav, main, section, header, footer') as NodeListOf<HTMLElement>;
    elements.forEach(el => {
      el.style.outline = '';
      el.style.outlineOffset = '';
    });
    
    // Limpar destaque de links
    const links = document.querySelectorAll('a, button') as NodeListOf<HTMLElement>;
    links.forEach(link => {
      if (link.style.backgroundColor === 'rgb(255, 255, 0)') {
        link.style.textDecoration = '';
        link.style.backgroundColor = '';
        link.style.color = '';
        link.style.fontWeight = '';
      }
    });
  };

  // Fechar menu com ESC
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen && (
        <Card className="mb-4 w-80 max-w-[90vw] animate-fade-in shadow-lg border-2">
          <CardHeader className="pb-3">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Ferramentas de Acessibilidade</CardTitle>
              <Button
                size="sm"
                variant="ghost"
                onClick={() => setIsOpen(false)}
                aria-label="Fechar menu de acessibilidade"
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Controle de fonte */}
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Tamanho da fonte:</span>
              <div className="flex items-center space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={decreaseFontSize}
                  aria-label="Diminuir tamanho da fonte"
                  disabled={fontScale <= 80}
                >
                  <Minus className="w-4 h-4" />
                </Button>
                <span className="text-sm w-12 text-center">{fontScale}%</span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={increaseFontSize}
                  aria-label="Aumentar tamanho da fonte"
                  disabled={fontScale >= 150}
                >
                  <Plus className="w-4 h-4" />
                </Button>
              </div>
            </div>

            {/* Outras opções */}
            <div className="space-y-2">
              <Button
                size="sm"
                variant={openDyslexic ? "default" : "outline"}
                onClick={() => setOpenDyslexic(!openDyslexic)}
                className="w-full justify-start"
                aria-pressed={openDyslexic}
              >
                <Type className="w-4 h-4 mr-2" />
                Fonte para Dislexia
              </Button>

              <Button
                size="sm"
                variant={grayscale ? "default" : "outline"}
                onClick={() => setGrayscale(!grayscale)}
                className="w-full justify-start"
                aria-pressed={grayscale}
              >
                <Palette className="w-4 h-4 mr-2" />
                Escala de cinza
              </Button>

              <Button
                size="sm"
                variant={hideImages ? "default" : "outline"}
                onClick={() => setHideImages(!hideImages)}
                className="w-full justify-start"
                aria-pressed={hideImages}
              >
                <EyeOff className="w-4 h-4 mr-2" />
                Ocultar imagens
              </Button>

              <Button
                size="sm"
                variant={highlightStructure ? "default" : "outline"}
                onClick={() => setHighlightStructure(!highlightStructure)}
                className="w-full justify-start"
                aria-pressed={highlightStructure}
              >
                <FileText className="w-4 h-4 mr-2" />
                Destacar estrutura
              </Button>

              <Button
                size="sm"
                variant={highlightLinks ? "default" : "outline"}
                onClick={() => setHighlightLinks(!highlightLinks)}
                className="w-full justify-start"
                aria-pressed={highlightLinks}
              >
                <Link className="w-4 h-4 mr-2" />
                Destacar links
              </Button>

              <Button
                size="sm"
                variant={showAltText ? "default" : "outline"}
                onClick={() => setShowAltText(!showAltText)}
                className="w-full justify-start"
                aria-pressed={showAltText}
              >
                <Eye className="w-4 h-4 mr-2" />
                Mostrar texto alternativo
              </Button>
            </div>

            {/* Botão de reset */}
            <Button
              size="sm"
              variant="secondary"
              onClick={resetAll}
              className="w-full mt-4"
            >
              Restaurar padrões
            </Button>
          </CardContent>
        </Card>
      )}

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-[#9E5E6A] hover:bg-[#8B4C57] text-white rounded-lg px-4 py-2 flex items-center justify-center shadow-lg transition-all"
        aria-label="Abrir ferramentas de acessibilidade"
        aria-expanded={isOpen}
      >
        Acessibilidade
      </Button>
    </div>
  );
};
