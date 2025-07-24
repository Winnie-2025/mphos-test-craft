import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 hover:scale-[1.02]",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-gold to-gold-light text-primary-foreground hover:shadow-2xl hover:shadow-gold/50 border border-gold/20",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-lg hover:shadow-xl",
        outline:
          "border-2 border-gold/30 bg-background/50 text-foreground hover:bg-gold/10 hover:border-gold/60 shadow-lg hover:shadow-gold/20 backdrop-blur-sm",
        secondary:
          "bg-secondary/80 text-secondary-foreground hover:bg-secondary backdrop-blur-sm border border-border/30 shadow-lg hover:shadow-xl",
        ghost: "hover:bg-gold/10 hover:text-gold transition-all duration-300 backdrop-blur-sm",
        link: "text-gold underline-offset-4 hover:underline hover:text-gold-light",
        hero: "bg-gradient-to-r from-gold via-gold-light to-purple text-primary-foreground hover:shadow-2xl hover:shadow-gold/40 transform hover:scale-[1.05] transition-all duration-300 border border-gold/30",
        accent: "bg-gradient-to-r from-purple to-blue text-accent-foreground hover:shadow-xl hover:shadow-purple/30 border border-purple/20",
        premium: "bg-gradient-to-r from-gold to-purple text-primary-foreground shadow-2xl hover:shadow-gold/50 hover:scale-[1.05] border-2 border-gold/30 backdrop-blur-sm",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
