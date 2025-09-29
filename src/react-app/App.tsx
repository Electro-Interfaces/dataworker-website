import { BrowserRouter as Router, Routes, Route } from "react-router";
import HomePage from "@/react-app/pages/Home";

// Overview pages
import ProductsPage from "@/react-app/pages/Products";
import EcosystemPage from "@/react-app/pages/Ecosystem";
import ServicesPage from "@/react-app/pages/Services";
import SolutionsPage from "@/react-app/pages/Solutions";
import IntegrationsPage from "@/react-app/pages/Integrations";
import CasesPage from "@/react-app/pages/Cases";
import AboutPage from "@/react-app/pages/About";
import ContactPage from "@/react-app/pages/Contact";

// Product pages
import ProductDwTerminalPage from "@/react-app/pages/products/DwTerminal";
import ProductDwStationPage from "@/react-app/pages/products/DwStation";
import ProductTradeFramePage from "@/react-app/pages/products/TradeFrame";
import TradeCorpPage from "@/react-app/pages/products/TradeCorp";
import TradeGatePage from "@/react-app/pages/products/TradeGate";

// Service pages
import ServiceAiSolutionsPage from "@/react-app/pages/services/AiSolutions";
import ServiceCustomerPortalsPage from "@/react-app/pages/services/CustomerPortals";
import ServiceMobileAppsPage from "@/react-app/pages/services/MobileApps";
import ServiceProcessingSolutionsPage from "@/react-app/pages/services/ProcessingSolutions";
import ServiceTerminalDevelopmentPage from "@/react-app/pages/services/TerminalDevelopment";
import ServiceHostToHostPage from "@/react-app/pages/services/HostToHost";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {/* Overview pages */}
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/ecosystem" element={<EcosystemPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/integrations" element={<IntegrationsPage />} />
        <Route path="/cases" element={<CasesPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        {/* Product pages */}
        <Route path="/products/dw-terminal" element={<ProductDwTerminalPage />} />
        <Route path="/products/dw-station" element={<ProductDwStationPage />} />
        <Route path="/products/trade-frame" element={<ProductTradeFramePage />} />
        <Route path="/products/trade-corp" element={<TradeCorpPage />} />
        <Route path="/products/trade-gate" element={<TradeGatePage />} />
        
        {/* Service pages */}
        <Route path="/services/ai-solutions" element={<ServiceAiSolutionsPage />} />
        <Route path="/services/customer-portals" element={<ServiceCustomerPortalsPage />} />
        <Route path="/services/mobile-apps" element={<ServiceMobileAppsPage />} />
        <Route path="/services/processing-solutions" element={<ServiceProcessingSolutionsPage />} />
        <Route path="/services/terminal-development" element={<ServiceTerminalDevelopmentPage />} />
        <Route path="/services/host-to-host" element={<ServiceHostToHostPage />} />
      </Routes>
    </Router>
  );
}
