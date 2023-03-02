import axios from "axios";
import {
  GET_TIPOS_PENDING,
  GET_TIPOS_REJECTED,
  GET_TIPOS_SUCCESS,
} from "../types/tiposTypes";
const URL_BACK = 'https://lively-violet-9664.fly.dev/tipos';


export const getTipos = () => {
    return async function (dispatch) {
      dispatch({ type: GET_TIPOS_PENDING });
      try {
        const json = await axios(`${URL_BACK}`);
        return dispatch({
          type: GET_TIPOS_SUCCESS,
          payload: json.data,
        });
      } catch (e) {
        console.log(e);
        return dispatch({ type: GET_TIPOS_REJECTED });
      }
    };
  };