import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TwitchContext } from '../../contexts/TwitchContext';
import './StreamList.scss';


 const StreamList = ({streams, length}) => {
     const { getUserData } = useContext(TwitchContext);
    return (
            <div className="top-streams-container">
                {length?
                (
                    streams.slice(0,8).map(stream => (
                <Link
                    to={`/channel`}
                    className="top-streams-container-item"
                    key={stream.id}
                    onClick={ ()=> getUserData(stream.user_id)}
                    // onClick={ ()=> dispatch({type:'FETCH_USER_DATA', id:stream.user_id})}
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
                ))
                
                ):
                (
                    streams.map(stream => (
                <Link
                    to={`/channel`}
                    className="top-streams-container-item"
                    key={stream.id}
                    onClick={ ()=> getUserData(stream.user_id)}
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
                ))
                )}
                
                
            </div>
    )
}

export default StreamList