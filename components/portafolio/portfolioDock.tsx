"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Briefcase,
  CalendarIcon,
  Code,
  FileUser,
  Folder,
  HomeIcon,
  MailIcon,
  User,
  MoreVertical,
  X,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Dock, DockIcon } from "../ui/dock";
import { Separator } from "@base-ui/react";
import { ThemeToggle } from "@/components/portafolio/ThemeToggle";
import { LanguageToggle } from "@/components/portafolio/LanguageToggle";
import { portfolioData } from "@/data/portfolioData";
import { BsWhatsapp } from "react-icons/bs";

export type IconProps = React.HTMLAttributes<SVGElement>;
const { personal } = portfolioData;
const Icons = {
  user: (props: IconProps) => <User {...props} />,
  whatsapp: (props: IconProps) => <BsWhatsapp {...props} />,
  skill: (props: IconProps) => <Code {...props} />,
  projects: (props: IconProps) => <Folder {...props} />,
  experience: (props: IconProps) => <Briefcase {...props} />,
  cv: (props: IconProps) => <FileUser {...props} />,
  calendar: (props: IconProps) => <CalendarIcon {...props} />,
  email: (props: IconProps) => <MailIcon {...props} />,
  linkedin: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>LinkedIn</title>
      <path
        fill="currentColor"
        d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"
      />
    </svg>
  ),
  x: (props: IconProps) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <title>X</title>
      <path
        fill="currentColor"
        d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"
      />
    </svg>
  ),
  youtube: (props: IconProps) => (
    <svg
      width="32px"
      height="32px"
      viewBox="0 0 32 32"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>youtube</title>
      <path d="M29.41,9.26a3.5,3.5,0,0,0-2.47-2.47C24.76,6.2,16,6.2,16,6.2s-8.76,0-10.94.59A3.5,3.5,0,0,0,2.59,9.26,36.13,36.13,0,0,0,2,16a36.13,36.13,0,0,0,.59,6.74,3.5,3.5,0,0,0,2.47,2.47C7.24,25.8,16,25.8,16,25.8s8.76,0,10.94-.59a3.5,3.5,0,0,0,2.47-2.47A36.13,36.13,0,0,0,30,16,36.13,36.13,0,0,0,29.41,9.26ZM13.2,20.2V11.8L20.47,16Z" />
    </svg>
  ),
  github: (props: IconProps) => (
    <svg viewBox="0 0 438.549 438.549" {...props}>
      <path
        fill="currentColor"
        d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417-.144-8.47-.144-16.935-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 5.137.959 10.729 1.434 16.735 1.434 6.006 0 11.599-.475 16.736-1.434 5.137-.959 8.918-3.683 11.342-8.284 2.424-4.601 3.636-10.198 3.636-16.792v-57.47h.006z"
      ></path>
    </svg>
  ),
};

const DATA = {
  navbar: [
    { href: "#hero", icon: HomeIcon, label: "Inicio" },
    { href: "#about", icon: Icons.user, label: "Sobre mi" },
    { href: "#skills", icon: Icons.skill, label: "Habilidades" },
    { href: "#projects", icon: Icons.projects, label: "Proyectos" },
    { href: "#experience", icon: Icons.experience, label: "Experiencia" },
    { href: "#contact", icon: MailIcon, label: "Contacto" },
  ],
  contact: {
    social: {
      GitHub: {
        name: "GitHub",
        url: personal.social.github,
        icon: Icons.github,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: personal.social.linkedin,
        icon: Icons.linkedin,
      },
      X: {
        name: "X",
        url: "https://x.com/rogolive",
        icon: Icons.x,
      },
    },
  },
  pageConfig: {
    ThemeToggle: "ThemeToggle",
    LanguageToggle: "LanguageToggle",
  },
  document: {
    CV: {
      name: "CV",
      icon: Icons.cv,
      url: "/assets/misDocumentos/Roger Oliva Rodríguez - CV.pdf",
    },
  },
};

