import React, { useEffect } from "react";
import Title from "./shared/Title";
import FormSearch from "./shared/FormSearch";
import UserCard from "./shared/UserCard";
const UsersCard = (props) => {
  useEffect(() => {
    props.dispatchFetchUsers();
  }, []);
  
  const handleChange = (e) => {
    console.log(e.target.value);
    props.dispatchSearcheUser(e.target.value);
    if (e.target.value === "") props.dispatchFetchUsers();
  };

  return (
    <React.Fragment>
      <Title name="UserCard" />
      <div className="flex flex-wrap mb-6 mt-3">
        <FormSearch handleChange={handleChange} />
      </div>
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
        {list.reverse().map((user, i) => (
          <UserCard key={i} user={user} props={props} />
        ))}
      </React.Fragment>
    );
};
export default UsersCard;
