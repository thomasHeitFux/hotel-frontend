import {
    GET_ESTRUCTURAS_PENDING,
    GET_ESTRUCTURAS_REJECTED,
    GET_ESTRUCTURAS_SUCCESS,
  } from "../types/estructurasTypes";
  
  const initialState = {
    isLoading: false,
    estructuras: [],
  };

  export const estructurasReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case  GET_ESTRUCTURAS_PENDING:
        return {
          ...state,
          isLoading: true,
          estructuras: [],
        };
      case GET_ESTRUCTURAS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          estructuras: payload,
        };
      case GET_ESTRUCTURAS_REJECTED:
        return {
          ...state,
          isLoading: false,
        };
      default:
        return { ...state };
    }
  };