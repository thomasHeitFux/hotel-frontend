import axios from "axios";
import {
  GET_METODOS_PENDING,
  GET_METODOS_REJECTED,
  GET_METODOS_SUCCESS,
} from "../types/metodosTypes";
const URL_BACK = 'http://localhost:3001/metodos';


export const getMetodos = () => {
    return async function (dispatch) {
      dispatch({ type: GET_METODOS_PENDING });
      try {
        const json = await axios(`${URL_BACK}`);
        return dispatch({
          type: GET_METODOS_SUCCESS,
          payload: json.data,
        });
      } catch (e) {
        console.log(e);
        return dispatch({ type: GET_METODOS_REJECTED });
      }
    };
  };