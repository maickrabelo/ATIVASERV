import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Sparkles, Key, Leaf, HeartPulse, Building, Droplets, Truck, Wrench, Shield, Briefcase } from "lucide-react";

const SOLUTIONS = [
  { id: "limpeza", icon: Sparkles, title: "Limpeza e Conservação", desc: "Organização e higienização de ambientes com equipes preparadas e processos definidos para garantir o bem-estar.", link: "/limpeza" },
  { id: "higienizacao", icon: HeartPulse, title: "Higienização Hospitalar", desc: "Procedimentos especializados e rigorosos para clínicas e hospitais, focados na segurança e assepsia do ambiente.", link: "/higienizacaohospitalar" },
  { id: "portaria", icon: Key, title: "Portaria e Vigia", desc: "Controle de circulação, gestão de acessos e rondas patrimoniais para garantir a segurança de todos.", link: "/portaria" },
  { id: "jardinagem", icon: Leaf, title: "Jardinagem", desc: "Implantação, revitalização e conservação de jardins e áreas verdes com cuidado técnico e estético.", link: "/jardinagem" },
  { id: "zeladoria", icon: Wrench, title: "Zeladoria", desc: "Acompanhamento minucioso das necessidades de manutenção predial e conservação do patrimônio.", link: "/orcamento" },
  { id: "operacao", icon: Droplets, title: "Operação e Produção", desc: "Apoio à produção, processos de logística e atividades de carregamento adaptadas à sua indústria.", link: "/orcamento" },
  { id: "administrativo", icon: Briefcase, title: "Serviços Administrativos", desc: "Profissionais para recepção, apoio administrativo, mensageria e gestão de almoxarifado.", link: "/orcamento" },
  { id: "maquinas", icon: Building, title: "Máquinas Linha Amarela", desc: "Locação e operação de maquinário pesado como empilhadeiras, retroescavadeiras, motoniveladoras e pás carregadeiras.", link: "/orcamento" },
  { id: "transporte", icon: Truck, title: "Transporte de Cargas", desc: "Serviços completos de transporte e equipes especializadas em movimentação e carregamento.", link: "/orcamento" },
  { id: "incendio", icon: Shield, title: "Combate a Incêndio", desc: "Fornecimento de equipamentos, caminhões-pipa e profissionais devidamente treinados para emergências.", link: "/orcamento" }
];

export function Solucoes() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Nossas Soluções</h1>
        <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Nossos serviços integram pessoas, materiais, equipamentos e processos. Buscamos constantemente a eficiência operacional, a aplicação de tecnologia e o melhor uso dos recursos disponíveis para o seu negócio.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SOLUTIONS.map((solution, index) => (
          <motion.div
            key={solution.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-brand-800/40 p-8 rounded-2xl border border-brand-700/50 flex flex-col"
          >
            <div className="w-12 h-12 bg-brand-900 rounded-lg flex items-center justify-center mb-6 border border-brand-700">
              <solution.icon className="w-6 h-6 text-brand-green" />
            </div>
            <h3 className="text-xl font-heading font-bold text-white mb-3">{solution.title}</h3>
            <p className="text-slate-400 mb-8 flex-grow">{solution.desc}</p>
            
            <div className="flex flex-col sm:flex-row gap-3 mt-auto">
              <Link to="/orcamento" className="text-center bg-brand-700 hover:bg-brand-600 text-white py-2 px-4 rounded text-sm font-medium transition-colors border border-brand-600">
                Orçamento
              </Link>
              {solution.link !== "/orcamento" && (
                <Link to={solution.link} className="text-center bg-brand-900 hover:bg-brand-800 text-slate-300 hover:text-white py-2 px-4 rounded text-sm font-medium transition-colors border border-brand-700">
                  Saiba Mais
                </Link>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
