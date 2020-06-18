import { API_URL } from "../api/index";
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

const  actionGroup = getActionGroup(fetchStatusesPending,fetchStatusesError)

// export const fetchStatus = () => {
//   return (dispatch) => {
//     dispatch(fetchStatusesPending());
//     fetch(API_URL + STATUSES)
//       .then((res) => res.json())
//       .then((res) => {
//         if (res.error) {
//           throw res.error;
//         }
//         dispatch(fetchStatusesSuccess(res));
//         return res;
//       })
//       .catch((error) => {
//         dispatch(fetchStatusesError(error));
//       });
//   };
// };

export const fetchStatus = () => generateAction(STATUSES, "GET", fetchStatusesSuccess, actionGroup);
