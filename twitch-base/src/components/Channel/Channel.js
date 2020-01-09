import React, { useContext, useEffect} from 'react';
import { TwitchContext } from '../../contexts/TwitchContext';
import Swiper from 'swiper';
import ItemCarousel from './ItemCarousel/ItemCarousel';
import './Channel.scss';
import ChannelPopularStream from './ChannelPopularStream/ChannelPopularStream';
import Spinner from '../Spinner/Spinner';

const Channel = () => {
  const { userDetails, userVideos, isLoading} = useContext(TwitchContext);

  useEffect(() => {

      const sliderEl = document.querySelectorAll(".swiper-container");
      if (!sliderEl) {
        return;
      }
  // eslint-disable-next-line
  const slider = new Swiper(sliderEl, {
    init: true,
    slidesPerView: 4,
    loop: true,
    spaceBetween: 10,
    observer: true,

    breakpoints: {
      1560: {
        slidesPerView: 4
      },
      1145: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 2
      },
      468: {
        slidesPerView: 1
      },
      320: {
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

  const getMostViewedStream = () => {
    const arrayWithStreamViews = userVideos.map(video => video.view_count);
    const maxWatchedStream = Math.max(...arrayWithStreamViews);
    const indexOfmaxWatchedStream = arrayWithStreamViews.indexOf(maxWatchedStream);
    return indexOfmaxWatchedStream
  }

  const mostPopularStream = getMostViewedStream(userVideos)

 

    if (isLoading) {
    return <Spinner />
    }

    return (
        <section className="channel-container">
          <div className="channel-container-profile">
            <div className="channel-container-profile-info">
              <img
                className="channel-container-profile-info__image"
                src={userDetails[0].profile_image_url}
                alt="game"
              />
              <div className="channel-container-profile-info-box">
                <div className="channel-container-profile-info-box__name">Welcome in <strong>{userDetails[0].display_name}</strong> channel!</div>
                <div className="channel-container-profile-info-box__live">Click For Live Stream <a className='link' href={`https://www.twitch.tv/${userDetails[0].display_name}`} target='_blank' rel='noopener noreferrer'>TWITCH LIVE HERE!</a></div>
                <hr className="carousel-container__separator" style={{margin:'10px 0'}}/>
                <div className="channel-container-profile-info-box__views">Total views: {userDetails[0].view_count.toLocaleString('en')}</div>
                <div className="channel-container-profile-info-box__highlights">Most Popular Stream</div>
              </div>
            </div>
            <div className="channel-container-profile__highlights">
                <ChannelPopularStream mostPopularStream={userVideos[mostPopularStream]} />
              </div>
          </div>
        <h2>{userDetails[0].display_name} Streams</h2>
        <ItemCarousel items={userVideos}/>
      </section>
      
    )
}

export default Channel;
