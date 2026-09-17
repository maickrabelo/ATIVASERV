import { motion } from "motion/react";
import { Calendar } from "lucide-react";

const TIMELINE_DATA = [
  {
    year: "2001",
    title: "A Fundação",
    description: "A Ativa Serviços é fundada na cidade de Uberaba-MG como um grupo de controle familiar, nascendo com o objetivo claro de entregar excelência em serviços.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    year: "2010",
    title: "Expansão de Serviços e Soluções",
    description: "Aumento do escopo de atuação, consolidando a Portaria 24h e a Limpeza e Conservação como carros-chefe, investindo fortemente em treinamento de pessoal.",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    year: "2016",
    title: "Novos Horizontes: Agronegócio e Saúde",
    description: "Ampliação marcante para novos segmentos essenciais como Agronegócio, Logística e Higienização Hospitalar, estabelecendo padrões ainda mais rigorosos de qualidade.",
    image: "https://images.unsplash.com/photo-1502741224143-9038cb178632?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  },
  {
    year: "2024",
    title: "23 Anos de Excelência",
    description: "Uma estrutura robusta que abraça mais de 10 segmentos diferentes, de condomínios ao varejo, com milhares de colaboradores focados na melhoria contínua e satisfação dos parceiros.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
  }
];

export function Timeline() {
  return (
    <section id="historia" className="py-24 bg-brand-900 border-t border-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-brand-green font-semibold tracking-wider uppercase text-sm mb-3">Nossa Jornada</h2>
          <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">A Evolução da Ativa Serv</h3>
          <p className="text-slate-400 text-lg">
            Mais de duas décadas transformando a prestação de serviços e entregando tranquilidade para nossos clientes através de parcerias sólidas e transparentes.
          </p>
        </div>

        <div className="relative">
          {/* Central Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-brand-accent/0 via-brand-green/30 to-brand-accent/0" />

          <div className="space-y-24">
            {TIMELINE_DATA.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={item.year} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot (desktop only) */}
                  <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-brand-900 border-4 border-brand-green/80 items-center justify-center z-10 shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                    <Calendar className="w-5 h-5 text-brand-green" />
                  </div>

                  {/* Content (Text) */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16'} mb-8 md:mb-0`}>
                    <motion.div 
                      initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="bg-brand-800/40 p-8 rounded-2xl border border-brand-700/50 hover:border-brand-accent/50 transition-colors"
                    >
                      <div className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-green font-heading font-bold text-4xl mb-4">{item.year}</div>
                      <h4 className="text-2xl font-heading font-semibold text-white mb-4">{item.title}</h4>
                      <p className="text-slate-400 leading-relaxed text-lg">
                        {item.description}
                      </p>
                    </motion.div>
                  </div>

                  {/* Content (Image) */}
                  <div className={`w-full md:w-1/2 ${isEven ? 'md:pr-16' : 'md:pl-16'}`}>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true, margin: "-100px" }}
                      transition={{ duration: 0.6 }}
                      className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl border border-brand-700/50"
                    >
                      <div className="absolute inset-0 bg-brand-900/20 z-10 transition-opacity hover:opacity-0" />
                      <img 
                        src={item.image} 
                        alt={`Época ${item.year}`} 
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                    </motion.div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
