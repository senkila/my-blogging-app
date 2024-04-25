// 'use server'

// import { BlogDBEntry } from '@/types/blog-data'
// import { revalidatePath, revalidateTag } from 'next/cache'

// const url = 'http://localhost:3000/blog'

// export const getBlogEntris = async (criteria?: any): Promise<BlogDBEntry[]> => {
//     console.log('FETCHING: getBlogEntries')
//     const res = await fetch(url, {
//         method: 'GET',
//         headers: { 'Content-Type': 'application/json' },
//         cache: 'no-store',
//     })
//     const response: BlogDBEntry[] = await res.json()
//     console.log('FETCHED: getBlogEntries', { response })

//     return response
// }
