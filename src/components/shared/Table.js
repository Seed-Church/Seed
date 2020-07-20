import React from "react";
import Colume from "./Colume";
import RowsUser from "./RowsUser";

const Table = ({ columns, props }) => {
  // console.log(`props`,props);
  return (
    <table className="min-w-full leading-normal">
      <thead>
        <tr>
          {columns.map((name, i) => (
            <Colume key={i} name={name} />
          ))}
        </tr>
      </thead>
      <tbody>
        <LoadRow list={props.items} props={props} />
      </tbody>
    </table>
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
export default Table;
