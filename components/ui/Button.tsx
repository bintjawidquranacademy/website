"use client";

import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

type SharedProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

type LinkButtonProps = SharedProps &
  { href: string } &
  Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">;

type NativeButtonProps = SharedProps &
  Omit<ComponentPropsWithoutRef<"button">, "className"> & { href?: undefined };

type ButtonProps = LinkButtonProps | NativeButtonProps;

const variants = {
  primary:
    "border border-transparent bg-[linear-gradient(135deg,#0f4d3a,#174f41)] text-white shadow-[0_18px_40px_rgba(15,77,58,0.24)] hover:-translate-y-0.5 hover:shadow-[0_24px_60px_rgba(15,77,58,0.28)]",
  secondary:
    "border border-[var(--line)] bg-white/70 text-[var(--ink)] backdrop-blur hover:-translate-y-0.5 hover:border-[var(--accent)] hover:bg-white",
  ghost:
    "border border-transparent bg-transparent text-[var(--primary)] hover:bg-white/60",
};

export default function Button(props: ButtonProps) {
  const baseClassName = cn(
    "inline-flex min-h-12 items-center justify-center rounded-full px-5 py-3 text-sm font-semibold tracking-[0.16em] uppercase transition duration-300",
    variants[props.variant ?? "primary"],
    props.className,
  );

  if ("href" in props && props.href) {
    const { children, href, className: _className, variant: _variant, ...linkProps } = props;
    void _className;
    void _variant;
    return (
      <Link className={baseClassName} href={href} {...linkProps}>
        {children}
      </Link>
    );
  }

  const {
    children,
    className: _className,
    variant: _variant,
    type = "button",
    ...buttonProps
  } = props as NativeButtonProps;
  void _className;
  void _variant;

  return (
    <button className={baseClassName} type={type} {...buttonProps}>
      {children}
    </button>
  );
}
