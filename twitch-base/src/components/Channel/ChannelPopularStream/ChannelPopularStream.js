import React from 'react';

const ChannelPopularStream = ({mostPopularStream}) => {
    return (
        <a  style={{display:'block'}}
            href={`${mostPopularStream.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="top-streams-container-item"
        >
                    <img
                    className="top-streams-container-item__img"
                    src={mostPopularStream.thumbnail_url}
                    alt="game"
                    />
                    <div className="top-streams-container-item__title">
                    {mostPopularStream.title}
                    </div>
                    <div className="top-streams-container-item__name">
                    {mostPopularStream.user_name}
                    </div>
                    <div className="top-streams-container-item__viewers">
                    {mostPopularStream.view_count} views
                    </div>
                    <div className="top-streams-container-item__live">
                    {mostPopularStream.type}
                    </div>
        </a>
    )
}

export default ChannelPopularStream
