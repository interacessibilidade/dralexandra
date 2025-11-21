
export const ServicesHero = () => {
  return (
    <section 
      className="relative py-20" 
      style={{
        backgroundImage: "url('/lovable-uploads/5411b5c8-4fdf-4993-9e58-051b05799e9c.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
      
    >
      <div className="absolute inset-0 bg-gradient-to-br from-rose-50/90" aria-hidden="true"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 id="services-heading" className="text-4xl md:text-5xl font-elegant font-bold mb-6">
          Nossos Serviços
        </h1>
       <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto font-medium font-semibold">
          Tratamentos especializados em biomedicina estética, sempre com foco na sua saúde, bem-estar e autoestima
        </p>
        <div className="bg-gradient-to-r from-primary/10 to-rose-100 rounded-2xl p-6 max-w-4xl mx-auto">
          <h2 className="text-2xl font-semibold text-primary mb-4 font-elegant">
            Abordagem Terapêutica Diferenciada
          </h2>
          <p className="text-xl text-gray-700 mb-8 leading-relaxed max-w-3xl mx-auto font-medium">
            Todos os nossos tratamentos incluem análise de exames laboratoriais para identificar e repor vitaminas e minerais, 
            garantindo que seu organismo esteja no estado ideal para potencializar os resultados.
          </p>
        </div>
      </div>
    </section>
  );
};
