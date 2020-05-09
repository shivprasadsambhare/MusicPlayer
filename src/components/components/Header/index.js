import React from 'react';
import { Layout, Menu } from 'antd';
import Logo from '../../../snaps/musicLogo.jpg';
import '../../../styles/styles.scss';

const { Header } = Layout;

function customHeader() {
  return (
    <div>
      <img src={Logo} alt="" className="Logo" />
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">Home</Menu.Item>
          <Menu.Item key="2">Search</Menu.Item>
          <Menu.Item key="3">Profile</Menu.Item>
        </Menu>
      </Header>
    </div>
  );
}


export default customHeader;
