import React from "react";

const Colume = ({ name, headerProps }) => {
  return (
    <th
      {...headerProps}
      className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
      {name}
    </th>
  );
};

export default Colume;
