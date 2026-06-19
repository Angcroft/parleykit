"use client";

import IconBase from "./IconBase";

export default function CollapseIcon() {
    return (
        <>
        <IconBase className="hs-collapse-open:hidden size-4" viewBox="0 0 24 24">
            <line x1="3" x2="21" y1="6" y2="6" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <line x1="3" x2="21" y1="12" y2="12" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <line x1="3" x2="21" y1="18" y2="18" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </IconBase>

        <IconBase className="hs-collapse-open:block hidden size-4" viewBox="0 0 24 24">
            <path d="M18 6 6 18" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
            <path d="m6 6 12 12" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
        </IconBase>
        </>
    );
}