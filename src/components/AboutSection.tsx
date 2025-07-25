import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';

const AboutSection = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Experiência Comprovada",
      description: "Anos de experiência em reparos automotivos de alta qualidade"
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Atendimento Personalizado",
      description: "Cada cliente recebe atenção especial e cuidado único"
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Acabamento Impecável",
      description: "Resultado perfeito sem comprometer a pintura original"
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Rapidez e Conveniência",
      description: "Atendimento a domicílio com horários flexíveis"
    }
  ];

  return (
    <section id="quem-somos" className="py-20 bg-brand-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Quem Somos
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-brand-gray max-w-3xl mx-auto leading-relaxed">
            A <strong>Handmade Martelinho de Ouro</strong> é especializada em reparos automotivos 
            de alta qualidade, focando na <strong>excelência e atenção aos detalhes</strong>. 
            Nossa missão é devolver a beleza original do seu veículo através de técnicas 
            avançadas de martelinho de ouro, <strong>sem comprometer a pintura original</strong>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300 border-0 bg-background">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-brand-gray text-sm leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-background rounded-lg p-8 shadow-md max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              Nossa Promessa
            </h3>
            <p className="text-lg text-brand-gray leading-relaxed mb-6">
              Trabalhamos com <strong className="text-primary">profissionalismo</strong> e 
              <strong className="text-primary"> paixão pelo que fazemos</strong>, garantindo 
              que cada reparo seja executado com a máxima precisão. Nosso compromisso é 
              entregar um <strong className="text-primary">acabamento impecável</strong> que 
              supere suas expectativas.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-brand-gray">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Atendimento humanizado</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Técnicas avançadas</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>Resultados duradouros</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;