import React from "react";
const ButtonArmy = ({ value, color, OnClick = null }) => {
  return (
    <button
      className={`bg-${color}-500 hover:bg-${color}-400 text-white font-bold py-2 px-4 border-b-4 border-${color}-700 hover:border-${color}-500 rounded`}
      onClick={OnClick}>
      {value}
    </button>
  );
};

export default ButtonArmy;
