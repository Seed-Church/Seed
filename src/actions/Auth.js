import generateAction from "../hoc/generateAction";
import getActionGroup from "../utils/getActionGroup";
import { AUTH, AUTH_HUMAN_PENDING, AUTH_HUMAN_ERROR, AUTH_HUMAN_SUCCESS } from "../constants/Auth";

const authHumanPending = () => {
  return {
    type: AUTH_HUMAN_PENDING,
  };
};

const authHumanError = (error) => {
  return {
    type: AUTH_HUMAN_ERROR,
    auth_error: error,
  };
};

const authHumanSuccess = (token) => {
  return {
    type: AUTH_HUMAN_SUCCESS,
    token: token,
  };
};

const actionGruop = getActionGroup(authHumanPending, authHumanError);
const  headers ={
  "Content-Type": "application/json",
}
export const authHuman = (data) => generateAction(AUTH, "POST", authHumanSuccess, actionGruop, ``, JSON.stringify(data),headers);
