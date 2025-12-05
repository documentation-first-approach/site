import { Settings, Trophy, Zap, Rocket, Handshake, Heart } from 'lucide-react';

export function KeyBenefitsSection() {
  const benefits = [
    {
      icon: Settings,
      title: 'Output determinístico',
      description: 'Mesmo input produz mesmo output, sempre. Sem mais resultados imprevisíveis.',
    },
    {
      icon: Trophy,
      title: 'Alta qualidade garantida',
      description: '80%+ de cobertura de testes, SOLID, DDD, Object Calisthenics aplicados automaticamente.',
    },
    {
      icon: Zap,
      title: 'Rápido e previsível',
      description: 'Saiba exatamente quanto tempo features vão levar. Velocidade consistente entre sprints.',
    },
    {
      icon: Rocket,
      title: 'Código pronto para produção',
      description: 'Entregue com testes, documentação, zero dívida técnica. Pronto para deploy.',
    },
    {
      icon: Handshake,
      title: 'Alinhamento de time',
      description: 'Especificações compartilhadas = entendimento compartilhado. Sem mais falha de comunicação.',
    },
    {
      icon: Heart,
      title: 'Open source e gratuito',
      description: 'Licença MIT, gratuito para sempre. Desenvolvimento orientado pela comunidade.',
    },
  ];

  return (
    <section className="py-32 md:py-40 bg-black border-t border-neutral-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="text-2xl font-mono font-normal text-white mb-16">
            Principais benefícios
          </h2>

          {/* Benefits - Simple list */}
          <div className="space-y-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="border-l-2 border-neutral-800 pl-6">
                  <div className="flex items-start gap-4">
                    <Icon className="h-6 w-6 text-neutral-600 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-mono text-white mb-2">
                        {benefit.title}
                      </h3>
                      <p className="text-base font-mono text-neutral-500">
                        {benefit.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
