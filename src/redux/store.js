import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { tiposReducer } from "./reducers/tiposReducer";
import { metodosReducer } from "./reducers/metodosReducer";
import { detallesReducer } from "./reducers/detallesReducer";
import { estructurasReducer } from "./reducers/estructurasReducer";
import { gastosReducer,filterReducer } from "./reducers/gastosReducer"

const rootReducer = combineReducers({
  tipos: tiposReducer,
  metodos: metodosReducer,
  estructuras: estructurasReducer,
  detalles: detallesReducer,
  gastos:gastosReducer,
  filtered:gastosReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));