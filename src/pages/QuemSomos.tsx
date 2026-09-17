import { motion } from "motion/react";

export function QuemSomos() {
  return (
    <div>
      {/* Background Header */}
      <div className="relative py-24 bg-brand-900 overflow-hidden border-b border-brand-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://static.wixstatic.com/media/b4fa1d_d0747f4c9a37420fa8db55c603b1ff04~mv2.jpg" 
            alt="Quem Somos Fundo" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Quem Somos</h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Nossa história começou em Uberaba no ano de 2001. Como uma empresa de controle familiar, nascemos com o propósito de entregar atendimento qualificado na terceirização de serviços, gerando oportunidades e contribuindo para o desenvolvimento econômico da região.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 items-center">
          <div>
            <h2 className="text-2xl font-heading font-bold text-white mb-4">Nosso Método</h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              Acreditamos que o sucesso na terceirização depende de um planejamento prévio rigoroso, agilidade nas respostas, ética inegociável e constante adaptação à realidade e às necessidades de cada cliente.
            </p>
            <div className="relative rounded-2xl overflow-hidden mb-8 h-48 border border-brand-800">
              <img src="https://static.wixstatic.com/media/b4fa1d_8e445ee964ee47a2b33c19974b391098~mv2.jpg" alt="Jeito de ser e fazer Ativa" className="w-full h-full object-cover opacity-60" />
              <div className="absolute inset-0 flex items-center justify-center p-6 bg-brand-900/40">
                <div>
                  <h2 className="text-2xl font-heading font-bold text-white mb-2 shadow-sm">Nosso Jeito de Atuar</h2>
                  <p className="text-white text-sm font-medium shadow-sm">
                    Cuidado genuíno com as pessoas, qualidade irrestrita no atendimento e foco na continuidade e segurança do negócio.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-brand-800/40 p-8 rounded-2xl border border-brand-700 shadow-xl">
            <h3 className="text-xl font-heading font-bold text-white mb-8 text-center">Nossos 4 Pilares</h3>
            <ul className="space-y-6">
              {[
                { img: "https://static.wixstatic.com/media/b4fa1d_3bd9d49ccb8e49a4b0f7612b2d6dc52f~mv2.png", text: "Atenção máxima ao cliente" },
                { img: "https://static.wixstatic.com/media/b4fa1d_28e885ffb3354743bb162d1bd3d42209~mv2.png", text: "Reconhecimento das nossas equipes" },
                { img: "https://static.wixstatic.com/media/b4fa1d_6f2248b1223743eb9035f6cce7c8d083~mv2.png", text: "Sustentabilidade da gestão" },
                { img: "https://static.wixstatic.com/media/b4fa1d_c7ae1c59ca9f4e15ad8b57ec2a30b341~mv2.png", text: "Compatibilidade cultural" }
              ].map((pilar, i) => (
                <li key={i} className="flex items-center gap-6 text-slate-300 bg-brand-900/80 p-4 rounded-xl border border-brand-800/50 hover:border-brand-accent/30 transition-colors">
                  <div className="w-16 h-16 flex items-center justify-center shrink-0">
                    <img src={pilar.img} alt={pilar.text} className="max-w-full max-h-full object-contain" />
                  </div>
                  <span className="font-medium text-lg">{pilar.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center mb-12">
            <div className="lg:col-span-1">
              <img src="https://static.wixstatic.com/media/b4fa1d_6aec1456f7d2449aafd06adaf916731d~mv2.jpeg" alt="Nossos Valores" className="w-full h-auto rounded-2xl object-cover shadow-lg border border-brand-800" />
            </div>
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-heading font-bold text-white mb-8">Nossos Valores</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  "Antecipação de necessidades", "Responsabilidade comercial", "Aperfeiçoamento constante",
                  "Mentalidade de proprietário", "Redução de desperdícios", "Exemplo das lideranças",
                  "Cooperação", "Retorno imediato", "Disciplina", "Respeito"
                ].map((valor, i) => (
                  <div key={i} className="bg-brand-800/30 p-4 rounded-lg border border-brand-700/50 hover:bg-brand-800/50 transition-colors flex items-center justify-center text-center h-full">
                    <span className="text-slate-300 text-sm font-medium">{valor}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-br from-brand-800 to-brand-900 p-12 rounded-3xl border border-brand-700">
          <h2 className="text-3xl font-heading font-bold text-white mb-10 text-center">Ativa em Números</h2>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {[
              { img: "https://static.wixstatic.com/media/b4fa1d_3c6d6159e9454f4a83aeae4a559ea7af~mv2.png", label: "Anos de Atuação", value: "23" },
              { img: "https://static.wixstatic.com/media/b4fa1d_6c294ad16f8d447b89df96d347d95d8c~mv2.png", label: "Profissionais", value: "+1.600" },
              { img: "https://static.wixstatic.com/media/b4fa1d_49e20c1355cb4a88be81be98a048f8c4~mv2.png", label: "Mais de 9 anos na base", value: ">25%" },
              { img: "https://static.wixstatic.com/media/b4fa1d_b6c93cd3707445aa80808d8d901434c4~mv2.png", label: "Clientes / Estados", value: "+120 / 4" },
              { img: "https://static.wixstatic.com/media/b4fa1d_a8650613338b4eb1b0e0235df74ee082~mv2.png", label: "NPS do Cliente", value: "86" },
              { img: "https://static.wixstatic.com/media/b4fa1d_0a7952b5cb8b4e64ab7a35b7ae7203b9~mv2.png", label: "NPS do Colaborador", value: "84" }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center justify-center text-center p-6 bg-brand-900/50 rounded-2xl border border-brand-800/50">
                <div className="h-16 w-16 mb-4 flex items-center justify-center">
                  <img src={stat.img} alt={stat.label} className="max-w-full max-h-full object-contain" />
                </div>
                <span className="text-3xl font-heading font-bold text-brand-green mb-2">{stat.value}</span>
                <span className="text-slate-400 text-xs font-medium uppercase tracking-wider">{stat.label}</span>
              </div>
            ))}
          </div>
          <div className="pt-8 border-t border-brand-700/50 text-center">
            <p className="text-slate-400 font-medium">Atuando em MG, SP, GO e DF.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
