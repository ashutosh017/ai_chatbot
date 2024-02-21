import React from "react";
import ChatInput from "./components/ChatInput";

function page() {
  // console.log("HI", process.env.NEXT_PUBLIC_OPENAI_API_KEY);
  return (
    <div>
      <ChatInput />
    </div>
  );
}

export default page;
