import axios from "axios";
import {
  GET_GASTOS_PENDING,
  GET_GASTOS_REJECTED,
  GET_GASTOS_SUCCESS,
} from "../types/gastosTypes";
const URL_BACK = 'https://polished-cherry-8428.fly.dev/';


export const getGastosAction = () => {
    return async function (dispatch) {
      dispatch({ type: GET_GASTOS_PENDING });
      try {
        const json = await axios(`${URL_BACK}`);
        return dispatch({
          type: GET_GASTOS_SUCCESS,
          payload: json.data,
        });
      } catch (e) {
        console.log(e);
        return dispatch({ type: GET_GASTOS_REJECTED });
      }
    };
  };