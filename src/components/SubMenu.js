import React from "react";
import {
  UserOutlined,
  FormOutlined,
  DashboardOutlined
} from "@ant-design/icons";
import { Menu } from "antd";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


const handleSelectKeyByPathName = (pathName) => {
  if (pathName === '/add') {
    return "1"
  } else if (pathName === '/dashboard') {
    return "2"
  } else if (pathName === '/memorize') {
    return "3"
  }
}




const SubMenu = (props) => {
  const { history } = props;
  const defaultSelectedKeys = handleSelectKeyByPathName(history.location.pathname);

  const handleRedirect = (pathname) => {
    return () => {
      history.push(pathname);
    }
  }
  return (
      <Menu theme="light" mode="inline" defaultSelectedKeys={[defaultSelectedKeys]}>
        <Menu.Item key="1" onClick={handleRedirect('/add')}>
          <UserOutlined />
          <span className="nav-text">
          Add member
          </span>
        </Menu.Item>
        <Menu.Item key="2" onClick={handleRedirect('/dashboard')}>
          <DashboardOutlined />
          <span className="nav-text">Dashboard</span>
        </Menu.Item>
        <Menu.Item key="3" onClick={handleRedirect('/memorize')}>
          <FormOutlined />
          <span className="nav-text">เฝ้าเดียว</span>
        </Menu.Item>
        <Menu.Item key="4">
          <UserOutlined />
          <span className="nav-text"> Home</span>
        </Menu.Item>
      </Menu>
  );
};

export default SubMenu;
