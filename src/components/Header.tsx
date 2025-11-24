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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-winter-gradient shadow-xl' : 'bg-winter-gradient'
      }`}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute w-full h-full opacity-20">
          <defs>
            <pattern id="frost-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path
                d="M50 10 L50 90 M10 50 L90 50 M25 25 L75 75 M75 25 L25 75 M50 10 L30 20 M50 10 L70 20 M50 90 L30 80 M50 90 L70 80 M10 50 L20 30 M10 50 L20 70 M90 50 L80 30 M90 50 L80 70"
                stroke="white"
                strokeWidth="1.5"
                fill="none"
                opacity="0.6"
              />
              <circle cx="50" cy="50" r="8" stroke="white" strokeWidth="1.5" fill="none" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#frost-pattern)" />
        </svg>
      </div>

      <div className="relative container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3 animate-fade-in">
            <div className="text-white">
              <div className="flex items-center space-x-2">
                <span className="text-2xl">❄️</span>
                <div>
                  <h1 className="text-2xl font-bold text-white drop-shadow-lg">Бархатные Сезоны</h1>
                  <p className="text-xs text-blue-100">Город-отель в Сочи</p>
                </div>
              </div>
            </div>
          </div>

          <nav className="hidden lg:flex items-center space-x-1 animate-fade-in">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-white hover:text-accent hover:bg-white/10 rounded-lg transition-all duration-200"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-3 animate-fade-in">
            <div className="text-right">
              <a href="tel:88003008300" className="text-white font-semibold hover:text-accent transition-colors">
                8 800 300 83 00
              </a>
              <p className="text-xs text-blue-100">Звонок бесплатный</p>
            </div>
            <Button className="bg-accent hover:bg-accent/90 text-primary-foreground font-semibold shadow-lg">
              Забронировать
            </Button>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Открыть меню"
          >
            <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 py-4 space-y-2 animate-slide-down border-t border-white/20">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {item.name}
              </a>
            ))}
            <div className="px-4 py-2 border-t border-white/20 mt-2">
              <a href="tel:88003008300" className="text-white font-semibold block mb-2">
                8 800 300 83 00
              </a>
              <Button className="w-full bg-accent hover:bg-accent/90 text-primary-foreground">
                Забронировать
              </Button>
            </div>
          </div>
        )}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
    </header>
  );
};

export default Header;
