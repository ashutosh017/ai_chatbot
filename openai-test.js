import OpenAI from "openai";

// const openai = new OpenAI({apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY, dangerouslyAllowBrowser:true});
const openai = new OpenAI({apiKey: process.env.local.OPENAI_API_KEY});

export default async function query(input) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: input }],
    model: "gpt-3.5-turbo",
  });
  console.log(completion.choices[0].message);

  return completion.choices[0].message;
  
}
