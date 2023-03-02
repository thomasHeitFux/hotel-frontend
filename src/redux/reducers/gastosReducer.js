import {
    GET_GASTOS_PENDING,
    GET_GASTOS_REJECTED,
    GET_GASTOS_SUCCESS,
  } from "../types/gastosTypes";
  
  const initialState = {
    isLoading: false,
    gastos: [],
  };

  export const gastosReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case  GET_GASTOS_PENDING:
        return {
          ...state,
          isLoading: true,
          gastos: [],
        };
      case GET_GASTOS_SUCCESS:
        return {
          ...state,
          isLoading: false,
          gastos: payload,
        };
      case GET_GASTOS_REJECTED:
        return {
          ...state,
          isLoading: false,
        };
      default:
        return { ...state };
    }
  };