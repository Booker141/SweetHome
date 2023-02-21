import clientPromise from '../../lib/MongoDB'
import { ObjectId } from 'mongodb'

export default async function handler (req, res) {
  const client = await clientPromise
  const db = await client.db()
  const user = await db.collection('users').findOne({ username: req.query.username })
  const body = req.body

  console.log(user)
  console.log(ObjectId(user._id))

  if (req.method === 'GET') {
    const data = await db.collection('users').findOne({ username: req.query.username })

    console.log(data)

    const user = JSON.parse(JSON.stringify(data))
    res.status(200).json(user)
  }

  if (req.method === 'PUT') {
    await db.collection('users').replaceOne({ username: req.query.username }, {
      _id: user._id,
      email: user.email,
      firstname: body.firstname,
      lastname: body.lastname,
      username: user.username,
      password: user.password,
      phone: body.phone,
      gender: body.gender,
      birthdate: Date.parse(body.birthdate),
      image: user.image,
      status: user.status,
      role: user.role,
      createdAt: user.createdAt,
      accountId: user.accountId,
      biography: body.biography,
      followers: user.followers,
      following: user.following,
      isCaretaker: user.isCaretaker,
      pets: user.pets
    })

    res.status(201).json({ message: 'Se ha guardado la información correctamente' })
  }

  if (req.method === 'DELETE') {
    await db.collection('users').deleteOne({ username: req.query.username })
    await db.collection('accounts').deleteOne({ userId: ObjectId(user._id) })
    await db.collection('pets').remove({ ownerId: ObjectId(user._id) })
    await db.collection('posts').remove({ userId: ObjectId(user._id) })
    await db.collection('comments').remove({ userId: ObjectId(user._id) })
    await db.collection('notifications').remove({ $or: [{ userIdFrom: ObjectId(user._id) }, { userIdTo: ObjectId(user._id) }] })

    res.status(200).json({ message: 'Usuario eliminado correctamente' })
  }
}
