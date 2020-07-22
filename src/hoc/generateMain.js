import React, { useEffect } from "react";
import Main from "../views/layout/Main";
import { useFieldArray } from "react-hook-form";

const generateMain = (Component) => {
  const WrappedMain = (props) => {
    const { history } = props;
    return (
      <Main {...props}>
        <Component {...props} />
      </Main>
    );
  };
  return WrappedMain;
};

export default generateMain;
