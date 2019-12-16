import React, { createContext, useEffect, useState } from "react";
// import { twitchReducer } from "../reducers/twitchReducer";
import api from "../api";
import { getImage, getThumbnail} from "../utils";

export const TwitchContext = createContext();

const TwitchContextProvider = props => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");
  const [streams, setStreams] = useState([]);
  const [clips, setClips] = useState([]);
  const [ss, setSs] = useState([]);

  const[pages, setPages] = useState(20);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const games = await api.get("https://api.twitch.tv/helix/games/top");
        const streams = await api.get(`https://api.twitch.tv/helix/streams?first=${pages}`);
        const clips = await api.get("https://api.twitch.tv/helix/clips?game_id=32399&first=4");
        const ss = await api.get("https://api.twitch.tv/helix/streams?game_id=32399");

  
        let gamesArray = games.data.data;
        let streamsArray = streams.data.data;
  
  
        // eslint-disable-next-line
        let finalArray = getImage(gamesArray); //getImage is imported from util.js
        // eslint-disable-next-line
        let secondArray = getThumbnail(streamsArray);
        // eslint-disable-next-line
        // let videoArrayWithCertainImageSize = getVidImage(videosArray);
  
  
        setGames(gamesArray);
        setStreams(streamsArray);
        setClips(clips.data.data);
        setSs(ss.data.data);
  
      } catch (error) {
        setError(error.message);
      }

    };
    fetchData();
  }, [pages]);

  const fetchMoreItems = () => {
    setPages(pages + 8)
  }

  return (
    <TwitchContext.Provider value={{ games, streams, clips, pages, setError, error, fetchMoreItems}}>
      {props.children}
    </TwitchContext.Provider>
  );
};

export default TwitchContextProvider;
