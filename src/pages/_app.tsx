import type { AppProps } from 'next/app'
import PageLayout from '../components/layout/layout'
import hljs from 'highlight.js'
import 'highlight.js/styles/tokyo-night-dark.css'
import { useEffect } from 'react'

export default function MyApp({ Component, pageProps }: AppProps) {
    console.log('rendering MyApp')
    useEffect(() => {
        hljs.highlightAll()
    })
    return (
        <PageLayout>
            <Component {...pageProps} />
        </PageLayout>
    )
}