function MobileMenu() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center justify-center w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-accent transition-colors"
        aria-label="Menu"
      >
        {open ? <X className="size-5" /> : <MoreVertical className="size-5" />}
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: -10 }}
          transition={{ duration: 0.15 }}
          className="absolute bottom-full mb-2 left-1/2 -translate-x-1/2 w-52 rounded-xl bg-background/95 backdrop-blur-md border border-border/50 shadow-xl p-2 flex flex-col gap-1"
        >
          {DATA.navbar.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-accent transition-colors"
            >
              <item.icon className="size-4" />
              {item.label}
            </Link>
          ))}

          <div className="h-px bg-border/50 my-1" />

          {Object.entries(DATA.contact.social).map(([name, social]) => (
            <a
              key={name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-accent transition-colors"
            >
              <social.icon className="size-4" />
              {social.name}
            </a>
          ))}

          <div className="h-px bg-border/50 my-1" />

          <div className="flex items-center justify-between px-3 py-2">
            <span className="text-xs text-muted-foreground">Tema</span>
            <ThemeToggle />
          </div>
          <div className="flex items-center justify-between px-3 py-2">
            <span className="text-xs text-muted-foreground">Idioma</span>
            <LanguageToggle />
          </div>

          <div className="h-px bg-border/50 my-1" />

          {Object.entries(DATA.document).map(([name, doc]) => (
            <a
              key={name}
              href={doc.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium hover:bg-accent transition-colors"
            >
              <doc.icon className="size-4" />
              {name}
            </a>
          ))}
        </motion.div>
      )}
    </div>
  );
}

function DesktopDock() {
  return (
    <TooltipProvider>
      <Dock direction="middle">
        {DATA.navbar.map((item) => (
          <DockIcon key={item.label}>
            <Tooltip>
              <TooltipTrigger
                render={
                  <Link
                    href={item.href}
                    aria-label={item.label}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-14 rounded-full",
                    )}
                  />
                }
              >
                <item.icon className="size-6" />
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.label}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator
          orientation="vertical"
          className="h-14 w-0.5 bg-primary/60 mx-2"
        />
        {Object.entries(DATA.contact.social).map(([name, social]) => (
          <DockIcon key={name}>
            <Tooltip>
              <TooltipTrigger
                render={
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-14 rounded-full",
                    )}
                  />
                }
              >
                <social.icon className="size-6" />
              </TooltipTrigger>
              <TooltipContent>
                <p>{name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
        <Separator
          orientation="vertical"
          className="h-14 w-0.5 bg-primary/60 mx-2"
        />
        <DockIcon>
          <Tooltip>
            <TooltipTrigger
              render={
                <div
                  className="size-14 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label="Cambiar tema"
                />
              }
            >
              <ThemeToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Tema</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>
        <DockIcon>
          <Tooltip>
            <TooltipTrigger
              render={
                <div
                  className="h-10 px-4 rounded-full flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label="Cambiar idioma"
                />
              }
            >
              <LanguageToggle />
            </TooltipTrigger>
            <TooltipContent>
              <p>Idioma</p>
            </TooltipContent>
          </Tooltip>
        </DockIcon>

        <Separator
          orientation="vertical"
          className="h-14 w-0.5 bg-primary/60 mx-2"
        />
        {Object.entries(DATA.document).map(([name, doc]) => (
          <DockIcon key={name}>
            <Tooltip>
              <TooltipTrigger
                render={
                  <a
                    href={doc.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={doc.name}
                    className={cn(
                      buttonVariants({ variant: "ghost", size: "icon" }),
                      "size-14 rounded-full",
                    )}
                  />
                }
              >
                <doc.icon className="size-6" />
              </TooltipTrigger>
              <TooltipContent>
                <p>{name}</p>
              </TooltipContent>
            </Tooltip>
          </DockIcon>
        ))}
      </Dock>
    </TooltipProvider>
  );
}

export function DockDemo() {
  return (
    <>
      <div className="block sm:hidden">
        <MobileMenu />
      </div>
      <div className="hidden sm:block">
        <DesktopDock />
      </div>
    </>
  );
}
