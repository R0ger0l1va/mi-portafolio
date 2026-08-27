"use client";

import { motion } from "motion/react";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { useTranslations } from "next-intl";

const socialLinks = [
  {
    icon: FaGithub,
    href: "https://github.com/R0ger0l1va",
    label: "GitHub",
  },
  {
    icon: FaLinkedin,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: FaWhatsapp,
    href: "https://wa.me/5355004714",
    label: "WhatsApp",
  },
];

export function Footer() {
  const t = useTranslations("footer");
  return (
    <footer className="border-t border-border/50 bg-background pb-24 sm:pb-12">
      <div className="max-w-7xl mx-auto px-6 py-8 sm:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8"
        >
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-1">{t("name")}</h3>
            <p className="text-muted-foreground text-sm sm:text-base">
              {t("role")}
            </p>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="w-10 h-10 rounded-full bg-background border border-border/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300"
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>

          <p className="text-muted-foreground text-xs sm:text-sm text-center md:text-right">
            © {new Date().getFullYear()} {t("name")}. {t("copyright")}
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
