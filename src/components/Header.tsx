import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import logoNovo from '../assets/logo_principal_edit.png.png';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { i18n } = useTranslation();

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const linkClass = `${isScrolled ? 'text-foreground' : 'text-white'} hover:text-primary transition-colors font-medium`;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
        }`}
    >
      <div className="px-20">
        <div className="w-full flex items-center justify-between h-20 lg:h-24 px-4 lg:px-6">
          {/* Logo alinhada à esquerda */}
          <div className="ml-[-16px] sm:ml-[-24px] md:ml-[-32px] lg:ml-[-48px] xl:ml-[-64px]">
            <img
              src={logoNovo}
              alt="Handmade Martelinho de Ouro"
              className="h-[60px] sm:h-[72px] lg:h-[96px] w-auto"
            />
          </div>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className={linkClass}>
              Home
            </button>
            <button onClick={() => scrollToSection('quem-somos')} className={linkClass}>
              Quem Somos
            </button>
            <button onClick={() => scrollToSection('servicos')} className={linkClass}>
              Serviços
            </button>
            <button onClick={() => scrollToSection('galeria')} className={linkClass}>
              Galeria
            </button>
            <LanguageSwitcher isScrolled={isScrolled} />
            <button onClick={() => scrollToSection('contato')} className={linkClass}>
              Contato
            </button>
          </nav>

          {/* Mobile Menu Button */}
          {/* Mobile Menu Button (100% à direita no mobile) */}
          <div className="absolute right-4 top-1/2 -translate-y-1/2 md:hidden z-50">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 transition-all transform ${isMobileMenuOpen
                ? 'text-blue-600 hover:text-blue-700 hover:scale-110'
                : 'text-white hover:text-primary hover:scale-110'
                }`}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="fixed top-0 left-2 w-[70%] max-w-[240px] h-[70%] bg-white shadow-2xl rounded-r-2xl z-50 flex flex-col border border-gray-200 overflow-hidden">

              {/* Menu de navegação */}
              <nav className="flex flex-col space-y-2 px-6 py-6">
                <button onClick={() => scrollToSection('home')} className="text-left py-2 text-gray-800 hover:text-blue-600">
                  Home
                </button>
                <button onClick={() => scrollToSection('quem-somos')} className="text-left py-2 text-gray-800 hover:text-blue-600">
                  Quem Somos
                </button>
                <button onClick={() => scrollToSection('servicos')} className="text-left py-2 text-gray-800 hover:text-blue-600">
                  Serviços
                </button>
                <button onClick={() => scrollToSection('galeria')} className="text-left py-2 text-gray-800 hover:text-blue-600">
                  Galeria
                </button>
                <button onClick={() => i18n.changeLanguage('pt')} className="text-left py-2 text-gray-800 hover:text-blue-600">
                  Português
                </button>
                <button onClick={() => i18n.changeLanguage('en')} className="text-left py-2 text-gray-800 hover:text-blue-600">
                  English
                </button>
                <button onClick={() => scrollToSection('contato')} className="text-left py-2 text-gray-800 hover:text-blue-600">
                  Contato
                </button>
              </nav>
            </div>
          )}

        </div>
      </div>
    </header >
  );
};

export default Header;
