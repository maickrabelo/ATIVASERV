import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Factory, ShoppingBag, Stethoscope, Building2, GraduationCap, Tent, Wheat, HardHat, PackageSearch, Briefcase } from "lucide-react";

const SEGMENTS = [
  {
    icon: Factory,
    title: "Indústria",
    desc: "Limpeza, portaria, vigia, recepção, jardinagem, zeladoria, limpeza e pintura industriais, locação e operação de máquinas (empilhadeiras), carregamento, transporte e combate a incêndio."
  },
  {
    icon: ShoppingBag,
    title: "Varejo",
    desc: "Serviços especializados em limpeza e conservação, recepção, jardinagem e zeladoria para garantir um ambiente impecável aos seus clientes."
  },
  {
    icon: Stethoscope,
    title: "Saúde",
    desc: "Limpeza, portaria, vigia, recepção, jardinagem, zeladoria, além de higienização hospitalar técnica e protocolos rigorosos de assepsia."
  },
  {
    icon: Building2,
    title: "Condomínios e Edifícios",
    desc: "Limpeza e conservação, portaria 24h, vigia, recepção, jardinagem e zeladoria, promovendo segurança e bem-estar para os moradores."
  },
  {
    icon: GraduationCap,
    title: "Educação",
    desc: "Limpeza, portaria, vigia, recepção, jardinagem e zeladoria adaptadas para a dinâmica e necessidades de escolas e universidades."
  },
  {
    icon: Tent,
    title: "Clubes de Campo",
    desc: "Limpeza, portaria, vigia, recepção, jardinagem, zeladoria, limpeza industrial, locação de máquinas, operação de empilhadeiras e serviços de salva-vidas."
  },
  {
    icon: Wheat,
    title: "Agronegócio",
    desc: "Limpeza, portaria, vigia, recepção, jardinagem, zeladoria, limpeza industrial, locação e operação de máquinas, e combate a incêndio."
  },
  {
    icon: HardHat,
    title: "Construção Civil",
    desc: "Limpeza, portaria, vigia, recepção, jardinagem, zeladoria, limpeza industrial e suporte estrutural com locação e operação de máquinas."
  },
  {
    icon: PackageSearch,
    title: "Logística e Distribuição",
    desc: "Limpeza, portaria, vigia, recepção, jardinagem, zeladoria, limpeza e pintura industriais, locação de máquinas, operação de empilhadeiras, carregamento e transporte."
  },
  {
    icon: Briefcase,
    title: "Serviços e Escritórios",
    desc: "Ambientes corporativos atendidos com excelência em limpeza e conservação, serviços de portaria e recepção profissional."
  }
];

export function Segmentos() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Segmentos de Atuação</h1>
        <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Oferecemos soluções adaptadas às particularidades e desafios de cada setor de atividade, com equipes treinadas e gestão focada em resultados.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SEGMENTS.map((segment, index) => (
          <motion.div
            key={segment.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-brand-800/40 p-6 rounded-2xl border border-brand-700/50 flex flex-col md:flex-row gap-6 items-start"
          >
            <div className="w-14 h-14 shrink-0 bg-brand-900 rounded-lg flex items-center justify-center border border-brand-700">
              <segment.icon className="w-7 h-7 text-brand-green" />
            </div>
            <div className="flex-grow">
              <h3 className="text-xl font-heading font-bold text-white mb-3">{segment.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">{segment.desc}</p>
              <Link to="/orcamento" className="inline-block text-sm bg-brand-700 hover:bg-brand-600 text-white py-2 px-4 rounded font-medium transition-colors border border-brand-600">
                Solicitar Orçamento
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
