import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Cards';
import { categories } from './data';

function HomePage() {
  return (
    <div>
      {categories.items.map(key => <Card title={key.name} cover={key.icons[0].url} />)}
    </div>
  );
}


export default HomePage;
