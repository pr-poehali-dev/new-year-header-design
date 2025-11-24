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
    { icon: 'Waves', title: 'Бассейны', description: 'Открытый и закрытый бассейны' },
    { icon: 'Utensils', title: 'Рестораны', description: '5 ресторанов разных кухонь' },
    { icon: 'Dumbbell', title: 'Фитнес', description: 'Современный тренажерный зал' },
    { icon: 'Sparkles', title: 'СПА', description: 'Процедуры и массажи' },
    { icon: 'Baby', title: 'Детский клуб', description: 'Развлечения для детей' },
    { icon: 'Car', title: 'Парковка', description: 'Бесплатная охраняемая парковка' },
  ];

  const promotions = [
    {
      title: 'Новогодний банкет',
      description: 'Незабываемый праздник для всей семьи',
      discount: 'Успей забронить!',
    },
    {
      title: 'Раннее бронирование',
      description: 'Скидка до 30% на зимний сезон',
      discount: '-30%',
    },
    {
      title: 'Семейный отдых',
      description: 'Дети до 12 лет бесплатно',
      discount: '🎁',
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <Header />

      <section className="relative pt-32 pb-20 px-4 bg-winter-gradient overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 text-6xl animate-float opacity-30">❄️</div>
          <div className="absolute top-40 right-20 text-4xl animate-float opacity-20" style={{ animationDelay: '1s' }}>
            ✨
          </div>
          <div className="absolute bottom-20 left-1/4 text-5xl animate-float opacity-25" style={{ animationDelay: '2s' }}>
            ❄️
          </div>
          <div className="absolute top-60 right-1/3 text-3xl animate-float opacity-30" style={{ animationDelay: '1.5s' }}>
            ⭐
          </div>
        </div>

        <div className="container mx-auto text-center relative z-10 animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-2xl">
            Новогодняя сказка в Сочи
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-4 max-w-3xl mx-auto">
            Успей забронить желанное место на Новогоднем банкете!!!
          </p>
          <p className="text-lg text-white/90 mb-8">Количество билетов ограничено</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-primary-foreground text-lg px-8 py-6 shadow-2xl transform hover:scale-105 transition-all"
            >
              Подробнее
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/30 text-lg px-8 py-6"
            >
              Посмотреть номера
            </Button>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary">О городе-отеле</h2>
          <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto mb-12">
            Бархатные Сезоны — это уникальный город-отель в самом сердце Сочи. Здесь сочетается комфорт современного
            отеля с инфраструктурой целого города: рестораны, бассейны, SPA, медицинский центр и множество развлечений.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-8">
                <div className="text-5xl mb-4">🏨</div>
                <h3 className="text-2xl font-bold mb-2">500+</h3>
                <p className="text-muted-foreground">Номеров и апартаментов</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-8">
                <div className="text-5xl mb-4">🌊</div>
                <h3 className="text-2xl font-bold mb-2">300м</h3>
                <p className="text-muted-foreground">До собственного пляжа</p>
              </CardContent>
            </Card>
            <Card className="text-center hover:shadow-xl transition-shadow">
              <CardContent className="pt-8">
                <div className="text-5xl mb-4">⭐</div>
                <h3 className="text-2xl font-bold mb-2">4.8/5</h3>
                <p className="text-muted-foreground">Рейтинг гостей</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="rooms" className="py-20 px-4 bg-blue-50">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">Номера</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {rooms.map((room, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:-translate-y-2 duration-300">
                <CardContent className="pt-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Icon name={room.icon as any} size={32} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-center">{room.title}</h3>
                  <p className="text-muted-foreground text-center mb-4">{room.description}</p>
                  <Button className="w-full" variant="outline">
                    Подробнее
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-primary">Услуги</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-accent/10 p-3 rounded-lg">
                      <Icon name={service.icon as any} size={24} className="text-accent" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="promotions" className="py-20 px-4 bg-winter-gradient text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Акции</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {promotions.map((promo, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all">
                <CardContent className="pt-8 text-center">
                  <div className="text-5xl mb-4">{promo.discount}</div>
                  <h3 className="text-2xl font-bold mb-3 text-white">{promo.title}</h3>
                  <p className="text-blue-100 mb-6">{promo.description}</p>
                  <Button className="bg-accent hover:bg-accent/90 text-primary-foreground">Узнать больше</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="treatment" className="py-20 px-4 bg-blue-50">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Лечение</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Медицинский центр с современным оборудованием и квалифицированными специалистами. Программы оздоровления,
            физиотерапия, бальнеология.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90">
            Программы лечения
          </Button>
        </div>
      </section>

      <section id="excursions" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-primary">Экскурсии</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Организуем увлекательные экскурсии по Сочи и окрестностям: Олимпийский парк, Роза Хутор, Красная Поляна,
            Агурские водопады и многое другое.
          </p>
          <Button size="lg" variant="outline">
            Смотреть экскурсии
          </Button>
        </div>
      </section>

      <section id="contacts" className="py-20 px-4 bg-primary text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Контакты</h2>
          <div className="max-w-2xl mx-auto space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Phone" size={24} />
              <a href="tel:88003008300" className="text-xl hover:text-accent transition-colors">
                8 800 300 83 00
              </a>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Icon name="MapPin" size={24} />
              <span className="text-lg">г. Сочи, Курортный проспект, 105</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Mail" size={24} />
              <a href="mailto:info@barhatseasons.ru" className="text-lg hover:text-accent transition-colors">
                info@barhatseasons.ru
              </a>
            </div>
          </div>
          <div className="mt-12">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-primary-foreground text-lg px-12 py-6">
              Забронировать сейчас
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">© 2024 Бархатные Сезоны. Город-отель в Сочи</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
