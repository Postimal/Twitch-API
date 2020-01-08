import React, { useContext } from "react";
import { TwitchContext } from "../../contexts/TwitchContext";
import ClipList from "../ClipsList/ClipsList";
import "./HomeHeader.scss";
import StreamList from "../StreamList/StreamList";
import GameList from "../GameList/GameList";
import Spinner from '../Spinner/Spinner';
import Title from "../Title/Title";



const HomeHeader = () => {
  const { games, streams, clips, isLoading, error } = useContext(TwitchContext);
  
  if(isLoading) {
    return <Spinner />
  }

  if(error) {
  return <p>{error}</p>
  }

  return (
    <>
      <Title title='Top Stream Games'/>
      <GameList games={games}/>
      <hr className="separator" />
      <Title title='Most Popular Streams'/>
      <StreamList streams={streams} length='10'/>
      <hr className="separator" />
      <Title title='Most Popular Clips'/>
      <ClipList clips={clips} />
    </>
  );
};

export default HomeHeader;
