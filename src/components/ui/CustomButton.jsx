import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Reusable Button component supporting primary & outlined/secondary variants,
 * optional Link wrapper via `href`, and standard button props.
 * 
 * Variants:
 * - primary: background = brand-logo-color (#005EA6), text = white
 * - outline (or secondary): background = white, text = black/slate-900, border = slate-200/slate-300
 */
export default function CustomButton({
  children,
  variant = "primary",
  size = "md",
  href,
  className,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-xl transition-all duration-300 shadow-md hover:scale-105 active:scale-95 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary:
      "bg-brand-logo-color hover:bg-[#CA9400] text-slate-950 border border-transparent",
    outline:
      "bg-white hover:bg-slate-100 text-slate-900 border border-slate-200 shadow-sm",
    secondary:
      "bg-white hover:bg-slate-100 text-slate-900 border border-slate-200 shadow-sm",
  };

  const sizes = {
    sm: "px-5 py-2 text-xs",
    md: "px-8 py-3.5 text-sm",
    lg: "px-10 py-4 text-base",
  };

  const combinedClasses = cn(
    baseStyles,
    variants[variant] || variants.primary,
    sizes[size] || sizes.md,
    className
  );

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
