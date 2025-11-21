
import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";

export const TreatmentDifferential = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-8">
            <div className="w-12 h-12 bg-gradient-to-br from-primary to-rose-400 rounded-full flex items-center justify-center mr-4">
              <Heart className="w-6 h-6 text-white" aria-hidden="true" />
            </div>
            <h2 id="differential-heading" className="text-3xl md:text-4xl font-elegant font-bold">
              Nosso Diferencial
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-rose-200 text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-rose-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl" aria-hidden="true">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Análise Laboratorial</h3>
              <p className="text-gray-600">
                Avaliação completa através de exames para identificar deficiências nutricionais.
              </p>
            </CardContent>
          </Card>
          <Card className="border-rose-200 text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-rose-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl" aria-hidden="true">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Reposição Nutricional</h3>
              <p className="text-gray-600">
                Suplementação personalizada de vitaminas e minerais quando necessário.
              </p>
            </CardContent>
          </Card>
          <Card className="border-rose-200 text-center">
            <CardContent className="p-8">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-rose-400 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-2xl" aria-hidden="true">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Resultados Potencializados</h3>
              <p className="text-gray-600">
                Organismo preparado para responder melhor aos tratamentos estéticos.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
