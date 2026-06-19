import HomeIcon from "../icons/HomeIcon";
import CollapseButton from "./buttons/ColapseButton";
import HeaderButton from "./buttons/HeaderButton";

export default function MainHeader() {
    return (
        <header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full bg-parchment border-b border-border shadow-sm">
            <nav className="
                relative max-w-340 w-full mx-auto md:flex md:items-center md:justify-between 
                md:gap-3 py-2 px-4 sm:px-6 lg:px-8"
            >
                <div className="flex justify-between items-center gap-x-1">
                    <a  className="flex-none font-semibold text-xl text-foreground focus:outline-hidden focus:opacity-80" 
                        href="#" 
                        aria-label="Brand"
                    >
                        Brand
                    </a>

                    <CollapseButton></CollapseButton>
                </div>

                <div    id="hs-header-base" 
                        className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block"
                        role="region"
                        aria-labelledby="hs-header-base-collapse"
                >
                    <div className="overflow-hidden overflow-y-auto max-h-[75vh] 
                                    [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-none 
                                    [&::-webkit-scrollbar-track]:bg-scrollbar-track 
                                    [&::-webkit-scrollbar-thumb]:bg-scrollbar-thumb"
                    >
                        <div className="py-2 md:py-0  flex flex-col md:flex-row md:items-center gap-0.5 md:gap-1">
                            <div className="grow">
                                <div className="flex flex-col md:flex-row md:justify-end md:items-center gap-0.5 md:gap-1">
                                    <HeaderButton 
                                        href="/" 
                                        icon={<HomeIcon></HomeIcon>}
                                        isActive={true} 
                                        ariaLabel="Go to Home"
                                    >
                                        Home
                                    </HeaderButton>
                                    <HeaderButton
                                        href="/rules"
                                        isActive={false}
                                        ariaLabel="Got to Rules"
                                    >
                                        Rules
                                    </HeaderButton>
                                    <HeaderButton
                                        href="/about"
                                        isActive={false}
                                        ariaLabel="Go to About"
                                    >
                                        About
                                    </HeaderButton>

                                    <div className="my-2 md:my-0 md:mx-2">
                                        <div className="w-full h-px md:h-4 md:border-s"></div>
                                    </div>

                                    <HeaderButton
                                        href="#"
                                        isActive={false}
                                        ariaLabel="Sign In"
                                        variant="secondary"
                                    >
                                        Sign In
                                    </HeaderButton>
                                    <HeaderButton
                                        href="#"
                                        isActive={false}
                                        ariaLabel="Sign Up"
                                        variant="primary"
                                    >
                                        Sign Up
                                    </HeaderButton>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
        </header>
    );
}