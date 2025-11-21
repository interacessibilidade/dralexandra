
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Star, Award } from "lucide-react";

export const FeaturesSection = () => {
  const features = [
    {
      icon: Heart,
      title: "Cuidado Personalizado",
      description: "Cada paciente é único e merece atenção exclusiva"
    },
    {
      icon: Award,
      title: "Excelência Profissional",
      description: "Biomedicina estética com técnicas avançadas"
    },
    {
      icon: Star,
      title: "Resultados Comprovados",
      description: "Elevar a autoestima com segurança e bem-estar"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="features-heading" className="text-3xl md:text-4xl font-elegant font-bold mb-4">
            Por que escolher nossos cuidados?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Combinamos expertise técnica com abordagem humana para proporcionar a melhor experiência em estética
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-rose-100 hover:shadow-lg transition-shadow animate-fade-in">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-rose-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
