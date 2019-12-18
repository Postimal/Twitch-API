import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { TwitchContext, } from "../../contexts/TwitchContext";
import './TopGames.scss'


const TopGames = () => {
  const {games, choosenStreams, handleChangeStreamID,id} = useContext(TwitchContext)
   
    return (
        <div>
            {console.log(games)}

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
            <div className="top-streams-container">
                {choosenStreams.map(stream => (
                <Link
                    to={`/streams/${stream.id}`}
                    className="top-streams-container-item"
                    key={stream.id}
                >
                    <img
                    className="top-streams-container-item__img"
                    src={stream.thumbnail_url}
                    alt="game"
                    />
                    <div className="top-streams-container-item__title">
                    {stream.title}
                    </div>
                    <div className="top-streams-container-item__name">
                    {stream.user_name}
                    </div>
                    <div className="top-streams-container-item__viewers">
                    {stream.viewer_count} viewers
                    </div>
                    <div className="top-streams-container-item__live">
                    {stream.type}
                    </div>
                </Link>
                ))}
            </div>
        </div>
    )
}

export default  TopGames;