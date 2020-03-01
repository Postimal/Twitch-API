import React, { createContext, useEffect, useReducer } from "react";
import { twitchReducer } from "../reducers/twitchReducer";
import api from "../api";
import { getImage, getThumbnail, getThumbnailURL, dataInit } from "../utils";

export const TwitchContext = createContext();

const TwitchContextProvider = props => {
  const [store, dispatch] = useReducer(twitchReducer, dataInit);

  const {
    id,
    pages,
    games,
    streams,
    clips,
    choosenStreams,
    error,
    isLoading,
    userVideos,
    userDetails
  } = store;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const games = await api.get("https://api.twitch.tv/helix/games/top");
        const streams = await api.get(`https://api.twitch.tv/helix/streams?first=${pages}`);
        const clips = await api.get(`https://api.twitch.tv/helix/clips?game_id=${id}&first=8`);
        const choosenStreams = await api.get(`https://api.twitch.tv/helix/streams?game_id=${id}`);

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

        dispatch({ type: "GET_GAMES", payload: gamesArray });
        dispatch({ type: "GET_STREAMS", payload: streamsArray });
        dispatch({ type: "GET_CLIPS", payload: clips.data.data });
        dispatch({ type: "GET_CHOOSEN_STREAMS", payload: choosenStreamsArray });
        dispatch({ type: "FINISH_LOADING" });
      } catch (error) {
        dispatch({ type: "FINISH_LOADING" });
        dispatch({ type: "SET_ERROR", payload: error.message });
      }
    };
    fetchData();
  }, [id, pages]);

  const getUserData = async ID => {
    dispatch({type:'FETCHING_DATA'})

    try {
      const userDetails = await api.get(`https://api.twitch.tv/helix/users?id=${ID}`);
      const userVideos = await api.get(`https://api.twitch.tv/helix/videos?user_id=${ID}`);

      let userVideosArray = userVideos.data.data.slice(1, 12);
      // eslint-disable-next-line
      let certainVideosArrayWithCertainImageSize = getThumbnailURL(
        userVideosArray
      );

      dispatch({type:"GET_USER_DETAILS", payload: userDetails.data.data})
      dispatch({type:"GET_USER_VIDS", payload: userVideosArray})
      dispatch({ type: "FINISH_LOADING" });
    } catch (error) {
      dispatch({ type: "FINISH_LOADING" });
      dispatch({ type: "SET_ERROR", payload: error.message });
    }
  };

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
