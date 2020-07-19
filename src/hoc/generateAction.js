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
        // console.log(`res`, res);
        if (res.error) {
          throw res.error;
        }
        dispatch(Error(handleStatusCode(res.statusCode)));
        dispatch(mainAction(res));
      })
      .catch((error) => {
        dispatch(Error(error));
      });
  };
  return WrappedAction;
};

const handleStatusCode = (number) => {
  if (number === 401) return "คุณ ใส่ username หรือ password ผิด";
};
export default generateAction;
