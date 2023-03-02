import {
    GET_TIPOS_PENDING,
    GET_TIPOS_REJECTED,
    GET_TIPOS_SUCCESS,
  } from "../types/tiposTypes";
  
  const initialState = {
    isLoading: false,
    tipos: [],
  };

  export const tiposReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case GET_TIPOS_PENDING:
        return {
          ...state,
          isLoading: true,
          tipos: [],
        };
      case GET_TIPOS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          tipos: payload,
        };
      case GET_TIPOS_REJECTED:
        return {
          ...state,
          isLoading: false,
        };
      default:
        return { ...state };
    }
  };