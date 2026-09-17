import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

export function MainLayout() {
  return (
    <div className="min-h-screen bg-brand-900 font-sans selection:bg-brand-accent/30 selection:text-white antialiased flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <Outlet />
      </main>
      <Footer />
      <a href="https://wa.me/5534998118738" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 hover:scale-110 transition-transform">
        <img src="https://static.wixstatic.com/media/b4fa1d_ad83c65ec7e94a2e9d8d2aff571a81a7~mv2.png" alt="WhatsApp" className="w-14 h-14 object-contain shadow-lg rounded-full" />
      </a>
    </div>
  );
}
