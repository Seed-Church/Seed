import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Layout, Menu } from "antd";
import FormRegister from "../components/FormRegister";
import SubMenu from "../components/SubMenu";
import "./App.css";
const { Header, Content, Footer, Sider } = Layout;
export default () => {
  return (
    <Layout>
      <Sider
        theme="light"
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo" />
        <SubMenu></SubMenu>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0, background: "white" }}
        />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          >
            <FormRegister></FormRegister>
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};
