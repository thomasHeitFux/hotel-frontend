import axios from "axios";

import { URL_BACK } from "./url";


export const updateDataAction = (payload) => {
    return async function(){
        const json = await axios.patch(`${URL_BACK}edit`,payload)
        return json;}
};