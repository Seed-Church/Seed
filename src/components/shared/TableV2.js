import React from "react";
import Colume from "./Colume";
import RowsUser from "./RowsUser";
// import styled from 'styled-components';

const Table2 = ({ columns, props }) => {
  return (
    <table className="w-full flex flex-row flex-no-wrap sm:bg-white rounded-lg overflow-hidden sm:shadow-lg my-5">
      <thead className="text-white">
        <LoadColumn columns={columns} props={props} />
      </thead>
      <tbody className="flex-1 sm:flex-none">
        <LoadRow list={props.items} props={props} />
      </tbody>
    </table>
  );
};

const LoadColumn = ({ columns, props }) => {
  if (!Array.isArray(props.items)) {
    return null;
  } else
    return (
      <React.Fragment>
        {props.items.map((user, i) => (
          <tr
            key={i}
            className="bg-teal-400 flex flex-col flex-no wrap sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
            {columns.map((name, i) => (
              <th key={i} className="p-3 text-left">
                {name}
              </th>
            ))}
          </tr>
        ))}
      </React.Fragment>
    );
};

const LoadRow = ({ list, props }) => {
  if (!Array.isArray(list)) {
    return null;
  } else
    return (
      <React.Fragment>
        {list.map((user, i) => (
          <RowsUser key={i} user={user} props={props} />
        ))}
      </React.Fragment>
    );
};

export default Table2;
