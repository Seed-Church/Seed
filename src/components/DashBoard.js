import React from "react";
import { Table, Tag, Button, Input, Card, Row, Col } from "antd";
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
          <Button type="primary" style={{ marginRight: 16, marginBottom: 16 }}>
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
      name: "Army",
      nickname: "Noris",
      lastname: "god",
      believedate: "20/20/20",
      age: 32,
      address: "New York No. 1 Lake Park",
      facebook: "codegeassmasterzeronebreakout",
      tags: ["new", "service"]
    },
    {
      key: "2",
      name: "Brmy",
      nickname: "Noris",
      lastname: "god",
      believedate: "20/20/20",
      age: 32,
      address: "New York No. 1 Lake Park",
      facebook: "codegeassmasterzeronebreakout",
      tags: ["new", "service"]
    },
    {
      key: "3",
      name: "Crmy",
      nickname: "Noris",
      lastname: "god",
      believedate: "20/20/20",
      age: 32,
      address: "New York No. 1 Lake Park",
      facebook: "codegeassmasterzeronebreakout",
      tags: ["new", "service"]
    },
    {
      key: "4",
      name: "Army",
      nickname: "Noris",
      lastname: "god",
      believedate: "20/20/20",
      age: 32,
      address: "New York No. 1 Lake Park",
      facebook: "codegeassmasterzeronebreakout",
      tags: ["new", "service"]
    },
    {
      key: "5",
      name: "Brmy",
      nickname: "Noris",
      lastname: "god",
      believedate: "20/20/20",
      age: 32,
      address: "New York No. 1 Lake Park",
      facebook: "codegeassmasterzeronebreakout",
      tags: ["new", "service"]
    },
    {
      key: "6",
      name: "Crmy",
      nickname: "Noris",
      lastname: "god",
      believedate: "20/20/20",
      age: 32,
      address: "New York No. 1 Lake Park",
      facebook: "codegeassmasterzeronebreakout",
      tags: ["new", "service"]
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
      <Row gutter={[16, 16]}>
        {data.map(d => (
          <Col xs={24} sm={12} md={12} lg={8}>
            <Card
              hoverable
              style={{ width: 240 }}
              cover={
                <img
                  alt=""
                  width="125"
                  height="256"
                  src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                />
              }
            >
              <Meta
                title={d.nickname + ` ` + d.name + ` ` + d.lastname}
                description={d.facebook}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};

export default DashBoard;
