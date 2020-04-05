import React, { useState } from "react";
import { Layout, Menu, PageHeader, Button } from "antd";
import FormRegister from "./Members/FormRegister";
import SubMenu from "../components/SubMenu";
import DashBoard from "./Members/DashBoard";
import FormMemorize from "../components/FormMemorize";
const { Header, Content, Footer, Sider } = Layout;

const MainLayout = props => {
  const { history } = props;
  const [collapsed, setCollapsed] = useState(true);
  return (
    <Layout>
      <Sider
        theme="light"
        breakpoint="lg"
        collapsedWidth="0"
        onCollapse={() => setCollapsed(!collapsed)}
    
      >
        <div className="logo" />
        <SubMenu history={history}></SubMenu>
      </Sider>
      <Layout>
        <Header
          className="site-layout-sub-header-background"
          style={{ padding: 0, background: "white" }}
        ></Header>
        <Content style={{ margin: "24px 16px 0" }}>
          {props.children}
          <div
            className="site-layout-background"
            style={{ padding: 24, minHeight: 360 }}
          ></div>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
