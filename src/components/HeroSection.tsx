import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contato');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Overlay */}
      <div 
        className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"
        style={{
          background: 'linear-gradient(135deg, hsl(var(--hero-overlay)), hsl(220 13% 18% / 0.5))'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Seu carro como novo,
          <span className="block text-brand-blue-light bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            sem sair de casa
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-200 max-w-2xl mx-auto">
          Especialistas em Martelinho de Ouro com 
          <strong className="text-white"> atendimento a domicílio</strong>
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            onClick={scrollToContact}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            Agendar Avaliação Gratuita
          </Button>
          
          <p className="text-sm text-gray-300">
            ✓ Avaliação gratuita • ✓ Atendimento a domicílio • ✓ Sem pintura
          </p>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-white/70" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;