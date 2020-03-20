import React from "react";
import { Table, Tag, Button, Input, Card } from "antd";
const { Search } = Input;
const { Meta } = Card;

const DashBoard = () => {
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: text => <a>{text}</a>
    },
    {
      title: "NickName",
      dataIndex: "nickname",
      key: "nickname"
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age"
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address"
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <span>
          <Button type="primary" style={{ marginRight: 16, marginBottom:16 }}>
            Edit
          </Button>
          <Button type="danger">Delete</Button>
        </span>
      )
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: tags => (
        <span>
          {tags.map(tag => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "miss") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </span>
      )
    }
  ];

  const data = [
    {
      key: "1",
      name: "Army Test",
      nickname: "Noris",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["new", "service"]
    },
    {
      key: "2",
      name: "Jim Green",
      nickname: "Jone",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["miss"]
    },
    {
      key: "3",
      name: "Eoe Black",
      nickname: "Jone",
      age: 32,
      address: "Sidney No. 1 Lake Park",
      tags: ["new gen", "header"]
    }
  ];
  return (
    <React.Fragment>
      <Search
        placeholder="input search text"
        onSearch={value => console.log(value)}
        enterButton
        style={{ paddingBottom: 50 }}
      />
      <Table columns={columns} dataSource={data} />
    </React.Fragment>
  );
};

export default DashBoard;
