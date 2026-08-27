import About from "../sections/About";
import HeroSection from "../sections/Hero";

import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import { cn } from "@/lib/utils";
import { StickyDock } from "@/components/portafolio/sticky-dock";
import { MobileNavDots } from "@/components/portafolio/MobileNavDots";
import Skills from "../sections/Skills";
import { Projectos } from "../sections/Projectos";
import { Experience } from "../sections/Experience";
import { Contact } from "../sections/Contact";
import { Footer } from "../sections/Footer";

const Portfolio = () => {
  return (
    <div className="min-h-screen">
      <AnimatedGridPattern
        numSquares={40}
        maxOpacity={0.1}
        duration={1}
        repeatDelay={1}
        className={cn(
          "fixed inset-0 h-screen w-screen",
          "[mask-image:radial-gradient(ellipse_120%_80%_at_center,white_30%,transparent_85%)]",
          "skew-y-6",
        )}
      />
      <main>
        <HeroSection />
        <About />
        <Skills />
        <Projectos />
        <Experience />
        <Contact />
      </main>

      <Footer />

      {/* Dock sticky para desktop */}
      <StickyDock />
      {/* Navegación por puntos y menú para mobile */}
      <MobileNavDots />
    </div>
  );
};

export default Portfolio;
