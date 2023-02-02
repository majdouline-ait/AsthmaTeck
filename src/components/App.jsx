import React from "react";
import Home from "./Home"
import ChatBot from "./chatBot"
import HomeMenu from "./MenuHome/HomeMenu"
import { Link,Route,Routes} from 'react-router-dom';


function App() {
  return (
    <div>
    <Link to="/" />
    <Routes>
          {/* This route is for home component 
          with exact path "/", in component props 
          we passes the imported component*/}
          <Route exact path="/" element={<Home />} />
            
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/menu" element={<HomeMenu />} />
          
          {/* This route is for about component 
          with exact path "/about", in component 
          props we passes the imported component*/}
          <Route path="/home" element={<ChatBot />} />
            
    </Routes>
    </div>
  );
}

export default App;
