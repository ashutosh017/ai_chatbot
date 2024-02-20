import OpenAI from "openai";

const openai = new OpenAI({apiKey:'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', dangerouslyAllowBrowser: true});

export default async function query(input) {
  const completion = await openai.chat.completions.create({
    messages: [{ role: "system", content: input }],
    model: "gpt-3.5-turbo",
  });
  console.log(completion.choices[0].message);

  return completion.choices[0].message;
  
}

// main();