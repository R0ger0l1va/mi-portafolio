"use client";

import { motion } from "motion/react";

import { Mail, MapPin, Phone, Send, CheckCircle, Loader2 } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@base-ui/react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import { useTranslations } from "next-intl";

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const t = useTranslations("contact");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current,
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      );
      setStatus("sent");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-32 px-4 sm:px-6 bg-muted/30">
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
          <div className="w-full max-w-[200px] h-1.5 bg-gradient-to-r from-red-600 to-red-500 mx-auto mb-10 sm:mb-16 rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 sm:gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-2 space-y-4 sm:space-y-6"
          >
            <div>
              <h3 className="text-2xl sm:text-4xl font-bold mb-2 sm:mb-4">
                {t("subTitle")}
              </h3>
              <p className="text-muted-foreground mb-6 text-sm sm:text-lg leading-relaxed">
                {t("description")}
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              <Card className="p-4 sm:p-5 border-2 border-border/80 bg-card text-card-foreground shadow-md hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-semibold text-sm sm:text-lg mb-0.5">
                      {t("labels.email")}
                    </p>
                    <a
                      href={`mailto:${t("values.email")}`}
                      className="text-xs sm:text-base text-muted-foreground hover:text-primary transition-colors truncate block"
                    >
                      {t("values.email")}
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-4 sm:p-5 border-2 border-border/80 bg-card text-card-foreground shadow-md hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-lg mb-0.5">
                      {t("labels.phone")}
                    </p>
                    <a
                      href={`tel:${t("values.phone").replace(/\s+/g, "")}`}
                      className="text-xs sm:text-base text-muted-foreground hover:text-primary transition-colors"
                    >
                      {t("values.phone")}
                    </a>
                  </div>
                </div>
              </Card>

              <Card className="p-4 sm:p-5 border-2 border-border/80 bg-card text-card-foreground shadow-md hover:border-primary/50 transition-colors">
                <a
                  href="https://wa.me/5355004714"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 sm:gap-4"
                >
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#25D366]/10 flex items-center justify-center shrink-0">
                    <FaWhatsapp className="w-5 h-5 sm:w-6 sm:h-6 text-[#25D366]" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-lg mb-0.5">
                      {t("labels.whatsapp")}
                    </p>
                    <p className="text-xs sm:text-base text-muted-foreground hover:text-[#25D366] transition-colors">
                      {t("values.whatsappText")}
                    </p>
                  </div>
                </a>
              </Card>

              <Card className="p-4 sm:p-5 border-2 border-border/80 bg-card text-card-foreground shadow-md hover:border-primary/50 transition-colors">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm sm:text-lg mb-0.5">
                      {t("labels.location")}
                    </p>
                    <p className="text-xs sm:text-base text-muted-foreground">
                      {t("values.location")}
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3"
          >
            <Card className="p-5 sm:p-8 md:p-10 border-2 border-border/80 bg-card text-card-foreground shadow-xl">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-4 sm:space-y-6"
              >
                <div>
                  <label htmlFor="name" className="block mb-1.5 font-semibold text-sm sm:text-lg">
                    {t("labels.name")}
                  </label>
                  <Input
                    id="name"
                    name="from_name"
                    placeholder={t("placeholders.name")}
                    className="w-full rounded-xl border-2 border-border bg-background dark:bg-card dark:border-white/25 px-4 py-3 text-base shadow-sm text-foreground placeholder:text-muted-foreground/70 dark:placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-1.5 font-semibold text-sm sm:text-lg">
                    {t("labels.email")}
                  </label>
                  <Input
                    id="email"
                    name="from_email"
                    type="email"
                    placeholder={t("placeholders.email")}
                    className="w-full rounded-xl border-2 border-border bg-background dark:bg-card dark:border-white/25 px-4 py-3 text-base shadow-sm text-foreground placeholder:text-muted-foreground/70 dark:placeholder:text-muted-foreground focus-visible:outline-none focus-visible:border-primary focus-visible:ring-2 focus-visible:ring-primary/30 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-1.5 font-semibold text-sm sm:text-lg">
                    {t("labels.message")}
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder={t("placeholders.message")}
                    rows={5}
                    className="border-2 border-border bg-background dark:bg-card dark:border-white/25 placeholder:text-muted-foreground/70 dark:placeholder:text-muted-foreground"
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full text-xs sm:text-base font-semibold h-11 sm:h-12"
                  size="lg"
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2 animate-spin" />
                  ) : status === "sent" ? (
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  ) : (
                    <Send className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  )}
                  {status === "sending"
                    ? t("buttons.sending")
                    : status === "sent"
                      ? t("buttons.sent")
                      : status === "error"
                        ? t("buttons.error")
                        : t("buttons.default")}
                </Button>
              </form>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
