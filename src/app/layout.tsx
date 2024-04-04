import type { Metadata } from 'next'
import { Young_Serif } from 'next/font/google'
import './globals.css'
import PageLayout from '../components/page-layout/PageLayout'

import AppContextProvider from '../components/context/AppContext'

export const young_serif = Young_Serif({
    subsets: ['latin'],
    weight: '400',
})

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
