import React from 'react';
import { Link } from 'react-router-dom';

 const StreamList = ({streams, length}) => {
    return (
            <div className="top-streams-container">
                {length?
                (
                    streams.slice(0,8).map(stream => (
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
                ))
                
                ):
                (
                    streams.map(stream => (
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
                ))
                )}
                
                
            </div>
    )
}

export default StreamList