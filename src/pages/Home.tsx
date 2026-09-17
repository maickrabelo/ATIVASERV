import { Hero } from "../components/Hero";
import { Services } from "../components/Services";
import { Timeline } from "../components/Timeline";
import { HomeSegmentos } from "../components/HomeSegmentos";
import { OutsourcingComparison } from "../components/OutsourcingComparison";
import { Contato } from "../components/Contato";

export function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <div className="py-24 bg-brand-900 border-t border-brand-800 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <OutsourcingComparison />
        </div>
      </div>
      <Timeline />
      <HomeSegmentos />
      <Contato />
    </div>
  );
}
