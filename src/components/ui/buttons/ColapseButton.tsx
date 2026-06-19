"use client";

import BaseButton from "./BaseButton";
import CollapseIcon from "@/components/icons/CollapseIcon";

export default function CollapseButton() {
    return (
        <BaseButton
        variant="ghost"
        shape="rect"
        size="md"
        icon={<CollapseIcon />}
        ariaLabel="Toggle navigation"
        className="md:hidden size-9 border border-layer-line bg-layer text-layer-foreground hover:bg-layer-hover focus:bg-layer-focus"
        id="hs-header-base-collapse"
        aria-expanded={false}
        aria-controls="hs-header-base"
        data-hs-collapse="#hs-header-base"
        />
    );
}