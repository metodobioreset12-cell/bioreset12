import { Sparkles, ArrowRight } from 'lucide-react';

export default function Solution() {
  const whatsappLink = 'https://wa.me/5544999541124';

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <Sparkles className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Conheça o <span className="text-green-600">Método BioReset12</span>
          </h2>
          <p className="text-2xl text-gray-700 font-semibold mb-4">
            O caminho simples para Resetar Corpo, Mente e Metabolismo!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <div className="order-2 md:order-1">
            <img
              src="https://i.imgur.com/QTv8jdN.jpeg"
              alt="Transformação e saúde"
              className="rounded-3xl shadow-2xl w-full object-cover"
            />
          </div>

          <div className="order-1 md:order-2 space-y-6">
            <p className="text-xl text-gray-700 leading-relaxed">
              O <strong className="text-green-600">Método BioReset12</strong> é um programa
              completo de <strong>reequilíbrio e reorganização metabólica, nutricional e mental</strong>.
            </p>

            <p className="text-xl text-gray-700 leading-relaxed">
              Diferente de dietas restritivas e protocolos genéricos, o BioReset12 atua na
              <strong className="text-green-600"> raiz do problema</strong>, não apenas nos sintomas.
            </p>

            <div className="bg-green-50 border-l-4 border-green-600 rounded-lg p-6 space-y-3">
              <p className="font-bold text-lg text-gray-900">O método trabalha com:</p>
              <ul className="space-y-2 text-gray-800">
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  Equilíbrio de nutrientes, vitaminas e minerais
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  Organização hormonal natural
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  Redução profunda da inflamação corporal
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  Reativação do metabolismo de forma sustentável
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-600 font-bold">✓</span>
                  Transformação mental, emocional e de crenças limitantes
                </li>
              </ul>
            </div>

            <div className="bg-gray-900 text-white rounded-2xl p-8 text-center">
              <p className="text-xl font-bold mb-2">100% Personalizado</p>
              <p className="text-gray-300">
                Cada consulta é individual e adaptada à sua realidade, necessidades e objetivos
              </p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-green-600 hover:bg-green-700 text-white font-bold text-lg px-8 py-5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Quero Conhecer o Método BioReset12
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
