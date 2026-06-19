"use client"

import { ReactNode } from "react";

interface BaseButtonProps {
    variant: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success';
    shape: 'rect' | 'pill' | 'circle' | 'square';
    size: 'sm' | 'md' | 'lg';
    id?: string;
    icon: ReactNode;
    fullWidth?: boolean;
    ariaLabel: string;
    children?: ReactNode;
    className?: string;
}

const BASE =
    `inline-flex items-center justify-center font-medium transition-all 
    focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 
    disabled:opacity-50 disabled:pointer-events-none cursor-pointer`;

const VARIANT: Record<BaseButtonProps["variant"], string> = {
    primary:
        `bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800 
        focus-visible:ring-blue-500 shadow-sm active:scale-[0.98]`,
    secondary:
        `bg-gray-100 text-gray-900 hover:bg-gray-200 active:bg-gray-300 
        focus-visible:ring-gray-400 dark:bg-gray-700 dark:text-gray-100 
        dark:hover:bg-gray-600 active:scale-[0.98]`,
    ghost:
        `text-gray-700 hover:bg-gray-100 active:bg-gray-200 focus-visible:ring-gray-400 
        dark:text-gray-300 dark:hover:bg-gray-800 dark:active:bg-gray-700`,
    danger:
        `bg-red-600 text-white hover:bg-red-700 active:bg-red-800 
        focus-visible:ring-red-500 shadow-sm active:scale-[0.98]`,
    success:
        `bg-green-600 text-white hover:bg-green-700 active:bg-green-800 
        focus-visible:ring-green-500 shadow-sm active:scale-[0.98]`,
};

const SHAPE: Record<BaseButtonProps["shape"], string> = {
    rect: "rounded-lg",
    pill: "rounded-full",
    circle: "rounded-full aspect-square",
    square: "rounded-none",
};

const SIZE: Record<BaseButtonProps["size"], string> = {
    sm: "text-sm px-3 py-1.5 gap-1.5",
    md: "text-base px-4 py-2 gap-2",
    lg: "text-lg px-6 py-3 gap-3",
};

export default function BaseButton({
    variant = 'primary', shape = 'rect', size = 'md', id,
    fullWidth, children, ariaLabel, icon, className}: BaseButtonProps) {
        const hasChildren = children != null;
        const variantClasses = VARIANT[variant];
        const shapeClasses = SHAPE[shape];
        const sizeClasses = SIZE[size];

        const combinedClasses = [
            BASE,
            shapeClasses,
            variantClasses,
            sizeClasses,
            fullWidth
                ? 'w-full'
                : '',
            className
        ]   .filter(Boolean)
            .join(" ");

        return(
            <button
                className={combinedClasses}
                aria-label={ariaLabel}
                id={id}
            >
                {
                    icon != null
                        ?   <span className={hasChildren ? "shrink-0 w-4 h-4" : "shrink-0 w-4 h-4"}>
                                {icon}
                            </span>
                        : null
                }
                {children}
            </button>
        )
}