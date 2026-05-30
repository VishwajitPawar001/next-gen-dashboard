export default function Loading() {
    return (
        <div className="min-h-screen flex font-sans">
            <nav className="w-20 md:w-64 border-r border-neon-blue hidden sm:block p-4">
                <div className="system-panel h-full rounded-lg animate-pulse opacity-50"></div>
            </nav>

            <main className="flex-1 p-6 md:p-10">
                <div className="max-w-6xl mx-auto">
                    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-pulse">

                        <article className="col-span-1 md:col-span-2 lg:col-span-3 h-32 system-panel rounded-lg opacity-60"></article>
                        <article className="col-span-1 lg:col-span-3 h-32 system-panel rounded-lg opacity-50"></article>
                        <article className="col-span-1 lg:col-span-3 h-32 system-panel rounded-lg opacity-50"></article>
                        <article className="col-span-1 md:col-span-2 lg:col-span-3 h-40 system-panel rounded-lg opacity-50"></article>
                    </section>
                </div>
            </main>
        </div>


    );
}