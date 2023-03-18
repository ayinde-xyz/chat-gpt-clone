import { Configuration, OpenAIApi } from "openai";



const configuration = new Configuration({
    // organization: "org-VB0BTsxKlMiYKXiA1c9NillN",
    apiKey: process.env.OPENAI_KEY
})

const openai = new OpenAIApi(configuration)

export default openai