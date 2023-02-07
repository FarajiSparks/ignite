import React from "react";

//Styling and Animations
import styled from "styled-components";
import {motion} from "framer-motion"

//REDUX
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";


const Game = ({name, slug, image, released, id}) =>{
    //Load Details
    const dispatch = useDispatch();
    const loadDetailHandler = () =>{
        dispatch(loadDetail(id))
        console.log(id);
    }
    return(
        <StyledGame onClick={loadDetailHandler}> 
            <Title>
                <h4>{name}</h4>
                <h5>{slug}</h5>
                <h5>{released}</h5>
            </Title> 
                <img src={image} alt={name} />
             
        </StyledGame>
       
    )
}

const StyledGame = styled(motion.div)`
    min-height:30vh;
    box-shadow: 0px 5px 20px rgba(0,0,0,0.2);
    img{
        width: 100%;
        height: 50vh;
        object-fit: cover;
    }
    text-align:center;
    border-radius:1rem ;
`
const Title = styled(motion.div)`
    display:flex ;
    flex-direction:column ;
    justify-content:center ;
    min-height: 8rem;
`
export default Game;