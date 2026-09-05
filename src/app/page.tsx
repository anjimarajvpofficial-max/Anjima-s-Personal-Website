import Hero from "@/components/sections/Hero";
import Statement from "@/components/sections/Statement";
import Transmissions from "@/components/sections/Transmissions";
import Services from "@/components/sections/Services";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import ControlRoom from "@/components/sections/ControlRoom";
import About from "@/components/sections/About";
import Formula from "@/components/sections/Formula";
import Insights from "@/components/sections/Insights";
import Footer from "@/components/sections/Footer";
import Preloader from "@/components/ui/Preloader";
import Navigation from "@/components/ui/Navigation";
import HUD from "@/components/ui/HUD";

export default function Home() {
  return (
    <main className="w-full bg-ink min-h-screen text-paper  selection:bg-accent selection:text-paper relative">
      <Preloader />
      <Navigation />
      <HUD />
            <Hero />
      <Statement />
      <Transmissions />
      <Services />
      <Process />
      <Testimonials />
      <ControlRoom />
      <About />
      <Formula />
      <Insights />
      <Footer />
    </main>
  );
}
