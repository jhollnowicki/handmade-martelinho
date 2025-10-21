import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import antes1 from '@/assets/antes1.png';
import depois1 from '@/assets/depois1.png';
import antes2 from '@/assets/antes2.png';
import depois2 from '@/assets/depois2.png';
import antes3 from '@/assets/antes3.png';
import depois3 from '@/assets/depois3.png';
import antes4 from '@/assets/antes4.png';
import depois4 from '@/assets/depois4.png';

const GallerySection = () => {
  const { t } = useTranslation();
  const [currentSlide, setCurrentSlide] = useState(0);

  const beforeAfterImages = [
    {
      before: antes1,
      after: depois1,
      title: t('gallery.itens.0.titulo'),
      description: t('gallery.itens.0.descricao'),
    },
    {
      before: antes2,
      after: depois2,
      title: t('gallery.itens.1.titulo'),
      description: t('gallery.itens.1.descricao'),
    },
    {
      before: antes3,
      after: depois3,
      title: t('gallery.itens.2.titulo'),
      description: t('gallery.itens.2.descricao'),
    },
    {
      before: antes4,
      after: depois4,
      title: t('gallery.itens.3.titulo'),
      description: t('gallery.itens.3.descricao'),
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % beforeAfterImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + beforeAfterImages.length) % beforeAfterImages.length);
  };

  return (
    <section id="galeria" className="py-20 bg-brand-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            {t('gallery.titulo')}
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <p
            className="text-lg md:text-xl text-brand-gray max-w-3xl mx-auto leading-relaxed"
            dangerouslySetInnerHTML={{ __html: t('gallery.descricao') }}
          />
        </div>

        {/* Main Carousel */}
        <div className="relative max-w-6xl mx-auto mb-12">
          <Card className="overflow-hidden bg-background shadow-lg">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img
                    src={beforeAfterImages[currentSlide].before}
                    alt="Antes do reparo"
                    className="w-full h-64 md:h-80 lg:h-96 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {t('gallery.antes')}
                  </div>
                </div>
                <div className="relative">
                  <img
                    src={beforeAfterImages[currentSlide].after}
                    alt="Depois do reparo"
                    className="w-full h-64 md:h-80 lg:h-96 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {t('gallery.depois')}
                  </div>
                </div>
              </div>

              <div className="p-6 text-center">
                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">
                  {beforeAfterImages[currentSlide].title}
                </h3>
                <p className="text-brand-gray">
                  {beforeAfterImages[currentSlide].description}
                </p>
              </div>
            </CardContent>
          </Card>

          <Button
            onClick={prevSlide}
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/90 hover:bg-background border-primary"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            onClick={nextSlide}
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/90 hover:bg-background border-primary"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Slide Indicators */}
        <div className="flex justify-center space-x-2 mb-12">
          {beforeAfterImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-primary' : 'bg-gray-300'
                }`}
            />
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {(t('gallery.features', { returnObjects: true }) as Array<any>).map((feature, i) => (
            <div className="text-center" key={i}>
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                {feature.icone}
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">{feature.titulo}</h4>
              <p className="text-brand-gray text-sm">{feature.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
