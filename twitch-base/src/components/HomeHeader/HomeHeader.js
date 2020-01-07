import React, { useContext, useState } from "react";
import { TwitchContext } from "../../contexts/TwitchContext";
import ClipList from "../ClipsList/ClipsList";
import "./HomeHeader.scss";
import StreamList from "../StreamList/StreamList";
import GameList from "../GameList/GameList";
import Spinner from '../Spinner/Spinner';



const HomeHeader = () => {
  const { games, streams, clips, isLoading, error } = useContext(TwitchContext);
  const [length] = useState(8)
  
  if(isLoading) {
    return <Spinner />
  }

  if(error) {
  return <p>{error}</p>
  }

  return (
    <>
      <h2 className="title">Top Stream Games</h2>
      <GameList games={games}/>
      <hr className="separator" />
      <h2 className="title">Most Popular Streams</h2>
      <StreamList streams={streams} length={length}/>
      <hr className="separator" />
      <h2 className="title">Most Popular Clips</h2>
      <ClipList clips={clips} />
    </>
  );
};

export default HomeHeader;
