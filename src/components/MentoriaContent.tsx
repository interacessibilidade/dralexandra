
import { Card, CardContent } from "@/components/ui/card";
import { Target, Users, Award, Stethoscope, FlaskConical, Syringe, Heart, Brain, TrendingUp, Shield } from "lucide-react";

export const MentoriaContent = () => {
  const learningTopics = [
    {
      icon: Syringe,
      title: "Toxina botulínica",
      description: "Do nível inicial ao avançado – aplicações Fullface, do terço superior ao inferior"
    },
    {
      icon: FlaskConical,
      title: "Bioestimuladores de colágeno",
      description: "Facial e corporal"
    },
    {
      icon: Heart,
      title: "Preenchimento",
      description: "Olheiras, malar, lábios, sulco nasogeniano, mento, arco mandibular"
    },
    {
      icon: Target,
      title: "Skinbooster facial",
      description: "Técnicas avançadas de hidratação profunda"
    },
    {
      icon: Brain,
      title: "Intradermoterapia",
      description: "Facial e corporal"
    },
    {
      icon: Shield,
      title: "Gerenciamento do envelhecimento",
      description: "Estratégias para manutenção da pele"
    },
    {
      icon: Users,
      title: "Associações de protocolos",
      description: "Para harmonização facial completa"
    },
    {
      icon: Stethoscope,
      title: "Análise e indicações",
      description: "Individualizadas por meio da anamnese"
    },
    {
      icon: TrendingUp,
      title: "Precificação de tratamentos",
      description: "Estratégias de mercado e posicionamento"
    },
  ];

  return (
    <section className="py-20 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="content-heading" className="text-3xl md:text-4xl font-elegant font-bold mb-6">
            Conteúdo da mentoria
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {learningTopics.map((topic, index) => (
            <Card key={index} className="border-rose-200 hover:shadow-lg transition-shadow animate-fade-in">
              <CardContent className="p-6">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-rose-400 rounded-full flex items-center justify-center mb-4">
                  <topic.icon className="w-6 h-6 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{topic.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{topic.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
