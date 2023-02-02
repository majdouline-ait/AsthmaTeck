import React from "react";
import Avatar from "./Avatar.jsx";
import Info from "./Info.jsx";


function Card(props){
    return (
    <div className="menuCard">

      <div className="top">
      <p>{props.id}</p>
      <h2 className="name">{props.name}</h2>
      <Avatar img={props.img}/>
      </div>

      <div className="bottom">
      <Info detailInfo={props.info}/>
      </div>
      
    </div>
    );
  }

  export default Card;