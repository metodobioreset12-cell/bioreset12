import { Leaf, Droplet, Clock, User, Brain, Heart } from 'lucide-react';

export default function Pillars() {
  const pillars = [
    {
      icon: Leaf,
      title: 'Dieta Cetocarnívora',
      description: 'Alimentação estratégica que reduz inflamação, reequilibra hormônios e fornece nutrientes essenciais de alta biodisponibilidade'
    },
    {
      icon: Droplet,
      title: 'Água com Sal Integral',
      description: 'Uso terapêutico para hidratação celular profunda, reposição de minerais e desintoxicação natural do organismo'
    },
    {
      icon: Clock,
      title: 'Jejum Intermitente',
      description: 'Ferramenta poderosa de saúde que ativa autofagia, melhora sensibilidade à insulina e otimiza a queima de gordura'
    },
    {
      icon: User,
      title: 'Ajustes Personalizados',
      description: 'Adaptações de estilo de vida baseadas na sua rotina, necessidades e desafios individuais. Nada de protocolo genérico'
    },
    {
      icon: Brain,
      title: 'BioReset Mental',
      description: 'Técnicas e exercícios práticos para transformar a mente, emoções, crenças limitantes e padrões subconscientes'
    },
    {
      icon: Heart,
      title: 'Acompanhamento Individual',
      description: 'Suporte personalizado durante toda sua jornada, com ajustes contínuos para garantir seus resultados'
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-green-50 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Os Pilares do <span className="text-green-600">Método BioReset12</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Um método completo e integrado que trabalha todos os aspectos necessários
            para sua verdadeira transformação
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <pillar.icon className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{pillar.title}</h3>
              <p className="text-gray-700 leading-relaxed">{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-xl">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-4xl font-bold text-green-600">✗</p>
              <p className="text-lg font-semibold text-gray-900">Não é dieta restritiva</p>
              <p className="text-gray-600">É reorganização metabólica</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-green-600">✗</p>
              <p className="text-lg font-semibold text-gray-900">Não é protocolo genérico</p>
              <p className="text-gray-600">É atendimento personalizado</p>
            </div>
            <div className="space-y-2">
              <p className="text-4xl font-bold text-green-600">✓</p>
              <p className="text-lg font-semibold text-gray-900">É adaptado a você</p>
              <p className="text-gray-600">Para funcionar na vida real</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
