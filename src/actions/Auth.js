import generateAction from "../hoc/generateAction";
import getActionGroup from "../utils/getActionGroup";
import { AUTH_HUMAN_PENDING, AUTH_HUMAN_ERROR, AUTH_HUMAN_SUCCESS } from "../constants/Auth";

const authHumanPending = () => {
  return {
    type: AUTH_HUMAN_PENDING,
  };
};

const authHumanError = () => {
  return {
    type: AUTH_HUMAN_ERROR,
  };
};

const authHumanSuccess = (token) => {
  return {
    type: AUTH_HUMAN_SUCCESS,
    token: token,
  };
};

const actionGruop = getActionGroup(authHumanPending, authHumanError);

export const authHuman = (data) => generateAction(null, "POST", authHumanSuccess, actionGruop, `/auth/login`, data);
