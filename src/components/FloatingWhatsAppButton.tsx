import { MessageCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

const FloatingWhatsAppButton = () => {
  const [isNearFooter, setIsNearFooter] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsNearFooter(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const target = document.getElementById('footer-observer');
    if (target) observer.observe(target);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed z-50 bottom-6 right-4 transition-all duration-300 ${
        isNearFooter ? 'mb-16' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a
        href="https://wa.me/5541995063859"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center bg-primary text-white rounded-full px-4 py-2 shadow-lg hover:shadow-xl transition-all"
      >
        <MessageCircle className="w-5 h-5" />
        <span
          className={`ml-2 text-sm whitespace-nowrap transition-all duration-300 ${
            isHovered ? 'opacity-100 max-w-xs' : 'opacity-0 max-w-0 overflow-hidden'
          }`}
        >
          Solicite sua avaliação
        </span>
      </a>
    </div>
  );
};

export default FloatingWhatsAppButton;
