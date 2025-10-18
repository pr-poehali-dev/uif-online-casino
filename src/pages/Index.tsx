import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [currentView, setCurrentView] = useState<'home' | 'courses' | 'course' | 'profile'>('home');
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [videoProgress, setVideoProgress] = useState(45);
  const [completedLessons, setCompletedLessons] = useState([1, 2, 3]);

  const courses = [
    {
      id: 1,
      title: 'Веб-разработка с нуля',
      description: 'Полный курс по HTML, CSS, JavaScript и React',
      instructor: 'Анна Иванова',
      students: 1234,
      rating: 4.8,
      duration: '24 часа',
      lessons: 48,
      progress: 65,
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=250&fit=crop',
      category: 'Разработка',
      level: 'Начальный'
    },
    {
      id: 2,
      title: 'Python для Data Science',
      description: 'Анализ данных, машинное обучение и визуализация',
      instructor: 'Михаил Петров',
      students: 892,
      rating: 4.9,
      duration: '32 часа',
      lessons: 56,
      progress: 30,
      image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=250&fit=crop',
      category: 'Data Science',
      level: 'Средний'
    },
    {
      id: 3,
      title: 'UI/UX Дизайн',
      description: 'Создание современных интерфейсов в Figma',
      instructor: 'Елена Сидорова',
      students: 2103,
      rating: 4.7,
      duration: '18 часов',
      lessons: 36,
      progress: 0,
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&fit=crop',
      category: 'Дизайн',
      level: 'Начальный'
    },
    {
      id: 4,
      title: 'Маркетинг в соцсетях',
      description: 'SMM стратегии и продвижение бренда',
      instructor: 'Дмитрий Козлов',
      students: 1567,
      rating: 4.6,
      duration: '16 часов',
      lessons: 32,
      progress: 0,
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop',
      category: 'Маркетинг',
      level: 'Средний'
    }
  ];

  const lessons = [
    { id: 1, title: 'Введение в курс', duration: '12:34', completed: true },
    { id: 2, title: 'Основы HTML', duration: '24:15', completed: true },
    { id: 3, title: 'CSS и стилизация', duration: '31:42', completed: true },
    { id: 4, title: 'Flexbox и Grid', duration: '28:19', completed: false },
    { id: 5, title: 'JavaScript основы', duration: '45:22', completed: false },
    { id: 6, title: 'DOM манипуляции', duration: '33:56', completed: false }
  ];

  const openCourse = (course: any) => {
    setSelectedCourse(course);
    setCurrentView('course');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <header className="bg-white/80 backdrop-blur-md border-b border-slate-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setCurrentView('home')}>
              <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Icon name="GraduationCap" size={24} className="text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">EduPlatform</span>
            </div>
            
            <nav className="hidden md:flex gap-6">
              <button onClick={() => setCurrentView('home')} className="text-slate-700 hover:text-indigo-600 transition-colors font-medium">Главная</button>
              <button onClick={() => setCurrentView('courses')} className="text-slate-700 hover:text-indigo-600 transition-colors font-medium">Курсы</button>
              <button className="text-slate-700 hover:text-indigo-600 transition-colors font-medium">Преподаватели</button>
              <button className="text-slate-700 hover:text-indigo-600 transition-colors font-medium">Расписание</button>
              <button className="text-slate-700 hover:text-indigo-600 transition-colors font-medium">О нас</button>
            </nav>

            <div className="flex items-center gap-3">
              <Button variant="ghost" size="icon">
                <Icon name="Bell" size={20} />
              </Button>
              <Avatar className="cursor-pointer" onClick={() => setCurrentView('profile')}>
                <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=student" />
                <AvatarFallback>ИП</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <main>
        {currentView === 'home' && (
          <>
            <section className="container mx-auto px-4 py-20 text-center">
              <div className="max-w-4xl mx-auto animate-fade-in">
                <Badge className="mb-4 bg-indigo-100 text-indigo-700 hover:bg-indigo-100">Обучение будущего</Badge>
                <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                  Учитесь в своём темпе с <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">лучшими курсами</span>
                </h1>
                <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
                  Получите доступ к тысячам профессиональных курсов, вебинарам с экспертами и сертификатам, которые помогут построить карьеру мечты
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                  <Button size="lg" className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700" onClick={() => setCurrentView('courses')}>
                    <Icon name="Play" size={20} className="mr-2" />
                    Начать обучение
                  </Button>
                  <Button size="lg" variant="outline">
                    <Icon name="Info" size={20} className="mr-2" />
                    Узнать больше
                  </Button>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600">1200+</div>
                  <div className="text-slate-600 mt-2">Курсов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600">50K+</div>
                  <div className="text-slate-600 mt-2">Студентов</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600">200+</div>
                  <div className="text-slate-600 mt-2">Преподавателей</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-indigo-600">98%</div>
                  <div className="text-slate-600 mt-2">Рейтинг</div>
                </div>
              </div>
            </section>

            <section className="container mx-auto px-4 py-16">
              <div className="flex justify-between items-center mb-8">
                <h2 className="text-3xl font-bold text-slate-900">Популярные курсы</h2>
                <Button variant="ghost" onClick={() => setCurrentView('courses')}>
                  Все курсы <Icon name="ArrowRight" size={18} className="ml-2" />
                </Button>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {courses.slice(0, 3).map((course) => (
                  <Card key={course.id} className="hover:shadow-xl transition-all duration-300 cursor-pointer group" onClick={() => openCourse(course)}>
                    <div className="aspect-video relative overflow-hidden rounded-t-lg">
                      <img src={course.image} alt={course.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                      <Badge className="absolute top-3 right-3 bg-white/90 text-slate-900">{course.category}</Badge>
                    </div>
                    <CardHeader>
                      <div className="flex justify-between items-start mb-2">
                        <Badge variant="outline">{course.level}</Badge>
                        <div className="flex items-center gap-1 text-yellow-500">
                          <Icon name="Star" size={16} fill="currentColor" />
                          <span className="text-sm font-semibold text-slate-700">{course.rating}</span>
                        </div>
                      </div>
                      <CardTitle className="text-xl">{course.title}</CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
                        <Icon name="User" size={16} />
                        <span>{course.instructor}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm text-slate-600">
                        <div className="flex items-center gap-1">
                          <Icon name="Users" size={16} />
                          <span>{course.students.toLocaleString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Clock" size={16} />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="BookOpen" size={16} />
                          <span>{course.lessons} уроков</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section className="container mx-auto px-4 py-16">
              <div className="grid md:grid-cols-3 gap-8">
                <Card className="text-center p-8 border-2 hover:border-indigo-300 transition-all animate-fade-in">
                  <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Video" size={32} className="text-indigo-600" />
                  </div>
                  <CardTitle className="mb-3">Видеоуроки HD</CardTitle>
                  <CardDescription>Смотрите качественные видео в удобное время с возможностью ускорения</CardDescription>
                </Card>

                <Card className="text-center p-8 border-2 hover:border-purple-300 transition-all animate-fade-in">
                  <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Award" size={32} className="text-purple-600" />
                  </div>
                  <CardTitle className="mb-3">Сертификаты</CardTitle>
                  <CardDescription>Получайте признанные сертификаты после завершения курсов</CardDescription>
                </Card>

                <Card className="text-center p-8 border-2 hover:border-blue-300 transition-all animate-fade-in">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="MessageCircle" size={32} className="text-blue-600" />
                  </div>
                  <CardTitle className="mb-3">Чат с экспертами</CardTitle>
                  <CardDescription>Задавайте вопросы преподавателям и общайтесь с другими студентами</CardDescription>
                </Card>
              </div>
            </section>
          </>
        )}

        {currentView === 'courses' && (
          <section className="container mx-auto px-4 py-12">
            <div className="mb-8">
              <h1 className="text-4xl font-bold text-slate-900 mb-4">Каталог курсов</h1>
              <p className="text-slate-600">Выберите курс и начните обучение прямо сейчас</p>
            </div>

            <div className="flex gap-4 mb-8 flex-wrap">
              <Button variant="outline">Все категории</Button>
              <Button variant="outline">Разработка</Button>
              <Button variant="outline">Дизайн</Button>
              <Button variant="outline">Маркетинг</Button>
              <Button variant="outline">Data Science</Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {courses.map((course) => (
                <Card key={course.id} className="hover:shadow-xl transition-all duration-300 cursor-pointer group" onClick={() => openCourse(course)}>
                  <div className="aspect-video relative overflow-hidden rounded-t-lg">
                    <img src={course.image} alt={course.title} className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300" />
                    <Badge className="absolute top-3 right-3 bg-white/90 text-slate-900">{course.category}</Badge>
                    {course.progress > 0 && (
                      <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm p-2">
                        <div className="flex justify-between items-center text-white text-xs mb-1">
                          <span>Прогресс</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} className="h-1" />
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge variant="outline">{course.level}</Badge>
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Icon name="Star" size={16} fill="currentColor" />
                        <span className="text-sm font-semibold text-slate-700">{course.rating}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <CardDescription>{course.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 text-sm text-slate-600 mb-3">
                      <Icon name="User" size={16} />
                      <span>{course.instructor}</span>
                    </div>
                    <div className="flex items-center justify-between text-sm text-slate-600">
                      <div className="flex items-center gap-1">
                        <Icon name="Users" size={16} />
                        <span>{course.students.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="Clock" size={16} />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Icon name="BookOpen" size={16} />
                        <span>{course.lessons} уроков</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {currentView === 'course' && selectedCourse && (
          <section className="container mx-auto px-4 py-12">
            <Button variant="ghost" className="mb-6" onClick={() => setCurrentView('courses')}>
              <Icon name="ArrowLeft" size={18} className="mr-2" />
              Назад к курсам
            </Button>

            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <Card className="mb-6">
                  <div className="aspect-video bg-slate-900 rounded-t-lg flex items-center justify-center relative overflow-hidden">
                    <img src={selectedCourse.image} alt="" className="object-cover w-full h-full opacity-40" />
                    <Button size="lg" className="absolute bg-white text-slate-900 hover:bg-slate-100 rounded-full w-20 h-20">
                      <Icon name="Play" size={32} />
                    </Button>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h2 className="text-sm font-semibold text-slate-600">Урок 4 из {selectedCourse.lessons}</h2>
                      <div className="flex items-center gap-2 text-sm text-slate-600">
                        <Icon name="Clock" size={16} />
                        <span>28:19</span>
                      </div>
                    </div>
                    <Progress value={videoProgress} className="mb-2" />
                    <div className="flex justify-between text-sm text-slate-600">
                      <span>Прогресс просмотра</span>
                      <span>{videoProgress}%</span>
                    </div>
                  </CardContent>
                </Card>

                <Tabs defaultValue="lessons" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="lessons">Уроки</TabsTrigger>
                    <TabsTrigger value="description">Описание</TabsTrigger>
                    <TabsTrigger value="chat">Обсуждение</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="lessons" className="space-y-3 mt-4">
                    {lessons.map((lesson) => (
                      <Card key={lesson.id} className={`cursor-pointer hover:shadow-md transition-all ${lesson.completed ? 'border-green-200 bg-green-50/30' : ''}`}>
                        <CardContent className="p-4 flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${lesson.completed ? 'bg-green-500' : 'bg-slate-200'}`}>
                              {lesson.completed ? (
                                <Icon name="Check" size={20} className="text-white" />
                              ) : (
                                <Icon name="Play" size={20} className="text-slate-600" />
                              )}
                            </div>
                            <div>
                              <h3 className="font-semibold text-slate-900">{lesson.title}</h3>
                              <p className="text-sm text-slate-600">{lesson.duration}</p>
                            </div>
                          </div>
                          {lesson.completed && <Badge className="bg-green-500 hover:bg-green-500">Пройдено</Badge>}
                        </CardContent>
                      </Card>
                    ))}
                  </TabsContent>

                  <TabsContent value="description" className="mt-4">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-4">О курсе</h3>
                        <p className="text-slate-700 mb-4">{selectedCourse.description}</p>
                        <h4 className="font-semibold mb-2">Что вы изучите:</h4>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <Icon name="CheckCircle2" size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Основы веб-разработки и современные инструменты</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon name="CheckCircle2" size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Создание адаптивных и красивых интерфейсов</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <Icon name="CheckCircle2" size={20} className="text-green-500 mt-0.5 flex-shrink-0" />
                            <span>Работа с JavaScript и современными фреймворками</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </TabsContent>

                  <TabsContent value="chat" className="mt-4">
                    <Card>
                      <CardContent className="p-6">
                        <div className="space-y-4 mb-4">
                          <div className="flex gap-3">
                            <Avatar>
                              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=maria" />
                              <AvatarFallback>МП</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="bg-slate-100 rounded-lg p-3">
                                <p className="font-semibold text-sm">Мария Петрова</p>
                                <p className="text-slate-700">Отличный урок! Всё понятно объяснили</p>
                              </div>
                              <span className="text-xs text-slate-500 ml-3">2 часа назад</span>
                            </div>
                          </div>
                          <div className="flex gap-3">
                            <Avatar>
                              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=ivan" />
                              <AvatarFallback>ИС</AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <div className="bg-slate-100 rounded-lg p-3">
                                <p className="font-semibold text-sm">Иван Сидоров</p>
                                <p className="text-slate-700">Есть вопрос по практическому заданию...</p>
                              </div>
                              <span className="text-xs text-slate-500 ml-3">5 часов назад</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <input type="text" placeholder="Написать сообщение..." className="flex-1 px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500" />
                          <Button>
                            <Icon name="Send" size={18} />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>О курсе</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Преподаватель</span>
                      <span className="font-semibold">{selectedCourse.instructor}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Студентов</span>
                      <span className="font-semibold">{selectedCourse.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Уроков</span>
                      <span className="font-semibold">{selectedCourse.lessons}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Длительность</span>
                      <span className="font-semibold">{selectedCourse.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Уровень</span>
                      <Badge variant="outline">{selectedCourse.level}</Badge>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Ваш прогресс</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center mb-4">
                      <div className="text-4xl font-bold text-indigo-600 mb-1">{selectedCourse.progress}%</div>
                      <p className="text-sm text-slate-600">Курс пройден</p>
                    </div>
                    <Progress value={selectedCourse.progress} className="mb-4" />
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-slate-600">Пройдено уроков</span>
                        <span className="font-semibold">{completedLessons.length} из {lessons.length}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-600">Тесты пройдены</span>
                        <span className="font-semibold">2 из 8</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700">
                      <Icon name="Trophy" size={18} className="mr-2" />
                      Получить сертификат
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>
        )}

        {currentView === 'profile' && (
          <section className="container mx-auto px-4 py-12">
            <div className="max-w-4xl mx-auto">
              <Card className="mb-6">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <Avatar className="w-24 h-24">
                      <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=student" />
                      <AvatarFallback>ИП</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <h1 className="text-3xl font-bold mb-2">Иван Петров</h1>
                      <p className="text-slate-600 mb-4">student@email.com</p>
                      <div className="flex gap-3">
                        <Button>Редактировать профиль</Button>
                        <Button variant="outline">Настройки</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Tabs defaultValue="courses" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="courses">Мои курсы</TabsTrigger>
                  <TabsTrigger value="certificates">Сертификаты</TabsTrigger>
                  <TabsTrigger value="stats">Статистика</TabsTrigger>
                </TabsList>

                <TabsContent value="courses" className="mt-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    {courses.filter(c => c.progress > 0).map((course) => (
                      <Card key={course.id} className="cursor-pointer hover:shadow-lg transition-all" onClick={() => openCourse(course)}>
                        <CardHeader>
                          <div className="flex justify-between items-start">
                            <CardTitle className="text-lg">{course.title}</CardTitle>
                            <Badge>{course.progress}%</Badge>
                          </div>
                          <CardDescription>{course.instructor}</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <Progress value={course.progress} className="mb-2" />
                          <div className="flex justify-between text-sm text-slate-600">
                            <span>{completedLessons.length} из {lessons.length} уроков</span>
                            <Button variant="link" className="p-0 h-auto">Продолжить</Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="certificates" className="mt-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Card className="border-2 border-dashed border-slate-300 hover:border-indigo-400 transition-colors">
                      <CardContent className="p-8 flex flex-col items-center justify-center text-center">
                        <Icon name="Award" size={48} className="text-slate-400 mb-4" />
                        <h3 className="font-semibold mb-2">Завершите курс</h3>
                        <p className="text-sm text-slate-600">Пройдите курс до конца, чтобы получить сертификат</p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>

                <TabsContent value="stats" className="mt-6">
                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <Card>
                      <CardContent className="p-6 text-center">
                        <Icon name="BookOpen" size={32} className="text-indigo-600 mx-auto mb-2" />
                        <div className="text-3xl font-bold text-slate-900">2</div>
                        <div className="text-sm text-slate-600">Активных курса</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6 text-center">
                        <Icon name="Clock" size={32} className="text-purple-600 mx-auto mb-2" />
                        <div className="text-3xl font-bold text-slate-900">24ч</div>
                        <div className="text-sm text-slate-600">Времени обучения</div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="p-6 text-center">
                        <Icon name="Trophy" size={32} className="text-yellow-600 mx-auto mb-2" />
                        <div className="text-3xl font-bold text-slate-900">0</div>
                        <div className="text-sm text-slate-600">Сертификатов</div>
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>Активность за неделю</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-end justify-between gap-2 h-48">
                        {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'].map((day, i) => (
                          <div key={day} className="flex-1 flex flex-col items-center gap-2">
                            <div className="w-full bg-indigo-200 rounded-t-lg" style={{ height: `${[60, 40, 80, 90, 70, 30, 50][i]}%` }}>
                              <div className="w-full bg-gradient-to-t from-indigo-600 to-purple-600 rounded-t-lg h-full"></div>
                            </div>
                            <span className="text-xs text-slate-600">{day}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </section>
        )}
      </main>

      <footer className="bg-slate-900 text-white py-12 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center">
                  <Icon name="GraduationCap" size={24} className="text-white" />
                </div>
                <span className="text-xl font-bold">EduPlatform</span>
              </div>
              <p className="text-slate-400 text-sm">Образовательная платформа нового поколения</p>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Платформа</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="hover:text-white cursor-pointer transition-colors">О нас</li>
                <li className="hover:text-white cursor-pointer transition-colors">Курсы</li>
                <li className="hover:text-white cursor-pointer transition-colors">Преподаватели</li>
                <li className="hover:text-white cursor-pointer transition-colors">Сертификаты</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Поддержка</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li className="hover:text-white cursor-pointer transition-colors">Справка</li>
                <li className="hover:text-white cursor-pointer transition-colors">Контакты</li>
                <li className="hover:text-white cursor-pointer transition-colors">FAQ</li>
                <li className="hover:text-white cursor-pointer transition-colors">Политика</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Контакты</h3>
              <ul className="space-y-2 text-sm text-slate-400">
                <li>info@eduplatform.ru</li>
                <li>+7 (999) 123-45-67</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-8 pt-8 text-center text-sm text-slate-400">
            © 2024 EduPlatform. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
