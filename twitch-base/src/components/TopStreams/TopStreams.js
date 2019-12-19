import React, { useContext } from 'react';
import { TwitchContext, } from "../../contexts/TwitchContext";
import './TopStreams.scss'
import StreamList from '../StreamList/StreamList';


const TopStreams = () => {
    const { streams, dispatch } = useContext(TwitchContext);
    return (
        <div>
            {console.log(streams)}
            <h2 className="title">{streams.length} Most Popular Streams</h2>
            <StreamList streams={streams}/>
            <button className="load-more-button" onClick={() => dispatch({type:'FETCH_MORE_ITEMS'})}>Load more</button>
        </div>
    )
}

export default  TopStreams;
