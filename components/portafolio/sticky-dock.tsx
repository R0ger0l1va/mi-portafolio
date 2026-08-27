"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DockDemo } from "./portfolioDock";

export function StickyDock() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Se vuelve sticky después de hacer scroll 500px
      setIsSticky(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isSticky && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ type: "spring", stiffness: 200, damping: 20 }}
          className="fixed top-4 left-0 right-0 z-50 flex justify-center pointer-events-none"
        >
          <div className="pointer-events-auto">
            <DockDemo />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
