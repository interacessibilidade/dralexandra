
import { Award } from "lucide-react";

export const MentoriaEligibleProfessionals = () => {
  const eligibleProfessionals = [
    "Biomédicos estetas",
    "Enfermeiros estetas", 
    "Farmacêuticos estetas",
    "Odontólogos",
    "Profissionais com pós-graduação na área estética",
    "Profissionais com formação em HOF (Harmonização Orofacial)"
  ];

  return (
    <section className="py-20 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="eligible-heading" className="text-3xl md:text-4xl font-elegant font-bold mb-6">
            Quem pode participar
          </h2>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eligibleProfessionals.map((professional, index) => (
              <div key={index} className="flex items-center space-x-4 bg-white p-6 rounded-lg shadow-sm">
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-rose-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-4 h-4 text-white" aria-hidden="true" />
                </div>
                <p className="text-lg text-gray-700 font-medium">{professional}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
