import { portfolioData } from "@/data/portfolioData";
import modalData from "@/data/sections/extraInfoModal.json";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";

interface ExtraInfoModalProps {
  showPersonalModal: boolean;
  setShowPersonalModal: Dispatch<SetStateAction<boolean>>;
}

const ExtraInfoModal = ({
  showPersonalModal,
  setShowPersonalModal,
}: ExtraInfoModalProps) => {
  const { personal } = portfolioData;
  return (
    <AnimatePresence>
      {showPersonalModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
          onClick={() => setShowPersonalModal(false)}
          role="dialog"
          aria-modal="true"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative bg-background border border-border rounded-2xl p-6 md:p-8 max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón cerrar */}
            <button
              onClick={() => setShowPersonalModal(false)}
              className="absolute top-4 right-4 p-2 rounded-full hover:bg-muted transition-colors"
              aria-label={modalData.ariaLabelClose}
            >
              <X className="w-5 h-5 text-foreground" />
            </button>

            {/* Contenido personal */}
            <div className="flex flex-col md:flex-row gap-6 items-start">
              <div className="relative w-full md:w-1/3 aspect-[3/4] rounded-xl overflow-hidden bg-muted">
                <Image
                  src="/assets/misFotos/PERSONAL_INFO.jpg"
                  alt="Foto personal"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex-1 space-y-4">
                <h2 className="text-2xl font-bold text-foreground">
                  {modalData.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {personal.bio || modalData.fallbackBio}
                </p>

                {/* Ejemplo de datos extra */}
                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="p-3 rounded-lg bg-muted/50 border border-border">
                    <span className="block text-xs text-muted-foreground uppercase tracking-wider">
                      {modalData.labels.location}
                    </span>
                    <span className="font-medium text-foreground">
                      {modalData.values.location}
                    </span>
                  </div>
                  <div className="p-3 rounded-lg bg-muted/50 border border-border">
                    <span className="block text-xs text-muted-foreground uppercase tracking-wider">
                      {modalData.labels.languages}
                    </span>
                    <span className="font-medium text-foreground">
                      {modalData.values.languages}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExtraInfoModal