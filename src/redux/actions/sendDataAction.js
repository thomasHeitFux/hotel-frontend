import axios from "axios";

const URL_BACK = 'http://localhost:3001/';


export const sendDataAction = (payload) => {
    return async function(){
        const json = await axios.post(`${URL_BACK}`,payload)
        return json;}
};