import { motion } from "motion/react";
import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export function Orcamento() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    // Simulate submission delay
    setTimeout(() => {
      setStatus("success");
    }, 1500);
  };

  return (
    <div>
      <div className="relative py-24 bg-brand-900 overflow-hidden border-b border-brand-800">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://static.wixstatic.com/media/b4fa1d_d0747f4c9a37420fa8db55c603b1ff04~mv2.jpg" 
            alt="Orçamento Fundo" 
            className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">Solicitar Orçamento</h1>
            <p className="text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Preencha o formulário abaixo para receber uma proposta personalizada, ou entre em contato diretamente com nossa equipe comercial.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          <div className="w-full lg:w-2/3 relative">
            <div className="absolute inset-0 z-0 rounded-2xl overflow-hidden opacity-10 pointer-events-none">
              <img src="https://static.wixstatic.com/media/b4fa1d_a81a7071e6264e1eb32320b39be8df2a~mv2.jpg" alt="Fundo formulário" className="w-full h-full object-cover grayscale mix-blend-overlay" />
            </div>
            <div className="bg-brand-800/60 p-8 rounded-2xl border border-brand-700/50 backdrop-blur-sm relative z-10">
              {status === "success" ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 bg-brand-green/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Mail className="w-8 h-8 text-brand-green" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Solicitação Recebida!</h3>
                  <p className="text-slate-400">Nossa equipe comercial entrará em contato em breve com a sua proposta.</p>
                  <button onClick={() => setStatus("idle")} className="mt-8 text-brand-green hover:text-white transition-colors">
                    Enviar nova solicitação
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Nome *</label>
                      <input required type="text" className="w-full bg-brand-900 border border-brand-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-green transition-colors" placeholder="Seu nome" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">E-mail *</label>
                      <input required type="email" className="w-full bg-brand-900 border border-brand-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-green transition-colors" placeholder="seu@email.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Telefone *</label>
                      <input required type="tel" className="w-full bg-brand-900 border border-brand-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-green transition-colors" placeholder="(00) 00000-0000" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">Razão Social *</label>
                      <input required type="text" className="w-full bg-brand-900 border border-brand-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-green transition-colors" placeholder="Nome da empresa" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-slate-300 mb-2">CNPJ *</label>
                      <input required type="text" className="w-full bg-brand-900 border border-brand-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-green transition-colors" placeholder="00.000.000/0000-00" />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-slate-300 mb-2">Mensagem (Opcional)</label>
                      <textarea rows={4} className="w-full bg-brand-900 border border-brand-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-brand-green transition-colors" placeholder="Detalhes da sua solicitação..."></textarea>
                    </div>
                  </div>
                  <button 
                    type="submit" 
                    disabled={status === "submitting"}
                    className="w-full bg-brand-green hover:bg-brand-green-glow text-brand-900 font-bold py-4 rounded-lg transition-colors disabled:opacity-70 relative overflow-hidden"
                  >
                    <span className="relative z-10">{status === "submitting" ? "Enviando..." : "Enviar Solicitação"}</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          <div className="w-full lg:w-1/3">
            <div className="bg-brand-900 border border-brand-800 p-8 rounded-2xl h-full shadow-xl">
              <h3 className="text-xl font-heading font-bold text-white mb-6">Contato Direto</h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-800 flex items-center justify-center shrink-0 border border-brand-700">
                    <Phone className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <p className="text-slate-300 font-medium mb-1">Comercial</p>
                    <p className="text-slate-400 text-sm">(34) 99811-8738</p>
                    <a href="https://wa.me/5534998118738" target="_blank" rel="noopener noreferrer" className="text-brand-green text-sm hover:underline mt-1 inline-block">Chamar no WhatsApp</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-800 flex items-center justify-center shrink-0 border border-brand-700">
                    <Phone className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <p className="text-slate-300 font-medium mb-1">Matriz / Atendimento</p>
                    <p className="text-slate-400 text-sm">(34) 3312-4890<br/>(34) 3315-9040</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-800 flex items-center justify-center shrink-0 border border-brand-700">
                    <Mail className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <p className="text-slate-300 font-medium mb-1">E-mail Comercial</p>
                    <p className="text-slate-400 text-sm">comercial@ativaserv.com.br</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-800 flex items-center justify-center shrink-0 border border-brand-700">
                    <MapPin className="w-5 h-5 text-brand-green" />
                  </div>
                  <div>
                    <p className="text-slate-300 font-medium mb-1">Sede</p>
                    <p className="text-slate-400 text-sm">Rua João Pinheiro, 33<br/>Centro, Uberaba/MG</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
