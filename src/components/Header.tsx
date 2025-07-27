import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';
import logoNovo from '../assets/logo_principal_edit.png.png';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from 'react-i18next';

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-background/95 backdrop-blur-sm shadow-md'
        : 'bg-transparent'
        }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logoNovo}
              alt="Handmade Martelinho de Ouro"
              className="h-12 sm:h-14 lg:h-20 w-auto"
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
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-background border-t border-border">
            <nav className="flex flex-col space-y-4 py-4">
              <button onClick={() => scrollToSection('home')} className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors">
                Home
              </button>
              <button onClick={() => scrollToSection('quem-somos')} className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors">
                Quem Somos
              </button>
              <button onClick={() => scrollToSection('servicos')} className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors">
                Serviços
              </button>
              <button onClick={() => scrollToSection('galeria')} className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors">
                Galeria
              </button>
              <>
                <button
                  onClick={() => i18n.changeLanguage('pt')}
                  className={`${linkClass} px-4 py-2 text-left`}
                >
                  Português
                </button>
                <button
                  onClick={() => i18n.changeLanguage('en')}
                  className={`${linkClass} px-4 py-2 text-left`}
                >
                  English
                </button>
              </>

              <button onClick={() => scrollToSection('contato')} className="text-left px-4 py-2 text-foreground hover:text-primary transition-colors">
                Contato
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
