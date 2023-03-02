import axios from "axios";

const URL_BACK = 'https://lively-violet-9664.fly.dev/';


export const sendDataAction = (payload) => {
    return async function(){
        const json = await axios.post(`${URL_BACK}`,payload)
        return json;}
};