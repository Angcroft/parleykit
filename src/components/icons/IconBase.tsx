"use client"

import { CSSProperties, ReactNode } from "react";

interface IconBaseProps {
    className: string;
    style: CSSProperties;
    children: ReactNode;

}

export default function IconBase({className, style, children}: IconBaseProps) {
    return(
        <svg
            className={className}
            style={style}
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
        >
            {children}
        </svg>
    );
}