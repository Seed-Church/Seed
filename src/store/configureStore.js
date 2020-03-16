import { combineReducers, createStore, applyMiddleware, compose } from "redux";

//const middlewares = applyMiddleware(mylogger, thunk)
export default () => {
  const store = createStore(
    combineReducers({

    })
  );

  return store;
};
