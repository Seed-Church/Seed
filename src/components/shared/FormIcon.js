import React, { useState, useEffect } from "react";
import ButtonArmy from "../shared/ButtonArmy";
const FormIcon = (props) => {
  console.log(`propF`, props.dispatchSearcheUser(`test`));

  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleChange = (e) => {
    console.log(e.target.value);

    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    //props.dispatchSearcheUser(searchTerm);
  }, []);
  return (
    <React.Fragment>
      <div className="container mx-5 py-3">
        <input
          className="w-full h-16 px-3 rounded mb-8 focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg"
          type="search"
          value={searchTerm}
          onChange={handleChange}
          placeholder="Search..."></input>
      </div>
    </React.Fragment>
  );
};

export default FormIcon;
