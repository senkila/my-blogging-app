import clientPromise from '@/src/lib/mongodb'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
    const id = request.nextUrl.searchParams.get('_id') || ''
    const client = await clientPromise
    const db = client.db('blog')
    const collection = db.collection('entries')

    console.log('debug:', { id })
    // @ts-ignore
    const response = await collection.findOne({ _id: id })

    console.log('API GET route: /blog/search', { response })

    return Response.json(response)
}
