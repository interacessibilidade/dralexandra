
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity } from "lucide-react";

export const BodyTreatments = () => {
  const bodyServices = [
    "Massagem relaxante com pedras quentes",
    "Massagem relaxante manual",
    "Drenagem linfática manual pré-operatória",
    "Drenagem linfática manual pós-operatória",
    "Intradermoterapia para gordura localizada",
    "Intradermoterapia para gerenciamento de peso",
    "Intradermoterapia para celulite",
    "Intradermoterapia para estrias",
    "Intradermoterapia capilar",
    "Eletroterapia para tonus muscular",
    "Endermoterapia",
    "Ozonioterapia",
    "Epilação corporal com cera",
    "PEIM (procedimento estético injetável para microvasos)"
  ];

  return (
    <section className="py-20 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Content section - appears first on mobile, second on desktop */}
          <div className="lg:order-2">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-rose-400 rounded-full flex items-center justify-center mr-4">
                <Activity className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <h2 id="body-services-heading" className="text-3xl md:text-4xl font-elegant font-bold text-gray-900">
                Tratamentos Corporais
              </h2>
            </div>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Cuidados completos para o corpo, incluindo massagens terapêuticas, drenagem linfática, 
              tratamentos para gordura localizada, celulite e muito mais.
            </p>
            <img
              src="/lovable-uploads/75c5bf75-3023-4e91-a2a0-f113cd178775.png"
              alt="Close em costas nuas de uma pessoa deitada, com pedras pretas grandes apoiadas sobre a pele. Mãos femininas com esmalte vermelho aplicam massagem ao redor das pedras."
              className="rounded-2xl shadow-xl w-full h-[300px] object-cover"
              
            />
          </div>
          
          {/* Services list - appears second on mobile, first on desktop */}
          <Card className="border-rose-200 lg:order-1">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Serviços Disponíveis</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {bodyServices.map((service, index) => (
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
