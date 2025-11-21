import { Card, CardContent } from "@/components/ui/card";

export const WelcomeSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 id="welcome-heading" className="text-3xl md:text-4xl font-elegant font-bold mb-8 text-primary">
              Bem-vindo ao Espaço da Dra. Alexandra Alcântara
            </h2>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                No Espaço da Dra. Alexandra Alcântara, cada detalhe foi pensado com carinho para oferecer um atendimento humanizado, seguro e alinhado com a ciência e o cuidado integral.
              </p>
              <p>
                A Dra. Alexandra Alcântara, biomédica especializada em estética, une conhecimento técnico, sensibilidade e escuta acolhedora para proporcionar experiências que vão além da estética. Aqui, acreditamos que a beleza floresce quando corpo, mente e emoções estão em equilíbrio.
              </p>
              <p>
                Você encontra tratamentos estéticos personalizados, tecnologias avançadas e orientações que valorizam sua autoestima e promovem saúde e bem-estar de forma consciente.
              </p>
              <p className="font-semibold text-primary">
                Mais do que cuidar da aparência, nosso propósito é cuidar de você por inteiro. Sinta-se acolhida e viva uma transformação real — de dentro para fora.
              </p>
            </div>
          </div>
          <div>
            <img
              src="/lovable-uploads/b8a19725-d8f3-4a26-b672-796679e1dd37.png"
              alt="Dra. Alexandra Alcantara, de cabelos curtos grisalhos, penteados para o lado, sorri. Ela usa jaleco branco, brincos e colar delicado, em frente a um fundo marrom liso."
              className="rounded-2xl shadow-xl w-full h-[500px] object-cover"
              
            />
           
          </div>
        </div>
      </div>
    </section>
  );
};