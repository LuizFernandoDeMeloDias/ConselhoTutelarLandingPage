import { Users, BookOpen, Phone, Scale, Heart, AlertTriangle, HandHeart } from "lucide-react";
import backgroundImage from "@/assets/hero-image.jpg"; // use o hero-image existente ou substitua por background.png/jpg
import logoImage from "@/assets/hero-image.jpg";       // substitua por logo.png quando estiver disponível
import { FAQSearch } from "@/components/ui/FAQSearch.tsx";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/80">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <img src={logoImage} alt="Conselho Tutelar" className="h-12 w-12 object-contain" />
            <span className="font-heading text-lg font-bold text-foreground">Conselho Tutelar</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-muted-foreground">
            <a href="#sobre" className="hover:text-primary transition-colors">Sobre</a>
            <a href="#eca" className="hover:text-primary transition-colors">ECA</a>
            <a href="#objetivos" className="hover:text-primary transition-colors">Objetivos</a>
            <a href="#direitos" className="hover:text-primary transition-colors">Direitos</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
            <a href="#contato" className="hover:text-primary transition-colors">Contato</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 opacity-20">
          <img src={backgroundImage} alt="" className="h-full w-full object-cover" />
        </div>
        <div className="relative container py-24 md:py-36 text-center">
          {/* subtitle removed as requested */}
          {/* <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-secondary opacity-90 animate-fade-in">
            Projeto de Extensão — UNIASSELVI
          </p> */}
          <h1 className="mx-auto max-w-3xl text-3xl md:text-5xl font-heading font-bold leading-tight animate-fade-in-up">
            Protegendo os Direitos de Crianças e Adolescentes
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg opacity-90 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            Uma solução colaborativa para divulgação e conscientização sobre o Conselho Tutelar 
            e o Estatuto da Criança e do Adolescente (ECA).
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <a href="#contato" className="inline-flex items-center justify-center rounded-lg bg-secondary px-8 py-3 font-semibold text-secondary-foreground hover:opacity-90 transition-opacity">
              Saiba Mais
            </a>
            <a href="#direitos" className="inline-flex items-center justify-center rounded-lg border-2 border-primary-foreground/30 px-8 py-3 font-semibold text-primary-foreground hover:bg-primary-foreground/10 transition-colors">
              Denuncie
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="sobre" className="py-20 md:py-28 scroll-mt-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground">
              O que é o Conselho Tutelar?
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              O Conselho Tutelar é uma instituição essencial criada pelo ECA em 1990 para zelar pelos 
              direitos da criança e do adolescente. Sua atuação é autônoma e independente, permitindo 
              intervenção imparcial em situações de violação de direitos.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <FeatureCard
              icon={<Users className="h-8 w-8" />}
              title="Composição"
              description="Cada município deve ter pelo menos um conselho tutelar, composto por membros eleitos pela comunidade."
            />
            <FeatureCard
              icon={<Scale className="h-8 w-8" />}
              title="Atuação"
              description="Recepção e encaminhamento de denúncias de abuso, exploração e negligência, além de aplicação de medidas de proteção."
            />
            <FeatureCard
              icon={<Heart className="h-8 w-8" />}
              title="Importância"
              description="Papel crucial na prevenção e combate à exploração infantil e na promoção de políticas públicas de bem-estar."
            />
          </div>
        </div>
      </section>

      {/* ECA */}
      <section id="eca" className="section-alt py-20 md:py-28 scroll-mt-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground">
              Estatuto da Criança e do Adolescente
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              O ECA é a legislação brasileira que assegura os direitos fundamentais de crianças e adolescentes, 
              baseada nos princípios da proteção integral e da prioridade absoluta.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <EcaCard
              title="Direito à Vida e Saúde"
              description="Toda criança e adolescente tem direito à vida, à saúde e ao desenvolvimento em condições dignas de existência."
            />
            <EcaCard
              title="Direito à Educação"
              description="Acesso à educação de qualidade, incluindo ensino fundamental obrigatório e gratuito."
            />
            <EcaCard
              title="Direito à Dignidade"
              description="Proteção contra qualquer forma de tratamento desumano, violento, aterrorizante ou constrangedor."
            />
            <EcaCard
              title="Direito à Convivência Familiar"
              description="Toda criança tem direito a ser criada e educada no seio de sua família ou família substituta."
            />
          </div>
        </div>
      </section>

      {/* Objectives */}
      <section id="objetivos" className="py-20 md:py-28 scroll-mt-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground">
              Objetivos do Projeto
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
              Vinculado ao ODS 16 — Paz, justiça e instituições eficazes — nosso projeto busca 
              promover o acesso à informação e à proteção dos direitos da infância.
            </p>
          </div>
          <div className="mt-16 grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            <ObjectiveCard
              number="01"
              title="Conscientização"
              description="Promover a conscientização da comunidade sobre os direitos da infância e adolescência com ações educativas e preventivas."
            />
            <ObjectiveCard
              number="02"
              title="Prevenção"
              description="Prevenir e combater a exploração sexual, trabalho infantil, negligência, violência e quaisquer formas de abuso."
            />
            <ObjectiveCard
              number="03"
              title="Responsabilidade"
              description="Definir responsabilidades das famílias, do Estado e da sociedade na proteção e desenvolvimento das crianças."
            />
          </div>
        </div>
      </section>

      {/* Rights / How to report */}
      <section id="direitos" className="bg-primary text-primary-foreground py-20 md:py-28 scroll-mt-20">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-2xl md:text-4xl font-heading font-bold">
              Como Denunciar?
            </h2>
            <p className="mt-6 text-lg opacity-85 leading-relaxed">
              Se você souber de qualquer situação de violação dos direitos de crianças ou adolescentes, 
              é fundamental denunciar. Veja os canais disponíveis:
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            <ReportCard
              icon={<Phone className="h-7 w-7" />}
              title="Disque 100"
              description="Canal de denúncia gratuito, funciona 24 horas, todos os dias da semana."
            />
            <ReportCard
              icon={<AlertTriangle className="h-7 w-7" />}
              title="Conselho Tutelar"
              description="Procure o Conselho Tutelar mais próximo do seu município para relatar a situação."
            />
            <ReportCard
              icon={<HandHeart className="h-7 w-7" />}
              title="CRAS / CREAS"
              description="Centros de Referência de Assistência Social oferecem apoio e encaminhamento."
            />
          </div>
        </div>
      </section>

      {/* FAQ Search */}
      <section id="faq" className="section-alt py-20 md:py-28 scroll-mt-20">
        <div className="container">
          <FAQSearch />
        </div>
      </section>

      {/* Contact / Info */}
      <section id="contato" className="py-20 md:py-28 scroll-mt-20">
        <div className="container max-w-3xl mx-auto text-center">
          <BookOpen className="mx-auto h-12 w-12 text-primary mb-6" />
          <h2 className="text-2xl md:text-4xl font-heading font-bold text-foreground">
            Saiba Mais
          </h2>
          <p className="mt-6 text-lg text-muted-foreground leading-relaxed">
            Este projeto é uma atividade de extensão do curso de Análise e Desenvolvimento de Sistemas 
            da UNIASSELVI. Para mais informações sobre o ECA, acesse os links abaixo.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="http://www.planalto.gov.br/ccivil_03/leis/L8069compilado.htm"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
            >
              Portal do ECA
            </a>
            <a
              href="https://www.gov.br/mdh/pt-br/navegue-por-temas/crianca-e-adolescente"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border-2 border-primary px-8 py-3 font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              Ministério dos Direitos Humanos
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-10">
        <div className="container text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <img src={logoImage} alt="Logo Conselho Tutelar" className="h-10 w-10 object-contain" />
            <span className="font-heading text-sm font-bold text-foreground">Conselho Tutelar — Projeto de Extensão</span>
          </div>
          <p className="text-sm text-muted-foreground">
            UNIASSELVI — Análise e Desenvolvimento de Sistemas — ODS 16
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

