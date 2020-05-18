import React from "react";
import Colume from "./Colume";
import RowsUser from "./RowsUser";

const Table = ({ columns, data, props }) => {
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
        {data.users.map((user, i) => (
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
