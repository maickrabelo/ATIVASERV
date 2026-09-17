import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Sparkles, Key, Leaf, HeartPulse, Building, Droplets, Truck, Wrench, Shield, Briefcase } from "lucide-react";

const SOLUTIONS = [
  { id: "limpeza", icon: Sparkles, img: "https://static.wixstatic.com/media/b4fa1d_598b646117074a12ba0831a0a3bfb864~mv2.jpg", title: "Limpeza e Conservação", desc: "Organização e higienização de ambientes com equipes preparadas e processos definidos para garantir o bem-estar.", link: "/limpeza" },
  { id: "higienizacao", icon: HeartPulse, img: "https://static.wixstatic.com/media/b4fa1d_c657f2b8a7644637b1c62a2e1d5a22d0~mv2.jpg", title: "Higienização Hospitalar", desc: "Procedimentos especializados e rigorosos para clínicas e hospitais, focados na segurança e assepsia do ambiente.", link: "/higienizacaohospitalar" },
  { id: "portaria", icon: Key, img: "https://static.wixstatic.com/media/b4fa1d_e6713a5a8ebc46b1afb64bca58f8cf93~mv2.jpg", title: "Portaria e Vigia", desc: "Controle de circulação, gestão de acessos e rondas patrimoniais para garantir a segurança de todos.", link: "/portaria" },
  { id: "zeladoria", icon: Wrench, img: "https://static.wixstatic.com/media/b4fa1d_d7a0cfefa1e04dddb20c64a0b19ba138~mv2.jpeg", title: "Zeladoria", desc: "Acompanhamento minucioso das necessidades de manutenção predial e conservação do patrimônio.", link: "/orcamento" },
  { id: "jardinagem", icon: Leaf, img: "https://static.wixstatic.com/media/b4fa1d_0c5530bbd69e4759b5a16e2036ec1c0a~mv2.jpg", title: "Jardinagem", desc: "Implantação, revitalização e conservação de jardins e áreas verdes com cuidado técnico e estético.", link: "/jardinagem" },
  { id: "operacao", icon: Droplets, img: "https://static.wixstatic.com/media/b4fa1d_cdaa67a81a704213a7baf2eea86363b4~mv2.jpg", title: "Operação e Produção", desc: "Apoio à produção, processos de logística e atividades de carregamento adaptadas à sua indústria.", link: "/orcamento" },
  { id: "administrativo", icon: Briefcase, img: "https://static.wixstatic.com/media/b4fa1d_ff23f02753004ec19cabae1bbb297974~mv2.jpg", title: "Serviços Administrativos", desc: "Profissionais para recepção, apoio administrativo, mensageria e gestão de almoxarifado.", link: "/orcamento" },
  { id: "maquinas", icon: Building, img: "https://static.wixstatic.com/media/b4fa1d_ce3b58ce5fbf46b2aedbffae0ab220ff~mv2.jpg", title: "Máquinas Linha Amarela", desc: "Locação e operação de maquinário pesado como empilhadeiras, retroescavadeiras, motoniveladoras e pás carregadeiras.", link: "/orcamento" },
  { id: "transporte", icon: Truck, img: "https://static.wixstatic.com/media/b4fa1d_a30a2faea1814775933b8e26c9fc29a3~mv2.jpg", title: "Transporte de Cargas", desc: "Serviços completos de transporte e equipes especializadas em movimentação e carregamento.", link: "/orcamento" },
  { id: "incendio", icon: Shield, img: "https://static.wixstatic.com/media/b4fa1d_004cf8a9a8834d5c95d4d6ab83a962e3~mv2.jpg", title: "Combate a Incêndio", desc: "Fornecimento de equipamentos, caminhões-pipa e profissionais devidamente treinados para emergências.", link: "/orcamento" }
];

export function Solucoes() {
  return (
    <div>
      <div className="relative py-24 bg-brand-900 overflow-hidden border-b border-brand-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://static.wixstatic.com/media/b4fa1d_d0747f4c9a37420fa8db55c603b1ff04~mv2.jpg" 
            alt="Soluções Fundo" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Nossas Soluções</h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Nossos serviços integram pessoas, materiais, equipamentos e processos. Buscamos constantemente a eficiência operacional, a aplicação de tecnologia e o melhor uso dos recursos disponíveis para o seu negócio.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SOLUTIONS.map((solution, index) => (
            <motion.div
              key={solution.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="bg-brand-800/40 rounded-2xl border border-brand-700/50 flex flex-col overflow-hidden group hover:border-brand-accent/50 transition-colors"
            >
              <div className="h-48 w-full relative overflow-hidden">
                <img src={solution.img} alt={solution.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-900 via-brand-900/40 to-transparent" />
                <div className="absolute bottom-4 left-4 w-10 h-10 bg-brand-accent rounded-lg flex items-center justify-center shadow-lg">
                  <solution.icon className="w-5 h-5 text-white" />
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
