import { API_URL } from "../api/index";
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

export const fetchGroups = () => {
  return (dispatch) => {
    dispatch(fetchGroupsPending());
    fetch(API_URL + GROUPS)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchGroupsSuccess(res));
        return res;
      })
      .catch((error) => {
        dispatch(fetchGroupsError(error));
      });
  };
};
