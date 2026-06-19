"use client"

import Link from "next/link";
import { ReactNode } from "react";

interface BaseLinkProps {
    href: string;
    children?: ReactNode;
    iconLeft?: ReactNode;
    iconRight?: ReactNode;
    ariaLabel?: string;
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success';
    size?: 'sm' | 'md' | 'lg';
    isActive?: boolean;
    className?: string;
}

const BASE =
    `inline-flex items-center justify-center font-medium transition-colors 
    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2`;

const VARIANT: Record<NonNullable<BaseLinkProps["variant"]>, string> = {
    primary:
        "bg-burgundy text-parchment hover:bg-burgundy/90 active:bg-parchment shadow-vintage focus-visible:ring-gold",
    secondary:
        "bg-surface text-ink hover:bg-surface-hover active:bg-parchment-dark border border-border",
    ghost:
        "text-ink hover:bg-parchment-dark active:bg-parchment-dark focus-visible:ring-gold",
    danger:
        "bg-burgundy text-parchment hover:bg-burgundy/90 active:bg-burgundy shadow-vintage",
    success:
        "bg-olive text-parchment hover:bg-olive/90 active:bg-olive shadow-vintage",
};

const SIZE: Record<NonNullable<BaseLinkProps["size"]>, string> = {
    sm: "text-sm px-3 py-1.5 rounded-md gap-1.5",
    md: "text-base px-4 py-2 rounded-lg gap-2",
    lg: "text-lg px-6 py-3 rounded-xl gap-3",
};

const ACTIVE_CLASS = "bg-burgundy text-parchment shadow-sm font-medium";

export default function BaseLink({
    href, children, iconLeft, iconRight, ariaLabel, 
    variant = 'ghost', size = 'md', isActive = false, className = ''}: BaseLinkProps) {
        const variantClasses = VARIANT[variant];
        const sizeClasses = SIZE[size];
        const activeClasses = isActive ? ACTIVE_CLASS : '';

        const combinedClasses = [
            BASE,
            variantClasses,
            sizeClasses,
            activeClasses,
            className,
        ]   .filter(Boolean)
            .join(" ");

        return(
            <Link
                href={href}
                className={combinedClasses}
                aria-label={ariaLabel}
                aria-current={isActive ? 'page' : undefined}
            >

            {
                iconLeft != null
                    ? <span className="shrink-0 w-4 h-4 me-3 md:me-2">
                        {iconLeft}
                        </span>
                    : null
            }
                {children}
            {
                iconRight != null
                    ? <span className="shrink-0 w-4 h-4 ms-3 md:ms-2">
                        {iconRight}
                        </span>
                    : null
            }
            </Link>
        );
}