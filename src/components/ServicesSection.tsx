import { Card, CardContent } from '@/components/ui/card';
import { Shield, Zap, Target, Star } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: "Remoção de Amassados",
      description: "Eliminação precisa de amassados pequenos e médios sem danificar a pintura original do veículo."
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Reparo sem Pintura",
      description: "Técnica especializada que preserva 100% da pintura de fábrica, mantendo a originalidade."
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Serviço Rápido",
      description: "Reparos executados com agilidade, sem comprometer a qualidade do acabamento final."
    },
    {
      icon: <Star className="h-10 w-10 text-primary" />,
      title: "Acabamento Premium",
      description: "Resultado impecável com atenção aos mínimos detalhes, superando expectativas."
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Nossos Serviços
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-brand-gray max-w-3xl mx-auto leading-relaxed mb-8">
            Especializados em <strong>martelinho de ouro</strong>, oferecemos reparos 
            automotivos de alta qualidade com foco na preservação da pintura original.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-card">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-brand-gray leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Highlight Section */}
        <div className="bg-brand-blue-light rounded-lg p-8 md:p-12 text-center">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-6">
            "Trabalhamos com precisão milimétrica, devolvendo o visual original do seu veículo."
          </h3>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto leading-relaxed">
            Nossa técnica avançada de martelinho de ouro garante reparos <strong>rápidos</strong> e 
            <strong> duradouros</strong>, sem afetar a pintura original. Cada detalhe é cuidadosamente 
            trabalhado para entregar um resultado que supera as expectativas.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            Como Funciona Nosso Processo
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Avaliação</h4>
              <p className="text-brand-gray">
                Análise detalhada do dano e definição da melhor técnica de reparo.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Execução</h4>
              <p className="text-brand-gray">
                Aplicação da técnica de martelinho de ouro com precisão e cuidado.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h4 className="text-xl font-semibold text-foreground mb-3">Entrega</h4>
              <p className="text-brand-gray">
                Veículo finalizado com acabamento impecável e pintura preservada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;