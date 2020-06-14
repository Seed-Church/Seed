import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Users from "../reducer/Users";
const middlewares = applyMiddleware(thunk);

export default () => {
  const store = createStore(
    combineReducers({
      Users,
    }),
    middlewares
  );

  return store;
};
