'use client'
import { useContext } from 'react'
import { useRouter } from 'next/navigation'
import { AppContext, FullBlogContent, BackLink } from 'src/components'

export default function Page({ params }: { params: { pageId: string } }) {
    const { entries } = useContext(AppContext)
    const router = useRouter()

    const entry = entries.find((entry) => entry.id === params.pageId)

    return (
        <>
            <BackLink className={'pt-6'} href={'/'} />
            <FullBlogContent entry={entry} preview={false} />
        </>
    )
}
