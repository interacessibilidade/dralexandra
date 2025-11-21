
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Instagram, MapPin, Clock, Mail } from "lucide-react";

const Contact = () => {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative py-20" 
        style={{
          backgroundImage: "url('/lovable-uploads/4328358a-87a3-459f-9a7a-f8e0e4ee3239.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div className="absolute inset-0 bg-white/40"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-elegant font-bold mb-6">
            Entre em Contato
          </h1>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto font-medium font-semibold">
            Estamos aqui para esclarecer suas dúvidas e agendar sua consulta. 
            Você merece cuidado exclusivo!
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-elegant font-bold text-center mb-16">
            Como Falar Conosco
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <Card className="border-rose-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#8B5C6C] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <CardTitle className="text-2xl text-gray-900">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Fale diretamente conosco pelo WhatsApp. Resposta rápida e atendimento personalizado.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-[#8B5C6C] hover:bg-[#8B5C6C]/90 text-white w-full"
                >
                  <a
                    href="https://wa.me/5511954968034"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Entrar em contato via WhatsApp"
                  >
                    <Phone className="w-5 h-5 mr-2 text-white" aria-hidden="true" />
                    (11) 95496-8034
                  </a>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-rose-200 hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-[#8B5C6C] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Instagram className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <CardTitle className="text-2xl text-gray-900">Instagram</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600 mb-6">
                  Acompanhe nosso trabalho, dicas de cuidados e novidades no Instagram.
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-[#8B5C6C] hover:bg-[#7A5262] text-white w-full transition-colors"
                  variant="outline"
                >
                  <a
                    href="https://www.instagram.com/dra.alexandraalcantara/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Seguir no Instagram"
                    className="hover:text-white"
                  >
                    <Instagram className="w-5 h-5 mr-2 text-white" aria-hidden="true" />
                    @dra.alexandraalcantara
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-20 bg-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-elegant font-bold text-center mb-16">
            Nossa Localização
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <Card className="border-rose-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary flex items-center">
                    <MapPin className="w-6 h-6 mr-2" aria-hidden="true" />
                    Endereço
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Century Plaza Business</h3>
                    <p className="text-gray-600">
                      Rua Giovanni Battista Pirelli, 271<br />
                      Vila Homero Thon - Santo André - SP<br />
                      CEP: 09111-340
                    </p>
                  </div>
                  <div className="flex items-center space-x-2 pt-4">
                    <Clock className="w-5 h-5 text-primary" aria-hidden="true" />
                    <div>
                      <p className="font-semibold text-gray-900">Horário de Funcionamento</p>
                      <p className="text-gray-600">Atendimento com horário agendado. Entre em contato para marcar seu horário.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            <div>
              <div className="w-full h-96 rounded-2xl overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.4166829439!2d-46.50962228502076!3d-23.663678184567963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce69cfc6224a93%3A0x1e40a147472ea580!2sCentury%20Plaza%20Business%20(Pr%C3%A9dio%20Comercial)!5e0!3m2!1spt-BR!2sbr!4v1719345678901!5m2!1spt-BR!2sbr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização - Century Plaza Business"
                  className="rounded-2xl"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-elegant font-bold text-center mb-16">
            Informações Importantes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-rose-200 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-rose-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Agendamento</h3>
                <p className="text-gray-600">
                  Agende sua consulta com antecedência pelo WhatsApp para garantir o melhor horário.
                </p>
              </CardContent>
            </Card>
            <Card className="border-rose-200 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-rose-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Primeira Consulta</h3>
                <p className="text-gray-600">
                  Avaliação completa e personalizada para entender suas necessidades e objetivos.
                </p>
              </CardContent>
            </Card>
            <Card className="border-rose-200 text-center">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-rose-400 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Estacionamento</h3>
                <p className="text-gray-600">
                  Localizado em prédio comercial com fácil acesso e estacionamento disponível.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-rose-400 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-elegant font-bold mb-6 text-white">
            Vamos Conversar?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Tire suas dúvidas, conheça nossos tratamentos e agende sua consulta. 
            Estamos prontos para cuidar de você com carinho e profissionalismo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg"
            >
              <a
                href="https://wa.me/5511954968034"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Entrar em contato via WhatsApp"
              >
                <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                Falar no WhatsApp
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-white text-[#8B5C6C] hover:bg-white hover:text-primary hover:border-white px-8 py-4 text-lg transition-colors"
            >
              <a
                href="https://www.instagram.com/dra.alexandraalcantara/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Seguir no Instagram"
              >
                <Instagram className="w-5 h-5 mr-2 text-[#8B5C6C]" aria-hidden="true" />
                Seguir no Instagram
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
