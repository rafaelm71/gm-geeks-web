import React, { useState, useEffect, useRef } from 'react';
import logoGM from './assets/logoGMgeeks-01.png';
import { 
  Code, 
  Cpu, 
  Bot, 
  ShieldCheck, 
  Mic2, 
  Flame, 
  Menu, 
  X, 
  ChevronRight, 
  Mail, 
  MapPin, 
  Phone,
  ArrowRight,
  Monitor,
  Server
} from 'lucide-react';


const FadeIn = ({ children, delay = 0 }) => {
  const [isVisible, setVisible] = useState(false);
  const domRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => setVisible(entry.isIntersecting));
    });
    const currentRef = domRef.current;
    if (currentRef) observer.observe(currentRef);
    return () => {
      if (currentRef) observer.unobserve(currentRef);
    };
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-all duration-1000 ease-out transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

// --- Datos Simulados ---

const services = [
  {
    category: "Software & Desarrollo",
    icon: <Code className="w-8 h-8" />,
    items: [
      "Desarrollo Web & Apps Móviles",
      "Automatización de Procesos",
      "Chatbots & Asistentes Virtuales",
      "Inteligencia Artificial (IA)"
    ]
  },
  {
    category: "Infraestructura & Seguridad",
    icon: <Server className="w-8 h-8" />,
    items: [
      "Cableado Estructurado",
      "Instalación de CCTV",
      "Control de Accesos",
      "Sistemas de Supresión de Incendios"
    ]
  },
  {
    category: "Audio & Conferencias",
    icon: <Mic2 className="w-8 h-8" />,
    items: [
      "Sistemas de Audio Profesional",
      "Salones de Conferencia",
      "Puertas de Emergencia",
      "Domótica Corporativa"
    ]
  }
];

