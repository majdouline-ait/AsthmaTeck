
  
  // ActionProvider starter code
  class ActionProvider {
     constructor(createChatBotMessage,setStateFunc) {
      this.createChatBotMessage = createChatBotMessage;
      this.setState = setStateFunc;
    }
    greet(){
      const greetingMessage=this.createChatBotMessage("Hi, hope your doing well")
      this.updateChatbotState(greetingMessage)
    }

    handleJavascriptList = () => {
      const message = this.createChatBotMessage(
        "Pas de panique, suivez les instructions que je vous donne, selectionnez les sympthomes que vous avez",
        {
          widget: "javascriptLinks",
        }
      );
  
      this.updateChatbotState(message);
    };
    
    updateChatbotState(message) {
    
         this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, message]
          }))
        }
  }
  
  export default ActionProvider;
  
  