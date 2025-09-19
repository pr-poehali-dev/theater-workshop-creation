import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const navigation = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'groups', label: 'Группы', icon: 'Users' },
    { id: 'schedule', label: 'Расписание', icon: 'Calendar' },
    { id: 'teacher', label: 'Преподаватель', icon: 'User' },
    { id: 'gallery', label: 'Галерея', icon: 'Camera' },
    { id: 'reviews', label: 'Отзывы', icon: 'Star' },
    { id: 'contacts', label: 'Контакты', icon: 'Phone' }
  ];

  const courses = [
    {
      title: 'Движение',
      description: 'Пластика тела, координация, выразительность движений',
      icon: 'Activity',
      age: 'От 10 лет'
    },
    {
      title: 'Речь',
      description: 'Дикция, интонации, работа с текстом',
      icon: 'Mic',
      age: 'От 8 лет'
    },
    {
      title: 'Чувства',
      description: 'Эмоциональная выразительность, работа с переживаниями',
      icon: 'Heart',
      age: 'От 12 лет'
    },
    {
      title: 'Вера в себя',
      description: 'Уверенность на сцене, преодоление страхов',
      icon: 'Sparkles',
      age: 'Для всех'
    }
  ];

  const groups = [
    {
      name: 'Арлекино',
      age: '10-15 лет',
      time: 'Суббота 10:00-12:00',
      price: '3000₽/месяц',
      description: 'Развиваем творческие способности и уверенность в себе'
    },
    {
      name: 'Движ',
      age: '15-21 год',
      time: 'Воскресенье 14:00-16:00',
      price: '3500₽/месяц',
      description: 'Актерское мастерство и эмоциональная выразительность'
    },
    {
      name: 'Браво',
      age: '21+ лет',
      time: 'Среда 19:00-21:00',
      price: '4000₽/месяц',
      description: 'Профессиональное развитие и глубокая работа с ролью'
    }
  ];

  const schedule = [
    {
      day: 'Среда',
      time: '19:00-21:00',
      group: 'Браво (21+)',
      activity: 'Работа с текстом, импровизация'
    },
    {
      day: 'Суббота',
      time: '10:00-12:00',
      group: 'Арлекино (10-15)',
      activity: 'Движение, речь, игры'
    },
    {
      day: 'Воскресенье',
      time: '14:00-16:00',
      group: 'Движ (15-21)',
      activity: 'Актерские этюды, эмоции'
    }
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      text: 'Моя дочь ходит уже полгода. Стала намного увереннее в себе!',
      rating: 5
    },
    {
      name: 'Михаил Сидоров',
      text: 'Отличная методика преподавания. Рекомендую всем!',
      rating: 5
    },
    {
      name: 'Елена Козлова',
      text: 'Профессиональный подход, творческая атмосфера.',
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-black shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3">
              <Icon name="Theater" size={32} className="text-yellow-400" />
              <div>
                <h1 className="text-white font-heading font-bold text-xl">Театральная мастерская</h1>
                <p className="text-yellow-400 text-sm">Оксаны Барановой</p>
              </div>
            </div>
            
            <div className="hidden md:flex space-x-6">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveSection(item.id)}
                  className={`flex items-center space-x-2 px-3 py-2 rounded-md transition-colors ${
                    activeSection === item.id 
                      ? 'bg-yellow-400 text-black' 
                      : 'text-white hover:text-yellow-400'
                  }`}
                >
                  <Icon name={item.icon} size={18} />
                  <span className="font-medium">{item.label}</span>
                </button>
              ))}
            </div>

            <div className="md:hidden">
              <Button variant="ghost" size="sm" className="text-white">
                <Icon name="Menu" size={24} />
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {activeSection === 'home' && (
        <div className="relative">
          <div 
            className="h-96 bg-cover bg-center bg-black/50 bg-blend-overlay"
            style={{
              backgroundImage: 'url(/img/45709b76-dfb6-4fb3-92db-c5389612bd26.jpg)'
            }}
          >
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="text-center w-full animate-fade-in">
                <h1 className="text-5xl md:text-6xl font-heading font-bold text-white mb-4">
                  Театральная мастерская
                </h1>
                <p className="text-2xl text-yellow-400 mb-6 font-heading">
                  Оксаны Барановой
                </p>
                <p className="text-xl text-white mb-8 max-w-2xl mx-auto">
                  Развиваем актёрское мастерство, движение, речь и уверенность в себе
                </p>
                <div className="space-x-4">
                  <Button 
                    onClick={() => setActiveSection('contacts')}
                    className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-3 text-lg font-semibold"
                  >
                    Записаться на занятие
                  </Button>
                  <Button 
                    onClick={() => setActiveSection('groups')}
                    variant="outline"
                    className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg"
                  >
                    Узнать больше
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Course Cards */}
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-4xl font-heading font-bold text-center mb-12 text-black">
              Направления обучения
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {courses.map((course, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow animate-slide-up border-2 hover:border-yellow-400">
                  <CardHeader className="text-center">
                    <div className="mx-auto bg-yellow-400 rounded-full p-4 w-16 h-16 flex items-center justify-center mb-4">
                      <Icon name={course.icon} size={32} className="text-black" />
                    </div>
                    <CardTitle className="font-heading text-xl">{course.title}</CardTitle>
                    <CardDescription className="text-sm text-yellow-600 font-semibold">
                      {course.age}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-gray-700">{course.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="bg-black py-16">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-3xl font-heading font-bold text-white mb-8">
                Свяжитесь с нами
              </h2>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" className="text-yellow-400" size={24} />
                  <span className="text-white text-xl font-semibold">8-977-148-60-00</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="Users" className="text-yellow-400" size={24} />
                  <span className="text-white">Для детей от 10 лет и взрослых</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Groups Section */}
      {activeSection === 'groups' && (
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-black">
            Наши группы
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {groups.map((group, index) => (
              <Card key={index} className="border-2 hover:border-yellow-400 transition-colors">
                <CardHeader>
                  <CardTitle className="font-heading text-2xl text-center">{group.name}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600 mb-4">{group.description}</p>
                  <div className="flex items-center space-x-3">
                    <Icon name="Users" className="text-yellow-600" size={20} />
                    <span className="font-semibold">Возраст: {group.age}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" className="text-yellow-600" size={20} />
                    <span>{group.time}</span>
                  </div>
                  <div className="flex items-center space-x-3 mb-4">
                    <Icon name="CreditCard" className="text-yellow-600" size={20} />
                    <span className="text-xl font-bold text-black">{group.price}</span>
                  </div>
                  <Button 
                    onClick={() => setActiveSection('contacts')}
                    className="w-full bg-yellow-400 text-black hover:bg-yellow-500 font-semibold"
                  >
                    Записаться
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Reviews Section */}
      {activeSection === 'reviews' && (
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-black">
            Отзывы учеников
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="border-2 hover:border-yellow-400 transition-colors">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="bg-yellow-400 rounded-full p-3">
                      <Icon name="User" size={24} className="text-black" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <div className="flex space-x-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 italic">"{review.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* Contacts Section */}
      {activeSection === 'contacts' && (
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-black">
            Записаться на занятие
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-yellow-400">
              <CardHeader>
                <CardTitle className="text-center text-2xl font-heading">
                  Оставьте заявку
                </CardTitle>
                <CardDescription className="text-center">
                  Мы свяжемся с вами в ближайшее время
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Имя</label>
                  <Input placeholder="Ваше имя" className="border-gray-300" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Телефон</label>
                  <Input placeholder="+7 (999) 123-45-67" className="border-gray-300" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Возраст ученика</label>
                  <Input placeholder="Возраст" className="border-gray-300" />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Сообщение</label>
                  <Textarea placeholder="Расскажите о ваших целях и пожеланиях" className="border-gray-300" />
                </div>
                <Button className="w-full bg-yellow-400 text-black hover:bg-yellow-500 font-semibold py-3">
                  Отправить заявку
                </Button>
              </CardContent>
            </Card>

            <div className="mt-12 text-center">
              <h3 className="text-2xl font-heading font-bold mb-6">Контактная информация</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-center space-x-3">
                  <Icon name="Phone" className="text-yellow-600" size={24} />
                  <span className="text-xl font-semibold">8-977-148-60-00</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Icon name="MapPin" className="text-yellow-600" size={24} />
                  <span>Москва, ул. Театральная, 15</span>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Icon name="Mail" className="text-yellow-600" size={24} />
                  <span>info@baranova-theater.ru</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Schedule Section */}
      {activeSection === 'schedule' && (
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-black">
            Расписание занятий
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {schedule.map((item, index) => (
                <Card key={index} className="border-2 hover:border-yellow-400 transition-colors">
                  <CardContent className="p-6">
                    <div className="grid md:grid-cols-4 gap-4 items-center">
                      <div className="text-center md:text-left">
                        <h3 className="text-2xl font-heading font-bold text-black">{item.day}</h3>
                        <p className="text-yellow-600 font-semibold text-lg">{item.time}</p>
                      </div>
                      <div className="text-center md:text-left">
                        <h4 className="text-xl font-semibold text-black">{item.group}</h4>
                      </div>
                      <div className="text-center md:text-left md:col-span-1">
                        <p className="text-gray-700">{item.activity}</p>
                      </div>
                      <div className="text-center md:text-right">
                        <Button 
                          onClick={() => setActiveSection('contacts')}
                          className="bg-yellow-400 text-black hover:bg-yellow-500 font-semibold"
                        >
                          Записаться
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 bg-black rounded-lg p-8 text-center">
              <h3 className="text-2xl font-heading font-bold text-white mb-4">
                Индивидуальные занятия
              </h3>
              <p className="text-white mb-6">
                Персональный подход и гибкий график по договоренности
              </p>
              <div className="flex justify-center items-center space-x-6">
                <div className="text-yellow-400">
                  <Icon name="User" size={32} />
                  <p className="mt-2 font-semibold">1 на 1</p>
                </div>
                <div className="text-yellow-400">
                  <Icon name="Clock" size={32} />
                  <p className="mt-2 font-semibold">Гибкий график</p>
                </div>
                <div className="text-yellow-400">
                  <Icon name="Target" size={32} />
                  <p className="mt-2 font-semibold">Личные цели</p>
                </div>
              </div>
              <Button 
                onClick={() => setActiveSection('contacts')}
                className="mt-6 bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-3 font-semibold"
              >
                Узнать подробности
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Teacher Section */}
      {activeSection === 'teacher' && (
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-black">
            Преподаватель
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-yellow-400">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="text-center">
                    <div className="bg-yellow-400 rounded-full p-8 w-48 h-48 mx-auto flex items-center justify-center mb-6">
                      <Icon name="User" size={80} className="text-black" />
                    </div>
                    <h3 className="text-3xl font-heading font-bold text-black mb-2">
                      Оксана Баранова
                    </h3>
                    <p className="text-yellow-600 font-semibold text-lg">
                      Режиссер, актриса, педагог
                    </p>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xl font-semibold text-black mb-3 flex items-center">
                        <Icon name="GraduationCap" className="text-yellow-600 mr-3" size={24} />
                        Образование
                      </h4>
                      <p className="text-gray-700">
                        ВГИК, мастерская В.П. Фокина. Дополнительное образование в области психологии и педагогики.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold text-black mb-3 flex items-center">
                        <Icon name="Award" className="text-yellow-600 mr-3" size={24} />
                        Опыт работы
                      </h4>
                      <p className="text-gray-700">
                        Более 15 лет работы в театре и кино. Постановка спектаклей, работа с актерами разных возрастов.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="text-xl font-semibold text-black mb-3 flex items-center">
                        <Icon name="Heart" className="text-yellow-600 mr-3" size={24} />
                        Философия преподавания
                      </h4>
                      <p className="text-gray-700">
                        "Театр — это место, где человек может открыть себя настоящего. Моя задача — помочь каждому ученику найти свою уникальность и поверить в свои силы."
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}

      {/* Gallery Section */}
      {activeSection === 'gallery' && (
        <div className="container mx-auto px-4 py-16">
          <h2 className="text-4xl font-heading font-bold text-center mb-12 text-black">
            Галерея
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <Card key={index} className="border-2 hover:border-yellow-400 transition-colors overflow-hidden">
                <div className="bg-gray-200 h-64 flex items-center justify-center">
                  <Icon name="Camera" size={48} className="text-gray-400" />
                </div>
                <CardContent className="p-4">
                  <h4 className="font-semibold text-black mb-2">
                    {index <= 2 ? `Группа "Арлекино"` : 
                     index <= 4 ? `Группа "Движ"` : `Группа "Браво"`}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {index % 3 === 1 ? 'Упражнения на развитие пластики' :
                     index % 3 === 2 ? 'Работа с эмоциями и текстом' : 
                     'Импровизация и творческие этюды'}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              Хотите увидеть, как проходят занятия? Приходите на открытый урок!
            </p>
            <Button 
              onClick={() => setActiveSection('contacts')}
              className="bg-yellow-400 text-black hover:bg-yellow-500 px-8 py-3 font-semibold"
            >
              Записаться на открытый урок
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Index;