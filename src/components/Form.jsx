import React from "react";
import Input from "./Input";

function Form(props){
    return (
    <form className="form">
        <h1>Créer un compte</h1>
        <Input type="text" placeholder="Username"/>
        <Input type="password" placeholder="Password"/>
        {
        !props.isRegister 
        && 
        <Input type="password" placeholder="Confirm Password"/>
        }
        
        <button type="submit">{props.isRegister ? "Login" : "Register"}</button>
    </form>
    )
}

export default Form;