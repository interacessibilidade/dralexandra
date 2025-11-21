
import { Check } from "lucide-react";

export const MentoriaTargetAudience = () => {
  const targetAudience = [
    "É recém-formado(a) ou profissional que deseja mais segurança nos atendimentos",
    "Quer aperfeiçoar técnicas estéticas com foco em resultados naturais e seguros",
    "Busca orientação prática com uma profissional experiente e referência na área"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="target-heading" className="text-3xl md:text-4xl font-elegant font-bold mb-6">
            Essa mentoria é para você se...
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {targetAudience.map((item, index) => (
              <div key={index} className="flex items-start space-x-4">
                <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Check className="w-4 h-4 text-white" aria-hidden="true" />
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
