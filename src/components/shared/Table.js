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
            index={i}
            user={user}
            editUser={props.dispatchEditUser}
            delUser={props.dispatchDelUser}
            history={props.history}
          />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
