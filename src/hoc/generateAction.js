import { API_URL } from "../api/index";
import { fetchUsersPending, fetchUsersError } from "../actions/Users";
import { USERS } from "../constants/Users";

const generateAction = (moudule, method = "GET", mainAction, actionGruop, id = ``, data) => {
  const { Pending, Error } = actionGruop;
  const WrappedAction = (dispatch) => {
    dispatch(Pending());
    fetch(API_URL + moudule + `${id}`, {
      method: method,
      body: data,
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
