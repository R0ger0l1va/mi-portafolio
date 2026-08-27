import { type ComponentPropsWithoutRef, type ReactNode } from "react"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  className?: string
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string
  className?: string
  background?: ReactNode
  Icon?: React.ElementType | string
  iconUrl?: string
  description?: string
  href?: string
  cta?: string
  level?: number
  colSpan?: string
  children?: ReactNode
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  iconUrl,
  description,
  href,
  cta,
  level,
  colSpan,
  children,
  ...props
}: BentoCardProps) => {
  const iconSrc = iconUrl ?? (typeof Icon === "string" ? Icon : undefined)
  const IconComponent = typeof Icon === "function" ? Icon : undefined

  return (
    <div
      className={cn(
        "group relative col-span-1 flex flex-col gap-5 overflow-hidden rounded-xl p-6 md:p-7",
        "bg-card border border-border",
        "shadow-[0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        "dark:shadow-[0_-20px_80px_-20px_#ffffff1f_inset] dark:border-[rgba(255,255,255,.1)]",
        "transition-all duration-300 hover:border-primary/50 hover:shadow-lg",
        colSpan,
        className
      )}
      {...props}
    >
      {background}

      <div className="flex items-center gap-4">
        {iconSrc ? (
          <img
            src={iconSrc}
            alt={name}
            className="h-12 w-12 shrink-0 object-contain"
          />
        ) : IconComponent ? (
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
            <IconComponent className="h-7 w-7 text-primary" />
          </div>
        ) : null}
        <h3 className="truncate text-xl md:text-2xl font-bold text-foreground">
          {name}
        </h3>
      </div>

      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}

      {children && <div className="flex-1">{children}</div>}

      {href && cta && (
        <div className="pointer-events-none absolute bottom-0 hidden w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex">
          <Button
            variant="link"
            size="sm"
            className="pointer-events-auto p-0"
            render={<a href={href} />}
            nativeButton={false}
          >
            {cta}
            <ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
          </Button>
        </div>
      )}

      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-primary/3" />
    </div>
  )
}

export { BentoCard, BentoGrid }
