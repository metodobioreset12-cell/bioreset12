import { ArrowRight, MessageCircle, CheckCircle } from 'lucide-react';

export default function FinalCTA() {
  const whatsappLink = 'https://wa.me/5544999541124';

  return (
    <section className="bg-gradient-to-br from-green-600 via-green-700 to-green-800 py-16 md:py-24 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 max-w-5xl relative z-10">
        <div className="text-center mb-12 animate-fade-in">
          <img
            src="https://i.imgur.com/kKcinX7.png"
            alt="BioReset12 Logo"
            className="w-72 md:w-96 lg:w-[28rem] mx-auto mb-8 drop-shadow-2xl"
          />

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Você Merece Voltar a Se Sentir Maravilhosamente Bem!
          </h2>

          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Seu corpo pode voltar a funcionar. Você pode ter energia. Pode se sentir
            leve. Pode recuperar sua autoestima. Pode ser saudável novamente.
          </p>

          <p className="text-2xl md:text-3xl font-bold mb-12">
            E tudo isso começa com uma decisão: AGENDAR sua consulta AGORA!
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl mb-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
            O Que Você Não Precisa Mais Aceitar:
          </h3>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {[
              'Viver cansada e sem energia',
              'Sentir seu corpo inflamado e pesado',
              'Sofrer com desequilíbrios hormonais',
              'Ter deficiência de vitaminas e minerais',
              'Olhar no espelho e não gostar do que vê',
              'Tentar dietas que não funcionam',
              'Sentir que seu corpo não responde mais',
              'Viver com baixa autoestima e frustração'
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <p className="text-gray-800 text-lg">{item}</p>
              </div>
            ))}
          </div>

          <div className="bg-green-50 border-2 border-green-600 rounded-2xl p-6 text-center">
            <p className="text-2xl font-bold text-gray-900 mb-2">
              Você pode escolher uma vida diferente!
            </p>
            <p className="text-xl text-gray-700">
              Uma vida com saúde, energia, leveza e autoestima!
            </p>
          </div>
        </div>

        <div className="text-center space-y-6">
          <p className="text-2xl md:text-3xl font-bold">
            Não Continue Sofrendo. A Solução Existe.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 bg-white text-green-700 font-bold text-xl px-12 py-6 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 animate-pulse-slow"
          >
            <MessageCircle className="w-7 h-7" />
            Agendar Minha Consulta Agora!
            <ArrowRight className="w-7 h-7" />
          </a>

          <p className="text-green-100 text-lg">
            Atendimento personalizado via WhatsApp
          </p>

          <div className="pt-8 border-t border-white/20 mt-12">
            <p className="text-xl font-semibold mb-4">
              Sua transformação começa com um clique
            </p>
            <p className="text-lg text-green-100">
              Entre em contato agora e dê o primeiro passo para recuperar sua saúde,
              seu corpo e sua autoestima!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
