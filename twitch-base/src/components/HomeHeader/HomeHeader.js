import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api';
import './HomeHeader.scss';

const HomeHeader = () => {
    const [games,setGames] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await api.get('https://api.twitch.tv/helix/games/top');
            console.log(result.data);

            let dataArray = result.data.data
            let finalArray = dataArray.map(game => {
                let newURL = game.box_art_url.replace('{width}','120').replace('{height}','150');
                game.box_art_url = newURL;
            })
            setGames(result.data.data)
        };

        fetchData();
      
    },[])
    return (
        <div className="top-games-container">
            {games.map(game =>
            <Link to={`/game/streams/${game.id}`} className="top-games-container-item" key={game.id}>
                <img className="top-games-container-item__img" src={game.box_art_url} alt="game photo" />
                <div className="top-games-container-item__name">{game.name}</div>
            </Link>
           
            
            )}
        </div>
    )
}

export default HomeHeader
