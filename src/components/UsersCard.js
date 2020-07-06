import React, { useEffect } from "react";
import UserCard from "./shared/UserCard";
const UsersCard = (props) => {
  useEffect(() => {
    props.dispatchFetchUsers();
  }, []);
  return (
    <React.Fragment>
      <div className="flex flex-wrap bg-gray-200">
        <LoadRow list={props.items} props={props} />
      </div>
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
          <UserCard key={i} user={user} props={props} />
        ))}
      </React.Fragment>
    );
};
export default UsersCard;
