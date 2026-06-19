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
        `bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800
        focus-visible:ring-blue-500 shadow-sm`,
    secondary:
        `bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300 
        focus-visible:ring-gray-400 dark:bg-gray-700 dark:text-gray-100 dark:hover:bg-gray-600`,
    ghost:
        `text-gray-700 hover:bg-gray-100 active:bg-gray-200 focus-visible:ring-gray-400 
        dark:text-gray-300 dark:hover:bg-gray-800 dark:active:bg-gray-700`,
    danger:
        "bg-red-600 text-white hover:bg-red-700 active:bg-red-800 focus-visible:ring-red-500 shadow-sm",
    success:
        "bg-green-600 text-white hover:bg-green-700 active:bg-green-800 focus-visible:ring-green-500 shadow-sm",
};

const SIZE: Record<NonNullable<BaseLinkProps["size"]>, string> = {
    sm: "text-sm px-3 py-1.5 rounded-md gap-1.5",
    md: "text-base px-4 py-2 rounded-lg gap-2",
    lg: "text-lg px-6 py-3 rounded-xl gap-3",
};

const ACTIVE_CLASS = "ring-2 ring-offset-2 ring-blue-500 font-semibold";

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