import React from 'react';
export const columnsMock = [
  {
    Header: "Name",
    accessor: "name",
    Cell: ({ cell: { value } }) => <p className="text-gray-900 whitespace-no-wrap">{value}</p>
  },
  {
    Header: "Role",
    accessor: "role",
  },
  {
    Header: "Created at",
    accessor: "date",
  },
  {
    Header: "Status",
    accessor: "status",
  },
  {
    Header: "Action",
    accessor: "action",
  },
];

export const data = [
  {
    id: 1,
    img:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
    name: "Vera Carpenter",
    role: "admin",
    date: "Jan 21, 2020",
    status: "Active",
    color: "bg-green-200",
  },
  {
    id: 2,
    img:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
    name: "Blake Bowman",
    role: "Editor",
    date: " Jan 01, 2020",
    status: "Active",
    color: "bg-green-200",
  },
  {
    id: 3,
    img:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
    name: "Dana Moore",
    role: "Editor",
    date: " Jan 01, 2020",
    status: "Suspended",
    color: "bg-orange-200",
  },
  {
    id: 4,
    img:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80",
    name: "คนไทย",
    role: "Hacker",
    date: " Jan 01, 2020",
    status: "Inactive",
    color: "bg-red-200",
  },
];
