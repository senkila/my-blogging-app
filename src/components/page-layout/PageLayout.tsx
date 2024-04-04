import { Footer, PageHeader } from '..'

//@ts-ignore
export function PageLayout({ children }) {
    return (
        <main className="flex min-h-screen flex-col justify-between">
            <div className="flex flex-col container mx-auto max-w-4xl bg-white px-6">
                <section className="flex flex-col items-center bg-white z-50">
                    <PageHeader />
                </section>
                <section className="text-black  bg-white">{children}</section>
                <Footer />
            </div>
        </main>
    )
}

export default PageLayout
