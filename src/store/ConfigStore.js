import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import Users from "../reducer/Users";
import Statuses from "../reducer/Statuses";
import Groups from "../reducer/Groups";
const middlewares = applyMiddleware(thunk);

export default () => {
  const store = createStore(
    combineReducers({
      Users,
      Statuses,
      Groups,
    }),
    compose(middlewares, window.devToolsExtension ? window.devToolsExtension() : (f) => f)
  );

  return store;
};
