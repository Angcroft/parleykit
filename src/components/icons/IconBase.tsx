"use client"

import { CSSProperties, ReactNode } from "react";

interface IconBaseProps {
    className?: string;
    style?: CSSProperties;
    children: ReactNode;
    viewBox?: string;
}

export default function IconBase({className, style, children, viewBox}: IconBaseProps) {
    return(
        <svg
            className={className}
            style={style}
            viewBox={viewBox != null
                        ? viewBox
                        : "0 0 1024 1024"
                    }
            xmlns="http://www.w3.org/2000/svg"
        >
            {children}
        </svg>
    );
}