import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TwitchContext } from "../../contexts/TwitchContext";
import "./HomeHeader.scss";

const HomeHeader = () => {
  const { games, streams, clips } = useContext(TwitchContext);
  
  return (
    <>
      <h2 className="title">Top Stream Games</h2>
      <div className="top-games-container" draggable="true">
        {games.slice(0, 9).map(game => (
          <Link
            to={`/game/${game.id}`}
            className="top-games-container-item"
            key={game.id}
          >
            <img
              className="top-games-container-item__img"
              src={game.box_art_url}
              alt="game"
            />
            <div className="top-games-container-item__name">{game.name}</div>
          </Link>
        ))}
      </div>
      <hr className="separator" />
      <h2 className="title">Most Popular Streams</h2>
      <div className="top-streams-container">
        {streams.slice(0, 8).map(stream => (
          <Link
            to={`/streams/${stream.id}`}
            className="top-streams-container-item"
            key={stream.id}
          >
            <img
              className="top-streams-container-item__img"
              src={stream.thumbnail_url}
              alt="game"
            />
            <div className="top-streams-container-item__title">
              {stream.title}
            </div>
            <div className="top-streams-container-item__name">
              {stream.user_name}
            </div>
            <div className="top-streams-container-item__viewers">
              {stream.viewer_count} viewers
            </div>
            <div className="top-streams-container-item__live">
              {stream.type}
            </div>
          </Link>
        ))}
      </div>
      <hr className="separator" />
      <h2 className="title">Most Popular Clips</h2>
      <div className="top-clips-container">
        { clips? 
          clips.map(clip => (
              <div
                className="top-clips-container-item"
                key={clip.broadcaster_id}
              >
                <iframe
                  src={clip.embed_url.concat("&autoplay=false")}
                  title={clip.title}
                  width="360"
                  height="240"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen={true}
                />
              </div>
            ))
          : null}
      </div>
    </>
  );
};

export default HomeHeader;
