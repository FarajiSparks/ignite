import React from "react";

//Routing
import { Link } from "react-router-dom";

//Styling and Animations
import styled from "styled-components";
import {motion} from "framer-motion"

//REDUX
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";

//Image Resizing 
import { smallImage } from "../util";


const Game = ({name, slug, image, released, id}) =>{
    const stringPathId = id.toString();
    //Load Details
    const dispatch = useDispatch();
    const loadDetailHandler = () =>{
        dispatch(loadDetail(id))
    }

    return(
        <StyledGame layoutid={stringPathId} onClick={loadDetailHandler}> 
        <Link to={`/game/${id}`}>
            <Title>
                <h4>{name}</h4>
                <h5>{slug}</h5>
                <h5>{released}</h5>
            </Title> 
                <img layoutid={`image ${stringPathId}`} src={smallImage(image, 640)} alt={name} />
        </Link>     
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
    cursor: pointer;
    overflow: hidden;
`
const Title = styled(motion.div)`
    display:flex ;
    flex-direction:column ;
    justify-content:center ;
    min-height: 8rem;
`
export default Game;