const projects = [
  {
    id: 1,
    title: "Sistema de Gestión",
    category: "software",
    image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&q=80&w=800",
    desc: "Plataforma web para análisis de datos empresariales y gestión de inventario."
  },
  {
    id: 2,
    title: "Seguridad Corporativa Total",
    category: "hardware",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=800",
    desc: "Instalación completa de CCTV y control de accesos biométricos para edificio de oficinas."
  },
  {
    id: 3,
    title: "App E-Commerce",
    category: "software",
    image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282??auto=format&fit=crop&q=80&w=800",
    desc: "Aplicación móvil nativa para ventas minoristas con pasarela de pagos."
  },
  {
    id: 4,
    title: "Automatización de Sala de Conferencias",
    category: "hardware",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    desc: "Sistema de audio envolvente y proyección automatizada para sala de conferencias."
  },
  {
    id: 5,
    title: "Chatbot de Atención al Cliente",
    category: "software",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&q=80&w=800",
    desc: "Bot inteligente capaz de agendar citas y resolver dudas frecuentes 24/7."
  },
  {
    id: 6,
    title: "Cableado Estructurado Cat6A",
    category: "hardware",
    image: "https://images.unsplash.com/photo-1520869562399-e772f042f422?auto=format&fit=crop&q=80&w=800",
    desc: "Renovación completa de infraestructura de red para centro de datos."
  }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [filter, setFilter] = useState('all'); 
  
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="font-sans text-gray-800 bg-gray-50 min-h-screen flex flex-col">
      
      {/* --- NAVBAR --- */}
      <nav className="sticky top-0 z-50 bg-[#34202F] text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => scrollToSection('hero')}>
              
            
              
              {<img src={logoGM} alt="GM Geeks Logo" className="h-12 w-auto object-contain" />}

              
              
            </div>

            <div className="hidden md:flex space-x-8 items-center">
              <button onClick={() => scrollToSection('about')} className="hover:text-[#FF5A19] transition-colors">Nosotros</button>
              <button onClick={() => scrollToSection('services')} className="hover:text-[#FF5A19] transition-colors">Servicios</button>
              <button onClick={() => scrollToSection('portfolio')} className="hover:text-[#FF5A19] transition-colors">Portfolio</button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="bg-[#FF5A19] text-white px-5 py-2 rounded-full font-medium hover:bg-orange-600 transition-all transform hover:scale-105 shadow-lg"
              >
                Contáctanos
              </button>
            </div>

            <div className="md:hidden flex items-center">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white hover:text-[#FF5A19]">
                {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#2C1E2B] border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button onClick={() => scrollToSection('about')} className="block w-full text-left px-3 py-2 text-white hover:bg-[#FF5A19] rounded-md">Nosotros</button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left px-3 py-2 text-white hover:bg-[#FF5A19] rounded-md">Servicios</button>
              <button onClick={() => scrollToSection('portfolio')} className="block w-full text-left px-3 py-2 text-white hover:bg-[#FF5A19] rounded-md">Portfolio</button>
              <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-3 py-2 text-[#FF5A19] font-bold">Contáctanos</button>
            </div>
          </div>
        )}
      </nav>

      {/* --- HERO SECTION --- */}
      <div id="hero" className="relative bg-[#34202F] text-white overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
           <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FF5A19" d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,81.6,-46.6C91.4,-34.1,98.1,-19.2,95.8,-4.9C93.5,9.3,82.2,22.9,71.1,34.3C60,45.7,49.1,54.9,37.3,62.8C25.5,70.7,12.7,77.3,-1,79C-14.7,80.8,-29.4,77.6,-41.7,69.9C-54,62.2,-63.9,49.9,-71.3,36.5C-78.7,23.1,-83.6,8.6,-81.8,-5.1C-80,-18.8,-71.5,-31.7,-61.3,-41.8C-51.1,-51.9,-39.2,-59.2,-27.1,-67.9C-15,-76.6,-2.7,-86.7,11.3,-88.4C25.3,-90.1,50.6,-83.4,44.7,-76.4Z" transform="translate(100 100)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
                Tecnología que <br/>
                <span className="text-[#FF5A19]">Transforma</span> tu Mundo.
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed">
                En <strong>GM Geeks</strong>, fusionamos el hardware y el software para crear soluciones integrales. Desde desarrollo web hasta seguridad física avanzada.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('portfolio')}
                  className="bg-[#FF5A19] text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-500/30 flex items-center justify-center gap-2"
                >
                  Ver Proyectos <ArrowRight size={20} />
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-[#34202F] transition-all"
                >
                  Hablemos
                </button>
              </div>
            </FadeIn>
            
            <FadeIn delay={200}>
              <div className="relative">
                <div className="bg-gradient-to-tr from-[#FF5A19] to-purple-600 rounded-2xl p-1 rotate-3 shadow-2xl">
                  <div className="bg-[#2C1E2B] rounded-xl overflow-hidden h-80 md:h-96 flex items-center justify-center relative">
                    <div className="grid grid-cols-2 gap-4 p-8 opacity-80">
                      <div className="bg-gray-800 p-4 rounded-lg animate-pulse"><Code className="text-[#FF5A19] w-12 h-12"/></div>
                      <div className="bg-gray-800 p-4 rounded-lg"><Cpu className="text-blue-400 w-12 h-12"/></div>
                      <div className="bg-gray-800 p-4 rounded-lg"><ShieldCheck className="text-green-400 w-12 h-12"/></div>
                      <div className="bg-gray-800 p-4 rounded-lg animate-pulse delay-75"><Bot className="text-purple-400 w-12 h-12"/></div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>

      {/* --- ABOUT US --- */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#34202F] uppercase tracking-wide">Sobre Nosotros</h2>
            <div className="w-20 h-1 bg-[#FF5A19] mx-auto mt-4"></div>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Fundada por dos mejores amigos apasionados por la innovación, GM Geeks nace para cerrar la brecha entre el mundo digital y el físico.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <FadeIn delay={0}>
              <div className="bg-gray-50 p-8 rounded-xl border-t-4 border-[#FF5A19] shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <Monitor className="text-[#FF5A19]" />
                </div>
                <h3 className="text-xl font-bold text-[#34202F] mb-4">Nuestra Misión</h3>
                <p className="text-gray-600">
                  Proveer soluciones tecnológicas integrales que optimicen procesos y garanticen la seguridad.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={200}>
              <div className="bg-gray-50 p-8 rounded-xl border-t-4 border-[#34202F] shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="bg-purple-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <Flame className="text-[#34202F]" />
                </div>
                <h3 className="text-xl font-bold text-[#34202F] mb-4">Nuestra Visión</h3>
                <p className="text-gray-600">
                  Ser referentes líderes en la integración de servicios tecnológicos mixtos en la región.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="bg-gray-50 p-8 rounded-xl border-t-4 border-[#FF5A19] shadow-sm hover:shadow-md transition-shadow h-full">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                  <ShieldCheck className="text-[#FF5A19]" />
                </div>
                <h3 className="text-xl font-bold text-[#34202F] mb-4">Nuestros Valores</h3>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#FF5A19] rounded-full"></div>Innovación Constante</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#FF5A19] rounded-full"></div>Integridad y Confianza</li>
                  <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-[#FF5A19] rounded-full"></div>Trabajo en Equipo</li>
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- SERVICES SECTION --- */}
      <section id="services" className="py-20 bg-gray-100 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-[#FF5A19] font-bold uppercase tracking-wider text-sm">Lo que hacemos</span>
            <h2 className="text-3xl md:text-4xl font-bold text-[#34202F] mt-2">Servicios 360°</h2>
            <p className="mt-4 text-gray-600">Desde la primera línea de código hasta el último cable.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FadeIn key={index} delay={index * 150}>
                <div className="bg-white rounded-2xl shadow-lg overflow-hidden group hover:-translate-y-2 transition-transform duration-300 h-full">
                  <div className="bg-[#34202F] p-6 flex items-center justify-between group-hover:bg-[#FF5A19] transition-colors duration-300">
                    <h3 className="text-white text-xl font-bold">{service.category}</h3>
                    <div className="text-white opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all">
                      {service.icon}
                    </div>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-3">
                      {service.items.map((item, i) => (
                        <li key={i} className="flex items-start text-gray-600">
                          <ChevronRight className="w-5 h-5 text-[#FF5A19] mr-2 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- PORTFOLIO SECTION --- */}
      <section id="portfolio" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-bold text-[#34202F]">Nuestros Proyectos</h2>
              <p className="text-gray-500 mt-2">Una muestra de nuestro trabajo reciente.</p>
            </div>
            
            <div className="flex gap-2 mt-6 md:mt-0">
              <button onClick={() => setFilter('all')} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'all' ? 'bg-[#34202F] text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}>Todos</button>
              <button onClick={() => setFilter('software')} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'software' ? 'bg-[#34202F] text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}>Software</button>
              <button onClick={() => setFilter('hardware')} className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${filter === 'hardware' ? 'bg-[#34202F] text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}>Hardware</button>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <FadeIn key={project.id}>
                <div className="group rounded-xl overflow-hidden cursor-pointer relative shadow-md">
                  <div className="aspect-video overflow-hidden">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#34202F] via-[#34202F]/70 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-[#FF5A19] text-xs font-bold uppercase tracking-wider mb-2">{project.category}</span>
                    <h3 className="text-white text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-300 text-sm line-clamp-2">{project.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- CONTACT SECTION --- */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div>
                <span className="text-[#FF5A19] font-bold uppercase tracking-wider text-sm">Contáctanos</span>
                <h2 className="text-4xl font-bold mt-2 text-[#34202F]">¿Listo para innovar?</h2>
                <p className="text-gray-600 mt-4 text-lg">
                  Cuéntanos tu proyecto. Nosotros ponemos la tecnología.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#34202F] flex items-center justify-center text-[#FF5A19] group-hover:bg-[#FF5A19] group-hover:text-white transition-colors">
                    <Phone />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Llámanos</p>
                    <p className="text-lg font-semibold text-[#34202F]">+1 (829) 853-6854</p>
                    <p className="text-lg font-semibold text-[#34202F]">+1 (809) 769-0368</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#34202F] flex items-center justify-center text-[#FF5A19] group-hover:bg-[#FF5A19] group-hover:text-white transition-colors">
                    <Mail />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Correo Electrónico</p>
                    <p className="text-lg font-semibold text-[#34202F]">angel.guzman@gmgeeks.tech</p>
                    <p className="text-lg font-semibold text-[#34202F]">rafael.malena@gmgeeks.tech</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#34202F] flex items-center justify-center text-[#FF5A19] group-hover:bg-[#FF5A19] group-hover:text-white transition-colors">
                    <MapPin />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Ubicación</p>
                    <p className="text-lg font-semibold text-[#34202F]">Santo Domingo, RD</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF5A19] focus:border-transparent outline-none transition-all bg-gray-50" placeholder="Nombre" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Teléfono</label>
                    <input type="tel" className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF5A19] focus:border-transparent outline-none transition-all bg-gray-50" placeholder="809..." />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Servicio de Interés</label>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF5A19] focus:border-transparent outline-none transition-all bg-gray-50">
                    <option>Seleccionar opción...</option>
                    <option>Desarrollo Web / App</option>
                    <option>CCTV / Seguridad</option>
                    <option>Automatización / IA</option>
                    <option>Infraestructura de Red</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                  <textarea 
                    rows="4" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-[#FF5A19] focus:border-transparent outline-none transition-all bg-gray-50" 
                    placeholder="Cuéntanos sobre tu proyecto..."
                  ></textarea>
                </div>

                <button type="submit" className="w-full bg-[#34202F] text-white font-bold py-4 rounded-lg hover:bg-[#4a2e43] transition-colors shadow-lg flex justify-center items-center gap-2">
                  Enviar Mensaje <ArrowRight size={18} />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-[#2C1E2B] text-gray-400 py-8 border-t border-gray-800 text-center">
        <div className="max-w-7xl mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} GM Geeks. Todos los derechos reservados.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="https://www.instagram.com/gm.geeks" className="hover:text-white transition-colors">Instagram</a>
            
          </div>
        </div>
      </footer>
    </div>
  );
}