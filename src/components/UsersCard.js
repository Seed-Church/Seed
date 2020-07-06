import React, { useEffect } from "react";
import UserCard from "./shared/UserCard";
const UsersCard = (props) => {
  useEffect(() => {
    props.dispatchFetchUsers();
  }, []);
  return (
    <React.Fragment>
      {/* <div className="flex flex-wrap bg-gray-200">
        <div class="flex-auto px-4 py-2 m-2">
          <UserCard />
        </div>
        <div class="flex-auto px-4 py-2 m-2">
          <UserCard />
        </div>{" "}
        <div class="flex-auto px-4 py-2 m-2">
          <UserCard />
        </div>
      </div> */}
      {props.items.map((user, i) => (
            <UserCard key={i} user={user} />
      ))}
    </React.Fragment>
  );
};

export default UsersCard;
