import './globals.css'

import type { Metadata } from 'next'
import PageLayout from '../components/page-layout/PageLayout'
import AppContextProvider from '../components/context/AppContext'

export const metadata: Metadata = {
    title: 'Overcoming the Imposter',
    description: 'Journey from no-ops to dev-ops',
}

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <head></head>
            <body>
                <AppContextProvider>
                    <PageLayout>{children}</PageLayout>
                </AppContextProvider>
            </body>
        </html>
    )
}
