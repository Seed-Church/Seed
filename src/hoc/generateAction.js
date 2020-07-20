import { API_URL } from "../api/index";

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
        if (res.error) {
          throw res.error;
        }

        if (res.statusCode === 200 || res.statusCode === 201) dispatch(mainAction(res));
        else dispatch(Error(handleStatusCode(id, res)));
      });
  };
  return WrappedAction;
};

const handleStatusCode = (id, res) => {
  if (id === `auth/getToken` && res.statusCode === 401) return "คุณ ใส่ username หรือ password ผิด";
  else return res;
};
export default generateAction;
