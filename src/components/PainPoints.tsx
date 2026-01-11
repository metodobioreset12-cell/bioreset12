import { AlertCircle } from 'lucide-react';

export default function PainPoints() {
  const pains = [
    'Corpo pesado e constantemente inchado, como se você carregasse um peso extra todos os dias',
    'Cansaço extremo que não passa, mesmo depois de dormir',
    'Dores articulares e musculares que limitam seus movimentos',
    'Abdômen estufado e desconfortável, não importa o que você coma',
    'Falta total de energia para fazer as coisas que você gostaria',
    'Ansiedade, irritabilidade e mudanças de humor constantes',
    'Tentou várias dietas e nada funcionou de verdade',
    'Baixa autoestima e a sensação de que perdeu a conexão com seu corpo',
    'A impressão de que seu corpo simplesmente não funciona mais como antes'
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12 animate-fade-in">
          <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Você Está Sentindo Isso?
          </h2>
          <p className="text-xl text-gray-700">
            Se você se identifica com esses sinais, não está sozinha.
            Milhares de mulheres enfrentam exatamente o mesmo...
          </p>
        </div>

        <div className="bg-red-50 border-l-4 border-red-500 rounded-lg p-8 space-y-4">
          {pains.map((pain, index) => (
            <div
              key={index}
              className="flex items-start gap-3 animate-slide-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
              <p className="text-gray-800 text-lg leading-relaxed">{pain}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-green-50 border-l-4 border-green-600 rounded-lg p-8 text-center">
          <p className="text-xl md:text-2xl font-semibold text-gray-900 italic">
            "Isso não é falta de força de vontade. É o seu corpo desorganizado pedindo ajuda."
          </p>
        </div>
      </div>
    </section>
  );
}
