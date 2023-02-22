import React,{useState} from 'react'; 

import logo from '../img/logo.svg';

import styled from 'styled-components';
import {motion} from "framer-motion";

//Redux and Routes
import {fetchSearched} from '../actions/gamesAction';
import {useDispatch} from 'react-redux';

const Nav = () => {

const dispatch = useDispatch(); 


const [textInput, setTextInput] = useState("");

const submitSearch = (e) =>{
    e.preventDefault();
    dispatch(fetchSearched(textInput));
    setTextInput("");
}

const inputHandler = (e) =>{
    setTextInput(e.target.value);
}


  return (
    <StyledNav>
        <Logo>
            <img src={logo} alt="logo" />
            <h1>Ignite</h1>
        </Logo>
        <form className="search">
            <input value={textInput} onChange={inputHandler} type="text"/>
            <button onClick={submitSearch} type='submit'>Search</button>
        </form>
    </StyledNav>
  )
}

const StyledNav = styled(motion.div)`
    padding: 3rem 5rem;
    text-align: center;
    input{
        width:30%;
        font-size:1.5rem;
        padding:0.5rem;
        border:none ;
        margin-top: 1rem;
        box-shadow: 0px 0px 30px rgba(0,0,0,0.2);
       
    }
    button{
        font-size:1.5rem;
        border:none;
        padding: 0.5rem 2rem;
        cursor:pointer;
        background-color: #f4913a;
        box-shadow: 0px 0px 30px rgba(0,0,0,0.2);
        color: white;
    }
`
const Logo = styled(motion.div)`
    display:flex ;
    justify-content:center ;
    padding:1rem;
    cursor: pointer;
    img{
        height:2rem;
        width:2rem ;
    }
`
export default Nav