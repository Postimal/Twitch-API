import React, { useContext } from 'react';
import { TwitchContext, } from "../../contexts/TwitchContext";
import './TopStreams.scss'
import StreamList from '../StreamList/StreamList';
import Spinner from '../Spinner/Spinner';


const TopStreams = () => {
    const { streams, dispatch } = useContext(TwitchContext);

    function addMoreItems(){
        dispatch({type:'FETCH_MORE_ITEMS', payload: 8})
    }

    return (
        <div>
            <h2 className="title">{streams.length} Most Popular Streams</h2>
            {streams.length === 0?
            (<Spinner />) :
            (<>
             <StreamList streams={streams}/>
            <button className="load-more-button" onClick={() =>addMoreItems()}>Load more</button>
            </>)
            }

        </div>
    )
}

export default  TopStreams;
