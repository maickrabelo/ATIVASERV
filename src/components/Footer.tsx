import { MapPin, Phone, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer id="contato" className="bg-brand-800 border-t border-brand-700 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-brand-accent to-brand-green rounded flex items-center justify-center font-heading font-bold text-white shadow-[0_0_10px_rgba(16,185,129,0.2)]">A</div>
              <Link to="/" className="font-heading font-bold text-xl tracking-tight text-white">ATIVA<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-green">SERV</span></Link>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Especialistas em fornecer soluções definitivas e personalizadas para o seu negócio através da excelência em terceirização.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-heading font-semibold mb-6">Navegação</h4>
            <ul className="space-y-3">
              <li><Link to="/quem-somos" className="text-slate-400 hover:text-brand-green text-sm transition-colors">Quem Somos</Link></li>
              <li><Link to="/solucoes" className="text-slate-400 hover:text-brand-green text-sm transition-colors">Soluções</Link></li>
              <li><Link to="/segmentos" className="text-slate-400 hover:text-brand-green text-sm transition-colors">Segmentos</Link></li>
              <li><Link to="/nossa-gente" className="text-slate-400 hover:text-brand-green text-sm transition-colors">Nossa Gente</Link></li>
              <li><Link to="/por-que-terceirizar" className="text-slate-400 hover:text-brand-green text-sm transition-colors">Por que Terceirizar</Link></li>
              <li><Link to="/desenvolvimento-sustentavel" className="text-slate-400 hover:text-brand-green text-sm transition-colors">Desenvolvimento Sustentável</Link></li>
              <li><a href="https://vagas.ativaserv.com.br" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-brand-green text-sm transition-colors">Trabalhe Conosco</a></li>
              <li><Link to="/ouvidoria" className="text-slate-400 hover:text-brand-green text-sm transition-colors">Ouvidoria</Link></li>
              <li><Link to="/politicas" className="text-slate-400 hover:text-brand-green text-sm transition-colors">Políticas e Documentos</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-heading font-semibold mb-6">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-slate-400">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0 mt-0.5" />
                <span>Rua João Pinheiro, 33, Centro<br/>Uberaba - MG</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Phone className="w-5 h-5 text-brand-accent shrink-0" />
                <span>(34) 3312-4890 / 3315-9040</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Phone className="w-5 h-5 text-brand-accent shrink-0" />
                <span>Comercial: (34) 99811-8738</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-400">
                <Mail className="w-5 h-5 text-brand-accent shrink-0" />
                <span>contato@ativaserv.com.br</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-heading font-semibold mb-6">Trabalhe Conosco</h4>
            <p className="text-slate-400 text-sm leading-relaxed mb-4">
              Venha fazer parte da equipe Ativa Serviços. Estamos sempre em busca de talentos.
            </p>
            <a href="https://vagas.ativaserv.com.br" target="_blank" rel="noopener noreferrer" className="inline-block bg-brand-700 hover:bg-brand-600 text-white px-5 py-2.5 rounded text-sm font-medium transition-colors border border-brand-600">
              Ver vagas disponíveis
            </a>
          </div>
        </div>
        
        <div className="pt-8 border-t border-brand-700 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-xs">
            &copy; {new Date().getFullYear()} Ativa Serviços Terceirizados. Todos os direitos reservados.
          </p>
          <div className="text-slate-500 text-xs flex gap-4 flex-wrap">
            <Link to="/fornecedores" className="hover:text-slate-300 transition-colors">Para Fornecedores</Link>
            <Link to="/colaborador" className="hover:text-slate-300 transition-colors">Portal do Colaborador</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
