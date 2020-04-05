import React from "react";

import {
  EditOutlined,
  EllipsisOutlined,
  SettingOutlined,
  FacebookOutlined,
  CalendarOutlined,
  DeleteOutlined,
  UserOutlined,
  FieldTimeOutlined
} from "@ant-design/icons";

import { Table, Tag, Button, Input, Card, Row, Col } from "antd";
const { Search } = Input;
const { Meta } = Card;

const DashBoard = (props) => {

  const handleEditClick = (paramsId) => () => {
    const { history } = props;
    history.push(`/dashboard/user/${paramsId}/edit`)

  }

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
      facebook: "facebookURL",
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
      facebook: "facebookURL",
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
          <Col xs={24} sm={12} md={8} lg={6}>
            <Card
              hoverable
              style={{ width: 256 }}
              actions={[
                <Tag color="red">
                  <DeleteOutlined color="red" key="del" />
                </Tag>,
                <Tag color="gold"> 
                <EditOutlined key="edit" onClick={handleEditClick(d.key)} />
          
                </Tag>,
                <EllipsisOutlined key="ellipsis" />
              ]}
              cover={
                <img
                  alt=""
                  width="125"
                  height="256"
                  src="https://via.placeholder.com/256"
                />
              }
            >
              <p>
            <Tag color="cyan"><UserOutlined /> {d.name + ` ` + d.lastname }</Tag>
            <Tag color="orange">NickName:{d.nickname}</Tag>
              </p>
              <p>
                <Tag color="green"> <CalendarOutlined /> {d.believedate} </Tag>
                <Tag color="volcano">Age:{d.age}</Tag>
              </p>
              <p>
                <Tag color="geekblue">
                  <FacebookOutlined /> {" "}
                  {d.facebook}
                </Tag>
              </p>
              <p><Tag color="purple"><FieldTimeOutlined />  2  year</Tag></p>
            </Card>
          </Col>
        ))}
      </Row>
    </React.Fragment>
  );
};

export default DashBoard;
