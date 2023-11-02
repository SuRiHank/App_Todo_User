import { createStore, applyMiddleware } from "redux";
import rootReducer, { Reducer, initialState } from "./reducer";
import thunk from 'redux-thunk';


export const ConfigureStore = () => {
  const store = createStore(
    rootReducer,
  // reducer
    initialState,
    applyMiddleware(thunk) // our initialState
  );

  return store;
};
