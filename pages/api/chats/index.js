import clientPromise from "../lib/MongoDB";
import { ObjectId } from "mongodb";

export const config = {
  api: {
    responseLimit: false,
  },
};
export default async function handler(req, res) {

  const client = await clientPromise;
  const db = await client.db();
  const body = req.body;
  const id = new ObjectId()

  if (req.method === "POST") {
    await db
      .collection("chats")
      .insertOne({
        _id: id,
        senderId: ObjectId(body.senderId),
        receiverId: ObjectId(body.receiverId),
        channel: 'chat:' + body.senderId + body.receiverId,
        messages: [],
        createdAt: new Date(),
      });


      await db.collection('users').updateOne({_id: ObjectId(body.senderId)}, {$push: {chats: id}})
      await db.collection('users').updateOne({_id: ObjectId(body.receiverId)}, {$push: {chats: id}})

    res.status(200).json({ message: "Chat creado correctamente" });
  }

  if(req.method === "DELETE"){


    await db.collection('chats').deleteOne({channel: body.channel});
    await db.collection('messages').deleteMany({chatChannel: body.channel});
    await db.collection('users').updateOne({_id: ObjectId(body.user._id)},{$pull: {chats: ObjectId(body.chatId)}})
    await db.collection('users').updateOne({_id: ObjectId(body.otherUser._id)},{$pull: {chats: ObjectId(body.chatId)}})

    res.status(200).json({ message: "Chat eliminado correctamente" });

  }
}
