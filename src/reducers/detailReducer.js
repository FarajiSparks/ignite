const initialState = {
    game:{ platforms:[] }, 
    screen:{ results:[], isLoading: true }
};

const detailReducer = (state=initialState, action) => {
    switch(action.type){
        case "GET_DETAIL":
            return{
                ...state, 
                game: action.payload.game, 
                screen: action.payload.screen, 
                isLoading: false 
            }; 
        case "LOADING_DETAIL":
            return{
                ...state, 
                isLoading: true, 
            }
        default:
            return {...state}
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
//             return {...concatination of updated state, 
//                      payload}
//         default:
//             return{...concatination of default state}
//     }
// }

export default detailReducer;