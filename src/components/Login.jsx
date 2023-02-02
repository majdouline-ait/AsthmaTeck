import React from "react";
import Input from "./Input";
import { Link, Route,Routes} from 'react-router-dom';
import ChatBot from "./chatBot";
import HomeMenu from "./MenuHome/HomeMenu";





function Login(){

    /* const navigate = useNavigate();

  const navigateHome = () => {
    // 👇️ navigate to /
    navigate('/');
  }; */
   //const location = useNavigate();

    return (
    <form className="login">
        <h1>Déja inscrit</h1>
        <Input type="text" placeholder="Username"/>
        <Input type="password" placeholder="Password"/>
        {/* <Link to="/home"><button type="submit">Login</button></Link>

        <Routes>
          <Route path="/home" element={<ChatBot />} />
        </Routes> */}
        <Link to="/menu"><button type="submit">Login</button></Link>

        <Routes>
          <Route path="/menu" element={<HomeMenu />} />
        </Routes>
    </form>
    )
}




export default Login;