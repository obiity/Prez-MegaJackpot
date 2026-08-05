import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-mj-gold)] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[var(--color-mj-red)] text-white hover:bg-[var(--color-mj-red-dark)] hover:shadow-[0_4px_14px_0_rgba(218,21,31,0.39)]",
        secondary: "bg-[var(--color-mj-blue-dark)] text-white hover:bg-[var(--color-mj-blue)]",
        outline: "border-2 border-[var(--color-mj-blue-dark)] text-[var(--color-mj-blue-dark)] hover:bg-[var(--color-mj-blue-dark)] hover:text-white",
        ghost: "hover:bg-gray-100 text-[var(--color-mj-gray-dark)]",
        gold: "bg-[var(--color-mj-gold)] text-[var(--color-mj-blue-dark)] hover:bg-yellow-500 dark:hover:bg-amber-600 hover:shadow-[0_4px_14px_0_rgba(251,181,5,0.39)]",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 rounded-md px-4",
        lg: "h-14 rounded-md px-10 text-base",
        icon: "h-11 w-11",
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
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
