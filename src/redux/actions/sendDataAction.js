import axios from "axios";

import { URL_BACK } from "./url";


export const sendDataAction = (payload) => {
    console.log(payload);
    return async function(){
        const json = await axios.post(`${URL_BACK}`,payload)
        return json;}
};