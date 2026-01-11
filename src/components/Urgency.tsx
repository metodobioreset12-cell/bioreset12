import { Clock, Calendar, AlertCircle } from 'lucide-react';

export default function Urgency() {
  return (
    <section className="bg-gradient-to-br from-red-50 to-orange-50 py-16 md:py-24">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12 animate-fade-in">
          <AlertCircle className="w-16 h-16 text-orange-600 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Atenção: <span className="text-orange-600">Vagas Limitadas!</span>
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-12">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center space-y-4">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Calendar className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Vagas Semanais Limitadas</h3>
              <p className="text-gray-700">
                Para garantir atendimento de qualidade, aceitamos apenas um número limitado
                de novos pacientes por semana
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <Clock className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Atendimento Personalizado</h3>
              <p className="text-gray-700">
                Cada consulta é individual e dedicada. Isso significa tempo limitado
                de agenda disponível
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="bg-orange-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
                <AlertCircle className="w-10 h-10 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Não Deixe Para Depois</h3>
              <p className="text-gray-700">
                Quanto mais você espera, mais difícil fica reverter o quadro. Seu corpo
                precisa de atenção agora
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-orange-500 to-red-500 rounded-2xl p-8 text-center text-white">
            <p className="text-2xl md:text-3xl font-bold mb-4">
              Cada Dia Que Passa É Mais Um Dia Sem Resultados!
            </p>
            <p className="text-xl text-orange-100 mb-6">
              Você já passou tempo suficiente sofrendo com o corpo desorganizado,
              falta de energia e baixa autoestima!
            </p>
            <p className="text-2xl font-bold">
              Não espere mais. Agende sua consulta AGORA e comece sua TRANSFORMALÇAO!
            </p>
          </div>
        </div>

        <div className="mt-12 bg-white border-4 border-orange-400 rounded-3xl p-8 text-center">
          <p className="text-2xl font-bold text-gray-900 mb-2">
            Quanto mais cedo você começar...
          </p>
          <p className="text-xl text-gray-700">
            ...mais rápido você terá o corpo, a energia e a autoestima que você merece!
          </p>
        </div>
      </div>
    </section>
  );
}
