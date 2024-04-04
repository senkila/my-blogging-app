import type { AppProps } from 'next/app'
import PageLayout from '../components/page-layout/PageLayout'

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <PageLayout>
            <Component {...pageProps} />
        </PageLayout>
    )
}
