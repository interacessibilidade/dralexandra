
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Settings, Plus, Minus, Eye } from "lucide-react";

export const AccessibilityButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [highContrast, setHighContrast] = useState(false);

  const increaseFontSize = () => {
    const newSize = Math.min(fontSize + 2, 24);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}px`;
  };

  const decreaseFontSize = () => {
    const newSize = Math.max(fontSize - 2, 12);
    setFontSize(newSize);
    document.documentElement.style.fontSize = `${newSize}px`;
  };

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
    document.documentElement.classList.toggle("high-contrast");
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div className={`flex flex-col items-end space-y-2 transition-all duration-300 ${isOpen ? 'mb-2' : ''}`}>
        {isOpen && (
          <div className="bg-white shadow-lg rounded-lg p-4 border animate-fade-in">
            <h3 className="text-sm font-semibold mb-3">Acessibilidade</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Button
                  size="sm"
                  variant="outline"
                  onClick={decreaseFontSize}
                  aria-label="Diminuir tamanho da fonte"
                >
                  <Minus className="w-4 h-4" aria-hidden="true" />
                </Button>
                <span className="text-sm">Fonte</span>
                <Button
                  size="sm"
                  variant="outline"
                  onClick={increaseFontSize}
                  aria-label="Aumentar tamanho da fonte"
                >
                  <Plus className="w-4 h-4" aria-hidden="true" />
                </Button>
              </div>
              <Button
                size="sm"
                variant={highContrast ? "default" : "outline"}
                onClick={toggleHighContrast}
                className="w-full"
                aria-label="Alternar modo alto contraste"
              >
                <Eye className="w-4 h-4 mr-1" aria-hidden="true" />
                Alto Contraste
              </Button>
            </div>
          </div>
        )}
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-primary hover:bg-primary-dark text-white rounded-full w-12 h-12 flex items-center justify-center shadow-lg"
          aria-label="Abrir menu de acessibilidade"
          aria-expanded={isOpen}
        >
          <Settings className="w-6 h-6" aria-hidden="true" />
        </Button>
      </div>
    </div>
  );
};
