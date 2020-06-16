import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import Users from "../reducer/Users";
import Statuses from '../reducer/Statuses'
const middlewares = applyMiddleware(thunk);

export default () => {
  const store = createStore(
    combineReducers({
      Users,
      Statuses
    }),
    middlewares
  );

  return store;
};
