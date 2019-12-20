import React from 'react'

 const ClipList = ({clips, width, height}) => {
    return (
        <div className="top-clips-container">
        { clips? 
          clips.map(clip => (
              <div
                className="top-clips-container-item"
                key={clip.id}
              >
                <iframe
                  src={clip.embed_url.concat("&autoplay=false")}
                  title={clip.title}
                  width={width? width :"360"}
                  height={height? height :"240"}
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
