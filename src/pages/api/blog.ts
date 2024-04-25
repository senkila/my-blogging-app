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

        if (req.method === 'POST') {
            const response = await collection.insertOne(req.body)

            console.log('POST: api/blog:', { body: req.body, response })
            return res.json(response)
            //         return Response.json({ resp }, { status: 200 })
        } else if (req.method === 'GET') {
            const limit = req.body?.size || 10
            const response = await collection.find({}).limit(limit).toArray()
            console.log('GET: api/blog', { body: req.body, response })
            return res.json(response)

            // Handle any other HTTP method
        }
    } catch (e) {
        console.error(e)
    }
}

// export async function GET(request: NextApiRequest, response: NextApiResponse) {
//     // console.log('GET API', request)

//     const db = client(mongoDbUrl)
//     await db.connect()
//     const collection = db.collection('blogs')

//     // const id = searchParams.get('id')
//     const entries = await collection.find({}).limit(10).toArray()

//     db.disconnect()
//     const body = {
//         entries: resp.map((doc) => {
//             return {
//                 title: doc.title,
//                 content: doc.content,
//                 dateCreated: doc.dateCreated,
//                 id: doc.id,
//             }
//         }),
//     }

//     response.setHeader('Content-Type', 'application/json')
//     response.statusCode = 200

//     // const res = new Response(, {
//     //     status: 200,
//     //     headers: {
//     //         'Content-Type': 'application/json',
//     //     },
//     // })
//     return response.json(body)
// }

// export async function POST(request: Request) {
//     const entry = request.json()
//     const client = await clientPromise
//     const db = client.db(mongoDbUrl)
//     const collection = db.collection('blogs')

//     try {
//         const resp = await collection.insertOne(entry)
//         return Response.json({ resp }, { status: 200 })
//     } catch (e) {
//         return Response.json({ e }, { status: 501 })
//     }
// }
