import clientPromise from '@/src/lib/mongodb'
import { BlogDBEntry } from '@/types/blog-data'
import { NextRequest } from 'next/server'

export async function GET(request: NextRequest) {
    console.log('API DEBUG: /blog GET')

    const client = await clientPromise
    const db = client.db('blog')
    const collection = db.collection('entries')

    const response = await collection.find({}).limit(10).toArray()

    console.log('API SUCCESS! METHOD:GET, Route: "/blog"', { response })
    return Response.json(response)
}

export async function POST(request: NextRequest) {
    const entry: BlogDBEntry = await request.json()
    console.log('API DEBUG: /blog POST', {
        request: { body: request.body },
        entry,
    })
    const { title, content, dateCreated } = entry
    if (!title || !dateCreated || !content) {
        const error = { errorId: 501, message: 'Error with request input' }
        return new Response(JSON.stringify(error), { status: 501 })
    }

    const client = await clientPromise
    const db = client.db('blog')
    const collection = db.collection('entries')

    const response = await collection.insertOne(entry)

    if (!response.acknowledged) {
        const error = { errorId: 501, message: 'Failed to update database' }
        return new Response(JSON.stringify(error), { status: 501 })
    }

    const checkEntry = await collection.findOne({ _id: response.insertedId })
    console.log('API SUCCESS! METHOD:POST, Route: "/blog"', {
        insertOne: response,
        entry: checkEntry,
    })

    return Response.json(response)
}
