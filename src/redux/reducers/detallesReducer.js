import {
    GET_DETALLES_PENDING,
    GET_DETALLES_REJECTED,
    GET_DETALLES_SUCCESS,
  } from "../types/detallesTypes";
  
  const initialState = {
    isLoading: false,
    detalles: [],
  };

  export const detallesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case  GET_DETALLES_PENDING:
        return {
          ...state,
          isLoading: true,
          detalles: [],
        };
      case GET_DETALLES_SUCCESS:
        return {
          ...state,
          isLoading: false,
          detalles: payload,
        };
      case GET_DETALLES_REJECTED:
        return {
          ...state,
          isLoading: false,
        };
      default:
        return { ...state };
    }
  };