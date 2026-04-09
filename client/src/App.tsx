import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useEffect } from "react";
import { useLocation } from "wouter";

import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Disciplines from "./pages/Disciplines";
import Segments from "./pages/Segments";
import Eletrica from "./pages/Eletrica";

import Contact from "./pages/Contact";
import ServiceDetail from "./pages/ServiceDetail";
import DisciplineDetail from "./pages/DisciplineDetail";
import SegmentDetail from "./pages/SegmentDetail";
import TermsOfUse from "./pages/TermsOfUse";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/sobre"} component={About} />
      <Route path={"/servicos"} component={Services} />
      <Route path={"/disciplinas"} component={Disciplines} />
      <Route path={"/segmentos"} component={Segments} />
      <Route path={"/eletrica"} component={Eletrica} />

      <Route path={"/servico/:id"} component={ServiceDetail} />
      <Route path={"/disciplina/:id"} component={DisciplineDetail} />
      <Route path={"/segmento/:id"} component={SegmentDetail} />
      <Route path={"/contato"} component={Contact} />
      <Route path={"/termos-de-uso"} component={TermsOfUse} />
      <Route path={"/politica-de-privacidade"} component={PrivacyPolicy} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} /></Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <ScrollToTop />
            <div className="flex-1">
              <Router />
            </div>
            <Footer />

          </div>
          <Toaster />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
