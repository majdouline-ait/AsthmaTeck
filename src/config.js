

  
  // Config starter code
  import React from 'react';
  import { createChatBotMessage } from "react-chatbot-kit";
  import BotAvatar from "./components/BotAvatar/BotAvatar.jsx";
  import Question1 from "./components/discutions/Question1.jsx";
  import LinkList from "./components/linkList/LinkList.jsx"

  

const config = { 
  botName: "AsthmaTech",
  initialMessages: [createChatBotMessage('Bonjour, je suis AsthmaTech, Si tu passe par une crise, rassure toi je suis là pour te guider',{
    widget: "Question1",})],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#9683EC",
    },
    
    chatButton: {
      backgroundColor: "#9683EC",
    },
  },
  widgets: [
    {
    widgetName: "Question1",
     widgetFunc: (props) => <Question1 {...props} />,
    },
    {
      widgetName: "javascriptLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Toux Séche incessante",
            url:
              "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/",
            id: 1,
          },
          {
            text: "Sifflement de la poitrine",
            url:
              "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide",
            id: 2,
          },
          {
            text: "Sensation de difficultés réspiratoire",
            url: "https://frontendmasters.com",
            id: 3,
          },
          {
            text: "Sensation d'oppression thoraxique",
            url: "https://frontendmasters.com",
            id: 3,
          },
        ],
      },
    },
],
  customComponents: {
    // Replaces the default header
   header: () => <div style={{ backgroundColor: '#9683EC', padding: "5px", borderRadius: "3px" }}> Bot Assistant </div>,
   // Replaces the default bot avatar
   botAvatar: (props) => <BotAvatar {...props} />
  },
}

export default config
