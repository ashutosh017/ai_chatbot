"use client";
import React, { useEffect, useRef, useState } from "react";
import query from "../../openai-test";
function ChatInput() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: "chatgpt", content: "Hello! How can I help you today?" },
  ]);
  const msgEnd = useRef<HTMLDivElement | null>(null);
  const handleSendMessage = async () => {
    const text = input;
    setInput("");
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: text },
    ]);
    console.log(messages);
    const res = await query(text);
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "chatgpt", content: res.content ? res.content : "" },
    ]);
  };
  useEffect(() => {
    if (msgEnd.current) {
      msgEnd.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);
  const handleEnter = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key == "Enter") {
      setInput("");
      handleSendMessage();
    }
  };
  return (
    <div className="flex flex-col h-screen">
      <div className="flex  bg-gray-800 p-4">
        <div className="text-white font-bold sticky top-0">Chat Bot</div>
      </div>
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex-1 overflow-auto px-4 py-2 ">
          {messages.map((message, i) => (
            <div
              key={i}
              className={`flex  ${
                message.role === "chatgpt" ? "bg-gray-800" : "bg-blue-500"
              } rounded-lg p-4 mb-2 max-w-md self-start text-white`}
            >
              <p className="overflow-auto whitespace-pre-line">
                {message.role === "user" ? "User: " : "ChatGPT: "}
                {message.content}
              </p>
              <div ref={msgEnd} />
            </div>
          ))}
        </div>
        <div className="flex p-4">
          <input
            className="flex-1 text-black p-2 rounded-md border border-gray-300 mr-2"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleEnter}
            placeholder="Enter your query here..."
          />
          <button
            className="bg-blue-500 text-white p-2 rounded-md"
            type="submit"
            onClick={handleSendMessage}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatInput;

// import React, { useState } from "react";
// import query from "../../openai-test";

// function ChatInput() {
//   const [input, setInput] = useState("");
//   const [messages, setMessages] = useState([""]);

//   const handleSendMessage = async () => {
//     // Update state with input message
//     setMessages((prevMessages) => [...prevMessages, input]);

//     // Fetch response from OpenAI API
//     const res = await query(input);

//     // Update state with output message
//     setMessages((prevMessages) => [...prevMessages, res ? res : ""]);
//   };

//   const handleEnter = async (e: React.KeyboardEvent<HTMLInputElement>) => {
//     if (e.key === "Enter") handleSendMessage();
//   };

//   return (
//     <div className="">
//       <div>
//         <input
//           className="text-black m-4 p-4 rounded-md w-1/2"
//           type="text"
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           onKeyDown={handleEnter}
//           placeholder="Enter your query here..."
//         />
//         <button
//           className="bg-white text-black p-4 rounded-md"
//           type="submit"
//           onClick={handleSendMessage}
//         >
//           Send
//         </button>
//       </div>
//       <div className="w-screen overflow-auto whitespace-pre-wrap px-8 py-4 font-sans">
//         {messages.map((message, i) => (
//           <div key={i}>
//             <p>{message}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default ChatInput;
