// components/LanguageToggle.tsx
"use client";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggle = () => {
    const next = locale === "es" ? "en" : "es";
    // Reemplazar el locale actual en la URL
    const segments = pathname.split("/");
    segments[1] = next;
    router.push(segments.join("/"));
  };

  return (
    <Button variant="outline" size="sm" onClick={toggle}>
      {locale === "es" ? "EN" : "ES"}
    </Button>
  );
}
