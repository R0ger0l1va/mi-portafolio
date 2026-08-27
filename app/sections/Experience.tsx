"use client";

import { motion } from "motion/react";

import { Briefcase, GraduationCap } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useTranslations } from "next-intl";

export function Experience() {
  const t = useTranslations("experience");
  const experiences = t.raw("experiencesList") as Array<{type: string; titles: string[]; company: string; period: string; description: string; achievements: string[]}>;
  return (
    <section id="experience" className="py-16 md:py-32 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 text-center">
            {t("title")}
          </h2>
          <div className="w-full max-w-[200px] h-1.5 bg-gradient-to-r from-red-600 to-red-500 mx-auto mb-10 sm:mb-16 rounded-full" />
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-5 sm:left-10 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-6 sm:space-y-10">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative pl-12 sm:pl-24"
              >
                {/* Timeline Icon */}
                <div
                  className={`absolute left-0 sm:left-3 top-5 sm:top-6 w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg transition-all duration-300 ${
                    exp.type === "work"
                      ? "bg-primary/10 dark:bg-primary/20 border border-primary/30"
                      : "bg-emerald-500/10 dark:bg-emerald-500/20 border border-emerald-500/30"
                  }`}
                >
                  {exp.type === "work" ? (
                    <Briefcase className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                  ) : (
                    <GraduationCap className="w-5 h-5 sm:w-7 sm:h-7 text-emerald-600 dark:text-emerald-400" />
                  )}
                </div>

                <Card className="p-5 sm:p-8 bg-card border-border/50 hover:border-primary/50 hover:shadow-md transition-all duration-300">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <h3 className="text-xl sm:text-3xl font-bold text-foreground">
                      {exp.company}
                    </h3>
                    <span className="text-xs sm:text-base text-muted-foreground whitespace-nowrap font-medium">
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
                    {exp.titles.map((title, i) => (
                      <span
                        key={i}
                        className={`inline-block text-xs sm:text-base font-medium px-3 py-1 sm:px-4 sm:py-1.5 rounded-full ${
                          exp.type === "work"
                            ? "bg-primary/10 text-primary"
                            : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                        }`}
                      >
                        {title}
                      </span>
                    ))}
                  </div>

                  <p className="text-xs sm:text-base text-foreground/80 mb-4 leading-relaxed font-normal">
                    {exp.description}
                  </p>

                  {exp.achievements.length > 0 && (
                    <div className="border-t border-border/50 pt-3 sm:pt-4">
                      <div className="grid gap-2">
                        {exp.achievements.map((achievement, i) => (
                          <div key={i} className="flex items-start gap-2 sm:gap-2.5">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                            <p className="text-xs sm:text-base text-muted-foreground leading-relaxed">
                              {achievement}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
