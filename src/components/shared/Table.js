import React from "react";
import Colume from "./Colume";
import RowsUser from "./RowsUser";

const Table = ({ columns, props }) => {
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
        {props.items.map((user, i) => (
          <RowsUser
            key={i}
            user={user}
            props={props}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
