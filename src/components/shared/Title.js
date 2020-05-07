import React from "react";

const Title = ({ name }) => {
  return (
    <div className="bg-blue-800 p-2 shadow text-xl text-white">
      <h3 className="pl-2">{name}</h3>
    </div>
  );
};

export default Title;
