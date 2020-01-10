import React, { useContext } from 'react';
import { TwitchContext } from '../../contexts/TwitchContext';
import { Link } from "react-router-dom";


const GameList = ({games}) => {
  const {handleChangeStreamID} = useContext(TwitchContext);
  
    return (
        <div className="top-games-container">
        {games.slice(0, 9).map(game => (
          <Link
            to={`/top-games`}
            className="top-games-container-item"
            key={game.id}
            onClick={()=>handleChangeStreamID(game.id)}
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
    )
}

export default GameList;
