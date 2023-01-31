

const initState = {
    popular : [],
    newGames : [],
    upcoming : [], 
    searched : []
}

const gamesReducer = (state=initState, action) => {
    switch(action.type){
        case "FETCH_GAMES":
            return {...state}
        default:
            return{...state}
    }
}

// // Action Creator
// const fetchGames = (userData) =>{
//     return{
//         type: "FETCH_GAMES",
//         payload: userData
//     };
// };

// const Reducer = (state, action) => {
//     switch(action.type){
//         case "ACTION PULLER":
//             return {...concatination of updated state}
//         default:
//             return{...concatination of default state}
//     }
// }

export default gamesReducer;