import React from "react";
import Form from "./Form";
import Login from "./Login";
import Header from "./Header";
import Footer from "./Footer";


var userIsRegister=false;


//the old way with function
/* function renderCondition(){
  if(isLoggedIn){
    return <h1>Hello</h1>
  }else{
    return (
      <Login />
    )
  }
}
 */
//const currentTime=new Date().getHours();

//console.log(currentTime);

//use ternary operator to be able to integrate the condition inside
//the component that only accept expression and note statement
function Home() {
  return (
    <div className="container">
      <Header />
      <div className="centre">
        <div className="containerForm">
          {
            <Form isRegister={userIsRegister} />
          }
        </div>
        <div className="containerLogin">
          {<Login />}
        </div>
      </div>
      <Footer />
      
    </div>
  );
}

export default Home;