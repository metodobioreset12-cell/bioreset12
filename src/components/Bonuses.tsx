import { BookOpen, Brain, FileText, ChefHat, Gift } from 'lucide-react';

function Bonuses() {
  const bonuses = [
    {
      icon: BookOpen,
      title: 'E-book Oficial do Método BioReset12',
      description: 'Guia completo e prático que ensina como funciona o método, explica o reequilíbrio metabólico, hormonal e nutricional em linguagem simples e aplicável ao seu dia a dia'
    },
    {
      icon: Brain,
      title: 'E-book Método BioReset Mental',
      description: 'Foco na mente e comportamento. Explica a relação entre emoções, hormônios e inflamação. Ajuda a reduzir ansiedade, compulsão e autossabotagem, fortalecendo constância e autocuidado'
    },
    {
      icon: FileText,
      title: 'Protocolos Específicos Personalizados',
      description: 'Protocolos ajustados para cada fase do seu processo, baseados no seu metabolismo, inflamação e necessidades individuais. Nada genérico ou padronizado'
    },
    {
      icon: ChefHat,
      title: 'Receitas Práticas para o Dia a Dia',
      description: 'Receitas simples, rápidas e alinhadas à dieta cetocarnívora. Facilitam sua rotina e ajudam a manter constância sem sofrimento'
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <Gift className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Tudo o Que Você Recebe ao Iniciar o{' '}
            <span className="text-green-600">Método BioReset12!</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Você não estará sozinha. O método inclui materiais e protocolos para
            te acompanhar em cada fase da sua transformação!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {bonuses.map((bonus, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-green-50 to-white rounded-2xl p-8 border-2 border-green-200 hover:border-green-400 transition-all duration-300 hover:shadow-xl animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-6">
                <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0">
                  <bonus.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <div className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full inline-block mb-3">
                    BÔNUS {index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{bonus.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{bonus.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">
            Você Terá Todo o Suporte Necessário
          </h3>
          <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto">
            Os bônus existem para facilitar sua transformação. O método foi criado para
            funcionar na vida real. Você não precisa se virar sozinha.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <p className="text-2xl font-bold mb-2">Materiais Completos</p>
              <p className="text-green-100">Tudo que você precisa saber</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <p className="text-2xl font-bold mb-2">Protocolos Práticos</p>
              <p className="text-green-100">Para aplicar no dia a dia</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6">
              <p className="text-2xl font-bold mb-2">Receitas Fáceis</p>
              <p className="text-green-100">Sem complicação na cozinha</p>
            </div>
          </div>
        </div>

        <div className="mt-12 bg-green-50 border-l-4 border-green-600 rounded-lg p-8">
          <p className="text-xl text-gray-800 font-semibold text-center">
            Tudo foi pensado para você ter sucesso. Cada material, cada protocolo,
            cada receita existe para tornar sua transformação mais fácil e sustentável.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Bonuses;
