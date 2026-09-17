import { motion } from "motion/react";
import { Heart, BookOpen, Users, Sun, TrendingUp, Building2, Equal, Globe, AlertCircle } from "lucide-react";

const ODS_DATA = [
  {
    id: 3,
    title: "Saúde e Bem-Estar",
    color: "#4C9F38", // ODS 3 Green
    icon: Heart,
    desc: "Priorizamos a qualidade de vida da nossa equipe ao garantir acesso facilitado a serviços de saúde e bem-estar por meio do nosso programa de benefícios, o Ativa Club."
  },
  {
    id: 4,
    title: "Educação de Qualidade",
    color: "#C5192D", // ODS 4 Dark Red
    icon: BookOpen,
    desc: "Fomentamos o desenvolvimento contínuo dos nossos profissionais ao oferecer oportunidades de aprendizado e acesso à educação qualificada através do Ativa Club."
  },
  {
    id: 5,
    title: "Igualdade de Gênero",
    color: "#FF3A21", // ODS 5 Red-Orange
    icon: Users,
    desc: "Valorizamos a força feminina no mercado de trabalho, garantindo oportunidades, liderança e forte representatividade de mulheres em nosso quadro de colaboradores."
  },
  {
    id: 7,
    title: "Energia Limpa e Acessível",
    color: "#FCC30B", // ODS 7 Yellow
    icon: Sun,
    desc: "Incentivamos a sustentabilidade além do ambiente de trabalho, disponibilizando convênios pelo Ativa Club para que nossos colaboradores utilizem energia limpa em suas residências."
  },
  {
    id: 8,
    title: "Trabalho Decente e Crescimento Econômico",
    color: "#A21942", // ODS 8 Burgundy
    icon: TrendingUp,
    desc: "Impulsionamos a economia real por meio da geração de postos de trabalho formais, seguros e pautados na dignidade e no desenvolvimento profissional."
  },
  {
    id: 9,
    title: "Indústria, Inovação e Infraestrutura",
    color: "#FD6925", // ODS 9 Orange
    icon: Building2,
    desc: "Modernizamos a infraestrutura das empresas parceiras ao entregar serviços otimizados, processos ágeis e inteligência operacional que elevam a eficiência empresarial."
  },
  {
    id: 10,
    title: "Redução das Desigualdades",
    color: "#DD1367", // ODS 10 Magenta
    icon: Equal,
    desc: "Promovemos a inclusão social e a distribuição de renda ao atuar como uma porta aberta e democrática para oportunidades e recolocação no mercado de trabalho."
  },
  {
    id: 17,
    title: "Parcerias e Meios de Implementação",
    color: "#19486A", // ODS 17 Dark Blue
    icon: Globe,
    desc: "Atuamos como parceiros estratégicos essenciais para o crescimento sustentável de outras empresas, conectando soluções e fortalecendo redes de negócios em diversos setores."
  }
];

export function Sustentabilidade() {
  return (
    <div>
      <div className="relative py-24 bg-brand-900 overflow-hidden border-b border-brand-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://static.wixstatic.com/media/b4fa1d_d0747f4c9a37420fa8db55c603b1ff04~mv2.jpg" 
            alt="Sustentabilidade Fundo" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Desenvolvimento Sustentável</h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Nossa sinergia com os Objetivos de Desenvolvimento Sustentável (ODS) da ONU. Acreditamos que a terceirização responsável e a valorização humana são motores para um futuro mais sustentável.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20">
          {ODS_DATA.map((ods, index) => (
            <motion.div
              key={ods.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-brand-800/40 rounded-2xl border border-brand-700/50 overflow-hidden flex flex-col sm:flex-row group"
            >
              <div 
                className="sm:w-48 shrink-0 flex flex-col items-center justify-center p-8 transition-transform group-hover:scale-105"
                style={{ backgroundColor: ods.color }}
              >
                <ods.icon className="w-16 h-16 text-white mb-4" />
                <div className="text-white text-center font-bold text-sm uppercase tracking-wide">
                  ODS {ods.id}
                </div>
              </div>
              <div className="p-8 flex-grow flex flex-col justify-center">
                <h3 className="text-xl font-heading font-bold text-white mb-4">
                  {ods.id}. {ods.title}
                </h3>
                <p className="text-slate-400 leading-relaxed">
                  {ods.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-brand-900 border border-brand-800 p-6 rounded-xl flex gap-4 items-start">
          <AlertCircle className="w-6 h-6 text-brand-green shrink-0 mt-1" />
          <p className="text-slate-400 text-sm leading-relaxed">
            <strong>Aviso:</strong> O uso de tais materiais visuais e conceituais não indica, sob qualquer hipótese, que a Organização das Nações Unidas (ONU) ou qualquer de suas agências endossa, patrocina, fiscaliza, aprova ou possui parceria formal com as atividades, produtos, serviços ou opiniões descritas neste website. Para mais informações sobre as diretrizes oficiais de uso das marcas dos ODS, consulte o site oficial da ONU ou das Nações Unidas Brasil.
          </p>
        </div>
      </div>
    </div>
  );
}
