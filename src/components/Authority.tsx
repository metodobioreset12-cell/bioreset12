import { Shield, Users, Target, Heart } from 'lucide-react';

export default function Authority() {
  const points = [
    {
      icon: Users,
      title: 'Atendimento 100% Personalizado',
      description: 'Cada pessoa é única. Seu protocolo será exclusivo para você, baseado em suas necessidades, exames e objetivos específicos'
    },
    {
      icon: Target,
      title: 'Foco na Causa Real',
      description: 'Não tratamos apenas sintomas. Identificamos e corrigimos o que está causando seus problemas de saúde, peso e energia'
    },
    {
      icon: Heart,
      title: 'Abordagem Integrativa',
      description: 'Trabalhamos corpo, mente, metabolismo e emoções de forma integrada. Transformação completa e sustentável'
    },
    {
      icon: Shield,
      title: 'Método Comprovado',
      description: 'Baseado em ciência, evidências e resultados reais de centenas de pessoas que já transformaram suas vidas'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-green-600 to-green-700 py-16 md:py-24 text-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Por Que o BioReset12 É Diferente?
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            Um método criado para funcionar de verdade, com suporte real e resultados comprovados
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {points.map((point, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-white/20 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <point.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-3">{point.title}</h3>
              <p className="text-green-100 text-lg leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-3xl p-12 text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">
            Você Não Está Sozinha Nessa Jornada!
          </h3>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Desde a primeira consulta até seus resultados, você terá suporte individualizado,
            ajustes personalizados e acompanhamento constante para garantir seu sucesso
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-2">
              <p className="text-4xl font-bold text-green-600">Individual</p>
              <p className="text-gray-700">Atendimento exclusivo para você</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-green-600">Humano</p>
              <p className="text-gray-700">Cuidado, empatia e respeito</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-green-600">Eficaz</p>
              <p className="text-gray-700">Resultados reais e duradouros</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
