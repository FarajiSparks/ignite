import React,{useEffect} from "react";
import GameDetail from "../components/GameDetail";

//Redux
import {useDispatch, useSelector} from "react-redux";
import {loadGames} from "../actions/gamesAction";

//Components
import Game from "../components/Game";

//Styling and Animations
import styled from "styled-components";
import {motion} from "framer-motion";

import { useLocation } from "react-router-dom";

const Home = () =>{
  

    //Fetch Games
    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(loadGames());
    },[dispatch])

     //Get Current Location
    const location = useLocation();
    const pathId = location.pathname.split("/")[2];

    const {popular, newGames, upcoming} = useSelector((state => state.games));
    
    return(
        <GameList>
           { pathId && <GameDetail/> }
            <h3>Upcoming Games</h3>
            <Games>{upcoming?.map(game=>(
                <Game key={game.id}
                        id={game.id}
                        name={game.name}
                        slug={game.slug.replace(/-/g, " ")}
                        released={game.released}
                        image={game.background_image}/>
            ))}</Games>
             <h3>Popular Games</h3>
            <Games>{popular?.map(game=>(
                <Game key={game.id}
                        id={game.id}
                        name={game.name}
                        slug={game.slug.replace(/-/g, " ")}
                        released={game.released}
                        image={game.background_image}/>
            ))}</Games>
             <h3>New Games</h3>
            <Games>{newGames?.map(game=>(
                <Game key={game.id}
                        id={game.id}
                        name={game.name}
                        slug={game.slug.replace(/-/g, " ")}
                        released={game.released}
                        image={game.background_image}/>
            ))}</Games>
        </GameList>
    );
};

    const GameList = styled(motion.div)`
    padding: 0rem 5rem;
    h3{
        padding: 5rem 0rem;
    }

    `

    const Games = styled(motion.div)`
    min-height: 60vh;
    display: grid;
    grid-template-columns:repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 5rem;
    grid-row-gap: 5rem;
    `

    export default Home;