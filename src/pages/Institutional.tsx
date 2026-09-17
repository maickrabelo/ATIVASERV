import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, FileText, Briefcase, Info, AlertTriangle, Users, ShieldCheck } from "lucide-react";

function PageHeader({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <div className="relative py-24 bg-brand-900 overflow-hidden border-b border-brand-800">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://static.wixstatic.com/media/b4fa1d_d0747f4c9a37420fa8db55c603b1ff04~mv2.jpg" 
          alt={`${title} Fundo`} 
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
        />
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">{title}</h1>
          {subtitle && (
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export function Fornecedores() {
  return (
    <div>
      <PageHeader title="Para Fornecedores" subtitle="Informações e processos para parcerias comerciais com a Ativa Serviços." />
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto space-y-8">
        <div className="bg-brand-800/40 p-8 rounded-2xl border border-brand-700/50">
          <h2 className="text-2xl font-bold text-white mb-4">Apresentação Comercial</h2>
          <p className="text-slate-400 mb-4">Para apresentar sua empresa e enviar portfólio, utilize nossos canais de compras.</p>
          <p className="text-slate-300"><Mail className="inline w-5 h-5 mr-2 text-brand-green"/> compras@ativaserv.com.br</p>
          <p className="text-slate-300 mt-2"><Phone className="inline w-5 h-5 mr-2 text-brand-green"/> (34) 3312-4890</p>
        </div>
        <div className="bg-brand-800/40 p-8 rounded-2xl border border-brand-700/50">
          <h2 className="text-2xl font-bold text-white mb-4">Entrada de Fornecedor</h2>
          <p className="text-slate-400 mb-6">Antes da primeira compra, é necessário realizar a leitura do manual e preencher o formulário de qualificação.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://www.ativaserv.com.br/_files/ugd/cac138_31a7f2b6153d4a5a8fb3ebae3228dc5b.pdf" target="_blank" rel="noopener noreferrer" className="bg-brand-700 hover:bg-brand-600 text-white px-6 py-3 rounded-lg text-center font-medium transition-colors border border-brand-600">
              Manual do Fornecedor
            </a>
            <a href="https://forms.gle/hUMGbM1jF6eQEdRq9" target="_blank" rel="noopener noreferrer" className="bg-brand-green hover:bg-brand-green-glow text-brand-900 px-6 py-3 rounded-lg text-center font-medium transition-colors">
              Formulário de Qualificação
            </a>
          </div>
        </div>
        <div className="bg-brand-800/40 p-8 rounded-2xl border border-brand-700/50">
          <h2 className="text-2xl font-bold text-white mb-4">Atualização Cadastral</h2>
          <p className="text-slate-400">Para atualizar dados da sua empresa, entre em contato com o setor de Compras/Suprimentos pelos mesmos canais de apresentação.</p>
        </div>
      </div>
    </div>
  );
}

export function Politicas() {
  return (
    <div>
      <PageHeader title="Políticas e Documentos Oficiais" subtitle="Acesse nossos documentos e diretrizes institucionais." />
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-brand-800/40 p-8 rounded-2xl border border-brand-700/50 text-center flex flex-col items-center">
            <FileText className="w-12 h-12 text-brand-green mb-6" />
            <h2 className="text-xl font-bold text-white mb-4">Código de Ética e Conduta</h2>
            <p className="text-slate-400 mb-8 flex-grow">Conheça os princípios e padrões de conduta que guiam as ações de todos os nossos colaboradores.</p>
            <a href="https://www.ativaserv.com.br/_files/ugd/cac138_5e4d62605f18421c923a0729e692e623.pdf" target="_blank" rel="noopener noreferrer" className="w-full bg-brand-700 hover:bg-brand-600 text-white py-3 rounded-lg font-medium transition-colors border border-brand-600">
              Acessar Documento
            </a>
          </div>
          <div className="bg-brand-800/40 p-8 rounded-2xl border border-brand-700/50 text-center flex flex-col items-center">
            <ShieldCheck className="w-12 h-12 text-brand-green mb-6" />
            <h2 className="text-xl font-bold text-white mb-4">Política de Qualidade</h2>
            <p className="text-slate-400 mb-8 flex-grow">Nossas diretrizes para garantir a excelência e a melhoria contínua na prestação de serviços.</p>
            <a href="https://www.ativaserv.com.br/_files/ugd/cac138_2959b6687a9448beab6ba25b9f0de0ad.pdf" target="_blank" rel="noopener noreferrer" className="w-full bg-brand-700 hover:bg-brand-600 text-white py-3 rounded-lg font-medium transition-colors border border-brand-600">
              Acessar Documento
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Mapa() {
  return (
    <div>
      <PageHeader title="Nossa Localização" subtitle="Venha nos fazer uma visita." />
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="bg-brand-800/40 p-8 rounded-2xl border border-brand-700/50 text-center max-w-2xl mx-auto">
          <MapPin className="w-16 h-16 text-brand-green mx-auto mb-6" />
          <h2 className="text-2xl font-bold text-white mb-4">Sede Ativa Serviços</h2>
          <p className="text-xl text-slate-300 mb-2">Rua João Pinheiro, 33</p>
          <p className="text-lg text-slate-400 mb-8">Centro, Uberaba - MG</p>
          <div className="flex flex-col gap-4 text-slate-400">
            <p><Phone className="inline w-5 h-5 mr-2 text-brand-green"/> (34) 3312-4890 / 3315-9040</p>
            <p><Phone className="inline w-5 h-5 mr-2 text-brand-green"/> Comercial: (34) 99811-8738</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TrabalheConosco() {
  return (
    <div>
      <PageHeader title="Trabalhe Conosco" subtitle="Faça parte de uma equipe comprometida com a excelência, que valoriza as pessoas e atua em âmbito nacional (MG, SP, GO e DF)." />
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-brand-800/40 p-8 rounded-2xl border border-brand-700/50">
            <h2 className="text-xl font-bold text-white mb-4">Nosso Perfil Cultural</h2>
            <ul className="space-y-3 text-slate-400">
              <li>• Colaboração e trabalho em equipe</li>
              <li>• Disposição para a aprendizagem contínua</li>
              <li>• Responsabilidade e mentalidade de dono</li>
              <li>• Liderança pelo exemplo</li>
              <li>• Compromisso inegociável com o atendimento</li>
            </ul>
          </div>
          <div className="bg-brand-800/40 p-8 rounded-2xl border border-brand-700/50 flex flex-col justify-center items-center text-center">
            <Briefcase className="w-12 h-12 text-brand-green mb-4" />
            <h2 className="text-xl font-bold text-white mb-4">Portal de Oportunidades</h2>
            <p className="text-slate-400 mb-6">Cadastre seu currículo e acompanhe as vagas abertas em diversos setores.</p>
            <a href="https://vagas.ativaserv.com.br/" target="_blank" rel="noopener noreferrer" className="bg-brand-green hover:bg-brand-green-glow text-brand-900 px-8 py-3 rounded-lg font-bold transition-colors">
              Acessar Vagas
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function Colaborador() {
  return (
    <div>
      <PageHeader title="Portal do Colaborador" subtitle="Recursos e materiais para a sua jornada na Ativa Serviços." />
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-brand-800/40 p-8 rounded-2xl border border-brand-700/50 text-center">
            <Users className="w-12 h-12 text-brand-green mx-auto mb-4" />
            <h2 className="text-xl font-bold text-white mb-4">Integração</h2>
            <p className="text-slate-400 mb-6">Assista ao nosso vídeo oficial de integração institucional.</p>
            <div className="aspect-video bg-brand-900 rounded border border-brand-700 flex items-center justify-center">
              <span className="text-slate-500 text-sm">Vídeo pendente de atualização</span>
            </div>
          </div>
          <div className="bg-brand-800/40 p-8 rounded-2xl border border-brand-700/50 text-center flex flex-col items-center">
            <FileText className="w-12 h-12 text-brand-green mx-auto mb-4" />
            <h2 className="text-xl font-bold text-white mb-4">Cartilha do Colaborador</h2>
            <p className="text-slate-400 mb-8 flex-grow">Guia completo com orientações, direitos e deveres para o dia a dia.</p>
            <a href="https://www.ativaserv.com.br/_files/ugd/cac138_a118388c4ff84d82baddb672c0bcecdf.pdf" target="_blank" rel="noopener noreferrer" className="w-full bg-brand-700 hover:bg-brand-600 text-white px-6 py-3 rounded-lg font-medium transition-colors border border-brand-600">
              Acessar Cartilha (PDF)
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export function InstitucionalPdf() {
  return (
    <div>
      <PageHeader title="Apresentação Institucional" />
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <div className="bg-brand-800/40 p-12 rounded-2xl border border-brand-700/50">
          <Info className="w-12 h-12 text-brand-accent mx-auto mb-4" />
          <p className="text-slate-300">O documento de apresentação oficial está temporariamente indisponível para consulta.</p>
        </div>
      </div>
    </div>
  );
}

export function Teste() {
  return (
    <div>
      <PageHeader title="Página de Teste" />
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <div className="bg-brand-800/40 p-12 rounded-2xl border border-brand-700/50">
          <p className="text-slate-300">Conteúdo em validação (Comparação Antes/Depois pendente).</p>
        </div>
      </div>
    </div>
  );
}

export function EntrevistaOnline() {
  return (
    <div>
      <PageHeader title="Entrevista Online" subtitle="Deseja agendar sua entrevista online? Fale diretamente com nossa equipe de recrutamento." />
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <a href="https://wa.me/553431990184?text=Ol%C3%A1%2C%20gostaria%20de%20agendar%20a%20minha%20entrevista%20online.%20" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-brand-green hover:bg-brand-green-glow text-brand-900 px-8 py-4 rounded-lg font-bold transition-colors">
          <Phone className="w-5 h-5" /> Agendar via WhatsApp
        </a>
      </div>
    </div>
  );
}

export function Culturativa() {
  return (
    <div>
      <PageHeader title="Culturativa" subtitle="Cartas destinadas às nossas lideranças e multiplicadores sobre cultura e atuação profissional." />
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-4">
          {[
            { title: "Carta 1: A aspiração à excelência como parte da identidade Ativa", link: "https://app.rdstation.email/mail/62aac16d-9963-4645-8029-2e6150166e45" },
            { title: "Carta 2: Geração de valor por meio do atendimento", link: "https://app.rdstation.email/mail/81090be8-ddc6-4d96-bed2-7751281fa9dc" },
            { title: "Carta 3: Responsabilidade individual pelos resultados coletivos", link: "https://app.rdstation.email/mail/67452393-d9e3-4526-b45d-2d01e105aac7" },
            { title: "Carta 4: O comprometimento como força da organização", link: "https://app.rdstation.com.br/emails/preview?email_id=19199990" }
          ].map((carta, i) => (
            <a key={i} href={carta.link} target="_blank" rel="noopener noreferrer" className="block bg-brand-800/40 hover:bg-brand-800 p-6 rounded-xl border border-brand-700/50 transition-colors">
              <h3 className="text-white font-medium">{carta.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Formularios() {
  return (
    <div>
      <PageHeader title="Formulários Internos" subtitle="Acesso a solicitações operacionais." />
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { title: "Apontamento de Ausências", link: "https://forms.gle/Z2LFCVhKFiANCgvU9" },
            { title: "Solicitação de Movimentação", link: "https://forms.gle/fTHPbJteeVvpRCph7" },
            { title: "Solicitação de Demissão", link: "https://forms.gle/YeBNX3Uh96wnaeqs7" },
            { title: "Movimentação de Patrimônio", link: "https://forms.gle/rSqseMswX6qCsg1H6" },
            { title: "Solicitação de Faturamento Extra", link: "https://forms.gle/RG1UwCR1AJ44bRaD9" },
            { title: "Solicitação de Desconto em Fatura", link: "https://forms.gle/q63T3ZR9Tn9HSYCL6" }
          ].map((form, i) => (
            <a key={i} href={form.link} target="_blank" rel="noopener noreferrer" className="bg-brand-800/40 hover:bg-brand-800 p-6 rounded-xl border border-brand-700/50 text-white font-medium text-center transition-colors">
              {form.title}
            </a>
          ))}
          <div className="bg-brand-800/40 p-6 rounded-xl border border-brand-700/50 text-slate-400 font-medium text-center opacity-70">
            Solicitação de Manutenção (Destino Indisponível)
          </div>
        </div>
      </div>
    </div>
  );
}

export function Ouvidoria() {
  return (
    <div>
      <PageHeader title="Ouvidoria" subtitle="Canal exclusivo para registro de reclamações, sugestões, denúncias e elogios de forma segura." />
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-brand-800/40 p-8 rounded-2xl border border-brand-700/50 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white mb-4">Canal Oficial (Zeev)</h2>
              <p className="text-slate-400 mb-6">
                Utilize nosso sistema principal de ouvidoria para registrar sua manifestação. Permite envios anônimos (nota: manifestações anônimas não podem ser acompanhadas posteriormente pelo manifestante).
              </p>
            </div>
            <a href="https://ativaservicos.zeev.it/2.0/anonymous?c=VjnxcpePVw32GRgysdmL0Qk0VtZ3sUQ1654ys0sIAqSxlPIP%2FxFlu46A%2FD9VRGaOm3Our%2BwJw3fxr8CyvFPs41l28nbZwsKiRyX866jNn88%3D" target="_blank" rel="noopener noreferrer" className="bg-brand-green hover:bg-brand-green-glow text-brand-900 px-6 py-3 rounded-lg text-center font-bold transition-colors">
              Acessar Ouvidoria Zeev
            </a>
          </div>
          
          <div className="bg-brand-800/40 p-8 rounded-2xl border border-brand-700/50">
            <h2 className="text-xl font-bold text-white mb-4">E-mail Direto</h2>
            <p className="text-slate-400 mb-6">
              Caso prefira, você também pode enviar sua mensagem diretamente para o e-mail da nossa ouvidoria.
            </p>
            <div className="bg-brand-900 p-4 rounded border border-brand-700 flex items-center gap-3">
              <Mail className="w-6 h-6 text-brand-green" />
              <span className="text-white font-medium">ouvidoria@ativaserv.com.br</span>
            </div>
          </div>
        </div>
        
        <div className="bg-brand-800/40 p-8 rounded-2xl border border-brand-700/50">
          <h2 className="text-2xl font-bold text-white mb-6">Formulário de Contato Local</h2>
          <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert('Manifestação recebida com sucesso.'); }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Nome (Opcional)</label>
                <input type="text" className="w-full bg-brand-900 border border-brand-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-green" placeholder="Seu nome" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">E-mail (Opcional)</label>
                <input type="email" className="w-full bg-brand-900 border border-brand-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-green" placeholder="seu@email.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Telefone (Opcional)</label>
                <input type="tel" className="w-full bg-brand-900 border border-brand-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-green" placeholder="(00) 00000-0000" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Relação com a empresa *</label>
                <select required className="w-full bg-brand-900 border border-brand-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-green">
                  <option value="">Selecione...</option>
                  <option value="cliente">Cliente</option>
                  <option value="colaborador">Colaborador</option>
                  <option value="fornecedor">Fornecedor</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-300 mb-2">Nome do posto/empresa *</label>
                <input required type="text" className="w-full bg-brand-900 border border-brand-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-green" placeholder="Local da ocorrência" />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-slate-300 mb-2">Mensagem *</label>
                <textarea required rows={5} className="w-full bg-brand-900 border border-brand-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-green" placeholder="Descreva sua manifestação..."></textarea>
              </div>
            </div>
            <button type="submit" className="w-full md:w-auto bg-brand-700 hover:bg-brand-600 text-white px-8 py-3 rounded-lg font-medium transition-colors border border-brand-600">
              Enviar Manifestação
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export function CCT({ title, id }: { title: string, id: string }) {
  return (
    <div>
      <PageHeader title="Convenção Coletiva de Trabalho" subtitle={title} />
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <div className="bg-brand-800/40 p-12 rounded-2xl border border-brand-700/50">
          <FileText className="w-12 h-12 text-slate-400 mx-auto mb-4" />
          <p className="text-slate-300">O documento PDF referente a esta convenção ({id}) está pendente de atualização.</p>
        </div>
      </div>
    </div>
  );
}

export function Club() {
  return (
    <div>
      <PageHeader title="Clube de Vantagens" />
      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto text-center">
        <div className="bg-brand-800/40 p-12 rounded-2xl border border-brand-700/50">
          <AlertTriangle className="w-12 h-12 text-brand-accent mx-auto mb-4" />
          <p className="text-slate-300">Os benefícios, regras e parcerias do Clube de Vantagens estão sendo estruturados. Retorne em breve para conferir as novidades.</p>
        </div>
      </div>
    </div>
  );
}
