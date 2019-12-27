import React, { createContext, useEffect, useState, useReducer } from "react";
import { twitchReducer } from "../reducers/twitchReducer";
import api from "../api";
import { getImage, getThumbnail, getThumbnailURL} from "../utils";

export const TwitchContext = createContext();

const TwitchContextProvider = props => {
  const [games, setGames] = useState([]);
  const [error, setError] = useState('');
  const [streams, setStreams] = useState([]);
  const [clips, setClips] = useState([]);
  const [choosenStreams, setChoosenStreams] = useState([]);

  const [userID, setUserID] = useState('');
  const [userVideos, setUserVideos] = useState([]);
  const [userDetails, setUserDetails] = useState([]);

  const [isLoading, setIsLoading] = useState(true);

  const [id, setID] = useState('32399');

  const [pages, dispatch] = useReducer(twitchReducer, 20);

  // const [id, dispatch] = useReducer(reducer, initialState, init)

  useEffect(() => {
    const fetchData = async () => {

      setIsLoading(true);

      try {
        const games = await api.get("https://api.twitch.tv/helix/games/top");
        const streams = await api.get(`https://api.twitch.tv/helix/streams?first=${pages}`);
        const clips = await api.get(`https://api.twitch.tv/helix/clips?game_id=${id}&first=8`);
        const choosenStreams = await api.get(`https://api.twitch.tv/helix/streams?game_id=${id}`);
         

        // https://api.twitch.tv/helix/videos?user_id=118170488
        // https://api.twitch.tv/helix/users?id=44322889     "id": "419330868",
            // "login": "oneesportsgg",
            // "display_name": "oneesportsgg",
            // "type": "",
            // "broadcaster_type": "",
            // "description": "The Home of Esports",
            // "profile_image_url": "https://static-cdn.jtvnw.net/jtv_user_pictures/d3a2cd0e-538c-4ad4-9b16-3ce45e38fb77-profile_image-300x300.png",
            // "offline_image_url": "https://static-cdn.jtvnw.net/jtv_user_pictures/aceb4378-f378-4553-a6ce-0bcf84d9d1af-channel_offline_image-1920x1080.jpeg",
            // "view_count": 2615424

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
        setIsLoading(false);
  
      } catch (error) {
        setIsLoading(false);
        setError(error.message);
      }

    };
    fetchData();
  }, [pages, id]);


  const getUserData = async(ID) => {
    console.log(ID);
    setIsLoading(true);
   
      try {
        setUserID(ID);
      
        const userDetails = await api.get(`https://api.twitch.tv/helix/users?id=${ID}`);
        const userVideos = await api.get(`https://api.twitch.tv/helix/videos?user_id=${ID}`);

        let userVideosArray = userVideos.data.data;

          // eslint-disable-next-line
        let certainVideosArrayWithCertainImageSize = getThumbnailURL(userVideosArray);

        setUserDetails(userDetails.data.data);
        setUserVideos(userVideosArray);
        setIsLoading(false);
        
      }
      catch (error) {
        setIsLoading(false);
        setError(error.message)
      }
  }

  // changed it to work with using useReducer and dispatching an action
  // const fetchMoreItems = () => {   
  //   setPages(pages + 8)
  // }

  const handleChangeStreamID = (id) => {
    setID(id)
  }

  return (
    <TwitchContext.Provider value={{ 
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
