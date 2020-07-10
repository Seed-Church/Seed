import React from "react";

const Title = ({ name }) => {
  const style = {
    backgroundColor: `rgba(26, 85, 188, 1)`,
  };
  return (
    <div className="p-2 shadow text-xl text-white" style={style}>
      <h3 className="pl-2">{name}</h3>
    </div>
  );
};

export default Title;
