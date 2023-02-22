import React from "react";

//Components and Pages
import Home from "./pages/Home";
import GlobalStyles from "./components/GlobalStyles";
import Nav from './components/Nav';

//Router
import {Route, Routes} from 'react-router-dom';
import GameDetail from "./components/GameDetail";
import ErrorPage from "./components/ErrorPage";

function App() {
 
 

  return (
    <div>
    <GlobalStyles/>
        <Nav/>
          <Routes> 
            <Route path="/" element ={<Home />}/>
            <Route path= "/game/:id" element ={<GameDetail />}/>
            <Route path ="*" element={<ErrorPage/>}/>
          </Routes> 
         
    </div>
  );
}

export default App;
