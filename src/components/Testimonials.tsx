import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Maria Silva',
      age: 52,
      photo: 'https://images.pexels.com/photos/3768146/pexels-photo-3768146.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      text: 'Depois de anos lutando contra o peso e a inflamação, finalmente encontrei algo que funciona. Perdi 18kg, meu corpo desinchou e voltei a ter energia. Me sinto 10 anos mais jovem!',
      rating: 5
    },
    {
      name: 'Ana Paula Oliveira',
      age: 47,
      photo: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      text: 'O BioReset12 mudou minha vida. Meus exames de sangue normalizaram, minha ansiedade diminuiu drasticamente e emagreci 12kg sem sofrimento. Não acredito que levei tanto tempo para encontrar essa solução.',
      rating: 5
    },
    {
      name: 'Juliana Costa',
      age: 44,
      photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      text: 'Estava com deficiência de vitaminas graves, hormônios desregulados e sem energia nenhuma. Em 3 meses de método, me sinto outra pessoa. Voltei a me olhar no espelho e gostar do que vejo!',
      rating: 5
    },
    {
      name: 'Roberto Mendes',
      age: 49,
      photo: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      text: 'Como homem, eu também sofria com peso, inflamação e falta de energia. O método é claro, direto e funciona. Já eliminei 15kg e minha saúde melhorou em todos os aspectos. Recomendo!',
      rating: 5
    },
    {
      name: 'Carla Fernandes',
      age: 56,
      photo: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      text: 'Tentei de tudo: nutricionistas, dietas, remédios. Nada funcionava. O BioReset12 foi diferente desde o primeiro dia. Entendi o que estava acontecendo comigo e finalmente consegui resultados reais e duradouros.',
      rating: 5
    },
    {
      name: 'Patricia Almeida',
      age: 41,
      photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop',
      text: 'Estava em um ciclo de frustração constante. O método não só me ajudou a emagrecer 14kg, mas também transformou minha relação com a comida e comigo mesma. Minha autoestima está nas alturas!',
      rating: 5
    }
  ];

  return (
    <section className="bg-gradient-to-br from-gray-50 to-green-50 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <Quote className="w-16 h-16 text-green-600 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Quem Já Transformou a Vida com o <span className="text-green-600">BioReset12</span>
          </h2>
          <p className="text-xl text-gray-700">
            Histórias reais de pessoas que decidiram mudar e conquistaram resultados incríveis
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center gap-4 mb-6">
                <img
                  src={testimonial.photo}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-green-100"
                />
                <div>
                  <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                  <p className="text-sm text-gray-600">{testimonial.age} anos</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-gray-700 leading-relaxed italic">"{testimonial.text}"</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center bg-white rounded-2xl p-12 shadow-xl">
          <p className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            E você? Quando vai ser a próxima história de sucesso?
          </p>
          <p className="text-xl text-gray-700">
            Não espere mais para começar sua transformação
          </p>
        </div>
      </div>
    </section>
  );
}
