import React, { useContext } from 'react';
import { TwitchContext } from '../../contexts/TwitchContext';

const Channel = () => {
  const {handleChangeStreamID,  userDetails, userVideos, isLoading} = useContext(TwitchContext);
  
    if (isLoading) {
    return <div>{console.log(userDetails, userVideos)}ładowanie</div>
    }

    return (
        <div className="channel-container">
            Channel
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
          {userDetails.description}
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
            <div className="top-streams-container-item__name">{video.view_count}</div>
          </div>
        ))}
      </div>
      
    )
}

export default Channel;
