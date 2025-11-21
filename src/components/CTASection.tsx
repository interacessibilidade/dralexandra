
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Phone } from "lucide-react";

export const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-rose-400 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="cta-heading" className="text-3xl md:text-4xl font-elegant font-bold mb-6 text-white">
          Pronto para se cuidar?
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
          Agende sua consulta e descubra como podemos elevar sua autoestima com cuidado e profissionalismo
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-primary hover:bg-[#424A59] hover:text-white px-8 py-4 text-lg"
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
            className="border-white text-[#8B5C6C] hover:bg-[#424A59] hover:text-white hover:border-[#424A59] px-8 py-4 text-lg"
          >
            <Link to="/contato">
              Ver Localização
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
