import { motion } from "motion/react";
import { Sparkles, Key, Leaf, HeartPulse, Building, Droplets } from "lucide-react";
import { Link } from "react-router-dom";

const SERVICES = [
  { icon: Sparkles, title: "Limpeza e Conservação", desc: "Equipes qualificadas para manter a higiene e organização do seu ambiente com produtos de alta performance.", link: "/limpeza" },
  { icon: Key, title: "Portaria 24h", desc: "Controle de acesso rigoroso e tecnologia aliada à segurança preventiva para condomínios e empresas.", link: "/portaria" },
  { icon: Leaf, title: "Jardinagem", desc: "Manutenção e revitalização de áreas verdes, unindo estética e preservação ambiental.", link: "/jardinagem" },
  { icon: HeartPulse, title: "Higienização Hospitalar", desc: "Processos técnicos específicos para garantir a desinfecção e segurança de ambientes de saúde.", link: "/higienizacaohospitalar" },
  { icon: Building, title: "Recepção", desc: "Atendimento acolhedor e profissional, sendo o cartão de visita perfeito para sua corporação.", link: "/solucoes" },
  { icon: Droplets, title: "Tratamento de Piscinas", desc: "Especialistas em qualidade da água, tratamento e medição do PH para clubes de campo e condomínios.", link: "/solucoes" }
];

export function Services() {
  return (
    <section id="solucoes" className="py-24 bg-brand-900 relative">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-brand-green/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-brand-green font-semibold tracking-wider uppercase text-sm mb-3">Nossas Soluções</h2>
            <h3 className="text-3xl md:text-5xl font-heading font-bold text-white mb-4">Terceirização de Alta Performance</h3>
            <p className="text-slate-400 text-lg">
              Deixe a Ativa Serviços cuidar das atividades complementares enquanto você foca no que realmente importa: a atividade-fim do seu negócio.
            </p>
          </div>
          <div>
            <Link to="/solucoes" className="inline-flex justify-center items-center gap-2 bg-brand-800 hover:bg-brand-700 text-white border border-brand-700 px-6 py-3 rounded-lg font-medium transition-all hover:border-brand-600">
              Ver todos os serviços
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={service.link} className="block h-full bg-brand-800/30 border border-brand-800 hover:border-brand-green/50 p-8 rounded-2xl group transition-all duration-300 hover:-translate-y-1 hover:bg-brand-800/50">
                <div className="w-14 h-14 rounded-xl bg-brand-900 border border-brand-700 flex items-center justify-center mb-6 group-hover:bg-brand-green/10 group-hover:border-brand-green/30 transition-colors">
                  <service.icon className="w-7 h-7 text-brand-accent group-hover:text-brand-green transition-colors" />
                </div>
                <h4 className="text-xl font-heading font-semibold text-white mb-3">{service.title}</h4>
                <p className="text-slate-400 leading-relaxed">
                  {service.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
