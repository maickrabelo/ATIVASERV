import { motion } from "motion/react";
import { CheckCircle2, TrendingUp, Settings2 } from "lucide-react";
import { OutsourcingComparison } from "../components/OutsourcingComparison";

export function PorQueTerceirizar() {
  return (
    <div>
      <div className="relative py-24 bg-brand-900 overflow-hidden border-b border-brand-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://static.wixstatic.com/media/b4fa1d_d0747f4c9a37420fa8db55c603b1ff04~mv2.jpg" 
            alt="Por Que Terceirizar Fundo" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Por Que Terceirizar?</h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Entenda como a terceirização estratégica pode transformar a operação da sua empresa, garantindo eficiência, previsibilidade e foco no seu negócio principal.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 bg-brand-800 rounded flex items-center justify-center border border-brand-700">
                  <TrendingUp className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Foco na Atividade-Fim</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    A contratação de especialistas para cuidar das atividades complementares libera o tempo e a energia da sua organização para se concentrar exclusivamente no core business.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 shrink-0 bg-brand-800 rounded flex items-center justify-center border border-brand-700">
                  <Settings2 className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Simplificação Administrativa</h3>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    Toda a gestão das equipes terceirizadas é realizada por nós. Isso engloba recrutamento, processos demissionais, recolhimentos, cobertura de faltas, férias, controle de jornada e substituições.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-brand-800/30 p-6 rounded-2xl border border-brand-700/50">
              <h3 className="text-xl font-heading font-bold text-white mb-4">Benefícios Operacionais</h3>
              <ul className="space-y-3">
                {[
                  "Profissionais treinados e plenamente preparados para a função",
                  "Fornecimento de equipamentos, produtos e uniformes padronizados",
                  "Manutenção e revisão constante de processos e entregas",
                  "Ganhos de escala na compra de insumos",
                  "Acompanhamento e suporte gerencial ao relacionamento com o cliente",
                  "Possíveis reduções de custos fiscais, dependendo da análise tributária"
                ].map((beneficio, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-green shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm leading-relaxed">{beneficio}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mb-20">
          <OutsourcingComparison />
        </div>

        <div className="max-w-4xl mx-auto border-t border-brand-700 pt-16">
          <h2 className="text-3xl font-heading font-bold text-white mb-8 text-center">Como Avaliar um Fornecedor</h2>
          <p className="text-slate-400 text-center mb-10">Critérios fundamentais para garantir uma terceirização segura e sustentável:</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Escopo claro e compatibilidade dos preços de mercado",
              "Experiência dos gestores e solidez da empresa",
              "Regularidade documental, certidões e seguros",
              "Comprovantes de pagamento de salários, férias e obrigações previdenciárias e fundiárias",
              "Cumprimento integral da Convenção Coletiva aplicável à categoria",
              "Respeito às normas de jornada e fornecimento adequado de alimentação/benefícios"
            ].map((criterio, i) => (
              <div key={i} className="bg-brand-900 border border-brand-800 p-4 rounded-lg flex items-start gap-3">
                <span className="text-brand-accent font-bold mt-0.5">0{i+1}.</span>
                <span className="text-slate-300 text-sm">{criterio}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
