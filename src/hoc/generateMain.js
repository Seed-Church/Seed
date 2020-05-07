import React from "react";
import Main from "../views/layout/Main";

const generateMain = (Component) => {
  const WrappedMain = (props) => {
    const { history } = props;
    return (
      <Main history={history}>
        <Component {...props} />
      </Main>
    );
  };
  return WrappedMain;
};

export default generateMain;
