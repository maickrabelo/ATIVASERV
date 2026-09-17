import { motion } from "motion/react";
import { Sparkles, Key, Leaf, HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";

export function ServicoBase({ 
  title, 
  icon: Icon, 
  description, 
  items 
}: { 
  title: string, 
  icon: any, 
  description: string, 
  items: string[] 
}) {
  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
        <div className="w-20 h-20 bg-brand-900 border border-brand-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-[0_0_20px_rgba(16,185,129,0.15)]">
          <Icon className="w-10 h-10 text-brand-green" />
        </div>
        <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">{title}</h1>
        <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
          {description}
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 className="text-2xl font-bold text-white mb-6">O que oferecemos</h2>
          <ul className="space-y-4">
            {items.map((item, i) => (
              <li key={i} className="flex items-start gap-3 bg-brand-800/30 p-4 rounded-lg border border-brand-700/50">
                <span className="w-2 h-2 bg-brand-green rounded-full mt-2 shrink-0" />
                <span className="text-slate-300">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="mt-12 bg-brand-800/40 p-6 rounded-2xl border border-brand-700">
            <h3 className="text-lg font-bold text-white mb-3">Nossos 4 Pilares de Atuação</h3>
            <div className="grid grid-cols-2 gap-3 text-sm text-slate-400">
              <p>• Atenção máxima ao cliente</p>
              <p>• Sustentabilidade da gestão</p>
              <p>• Reconhecimento das equipes</p>
              <p>• Compatibilidade cultural</p>
            </div>
          </div>
        </div>
        
        <div className="bg-brand-900 p-8 rounded-2xl border border-brand-700">
          <h2 className="text-2xl font-bold text-white mb-6">Solicitar Proposta</h2>
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Solicitação recebida.'); }}>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Nome *</label>
              <input required type="text" className="w-full bg-brand-800 border border-brand-700 rounded-lg px-4 py-2.5 text-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">Empresa *</label>
              <input required type="text" className="w-full bg-brand-800 border border-brand-700 rounded-lg px-4 py-2.5 text-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1">E-mail *</label>
              <input required type="email" className="w-full bg-brand-800 border border-brand-700 rounded-lg px-4 py-2.5 text-white" />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">Telefone (Opcional)</label>
                <input type="tel" className="w-full bg-brand-800 border border-brand-700 rounded-lg px-4 py-2.5 text-white" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1">CNPJ (Opcional)</label>
                <input type="text" className="w-full bg-brand-800 border border-brand-700 rounded-lg px-4 py-2.5 text-white" />
              </div>
            </div>
            <button type="submit" className="w-full bg-brand-green hover:bg-brand-green-glow text-brand-900 font-bold py-3 mt-4 rounded-lg transition-colors">
              Enviar Solicitação
            </button>
          </form>
          
          <div className="mt-8 border-t border-brand-800 pt-6">
             <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <p className="text-2xl font-bold text-brand-green">+1.600</p>
                  <p className="text-xs text-slate-400 uppercase">Profissionais</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-brand-green">Desde 2001</p>
                  <p className="text-xs text-slate-400 uppercase">Experiência</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Limpeza() {
  return <ServicoBase 
    title="Limpeza e Conservação" 
    icon={Sparkles} 
    description="Organização e higienização de ambientes com equipes preparadas e processos definidos. Garantimos a conservação do seu patrimônio com procedimentos técnicos e equipamentos de alta performance."
    items={[
      "Limpeza técnica e de conservação diária",
      "Equipes rigorosamente treinadas e uniformizadas",
      "Fornecimento de produtos adequados e maquinário moderno",
      "Processos padronizados para garantir eficiência",
      "Atendimento a condomínios, indústrias, comércio e escritórios"
    ]}
  />;
}

export function Portaria() {
  return <ServicoBase 
    title="Portaria 24h" 
    icon={Key} 
    description="Controle de entrada e saída, atendimento e organização da circulação com segurança e profissionalismo. Equipes treinadas aliadas a comunicação e tecnologia para empresas e condomínios."
    items={[
      "Controle rigoroso de acessos de pessoas e veículos",
      "Rondas motorizadas preventivas",
      "Equipes capacitadas com foco em hospitalidade e segurança",
      "Comunicação apoiada por recursos tecnológicos",
      "Atuação especializada em empresas, condomínios, indústrias e hospitais"
    ]}
  />;
}

export function Jardinagem() {
  return <ServicoBase 
    title="Jardinagem Terceirizada" 
    icon={Leaf} 
    description="Manutenção e revitalização de áreas verdes que unem estética e preservação ambiental para condomínios, empresas e espaços públicos."
    items={[
      "Conservação rotineira de áreas verdes e gramados",
      "Poda técnica, adubação e controle de pragas",
      "Recuperação de plantas e projetos de paisagismo",
      "Equipes e equipamentos específicos para grandes áreas",
      "Aplicações em parques, praças, clubes, escolas e hospitais"
    ]}
  />;
}

export function HigienizacaoHospitalar() {
  return <ServicoBase 
    title="Higienização Hospitalar" 
    icon={HeartPulse} 
    description="A importância vital da higienização para pacientes, equipes e visitantes. Oferecemos procedimentos técnicos e recursos padronizados focados na assepsia."
    items={[
      "Equipes altamente capacitadas em protocolos de saúde",
      "Procedimentos padronizados e recursos tecnológicos",
      "Contribuição efetiva para o controle de contaminações",
      "Atendimento especializado a hospitais, clínicas e laboratórios",
      "Gestão focada em normas sanitárias e segurança"
    ]}
  />;
}
