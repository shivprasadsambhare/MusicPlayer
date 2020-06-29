/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import { LeftCircleOutlined } from '@ant-design/icons';
import { data } from 'autoprefixer';
import Card from '../../components/Cards';
import { GET_PLAYLIST_REQUEST } from '../../../constants/actionTypes';


function Category(props) {
  const [playlists, setPlaylists] = useState(props.playlist.response);

  const { fetchPlaylist } = props;


  useEffect(() => {
    const requestBody = {
      limit: 30,
      categoryId: props.categoryId,
    };
    fetchPlaylist(requestBody);
  }, []);
  useEffect(() => {
    if (playlists !== props.playlist.response && props.categoryId === props.playlist.categoryId) {
      setPlaylists(props.playlist.response);
    }
  }, [props.playlist]);

  const { heading } = props;
  const settings = {
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 6,
    nextArrow: <img src={<LeftCircleOutlined />} alt="" />,
    prevArrow: <img src={<LeftCircleOutlined />} alt="" />,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="home__category">
      <h2>{heading}</h2>
      <div className="abcd">
        <Slider {...settings}>
          {playlists && playlists.playlists && playlists.playlists.items.map(key => <div onClick={() => props.history.push(`/playlist/${key.id}`)}><Card title={key.name} cover={key.images[0].url} /></div>)}
        </Slider>
      </div>
    </div>
  );
}

const mapStateToProps = state => ({ playlist: state.getPlaylist });

const mapDispatchToProps = dispatch => ({ fetchPlaylist: data => dispatch({ type: GET_PLAYLIST_REQUEST, payload: data }) });

export default connect(mapStateToProps, mapDispatchToProps)(Category);
