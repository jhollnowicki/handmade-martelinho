import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Zap, Target, Star } from 'lucide-react';

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: <Target className="h-10 w-10 text-primary" />,
      title: t('services.card1.title'),
      description: t('services.card1.desc'),
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: t('services.card2.title'),
      description: t('services.card2.desc'),
    },
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: t('services.card3.title'),
      description: t('services.card3.desc'),
    },
    {
      icon: <Star className="h-10 w-10 text-primary" />,
      title: t('services.card4.title'),
      description: t('services.card4.desc'),
    }
  ];

  return (
    <section id="servicos" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('services.titulo')}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-brand-gray max-w-3xl mx-auto leading-relaxed mb-8">
            {t('services.subtitulo')}
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
            {t('services.destaqueTitulo')}
          </h3>
          <p className="text-lg text-brand-gray max-w-2xl mx-auto leading-relaxed">
            {t('services.destaqueTexto')}
          </p>
        </div>

        {/* Process Steps */}
        <div className="mt-16">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-foreground mb-12">
            {t('services.etapas.titulo')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((etapa) => (
              <div key={etapa} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {etapa}
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">
                  {t(`services.etapas.e${etapa}.titulo`)}
                </h4>
                <p className="text-brand-gray">
                  {t(`services.etapas.e${etapa}.desc`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
