import React, { useContext } from 'react';
import { TwitchContext, } from "../../contexts/TwitchContext";
import './TopStreams.scss'
import StreamList from '../StreamList/StreamList';
import Spinner from '../Spinner/Spinner';


const TopStreams = () => {
    const { streams, dispatch } = useContext(TwitchContext);
    return (
        <div>
            <h2 className="title">{streams.length} Most Popular Streams</h2>
            {streams.length === 0?
            (<Spinner />) :
            (<>
             <StreamList streams={streams}/>
            <button className="load-more-button" onClick={() => dispatch({type:'FETCH_MORE_ITEMS'})}>Load more</button>
            </>)
            }
           
        </div>
    )
}

export default  TopStreams;
