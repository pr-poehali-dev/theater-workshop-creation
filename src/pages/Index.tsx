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
      name: 'Детская группа',
      age: '10-14 лет',
      time: 'Суббота 10:00-12:00',
      price: '3000₽/месяц'
    },
    {
      name: 'Подростковая группа',
      age: '15-17 лет',
      time: 'Воскресенье 14:00-16:00',
      price: '3500₽/месяц'
    },
    {
      name: 'Взрослая группа',
      age: '18+ лет',
      time: 'Среда 19:00-21:00',
      price: '4000₽/месяц'
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
                  <div className="flex items-center space-x-3">
                    <Icon name="Users" className="text-yellow-600" size={20} />
                    <span className="font-semibold">Возраст: {group.age}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Icon name="Clock" className="text-yellow-600" size={20} />
                    <span>{group.time}</span>
                  </div>
                  <div className="flex items-center space-x-3">
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

      {/* Other sections placeholder */}
      {(activeSection === 'schedule' || activeSection === 'teacher' || activeSection === 'gallery') && (
        <div className="container mx-auto px-4 py-16 text-center">
          <h2 className="text-4xl font-heading font-bold mb-8 text-black">
            {navigation.find(item => item.id === activeSection)?.label}
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Раздел в разработке
          </p>
          <Button 
            onClick={() => setActiveSection('home')}
            className="bg-yellow-400 text-black hover:bg-yellow-500"
          >
            Вернуться на главную
          </Button>
        </div>
      )}
    </div>
  );
}

export default Index;