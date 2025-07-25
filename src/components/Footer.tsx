import { Button } from '@/components/ui/button';
import { Instagram, MessageCircle, MapPin, Mail } from 'lucide-react';
import logoNovo from '../assets/logo_principal_edit.png.png';





const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Empresa */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src={logoNovo} 
                alt="Handmade Martelinho de Ouro" 
                className="h-12 w-auto filter invert"
              />
              <div>
                <h3 className="text-xl font-bold">Handmade</h3>
                <p className="text-sm text-gray-300">Martelinho de Ouro</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Especialistas em reparos automotivos sem pintura. 
              Atendimento a domicílio com qualidade profissional 
              e acabamento impecável.
            </p>
            <div className="flex space-x-4">
              <Button 
                onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
                variant="outline" 
                size="sm"
                className="border-gray-300 text-gray-300 hover:bg-background hover:text-foreground"
              >
                <MessageCircle className="h-4 w-4 mr-2" />
                WhatsApp
              </Button>
              <Button 
                onClick={() => window.open('https://instagram.com', '_blank')}
                variant="outline" 
                size="sm"
                className="border-gray-300 text-gray-300 hover:bg-background hover:text-foreground"
              >
                <Instagram className="h-4 w-4 mr-2" />
                Instagram
              </Button>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('quem-somos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Quem Somos
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('servicos')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('galeria')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Galeria
                </button>
              </li>
              <li>
                <button 
                  onClick={() => document.getElementById('contato')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <MessageCircle className="h-5 w-5 text-gray-300" />
                <span className="text-gray-300">(11) 99999-9999</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gray-300" />
                <span className="text-gray-300">contato@handmade.com.br</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gray-300 mt-1" />
                <span className="text-gray-300">
                  Atendimento em toda<br />
                  região metropolitana
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Linha divisória */}
        <div className="border-t border-gray-600 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-4 md:mb-0">
              <p className="text-xl font-bold text-primary mb-2">
                "Handmade Martelinho de Ouro – Excelência em cada detalhe."
              </p>
              <p className="text-gray-300 text-sm">
                © 2024 Handmade Martelinho de Ouro. Todos os direitos reservados.
              </p>
            </div>
            <Button 
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="border-gray-300 text-gray-300 hover:bg-background hover:text-foreground"
            >
              Voltar ao topo
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;