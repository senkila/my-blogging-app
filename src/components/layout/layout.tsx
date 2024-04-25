import { Footer, PageHeader } from '@/src/components'

//@ts-ignore
export function PageLayout({ children }) {
    return (
        <div className="min-h-screen">
            <div className="flex flex-col min-h-screen container mx-auto max-w-4xl bg-white px-6">
                <section className="flex flex-col items-center bg-white z-50">
                    <PageHeader />
                </section>
                <section className="flex flex-col flex-grow mx-4">
                    {children}
                </section>
                <Footer />
            </div>
        </div>
    )
}

export default PageLayout
