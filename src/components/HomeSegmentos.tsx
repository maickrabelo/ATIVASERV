import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export function HomeSegmentos() {
  const images = [
    { src: "https://static.wixstatic.com/media/b4fa1d_007016d07b6449008b6e08e5448151ef~mv2.jpg", alt: "Segmentos de Atuação 1" },
    { src: "https://static.wixstatic.com/media/b4fa1d_6b0ec4aa6cf94e32b5ef4c6a8388730c~mv2.jpg", alt: "Segmentos de Atuação 2" },
    { src: "https://static.wixstatic.com/media/b4fa1d_cdc4cd0a3cbc49ff8222924f4fec3093~mv2.jpg", alt: "Segmentos de Atuação 3" },
    { src: "https://static.wixstatic.com/media/b4fa1d_95b98d9890c44c0fad9c5cfe982b7d4e~mv2.jpg", alt: "Segmentos de Atuação 4" }
  ];

  return (
    <div className="py-24 bg-brand-900 border-t border-brand-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-accent font-semibold tracking-wider uppercase text-sm mb-4 block">
              Atuação Nacional
            </span>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-6">
              Segmentos de <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-accent to-brand-green">Atuação</span>
            </h2>
            <p className="text-lg text-slate-400">
              Personalizamos nossos serviços para atender às exigências específicas de diversos setores do mercado.
            </p>
          </div>
          <Link to="/segmentos" className="inline-flex items-center gap-2 text-brand-accent hover:text-brand-green font-medium transition-colors group">
            Ver todos os segmentos <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((img, index) => (
            <div key={index} className="rounded-2xl overflow-hidden aspect-square relative group">
              <img 
                src={img.src} 
                alt={img.alt} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
