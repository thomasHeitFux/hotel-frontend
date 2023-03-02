import axios from "axios";
import {
    GET_DELETE_PENDING,
    GET_DELETE_REJECTED,
    GET_DELETE_SUCCESS,
} from "../types/deleteTypes";
import { URL_BACK } from "./url";


export const deleteGastoAction = (id) => {
  console.log(id);
    return async function (dispatch) {
      try {
        const json = await axios.delete(`${URL_BACK}/delete/${id}`);
        console.log(json);
        return json
      } catch (e) {
        console.log("aca wachin");
        console.log(e);
      }
    };
  };