import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import Users from "../reducer/Users";
//const middlewares = applyMiddleware(mylogger, thunk)
export default () => {
  const store = createStore(
    combineReducers({
      Users,
    })
  );

  return store;
};
