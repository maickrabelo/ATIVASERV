import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Building2, Users } from "lucide-react";
import { Link } from "react-router-dom";

export function Hero() {
  return (
    <div className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
      {/* Background styling elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-900 opacity-90 z-10" />
        <img 
          src="https://static.wixstatic.com/media/b4fa1d_812ead6388df4e74bb17666382036e37~mv2.jpg" 
          alt="Serviços Especializados" 
          className="w-full h-full object-cover object-center mix-blend-overlay"
        />
        {/* Glow effects */}
        <div className="absolute top-1/4 left-1/4 w-[30rem] h-[30rem] bg-brand-accent/20 rounded-full blur-[128px] pointer-events-none z-10" />
        <div className="absolute bottom-1/4 right-1/4 w-[25rem] h-[25rem] bg-brand-green/15 rounded-full blur-[128px] pointer-events-none z-10" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 py-1 px-3 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-sm font-medium mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-green animate-pulse" />
              Excelência em Terceirização
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl lg:text-7xl font-heading font-bold tracking-tight text-white mb-6 leading-tight"
          >
            Soluções definitivas para o seu <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-green">negócio.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed"
          >
            Há 23 anos, a Ativa Serviços é especialista na prestação de serviços terceirizados profissionais para condomínios e empresas.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link to="/solucoes" className="inline-flex justify-center items-center gap-2 bg-brand-accent hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.5)]">
              Nossas Soluções <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/orcamento" className="inline-flex justify-center items-center gap-2 bg-brand-800 hover:bg-brand-700 border border-brand-700 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all">
              Solicitar Orçamento
            </Link>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            { icon: ShieldCheck, title: "Segurança de Qualidade", desc: "Profissionais treinados e capacitados para zelar pelo seu patrimônio." },
            { icon: Users, title: "Gestão de Pessoas", desc: "Redução de custos e mitigação de riscos trabalhistas focada na atividade-fim." },
            { icon: Building2, title: "Ampla Experiência", desc: "Atuação destacada e validada em mais de 10 segmentos de mercado." }
          ].map((item, i) => (
            <div key={i} className="bg-brand-800/50 backdrop-blur-sm border border-brand-700/50 p-6 rounded-xl relative overflow-hidden group hover:border-brand-accent/40 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <item.icon className="w-10 h-10 text-brand-accent mb-4 relative z-10" />
              <h3 className="text-white font-heading font-semibold text-lg mb-2 relative z-10">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed relative z-10">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
