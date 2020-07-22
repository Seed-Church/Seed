import generateAction from "../hoc/generateAction";
import getActionGroup from "../utils/getActionGroup";
import { AUTH, AUTH_HUMAN_PENDING, AUTH_HUMAN_ERROR, AUTH_GETTOKEN_HUMAN, AUTH_GETDATA_HUMAN, LOG_OUT_HUMAN } from "../constants/Auth";

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

const authGetTokenHuman = (token) => {
  return {
    type: AUTH_GETTOKEN_HUMAN,
    token: token,
  };
};

const authGetDataHuman = (user) => {
  return {
    type: AUTH_GETDATA_HUMAN,
    user: user,
  };
};
export const LogOutHuman = () => {
  return {
    type: LOG_OUT_HUMAN,
  };
};

const actionGruop = getActionGroup(authHumanPending, authHumanError);
const headers = {
  "Content-Type": "application/json",
};
export const getToken = (data) => generateAction(AUTH, "POST", authGetTokenHuman, actionGruop, `/getToken`, JSON.stringify(data), headers);
// const token = {
//   Authorization: `Bearer ${localStorage.getItem("token")}`,
// };
export const getData = () =>
  generateAction(AUTH, "GET", authGetDataHuman, actionGruop, `/getData`, null, {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  });
