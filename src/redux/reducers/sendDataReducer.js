import {
    GET_DATA_PENDING,
    GET_DATA_REJECTED,
    GET_DATA_SUCCESS,
  } from "../types/sendDataTypes";
  
  const initialState = {
    isLoading: false,

  };

  export const tiposReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_DATA_PENDING:
        return {
          ...state,
          isLoading: true,
         
        };
      case GET_DATA_SUCCESS:
        return {
          ...state,
          isLoading: false,
     
        };
      case GET_DATA_REJECTED:
        return {
          ...state,
          isLoading: false,
        };
      default:
        return { ...state };
    }
  };