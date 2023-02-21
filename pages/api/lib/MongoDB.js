import { MongoClient } from 'mongodb'

if (!process.env.MONGODB_URI) {
  throw new Error('No se ha podido conectar a la base de datos')
}

const uri = process.env.MONGODB_URI

let client
let clientPromise

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    global._mongoClientPromise = client.connect()
  }

  clientPromise = global._mongoClientPromise
} else {
  client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  clientPromise = client.connect()
}

export default clientPromise
