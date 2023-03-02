import axios from "axios";
import {
    GET_DELETE_PENDING,
    GET_DELETE_REJECTED,
    GET_DELETE_SUCCESS,
} from "../types/deleteTypes";
const URL_BACK = 'https://lively-violet-9664.fly.dev/delete';


export const deleteGastoAction = (id) => {
  console.log(id);
    return async function (dispatch) {
      try {
        const json = await axios.delete(`${URL_BACK}/${id}`);
        console.log(json);
        return json
      } catch (e) {
        console.log("aca wachin");
        console.log(e);
      }
    };
  };