/* Sub-components */

const FeatureCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="rounded-xl border border-border bg-card p-8 text-center shadow-sm hover:shadow-md transition-shadow">
    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
      {icon}
    </div>
    <h3 className="mt-5 font-heading text-lg font-bold text-foreground">{title}</h3>
    <p className="mt-3 text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

const EcaCard = ({ title, description }: { title: string; description: string }) => (
  <div className="rounded-xl border border-border bg-card p-6 hover:border-primary/30 transition-colors">
    <h3 className="font-heading text-base font-bold text-foreground">{title}</h3>
    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

const ObjectiveCard = ({ number, title, description }: { number: string; title: string; description: string }) => (
  <div className="text-center">
    <span className="text-5xl font-heading font-bold text-secondary/60">{number}</span>
    <h3 className="mt-3 font-heading text-lg font-bold text-foreground">{title}</h3>
    <p className="mt-3 text-muted-foreground leading-relaxed">{description}</p>
  </div>
);

const ReportCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="rounded-xl border border-primary-foreground/20 bg-primary-foreground/10 p-6 text-center">
    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground/20">
      {icon}
    </div>
    <h3 className="mt-4 font-heading text-base font-bold">{title}</h3>
    <p className="mt-2 text-sm opacity-85 leading-relaxed">{description}</p>
  </div>
);

export default Index;
