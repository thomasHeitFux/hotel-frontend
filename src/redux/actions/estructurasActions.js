import axios from "axios";
import {
    GET_ESTRUCTURAS_PENDING,
    GET_ESTRUCTURAS_REJECTED,
    GET_ESTRUCTURAS_SUCCESS,
} from "../types/estructurasTypes";
import { URL_BACK } from "./url";


export const getEstructuras = () => {
    return async function (dispatch) {
      dispatch({ type: GET_ESTRUCTURAS_PENDING });
      try {
        const json = await axios(`${URL_BACK}`);
        return dispatch({
          type: GET_ESTRUCTURAS_SUCCESS,
          payload: json.data,
        });
      } catch (e) {
        console.log(e);
        return dispatch({ type: GET_ESTRUCTURAS_REJECTED });
      }
    };
  };