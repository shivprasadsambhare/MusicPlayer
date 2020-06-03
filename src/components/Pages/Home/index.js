import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Cards';
import { categories, featuredPlaylists } from './data';

function HomePage() {
  return (
    <div>
      Featured Playlist
      {featuredPlaylists.playlists.items.map(key => <Card title={key.name} cover={key.images[0].url} />)}
      {/* {categories.items.map(key => <Card title={key.name} cover={key.icons[0].url} />)} */}
    </div>
  );
}


export default HomePage;
