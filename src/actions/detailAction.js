import axios from "axios";
import { gameDetailsURL, gameScreenshotsURL } from "../api";

//Action Creator

export const loadDetail = (id) => async (dispatch) => {

    dispatch({
        type: "LOADING_DETAIL"
    })

    //Fetch Axios
    const detailData = await axios.get(gameDetailsURL(id))
    const screenData = await axios.get(gameScreenshotsURL(id))
    dispatch({
        type: "GET_DETAIL",
        payload: {
            game: detailData.data,
            screen:screenData.data, 
        },
    });
};

