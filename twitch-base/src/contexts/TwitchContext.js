import React, { createContext, useEffect, useState, useReducer } from "react";
import { twitchReducer } from "../reducers/twitchReducer";
import api from "../api";
import { getImage, getThumbnail, getThumbnailURL } from "../utils";

export const TwitchContext = createContext();

const TwitchContextProvider = props => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState("");
  const [streams, setStreams] = useState([]);
  const [clips, setClips] = useState([]);
  const [choosenStreams, setChoosenStreams] = useState([]);

  const [userID, setUserID] = useState("");
  const [userVideos, setUserVideos] = useState([]);
  const [userDetails, setUserDetails] = useState([]);

  const [isLoading, setIsLoading] = useState(true);
  // const [id, setID] = useState("32399");
  // const [id, dispatch] = useReducer(twitchReducer, "32399");

  // const [pages, dispatch] = useReducer(twitchReducer, 20);

  const dataInit = {
    id: "32399",
    pages: 20
  };

  const [idAndPages, dispatch] = useReducer(twitchReducer, dataInit);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);

      try {
        const games = await api.get("https://api.twitch.tv/helix/games/top");
        const streams = await api.get(
          `https://api.twitch.tv/helix/streams?first=${idAndPages.pages}`
        );
        const clips = await api.get(
          `https://api.twitch.tv/helix/clips?game_id=${idAndPages.id}&first=8`
        );
        const choosenStreams = await api.get(
          `https://api.twitch.tv/helix/streams?game_id=${idAndPages.id}`
        );

        let gamesArray = games.data.data;
        let streamsArray = streams.data.data;
        let choosenStreamsArray = choosenStreams.data.data;

        // eslint-disable-next-line
        let gamesArrayWithCertainImageSize = getImage(gamesArray); //getImage is imported from util.js
        // eslint-disable-next-line
        let streamsArrayWithCertainImageSize = getThumbnail(streamsArray);
        // eslint-disable-next-line
        let certainStreamsArrayWithCertainImageSize = getThumbnail(
          choosenStreamsArray
        );

        setGames(gamesArray);
        setStreams(streamsArray);
        setClips(clips.data.data);
        setChoosenStreams(choosenStreamsArray);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }
    };
    fetchData();
  }, [idAndPages]);

  const getUserData = async ID => {
    setIsLoading(true);

    try {
      // setUserID(ID);

      const userDetails = await api.get(
        `https://api.twitch.tv/helix/users?id=${ID}`
      );
      const userVideos = await api.get(
        `https://api.twitch.tv/helix/videos?user_id=${ID}`
      );

      let userVideosArray = userVideos.data.data.slice(1, 12);

      // eslint-disable-next-line
      let certainVideosArrayWithCertainImageSize = getThumbnailURL(
        userVideosArray
      );

      setUserDetails(userDetails.data.data);
      setUserVideos(userVideosArray);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  const handleChangeStreamID = id => {
    // setID(id);
    dispatch(id)
  };

  const { id, pages } = idAndPages;

  return (
    <TwitchContext.Provider
      value={{
        games,
        streams,
        clips,
        pages,
        error,
        choosenStreams,
        dispatch,
        handleChangeStreamID,
        id,
        isLoading,
        getUserData,
        userDetails,
        userVideos
      }}
    >
      {props.children}
    </TwitchContext.Provider>
  );
};

export default TwitchContextProvider;
