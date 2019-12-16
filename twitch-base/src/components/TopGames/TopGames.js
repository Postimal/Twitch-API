import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api';
import { TwitchContext, } from "../../contexts/TwitchContext";
import './TopGames.scss'


const TopGames = () => {
    const { ss, setSs } = useState([]);
    const { games, error, setError } = useContext(TwitchContext);

    // useEffect(() => {
    //     const fetchDat = async () => {
    //         try {
    //           const streams = await api.get(`https://api.twitch.tv/helix/streams?game_id=32399`);
    //         //   let gameArray = games.data.data;

    //           setStreams(streams.data.data);
            
    //         } catch (error) {
    //           setError(error.message);
    //         }
    //     };
    //     console.log('pobieram dane z topgames',streams)
    //     fetchDat();
    // },[streams]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            // const games = await api.get("https://api.twitch.tv/helix/games/top");
            // const streams = await api.get(`https://api.twitch.tv/helix/streams?first=${pages}`);
            const ss = await api.get("https://api.twitch.tv/helix/streams?game_id=32399");
      
      
      
      
            setSs(ss.data.data);
            console.log("pobieram dane z top games")
      
          } catch (error) {
            setError(error.message);
          }
    
        };
        fetchData();
      });

    return (
        <div>
            {console.log(ss)}
            <h2 className="title">Most Popular Games</h2>
            <div className="top-games-container">
                {games.slice(0, 10).map(game => (
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
        </div>
    )
}

export default  TopGames;