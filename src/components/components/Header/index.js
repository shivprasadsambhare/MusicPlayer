import React from 'react';
import styled from 'styled-components';
import { Input } from 'antd';
import Logo from '../../../media/images/musicLogo.jpg';
import '../../../styles/styles.scss';

const { Search } = Input;

const HeaderWrapper = styled.div`
font-size: 1em;
width: 100%;
height: 3.5rem;
border-radius: 3px;
display: flex;
opacity: 0.3;

/* Color the border and text with theme.main */
background-color: ${props => props.theme.brandColor};
border-bottom: 2px solid ${props => props.theme.mainBorder};
`;

function customHeader() {
  return (
    <HeaderWrapper>
      <img src={Logo} alt="" className="Logo" />
      <Search placeholder="input search text" onSearch={value => console.log(value)} enterButton className="header_search" />
    </HeaderWrapper>
  );
}


export default customHeader;
