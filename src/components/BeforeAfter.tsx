import { useState, useRef, useEffect, MouseEvent, TouchEvent } from "react";
import { MoveHorizontal } from "lucide-react";

export function BeforeAfter() {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!isDragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
    const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
    setSliderPosition(percent);
  };

  const onMouseMove = (e: globalThis.MouseEvent) => {
    handleMove(e.clientX);
  };

  const onTouchMove = (e: globalThis.TouchEvent) => {
    handleMove(e.touches[0].clientX);
  };

  const onMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", onMouseMove);
      window.addEventListener("mouseup", onMouseUp);
      window.addEventListener("touchmove", onTouchMove, { passive: false });
      window.addEventListener("touchend", onMouseUp);
    } else {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("touchend", onMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="py-24 bg-brand-900 border-t border-brand-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none opacity-20">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-brand-green rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">
            A Diferença é <span className="text-brand-green">Nítida</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Transformamos ambientes através de limpeza especializada e técnicas profissionais.
          </p>
        </div>

        <div 
          ref={containerRef}
          className="relative w-full aspect-[4/3] md:aspect-[16/9] overflow-hidden rounded-2xl select-none cursor-ew-resize touch-none shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-brand-700/50"
          onMouseDown={(e: MouseEvent) => {
            setIsDragging(true);
            handleMove(e.clientX);
          }}
          onTouchStart={(e: TouchEvent) => {
            setIsDragging(true);
            handleMove(e.touches[0].clientX);
          }}
        >
          {/* Image 2 (After) */}
          <div className="absolute inset-0 w-full h-full">
            <img 
              src="https://static.wixstatic.com/media/b4fa1d_b269af104d114f4480817d16f77eb0b3~mv2.jpeg" 
              alt="Depois" 
              className="w-full h-full object-cover"
              draggable="false"
            />
            <div className="absolute top-4 right-4 bg-brand-900/90 backdrop-blur-md text-brand-green px-4 py-1.5 rounded-lg text-sm font-bold border border-brand-700/50 uppercase tracking-wider shadow-lg">
              Depois
            </div>
          </div>

          {/* Image 1 (Before) clipped */}
          <div 
            className="absolute inset-0 w-full h-full"
            style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
          >
            <img 
              src="https://static.wixstatic.com/media/b4fa1d_f8ee092722d644f2baab1d02d7c3406e~mv2.jpeg" 
              alt="Antes" 
              className="w-full h-full object-cover"
              draggable="false"
            />
            <div className="absolute top-4 left-4 bg-brand-900/90 backdrop-blur-md text-slate-300 px-4 py-1.5 rounded-lg text-sm font-bold border border-brand-700/50 uppercase tracking-wider shadow-lg">
              Antes
            </div>
          </div>

          {/* Slider line and button */}
          <div 
            className="absolute top-0 bottom-0 w-1 bg-brand-green cursor-ew-resize z-10 shadow-[0_0_10px_rgba(11,219,165,0.5)]"
            style={{ left: `${sliderPosition}%`, transform: 'translateX(-50%)' }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-brand-green rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(11,219,165,0.4)] hover:scale-110 transition-transform border-4 border-brand-900">
              <MoveHorizontal className="w-6 h-6 text-brand-900" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
