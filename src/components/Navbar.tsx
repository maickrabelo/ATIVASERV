import { motion } from "motion/react";
import { Menu, X, Phone } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-900/80 backdrop-blur-md border-b border-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0 flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-brand-accent to-brand-green rounded-lg flex items-center justify-center font-heading font-bold text-xl text-white shadow-[0_0_15px_rgba(16,185,129,0.3)]">A</div>
            <span className="font-heading font-bold text-2xl tracking-tight text-white">ATIVA<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-green">SERV</span></span>
          </Link>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link to="/quem-somos" className="text-slate-300 hover:text-brand-green px-3 py-2 rounded-md font-medium transition-colors">Quem Somos</Link>
              <Link to="/solucoes" className="text-slate-300 hover:text-brand-green px-3 py-2 rounded-md font-medium transition-colors">Soluções</Link>
              <Link to="/segmentos" className="text-slate-300 hover:text-brand-green px-3 py-2 rounded-md font-medium transition-colors">Segmentos</Link>
              <Link to="/nossa-gente" className="text-slate-300 hover:text-brand-green px-3 py-2 rounded-md font-medium transition-colors">Nossa Gente</Link>
              <Link to="/desenvolvimento-sustentavel" className="text-slate-300 hover:text-brand-green px-3 py-2 rounded-md font-medium transition-colors">Sustentabilidade</Link>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-4">
             <div className="flex items-center gap-2 text-slate-300 text-sm">
                <Phone className="w-4 h-4 text-brand-accent" />
                <span>(34) 99811-8738</span>
             </div>
             <Link to="/orcamento" className="bg-brand-accent hover:bg-brand-accent-glow text-white px-5 py-2.5 rounded-md font-medium transition-colors shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(96,165,250,0.5)]">
               Orçamento
             </Link>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-brand-800 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-brand-800 border-b border-brand-700"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/quem-somos" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white block px-3 py-2 rounded-md font-medium">Quem Somos</Link>
            <Link to="/solucoes" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white block px-3 py-2 rounded-md font-medium">Soluções</Link>
            <Link to="/segmentos" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white block px-3 py-2 rounded-md font-medium">Segmentos</Link>
            <Link to="/nossa-gente" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white block px-3 py-2 rounded-md font-medium">Nossa Gente</Link>
            <Link to="/desenvolvimento-sustentavel" onClick={() => setIsOpen(false)} className="text-slate-300 hover:text-white block px-3 py-2 rounded-md font-medium">Sustentabilidade</Link>
            <div className="pt-4 mt-4 border-t border-brand-700">
               <div className="flex items-center gap-2 text-slate-300 px-3 py-2">
                 <Phone className="w-4 h-4 text-brand-accent" />
                 <span>(34) 99811-8738</span>
               </div>
               <Link to="/orcamento" onClick={() => setIsOpen(false)} className="mt-2 block text-center bg-brand-accent text-white px-5 py-3 rounded-md font-medium">
                 Orçamento
               </Link>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
