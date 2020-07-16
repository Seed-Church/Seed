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
      
        dispatch(mainAction(res));
      })
      .catch((error) => {
        dispatch(Error(error));
      });
  };
  return WrappedAction;
};

export default generateAction;
