"use client"

export default function CollapseButton() {
    return(
        <button type="button" 
                className="hs-collapse-toggle md:hidden relative size-9 flex 
                            justify-center items-center font-medium text-sm rounded-lg bg-layer 
                            border border-layer-line text-layer-foreground hover:bg-layer-hover 
                            focus:outline-hidden focus:bg-layer-focus disabled:opacity-50 
                            disabled:pointer-events-none" 
                id="hs-header-base-collapse"  
                aria-expanded="false" 
                aria-controls="hs-header-base" 
                aria-label="Toggle navigation"  
                data-hs-collapse="#hs-header-base"
        >
            <svg    className="hs-collapse-open:hidden size-4" 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
            >
                <line x1="3" x2="21" y1="6" y2="6"/>
                <line x1="3" x2="21" y1="12" y2="12"/>
                <line x1="3" x2="21" y1="18" y2="18"/>
            </svg>
            <svg    className="hs-collapse-open:block shrink-0 hidden size-4" 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
            >
                <path d="M18 6 6 18"/>
                <path d="m6 6 12 12"/>
            </svg>
            <span className="sr-only">Toggle navigation</span>
        </button>
    );
}