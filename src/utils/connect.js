const { MongoClient } = require('mongodb')

// Replace the following with your Atlas connection string
export const mongoDbUrl =
    'mongodb+srv://csengly:hks11c4Fgt9T1lV3@senki-test-01.glsgxqb.mongodb.net/?retryWrites=true&w=majority&appName=senki-test-01'

// Connect to your Atlas cluster
const client = new MongoClient(url)

async function run() {
    try {
        await client.connect()
        console.log('Successfully connected to Atlas')
    } catch (err) {
        console.log(err.stack)
    } finally {
        await client.close()
    }
}

run().catch(console.dir)
