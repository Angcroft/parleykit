export default function AboutPage() {
    return(
        <section className="relative overflow-hidden py-20 md:py-8 text-center">
            <div className="relative max-w-2xl mx-auto px-4 flex flex-col items-center gap-6">
                <h1 className="text-3xl md:text-3xl font-serif text-ink mb-4 text-center">
                    About ParleyKit
                </h1>

                <p className="text-l text-ink-muted mb-8">
                    ParleyKit is an open-source web multiplayer game based on the boardgame Diplomacy by
                    Avalon Hill, in which you have to negotiate, order your troops and advance to try to try
                    to conquer Europe. To win you have to be strategic and diplomatic, making alliances and knowing
                    when you have to backstab your friends to rise in glory of conquest.
                </p>
            </div>
        </section>
    )
}