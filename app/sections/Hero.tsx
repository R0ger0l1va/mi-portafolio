"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { portfolioData } from "@/data/portfolioData";
import { useTranslations } from "next-intl";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { AuroraText } from "@/components/ui/aurora-text";
import { useTheme } from "next-themes";
import { HoverImage } from "@/components/portafolio/hover-image";
import { ChevronDown } from "lucide-react";
import { useEffect, useState } from "react";
import ExtraInfoModal from "@/components/portafolio/ExtraInfoModal";
import { DockDemo } from "@/components/portafolio/portfolioDock";

export default function HeroSection() {
  const { personal } = portfolioData;
  const { theme } = useTheme();
  const t = useTranslations("hero");


  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };
  const [showPersonalModal, setShowPersonalModal] = useState(false);

  const { scrollY } = useScroll();
  const avatarY = useTransform(scrollY, [0, 500], [0, 150]);
  const avatarOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setShowPersonalModal(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const blackColors = [
    "#FEFEFE",
    "#FFF0F0",
    "#FECACA",
    "#F87171",
    "#DC2626",
    "#B91C1C",
    "#FCA5A5",
  ];
  const whiteColors = [
    "#050505",
    "#2D0A0A",
    "#5C1A1A",
    "#DC2626",
    "#EF4444",
    "#F87171",
    "#7F1D1D",
  ];
  const auroraColors = theme === "dark" ? blackColors : whiteColors;

  return (
    <section id="hero" className="relative min-h-screen overflow-hidden">
      {/* Background Beams Placeholder */}
      <div className="absolute inset-0 z-0"></div>

      {/* VISTA MOBILE (sm:hidden): Flex Col vertical con foto PRIMERO y títulos DESPUÉS */}
      <div className="flex sm:hidden flex-col items-center justify-between min-h-screen pt-12 pb-16 px-4 relative z-10 gap-6">
        {/* 1. Foto / Avatar primero */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-[280px] h-[35vh] max-h-[300px] flex items-center justify-center shrink-0"
        >
          <motion.button
            onClick={() => setShowPersonalModal(true)}
            className="w-full h-full cursor-pointer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            aria-label={t("ariaLabelAvatar")}
          >
            <HoverImage
              src={personal.avatar}
              alt={personal.name}
              hoverText={t("hoverText")}
              className="w-full h-full"
            />
          </motion.button>
        </motion.div>

        {/* 2. Títulos y Mensajes después */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="flex flex-col items-center text-center gap-3 w-full"
        >
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-black text-foreground">
              {t("greeting")}
            </span>
            <h1 className="text-3xl font-black text-red-500 leading-tight tracking-tight">
              <AuroraText colors={auroraColors}>{personal.name}</AuroraText>
            </h1>
          </div>

          <div className="flex justify-center w-full min-h-[40px]">
            <TypingAnimation
              words={t.raw("titles") as string[]}
              colors={auroraColors}
              aurora
              loop
              className="text-xl font-bold text-red-500"
            />
          </div>

          <p className="font-['Manrope'] font-extrabold text-xs tracking-tight text-foreground/90 max-w-[90%]">
            <span className="text-primary">&ldquo;</span>
            {t("quote")}
            <span className="text-primary">&rdquo;</span>
          </p>
        </motion.div>

        {/* 3. Indicador ChevronDown en mobile */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          onClick={scrollToNext}
          className="text-muted-foreground hover:text-primary transition-colors mt-auto"
          aria-label={t("ariaLabelNext")}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-8 h-8" />
          </motion.div>
        </motion.button>
      </div>

      {/* VISTA DESKTOP (hidden sm:block): Layout original flotante con animaciones parallax */}
      <div className="hidden sm:block h-screen w-full relative">
        {/* Texto - capa 10 */}
        <motion.div
          style={{ y: avatarY, opacity: avatarOpacity }}
          className="absolute z-10 flex items-center
            top-[15%] px-8
            md:top-[20%] md:px-10
            lg:top-50 lg:px-12"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <div className="flex flex-col gap-3 md:gap-4 sm:max-w-[60%] md:max-w-[65%]">
            <section className="flex gap-3 md:gap-5 items-baseline flex-wrap">
              <span className="text-[7vw] md:text-[8vw] font-black leading-tight">
                {t("greeting")}
              </span>
              <h1 className="text-[7vw] md:text-[8vw] text-red-500 font-black leading-none tracking-tight">
                <AuroraText colors={auroraColors}>{personal.name}</AuroraText>
              </h1>
            </section>

            <section className="flex gap-3 md:gap-5 flex-row">
              <TypingAnimation
                words={t.raw("titles") as string[]}
                colors={auroraColors}
                aurora
                loop
                className="text-[5vh] md:text-[7vh] font-bold text-red-500"
              />
            </section>

            <section>
              <p className="font-['Manrope'] font-extrabold text-xl md:text-2xl lg:text-3xl tracking-tight text-foreground">
                <span className="text-primary">&ldquo;</span>
                {t("quote")}
                <span className="text-primary">&rdquo;</span>
              </p>
            </section>

            <section className="mr-auto">
              <DockDemo />
            </section>
          </div>
        </motion.div>

        {/* Foto con hover - capa 20 */}
        <motion.div
          suppressHydrationWarning
          style={{ y: avatarY, opacity: avatarOpacity }}
          className="absolute z-20
            sm:bottom-0 sm:h-[55%] sm:w-[50%] right-0
            md:bottom-0 md:h-[75%] md:w-[45%]
            lg:h-[90%] lg:w-[40%]
            xl:h-[95%]"
        >
          <motion.button
            onClick={() => setShowPersonalModal(true)}
            className="w-full h-full cursor-pointer"
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1.1 }}
            whileHover={{ scale: 1.02 }}
            aria-label={t("ariaLabelAvatar")}
          >
            <HoverImage
              src={personal.avatar}
              alt={personal.name}
              hoverText={t("hoverText")}
              className="w-full h-full"
            />
          </motion.button>
        </motion.div>

        {/* ChevronDown Desktop */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          onClick={scrollToNext}
          className="absolute z-30 left-1/2 -translate-x-1/2 text-muted-foreground hover:text-primary transition-colors
            sm:bottom-4 md:bottom-8"
          aria-label={t("ariaLabelNext")}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-16 h-10 md:w-20 md:h-12" />
          </motion.div>
        </motion.button>
      </div>

      {/* MODAL PERSONAL */}
      {showPersonalModal && (
        <ExtraInfoModal
          showPersonalModal={showPersonalModal}
          setShowPersonalModal={setShowPersonalModal}
        />
      )}
    </section>
  );
}
