import { useEffect, useState, type ReactNode } from "react";
import {
  ArrowRight,
  BookOpen,
  Handshake,
  ShieldCheck,
  Sparkles,
  Phone,
  Shield,
  Ambulance,
  Flame,
  PhoneCall,
  Building,
  Users,
} from "lucide-react";
import heroImage from "@/assets/background.png";
import logoImage from "@/assets/logo.jpg";
import { FAQSearch } from "@/components/FAQSearch";

const StarParticles = () => {
  const [stars, setStars] = useState<{ id: number; left: number; duration: number; delay: number; size: number }[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 60 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      duration: 5 + Math.random() * 10,
      delay: Math.random() * 10,
      size: Math.random() * 3 + 1,
    }));
    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[5] overflow-hidden">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
            left: `${star.left}vw`,
            width: `${star.size}px`,
            height: `${star.size}px`,
            animationDuration: `${star.duration}s`,
            animationDelay: `${star.delay}s`,
          }}
        />
      ))}
    </div>
  );
};

const CursorTrail = () => {
  useEffect(() => {
    let lastParticleTime = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const now = Date.now();
      if (now - lastParticleTime < 30) return; // Limita a geração para boa performance (~33fps)
      lastParticleTime = now;

      const particle = document.createElement("div");
      particle.className = "cursor-particle";
      particle.style.left = `${e.clientX}px`;
      particle.style.top = `${e.clientY}px`;
      
      const size = Math.random() * 4 + 2;
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      
      // Cores da paleta visual já usada no projeto
      const colors = ["#00f2ff", "#39ff14", "#ffb703", "#f7186a"];
      const color = colors[Math.floor(Math.random() * colors.length)];
      particle.style.background = color;
      particle.style.boxShadow = `0 0 8px ${color}`;

      document.body.appendChild(particle);
      
      setTimeout(() => {
        particle.remove();
      }, 800);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return null;
};

const Index = () => {
  return (
    <div className="min-h-screen relative overflow-hidden text-white bg-[#17073b] selection:bg-[#00f2ff]/40 selection:text-black">
      <StarParticles />
      <CursorTrail />
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float-1 { animation: float 4s ease-in-out infinite; }
        .animate-float-2 { animation: float 4.5s ease-in-out infinite 0.5s; }
        .animate-float-3 { animation: float 3.5s ease-in-out infinite 1s; }
        
        .cloud-btn {
          position: relative;
          border-radius: 60px;
          z-index: 1;
        }
        .cloud-btn::before, .cloud-btn::after {
          content: '';
          position: absolute;
          background: inherit;
          border-radius: 50%;
          z-index: -1;
        }
        .cloud-btn::before { width: 45px; height: 45px; top: -18px; left: 15%; }
        .cloud-btn::after { width: 65px; height: 65px; top: -28px; right: 15%; }

        @keyframes fall {
          0% { transform: translateY(-10vh) translateX(0); opacity: 0; }
          10% { opacity: 0.8; }
          90% { opacity: 0.8; }
          100% { transform: translateY(110vh) translateX(20px); opacity: 0; }
        }
        .star {
          position: absolute;
          background: white;
          border-radius: 50%;
          opacity: 0;
          animation: fall linear infinite;
          box-shadow: 0 0 8px white;
        }
        .cursor-particle {
          position: fixed;
          pointer-events: none;
          border-radius: 50%;
          transform: translate(-50%, -50%);
          animation: fadeOut 0.8s ease-out forwards;
          z-index: 9999;
        }
        @keyframes fadeOut {
          0% { opacity: 0.8; transform: translate(-50%, -50%) scale(1); }
          100% { opacity: 0; transform: translate(-50%, -150%) scale(0.2); }
        }
      `}</style>
      
      <div className="relative">
        <header className="absolute top-0 w-full z-30 bg-transparent text-white pt-6 pb-4">
          <div className="container mx-auto px-5 flex items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img
                src={logoImage}
                alt="Conselho Tutelar"
                className="h-10 w-10 rounded-full object-cover ring-2 ring-white/20"
              />
              <div>
                <p className="text-base font-black uppercase tracking-widest text-white drop-shadow-sm">Conselho Tutelar</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-white/80">
              <a href="#home" className="transition hover:text-[#00f2ff] text-[#39ff14]">
                Início
              </a>
              <a href="#jardim" className="transition hover:text-[#00f2ff]">
                Sobre o ECA
              </a>
              <a href="#faq" className="transition hover:text-[#00f2ff]">
                Dúvidas Frequentes
              </a>
            <a href="#direitos" className="transition hover:text-[#00f2ff]">
                Como Denunciar
              </a>
            </nav>
          </div>
        </header>

        <main className="relative overflow-hidden">
          <section id="home" className="relative min-h-[90vh] bg-gradient-to-br from-[#f7186a] via-[#ff6a00] to-[#ffb703] pt-40 pb-32 flex flex-col justify-center overflow-hidden">
            <div className="container relative z-10 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div className="space-y-8">
                <h1 className="text-[clamp(3rem,6vw,4.5rem)] font-black leading-[1.1] text-white drop-shadow-[2px_4px_10px_rgba(0,0,0,0.2)]">
                  Conselho Tutelar
                </h1>
                <p className="text-lg font-medium text-white/90 max-w-xl">
                  Garantindo a proteção, o acolhimento e os direitos de cada criança e adolescente em nossa comunidade.
                </p>
                
                <div className="flex flex-wrap gap-6 mt-12 pt-4 pl-2 relative z-10">
                  <div className="animate-float-1">
                    <a href="#jardim" className="cloud-btn bg-[#00f2ff] px-8 py-3 text-sm font-black uppercase tracking-wider text-black drop-shadow-[0_0_15px_rgba(0,242,255,0.6)] hover:drop-shadow-[0_0_25px_rgba(0,242,255,1)] transition-all duration-300 hover:scale-105 flex items-center gap-2">
                      <ShieldCheck className="h-5 w-5" /> Proteção
                    </a>
                  </div>
              <div className="animate-float-2">
                    <a href="#faq" className="cloud-btn bg-[#ffb703] px-8 py-3 text-sm font-black uppercase tracking-wider text-black drop-shadow-[0_0_15px_rgba(255,183,3,0.6)] hover:drop-shadow-[0_0_25px_rgba(255,183,3,1)] transition-all duration-300 hover:scale-105 flex items-center gap-2">
                      <BookOpen className="h-5 w-5" /> Dúvidas
                    </a>
                  </div>
                </div>
              </div>

              <div className="relative flex justify-center pointer-events-none">
                <div className="relative w-full max-w-[700px] lg:max-w-[1000px] flex justify-center items-center scale-150">
                  <img
                    src={heroImage}
                    alt="Imagem representando crianças e adolescentes"
                    className="w-full h-auto max-h-[900px] rounded-[20px] object-contain drop-shadow-2xl animate-float-1"
                  />
                </div>
              </div>
            </div>

            <div className="absolute bottom-[-2px] left-0 w-full leading-none z-20" aria-hidden="true">
              <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[80px] sm:h-[120px]">
                <path fill="#17073b" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
              </svg>
            </div>
          </section>

          <section id="jardim" className="bg-[#17073b] px-5 pt-24 pb-20 relative">
            <div className="container relative z-10 mx-auto max-w-6xl">
              <div className="text-center mb-16">
                <h2 className="text-[clamp(2rem,4vw,3rem)] font-black text-[#fff078] drop-shadow-sm mb-4">
                  Um lugar onde proteção e afeto se encontram
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-white/80">
                  Explore nossos conteúdos, conheça seus direitos e saiba como acionar o Conselho Tutelar de maneira segura e confidencial.
                </p>
              </div>

              <div className="mt-16 grid gap-6 lg:grid-cols-3">
                <FeatureCard
                  theme="cyan"
                  icon={<BookOpen className="h-10 w-10" />}
                  title="Direitos garantidos"
                  description="Conheça os direitos previstos pelo ECA e entenda como eles protegem toda criança e adolescente."
                />
                <FeatureCard
                  theme="green"
                  icon={<ShieldCheck className="h-10 w-10" />}
                  title="Apoio imediato"
                  description="Saiba onde buscar ajuda, atendimento e acolhimento quando houver risco ou violação de direitos."
                />
                <FeatureCard
                  theme="yellow"
                  icon={<Sparkles className="h-10 w-10" />}
                  title="Ações comunitárias"
                  description="Envolva-se em ações de prevenção e apoio que fortalecem famílias e comunidades."
                />
              </div>

              <div className="mt-12 flex justify-center relative z-10 animate-fade-in">
                <a
                  href="https://eca.art.br/blog/eca-digital-entra-em-vigor-o-que-muda-para-criancas-e-adolescentes-na-internet/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#00f2ff] shadow-[0_5px_15px_rgba(0,242,255,0.4)] px-8 py-4 text-base font-bold text-black transition-all hover:scale-105 hover:bg-[#00d0ff]"
                >
                  <Sparkles className="w-5 h-5" />
                  Saiba tudo sobre o novo ECA Digital
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </section>

          <section id="faq" className="bg-gradient-to-br from-[#ff6a00] via-[#f7186a] to-[#2a0b5c] px-5 py-32 relative overflow-hidden">
            <div className="absolute top-[0px] left-0 w-full leading-none z-20 rotate-180" aria-hidden="true">
              <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] sm:h-[100px]">
                <path fill="#17073b" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
              </svg>
            </div>
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#ffb703] opacity-10 blur-[100px]"></div>
              <div className="absolute top-1/2 -right-40 h-96 w-96 -translate-y-1/2 rounded-full bg-[#17073b] opacity-40 blur-[100px]"></div>
            </div>
            <div className="container relative z-10 mx-auto max-w-4xl text-center">
              <FAQSearch />
            </div>
            <div className="absolute bottom-[-2px] left-0 w-full leading-none z-20" aria-hidden="true">
              <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] sm:h-[100px]">
                <path fill="#2a0b5c" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
              </svg>
            </div>
          </section>

          <section id="direitos" className="bg-[#2a0b5c] px-5 pt-24 pb-32 text-center relative z-10 overflow-hidden">
            <div className="container relative z-10 mx-auto max-w-5xl">
              <div className="mb-16">
                <h2 className="mb-4 text-[clamp(2rem,4vw,3rem)] font-black text-white drop-shadow-[1px_2px_5px_rgba(0,0,0,0.2)]">
                  Como denunciar...
                </h2>
                <p className="mx-auto max-w-2xl text-lg text-white/90">
                  Em caso de violação de direitos, esses são os principais canais de atendimento para garantir proteção imediata.
                </p>
              </div>

              <div className="mt-14 grid gap-6 md:grid-cols-3">
                <ReportCard
                  icon={<Shield className="h-8 w-8" />}
                  title="Polícia Militar"
                  description="Ligue 190 para emergências, flagrantes e situações de risco imediato."
                />
                <ReportCard
                  icon={<Ambulance className="h-8 w-8" />}
                  title="SAMU"
                  description="Disque 192 para emergências médicas que envolvam crianças e adolescentes."
                />
                <ReportCard
                  icon={<Flame className="h-8 w-8" />}
                  title="Bombeiros"
                  description="Disque 193 em situações de incêndio, acidentes ou resgates urgentes."
                />
                <ReportCard
                  icon={<PhoneCall className="h-8 w-8" />}
                  title="Disque 100"
                  description="Canal nacional de denúncias de violações de direitos humanos. O serviço é sigiloso, gratuito e funciona 24h por dia."
                />
                <ReportCard
                  icon={<Building className="h-8 w-8" />}
                  title="CREAS"
                  description="Procure a unidade da sua cidade para apoio e acompanhamento especializado em casos onde os direitos já foram violados."
                />
                <ReportCard
                  icon={<Users className="h-8 w-8" />}
                  title="CRAS"
                  description="Busque a unidade da sua cidade para orientação, apoio preventivo e fortalecimento de vínculos familiares."
                />
              </div>
            </div>
            <div className="absolute bottom-[-2px] left-0 w-full leading-none z-20" aria-hidden="true">
              <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-[60px] sm:h-[100px]">
                <path fill="#17073b" d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
              </svg>
            </div>
          </section>
        </main>

        <footer className="border-t border-white/10 bg-[#17073b] py-12">
          <div className="container mx-auto px-5 flex flex-col gap-4 text-center text-white/70 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center justify-center gap-3">
              <img src={logoImage} alt="Logo Conselho Tutelar" className="h-10 w-10 rounded-full object-cover ring-1 ring-white/10" />
              <span className="text-base font-semibold text-white">Conselho Tutelar</span>
            </div>
            <p className="text-sm">© {new Date().getFullYear()} Todos os direitos reservados.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

const FeatureCard = ({ icon, title, description, theme }: { icon: ReactNode; title: string; description: string; theme: 'cyan' | 'green' | 'yellow' }) => {
  const themes = {
    cyan: "border-t-[#00f2ff] shadow-[0_0_15px_rgba(0,242,255,0.15)] text-[#00f2ff]",
    green: "border-t-[#39ff14] shadow-[0_0_15px_rgba(57,255,20,0.15)] text-[#39ff14]",
    yellow: "border-t-[#fff078] shadow-[0_0_15px_rgba(255,240,120,0.15)] text-[#fff078]",
  };
  
  return (
    <div className={`group rounded-[20px] bg-white/5 p-8 text-left border border-white/10 border-t-4 transition-all duration-300 hover:-translate-y-2 hover:bg-white/10 ${themes[theme]}`}>
      <div className="mb-6 inline-block">
        {icon}
      </div>
      <h3 className="mb-4 text-2xl font-bold text-white">{title}</h3>
      <p className="text-white/80 leading-7 text-base">{description}</p>
    </div>
  );
};

const ReportCard = ({ icon, title, description }: { icon: ReactNode; title: string; description: string }) => (
  <div className="group rounded-[20px] border border-white/30 bg-white/15 backdrop-blur-md p-8 text-center shadow-xl transition-all duration-300 hover:-translate-y-2 hover:bg-white/25">
    <div className="mx-auto mb-6 flex h-[70px] w-[70px] items-center justify-center rounded-full border-2 border-white/50 bg-white/20 text-white">
      {icon}
    </div>
    <h3 className="mb-4 text-xl font-bold text-white drop-shadow-sm">{title}</h3>
    <p className="text-white/90 leading-7">{description}</p>
  </div>
);

export default Index;