import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api';
import { getImage, getThumbnail } from '../../utils';
import './HomeHeader.scss';

const HomeHeader = () => {
    const [games,setGames] = useState([]);
    const [error,setError] = useState('');
    const [streams,setStreams] = useState([]);
    const [videos,setVideos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
           try { 
                const games = await api.get('https://api.twitch.tv/helix/games/top');
                const streams = await api.get('https://api.twitch.tv/helix/streams');
                const videos = await api.get('https://api.twitch.tv/helix/clips?game_id=32399&first=5')
                console.log(videos.data.data);

            let gamesArray = games.data.data;
            let streamsArray = streams.data.data
            // eslint-disable-next-line
            let finalArray = getImage(gamesArray) //getImage is exported from util.js
            // eslint-disable-next-line
            let secondArray = getThumbnail(streamsArray)
           
            setGames(games.data.data);
            setStreams(streams.data.data);
            setVideos(videos.data.data);

        } catch (error) {
            setError(error.message);
        }

           
        };

        fetchData();
      
    },[])
    

    return (
        <>
        <h1 className="title">Top Stream Games</h1>
        <div className="top-games-container">
            {games.slice(0,8).map(game =>
            <Link to={`/game/${game.id}`} className="top-games-container-item" key={game.id}>
                <img className="top-games-container-item__img" src={game.box_art_url} alt="game" />
                <div className="top-games-container-item__name">{game.name}</div>
            </Link>
            )}
        </div>
        <hr className="separator"/>
        {console.log(videos)}
        <h1 className="title">Most Popular Streams</h1>
        <div className="top-streams-container">
            {streams.slice(0,8).map(stream =>
            <Link to={`/streams/${stream.id}`} className="top-streams-container-item" key={stream.id}>
                <img className="top-streams-container-item__img" src={stream.thumbnail_url} alt="game" />
                <div className="top-streams-container-item__title">{stream.title}</div>
                <div className="top-streams-container-item__name">{stream.user_name}</div>
                <div className="top-streams-container-item__viewers">{stream.viewer_count} viewers</div>
                <div className="top-streams-container-item__live">{stream.type}</div>
            </Link>
            )}
        </div>
        <hr className="separator"/>
        <div className="top-clips-container">
             {
             videos? videos.map( video =>
                 <Link>
                    <iframe
                    key={video.broadcast_id}
                    src={video.embed_url.concat('&autoplay=false')}
                    title={video.title}
                    width='640'
                    height='400'
                    frameBorder='0'
                    scrolling='no'
                    allowFullScreen={true}
                    />
                    <div className="clips-container-item__video">{video.broadcaster_name}</div>
                 </Link>
             )
            :
            null
            }
        </div>
        </>
    )
}

export default HomeHeader
