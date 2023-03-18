import {
    GET_GASTOS_PENDING,
    GET_GASTOS_REJECTED,
    GET_GASTOS_SUCCESS,
  } from "../types/gastosTypes";
  import {
    FILTER_PENDING,
    FILTER_REJECTED,
    FILTER_SUCCESS,
} from "../types/filterTypes";
  
  const initialState = {
    isLoading: false,
    gastos: [],
    filtered: [],
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
          filtered:payload
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


  export const filterReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case  FILTER_PENDING:
        return {
          ...state,
          isLoading: true,
          filtered: initialState.gastos,
        };
      case FILTER_SUCCESS:
        console.log(initialState.gastos);
        const ordered = payload === false ? initialState.gastos.sort(function (a, b) {
            if (a.importe > b.importe) return 1;
            if (a.importe < b.importe) return -1;
            else return 0;
        })
            : state.pokemons.sort(function (a, b) {
                if (a.importe > b.importe) return -1;
                if (a.importe < b.importe) return 1;
                else return 0;
            });
        return {
          ...state,
          isLoading: false,
          filtered: ordered,
        };
      case FILTER_REJECTED:
        return {
          ...state,
          isLoading: false,
        };
      default:
        return { ...state };
    }
  };