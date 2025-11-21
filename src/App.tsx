
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { AccessibilityMenu } from "@/components/AccessibilityMenu";
import { SiteBreadcrumb } from "@/components/Breadcrumb";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Mentoria from "./pages/Mentoria";
import Contact from "./pages/Contact";
import AccessibilityStatement from "./pages/AccessibilityStatement";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen flex flex-col bg-white">
          <Header />
          <SiteBreadcrumb />
          <main id="main-content" role="main" className="flex-1">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/sobre" element={<About />} />
              <Route path="/servicos" element={<Services />} />
              <Route path="/mentoria" element={<Mentoria />} />
              <Route path="/contato" element={<Contact />} />
              <Route path="/declaracao-acessibilidade" element={<AccessibilityStatement />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
          <AccessibilityMenu />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
