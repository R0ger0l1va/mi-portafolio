"use client";

import { motion } from "motion/react";
import {
  Code2,
  Database,
  Server,
  Palette,
  Wrench,
  Smartphone,
} from "lucide-react";
import { BentoCard, BentoGrid } from "@/components/ui/bento-grid";
import { useTranslations } from "next-intl";

const iconMap = {
  Code2,
  Palette,
  Server,
  Database,
  Smartphone,
  Wrench,
};

export default function Skills() {
  const t = useTranslations("skills");
  const categories = t.raw("categories") as Array<{title: string; iconKey: string; colSpan: string; skills: Array<{name: string; icon: string; darkInvert?: boolean}>}>;

  return (
    <section id="skills" className="py-16 md:py-32 px-4 sm:px-6 relative">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 text-center">
            {t("title")}
          </h2>
          <div className="w-full max-w-[200px] h-1.5 bg-gradient-to-r from-red-600 to-red-500 mx-auto mb-4 rounded-full" />
          <p className="text-center text-muted-foreground text-sm sm:text-base md:text-lg max-w-2xl mx-auto mb-10 sm:mb-16">
            {t("subtitle")}
          </p>
        </motion.div>

        <BentoGrid>
          {categories.map((category, categoryIndex) => {
            const IconComponent =
              iconMap[category.iconKey as keyof typeof iconMap] || Code2;
            return (
              <BentoCard
                key={category.title}
                name={category.title}
                Icon={IconComponent}
                colSpan={category.colSpan}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: categoryIndex * 0.05 + 0.1,
                  }}
                  className="flex flex-wrap gap-2.5 sm:gap-3"
                >
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="group/chip flex items-center gap-2 rounded-md border border-border bg-background px-3 py-2 sm:px-4 sm:py-2.5 transition-all duration-200 hover:border-primary/50 hover:bg-primary/5"
                    >
                      <img
                        src={skill.icon}
                        alt={skill.name}
                        className={`h-5 w-5 sm:h-6 sm:w-6 shrink-0 object-contain${skill.darkInvert ? " dark:invert" : ""}`}
                      />
                      <span className="text-xs sm:text-sm md:text-base font-medium text-foreground">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </BentoCard>
            );
          })}
        </BentoGrid>
      </div>
    </section>
  );
}
