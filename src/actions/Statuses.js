import { API_URL } from "../api/index";
import { STATUSES, FETCH_STATUSES_PENDING, FETCH_STATUSES_SUCCESS, FETCH_STATUSES_ERROR } from "../constants/Statuses";
export const fetchStatusesPending = () => {
  return {
    type: FETCH_STATUSES_PENDING,
  };
};

export const fetchStatusesSuccess = (statuses) => {
  return {
    type: FETCH_STATUSES_SUCCESS,
    statuses: statuses,
  };
};

export const fetchStatusesError = (error) => {
  return {
    type: FETCH_STATUSES_ERROR,
    error: error,
  };
};

export const fetchStatus = () => {
  return (dispatch) => {
    dispatch(fetchStatusesPending());
    fetch(API_URL + STATUSES)
      .then((res) => res.json())
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchStatusesSuccess(res));
        return res;
      })
      .catch((error) => {
        dispatch(fetchStatusesError(error));
      });
  };
};
