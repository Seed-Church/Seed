import { API_URL } from "../api/index";
import checkHttpStatus from "../utils/checkHttpStatus";
const generateAction = (moudule, method = "GET", mainAction, actionGruop, id = ``, data, headers = {}) => {
  const { Pending, Error } = actionGruop;
  const WrappedAction = (dispatch) => {
    dispatch(Pending());
    fetch(API_URL + moudule + `${id}`, {
      headers: headers,
      method: method,
      body: data,
    })
      .then(checkHttpStatus)
      .then((res) => res.json())
      .then((res) => {
        console.log(`res`, res);
        try {
          dispatch(mainAction(res.data));
        } catch (e) {
          dispatch(Error(res));
        }
      })
      .catch((e) => {
        dispatch(Error(e));
      });
  };
  return WrappedAction;
};

const handleStatusCode = (id, res) => {
  if (id === `auth/getToken` && res.statusCode === 401) return "คุณ ใส่ username หรือ password ผิด";
  else return res;
};
export default generateAction;
