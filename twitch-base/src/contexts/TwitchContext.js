import React, { createContext, useReducer, useEffect, useState } from "react";
// import { twitchReducer } from "../reducers/twitchReducer";
import api from "../api";
import { getImage, getThumbnail } from "../utils";

export const TwitchContext = createContext();

const TwitchContextProvider = props => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");
  const [streams, setStreams] = useState([]);
  const [videos, setVideos] = useState([]);

  const fetchData = async () => {
    try {
      const games = await api.get("https://api.twitch.tv/helix/games/top");
      const streams = await api.get("https://api.twitch.tv/helix/streams");
      const videos = await api.get(
        "https://api.twitch.tv/helix/clips?game_id=32399&first=2"
      );

      let gamesArray = games.data.data;
      let streamsArray = streams.data.data;
      // eslint-disable-next-line
      let finalArray = getImage(gamesArray); //getImage is imported from util.js
      // eslint-disable-next-line
      let secondArray = getThumbnail(streamsArray);

      setGames(games.data.data);
      setStreams(streams.data.data);
      setVideos(videos.data.data);

    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <TwitchContext.Provider value={{ games, streams, videos }}>
      {props.children}
    </TwitchContext.Provider>
  );
};

export default TwitchContextProvider;
