import { Zap, Flame, Smile, Brain, Heart, TrendingUp } from 'lucide-react';

export default function Benefits() {
  const benefits = [
    {
      icon: Flame,
      title: 'Corpo Desinflamado e Mais Leve',
      description: 'Reduza o inchaço, dores e desconfortos. Sinta seu corpo funcionando como deveria'
    },
    {
      icon: Zap,
      title: 'Energia e Disposição',
      description: 'Acorde disposta, tenha energia para viver o dia sem cansaço extremo'
    },
    {
      icon: TrendingUp,
      title: 'Emagrecimento Saudável',
      description: 'Perca peso de forma sustentável, sem sofrimento ou efeito sanfona'
    },
    {
      icon: Smile,
      title: 'Autoestima Renovada',
      description: 'Recupere a confiança em você mesma e a conexão positiva com seu corpo'
    },
    {
      icon: Brain,
      title: 'Clareza Mental',
      description: 'Menos névoa mental, mais foco, concentração e bem-estar emocional'
    },
    {
      icon: Heart,
      title: 'Sensação de Controle',
      description: 'Sinta que você está no comando da sua saúde e do seu corpo novamente'
    }
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            O Que Você Vai <span className="text-green-600">Conquistar</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Resultados reais que transformam não apenas seu corpo, mas toda a sua vida
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="flex items-start gap-6 bg-gradient-to-br from-green-50 to-white p-8 rounded-2xl border-2 border-green-100 hover:border-green-300 transition-all duration-300 hover:shadow-lg animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-green-600 w-14 h-14 rounded-full flex items-center justify-center flex-shrink-0">
                <benefit.icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-700 leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-green-600 to-green-700 rounded-3xl p-12 text-center text-white shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Imagine Acordar Todo Dia Sentindo...
          </h3>
          <p className="text-xl md:text-2xl text-green-100 mb-8 max-w-3xl mx-auto">
            Seu corpo leve, sua mente clara, sua energia em alta e a confiança
            de que você está no caminho certo para sua melhor versão
          </p>
          <p className="text-2xl font-bold">
            Isso não é um sonho. É o resultado do Método BioReset12.
          </p>
        </div>
      </div>
    </section>
  );
}
