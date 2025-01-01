import { GoogleGenerativeAI } from "@google/generative-ai";
import OpenAI from "openai";
const genAI = new GoogleGenerativeAI("AIzaSyD_YFV2jqp-QVcMUOWMb87RCP6mmZLijlM");

export default genAI;

// const configuration = new Configuration({
//     // organization: "org-VB0BTsxKlMiYKXiA1c9NillN",
//     apiKey: process.env.OPENAI_KEY
// })

// const openai = new OpenAIApi(configuration)

const openai = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});

export { openai };
