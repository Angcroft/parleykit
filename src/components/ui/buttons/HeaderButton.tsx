"use client"

import { ReactNode } from "react";
import Link from "next/link";

interface HeaderButtonProps {
    href: string;
    icon?: ReactNode;
    children: ReactNode;
    isActive: boolean;
    className?: string;
    ariaLabel: string,
}

export default function HeaderButton({href, icon, children, isActive, className, ariaLabel}: HeaderButtonProps) {

    return(
        <Link  
            className={
                className != null
                    ?   className
                    :   `p-2 flex items-center text-sm bg-navbar-nav-active 
                        text-navbar-nav-foreground hover:bg-navbar-nav-hover 
                        rounded-lg focus:outline-hidden focus:bg-navbar-nav-focus`
            }
            href={href}
            aria-current={
                isActive  == true
                    ? "page"
                    : "false"
            }
            aria-label={ariaLabel}
        >
            <span className="shrink-0 w-4 h-4 me-3 md:me-2">
                {icon}
            </span>

            {children}
        </Link>
    );
}