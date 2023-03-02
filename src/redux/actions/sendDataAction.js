import axios from "axios";

const URL_BACK = 'https://polished-cherry-8428.fly.dev/';


export const sendDataAction = (payload) => {
    return async function(){
        const json = await axios.post(`${URL_BACK}`,payload)
        return json;}
};