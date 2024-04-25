import { FullBlogContent, BackLink } from 'src/components'
import { BlogDBEntry } from '@/types/blog-data'

const getEntryById = async (_id?: any): Promise<BlogDBEntry> => {
    const res = await fetch(`http://localhost:3000/blog/search?_id=${_id}`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store',
    })
    const response: BlogDBEntry = await res.json()
    return response
}

export default async function Page({ params }: { params: { pageId: string } }) {
    const entry: BlogDBEntry = await getEntryById(params.pageId)
    return (
        <>
            <BackLink className={'pt-6'} href={'/'} />
            <FullBlogContent entry={entry} preview={false} />
        </>
    )
}
