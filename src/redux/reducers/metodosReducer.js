import {
    GET_METODOS_PENDING,
    GET_METODOS_REJECTED,
    GET_METODOS_SUCCESS,
  } from "../types/metodosTypes";
  
  const initialState = {
    isLoading: false,
    metodos: [],
  };

  export const metodosReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case  GET_METODOS_PENDING:
        return {
          ...state,
          isLoading: true,
          metodos: [],
        };
      case GET_METODOS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          metodos: payload,
        };
      case GET_METODOS_REJECTED:
        return {
          ...state,
          isLoading: false,
        };
      default:
        return { ...state };
    }
  };