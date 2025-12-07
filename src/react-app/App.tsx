import { BrowserRouter as Router, Routes, Route } from "react-router";
import ScrollToTop from "@/react-app/components/ScrollToTop";
import HomePage from "@/react-app/pages/Home";
import NotFoundPage from "@/react-app/pages/NotFound";

// Overview pages
import ProductsPage from "@/react-app/pages/Products";
import ServicesPage from "@/react-app/pages/Services";
import IntegrationsPage from "@/react-app/pages/Integrations";
import AboutPage from "@/react-app/pages/About";
import ContactPage from "@/react-app/pages/Contact";
import PrivacyPage from "@/react-app/pages/Privacy";
import TermsPage from "@/react-app/pages/Terms";

// Product pages
import ProductDwTerminalPage from "@/react-app/pages/products/DwTerminal";
import ProductDwStationPage from "@/react-app/pages/products/DwStation";
import ProductTradeFramePage from "@/react-app/pages/products/TradeFrame";
import TradeCorpPage from "@/react-app/pages/products/TradeCorp";
import TradeGatePage from "@/react-app/pages/products/TradeGate";
import DwLoyaltyPage from "@/react-app/pages/products/DwLoyalty";

// Service pages
import ServiceAiSolutionsPage from "@/react-app/pages/services/AiSolutions";
import ServiceDigitalPlatformsPage from "@/react-app/pages/services/DigitalPlatforms";
import ServiceMobileDevelopmentPage from "@/react-app/pages/services/MobileDevelopment";
import ServiceProcessingSystemsPage from "@/react-app/pages/services/ProcessingSystems";
import ServiceIoTTerminalsPage from "@/react-app/pages/services/IoTTerminals";


export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        
        {/* Overview pages */}
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/integrations" element={<IntegrationsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />

        {/* Product pages */}
        <Route path="/products/dw-terminal" element={<ProductDwTerminalPage />} />
        <Route path="/products/dw-station" element={<ProductDwStationPage />} />
        <Route path="/products/trade-frame" element={<ProductTradeFramePage />} />
        <Route path="/products/trade-corp" element={<TradeCorpPage />} />
        <Route path="/products/trade-gate" element={<TradeGatePage />} />
        <Route path="/products/dw-loyalty" element={<DwLoyaltyPage />} />
        
        {/* Service pages */}
        <Route path="/services/ai-solutions" element={<ServiceAiSolutionsPage />} />
        <Route path="/services/digital-platforms" element={<ServiceDigitalPlatformsPage />} />
        <Route path="/services/mobile-development" element={<ServiceMobileDevelopmentPage />} />
        <Route path="/services/processing-systems" element={<ServiceProcessingSystemsPage />} />
        <Route path="/services/iot-terminals" element={<ServiceIoTTerminalsPage />} />

        {/* 404 */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Router>
  );
}
