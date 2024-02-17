import React from 'react'
import {Widget, addResponseMessage} from "react-chat-widget";

function AiChatWidget() {
  const handleMessage=(message)=>{
    addResponseMessage(message);
  }
  return <>
  <Widget handleNewUserMessage={handleMessage}/>
  
  </>;
  
}

export default AiChatWidget