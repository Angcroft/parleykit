"use client"

import { ReactNode } from "react";
import BaseLink from "./BaseLink";

interface HeaderButtonProps {
    href: string;
    icon?: ReactNode;
    variant?: 'primary' | 'secondary' | 'ghost' | 'danger' | 'success';
    children: ReactNode;
    isActive: boolean;
    ariaLabel: string,
}

export default function HeaderButton({href, icon, children, isActive, ariaLabel, variant}: HeaderButtonProps) {
    return(
        <BaseLink
            href={href}
            iconLeft={icon}
            isActive={isActive}
            ariaLabel={ariaLabel}
            variant={variant != null
                        ? variant
                        : 'ghost'
                    }
            size='md'
        >
            {children}
        </BaseLink>
    );
}