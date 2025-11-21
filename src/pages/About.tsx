import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Award, Sparkles } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Empatia",
      description: "Entender e sentir as necessidades de cada paciente com genuíno interesse pelo seu bem-estar."
    },
    {
      icon: Users,
      title: "Conexão",
      description: "Estabelecer vínculos verdadeiros, criando um ambiente de confiança e compreensão mútua."
    },
    {
      icon: Sparkles,
      title: "Acolhimento",
      description: "Receber cada pessoa com carinho, respeito e atenção, fazendo-a sentir-se especial e valorizada."
    },
    {
      icon: Award,
      title: "Profissionalismo",
      description: "Manter os mais altos padrões técnicos e éticos em todos os procedimentos e atendimentos."
    }
  ];

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative py-20" 
        style={{
          backgroundImage: "url('/lovable-uploads/dc1d0338-fb6c-4d60-a60f-3269121f32a8.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
        aria-labelledby="about-heading"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-rose-100/80 to-rose-300/60" aria-hidden="true"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 id="about-heading" className="text-4xl md:text-5xl font-elegant font-bold mb-6">
            Sobre Alexandra Alcântara
          </h1>
          <p className="text-xl text-gray-900 mb-8 leading-relaxed max-w-3xl mx-auto font-semibold">
            Biomédica especializada em estética avançada
          </p>
        </div>
      </section>

      {/* Alexandra Alcântara Section */}
      <section 
        className="py-20 bg-white" 
        aria-labelledby="alexandra-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="alexandra-heading" className="text-3xl md:text-4xl font-elegant font-bold mb-6">
              Um pedacinho da minha história
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                <strong>"Não fui eu que escolhi a Estética como profissão! Foi ela que me escolheu!"</strong>
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Minha primeira formação foi o magistério, dos 17 anos aos 23 anos eu lecionei na primeira infância.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Me casei e vieram os filhos , depois de 05 anos fui trabalhar numa clínica de estética através de um convite de uma amiga.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Não conhecia esse universo, mas fui me interessando, decidi estudar e foi um caminho sem volta.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Então  tenho formação profissionalizante na área da estética corporal e facial, sou biomédica esteta pós graduada em estética e farmácia e tenho uma especialização internacional na área da harmonização.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                A formação profissionalizante foi no colégio ETIP em Santo André. O bacharelado em biomedicina foi na universidade Nove de Julho mais conhecida como Uninove (na vila Prudente). Pós graduação em estética e farmácia no IPESSP. E residência e especialização Fresh Frosen Cadáver em Verona Itália.
              </p>
            </div>
            <div>
              {/* Desktop/Tablet Image */}
              <img
                src="/lovable-uploads/cd28a43c-983f-4503-a62d-5c55b342874b.png"
                alt="Montagem de quatro fotos com o título central Minha História. No canto superior esquerdo, Dra Alexandra de cabelos grisalhos curtos posa sorridente ao lado de uma coluna identificada com o logotipo ICLO. No canto superior direito, ela aparece abraçada a um homem de jaleco azul, ambos sorrindo. Na parte inferior esquerda, um retrato dela usando óculos e batom vermelho, com uma foto menor de antes de um tratamento. Na parte inferior direita, Dra Alexandra realiza um procedimento estético em uma mulher deitada, acompanhada por outro profissional de jaleco preto."
                className="hidden md:block rounded-2xl shadow-xl w-full h-[600px] object-cover"
                
              />
              {/* Mobile Image */}
              <img
                src="/lovable-uploads/900265c9-1bcb-494b-9451-64f0aacdaa21.png"
                alt="Collage histórico da trajetória de Alexandra Alcântara mostrando momentos importantes da sua carreira, capacitações e evolução profissional"
                className="block md:hidden rounded-2xl shadow-xl w-full h-auto object-contain"
                
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section 
        className="py-20" 
        style={{ backgroundColor: "#FFF5F7" }}
        aria-labelledby="mission-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="mission-heading" className="text-3xl md:text-4xl font-elegant font-bold mb-6">
              Nossa Missão
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Elevar a autoestima de pessoas de todas as idades, mostrando que nunca é tarde para se cuidar. 
                Nosso foco está em proporcionar tratamentos que vão além da estética, priorizando sempre a saúde e o bem-estar integral de cada paciente.
              </p>
              <div className="rounded-2xl p-8" style={{ backgroundColor: "#FFFFFF" }}>
                <h3 className="text-2xl font-semibold text-primary mb-4 font-elegant">
                  "Você merece cuidado exclusivo"
                </h3>
                <p className="text-lg text-gray-700">
                  Este é mais que um slogan - é a filosofia que guia cada atendimento, cada procedimento e cada relacionamento que construímos com nossos pacientes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section 
        className="py-20" 
        style={{ backgroundColor: "#FFFFFF" }}
        aria-labelledby="values-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 id="values-heading" className="text-3xl md:text-4xl font-elegant font-bold mb-6">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os pilares que sustentam nossa abordagem e definem como cuidamos de cada paciente
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="border-rose-200 hover:shadow-lg transition-shadow animate-fade-in">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-rose-400 rounded-full flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section 
        className="py-20" 
        style={{ backgroundColor: "#FFF5F7" }}
        aria-labelledby="approach-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
            <img
              src="/lovable-uploads/22e82399-6d12-46f3-bee4-b1f77dc75503.png"
              alt="Mulher jovem de cabelos escuros presos por uma faixa preta está sentada em perfil, enquanto Dra Alexandra, parcialmente visível de costas, observa atentamente seu rosto e aponta com as mãos para a região do queixo."
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
            </div>
            <div>
              <h2 id="approach-heading" className="text-3xl md:text-4xl font-elegant font-bold mb-6">
                Nossa Abordagem Diferenciada
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1" aria-hidden="true">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Análise Integral</h3>
                    <p className="text-gray-600">
                      Avaliação completa através de exames laboratoriais para identificar deficiências nutricionais e potencializar resultados.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1" aria-hidden="true">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Tratamento Personalizado</h3>
                    <p className="text-gray-600">
                      Cada protocolo é desenvolvido especificamente para as necessidades e objetivos únicos de cada paciente.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1" aria-hidden="true">
                    <div className="w-3 h-3 bg-primary rounded-full"></div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Acompanhamento Contínuo</h3>
                    <p className="text-gray-600">
                      Suporte e monitoramento em todas as etapas do tratamento para garantir os melhores resultados.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
