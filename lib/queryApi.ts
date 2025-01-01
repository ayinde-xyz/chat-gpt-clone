// import openai from "./chatgpt";

import genAI from "./chatgpt";

const query = async (prompt: string, chatId: string, models: string) => {
  // const res = await openai.chat.completions
  //   .create({
  //     model,
  //     messages: [
  //       {
  //         role: "system",
  //         content: `You are talking to ChatGPT in chat ${chatId}. Ask me anything!`,
  //       },
  //       { role: "user", content: prompt },
  //     ],
  //     temperature: 0.9,
  //     top_p: 1,
  //     max_tokens: 1000,
  //     frequency_penalty: 0,
  //     presence_penalty: 0,
  //   })
  //   .then((res: any) => res.data.choices[0].text)
  //   .catch(
  //     (err: any) =>
  //       `Google AI was unable to find an answer for that! (Error: ${err.message})`
  //   );

  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
  const res = await model.generateContent(prompt);

  console.log(res.response.text());

  return res.response.text();
};

export default query;
