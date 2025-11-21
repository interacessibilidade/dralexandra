
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      text: "Tratamento excepcional! Alexandra tem um cuidado único com cada paciente.",
      rating: 5
    },
    {
      name: "João Santos",
      text: "Profissionalismo e carinho em cada atendimento. Recomendo!",
      rating: 5
    },
    {
      name: "Ana Costa",
      text: "Ambiente acolhedor e resultados incríveis. Obrigada Alexandra!",
      rating: 5
    }
  ];

  return (
    <section 
      className="py-20" 
      style={{ backgroundColor: "#FFF5F7" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 id="testimonials-heading" className="text-3xl md:text-4xl font-elegant font-bold mb-4">
            O que nossos pacientes dizem
          </h2>
          <p className="text-xl text-gray-600">
            Depoimentos reais de quem confia em nosso cuidado
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-rose-100 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div 
                  className="flex mb-4" 
                  role="img"
                  aria-label={`Avaliação: ${testimonial.rating} de 5 estrelas`}
                >
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" aria-hidden="true" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
