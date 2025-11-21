export const SpecializedTreatments = () => {
  return (
    <section className="py-20 bg-rose-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 id="specialized-treatments-heading" className="text-3xl md:text-4xl font-elegant font-bold mb-8 text-primary">
            Tratamentos Especializados
          </h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Experimente nossos tratamentos personalizados, com cuidado e atenção em cada detalhe.
          </p>
          <div className="flex justify-center">
            {/* Desktop/Tablet Image */}
            <img
              src="/lovable-uploads/24163645-03d6-4ca5-93f8-8c295fc1f07a.png"
              alt="Montagem com fotos de antes e depois de procedimentos estéticos. Aparecem homens e mulheres com melhora visível na aparência da pele e no contorno do rosto. Em algumas imagens, a palavra Antes está à esquerda e Depois à direita."
              className="hidden md:block rounded-2xl shadow-xl max-w-2xl w-full h-[500px] object-cover"
              
            />
            {/* Mobile Image */}
            <img
              src="/lovable-uploads/a562701e-b14e-42fc-b8e2-c5b365fdb882.png"
              alt="Collage de resultados de tratamentos especializados mostrando transformações antes e depois em diversos pacientes"
              className="block md:hidden rounded-2xl shadow-xl max-w-2xl w-full h-auto object-contain"
              
            />
          </div>
        </div>
      </div>
    </section>
  );
};