import React, { useState, useEffect } from 'react';
import { 
  CheckCircle2, 
  BookOpen, 
  Type, 
  PenTool, 
  Palette, 
  Smartphone, 
  Printer, 
  Clock, 
  ShieldCheck, 
  MessageCircle,
  Star,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { motion } from 'motion/react';

// Reusable components
const Button = ({ children, href = "#oferta", primary = true, className = "" }) => (
  <a 
    href={href}
    className={`inline-flex justify-center items-center py-4 px-8 rounded-full font-heading font-semibold text-lg transition-transform hover:scale-105 shadow-lg text-center ${
      primary 
        ? "bg-green-500 text-white hover:bg-green-600 shadow-green-500/30" 
        : "bg-yellow-400 text-gray-900 hover:bg-yellow-500 shadow-yellow-400/30"
    } ${className}`}
  >
    {children}
  </a>
);

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "https://res.cloudinary.com/dvg6hojfs/image/upload/v1777157248/8d88551811c54338ddd3e7f2dd72c400dy17pK7x5h3SNjfq-211_rtvocf.webp",
    "https://res.cloudinary.com/dvg6hojfs/image/upload/v1777157589/035d5785ba7642a68a95e8fb17849d31ajKZlyi9kWVGjuxh-21_h7ybym.webp",
    "https://res.cloudinary.com/dvg6hojfs/image/upload/v1777157710/035d5785ba7642a68a95e8fb17849d31ajKZlyi9kWVGjuxh-31_fve8qr.webp",
    "https://res.cloudinary.com/dvg6hojfs/image/upload/v1777157763/bfd126664c66485d9610364834c90030ncw0SgvZwjKKCTdV-21_en4zzx.webp",
    "https://res.cloudinary.com/dvg6hojfs/image/upload/v1777157796/bfd126664c66485d9610364834c90030ncw0SgvZwjKKCTdV-91_y77yy6.webp",
    "https://res.cloudinary.com/dvg6hojfs/image/upload/v1777157817/8d88551811c54338ddd3e7f2dd72c400dy17pK7x5h3SNjfq-31_ssyquz.webp"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 10000);
    return () => clearInterval(timer);
  }, [images.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-4">
      <div className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-2xl shadow-xl h-[500px] sm:h-[700px] md:h-[850px] bg-white border flex items-center justify-center">
        <div 
          className="flex transition-transform duration-500 ease-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)`, width: `${images.length * 100}%` }}
        >
          {images.map((src, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 flex items-center justify-center p-0 sm:p-2">
              <img 
                src={src} 
                alt={`Exemplo de atividade ${index + 1}`} 
                className="w-full h-full object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 text-gray-800 hover:bg-white shadow-lg transition-transform hover:scale-110"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/90 text-gray-800 hover:bg-white shadow-lg transition-transform hover:scale-110"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Indicators */}
      <div className="flex justify-center gap-2 mt-6">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              currentIndex === index ? "bg-green-500 w-6" : "bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Ir para a imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default function App() {
  const [timeLeft, setTimeLeft] = useState({ hours: 2, minutes: 45, seconds: 0 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 overflow-x-hidden">
      
      {/* 1. HERO SECTION */}
      <section className="pt-6 pb-20 px-4 max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-medium text-sm mb-6">
            <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
            Milhares de pais e professores aprovam
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
            Seu filho com letra bonita, clara e confiante em <span className="text-pink-500">poucos dias</span>
          </h1>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Mais de 350 atividades práticas de caligrafia para crianças do 1º ao 6º ano desenvolverem escrita cursiva com facilidade.
          </p>

          <div className="flex justify-center mb-10">
            <img 
              src="https://res.cloudinary.com/dvg6hojfs/image/upload/v1777155908/ChatGPT_Image_25_de_abr._de_2026_19_21_45_amuca0.png" 
              alt="Criança escrevendo" 
              className="w-full max-w-md rounded-2xl shadow-xl border-4 border-white transform hover:scale-105 transition-transform duration-300"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 text-left max-w-md mx-auto mb-10">
            <ul className="space-y-3 relative">
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="font-medium text-gray-700">Mais de 400 páginas</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="font-medium text-gray-700">Método simples e progressivo</span>
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0" />
                <span className="font-medium text-gray-700">Ideal para pais e professores</span>
              </li>
            </ul>
          </div>
          
          <Button className="w-full sm:w-auto text-xl px-12">COMEÇAR AGORA</Button>
        </motion.div>
      </section>

      {/* 2. BENEFÍCIOS */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-12">O que seu filho vai desenvolver?</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              {[
                { title: "Escrita mais bonita, rápida e legível", icon: PenTool },
                { title: "Mais foco e concentração nos estudos", icon: Clock },
                { title: "Coordenação motora mais firme e precisa", icon: Palette },
                { title: "Melhor raciocínio e organização mental", icon: BookOpen },
                { title: "Mais confiança para escrever e se expressar", icon: Star },
              ].map((benefit, i) => (
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  key={i} 
                  className="flex items-start gap-4 p-4 rounded-xl bg-pink-50 hover:bg-pink-100 transition-colors"
                >
                  <div className="bg-pink-500 text-white p-2 rounded-lg">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <p className="font-semibold text-lg text-gray-800 pt-1">{benefit.title}</p>
                </motion.div>
              ))}
            </div>
            <div className="relative rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center bg-white">
              <img 
                src="https://res.cloudinary.com/dvg6hojfs/image/upload/v1777156588/ChatGPT_Image_25_de_abr._de_2026_19_36_12_ox0ior.png" 
                alt="Cadernos de Atividades" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 3. PROMESSA */}
      <section className="py-16 bg-green-500 text-white text-center px-4">
        <h2 className="text-4xl md:text-5xl font-black italic tracking-wide">
          "Letra feia nunca mais."
        </h2>
      </section>

      {/* 3.5 EXEMPLOS DE ATIVIDADES */}
      <section className="py-16 bg-white">
        <div className="text-center mb-8 px-4">
          <h2 className="text-3xl md:text-4xl font-bold bg-yellow-100 text-yellow-900 px-6 py-2 inline-block rounded-2xl transform -rotate-1">
            Exemplos de Atividades
          </h2>
          <p className="text-gray-600 mt-4 text-lg">Confira algumas das páginas que seu filho vai praticar.</p>
        </div>
        <Carousel />
      </section>

      {/* 4. CONTEÚDO (MÓDULOS) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">Você terá acesso a um método completo</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Dividido em módulos estratégicos para evolução rápida e contínua do aprendizado da criança.</p>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Caderno Prático", desc: "Treinos guiados para firmar o traço e ganhar fluidez", icon: PenTool, color: "text-blue-500", bg: "bg-blue-100" },
              { title: "Silabário Cursivo", desc: "Aprendizado progressivo da leitura e escrita", icon: Type, color: "text-green-500", bg: "bg-green-100" },
              { title: "Frases Cursivas", desc: "Treino de escrita fluida e legível step by step", icon: BookOpen, color: "text-yellow-600", bg: "bg-yellow-100" },
              { title: "Produção de Frases", desc: "Estimula a criatividade e amplia o vocabulário", icon: MessageCircle, color: "text-pink-500", bg: "bg-pink-100" },
              { title: "Coordenação Motora", desc: "Fortalece mãos e dedos para uma escrita bonita", icon: Palette, color: "text-purple-500", bg: "bg-purple-100" },
            ].map((mod, i) => (
               <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                key={i} 
                className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className={`${mod.bg} ${mod.color} w-14 h-14 rounded-xl flex items-center justify-center mb-4`}>
                  <mod.icon className="w-7 h-7" />
                </div>
                <h3 className="font-bold text-xl mb-2">{mod.title}</h3>
                <p className="text-gray-600 leading-relaxed">{mod.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. COMO FUNCIONA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-16">Como Funciona?</h2>
          
          <div className="grid md:grid-cols-3 gap-10">
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-sm border-4 border-white outline outline-4 outline-green-50">
                <Smartphone className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-xl mb-2">1. Receba no Celular</h3>
              <p className="text-gray-600">Acesso imediato no WhatsApp e E-mail após confirmação.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-6 shadow-sm border-4 border-white outline outline-4 outline-blue-50">
                <Printer className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-xl mb-2">2. Baixe e Imprima</h3>
              <p className="text-gray-600">Imprima as atividades quando quiser, pelo celular ou computador.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-20 h-20 bg-pink-100 text-pink-500 rounded-full flex items-center justify-center mb-6 shadow-sm border-4 border-white outline outline-4 outline-pink-50">
                <PenTool className="w-10 h-10" />
              </div>
              <h3 className="font-bold text-xl mb-2">3. Uso Ilimitado</h3>
              <p className="text-gray-600">Use quantas vezes quiser e respeite o ritmo da criança.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OFERTA & ESCASSEZ */}
      <section id="oferta" className="py-20 bg-[#f8fcf8] text-gray-900 relative border-t-4 border-b-4 border-green-500/10">
        {/* Decorative background shape */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-40">
          <div className="absolute top-[-10%] right-[-5%] w-[40%] h-[40%] rounded-full bg-yellow-300 blur-[80px]"></div>
          <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[40%] rounded-full bg-blue-300 blur-[80px]"></div>
          <div className="absolute top-[40%] left-[50%] w-[30%] h-[30%] rounded-full bg-pink-300 blur-[100px]"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800">
              O futuro do seu filho a um clique
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Escolha o pacote ideal e transforme a escrita e a confiança da criança de forma leve e divertida!
            </p>
            
            <div className="inline-flex flex-col items-center justify-center bg-red-50 text-red-600 border-2 border-red-200 px-6 py-3 rounded-2xl mb-4 shadow-sm">
              <span className="text-sm font-bold mb-1 uppercase tracking-wider">⏱️ Oferta se encerra em breve!</span>
              <div className="font-mono text-3xl font-black text-red-500">
                {String(timeLeft.hours).padStart(2, '0')}:
                {String(timeLeft.minutes).padStart(2, '0')}:
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <span className="text-xs text-red-400 mt-1 font-medium">Garanta o material antes que o valor aumente</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch focus-within:outline-none">
            
            {/* PLANO BÁSICO */}
            <div className="bg-white rounded-[2rem] p-8 border-2 border-gray-100 shadow-xl flex flex-col justify-between transform md:translate-y-4">
              <div>
                <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-sm font-bold mb-6 tracking-wide">
                  PLANO INICIANTE
                </div>
                <div className="mb-1">
                  <span className="text-gray-400 line-through text-lg font-medium">de R$ 19,90</span>
                </div>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-2xl font-bold text-gray-400">por</span>
                  <span className="text-2xl font-bold text-gray-800 ml-1">R$</span>
                  <span className="text-6xl font-black text-gray-800">5,90</span>
                </div>
                
                <p className="text-gray-500 mb-6 border-b border-gray-100 pb-6 text-lg">
                  Ideal para começar e conhecer nossa metodologia principal.
                </p>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">Caderno de Caligrafia Cursiva</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">Acesso imediato no WhatsApp</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">Uso e impressão ilimitada</span>
                  </li>
                </ul>
              </div>
              
              <div>
                <Button href="#" primary={false} className="w-full bg-blue-50 text-blue-700 hover:bg-blue-100 shadow-none border-2 border-blue-200">
                  QUERO COMEÇAR
                </Button>
                <div className="mt-5 p-4 bg-yellow-50 rounded-xl border border-yellow-200 text-center relative pointer-events-none">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                    Dica de Ouro
                  </div>
                  <p className="text-sm text-yellow-800 font-medium pt-2">
                    Quer o kit completo com todos os cadernos? <br/>
                    <span className="md:hidden text-yellow-600 underline font-bold mt-1 inline-block">Role para baixo e veja a oferta Premium! 👇</span>
                  </p>
                </div>
              </div>
            </div>

            {/* PLANO PREMIUM */}
            <div className="bg-gradient-to-b from-green-400 to-green-600 rounded-[2rem] p-8 shadow-2xl shadow-green-500/40 transform md:-translate-y-2 relative border-[3px] border-green-300 flex flex-col justify-between overflow-visible">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-full text-center">
                <span className="bg-yellow-400 text-yellow-900 font-black px-6 py-2 rounded-full text-sm shadow-lg flex items-center justify-center gap-2 max-w-[fit-content] mx-auto border-2 border-yellow-300 uppercase tracking-wide">
                  <Star className="w-5 h-5 fill-yellow-900" /> A ESCOLHA Nº 1 DAS MÃES
                </span>
              </div>
              
              <div className="mt-4">
                <div className="inline-block px-4 py-1.5 bg-green-800/30 text-white rounded-full text-sm font-bold mb-4 border border-green-300/30">
                  PLANO COMPLETO
                </div>
                
                <div className="mb-1">
                  <span className="text-green-200 line-through text-lg font-medium">de R$ 49,90</span>
                </div>
                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-2xl font-bold text-green-100">por</span>
                  <span className="text-2xl font-bold text-white ml-1">R$</span>
                  <span className="text-7xl font-black text-white drop-shadow-sm">15,90</span>
                </div>
                
                <p className="text-green-50 mb-6 border-b border-green-300/40 pb-6 font-medium text-lg">
                  O kit absoluto de aprendizado. Todo o material necessário para transformar a letra do seu filho!
                </p>
                
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="font-bold text-white mb-3 text-lg">Leve todos os módulos:</h4>
                    <ul className="space-y-3">
                      {["Caderno do Alfabeto", "Caderno de Caligrafia Cursiva", "Caderno de Sílabas", "Produção de Texto", "Produção de Frases", "Coordenação Motora"].map((item, i) => (
                        <li key={i} className="flex items-center gap-3 bg-green-500/20 p-2 rounded-lg border border-green-400/20">
                          <CheckCircle2 className="w-5 h-5 text-yellow-300 flex-shrink-0" />
                          <span className="text-white font-semibold">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-white/10 p-5 rounded-xl border border-white/20 backdrop-blur-sm">
                    <h4 className="font-bold text-yellow-300 mb-3 flex items-center gap-2 text-lg">
                      🎁 3 Super Bônus Grátis
                    </h4>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <Star className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                        <span className="text-green-50 font-medium">Suporte tira-dúvidas no WhatsApp</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                        <span className="text-green-50 font-medium">Acesso vitalício ao material</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <Star className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                        <span className="text-green-50 font-medium">Todas as atualizações gratuitas</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div>
                <Button href="#" primary={false} className="w-full bg-yellow-400 text-yellow-900 border-none shadow-xl shadow-yellow-500/40 hover:bg-yellow-300 hover:scale-105 transition-transform text-lg py-5">
                  QUERO O KIT COMPLETO
                </Button>
                <div className="flex items-center justify-center gap-2 mt-4 text-green-100 text-sm font-medium">
                  <ShieldCheck className="w-4 h-4" /> Pagamento 100% Seguro
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>

      {/* 7. GARANTIA */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8 relative">
            <ShieldCheck className="w-12 h-12 text-green-500 relative z-10" />
            {/* Ping animation */}
            <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-20"></div>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Risco Zero: 7 dias de Garantia Total</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Se você não notar evolução na escrita do seu filho, ou simplesmente não gostar do material, nós devolvemos <strong>100% do seu dinheiro</strong>. Sem perguntas, de forma rápida e segura.
          </p>
          <div className="text-sm text-gray-400">Garantia assegurada por lei. Pagamento 100% seguro.</div>
        </div>
      </section>

      {/* 8. FAQ / RODAPÉ */}
      <footer className="bg-gray-100 py-12 border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h3 className="font-bold tracking-tight text-2xl mb-4">Ainda tem dúvidas?</h3>
          <p className="text-gray-600 mb-8">Nossa equipe de suporte está online para te ajudar agora mesmo.</p>
          
          <a href="#" className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-bold hover:bg-[#1ebd5a] transition-colors mb-16 shadow-lg shadow-[#25D366]/20">
            <MessageCircle className="w-6 h-6" />
            Falar no WhatsApp
          </a>
          
          <div className="text-gray-400 text-sm flex flex-col md:flex-row justify-center items-center gap-4">
            <span>&copy; {new Date().getFullYear()} Letra Bonita. Todos os direitos reservados.</span>
            <span className="hidden md:inline">•</span>
            <a href="#" className="hover:text-gray-600">Termos de Uso</a>
            <span className="hidden md:inline">•</span>
            <a href="#" className="hover:text-gray-600">Políticas de Privacidade</a>
          </div>
        </div>
      </footer>
      
    </div>
  );
}
