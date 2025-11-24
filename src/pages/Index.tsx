import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const rooms = [
    {
      title: 'Екатерининский квартал',
      description: 'Роскошные апартаменты с видом на море',
      icon: 'Home',
    },
    {
      title: 'Стандартные номера',
      description: 'Комфортное размещение для всей семьи',
      icon: 'Bed',
    },
    {
      title: 'VIP-апартаменты',
      description: 'Премиальный отдых с персональным сервисом',
      icon: 'Crown',
    },
  ];

  const services = [
    { icon: 'Waves', title: 'Бассейны', description: 'Открытый и закрытый бассейны с подогревом' },
    { icon: 'Utensils', title: 'Рестораны', description: '5 ресторанов мировой кухни' },
    { icon: 'Dumbbell', title: 'Фитнес', description: 'Современный тренажерный зал' },
    { icon: 'Sparkles', title: 'СПА', description: 'Авторские процедуры и массажи' },
    { icon: 'Baby', title: 'Детский клуб', description: 'Развлечения с аниматорами' },
    { icon: 'Car', title: 'Парковка', description: 'Охраняемая парковка' },
  ];

  const promotions = [
    {
      title: 'Новогодний банкет',
      description: 'Незабываемый праздник для всей семьи',
      badge: 'Успейте',
    },
    {
      title: 'Раннее бронирование',
      description: 'Скидка до 30% на зимний сезон',
      badge: '−30%',
    },
    {
      title: 'Семейный отдых',
      description: 'Дети до 12 лет бесплатно',
      badge: 'Подарок',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <section className="relative pt-40 pb-32 px-6 bg-gradient-to-br from-primary via-[#273244] to-primary overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-5">
          <div className="absolute top-20 left-10 text-7xl animate-float">❄</div>
          <div className="absolute top-60 right-20 text-5xl animate-float" style={{ animationDelay: '1s' }}>❄</div>
          <div className="absolute bottom-32 left-1/4 text-6xl animate-float" style={{ animationDelay: '2s' }}>❄</div>
          <div className="absolute top-80 right-1/3 text-4xl animate-float" style={{ animationDelay: '1.5s' }}>❄</div>
        </div>

        <div className="container mx-auto text-center relative z-10 animate-fade-in max-w-5xl">
          <h1 className="text-6xl md:text-8xl font-light text-white mb-8 tracking-tight leading-tight">
            Новогодняя сказка<br />в Сочи
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-3 max-w-2xl mx-auto font-light tracking-wide">
            Успей забронить желанное место<br />на Новогоднем банкете
          </p>
          <p className="text-base text-white/60 mb-12 tracking-wide">Количество билетов ограничено</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-white text-base px-10 py-6 font-medium tracking-wide shadow-xl"
            >
              Подробнее
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="text-white border border-white/30 hover:bg-white/10 text-base px-10 py-6 font-light tracking-wide"
            >
              Посмотреть номера
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-6 text-primary tracking-tight">О городе-отеле</h2>
          <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto mb-20 leading-relaxed font-light">
            Бархатные Сезоны — это уникальный город-отель в самом сердце Сочи. Здесь сочетается комфорт современного
            отеля с инфраструктурой целого города: рестораны, бассейны, SPA-центр, медицинский центр и множество развлечений.
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="text-6xl mb-6">🏨</div>
              <h3 className="text-5xl font-light mb-3 text-primary">500+</h3>
              <p className="text-muted-foreground font-light tracking-wide">Номеров и апартаментов</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-6">🌊</div>
              <h3 className="text-5xl font-light mb-3 text-primary">300 м</h3>
              <p className="text-muted-foreground font-light tracking-wide">До собственного пляжа</p>
            </div>
            <div className="text-center">
              <div className="text-6xl mb-6">⭐</div>
              <h3 className="text-5xl font-light mb-3 text-primary">4.8</h3>
              <p className="text-muted-foreground font-light tracking-wide">Рейтинг гостей</p>
            </div>
          </div>
        </div>
      </section>

      <section id="rooms" className="py-32 px-6 bg-secondary/30">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-20 text-primary tracking-tight">Номера</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <Card key={index} className="border-0 shadow-sm hover:shadow-xl transition-all duration-500 bg-white">
                <CardContent className="pt-12 pb-10 px-8">
                  <div className="bg-accent/10 w-20 h-20 rounded-full flex items-center justify-center mb-8 mx-auto">
                    <Icon name={room.icon as any} size={36} className="text-accent" />
                  </div>
                  <h3 className="text-2xl font-light mb-4 text-center tracking-wide text-primary">{room.title}</h3>
                  <p className="text-muted-foreground text-center mb-8 leading-relaxed font-light">{room.description}</p>
                  <Button className="w-full font-light tracking-wide" variant="outline">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-32 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-20 text-primary tracking-tight">Услуги</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="flex items-start space-x-5 p-6 hover:bg-secondary/20 rounded-lg transition-colors duration-300">
                <div className="bg-accent/10 p-4 rounded-lg shrink-0">
                  <Icon name={service.icon as any} size={28} className="text-accent" />
                </div>
                <div>
                  <h3 className="font-medium mb-2 text-primary tracking-wide text-lg">{service.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="promotions" className="py-32 px-6 bg-primary text-white">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-5xl md:text-6xl font-light text-center mb-20 tracking-tight">Акции</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {promotions.map((promo, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-10 hover:bg-white/10 transition-all duration-300 text-center">
                <div className="inline-block bg-accent/20 text-accent px-5 py-2 rounded-full text-sm font-medium mb-6 tracking-wide">
                  {promo.badge}
                </div>
                <h3 className="text-3xl font-light mb-4 text-white tracking-wide">{promo.title}</h3>
                <p className="text-white/70 mb-8 leading-relaxed font-light">{promo.description}</p>
                <Button variant="ghost" className="text-white border border-white/30 hover:bg-white/10 font-light tracking-wide">
                  Узнать больше
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="treatment" className="py-32 px-6 bg-secondary/30">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-light mb-8 text-primary tracking-tight">Лечение</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            Медицинский центр с современным оборудованием и квалифицированными специалистами. Программы оздоровления,
            физиотерапия, бальнеология.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 px-10 py-6 font-light tracking-wide">
            Программы лечения
          </Button>
        </div>
      </section>

      <section id="excursions" className="py-32 px-6 bg-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h2 className="text-5xl md:text-6xl font-light mb-8 text-primary tracking-tight">Экскурсии</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed font-light">
            Организуем увлекательные экскурсии по Сочи и окрестностям: Олимпийский парк, Роза Хутор, Красная Поляна,
            Агурские водопады и многое другое.
          </p>
          <Button size="lg" variant="outline" className="px-10 py-6 font-light tracking-wide">
            Смотреть экскурсии
          </Button>
        </div>
      </section>

      <section id="contacts" className="py-32 px-6 bg-primary text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-5xl md:text-6xl font-light mb-12 tracking-tight">Контакты</h2>
          <div className="space-y-6 mb-16">
            <div className="flex items-center justify-center space-x-4">
              <Icon name="Phone" size={24} className="text-accent" />
              <a href="tel:88003008300" className="text-2xl hover:text-accent transition-colors font-light tracking-wide">
                8 800 300 83 00
              </a>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Icon name="MapPin" size={24} className="text-accent" />
              <span className="text-lg font-light tracking-wide">г. Сочи, Курортный проспект, 105</span>
            </div>
            <div className="flex items-center justify-center space-x-4">
              <Icon name="Mail" size={24} className="text-accent" />
              <a href="mailto:info@barhatseasons.ru" className="text-lg hover:text-accent transition-colors font-light tracking-wide">
                info@barhatseasons.ru
              </a>
            </div>
          </div>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white text-lg px-12 py-7 font-medium tracking-wide shadow-xl">
            Забронировать сейчас
          </Button>
        </div>
      </section>

      <footer className="bg-[#1a1f2e] text-white/60 py-12 px-6">
        <div className="container mx-auto text-center">
          <p className="font-light tracking-wide">© 2024 Бархатные Сезоны. Город-отель в Сочи</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
