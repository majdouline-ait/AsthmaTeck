import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Chatbot from 'react-chatbot-kit'
import '../App.css';
import 'react-chatbot-kit/build/main.css';

import ActionProvider from '../ActionProvider';
import MessageParser from '../MessageParser';
import config from '../config';


function ChatBot() {
    return (
      <div className="container">
        <Header />
        <div className="App">
          <header className="App-header">
            <Chatbot config={config} actionProvider={ActionProvider} 	    messageParser={MessageParser} />
          </header>
        </div>
        <Footer />
        
      </div>
    );
  }
  
  export default ChatBot;

  
