import BaseLink from "@/components/ui/buttons/BaseLink";

export default function HeroSection() {
    return(
        <section className="relative overflow-hidden py-20 md:py-32 text-center">
            <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
                A
            </div>

            <div className="relative max-w-2xl mx-auto px-4 flex flex-col items-center gap-6">
                    <h1 className="text-4xl md:text-5xl font-serif text-ink mb-4">
                        Where the fate of the world is decided by betrayal
                    </h1>
                    <p className="text-xl text-ink-muted mb-8">
                        Revive old times Diplomacy. Negotiate, ally, betray.<br/>
                        <strong>Redefine the world and take the reins of destiny</strong>
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <BaseLink
                            href="#"
                            variant="primary"
                            size="lg"
                        >
                            Play now
                        </BaseLink>
                    </div>
            </div>
        </section>
    )
}