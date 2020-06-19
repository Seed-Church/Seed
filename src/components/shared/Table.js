import React from "react";
import Colume from "./Colume";
import RowsUser from "./RowsUser";

const Table = ({ columns, props }) => {
  console.log(props);
  
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
        <ListOption list={props.items} props={props} />
      </tbody>
    </table>
  );
};

const ListOption = ({ list, props }) => {
  if (!list) {
    return null;
  }

  return (
    <React.Fragment>
      {list.map((user, i) => (
        <RowsUser key={i} user={user} props={props} />
      ))}
    </React.Fragment>
  );
};
export default Table;
