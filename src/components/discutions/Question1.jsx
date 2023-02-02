import React from "react";

import "./Question1.css";

const Question1 = (props) => {
  const options = [
    {
        text: "Je sens avoir une crise",
        handler: props.actionProvider.handleJavascriptList,
        id: 1,
      },
    { text: "Non ca va pour le moment", handler: () => {}, id: 2 },
    
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="learning-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="learning-options-container">{optionsMarkup}</div>;
};

export default Question1;