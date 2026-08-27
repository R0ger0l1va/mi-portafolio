"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Code2, Quote, Rocket, Users, Zap, ChevronDown, ChevronUp } from "lucide-react";

const iconMap = {
  Code2,
  Rocket,
  Users,
  Zap,
};

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const t = useTranslations("about");
  const tp = useTranslations("personal");

  return (
    <section id="about" className="py-16 md:py-24 relative px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-3 text-center">
            {t("title")}
          </h2>
          <div className="w-full max-w-[180px] h-1.5 bg-gradient-to-r from-red-600 to-red-500 mx-auto mb-10 sm:mb-14 rounded-full" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="group/bio relative h-full overflow-hidden border-border/50 p-6 sm:p-8 md:p-10 transition-all duration-300 hover:border-primary/50 hover:shadow-lg flex flex-col justify-between">
              <Quote className="pointer-events-none absolute -right-6 -top-6 h-36 w-36 sm:h-44 sm:w-44 text-primary/[0.05] transition-transform duration-500 group-hover/bio:scale-110 group-hover/bio:rotate-6" />

              <div>
                <div className="relative mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover/bio:bg-primary/20">
                    <Quote className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-primary">
                    {t("sectionTag")}
                  </span>
                </div>

                <p
                  className={`relative text-base sm:text-lg md:text-xl leading-relaxed text-left text-foreground/90 font-normal transition-all duration-300 ${
                    !isExpanded ? "line-clamp-4 md:line-clamp-none" : ""
                  }`}
                >
                  {tp("generalBio")}
                </p>

                <button
                  onClick={() => setIsExpanded(!isExpanded)}
                  className="md:hidden mt-3 inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-primary hover:text-primary/80 transition-colors cursor-pointer"
                  aria-expanded={isExpanded}
                >
                  <span>{isExpanded ? t("readLess") : t("readMore")}</span>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Badges visuales de resumen */}
              <div className="relative mt-6 pt-6 border-t border-border/40 flex flex-wrap gap-2">
                {(t.raw("badges") as string[]).map((badge: string, idx: number) => (
                  <span
                    key={idx}
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${
                      idx === 0
                        ? "bg-primary/10 text-primary"
                        : idx === 1
                        ? "bg-red-500/10 text-red-500 dark:text-red-400"
                        : "bg-accent text-foreground"
                    }`}
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </Card>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {(t.raw("highlights") as Array<{iconKey: string; title: string; description: string}>).map((highlight, index) => {
              const IconComponent = iconMap[highlight.iconKey as keyof typeof iconMap] || Code2;
              return (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="p-5 sm:p-6 h-full border-border/50 hover:border-primary/50 transition-colors flex flex-col">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary mb-3.5 shrink-0">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold mb-2 text-base sm:text-lg text-foreground">
                      {highlight.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1">
                      {highlight.description}
                    </p>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
