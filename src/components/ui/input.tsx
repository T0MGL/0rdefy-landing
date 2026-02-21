import * as React from "react";
import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    const [isFocused, setIsFocused] = React.useState(false);

    // Extract props that conflict with framer-motion
    const {
      onDrag, onDragStart, onDragEnd,
      onAnimationStart, onAnimationEnd, onAnimationIteration,
      onFocus: onFocusProp, onBlur: onBlurProp,
      ...inputProps
    } = props as React.ComponentProps<"input"> & {
      onDrag?: unknown;
      onDragStart?: unknown;
      onDragEnd?: unknown;
      onAnimationStart?: unknown;
      onAnimationEnd?: unknown;
      onAnimationIteration?: unknown;
    };

    return (
      <div className="relative w-full">
        <motion.input
          type={type}
          className={cn(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm transition-all duration-200",
            className,
          )}
          ref={ref}
          onFocus={(e) => {
            setIsFocused(true);
            if (onFocusProp) onFocusProp(e as React.FocusEvent<HTMLInputElement>);
          }}
          onBlur={(e) => {
            setIsFocused(false);
            if (onBlurProp) onBlurProp(e as React.FocusEvent<HTMLInputElement>);
          }}
          whileFocus={{
            scale: 1.01,
          }}
          transition={{
            type: "spring" as const,
            stiffness: 400,
            damping: 25,
          }}
          {...inputProps}
        />
        {isFocused && (
          <motion.div
            className="absolute inset-0 -z-10 rounded-md bg-primary/10 blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          />
        )}
      </div>
    );
  },
);
Input.displayName = "Input";

export { Input };
