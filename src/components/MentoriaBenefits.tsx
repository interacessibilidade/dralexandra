import { CheckCircle } from "lucide-react";

export const MentoriaBenefits = () => {
  const benefits = [
    "Técnicas avançadas e atualizadas para harmonização facial",
    "Maior segurança e confiança na aplicação de procedimentos",
    "Protocolos personalizados para diferentes tipos de pacientes",
    "Estratégias de precificação e valorização do seu trabalho",
    "Aprimoramento do atendimento humanizado e ético",
    "Conhecimento sobre anatomia aplicada à estética",
    "Gestão de complicações e intercorrências",
    "Networking com outros profissionais da área",
    "Certificação e reconhecimento profissional",
    "Aumento da cartela de clientes e fidelização"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="benefits-heading" className="text-3xl md:text-4xl font-elegant font-bold mb-6">
            Benefícios da Mentoria
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            O que você vai levar para sua carreira
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-gradient-to-br from-primary to-rose-400 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle className="w-4 h-4 text-white" aria-hidden="true" />
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
          
          <div>
            {/* Desktop/Tablet Image */}
            <img
              src="/lovable-uploads/b327f90d-6fda-475e-8bb9-84ba144f10ef.png"
              alt="Profissionais aplicando técnicas de harmonização facial aprendidas na mentoria, demonstrando procedimentos práticos"
              className="hidden md:block rounded-2xl shadow-xl w-full h-[600px] object-cover"
              
            />
            {/* Mobile Image */}
              <img
                src="/lovable-uploads/9de28ab4-7ac6-481c-8c6a-915c7f64bb8b.png"
                alt="Montagem de fotos na clínica da Dra Alexandra. Há nas imagens pessoas em procedimentos estéticos, incluindo aplicação de injeções no rosto, consulta com profissionais de jaleco branco e momentos de grupo, como entrega de certificado e fotos em equipe. Algumas pessoas estão sentadas em cadeiras de atendimento."
                className="block md:hidden rounded-2xl shadow-xl w-full h-auto object-contain"
                
              />
          </div>
        </div>
      </div>
    </section>
  );
};