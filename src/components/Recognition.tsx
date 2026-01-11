import { Heart, CheckCircle } from 'lucide-react';

export default function Recognition() {
  const feelings = [
    'Você olha no espelho e não se reconhece mais',
    'Sente que seu corpo te traiu e não responde mais aos seus esforços',
    'A balança não se move, não importa o que você tente',
    'Você está cansada de começar e desistir, começar e desistir...',
    'Tem vergonha do seu corpo e evita situações sociais',
    'Acorda cansada, mesmo depois de dormir horas',
    'Sente que perdeu o controle da sua própria saúde',
    'Seus exames mostram alterações e você não sabe por onde começar',
    'Falta de vitaminas e minerais que te deixam cada vez mais debilitada'
  ];

  return (
    <section className="bg-gradient-to-br from-green-600 to-green-700 py-16 md:py-24 text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12 animate-fade-in">
          <Heart className="w-16 h-16 mx-auto mb-6 text-green-200" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Se Você Se Sente Assim...
          </h2>
          <p className="text-xl text-green-100">
            Saiba que você não está sozinha. E mais importante: há uma solução real para você.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {feelings.map((feeling, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg p-6 flex items-start gap-4 hover:bg-white/20 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CheckCircle className="w-6 h-6 text-green-200 flex-shrink-0 mt-1" />
              <p className="text-lg leading-relaxed">{feeling}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
          <p className="text-2xl md:text-3xl font-bold mb-4">
            Você merece se sentir bem no seu próprio corpo
          </p>
          <p className="text-xl text-green-100">
            E isso é completamente possível quando você entende o que realmente está acontecendo
          </p>
        </div>
      </div>
    </section>
  );
}
