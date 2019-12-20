import React, { useContext } from 'react';
import { TwitchContext, } from "../../contexts/TwitchContext";
import './TopGames.scss'
import StreamList from '../StreamList/StreamList';
import ClipList from '../ClipsList/ClipsList';


const TopGames = () => {
  const {games, choosenStreams, clips, handleChangeStreamID,id} = useContext(TwitchContext)

  const findGameName = games.find(game => game.id === id)
   
    return (
        <div className="games-component">
            <h2 className="title">Most Popular Games</h2>
            <div className="top-games-container">
                {games.slice(0, 10).map(game => (
                <div
                    className={id=== game.id?'top-games-container-item is-active':'top-games-container-item'}
                    key={game.id}
                    onClick={() => handleChangeStreamID(game.id)}
                >
                <img
                    className="top-games-container-item__img"
                    src={game.box_art_url}
                    alt="game"
                />
                <div className="top-games-container-item__name">{game.name}</div>
                </div>
                ))}
            </div>
                <h3 className="title">Streams and Top Clips for <br></br><br></br> {findGameName? findGameName.name.toUpperCase(): null}{' '}({choosenStreams.length})</h3>
            <div className="top-stream-and-clips-wrapper">
                <StreamList streams={choosenStreams}/>
                <ClipList clips={clips} height={'300'} width={'500'}/>
            </div>
           
        </div>
    )
}

export default  TopGames;