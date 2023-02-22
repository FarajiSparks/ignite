import React from "react";

//Styling and Animations
import styled from "styled-components";
import {motion} from "framer-motion";

//Redux
import { useSelector } from "react-redux";

//Routing
import { useNavigate } from "react-router-dom";

//Image Resizing 
import { smallImage } from "../util";

//Images 
import ps4 from '../img/ps4.svg';
import gamepad from '../img/gamepad.svg';
import steam from '../img/steam.svg';
import nintendo from '../img/nintendo.svg';
import xbox from '../img/xbox.svg'; 
import apple from '../img/apple.svg';
import sseries from '../img/s-series.png';
import ps5 from '../img/ps5.svg'

//Start Ratings
import starFull from '../img/star-full.png';
import starEmpty from '../img/star-empty.png';




const GameDetail = ({pathId}) =>{


    const navigate = useNavigate();

    const exitDetailHandler = (e) =>{
    const element = e.target;
    if(element.classList.contains("shadow")){
        document.body.style.overlfow = "auto"; 
        navigate("/");
    }
}   

    const getPlatform = (platform) =>{
        switch(platform){
            case "PlayStation 4":
                return ps4;
            case "PlayStation 5":
                return ps5;
            case "PC":
                return steam;
            case "Nintendo Switch":
                return nintendo;
            case "Xbox One":
                return xbox;
            case "Xbox Series S/X":
                return sseries;
            case "iOS":
                return apple;
            default:
                return gamepad;
        }
    }

    //Get Stars
        const getStars = () =>{
            const stars = [];
            const rating = Math.floor(game.rating);
            for(let i=1; i<=5; i++){
                if (i<= rating){
                    stars.push(<img src={starFull} key={i} alt="star full"></img>)
                    console.log("Working?")
                }else{
                    stars.push(<img src={starEmpty}  key={i} alt="star empty"></img>)
                }
            }
            return stars; 
        }

    //Data 
    const {game, screen, isLoading} = useSelector((state)=> state.detail); 
    
  
return(

    <>
    {!isLoading &&(
    <CardShadow className="shadow" onClick={exitDetailHandler}>
        <Detail layoutid={pathId}>       
            <Stats>
                <Rating>
                    <h4>{game.name}</h4>
                    <p>Rating: {game.rating}</p>
                    {getStars()}
                </Rating>
                <Info>
                    <h4>Platforms</h4>
                    <Platforms>{game.platforms?.map((data) =>(
                        <img 
                            key={data.platform.id} 
                            src={getPlatform(data.platform.name)}
                            alt={data.platform.name}> 
                        </img>
                    ))}</Platforms>
                </Info>
            </Stats>
            <Media>
                <img layoutId={`image ${pathId}`}  src={smallImage(game.background_image, 1280)} alt="game background" />
            </Media>
            <Description>
                <p>{game.description_raw}</p>
            </Description>
            <div className="gallery">
                {screen.results?.map((screen)=>(
                    <img src={smallImage(screen.image, 1280)} key={screen.id} alt="game"/>
                ))}
            </div>
        </Detail>
    </CardShadow>
    )}
    </>
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
        z-index:1;
    
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
    img{
        display:inline ;
        height:1rem;
        width: 1rem;
    }
`

const Platforms = styled(motion.div)`
display:flex;
justify-content:space-evenly;
h5{
    padding-left:1rem;
}
img{
    margin-left:3rem;
    height:3rem ;
}

`

const Media = styled(motion.div)`
    margin-top:5rem;
    img{
        width:100%;
        height:60vh;
        object-fit:cover;
    }
`

const Description = styled(motion.div)`
    margin:5rem 0rem;
`
export default GameDetail

