import React, { useState } from "react";

import db from './firebase'

import "./ChatInput.css";

function ChatInput({ channelName, channeldId }) {
  const [input, setInput] = useState("");
  
  const sendMessage = (e) => {
    e.preventDefault();
    if(channeldId){
      db.collection('rooms').doc(channelId).collection
    }
  };

  return (
    <div className="chatInput">
      <form action="">
        <input type="text" placeholder={`Message #${channelName}`} onChange={(e) => setInput(e.target.value)} />
        <button type="submit" onCLick={sendMessage}>
          Send{" "}
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
