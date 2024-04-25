import { BlogDBEntry } from '@/types/blog-data'
import { hostUrl } from '../constants'

export const getBlogEntris = async (criteria?: any): Promise<BlogDBEntry[]> => {
    console.log('FETCHING: getBlogEntries')
    const res = await fetch(`${hostUrl}/blog`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
        cache: 'no-store',
    })
    const response: BlogDBEntry[] = await res.json()
    console.log('FETCHED: getBlogEntries', { response })

    return response
}
