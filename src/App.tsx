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
  Star
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
            <div className="relative rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center bg-gray-100 min-h-[300px]">
              {/* Placeholder for Mockup Image */}
              <div className="absolute inset-0 bg-gradient-to-tr from-pink-400/20 to-blue-400/20"></div>
              <p className="text-gray-400 font-medium z-10 text-center px-6">
                [Mockup de Criança Escrevendo / Cadernos de Atividades]
              </p>
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
      <section id="oferta" className="py-20 bg-gray-900 text-white relative">
        {/* Decorative background shape */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-10">
          <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-pink-500 blur-[100px]"></div>
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-green-500 blur-[100px]"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Escolha o melhor plano para seu filho</h2>
            
            <div className="inline-flex flex-col items-center justify-center bg-red-500/20 text-red-100 border border-red-500/30 px-6 py-3 rounded-2xl mb-4">
              <span className="text-md font-semibold mb-1 uppercase tracking-wider text-red-200">Oferta por tempo limitado!</span>
              <div className="font-mono text-2xl font-bold">
                {String(timeLeft.hours).padStart(2, '0')}:
                {String(timeLeft.minutes).padStart(2, '0')}:
                {String(timeLeft.seconds).padStart(2, '0')}
              </div>
              <span className="text-xs text-red-300 mt-1">Garanta antes que o valor aumente</span>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-center">
            
            {/* PLANO BÁSICO */}
            <div className="bg-gray-800 rounded-3xl p-8 border border-gray-700 shadow-xl">
              <div className="inline-block px-4 py-1 bg-gray-700 text-gray-300 rounded-full text-sm font-semibold mb-6">
                PLANO BÁSICO
              </div>
              <div className="mb-2">
                <span className="text-gray-400 line-through text-lg">de R$ 29,90</span>
              </div>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-2xl font-bold text-gray-400">R$</span>
                <span className="text-5xl font-bold">9,90</span>
              </div>
              
              <p className="text-gray-400 mb-8 border-b border-gray-700 pb-8">
                Ideal para começar e ver os primeiros resultados.
              </p>
              
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 mt-0.5" />
                  <span className="text-gray-300">Caderno de Caligrafia Cursiva</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 mt-0.5" />
                  <span className="text-gray-300">Acesso imediato via WhatsApp</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-gray-400 mt-0.5" />
                  <span className="text-gray-300">Uso ilimitado</span>
                </li>
              </ul>
              
              <Button href="#" primary={false} className="w-full bg-white text-gray-900 hover:bg-gray-100 shadow-none border border-transparent">
                COMEÇAR AGORA
              </Button>
              <p className="text-center text-sm text-gray-500 mt-4">Perfeito para quem quer melhorar a escrita rapidamente.</p>
            </div>

            {/* PLANO PREMIUM */}
            <div className="bg-gradient-to-b from-green-500 to-green-600 rounded-3xl p-8 shadow-2xl shadow-green-500/20 transform md:-translate-y-4 relative border border-green-400">
              <div className="absolute top-0 right-8 transform -translate-y-1/2">
                <span className="bg-yellow-400 text-yellow-900 font-bold px-4 py-1 rounded-full text-sm shadow-md flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-900" /> MAIS VENDIDO
                </span>
              </div>
              
              <div className="inline-block px-4 py-1 bg-green-400/30 text-white rounded-full text-sm font-semibold mb-6 border border-green-400/50">
                PLANO PREMIUM
              </div>
              
              <div className="mb-2">
                <span className="text-green-200 line-through text-lg">de R$ 49,90</span>
              </div>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-2xl font-bold text-green-100">R$</span>
                <span className="text-6xl font-black text-white">19,90</span>
              </div>
              
              <p className="text-green-100 mb-6 border-b border-green-400/50 pb-6 font-medium">
                A experiência completa. Tudo que seu filho precisa.
              </p>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-bold text-white mb-3">Conteúdo Padrão:</h4>
                  <ul className="space-y-3">
                    {["Caderno do Alfabeto", "Caderno de Caligrafia Cursiva", "Caderno de Sílabas", "Produção de Texto", "Produção de Frases", "Coordenação Motora"].map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-200 mt-0.5" />
                        <span className="text-green-50 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-green-700/30 p-4 rounded-xl border border-green-400/30">
                  <h4 className="font-bold text-yellow-400 mb-3 flex items-center gap-2">
                    🎁 Bônus Exclusivos
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-green-50 text-sm">Suporte via WhatsApp</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-green-50 text-sm">Acesso vitalício</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Star className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                      <span className="text-green-50 text-sm">Atualizações gratuitas</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <Button href="#" primary={false} className="w-full bg-yellow-400 text-yellow-900 border-none shadow-xl shadow-yellow-500/30 hover:bg-yellow-300">
                QUERO O COMPLETO
              </Button>
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
