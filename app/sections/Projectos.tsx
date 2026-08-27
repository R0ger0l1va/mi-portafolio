"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import {
  ExternalLink,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { Android } from "@/components/ui/android";
import { Safari } from "@/components/ui/safari";
import { useTranslations } from "next-intl";

const MotionSafari = motion.create(Safari);

type ProjectItem = {
  title: string;
  date?: string;
  description: string;
  tags: string[];
  images: string[];
  github?: string;
  demo?: string;
  type: "web" | "mobile";
};

function ImageLightbox({
  images,
  isOpen,
  onClose,
  initialIndex = 0,
}: {
  images: string[];
  isOpen: boolean;
  onClose: () => void;
  initialIndex?: number;
}) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const t = useTranslations("projects.ariaLabels");

  const goNext = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const goPrev = () =>
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            onClick={onClose}
            aria-label={t("closeLightbox")}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors z-50"
          >
            <X className="size-8" />
          </button>

          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              aria-label={t("prevImage")}
              className="absolute left-4 text-white/80 hover:text-white transition-colors z-50 p-2 rounded-full bg-white/10 hover:bg-white/20"
            >
              <ChevronLeft className="size-8" />
            </button>
          )}

          <motion.div
            key={currentIndex}
            className="max-w-[90vw] max-h-[85vh] relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={images[currentIndex]}
              alt="Demo screenshot"
              className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
            />
          </motion.div>

          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              aria-label={t("nextImage")}
              className="absolute right-4 text-white/80 hover:text-white transition-colors z-50 p-2 rounded-full bg-white/10 hover:bg-white/20"
            >
              <ChevronRight className="size-8" />
            </button>
          )}

          {images.length > 1 && (
            <div className="absolute bottom-6 flex gap-2 z-50">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentIndex(idx);
                  }}
                  aria-label={`${t("goToImage")} ${idx + 1}`}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    idx === currentIndex
                      ? "bg-white"
                      : "bg-white/40 hover:bg-white/60"
                  }`}
                />
              ))}
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: ProjectItem;
  index: number;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const t = useTranslations("projects.buttons");

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <ImageLightbox
        images={project.images}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
      />
      <Card className="overflow-hidden h-full flex flex-col group hover:shadow-xl transition-shadow duration-300">
        <div className="relative bg-linear-to-br from-muted/50 to-muted/30 flex items-center justify-center py-4 overflow-hidden">
          {project.type === "mobile" ? (
            <motion.div
              className="flex items-end justify-center gap-4 px-4"
              whileHover={{
                cursor: "pointer",
                scale: 1.08,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              onClick={() => setIsLightboxOpen(true)}
            >
              <Android className="size-full" src={project.images[0]} />
            </motion.div>
          ) : (
            <div
              className="relative w-full h-48 sm:h-72 px-3 sm:px-5 flex items-center justify-center"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div
                className="flex items-center justify-center gap-4 px-2 sm:px-4 w-full h-full"
                whileHover={{
                  cursor: "pointer",
                  scale: 1.05,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                onClick={() => setIsLightboxOpen(true)}
              >
                <div className="relative size-full flex items-center justify-center">
                  <MotionSafari
                    url="magicui.design"
                    className="size-full max-h-full"
                    imageSrc={project.images[0]}
                  />
                  {project.images[1] && (
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          className="absolute inset-0"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.5, ease: "easeInOut" }}
                        >
                          <MotionSafari
                            url="magicui.design"
                            className="size-full max-h-full"
                            imageSrc={project.images[1]}
                          />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </div>

        <div className="p-4 sm:p-6 flex-1 flex flex-col">
          <div className="flex items-center justify-between gap-2 mb-2">
            <h3 className="text-xl sm:text-2xl font-bold">{project.title}</h3>
            {project.date && (
              <span className="text-xs text-muted-foreground font-medium shrink-0">
                {project.date}
              </span>
            )}
          </div>
          <p className="text-muted-foreground mb-4 flex-1 text-left text-xs sm:text-sm md:text-base leading-relaxed font-normal">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-4">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="text-xs sm:text-sm px-2.5 py-0.5 sm:px-3 sm:py-1">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="flex gap-2 sm:gap-3 mt-auto pt-2">
            {project.github && (
              <motion.div
                className={project.demo ? "w-1/2" : "w-full"}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.97, y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Button
                  variant="outline"
                  className="group/btn w-full h-10 sm:h-12 text-xs sm:text-base font-semibold gap-1.5 sm:gap-2.5 border-2 rounded-xl overflow-hidden relative transition-colors duration-300 hover:bg-zinc-900 hover:text-zinc-50 hover:border-zinc-900 dark:hover:bg-zinc-100 dark:hover:text-zinc-900 dark:hover:border-zinc-100"
                  render={
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  <FaGithub className="size-4 sm:size-5 transition-transform duration-500 ease-out group-hover/btn:-rotate-[360deg]" />
                  <span>{t("code")}</span>
                  <motion.span
                    aria-hidden
                    className="ml-0.5 text-xs sm:text-base leading-none transition-transform duration-300 group-hover/btn:translate-x-1"
                  >
                    →
                  </motion.span>
                </Button>
              </motion.div>
            )}
            {project.demo && (
              <motion.div
                className={project.github ? "w-1/2" : "w-full"}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.97, y: 0 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
              >
                <Button
                  className="group/btn w-full h-10 sm:h-12 text-xs sm:text-base font-semibold gap-1.5 sm:gap-2.5 border-2 rounded-xl overflow-hidden relative transition-colors duration-300 hover:bg-zinc-900 hover:text-zinc-50 hover:border-zinc-900 dark:hover:bg-zinc-100 dark:hover:text-zinc-900 dark:hover:border-zinc-100"
                  render={
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  }
                >
                  <ExternalLink className="size-4 sm:size-5 transition-transform duration-500 ease-out group-hover/btn:-rotate-[360deg]" />
                  <span>{t("demo")}</span>
                  <motion.span
                    aria-hidden
                    className="ml-0.5 text-xs sm:text-base leading-none transition-transform duration-300 group-hover/btn:translate-x-1"
                  >
                    →
                  </motion.span>
                </Button>
              </motion.div>
            )}
          </div>
        </div>
      </Card>
    </motion.div>
  );
}

export function Projectos() {
  const [filter, setFilter] = useState<"all" | "web" | "mobile">("all");
  const t = useTranslations("projects");
  const projects = t.raw("projectsList") as ProjectItem[];

  const mobileProjects = projects.filter((p) => p.type === "mobile");
  const webProjects = projects.filter((p) => p.type === "web");

  const filteredProjects = projects.filter((p) => {
    if (filter === "web") return p.type === "web";
    if (filter === "mobile") return p.type === "mobile";
    return true;
  });

  return (
    <section id="projects" className="py-16 md:py-32 relative px-4 sm:px-6 bg-muted/30">
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
          <div className="w-full max-w-[200px] h-1.5 bg-gradient-to-r from-red-600 to-red-500 mx-auto mb-8 sm:mb-12 rounded-full" />
        </motion.div>

        {/* Tab Filter Controls */}
        <div className="flex justify-center items-center gap-2 mb-8 sm:mb-12">
          <div className="inline-flex p-1.5 rounded-2xl bg-card border-2 border-border/80 shadow-md">
            {[
              { id: "all", label: t("tabs.all") },
              { id: "web", label: t("tabs.web") },
              { id: "mobile", label: t("tabs.mobile") },
            ].map((tab) => {
              const isActive = filter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setFilter(tab.id as "all" | "web" | "mobile")}
                  className={`px-5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-primary text-primary-foreground shadow-sm scale-105"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {filter === "all" ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="flex flex-col gap-6 sm:gap-8">
              {mobileProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </div>
            <div className="flex flex-col gap-6 sm:gap-8">
              {webProjects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index + mobileProjects.length}
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
