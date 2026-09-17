import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { Users, GraduationCap, LineChart, Target } from "lucide-react";

export function NossaGente() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Nossa Gente</h1>
        <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          O principal ativo da Ativa Serviços são as pessoas. Nossa cultura organizacional é pautada na valorização, desenvolvimento e total integração com a realidade de cada cliente.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
        <div>
          <h2 className="text-2xl font-heading font-bold text-white mb-4">Preparação e Excelência</h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            Antes de assumir qualquer atividade, todos os nossos profissionais passam por um rigoroso processo de integração. Eles recebem nossa Cartilha do Colaborador e um treinamento específico e direcionado para as funções que irão desempenhar.
          </p>
          <p className="text-slate-400 leading-relaxed mb-6">
            São as nossas equipes que, na linha de frente, materializam a experiência e o nível de serviço que prometemos. Por isso, medimos constantemente a satisfação por meio de pesquisas trimestrais com nossos colaboradores.
          </p>
          <ul className="space-y-4">
            {[
              "Compromisso prático através do exemplo das lideranças",
              "Busca incansável pela evolução constante",
              "Desenvolvimento de competências comportamentais e técnicas"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <Target className="w-5 h-5 text-brand-green shrink-0 mt-1" />
                <span className="text-slate-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-brand-800/40 p-6 rounded-2xl border border-brand-700/50">
            <Users className="w-10 h-10 text-brand-green mb-4" />
            <h3 className="text-white font-bold mb-2">Integração Cultural</h3>
            <p className="text-sm text-slate-400">Total alinhamento com os valores dos nossos clientes.</p>
          </div>
          <div className="bg-brand-800/40 p-6 rounded-2xl border border-brand-700/50 mt-0 sm:mt-8">
            <GraduationCap className="w-10 h-10 text-brand-green mb-4" />
            <h3 className="text-white font-bold mb-2">Capacitação Contínua</h3>
            <p className="text-sm text-slate-400">Treinamentos periódicos de requalificação profissional.</p>
          </div>
          <div className="bg-brand-800/40 p-6 rounded-2xl border border-brand-700/50 sm:-mt-8">
            <LineChart className="w-10 h-10 text-brand-green mb-4" />
            <h3 className="text-white font-bold mb-2">Monitoramento</h3>
            <p className="text-sm text-slate-400">Acompanhamento e pesquisa trimestral de satisfação do colaborador.</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-brand-800 to-brand-900 p-12 rounded-3xl border border-brand-700 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl font-heading font-bold text-white mb-6">Faça Parte da Nossa Equipe</h2>
        <p className="text-slate-300 mb-8 leading-relaxed">
          Estamos sempre em busca de novos talentos. Se você tem compromisso com a excelência, busca desenvolvimento contínuo e quer fazer a diferença, junte-se à Ativa Serviços.
        </p>
        <a href="https://vagas.ativaserv.com.br/" target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-green hover:bg-brand-green-glow text-brand-900 px-8 py-4 rounded-lg font-bold transition-colors">
          Acessar Portal de Vagas
        </a>
      </div>
    </div>
  );
}
