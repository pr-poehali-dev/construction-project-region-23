import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import Icon from '@/components/ui/icon';
import { toast } from 'sonner';

const Index = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '', agree: false });

  const services = [
    {
      title: 'Проектирование',
      description: 'Эскизные и рабочие проекты, сметы, экспертиза.',
      details: 'Архитектура, конструктив, инженерные разделы. BIM‑моделирование, проверка узлов, оптимизация стоимости.',
      icon: 'PenTool'
    },
    {
      title: 'Фундамент',
      description: 'Ленточные, плитные, свайные решения.',
      details: 'Геология, расчёты нагрузки, армирование по СП. Контроль качества бетона и гидроизоляции.',
      icon: 'Layers'
    },
    {
      title: 'Коробка',
      description: 'Кладка, монолит, перекрытия, кровля.',
      details: 'Газоблок/кирпич, монолитные пояса, тёплая кровля. Согласование изменений по месту.',
      icon: 'Home'
    },
    {
      title: 'Инженерные сети',
      description: 'Электрика, ВК, ОВиК, слаботочка.',
      details: 'Щиты и кабельные трассы, коллекторы, котельные, приточно‑вытяжная вентиляция, умный дом.',
      icon: 'Zap'
    },
    {
      title: 'Отделка',
      description: 'Черновая и чистовая, фасады.',
      details: 'Штукатурка по маякам, стяжка, плитка, малярные, фасадные системы, террасы и благоустройство.',
      icon: 'Paintbrush'
    },
    {
      title: 'Генподряд',
      description: 'Полное управление проектом.',
      details: 'План‑график, бюджетирование, снабжение, ТБ, авторский надзор, отчётность и фотофиксация.',
      icon: 'Briefcase'
    }
  ];

  const projects = [
    { title: 'Коттедж 280 м²', location: 'Краснодар • 6 месяцев • под ключ', image: 'project-1' },
    { title: 'Таунхаус', location: 'Геленджик • коробка + инженерия', image: 'project-2' },
    { title: 'Офисный блок', location: 'Новороссийск • реконструкция', image: 'project-3' },
    { title: 'Фасад ТЦ', location: 'Анапа • вентилируемые фасады', image: 'project-4' },
    { title: 'Кровля', location: 'Частный дом • мягкая черепица', image: 'project-5' },
    { title: 'Инженерные сети', location: 'Склад • пожарка, вентиляция', image: 'project-6' }
  ];

  const partners = ['Knauf', 'TechnoNicol', 'Bosch', 'Hilti', 'Velux', 'Rehau', 'ISOVER', 'Kerama'];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agree) {
      toast.error('Необходимо согласие на обработку персональных данных');
      return;
    }
    console.log('Form submitted:', formData);
    toast.success('Спасибо! Мы свяжемся с вами в ближайшее время.');
    setFormData({ name: '', phone: '', message: '', agree: false });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 dark">
      <header className="sticky top-0 z-50 backdrop-blur-md bg-slate-950/60 border-b border-white/10">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-cyan-400 flex items-center justify-center font-bold text-slate-950 text-sm shadow-lg shadow-blue-500/30 group-hover:shadow-blue-500/50 transition-shadow">
              ПСК
            </div>
            <span className="font-bold text-white tracking-wide">Регион 23</span>
          </a>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-slate-300 transition-all ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-slate-300 transition-all ${menuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-slate-300 transition-all ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>

          <nav className={`${menuOpen ? 'flex' : 'hidden'} md:flex absolute md:relative top-16 md:top-0 left-0 right-0 md:left-auto md:right-auto bg-slate-900/95 md:bg-transparent backdrop-blur-md md:backdrop-blur-none border-b md:border-0 border-white/10 flex-col md:flex-row items-stretch md:items-center gap-1 md:gap-6 p-4 md:p-0`}>
            <a href="#services" className="text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5">Услуги</a>
            <a href="#projects" className="text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5">Объекты</a>
            <a href="#partners" className="text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5">Партнёры</a>
            <a href="#contacts" className="text-slate-300 hover:text-white transition-colors px-3 py-2 rounded-lg hover:bg-white/5">Контакты</a>
            <Button size="sm" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold shadow-lg shadow-blue-500/30" asChild>
              <a href="#contacts">Получить смету</a>
            </Button>
          </nav>
        </div>
      </header>

      <main>
        <section className="py-20 md:py-32 border-b border-white/10">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                  Первая Строительная Компания Регион 23
                </h1>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                  Строительство под ключ: от проектирования до сдачи объекта. Работаем по Договору, соблюдаем сроки и бюджет, даём гарантию.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Button size="lg" className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold shadow-lg shadow-blue-500/30" asChild>
                    <a href="#contacts">Рассчитать стоимость</a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:bg-white/5">
                    Скачать презентацию
                  </Button>
                </div>
                <div className="flex flex-wrap gap-6 text-slate-300">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 shadow-lg shadow-green-500/50"></div>
                    <span>15+ лет на рынке</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 shadow-lg shadow-green-500/50"></div>
                    <span>Собственные бригады</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-green-400 to-emerald-400 shadow-lg shadow-green-500/50"></div>
                    <span>Технадзор и отчётность</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -right-4 bg-gradient-to-br from-green-500/20 to-emerald-500/20 border border-green-500/40 rounded-xl px-4 py-2 text-green-300 font-semibold text-sm backdrop-blur-sm z-10">
                  ISO 9001
                </div>
                <div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 shadow-2xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-500/20"></div>
                  <div className="absolute top-1/3 left-1/4 w-32 h-32 bg-blue-500/30 rounded-full blur-3xl"></div>
                  <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-cyan-500/30 rounded-full blur-3xl"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Наши услуги</h2>
            <p className="text-slate-400 mb-12">Комплексные решения для частных и коммерческих проектов.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, idx) => (
                <Card key={idx} className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-white/10 hover:border-blue-500/30 transition-all duration-300 overflow-hidden relative hover:shadow-xl hover:shadow-blue-500/10">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Icon name={service.icon} className="text-blue-400" size={24} />
                    </div>
                    <CardTitle className="text-white text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-slate-300">{service.description}</CardDescription>
                  </CardHeader>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <p className="text-slate-200 text-sm leading-relaxed">{service.details}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-slate-900/50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Завершённые объекты</h2>
            <p className="text-slate-400 mb-12">Подборка последних работ. Больше фото и сметы — по запросу.</p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, idx) => (
                <div key={idx} className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                  <div className="aspect-[4/3] bg-gradient-to-br from-slate-700 to-slate-800 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-transparent to-cyan-500/20 group-hover:scale-110 transition-transform duration-500"></div>
                    <div className="absolute top-1/3 left-1/3 w-24 h-24 bg-blue-500/40 rounded-full blur-2xl"></div>
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-6">
                    <h3 className="text-white font-semibold text-lg mb-1">{project.title}</h3>
                    <p className="text-slate-300 text-sm">{project.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="partners" className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">С нами работают</h2>
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 py-8">
              <div className="flex animate-[scroll_24s_linear_infinite]">
                {[...partners, ...partners].map((partner, idx) => (
                  <div
                    key={idx}
                    className="flex-shrink-0 min-w-[200px] mx-4 px-8 py-4 text-center text-slate-300 border border-white/10 rounded-xl bg-white/5 backdrop-blur-sm font-semibold hover:border-blue-500/30 hover:text-white transition-all"
                  >
                    {partner}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="contacts" className="py-20 bg-slate-900/50">
          <div className="container mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Контакты</h2>
                <p className="text-slate-400 mb-8">Ответим на вопросы и рассчитаем смету за 24 часа.</p>
                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <Icon name="Phone" className="text-blue-400 mt-1" size={20} />
                    <div>
                      <div className="text-slate-400 text-sm">Телефон</div>
                      <a href="tel:+79001234567" className="text-white hover:text-blue-400 transition-colors">+7 (900) 123‑45‑67</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Mail" className="text-blue-400 mt-1" size={20} />
                    <div>
                      <div className="text-slate-400 text-sm">Email</div>
                      <a href="mailto:info@psk23.ru" className="text-white hover:text-blue-400 transition-colors">info@psk23.ru</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="MapPin" className="text-blue-400 mt-1" size={20} />
                    <div>
                      <div className="text-slate-400 text-sm">Адрес</div>
                      <div className="text-white">Краснодар, ул. Примерная, 1</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="Clock" className="text-blue-400 mt-1" size={20} />
                    <div>
                      <div className="text-slate-400 text-sm">График</div>
                      <div className="text-white">Пн‑Пт 09:00–19:00</div>
                    </div>
                  </div>
                </div>
                <div className="aspect-video rounded-xl border border-white/10 bg-gradient-to-br from-slate-800/50 to-slate-900/50 flex items-center justify-center text-slate-500">
                  <Icon name="Map" size={48} />
                </div>
              </div>

              <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-white/10 shadow-2xl">
                <CardHeader>
                  <CardTitle className="text-white">Получить смету</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-slate-300">Имя</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ваше имя"
                        required
                        className="bg-slate-900/50 border-white/20 text-white placeholder:text-slate-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-slate-300">Телефон</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+7 (___) ___‑__‑__"
                        required
                        className="bg-slate-900/50 border-white/20 text-white placeholder:text-slate-500 focus:border-blue-500"
                      />
                    </div>
                    <div>
                      <Label htmlFor="message" className="text-slate-300">Сообщение</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Кратко опишите задачу"
                        rows={4}
                        className="bg-slate-900/50 border-white/20 text-white placeholder:text-slate-500 focus:border-blue-500 resize-none"
                      />
                    </div>
                    <div className="flex items-start gap-3">
                      <Checkbox
                        id="agree"
                        checked={formData.agree}
                        onCheckedChange={(checked) => setFormData({ ...formData, agree: checked as boolean })}
                        className="mt-1 border-slate-600"
                      />
                      <Label htmlFor="agree" className="text-slate-400 text-sm leading-relaxed cursor-pointer">
                        Согласен на обработку персональных данных
                      </Label>
                    </div>
                    <Button type="submit" className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold shadow-lg shadow-blue-500/30">
                      Отправить заявку
                    </Button>
                    <p className="text-slate-500 text-xs text-center">
                      Нажимая «Отправить», вы соглашаетесь с политикой конфиденциальности.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-slate-950/80">
        <div className="container mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-slate-400 text-sm">
          <div>© {new Date().getFullYear()} Первая Строительная Компания Регион 23</div>
          <a href="#" className="hover:text-white transition-colors">Политика конфиденциальности</a>
        </div>
      </footer>
    </div>
  );
};

export default Index;
