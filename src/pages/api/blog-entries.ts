import clientPromise from '@/src/lib/mongodb'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    try {
        const client = await clientPromise
        const db = client.db('blog')
        const collection = db.collection('entries')
        // req.query
        if (req.method === 'GET') {
            const entries = await collection.find(req.query).toArray()
            console.log('ap/blog/handler', entries)
            return res.json(entries[0])

            // Handle any other HTTP method
        } else {
        }
    } catch (e) {
        console.error(e)
    }
}
