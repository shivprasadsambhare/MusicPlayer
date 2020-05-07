import React from 'react';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

function customHeader() {
  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Home</Menu.Item>
        <Menu.Item key="2">Search</Menu.Item>
        <Menu.Item key="3">Profile</Menu.Item>
      </Menu>
    </Header>
  );

}


export default customHeader;