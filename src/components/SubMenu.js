import React from "react";
import {
  UserOutlined,
  FormOutlined,
  DashboardOutlined
} from "@ant-design/icons";
import { Menu } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const SubMenu = () => {
  return (
      <Menu theme="light" mode="inline" defaultSelectedKeys={["4"]}>
        <Menu.Item key="1">
          <UserOutlined />
          <span className="nav-text">
            <Link to="/add">Add member</Link>
          </span>
        </Menu.Item>
        <Menu.Item key="2">
          <DashboardOutlined />
          <span className="nav-text">Dashboard</span>
        </Menu.Item>
        <Menu.Item key="3">
          <FormOutlined />
          <span className="nav-text">เฝ้าเดียว</span>
        </Menu.Item>
        <Menu.Item key="4">
          <UserOutlined />
          <span className="nav-text">  <Link to="/">Home</Link></span>
        </Menu.Item>
      </Menu>
  );
};

export default SubMenu;
