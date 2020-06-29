/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../../components/Cards';
import { categories, featuredPlaylists } from './data';
import Category from './category';
import store from '../../../store/configureStore';
import { GET_PLAYLIST_REQUEST } from '../../../constants/actionTypes';

function HomePage(props) {
  return (
    <div>
      {/* Featured Playlist
      {featuredPlaylists.playlists.items.map(key => <Card title={key.name} cover={key.images[0].url} />)}
      {categories.items.map(key => <Card title={key.name} cover={key.icons[0].url} />)} */}
      <Category heading="Bollywood" categoryId="bollywood" history={props.history} />
      <Category heading="Punjabi" categoryId="punjabi" history={props.history} />
      <Category heading="Bollywood" categoryId="bollywood" history={props.history} />
      <Category heading="Bollywood" categoryId="bollywood" history={props.history} />
    </div>
  );
}

export default HomePage;
