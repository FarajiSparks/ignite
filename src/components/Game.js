import React from "react";

//Styling and Animations
import styled from "styled-components";
import {motion} from "framer-motion"

const Game = ({name, slug, image}) =>{
    return(
        <StyledGame> 
            <h4>{name}</h4>
            <h5>{slug}</h5>
            <img src={image} alt={name} />
            
        
            
        </StyledGame>
       
    )
}

const StyledGame = styled(motion.div)`
    img{
        width: 100%;
        height: 40vh;
        object-fit: cover;
    }
`
export default Game;