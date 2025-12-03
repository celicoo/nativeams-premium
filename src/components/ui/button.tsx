"use client";

import { cn } from "@/lib/utils";
import { forwardRef } from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-[3px]",
          "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#35ad55]",
          "disabled:opacity-50 disabled:cursor-not-allowed",
          {
            "bg-[#35ad55] text-white hover:bg-[#284400] active:bg-[#1a2d00]":
              variant === "primary",
            "bg-[#f4eee1] text-black hover:bg-[#e8dcc8] active:bg-[#dcd0bc]":
              variant === "secondary",
            "border-2 border-current text-inherit hover:bg-white/10 active:bg-white/20":
              variant === "outline",
            "text-gray-700 hover:bg-gray-100 active:bg-gray-200":
              variant === "ghost",
          },
          {
            "px-4 py-2 text-sm": size === "sm",
            "px-5 py-2.5 text-base": size === "md",
            "px-6 py-3 text-lg": size === "lg",
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
