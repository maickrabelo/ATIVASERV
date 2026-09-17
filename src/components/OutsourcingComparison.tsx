import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import { MoveHorizontal } from "lucide-react";

const DEPARTMENTS = [
  {
    name: "RECURSOS HUMANOS",
    tasks: [
      { name: "Recrutamento e Seleção", who: "ativa" },
      { name: "Exames Admissionais, Periódicos e Demissionais", who: "ativa" },
      { name: "Programas de Segurança do Trabalho", who: "ativa" },
      { name: "Integração", who: "ativa" },
      { name: "Gestão da Performance", who: "ativa" },
      { name: "Substituição de Pessoal", who: "ativa" },
      { name: "Headcount", who: "ativa" },
      { name: "Entrevista de Desligamento", who: "ativa" }
    ]
  },
  {
    name: "DEPARTAMENTO PESSOAL",
    tasks: [
      { name: "Admissão de Pessoal", who: "ativa" },
      { name: "Programação de Férias", who: "ativa" },
      { name: "Gestão do Ponto", who: "ativa" },
      { name: "Folha de Pagamentos", who: "ativa" },
      { name: "Benefícios", who: "ativa" }
    ]
  },
  {
    name: "FINANCEIRO",
    tasks: [
      { name: "Pagamento de Folha e Benefícios", who: "ativa" },
      { name: "Pagamento de Férias", who: "ativa" },
      { name: "Pagamento de Rescisões", who: "ativa" },
      { name: "Pagamento de Fornecedores", who: "cliente" }
    ]
  },
  {
    name: "SUPRIMENTOS",
    tasks: [
      { name: "Compra de EPI's e Uniformes", who: "ativa" },
      { name: "Compra de Equipamentos", who: "ativa" },
      { name: "Compra de Materiais e Insumos", who: "ativa" }
    ]
  },
  {
    name: "OPERAÇÃO",
    tasks: [
      { name: "Planejamento e da Operação, Checklists e Fluxogramas", who: "ativa" },
      { name: "Coordenação e Supervisão da Operação", who: "ativa" },
      { name: "Avaliação e Recebimento dos Serviços", who: "cliente" },
      { name: "Substituição de Pessoal em Faltas/Férias, Atestados/Afastamentos", who: "ativa" },
      { name: "Treinamentos Técnicos e Funcionários", who: "ativa" },
      { name: "Logística de Materiais, Insumos e Equipamentos", who: "ativa" },
      { name: "Manutenção de Equipamentos", who: "ativa" },
      { name: "Gestão de EPI's e Uniformes", who: "ativa" }
    ]
  },
  {
    name: "CONTABILIDADE",
    tasks: [
      { name: "Tem crédito de PIS e COFINS*", who: "ativa", nameSem: "Não tem crédito de PIS e COFINS*" },
      { name: "Tem crédito de IRPJ e CSLL*", who: "ativa", nameSem: "Não tem crédito de IRPJ e CSLL*" }
    ]
  },
  {
    name: "JURÍDICO",
    tasks: [
      { name: "Responsabilidade Trabalhista", who: "ativa" }
    ]
  }
];

function TableContent({ isAtiva }: { isAtiva: boolean }) {
  return (
    <div className="w-full min-w-[800px] lg:min-w-0 pr-4">
      {DEPARTMENTS.map((dept, idx) => (
        <div key={idx} className="flex gap-4 items-stretch mb-4 border-b border-brand-800/50 pb-4 last:border-0 last:pb-0">
          <div className="w-48 shrink-0 flex items-center">
            <span className="text-white font-bold text-sm leading-tight">{dept.name}</span>
          </div>
          <div className="flex flex-wrap gap-2 flex-grow">
            {dept.tasks.map((task, tIdx) => {
              const isClientOnly = !isAtiva;
              const isTaskByClient = task.who === "cliente";
              const isOrange = isClientOnly || isTaskByClient;
              
              return (
                <div
                  key={tIdx}
                  className={`
                    flex items-center justify-center text-center p-3 rounded-md text-xs font-medium w-[140px] shadow-sm transition-colors duration-300
                    ${isOrange 
                      ? "bg-orange-500/90 text-white" 
                      : "bg-brand-green text-brand-900"}
                  `}
                >
                  {isClientOnly ? (task.nameSem || task.name) : task.name}
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}

export function OutsourcingComparison() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percentage = (x / rect.width) * 100;
    setSliderPosition(percentage);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      const handleMouseMove = (e: MouseEvent) => handleMove(e.clientX);
      const handleTouchMove = (e: TouchEvent) => handleMove(e.touches[0].clientX);
      
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('touchend', handleMouseUp);
      
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleMouseUp);
      };
    }
  }, [isDragging]);

  return (
    <div className="w-full bg-brand-900 border border-brand-800 rounded-2xl p-6 md:p-10 shadow-xl overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-20">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-brand-green rounded-full blur-[150px]"></div>
      </div>

      <div className="relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-2">
            A Diferença é <span className="text-brand-green">Nítida</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Arraste para comparar a gestão sobrecarregada (Sem Terceirização) com a eficiência de ter a Ativa cuidando de tudo.
          </p>
        </div>

        <div className="overflow-x-auto pb-6 custom-scrollbar">
          <div 
            ref={containerRef}
            className="relative min-w-[800px] lg:min-w-0 select-none cursor-ew-resize touch-none"
            onMouseDown={(e) => {
              setIsDragging(true);
              handleMove(e.clientX);
            }}
            onTouchStart={(e) => {
              setIsDragging(true);
              handleMove(e.touches[0].clientX);
            }}
          >
            {/* Base Layer: Sem Terceirização (Right side effectively, though rendered full width) */}
            <div className="w-full bg-brand-900/50 rounded-xl p-6 border border-brand-800">
              <div className="flex justify-end mb-6">
                <div className="bg-orange-500/20 text-orange-400 border border-orange-500/30 px-4 py-1.5 rounded-lg text-sm font-bold uppercase tracking-wider">
                  Sem Terceirização
                </div>
              </div>
              <TableContent isAtiva={false} />
            </div>

            {/* Overlay Layer: Com a Ativa (Left side) */}
            <div 
              className="absolute top-0 left-0 w-full h-full bg-brand-900 rounded-xl p-6 border border-brand-700 pointer-events-none"
              style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
            >
              <div className="flex justify-start mb-6">
                <div className="bg-brand-green/20 text-brand-green border border-brand-green/30 px-4 py-1.5 rounded-lg text-sm font-bold uppercase tracking-wider">
                  Com a Ativa
                </div>
              </div>
              <TableContent isAtiva={true} />
            </div>

            {/* Slider Handle */}
            <div 
              className="absolute top-0 bottom-0 w-1 bg-brand-green cursor-ew-resize z-20 shadow-[0_0_10px_rgba(11,219,165,0.5)]"
              style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-brand-green rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(11,219,165,0.4)] hover:scale-110 transition-transform border-4 border-brand-900 pointer-events-auto">
                <MoveHorizontal className="w-6 h-6 text-brand-900" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-6 border-t border-brand-800 flex flex-wrap gap-6 justify-center items-center">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-orange-500/90 shadow-sm"></div>
            <span className="text-slate-300 text-sm font-medium uppercase tracking-wider">Responsabilidade do Cliente</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-brand-green shadow-sm"></div>
            <span className="text-slate-300 text-sm font-medium uppercase tracking-wider">Responsabilidade da Ativa</span>
          </div>
        </div>
      </div>
    </div>
  );
}
