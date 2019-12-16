import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TwitchContext, } from "../../contexts/TwitchContext";
import './TopStreams.scss'


const TopStreams = () => {
    const { streams, fetchMoreItems } = useContext(TwitchContext);
    return (
        <div>
            <h2 className="title">Most Popular Streams</h2>
            <div className="top-streams-container">
                {streams.map(stream => (
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
            <button className="load-more-button" onClick={fetchMoreItems}>Load more</button>
        </div>
    )
}

export default  TopStreams;
