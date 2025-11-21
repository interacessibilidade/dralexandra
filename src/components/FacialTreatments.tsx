
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles } from "lucide-react";

export const FacialTreatments = () => {
  const faceServices = [
    "Limpeza de pele profunda",
    "Tratamento para acne",
    "Tratamento para melasma", 
    "Gerenciamento do envelhecimento facial",
    "Aplicação de botox",
    "Bioestimuladores de colágeno",
    "Preenchimento labial",
    "Preenchimento de olheiras",
    "Preenchimento malar",
    "Preenchimento de marionete",
    "Preenchimento do arco da mandíbula",
    "Indução percutânea de nutrição facial",
    "Skinbooster"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div>
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-rose-400 rounded-full flex items-center justify-center mr-4">
                <Sparkles className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h2 id="face-services-heading" className="text-3xl md:text-4xl font-elegant font-bold">
                Tratamentos Faciais
              </h2>
            </div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Procedimentos especializados para o rosto, focados em realçar sua beleza natural, 
              tratar imperfeições e promover o rejuvenescimento com segurança e eficácia.
            </p>
            <img
              src="/lovable-uploads/269ac893-c006-421e-978f-7715f5d5602c.png"
              alt="Homem de barba e olhos fechados recebe limpeza facial. Seu rosto está coberto por espuma branca, enquanto mãos com luvas transparentes massageiam sua pele."
              className="rounded-2xl shadow-xl w-full h-[300px] object-cover"
              
            />
          </div>
          <Card className="border-rose-200">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Serviços Disponíveis</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {faceServices.map((service, index) => (
                  <li key={index} className="flex items-start space-x-3" role="listitem">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" aria-hidden="true"></div>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};
