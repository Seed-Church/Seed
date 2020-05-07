import React from "react";
import Colume from "./Colume";
import RowsUser from "./RowsUser";
import { useTable } from "react-table";

const Table = ({ columns, data, props }) => {
  // Use the useTable Hook to send the columns and data to build the table
  const {
    getTableProps, // table props from react-table
    getTableBodyProps, // table body props from react-table
    headerGroups, // headerGroups, if your table has groupings
    rows, // rows for the table based on the data passed
    prepareRow, // Prepare the row (this function needs to be called for each row before getting the row props)
  } = useTable({ columns, data });

  return (
    <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
        <table {...getTableProps()} className="min-w-full leading-normal">
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, i) => (
                  <Colume key={i} name={column.render("Header")} headerProps={column.getHeaderProps()} />
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
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
            {rows.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm"{...cell.getCellProps()}>{cell.render("Cell")}</td>;
                  })}
                </tr>
              );
            })}
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
  );
};

export default Table;
