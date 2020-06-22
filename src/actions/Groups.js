import generateAction from '../hoc/generateAction'
import getActionGroup from "../utils/getActionGroup";
import { GROUPS, FETCH_GROUPS_PENDING, FETCH_GROUPS_SUCCESS, FETCH_GROUPS_ERROR } from "../constants/Groups";
export const fetchGroupsPending = () => {
  return {
    type: FETCH_GROUPS_PENDING,
  };
};

export const fetchGroupsSuccess = (groups) => {
  return {
    type: FETCH_GROUPS_SUCCESS,
    groups: groups,
  };
};

export const fetchGroupsError = (error) => {
  return {
    type: FETCH_GROUPS_ERROR,
    error: error,
  };
};

const actionGroup = getActionGroup(fetchGroupsPending, fetchGroupsError);

export const fetchGroups = () => generateAction(GROUPS, "GET", fetchGroupsSuccess, actionGroup);
