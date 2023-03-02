import axios from "axios";
import {
    GET_DETALLES_PENDING,
    GET_DETALLES_REJECTED,
    GET_DETALLES_SUCCESS,
} from "../types/detallesTypes";
const URL_BACK = 'https://lively-violet-9664.fly.dev/detalles';


export const getDetalles = () => {
    return async function (dispatch) {
      dispatch({ type: GET_DETALLES_PENDING });
      try {
        const json = await axios(`${URL_BACK}`);
        return dispatch({
          type: GET_DETALLES_SUCCESS,
          payload: json.data,
        });
      } catch (e) {
        console.log(e);
        return dispatch({ type: GET_DETALLES_REJECTED });
      }
    };
  };