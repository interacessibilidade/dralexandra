
import { Button } from "@/components/ui/button";

export const MentoriaCTA = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center">
          <div className="bg-gradient-to-r from-primary/10 to-rose-100 rounded-2xl p-8 md:p-12 text-center max-w-4xl w-full">
            <h2 id="cta-heading" className="text-3xl md:text-4xl font-elegant font-bold mb-6">
              Pronto para transformar sua prática estética?
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Junte-se à mentoria e eleve seu nível profissional com orientação especializada.
            </p>
            <div className="flex justify-center">
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-[#111827] text-white text-lg px-8 py-4"
              >
                <a
                  href="https://wa.me/5511911282801"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Entrar em contato para participar da mentoria"
                >
                  Quero participar da mentoria
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
