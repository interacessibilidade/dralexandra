
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

export const ServicesPreview = () => {
  return (
    <section className="py-20 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="services-preview-heading" className="text-3xl md:text-4xl font-elegant font-bold mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tratamentos personalizados para face e corpo, sempre com foco no seu bem-estar
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <Card className="border-rose-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <img
                src="/lovable-uploads/976e722f-98ff-47e2-bd3d-36b51407ea45.png"
                alt="Um homem de barba curta e olhos fechados está deitado em uma cadeira de procedimentos, usando touca descartável. Duas profissionais de jaleco branco, luvas e máscara aplicam injeções em seu rosto."
                className="w-full h-48 object-cover rounded-lg mb-6"
                
              />
              <h3 id="facial-treatments-desc" className="text-2xl font-semibold text-gray-900 mb-4">Tratamentos Faciais</h3>
              <p className="text-gray-600 mb-4">
                Limpeza de pele, tratamento para acne, melasma, botox, preenchimentos e muito mais.
              </p>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Link to="/servicos" aria-label="Ver todos Tratamentos Faciais">Ver Todos</Link>
              </Button>
            </CardContent>
          </Card>
          <Card className="border-rose-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <img
                src="/lovable-uploads/d3ebf884-fdbb-47e0-8b6c-7590bf9a107b.png"
                alt="Pessoa deitada de bruços em uma maca coberta por toalha branca. Sobre suas costas nuas há quatro pedras pretas de massagem aquecida, alinhadas na coluna."
                className="w-full h-48 object-cover rounded-lg mb-6"
                
              />
              <h3 id="body-treatments-desc" className="text-2xl font-semibold text-gray-900 mb-4">Tratamentos Corporais</h3>
              <p className="text-gray-600 mb-4">
                Massagens, drenagem linfática, intradermoterapia e tratamentos corporais completos.
              </p>
              <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Link to="/servicos" aria-label="Ver todos Tratamentos Corporais">Ver Todos</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
