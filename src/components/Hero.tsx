import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const whatsappLink = 'https://wa.me/5544999541124';

  return (
    <section className="relative bg-gradient-to-br from-green-50 to-white py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center text-center mb-12 animate-fade-in">
          <img
            src="https://i.imgur.com/kKcinX7.png"
            alt="BioReset12 Logo"
            className="w-72 md:w-96 lg:w-[28rem] mx-auto mb-8 drop-shadow-2xl"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="text-left space-y-6 animate-slide-in-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Seu Corpo Pode Voltar a{' '}
              <span className="text-green-600">Funcionar Perfeitamente</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              Descubra o método que reorganiza seu metabolismo, reequilibra seus hormônios
              e devolve a energia e autoestima que você merece
            </p>

            <div className="pt-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Agendar Minha Consulta Agora
                <ArrowRight className="w-5 h-5" />
              </a>
              <p className="text-sm text-gray-600 mt-3">
                Atendimento personalizado via WhatsApp
              </p>
            </div>
          </div>

          <div className="animate-slide-in-right">
            <img
              src="https://i.imgur.com/kKcinX7.png"
              alt="Mulher confiante e saudável"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
