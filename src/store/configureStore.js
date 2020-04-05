import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import MembersReducers from '../reducers/MembersReducers'
//const middlewares = applyMiddleware(mylogger, thunk)
export default () => {
  const store = createStore(
    combineReducers({
      MembersReducers
    })
  );

  return store;
};
