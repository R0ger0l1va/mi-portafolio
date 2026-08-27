// components/portafolio/hover-image.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface HoverImageProps {
  src: string;
  alt: string;
  hoverText?: string;
  className?: string;
  textClassName?: string;
  maskOverlay?: boolean;
  fadeBottom?: boolean;
}

export function HoverImage({
  src,
  alt,
  hoverText = "¿Quieres saber más sobre mí?",
  className,
  textClassName,
  maskOverlay = true,
  fadeBottom = true,
}: HoverImageProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const useMask = maskOverlay && !isMobile;

  const containerStyle = fadeBottom
    ? {
        maskImage: "linear-gradient(to top, transparent 0%, black 15%)",
        WebkitMaskImage: "linear-gradient(to top, transparent 0%, black 15%)",
      }
    : {};

  const maskStyle = {
    WebkitMaskImage: `url(${src})`,
    maskImage: `url(${src})`,
    WebkitMaskSize: "contain",
    maskSize: "contain",
    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
    WebkitMaskPosition: "center bottom",
    maskPosition: "center bottom",
  };

  return (
    <motion.div
      className={cn("relative inline-block cursor-pointer", className)}
      animate={{ scale: isHovered ? 1.03 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={containerStyle}
    >
      {/* Imagen principal */}
      <Image
        src={src}
        alt={alt}
        fill
        objectFit="contain"
        className="object-contain object-bottom transition-transform duration-500"
        style={{ transform: isHovered ? "scale(1.1)" : "scale(1)" }}
        priority
      />

      {/* Overlay con texto */}
      <div
        className={cn(
          "absolute inset-0 flex items-center justify-center transition-opacity duration-500",
          isHovered ? "opacity-100" : "opacity-0",
          textClassName
        )}
        style={
          useMask
            ? {
                backgroundColor: "rgba(0, 0, 0, 0.7)",
                ...maskStyle,
                transform: "scale(1.1)",
              }
            : {
                backgroundColor: isHovered
                  ? "rgba(0, 0, 0, 0.75)"
                  : "rgba(0, 0, 0, 0)",
              }
        }
      >
        <p
          className={cn(
            "text-white font-bold text-center drop-shadow-lg leading-tight",
            isMobile
              ? "text-sm px-4 py-2 bg-black/60 rounded-lg"
              : "text-xs sm:text-sm md:text-base lg:text-lg px-3 sm:px-4 md:px-6 translate-x-2 sm:translate-x-4 md:translate-x-7"
          )}
        >
          {hoverText}
        </p>
      </div>

      {/* Efecto de brillo */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-primary/40 via-primary/10 to-transparent transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          ...(useMask
            ? {
                ...maskStyle,
                transform: "scale(1.1)",
              }
            : {}),
        }}
      />

      {/* Área de hit invisible - segunda imagen exacta */}
      <Image
        src={src}
        alt=""
        fill
        className="absolute inset-0 opacity-0 cursor-pointer"
        style={{ pointerEvents: "auto" }}
        objectFit="cover"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        draggable={false}
      />
    </motion.div>
  );
}
