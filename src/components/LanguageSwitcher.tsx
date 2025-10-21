import { useTranslation } from 'react-i18next';

const LanguageSwitcher = ({ isScrolled }: { isScrolled: boolean }) => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const textClass = `${isScrolled ? 'text-foreground' : 'text-white'} hover:text-primary transition-colors font-medium`;

  return (
    <div className="flex gap-2 items-center">
      <button onClick={() => changeLanguage('pt')} className={textClass}>
        Português
      </button>
      <span className={textClass}>|</span>
      <button onClick={() => changeLanguage('en')} className={textClass}>
        English
      </button>
    </div>
  );
};

export default LanguageSwitcher;
