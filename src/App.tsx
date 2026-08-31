import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WhatsAppButton, MobileStickyBar } from "./components/WhatsAppButton";
import { ScrollToTop } from "./components/ScrollToTop";
import { isPhoneConfigured, isWhatsAppConfigured } from "./lib/whatsapp";
import { cn } from "./lib/utils";
import { LanguageProvider } from "./i18n/LanguageContext";
import { Home } from "./pages/Home";
import { Rooms } from "./pages/Rooms";
import { RoomDetail } from "./pages/RoomDetail";
import { Shops } from "./pages/Shops";
import { GalleryPage } from "./pages/GalleryPage";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";

function App() {
  const hasStickyBar = isWhatsAppConfigured || isPhoneConfigured;

  return (
    <LanguageProvider>
      <div className="flex min-h-screen flex-col">
        <ScrollToTop />
        <Navbar />

        <main className={cn("flex-1", hasStickyBar && "pb-16 sm:pb-0")}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/rooms/:roomId" element={<RoomDetail />} />
            <Route path="/shops" element={<Shops />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        <Footer />
        <WhatsAppButton />
        <MobileStickyBar />
      </div>
    </LanguageProvider>
  );
}

export default App;
