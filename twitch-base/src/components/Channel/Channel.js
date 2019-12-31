import React, { Compontent, useContext, useEffect} from 'react';
import { TwitchContext } from '../../contexts/TwitchContext';
import Swiper from 'swiper';
import ItemCarousel from './ItemCarousel/ItemCarousel';

const Channel = () => {
  const {handleChangeStreamID,  userDetails, userVideos, isLoading} = useContext(TwitchContext);

  useEffect(() => {

      const sliderEl = document.querySelectorAll(".swiper-container");
      if (!sliderEl) {
        return;
      }

  const slider = new Swiper(sliderEl, {
    init: true,
    slidesPerView: 5,
    loop: true,
    spaceBetween: 10,
    observer: true,

    breakpoints: {
      1145: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 2
      },
      468: {
        slidesPerView: 1
      },
      300: {
        slidesPerView: 1
      }
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    mousewheel: true,
    keyboard: true,
  });
  })



    if (isLoading) {
    return <div>{console.log(userDetails, userVideos)}ładowanie</div>
    }

    return (
        <div className="channel-container">
            Welcome in <strong>{userDetails[0].display_name}</strong> channel
          <div
            className="channel-container-profile"
          >
            <img
              className="channel-container-profile__img"
              src={userDetails.profile_image_url}
              alt="game"
            />
            <div className="channel-container-profile__name">{userDetails.display_name}</div>
          </div>
          {/* {userDetails.description}
          {userVideos.map(video => (
          <div
            to={`./top-games`}
            className="top-streams-container-item"
            key={video.id}
            // onClick={()=>handleChangeStreamID(game.id)}
          >
            <img
              className="top-games-container-item__img"
              src={video.thumbnail_url}
              alt="game"
            />
            <div className="top-streams-container-item__name">
              {video.view_count}
            </div>
            <div className="top-streams-container-item__title">
              {video.title}
            </div>
            <div className="top-streams-container-item__viewers">
              {video.view_count} viewers
            </div>
            <div className="top-streams-container-item__live">
              {video.type}
            </div>
          </div>
        ))} */}
        <ItemCarousel items={userVideos}/>
      </div>
      
    )
}

export default Channel;
