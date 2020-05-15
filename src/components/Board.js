import React, { useState,useEffect } from "react";
import Title from "./shared/Title";
import SelectBox from "./shared/SelectBox";
import FormIcon from "./shared/FormIcon";
import Colume from "./shared/Colume";
import RowsUser from "./shared/RowsUser";
// import { data } from "./mock/table";
import fetch from "node-fetch";
const Board = (props) => {
  const [data, setData] = useState({ hits: [] });
  useEffect(async () => {
    const result = await fetch("http://159.89.204.113:3000/users");
    console.log("result=",result);
    
    setData(result.data);
  }, []);
  return (
    <React.Fragment>
      <Title name="Table" />
      <div className="flex flex-wrap mb-6 mt-3">
        <SelectBox label="Max Row" test={[5, 10, 20]} />
        <SelectBox label="Filter" test={["Active", "Inactive"]} />
        <FormIcon />
      </div>
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
        <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
          <table className="min-w-full leading-normal">
            <thead>
              <tr>
                <Colume name="User" />
                <Colume name="Role" />
                <Colume name="Created at" />
                <Colume name="Status" />
                <Colume name="Action" />
              </tr>
            </thead>
            <tbody>
              {data.hits}
              {/* {data.map((user, i) => (
                <RowsUser
                  key={i}
                  index={i}
                  user={user}
                  editUser={props.dispatchEditUser}
                  delUser={props.dispatchDelUser}
                  history={props.history}
                />
              ))} */}
            </tbody>
          </table>
          <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
            <span className="text-xs xs:text-sm text-gray-900">Showing 1 to 4 of 50 Entries</span>
            <div className="inline-flex mt-2 xs:mt-0">
              <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l">
                Prev
              </button>
              <button className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Board;
