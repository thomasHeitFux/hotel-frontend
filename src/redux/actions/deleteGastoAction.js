import axios from "axios";
import {
    GET_DELETE_PENDING,
    GET_DELETE_REJECTED,
    GET_DELETE_SUCCESS,
} from "../types/deleteTypes";
const URL_BACK = 'http://localhost:3001/delete';


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