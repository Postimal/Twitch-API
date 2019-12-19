import React from 'react'

 const ClipList = ({clips}) => {
    return (
        <div className="top-clips-container">
        { clips? 
          clips.map(clip => (
              <div
                className="top-clips-container-item"
                key={clip.broadcaster_id}
              >
                <iframe
                  src={clip.embed_url.concat("&autoplay=false")}
                  title={clip.title}
                  width="360"
                  height="240"
                  frameBorder="0"
                  scrolling="no"
                  allowFullScreen={true}
                />
              </div>
            ))
          : null}
      </div>
    )
}

export default ClipList;
