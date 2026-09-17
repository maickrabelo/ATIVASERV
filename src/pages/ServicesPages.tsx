import { motion } from "motion/react";
import { Sparkles, Key, Leaf, HeartPulse } from "lucide-react";
import { Link } from "react-router-dom";

export function ServicoBase({ 
  title, 
  icon: Icon, 
  description, 
  items,
  images
}: { 
  title: string, 
  icon: any, 
  description: string, 
  items: string[],
  images?: string[]
}) {
  return (
    <div>
      <div className="relative py-24 bg-brand-900 overflow-hidden border-b border-brand-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://static.wixstatic.com/media/b4fa1d_d0747f4c9a37420fa8db55c603b1ff04~mv2.jpg" 
            alt="Serviços Fundo" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="w-20 h-20 bg-brand-800 border border-brand-700 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
              <Icon className="w-10 h-10 text-brand-green" />
            </div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">{title}</h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {description}
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">O que oferecemos</h2>
            <ul className="space-y-4 mb-12">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-3 bg-brand-800/30 p-4 rounded-lg border border-brand-700/50">
                  <span className="w-2 h-2 bg-brand-green rounded-full mt-2 shrink-0" />
                  <span className="text-slate-300">{item}</span>
                </li>
              ))}
            </ul>
            
            {images && images.length > 0 && (
              <div className="grid grid-cols-2 gap-4">
                {images.map((img, idx) => (
                  <div key={idx} className={`rounded-xl overflow-hidden ${idx === 2 ? 'col-span-2' : ''}`}>
                    <img src={img} alt={`${title} foto ${idx+1}`} className="w-full h-48 object-cover" />
                  </div>
                ))}
              </div>
            )}

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
          
          <div className="bg-brand-900 p-8 rounded-2xl border border-brand-700 h-fit sticky top-24">
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
    </div>
  );
}

const COMMON_IMAGES = [
  "https://static.wixstatic.com/media/b4fa1d_247ce10ab2824967a5b3a32f6b86cf07~mv2.jpg",
  "https://static.wixstatic.com/media/b4fa1d_2937746524314dc4b85dc2463e264627~mv2.jpg",
  "https://static.wixstatic.com/media/b4fa1d_0d2e5a4095db492cba5d8206d71b3e9a~mv2.jpg"
];

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
    images={COMMON_IMAGES}
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
    images={COMMON_IMAGES}
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
    images={COMMON_IMAGES}
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
    images={COMMON_IMAGES}
  />;
}
