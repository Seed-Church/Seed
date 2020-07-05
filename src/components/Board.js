import React, { useEffect } from "react";
import Title from "./shared/Title";
import SelectBox from "./shared/SelectBox";
import FormIcon from "./shared/FormIcon";
import Table from "./shared/Table";
import TableV2 from "./shared/TableV2";

const Board = (props) => {
  console.log(props);
  const columns = ["id", "User", "statuses", "groups", "Action"];

  const handleChange = (e) => {
    console.log(e.target.value);
    props.dispatchSearcheUser(e.target.value);
    if(e.target.value === "")
    props.dispatchFetchUsers();
  };

  useEffect(() => {
    props.dispatchFetchUsers();
  }, []);
  return (
    <React.Fragment>
      <Title name="Table" />
      <div className="flex flex-wrap mb-6 mt-3">
        {/* <SelectBox label="Max Row" test={[5, 10, 20]} />
        <SelectBox label="Filter" test={["Active", "Inactive"]} /> */}
        <div className="container mx-5 py-3">
          <input
            className="w-full h-16 px-3 rounded mb-8 focus:outline-none focus:shadow-outline text-xl px-8 shadow-lg"
            type="search"
            onChange={handleChange}
            placeholder="Search..."></input>
        </div>
      </div>
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <TableV2 columns={columns} props={props} />
          {/* <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
            <span className="text-xs xs:text-sm text-gray-900">Showing 1 to 4 of 50 Entries</span>
            <div className="inline-flex mt-2 xs:mt-0">
              <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                Prev
              </button>
              <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                Next
              </button>
            </div>
          </div> */}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Board;
