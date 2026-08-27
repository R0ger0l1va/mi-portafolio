// data/portfolioData.ts

import { PortfolioData } from "../types/porfolio";

export const portfolioData: PortfolioData = {
  personal: {
    name: "Roger",
    title: [
      "Desarrollador Fullstack",
      "Ingeniero de Software",
      "Diseñador Web",
      "Desarrollador Movil",
    ],
    bio: "Desarrollador especializado en crear experiencias digitales intuitivas y performantes. Apasionado por React, Next.js y el diseño centrado en el usuario.",
    generalBio:
      "Soy Roger Oliva Rodríguez, Ingeniero Informático y desarrollador fullstack especializado en desarrollo frontend, con dos años de experiencia práctica creando interfaces web y móviles que equilibran rendimiento, arquitectura limpia y excelencia visual. Guiado por el aprendizaje continuo y la integración autodidacta de principios UX/UI, me destaco por mi enfoque riguroso en el cierre de proyectos, mi alta adaptabilidad a entornos ágiles y mi facilidad para colaborar en equipos multidisciplinarios. Mi objetivo es unirme a ecosistemas innovadores donde pueda potenciar mi dominio de React, Next.js y TypeScript para construir soluciones escalables y mantenibles, entregando siempre código de calidad y experiencias digitales sólidas que generen impacto real en el negocio y el usuario final.",
    objetive:
      "Mi objetivo es continuar desarrollando soluciones frontend de alto impacto que combinen arquitectura escalable, rendimiento optimizado y un diseño centrado en el usuario. Busco integrarme a equipos o proyectos innovadores donde pueda aplicar y ampliar mi dominio de React, Next.js, TypeScript y ecosistemas modernos, mientras aporto valor real al negocio y a los usuarios finales. Aspiro a crecer como referente técnico y colaborativo, priorizando siempre la calidad del código, la mantenibilidad y la entrega continua de experiencias digitales sólidas.",
    avatar: "/assets/misFotos/FOTOSINFONDO.png",
    social: {
      github: "https://github.com/R0ger0l1va",
      linkedin:
        "https://www.linkedin.com/in/roger-oliva-rodr%C3%ADguez-26aab335b/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BPEFxrISIRm68ZrHO5zbqqg%3D%3D",
      email: "mailto:roger@example.com",
      twitter: "https://twitter.com/tuusuario",
    },
  },

  skills: [
    // Frontend
    {
      name: "React",
      level: "expert",
      category: "frontend",
      iconUrl: "https://cdn.simpleicons.org/react/61DAFB",
    },
    {
      name: "Next.js",
      level: "advanced",
      category: "frontend",
      iconUrl: "https://cdn.simpleicons.org/nextdotjs/FFFFFF",
    },
    {
      name: "TypeScript",
      level: "advanced",
      category: "frontend",
      iconUrl: "https://cdn.simpleicons.org/typescript/3178C6",
    },
    {
      name: "Tailwind CSS",
      level: "expert",
      category: "frontend",
      iconUrl: "https://cdn.simpleicons.org/tailwindcss/06B6D4",
    },
    {
      name: "Framer Motion",
      level: "intermediate",
      category: "frontend",
      iconUrl: "https://cdn.simpleicons.org/framer/0055FF",
    },

    // Backend
    {
      name: "Node.js",
      level: "intermediate",
      category: "backend",
      iconUrl: "https://cdn.simpleicons.org/nodedotjs/5FA04E",
    },
    {
      name: "Express",
      level: "intermediate",
      category: "backend",
      iconUrl: "https://cdn.simpleicons.org/express/FFFFFF",
    },
    {
      name: "MongoDB",
      level: "beginner",
      category: "backend",
      iconUrl: "https://cdn.simpleicons.org/mongodb/47A248",
    },

    // Tools
    {
      name: "Git",
      level: "advanced",
      category: "tools",
      iconUrl: "https://cdn.simpleicons.org/git/F05032",
    },
    {
      name: "Figma",
      level: "advanced",
      category: "tools",
      iconUrl: "https://cdn.simpleicons.org/figma/F24E1E",
    },
    {
      name: "Vite",
      level: "intermediate",
      category: "tools",
      iconUrl: "https://cdn.simpleicons.org/vite/646CFF",
    },

    // Soft Skills
    {
      name: "Comunicación",
      level: "expert",
      category: "soft",
      lucideIcon: "MessageSquare",
    },
    {
      name: "Trabajo en equipo",
      level: "expert",
      category: "soft",
      lucideIcon: "Users",
    },
    {
      name: "Resolución de problemas",
      level: "advanced",
      category: "soft",
      lucideIcon: "Lightbulb",
    },
  ],

  projects: [
    {
      id: "factura-pdf-react-native",
      title: "Generador de Facturas PDF - React Native",
      description:
        "Aplicación móvil para generar facturas de servicio en formato PDF con diseño editorial. Incluye gestión de clientes, cálculos automáticos y exportación compartible.",
      image: "/assets/projects/factura-pdf.png",
      technologies: [
        "React Native",
        "Expo",
        "@react-pdf/renderer",
        "TypeScript",
      ],
      github: "https://github.com/tuusuario/factura-pdf",
      live: undefined,
      featured: true,
    },
    {
      id: "portafolio-personal",
      title: "Portafolio Personal - Next.js",
      description:
        "Sitio web personal con modo oscuro, animaciones con Framer Motion, SEO optimizado y diseño responsive. Incluye sección de blog integrado con MDX.",
      image: "/assets/projects/portafolio.png",
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Framer Motion",
        "next-themes",
        "MDX",
      ],
      github: "https://github.com/tuusuario/portafolio",
      live: "https://rogeroliva.dev",
      featured: true,
    },
    {
      id: "sistema-documental",
      title: "Sistema de Gestión Documental",
      description:
        "Plataforma web para gestión de expedientes, firmas digitales y flujos de trabajo. Implementé CRUD de documentos, logs de auditoría y plantillas eCTD.",
      image: "/assets/projects/sistema-doc.png",
      technologies: ["React", "MobX", "Material-UI", "Node.js", "PostgreSQL"],
      github: undefined,
      live: undefined,
      featured: false,
    },
  ],

  experience: [
    {
      id: "freelance-2023",
      company: "Freelance",
      role: "Frontend Developer & UX Designer",
      period: "2023 - Presente",
      description:
        "Desarrollo de aplicaciones web y móviles para clientes internacionales. Enfoque en performance, accesibilidad y experiencia de usuario.",
      technologies: [
        "React",
        "Next.js",
        "React Native",
        "Tailwind CSS",
        "Figma",
      ],
    },
    {
      id: "empresa-x-2021",
      company: "Empresa X",
      role: "Desarrollador Frontend Junior",
      period: "2021 - 2023",
      description:
        "Colaboré en el rediseño del sistema de gestión documental, implementando componentes reutilizables y mejorando la navegación.",
      technologies: ["React", "TypeScript", "Material-UI", "MobX"],
    },
  ],
};
