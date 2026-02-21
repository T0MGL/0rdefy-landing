import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow-sm",
        destructive: "bg-destructive text-destructive-foreground",
        outline: "border border-input bg-background",
        secondary: "bg-secondary text-secondary-foreground",
        ghost: "",
        link: "text-primary underline-offset-4",
        premium: "bg-primary text-black font-semibold shadow-[0_0_30px_rgba(186,234,89,0.3)]",
        "premium-outline": "border-2 border-primary/50 text-primary bg-transparent",
        glass: "backdrop-blur-xl bg-white/5 border border-white/10 text-white",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        xl: "h-14 px-10 text-lg rounded-xl",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    // Extract standard button props, excluding events that conflict with framer-motion
    const {
      onDrag, onDragStart, onDragEnd,
      onAnimationStart, onAnimationEnd, onAnimationIteration,
      ...buttonProps
    } = props as React.ButtonHTMLAttributes<HTMLButtonElement> & {
      onDrag?: unknown;
      onDragStart?: unknown;
      onDragEnd?: unknown;
      onAnimationStart?: unknown;
      onAnimationEnd?: unknown;
      onAnimationIteration?: unknown;
    };

    // Animation variants based on button type
    const getAnimationProps = () => {
      if (variant === "premium") {
        return {
          whileHover: {
            scale: 1.02,
            boxShadow: "0 0 50px rgba(186,234,89,0.5)",
          },
          whileTap: { scale: 0.98 },
          transition: {
            type: "spring" as const,
            stiffness: 400,
            damping: 17
          }
        };
      }

      if (variant === "premium-outline") {
        return {
          whileHover: {
            scale: 1.02,
            backgroundColor: "rgba(186,234,89,0.1)",
            borderColor: "rgba(186,234,89,1)",
          },
          whileTap: { scale: 0.98 },
          transition: {
            type: "spring" as const,
            stiffness: 400,
            damping: 17
          }
        };
      }

      if (variant === "glass") {
        return {
          whileHover: {
            scale: 1.01,
            backgroundColor: "rgba(255,255,255,0.1)",
          },
          whileTap: { scale: 0.99 },
          transition: {
            type: "spring" as const,
            stiffness: 400,
            damping: 17
          }
        };
      }

      if (variant === "link") {
        return {
          whileHover: {
            textDecoration: "underline",
          },
          whileTap: { scale: 0.98 },
        };
      }

      // Default animation for other variants
      return {
        whileHover: { scale: 1.01 },
        whileTap: { scale: 0.98 },
        transition: {
          type: "spring" as const,
          stiffness: 400,
          damping: 17
        }
      };
    };

    if (asChild) {
      return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
    }

    return (
      <motion.button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...getAnimationProps()}
        {...buttonProps}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
