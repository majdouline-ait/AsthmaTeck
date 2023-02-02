import React from "react";
import Footer from "../Footer";
import Card from "./Card";
import contacts from "./contacts";
import Header from "../Header";
import { Link } from 'react-router-dom';



function HomeMenu(props){
    return (
    <div className="menu">
    <Header />
    <div className="menuPos">

    <Link to="/home">
    <Card 
      name={contacts[0].name} 
      img={contacts[0].imgURL} 
      info={contacts[0].info}  
    />
    </Link>
    <Card 
      name={contacts[1].name} 
      img={contacts[1].imgURL} 
      info={contacts[1].info}  
    />
    <Card 
      name={contacts[2].name} 
      img={contacts[2].imgURL} 
      info={contacts[2].info}  
    />
     

    </div>
    <Footer />
    </div>
    
    );
  }

  export default HomeMenu;