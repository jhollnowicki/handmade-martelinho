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
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 🔒 Bloqueia o scroll do body quando o menu está aberto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMobileMenuOpen]);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-sm shadow-md' : 'bg-transparent'
      }`}
    >
      {/* ⬇️ padding responsivo (evita aquele recuo enorme no mobile) */}
      <div className="px-4 sm:px-6 lg:px-10 xl:px-20">
        <div className="w-full flex items-center justify-between h-20 lg:h-24">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logoNovo}
              alt="Handmade Martelinho de Ouro"
              className="h-[60px] sm:h-[72px] lg:h-[96px] w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('home')} className={linkClass}>Home</button>
            <button onClick={() => scrollToSection('quem-somos')} className={linkClass}>Quem Somos</button>
            <button onClick={() => scrollToSection('servicos')} className={linkClass}>Serviços</button>
            <button onClick={() => scrollToSection('galeria')} className={linkClass}>Galeria</button>
            <LanguageSwitcher isScrolled={isScrolled} />
            <button onClick={() => scrollToSection('contato')} className={linkClass}>Contato</button>
          </nav>

          {/* Botão do menu (mobile) */}
          <button
            onClick={() => setIsMobileMenuOpen(true)}
            className="md:hidden inline-flex items-center justify-center p-2 text-white"
            aria-label="Abrir menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu className="h-7 w-7" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation (overlay + full width, height auto) */}
{isMobileMenuOpen && (
  <>
    {/* Overlay escuro (cobre a tela toda) */}
    <div
      className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
      onClick={() => setIsMobileMenuOpen(false)}
    />

    {/* Painel: largura 100%, altura só do conteúdo */}
    <aside
      className="
        fixed left-0 right-0 top-16 z-50   /* abaixo da navbar */
        w-screen                           /* 100% da largura */
        h-auto                             /* altura conforme conteúdo */
        bg-white text-gray-900
        dark:bg-zinc-900 dark:text-zinc-100
        shadow-2xl
      "
    >
      {/* Cabeçalho */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-zinc-800">
        <span className="font-semibold">Menu</span>
        <button
          onClick={() => setIsMobileMenuOpen(false)}
          className="p-2 rounded-md hover:bg-black/5 dark:hover:bg-white/5"
          aria-label="Fechar menu"
        >
          <X className="h-6 w-6" />
        </button>
      </div>

      {/* Navegação: NÃO use flex-1/overflow aqui, para a altura não esticar */}
      <nav className="px-6 py-4">
        <ul className="space-y-3">
          <li><button onClick={() => scrollToSection('home')} className="block w-full text-left py-2 text-lg hover:text-blue-600">Home</button></li>
          <li><button onClick={() => scrollToSection('quem-somos')} className="block w-full text-left py-2 text-lg hover:text-blue-600">Quem Somos</button></li>
          <li><button onClick={() => scrollToSection('servicos')} className="block w-full text-left py-2 text-lg hover:text-blue-600">Serviços</button></li>
          <li><button onClick={() => scrollToSection('galeria')} className="block w-full text-left py-2 text-lg hover:text-blue-600">Galeria</button></li>
          <li><button onClick={() => i18n.changeLanguage('pt')} className="block w-full text-left py-2 text-lg hover:text-blue-600">Português</button></li>
          <li><button onClick={() => i18n.changeLanguage('en')} className="block w-full text-left py-2 text-lg hover:text-blue-600">English</button></li>
          <li><button onClick={() => scrollToSection('contato')} className="block w-full text-left py-2 text-lg hover:text-blue-600">Contato</button></li>
        </ul>
      </nav>
    </aside>
  </>
)}


    </header>
  );
};

export default Header;
