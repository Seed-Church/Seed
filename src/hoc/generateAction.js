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
      .then((res) => res.json())
      .then((res) => {
        console.log(`res`, res);
        if(res.status >= 200 && res.status < 300){
          dispatch(mainAction(res.data));
        }
        else {
          dispatch(Error(res.message));
        }
      }).catch((error) => {
        dispatch(Error(error));
      });
  };
  return WrappedAction;
};

const handleStatusCode = (id, res) => {
  if (id === `auth/getToken` && res.statusCode === 401) return "คุณ ใส่ username หรือ password ผิด";
  else return res;
};
export default generateAction;
