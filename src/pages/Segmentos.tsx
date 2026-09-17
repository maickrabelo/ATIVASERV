import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Factory, ShoppingBag, Stethoscope, Building2, GraduationCap, Tent, Wheat, HardHat, PackageSearch, Briefcase } from "lucide-react";

const SEGMENTS = [
  {
    icon: Factory, img: "https://static.wixstatic.com/media/b4fa1d_632a676fac834a1aba7789db094d290c~mv2.jpg",
    title: "Indústria", desc: "Limpeza, portaria, vigia, recepção, jardinagem, zeladoria, limpeza e pintura industriais, locação e operação de máquinas (empilhadeiras), carregamento, transporte e combate a incêndio."
  },
  {
    icon: ShoppingBag, img: "https://static.wixstatic.com/media/b4fa1d_eece1b26f944464c8a63971a71124859~mv2.jpg",
    title: "Varejo", desc: "Serviços especializados em limpeza e conservação, recepção, jardinagem e zeladoria para garantir um ambiente impecável aos seus clientes."
  },
  {
    icon: Stethoscope, img: "https://static.wixstatic.com/media/b4fa1d_3262d62c3ede4eee888679aa3c8131ab~mv2.jpg",
    title: "Saúde", desc: "Limpeza, portaria, vigia, recepção, jardinagem, zeladoria, além de higienização hospitalar técnica e protocolos rigorosos de assepsia."
  },
  {
    icon: Building2, img: "https://static.wixstatic.com/media/b4fa1d_f2cf3c9bc7d44a06995da464fa68e7c0~mv2.jpg",
    title: "Condomínios e Edifícios", desc: "Limpeza e conservação, portaria 24h, vigia, recepção, jardinagem e zeladoria, promovendo segurança e bem-estar para os moradores."
  },
  {
    icon: GraduationCap, img: "https://static.wixstatic.com/media/b4fa1d_4452df3f62544329ba4310b4d84b7c7b~mv2.jpg",
    title: "Educação", desc: "Limpeza, portaria, vigia, recepção, jardinagem e zeladoria adaptadas para a dinâmica e necessidades de escolas e universidades."
  },
  {
    icon: Tent, img: "https://static.wixstatic.com/media/b4fa1d_0e506694bcb64f888689640d295d3f4a~mv2.jpg",
    title: "Clubes de Campo", desc: "Limpeza, portaria, vigia, recepção, jardinagem, zeladoria, limpeza industrial, locação de máquinas, operação de empilhadeiras e serviços de salva-vidas."
  },
  {
    icon: Wheat, img: "https://static.wixstatic.com/media/b4fa1d_a319a7387056430f9788f9d36a151246~mv2.jpg",
    title: "Agronegócio", desc: "Limpeza, portaria, vigia, recepção, jardinagem, zeladoria, limpeza industrial, locação e operação de máquinas, e combate a incêndio."
  },
  {
    icon: HardHat, img: "https://static.wixstatic.com/media/b4fa1d_3d2e2c92572d4752b4d618950b2ff7b0~mv2.jpg",
    title: "Construção Civil", desc: "Limpeza, portaria, vigia, recepção, jardinagem, zeladoria, limpeza industrial e suporte estrutural com locação e operação de máquinas."
  },
  {
    icon: PackageSearch, img: "https://static.wixstatic.com/media/b4fa1d_4764f5e0e98944749d059667a9d1d852~mv2.jpg",
    title: "Logística e Distribuição", desc: "Limpeza, portaria, vigia, recepção, jardinagem, zeladoria, limpeza e pintura industriais, locação de máquinas, operação de empilhadeiras, carregamento e transporte."
  },
  {
    icon: Briefcase, img: "https://static.wixstatic.com/media/b4fa1d_1f6de0faaf144a28be046c32857e7ad8~mv2.jpg",
    title: "Serviços e Escritórios", desc: "Ambientes corporativos atendidos com excelência em limpeza e conservação, serviços de portaria e recepção profissional."
  }
];

export function Segmentos() {
  return (
    <div>
      <div className="relative py-24 bg-brand-900 overflow-hidden border-b border-brand-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://static.wixstatic.com/media/b4fa1d_d0747f4c9a37420fa8db55c603b1ff04~mv2.jpg" 
            alt="Segmentos Fundo" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Segmentos de Atuação</h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Oferecemos soluções adaptadas às particularidades e desafios de cada setor de atividade, com equipes treinadas e gestão focada em resultados.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SEGMENTS.map((segment, index) => (
            <motion.div
              key={segment.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-brand-800/40 rounded-2xl border border-brand-700/50 flex flex-col md:flex-row overflow-hidden group hover:border-brand-accent/50 transition-colors"
            >
              <div className="md:w-2/5 h-48 md:h-auto relative overflow-hidden shrink-0">
                <img src={segment.img} alt={segment.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-brand-900 via-brand-900/40 to-transparent" />
                <div className="absolute bottom-4 left-4 w-10 h-10 bg-brand-accent rounded-lg flex items-center justify-center shadow-lg">
                  <segment.icon className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-heading font-bold text-white mb-3">{segment.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow">{segment.desc}</p>
                <div className="mt-auto">
                  <Link to="/orcamento" className="inline-block text-sm bg-brand-700 hover:bg-brand-600 text-white py-2 px-4 rounded font-medium transition-colors border border-brand-600">
                    Solicitar Orçamento
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
