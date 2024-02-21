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
// 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