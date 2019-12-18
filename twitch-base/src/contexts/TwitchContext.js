import React, { createContext, useEffect, useState } from "react";
// import { twitchReducer } from "../reducers/twitchReducer";
import api from "../api";
import { getImage, getThumbnail} from "../utils";

export const TwitchContext = createContext();

const TwitchContextProvider = props => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState('');
  const [streams, setStreams] = useState([]);
  const [clips, setClips] = useState([]);
  const [choosenStreams, setChoosenStreams] = useState([]);

  const [id, setID] = useState('32399');
  const[pages, setPages] = useState(20);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const games = await api.get("https://api.twitch.tv/helix/games/top");
        const streams = await api.get(`https://api.twitch.tv/helix/streams?first=${pages}`);
        const clips = await api.get("https://api.twitch.tv/helix/clips?game_id=32399&first=4");
        const choosenStreams = await api.get(`https://api.twitch.tv/helix/streams?game_id=${id}`);

        let gamesArray = games.data.data;
        let streamsArray = streams.data.data;
        let choosenStreamsArray = choosenStreams.data.data;
  
        // eslint-disable-next-line
        let gamesArrayWithCertainImageSize = getImage(gamesArray); //getImage is imported from util.js
        // eslint-disable-next-line
        let streamsArrayWithCertainImageSize = getThumbnail(streamsArray);
        // eslint-disable-next-line
        let certainStreamsArrayWithCertainImageSize = getThumbnail(choosenStreamsArray);
  
        setGames(gamesArray);
        setStreams(streamsArray);
        setClips(clips.data.data);
        setChoosenStreams(choosenStreamsArray);
  
      } catch (error) {
        setError(error.message);
      }

    };
    fetchData();
  }, [pages, id]);

  const fetchMoreItems = () => {
    setPages(pages + 8)
  }

  const handleChangeStreamID = (id) => {
    setID(id)
  }

  return (
    <TwitchContext.Provider value={{ games, streams, clips, pages, error, choosenStreams, fetchMoreItems, handleChangeStreamID, id}}>
      {props.children}
    </TwitchContext.Provider>
  );
};

export default TwitchContextProvider;
