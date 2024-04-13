'use client'
import { useContext, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { AppContext, FullBlogContent, BackLink } from 'src/components'
import hljs from 'highlight.js'

export default function Page({ params }: { params: { pageId: string } }) {
    const { entries } = useContext(AppContext)
    const router = useRouter()

    const entry = entries.find((entry) => entry.id === params.pageId)

    useEffect(() => {
        document.querySelectorAll('pre').forEach((el) => {
            hljs.highlightElement(el)
        })
    }, [])

    return (
        <>
            <BackLink className={'pt-6'} href={'/'} />
            <FullBlogContent entry={entry} preview={false} />
        </>
    )
}
