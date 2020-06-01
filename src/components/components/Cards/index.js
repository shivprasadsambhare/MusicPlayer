/* eslint-disable react/prop-types */
import React from 'react';
import { Card } from 'antd';

const { Meta } = Card;

function card(props) {
  const { title, cover } = props;
  return (
    <Card
      hoverable
      style={{ width: 270, padding: '10px' }}
      cover={<img height={275} alt="example" src={cover} />}
    >
      <Meta title={title} description="www.instagram.com" />
    </Card>
  );
}

export default card;
