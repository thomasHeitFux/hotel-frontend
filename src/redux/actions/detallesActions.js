import axios from "axios";
import {
    GET_DETALLES_PENDING,
    GET_DETALLES_REJECTED,
    GET_DETALLES_SUCCESS,
} from "../types/detallesTypes";
import { URL_BACK } from "./url";


export const getDetalles = () => {
    return async function (dispatch) {
      dispatch({ type: GET_DETALLES_PENDING });
      try {
        const json = await axios(`${URL_BACK}/detalles`);
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