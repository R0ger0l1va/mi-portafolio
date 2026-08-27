"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Briefcase,
  Code,
  FileUser,
  Folder,
  HomeIcon,
  MailIcon,
  User,
  Menu,
  X,
} from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";
import { portfolioData } from "@/data/portfolioData";
import { ThemeToggle } from "@/components/portafolio/ThemeToggle";
import { LanguageToggle } from "@/components/portafolio/LanguageToggle";

const { personal } = portfolioData;

const NAV_ITEMS = [
  { id: "hero", href: "#hero", icon: HomeIcon, label: "Inicio" },
  { id: "about", href: "#about", icon: User, label: "Sobre mí" },
  { id: "skills", href: "#skills", icon: Code, label: "Habilidades" },
  { id: "projects", href: "#projects", icon: Folder, label: "Proyectos" },
  { id: "experience", href: "#experience", icon: Briefcase, label: "Experiencia" },
  { id: "contact", href: "#contact", icon: MailIcon, label: "Contacto" },
];

const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: personal.social.github,
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 438.549 438.549" className="size-4" {...props}>
        <path
          fill="currentColor"
          d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417-.144-8.47-.144-16.935-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 5.137.959 10.729 1.434 16.735 1.434 6.006 0 11.599-.475 16.736-1.434 5.137-.959 8.918-3.683 11.342-8.284 2.424-4.601 3.636-10.198 3.636-16.792v-57.47h.006z"
        />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    url: personal.social.linkedin,
    icon: (props: React.SVGProps<SVGSVGElement>) => (
      <svg viewBox="0 0 24 24" className="size-4" {...props}>
        <path
          fill="currentColor"
          d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
        />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    url: "https://wa.me/5355004714",
    icon: () => <BsWhatsapp className="size-4" />,
  },
];

export function MobileNavDots() {
  const [activeSection, setActiveSection] = useState("hero");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // ScrollSpy para detectar la sección activa
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      for (const item of NAV_ITEMS) {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Cerrar menú al hacer clic fuera
  useEffect(() => {
    if (!menuOpen) return;
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [menuOpen]);

  const scrollToSection = (href: string) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="block sm:hidden fixed bottom-5 left-1/2 -translate-x-1/2 z-50" ref={menuRef}>
      {/* Menú Desplegable Modal / Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="absolute bottom-16 left-1/2 -translate-x-1/2 w-64 rounded-2xl bg-background/95 backdrop-blur-xl border border-border/60 shadow-2xl p-4 space-y-3 max-h-[75vh] overflow-y-auto"
          >
            <div className="flex items-center justify-between pb-2 border-b border-border/50">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Navegación
              </span>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-1 rounded-full hover:bg-accent text-muted-foreground"
                aria-label="Cerrar menú"
              >
                <X className="size-4" />
              </button>
            </div>

            <div className="grid grid-cols-2 gap-1.5">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.href)}
                    className={`flex items-center gap-2 px-3 py-2 rounded-xl text-xs font-medium transition-all ${
                      isActive
                        ? "bg-primary text-primary-foreground font-semibold shadow-md"
                        : "hover:bg-accent text-foreground"
                    }`}
                  >
                    <Icon className="size-4 shrink-0" />
                    <span className="truncate">{item.label}</span>
                  </button>
                );
              })}
            </div>

            <div className="h-px bg-border/50" />

            {/* Redes sociales */}
            <div className="flex items-center justify-around py-1">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full hover:bg-accent text-muted-foreground hover:text-primary transition-colors"
                  aria-label={social.name}
                >
                  <social.icon />
                </a>
              ))}
              <a
                href="/assets/misDocumentos/Roger Oliva Rodríguez - CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-accent text-muted-foreground hover:text-primary transition-colors"
                title="Descargar CV"
                aria-label="CV"
              >
                <FileUser className="size-4" />
              </a>
            </div>

            <div className="h-px bg-border/50" />

            {/* Controles de tema e idioma */}
            <div className="flex items-center justify-between pt-1 px-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-muted-foreground">Tema:</span>
                <ThemeToggle />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-medium text-muted-foreground">Idioma:</span>
                <LanguageToggle />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Bar con Dots Indicadores + Botón de Menú */}
      <div className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-background/85 backdrop-blur-xl border border-border/70 shadow-2xl">
        {/* Dots para cada sección */}
        <div className="flex items-center gap-1.5 px-1">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.href)}
                className="group relative p-1 focus:outline-none"
                aria-label={`Ir a ${item.label}`}
              >
                <motion.div
                  animate={{
                    width: isActive ? 20 : 8,
                    backgroundColor: isActive
                      ? "var(--primary, #ef4444)"
                      : "rgba(156, 163, 175, 0.4)",
                  }}
                  transition={{ duration: 0.25 }}
                  className="h-2 rounded-full"
                />
              </button>
            );
          })}
        </div>

        <div className="h-4 w-px bg-border/60 mx-0.5" />

        {/* Botón de Menú */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`p-1.5 rounded-full transition-colors ${
            menuOpen
              ? "bg-primary text-primary-foreground"
              : "hover:bg-accent text-foreground"
          }`}
          aria-label="Abrir menú de navegación"
        >
          {menuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
        </button>
      </div>
    </div>
  );
}
