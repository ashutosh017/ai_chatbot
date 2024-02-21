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
