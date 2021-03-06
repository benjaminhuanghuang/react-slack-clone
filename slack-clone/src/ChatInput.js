import React, { useState } from "react";

import firebase from 'firebase'
import db from './firebase'

import { useStateValue } from "./StateProvider";

import "./ChatInput.css";

function ChatInput({ channelName, channelId }) {
  const [input, setInput] = useState("");
  const [{user}] = useStateValue();

  const sendMessage = (e) => {
    e.preventDefault();
    if(channelId){
      db.collection('rooms').doc(channelId).collection.add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp,
        user: user.displayName,
        userImage: user.photoURL
      })
    }
  };

  return (
    <div className="chatInput">
      <form action="">
        <input type="text" placeholder={`Message #${channelName}`} onChange={(e) => setInput(e.target.value)} />
        <button type="submit" onClick={sendMessage}>
          Send
        </button>
      </form>
    </div>
  );
}

export default ChatInput;
