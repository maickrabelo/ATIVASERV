import { motion } from "motion/react";
import { Users, Target, ShieldCheck, Heart } from "lucide-react";

export function QuemSomos() {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Quem Somos</h1>
        <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          Nossa história começou em Uberaba no ano de 2001. Como uma empresa de controle familiar, nascemos com o propósito de entregar atendimento qualificado na terceirização de serviços, gerando oportunidades e contribuindo para o desenvolvimento econômico da região.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 className="text-2xl font-heading font-bold text-white mb-4">Nosso Método</h2>
          <p className="text-slate-400 leading-relaxed mb-6">
            Acreditamos que o sucesso na terceirização depende de um planejamento prévio rigoroso, agilidade nas respostas, ética inegociável e constante adaptação à realidade e às necessidades de cada cliente.
          </p>
          <h2 className="text-2xl font-heading font-bold text-white mb-4">Nosso Jeito de Atuar</h2>
          <p className="text-slate-400 leading-relaxed">
            Nossa atuação é pautada pelo cuidado genuíno com as pessoas, pela qualidade irrestrita no atendimento e pelo foco na continuidade e segurança do negócio.
          </p>
        </div>
        <div className="bg-brand-800/40 p-8 rounded-2xl border border-brand-700">
          <h3 className="text-xl font-heading font-bold text-white mb-6 text-center">Nossos 4 Pilares</h3>
          <ul className="space-y-4">
            {[
              { icon: Heart, text: "Atenção máxima ao cliente" },
              { icon: Users, text: "Reconhecimento das nossas equipes" },
              { icon: Target, text: "Sustentabilidade da gestão" },
              { icon: ShieldCheck, text: "Compatibilidade cultural" }
            ].map((pilar, i) => (
              <li key={i} className="flex items-center gap-4 text-slate-300 bg-brand-900/50 p-4 rounded-lg">
                <pilar.icon className="w-6 h-6 text-brand-green" />
                <span className="font-medium">{pilar.text}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mb-20">
        <h2 className="text-3xl font-heading font-bold text-white mb-8 text-center">Nossos Valores</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {[
            "Antecipação de necessidades", "Responsabilidade comercial", "Aperfeiçoamento constante",
            "Mentalidade de proprietário", "Redução de desperdícios", "Exemplo das lideranças",
            "Cooperação", "Retorno imediato", "Disciplina", "Respeito"
          ].map((valor, i) => (
            <div key={i} className="bg-brand-800/30 p-4 rounded-lg text-center border border-brand-700/50">
              <span className="text-slate-300 text-sm font-medium">{valor}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-br from-brand-800 to-brand-900 p-12 rounded-3xl border border-brand-700 text-center">
        <h2 className="text-3xl font-heading font-bold text-white mb-10">Ativa em Números</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { label: "Profissionais", value: "+1.600" },
            { label: "Clientes Atendidos", value: "+120" },
            { label: "NPS do Cliente", value: "86" },
            { label: "NPS do Colaborador", value: "84" }
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center justify-center">
              <span className="text-4xl font-heading font-bold text-brand-green mb-2">{stat.value}</span>
              <span className="text-slate-400 text-sm font-medium uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-8 pt-8 border-t border-brand-700/50">
          <p className="text-slate-400">Atuando em MG, SP, GO e DF. Mais de 25% dos nossos clientes estão conosco há mais de nove anos.</p>
        </div>
      </div>
    </div>
  );
}
