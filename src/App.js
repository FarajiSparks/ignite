import React from "react";

//Components and Pages
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import ErrorPage from "./components/ErrorPage";

//Router
import {Route, Routes} from 'react-router-dom';
import GameDetail from "./components/GameDetail";


function App() {
 
 

  return (
    <div>
    <GlobalStyles/>
        <nav>
          <div className="li">Home</div>
          <div className="li">About</div>
          <div className="li">Tings</div>
        </nav>
          <Routes> 
            <Route path="/" element ={<Home />}/>
            <Route path= "/game/:id" element ={<GameDetail />}/>
            <Route path ="*" element={<ErrorPage/>}/>
          </Routes>
    </div>
  );
}

export default App;
