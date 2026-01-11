export default function Transformation() {
  const images = [
    {
      url: 'https://i.pinimg.com/1200x/e4/3b/a3/e43ba382e51215d0a28314f79fe1f828.jpg',
      caption: 'Energia e Vitalidade'
    },
    {
      url: 'https://i.imgur.com/3wH21vC.png',
      caption: 'Confiança Renovada'
    },
    {
      url: 'https://i.imgur.com/ByBIgk8.png',
      caption: 'Saúde e Bem-estar'
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            A <span className="text-green-600">Transformação</span> É Real
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Mulheres acima dos 40 que recuperaram sua saúde, energia e autoestima!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                <p className="text-white text-xl font-bold">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-green-50 to-white rounded-3xl p-12 border-2 border-green-100">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Você Também Pode Ter Essa Transformação!
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Não importa há quanto tempo você está lutando. Não importa quantas
                vezes você tentou antes.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                O que importa é que <strong className="text-green-600">agora você tem um
                método comprovado</strong> que trabalha a raiz do problema e entrega
                resultados reais e duradouros.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-xl">
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    1
                  </div>
                  <p className="text-gray-800">
                    <strong>Agende</strong> sua consulta personalizada
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    2
                  </div>
                  <p className="text-gray-800">
                    <strong>Receba</strong> seu protocolo individual do BioReset12
                  </p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-green-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                    3
                  </div>
                  <p className="text-gray-800">
                    <strong>Transforme</strong> seu corpo, mente e saúde
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
