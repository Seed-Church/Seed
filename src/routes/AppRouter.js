import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import SideBar from "../components/SideBar";
import { Layout } from "antd";
import "./App.css"

const { Header, Footer, Sider, Content } = Layout;
export default () => {
  return (
    <div>
      <Layout>
        <Header>Header</Header>
        <Layout>
          <Sider>Sider</Sider>
          <Content>Content</Content>
        </Layout>
        <Footer>Footer</Footer>
      </Layout>
    </div>
  );
};
