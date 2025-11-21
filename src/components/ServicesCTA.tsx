
import { Button } from "@/components/ui/button";

export const ServicesCTA = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-rose-400 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 id="cta-heading" className="text-3xl md:text-4xl font-elegant font-bold mb-6 text-white">
          Pronto para começar sua jornada de cuidados?
        </h2>
        <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
          Agende uma consulta e descubra qual o melhor tratamento para você. 
          Lembre-se: você é único e merece cuidado exclusivo!
        </p>
        <Button
          asChild
          size="lg"
          className="bg-white text-primary hover:bg-gray-100 px-8 py-4 text-lg"
        >
          <a
            href="https://wa.me/5511954968034"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Agendar consulta via WhatsApp"
          >
            Agendar Consulta
          </a>
        </Button>
      </div>
    </section>
  );
};
