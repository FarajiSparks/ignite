import React,{useEffect} from "react";

//Redux
import {useDispatch, useSelector} from "react-redux";
import {loadGames} from "../actions/gamesAction";

//Components
import Game from "../components/Game";

//Styling and Animations
import styled from "styled-components";
import {motion} from "framer-motion";

const Home = () =>{

    const dispatch = useDispatch();
    useEffect(()=>{
      dispatch(loadGames());
    },[dispatch])

   
    const {popular, newGames, upcoming} = useSelector((state => state.games));
    console.log(popular, newGames);
    
    return(
        <GameList>
            <h3>Upcoming Games</h3>
            <Games>{upcoming.map(game=>(
                <Game key={game.id}
                        name={game.name}
                        slug={game.slug}
                        id={game.id}
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
    min-height: 80vh;
    display: grid;
    grid-template-columns:repeat(auto-fit, minmax(500px, 1fr));
    grid-column-gap: 5rem;
    grid-row-gap: 5rem;

    `

    export default Home;