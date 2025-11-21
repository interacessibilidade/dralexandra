
export const MentoriaHero = () => {
  return (
    <section 
      className="relative py-32" 
      style={{
        backgroundImage: "url('/lovable-uploads/6d6ecb3a-7f0d-496b-9a05-2f7f85b9a34f.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
      
    >
      <div className="absolute inset-0 bg-gradient-to-br from-rose-100/80 to-rose-300/60" aria-hidden="true"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 id="mentoria-heading" className="text-4xl md:text-5xl font-elegant font-bold mb-6">
          Mentoria com a Dra. Alexandra Alcântara
        </h1>
        <p className="text-xl text-gray-900 mb-8 leading-relaxed max-w-3xl mx-auto font-semibold">
          Aprimore suas habilidades e conquiste mais segurança na sua prática estética. Conheça com detalhes a mentoria da Dra. Alexandra
        </p>
      </div>
    </section>
  );
};
