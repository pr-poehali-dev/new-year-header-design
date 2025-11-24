import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'О городе-отеле', href: '#about' },
    { name: 'Номера', href: '#rooms' },
    { name: 'Услуги', href: '#services' },
    { name: 'Акции', href: '#promotions' },
    { name: 'Лечение', href: '#treatment' },
    { name: 'Экскурсии', href: '#excursions' },
    { name: 'Квартиры', href: '#apartments' },
    { name: 'Контакты', href: '#contacts' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'bg-primary/95 backdrop-blur-md shadow-2xl py-3' : 'bg-primary/90 backdrop-blur-sm py-5'
      }`}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
        <svg className="absolute w-full h-full">
          <defs>
            <pattern id="frost-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
              <path
                d="M60 15 L60 105 M15 60 L105 60 M30 30 L90 90 M90 30 L30 90"
                stroke="white"
                strokeWidth="0.5"
                fill="none"
                opacity="0.3"
              />
              <circle cx="60" cy="60" r="6" stroke="white" strokeWidth="0.5" fill="none" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#frost-pattern)" />
        </svg>
      </div>

      <div className="relative container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 animate-fade-in">
            <div className="text-white">
              <div className="flex items-center space-x-3">
                <div className="text-accent text-3xl">❄</div>
                <div>
                  <h1 className="text-3xl font-semibold text-white tracking-wide">Бархатные Сезоны</h1>
                  <p className="text-xs text-white/70 tracking-wider uppercase mt-0.5">Сочи</p>
                </div>
              </div>
            </div>
          </div>

          <nav className="hidden xl:flex items-center space-x-1 animate-fade-in">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="px-4 py-2 text-sm font-light text-white/90 hover:text-white hover:bg-white/5 rounded-md transition-all duration-300 tracking-wide"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-6 animate-fade-in">
            <div className="text-right">
              <a href="tel:88003008300" className="text-white font-medium hover:text-accent transition-colors tracking-wide">
                8 800 300 83 00
              </a>
              <p className="text-xs text-white/60 mt-0.5 tracking-wide">Бесплатный звонок</p>
            </div>
            <Button className="bg-accent hover:bg-accent/90 text-white font-medium px-6 py-2.5 shadow-lg tracking-wide">
              Забронировать
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="xl:hidden p-2 text-white hover:bg-white/10 rounded-md transition-colors"
            aria-label="Открыть меню"
          >
            <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="xl:hidden mt-6 py-6 space-y-1 animate-slide-down border-t border-white/10">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 text-white/90 hover:bg-white/5 hover:text-white rounded-md transition-colors tracking-wide"
              >
                {item.name}
              </a>
            ))}
            <div className="px-4 py-4 border-t border-white/10 mt-4 space-y-3">
              <a href="tel:88003008300" className="text-white font-medium block tracking-wide">
                8 800 300 83 00
              </a>
              <Button className="w-full bg-accent hover:bg-accent/90 text-white tracking-wide">
                Забронировать
              </Button>
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </header>
  );
};

export default Header;
