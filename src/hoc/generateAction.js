import { API_URL } from "../api/index";
import { fetchUsersPending, fetchUsersError } from "../actions/Users";
import { USERS } from "../constants/Users";

const generateAction = (method = "GET", mainAction, actionGruop, id = ``) => {
  const { Pending, Error } = actionGruop;
  const WrappedAction = (dispatch) => {
    dispatch(Pending());
    fetch(API_URL + USERS + `${id}`, {
      method: method,
    })
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(mainAction(res));
        return res;
      })
      .catch((error) => {
        dispatch(Error(error));
      });
  };
  return WrappedAction;
};

export default generateAction;
