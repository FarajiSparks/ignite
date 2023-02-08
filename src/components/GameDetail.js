import React from "react";

//Styling and Animations
import styled from "styled-components";
import {motion} from "framer-motion";

//Redux
import { useSelector } from "react-redux";

const GameDetail = () =>{
  //Data 
  const {game, screen} = useSelector((state)=> state.detail); 
  
  
return(
    <CardShadow>
        <Detail>       
            <Stats>
                <Rating>
                    <h4>{game.name}</h4>
                    <p>Rating: {game.rating}</p>
                </Rating>
                <Info>
                    <h4>Platforms</h4>
                    <Platforms>{game.platforms?.map((data) =>(
                        <h5 key={data.platform.id}>{data.platform.name}</h5>
                    ))}</Platforms>
                </Info>
            </Stats>
            <div className="media">
                <img src={game.background_image} alt="game background" />
            </div>
            <div className="description">
                <p>{game.description_raw}</p>
            </div>
            <div className="gallery">
                {screen.results?.map((screen)=>(
                    <img src={screen.image} key={screen.id} alt="game"/>
                ))}
            </div>
        </Detail>
    </CardShadow>
)
};

const CardShadow = styled(motion.div)`
    width:100%;
    min-height:100vh;
    overflow-y:scroll;
    background:rgba(0,0,0,0.5);
    position:fixed ;
    top:0;
    left:0;
    &::-webkit-scrollbar{
             width: 0.5rem;
        }
    &::-webkit-scrollbar-thumb{
            background-color: #f5ae4b;
        }
    &::-webkit-scrollbar-track{
             background:white ;
        }

    
`;

const Detail = styled(motion.div)`
    width:80%;
    border-radius: 1rem;
    padding: 2rem 10rem;
    background: white;
    position:absolute ;
    left:10%;
    color:black;
    img{
        width:100% ;
    }
 
`
const Stats = styled(motion.div)`
    display:flex;
    align-items:center;
    justify-content: space-between;
`

const Info = styled(motion.div)`
    text-align:center ;
`

const Rating = styled(motion.div)`
    text-align:center ;
`

const Platforms = styled(motion.div)`
display:flex;
justify-content:space-evenly;
h5{
    padding-left:1rem;
}
img{
    margin-left:3rem;
}
`
export default GameDetail

