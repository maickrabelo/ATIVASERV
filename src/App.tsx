import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { Home } from "./pages/Home";
import { QuemSomos } from "./pages/QuemSomos";
import { Solucoes } from "./pages/Solucoes";
import { Segmentos } from "./pages/Segmentos";
import { NossaGente } from "./pages/NossaGente";
import { PorQueTerceirizar } from "./pages/PorQueTerceirizar";
import { Orcamento } from "./pages/Orcamento";
import { 
  Fornecedores, Politicas, Mapa, TrabalheConosco, Colaborador, 
  InstitucionalPdf, Teste, EntrevistaOnline, Culturativa, 
  Formularios, Ouvidoria, CCT, Club 
} from "./pages/Institutional";
import { Limpeza, Portaria, Jardinagem, HigienizacaoHospitalar } from "./pages/ServicesPages";
import { Sustentabilidade } from "./pages/Sustentabilidade";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="quem-somos" element={<QuemSomos />} />
          <Route path="solucoes" element={<Solucoes />} />
          <Route path="segmentos" element={<Segmentos />} />
          <Route path="nossa-gente" element={<NossaGente />} />
          <Route path="por-que-terceirizar" element={<PorQueTerceirizar />} />
          <Route path="desenvolvimento-sustentavel" element={<Sustentabilidade />} />
          <Route path="orcamento" element={<Orcamento />} />
          
          <Route path="fornecedores" element={<Fornecedores />} />
          <Route path="politicas" element={<Politicas />} />
          <Route path="mapa" element={<Mapa />} />
          <Route path="trabalhe-conosco" element={<TrabalheConosco />} />
          <Route path="colaborador" element={<Colaborador />} />
          <Route path="institucionalpdf" element={<InstitucionalPdf />} />
          <Route path="teste" element={<Teste />} />
          <Route path="entrevistaonline" element={<EntrevistaOnline />} />
          
          <Route path="jardinagem" element={<Jardinagem />} />
          <Route path="limpeza" element={<Limpeza />} />
          <Route path="portaria" element={<Portaria />} />
          <Route path="higienizacaohospitalar" element={<HigienizacaoHospitalar />} />
          
          <Route path="culturativa" element={<Culturativa />} />
          <Route path="formularios" element={<Formularios />} />
          <Route path="ouvidoria" element={<Ouvidoria />} />
          
          <Route path="cct244" element={<CCT title="CCT Uberaba e Região" id="cct244" />} />
          <Route path="cct186" element={<CCT title="CCT Ipatinga e Vale do Aço" id="cct186" />} />
          <Route path="cct523" element={<CCT title="CCT Uberlândia" id="cct523" />} />
          <Route path="cct2026ura" element={<CCT title="CCT Uberaba" id="cct2026ura" />} />
          <Route path="cct4455" element={<CCT title="CCT Teófilo Otoni" id="cct4455" />} />
          <Route path="interiorsp" element={<CCT title="CCT Interior de São Paulo" id="interiorsp" />} />
          
          <Route path="club" element={<Club />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
