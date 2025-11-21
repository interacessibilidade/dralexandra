
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar } from "lucide-react";

export const HeroSection = () => {
  return (
    <section 
      className="relative h-[60vh] md:h-[80vh] flex items-center justify-center" 
      style={{
        backgroundImage: "url('/lovable-uploads/4aa83fbf-1395-4cc2-977e-a157bf721b9c.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
      
    >
      <div className="absolute inset-0 bg-white/60" aria-hidden="true"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 id="hero-heading" className="text-4xl md:text-5xl lg:text-6xl font-elegant text-gray-900 mb-6">
          <span className="text-primary block">Biomedicina Estética Avançada</span>
          
          
        </h1>
        <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto font-medium font-semibold">
          Você merece cuidado exclusivo! Elevar a autoestima, sem esquecer do bem-estar e saúde do paciente.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-primary hover:bg-[#424A59] text-white px-8 py-4 text-lg"
          >
            <a
              href="https://wa.me/5511954968034"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Agendar consulta via WhatsApp"
            >
              <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
              Agendar Consulta
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary text-primary hover:bg-primary hover:text-white px-8 py-4 text-lg"
          >
            <Link to="/servicos">
              Conhecer Serviços
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
