"use client";

import IconBase from "./IconBase";
import type { CSSProperties } from "react";

interface HomeIconProps {
    className?: string;
    style?: CSSProperties;
}

export default function HomeIcon({ className = "", style = {} }: HomeIconProps) {
    return (
        <IconBase className={className} style={style}>
            <path
                d="M512 64 L128 448 h128 v512 h192 V704 h128 v256 h192 V448 h128 L512 64 Z"
                fill="currentColor"
            />
            <path
                d="M464 768 h96 v192 h-96 Z"
                fill="currentColor"
            />
        </IconBase>
    );
}