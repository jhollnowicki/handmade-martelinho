import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Users, Award, Clock } from 'lucide-react';

const AboutSection = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: t('about.feature1.title'),
      description: t('about.feature1.desc'),
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: t('about.feature2.title'),
      description: t('about.feature2.desc'),
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: t('about.feature3.title'),
      description: t('about.feature3.desc'),
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: t('about.feature4.title'),
      description: t('about.feature4.desc'),
    },
  ];

  return (
    <section id="quem-somos" className="py-20 bg-brand-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('about.titulo')}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-brand-gray max-w-3xl mx-auto leading-relaxed">
            {t('about.descricao')}
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
              {t('about.promessa.titulo')}
            </h3>
            <p className="text-lg text-brand-gray leading-relaxed mb-6">
              {t('about.promessa.texto')}
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-brand-gray">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>{t('about.promessa.item1')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>{t('about.promessa.item2')}</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="h-5 w-5 text-primary" />
                <span>{t('about.promessa.item3')}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
