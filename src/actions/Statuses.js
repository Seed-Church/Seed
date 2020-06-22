import generateAction from '../hoc/generateAction'
import getActionGroup from "../utils/getActionGroup";
import { STATUSES, FETCH_STATUSES_PENDING, FETCH_STATUSES_SUCCESS, FETCH_STATUSES_ERROR } from "../constants/Statuses";
 const fetchStatusesPending = () => {
  return {
    type: FETCH_STATUSES_PENDING,
  };
};

 const fetchStatusesSuccess = (statuses) => {
  return {
    type: FETCH_STATUSES_SUCCESS,
    statuses: statuses,
  };
};

 const fetchStatusesError = (error) => {
  return {
    type: FETCH_STATUSES_ERROR,
    error: error,
  };
};

const  actionStatus= getActionGroup(fetchStatusesPending,fetchStatusesError)

export const fetchStatus = () => generateAction(STATUSES, "GET", fetchStatusesSuccess, actionStatus);
