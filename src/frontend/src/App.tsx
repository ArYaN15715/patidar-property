import FloatingButtons from "./components/FloatingButtons";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./pages/HeroSection";
import HowWeWork from "./pages/HowWeWork";
import ListingsSection from "./pages/ListingsSection";
import LocationMap from "./pages/LocationMap";
import Testimonials from "./pages/Testimonials";
import WhatsAppCTA from "./pages/WhatsAppCTA";
import WhyChooseUs from "./pages/WhyChooseUs";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        {/* ListingsSection renders ActionBar internally with shared filter state */}
        <ListingsSection />
        <WhyChooseUs />
        <HowWeWork />
        <Testimonials />
        <WhatsAppCTA />
        <LocationMap />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}
