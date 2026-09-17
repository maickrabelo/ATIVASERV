import { Phone, Mail, Clock } from "lucide-react";
import { Link } from "react-router-dom";

export function Contato() {
  return (
    <div className="relative py-24 bg-brand-900 overflow-hidden border-t border-brand-800">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://static.wixstatic.com/media/b4fa1d_3560c84921cb4c82b86028cb03d5e8ef~mv2.png" 
          alt="Fundo Contato" 
          className="w-full h-full object-cover opacity-20 mix-blend-overlay"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-4 block">
              Fale Conosco
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6 leading-tight">
              Pronto para otimizar os serviços da sua <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-green">empresa?</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 leading-relaxed">
              Entre em contato conosco e descubra como a Ativa Serviços pode transformar a gestão e a operação do seu negócio através da terceirização.
            </p>

            <div className="space-y-6 mb-10">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-800 rounded-lg flex items-center justify-center shrink-0 border border-brand-700">
                  <Phone className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Comercial</p>
                  <p className="text-white font-medium">(34) 99811-8738</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-800 rounded-lg flex items-center justify-center shrink-0 border border-brand-700">
                  <Mail className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Email</p>
                  <p className="text-white font-medium">contato@ativaserv.com.br</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-800 rounded-lg flex items-center justify-center shrink-0 border border-brand-700">
                  <Clock className="w-6 h-6 text-brand-accent" />
                </div>
                <div>
                  <p className="text-slate-400 text-sm">Horário de Atendimento</p>
                  <p className="text-white font-medium">Seg a Sex, 08:00 - 18:00</p>
                </div>
              </div>
            </div>
            
            <Link to="/orcamento" className="inline-flex justify-center items-center bg-brand-accent hover:bg-blue-600 text-white px-8 py-4 rounded-lg font-medium text-lg transition-all shadow-[0_0_20px_rgba(59,130,246,0.3)]">
              Solicitar Orçamento
            </Link>
          </div>

          <div className="bg-brand-800/80 backdrop-blur-sm border border-brand-700 p-8 rounded-2xl">
            <h3 className="text-2xl font-heading font-semibold text-white mb-6">Nossa Localização</h3>
            <p className="text-slate-400 mb-8">
              Rua João Pinheiro, 33, Centro<br/>
              Uberaba - MG, 38010-040
            </p>
            <Link to="/mapa" className="block relative group overflow-hidden rounded-xl bg-brand-900 border border-brand-700 aspect-video flex items-center justify-center hover:border-brand-accent transition-colors">
              <img 
                src="https://static.wixstatic.com/media/dbbdc91820535cbbeb0664011cb93255.png" 
                alt="Ver no Mapa" 
                className="w-16 h-16 object-contain group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-brand-900/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-brand-accent text-white px-4 py-2 rounded font-medium">Ver Mapa</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
