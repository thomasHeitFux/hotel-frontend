import {
    FILTER_PENDING,
    FILTER_REJECTED,
    FILTER_SUCCESS,
} from "../types/filterTypes";



export const filterGastos = (payload) => {
    return async function () {
      dispatch({ type: FILTER_PENDING });
      try {
        return dispatch({
          type: FILTER_SUCCESS,
          payload:payload
        });
      } catch (e) {
        console.log(e);
        return dispatch({ type: FILTER_REJECTED });
      }
    };
  };