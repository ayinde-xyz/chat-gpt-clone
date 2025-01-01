import { GenerateContentResult } from "@google/generative-ai";

interface Message {
  text: string | GenerateContentResult;
  createdAt: admin.firestore.Timestamp;
  user: {
    _id: string;
    name: string;
    avatar: string;
  };
}
