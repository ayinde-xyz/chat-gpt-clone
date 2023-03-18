// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import query from '../../lib/queryApi'
import admin from "firebase-admin"
import { adminDb } from '../../firebaseAdmin'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../firebase'

type Data = {
  answer: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const {prompt, chatId, model, session} = req.body

    if (!prompt) {
      res.status(400).json({answer: "Please provide a prompt"})
      return
    }

    if(!chatId) {
      res.status(400).json({answer: "Please provide a valid Chat ID!"})
      return
    }

    // console.log(req.body)

    // Chat GPT query

    const response = await query(prompt, chatId, model)

    const message: Message = {
      text: response || "Chat GPT was unable to find an answer",
      createdAt: admin.firestore.FieldValue.serverTimestamp(),
      user: {
        _id: "ChatGPT",
        name: "ChatGPT",
        avatar: "https://links.papareact.com/89k",
      }
        

    }

    // await addDoc(
    //   collection(db, "users", session?.user?.email!, "chats", chatId, "messages"), 
    //   message
    // )

    await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message)

  res.status(200).json({ answer: message.text })
}
